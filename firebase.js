// ============================================================
//  BarcodeHalal — firebase.js
//  Firebase altyapı dosyası.
//
//  Bu dosya SADECE Firebase'i başlatır ve global nesneleri
//  window.FB_* altında dışa aktarır.
//  Mevcut app.js ve products.js dosyalarına dokunmaz.
//
//  Yükleme sırası (index_new.html):
//    1. products.js
//    2. firebase.js   ← bu dosya
//    3. app.js
//
//  ileride bağlanacak servisler:
//    - window.FB_DB   → Firestore (ürün bildirimleri, scan logları)
//    - window.FB_STORAGE → Storage  (bildirim fotoğrafları)
//    - window.FB_AUTH → Auth        (admin paneli girişi)
// ============================================================

(function () {
  'use strict';

  // ── 1. Firebase Config ────────────────────────────────────
  // TODO: Aşağıdaki değerleri Firebase Console → Proje Ayarları →
  //       "Web uygulaması ekle" bölümünden alıp doldurun.
  const FIREBASE_CONFIG = {
  apiKey:            'AIzaSyA2-Fjh4TcWlJsG7U-grgGFrGg-hD1fa8',
  authDomain:        'barcodehalal.firebaseapp.com',
  projectId:         'barcodehalal',
  storageBucket:     'barcodehalal.firebasestorage.app',
  messagingSenderId: '898960924803',
  appId:             '1:898960924803:web:52507cbabf56d427953bb6',
};

  // Config doldurulmamışsa Firebase'i yükleme — konsola bilgi ver
  const _configured = FIREBASE_CONFIG.apiKey !== 'YOUR_API_KEY';

  if (!_configured) {
    console.info(
      '[BarcodeHalal] firebase.js: Config henüz doldurulmadı. ' +
      'Firebase servisleri devre dışı. ' +
      'firebase.js içindeki FIREBASE_CONFIG objesini güncelleyin.'
    );
    // Dummy nesneler — app.js bu isimlere referans verse bile crash olmaz
    window.FB_APP     = null;
    window.FB_DB      = null;
    window.FB_STORAGE = null;
    window.FB_AUTH    = null;
    window.FB_READY   = false;
    return;
  }

  // ── 2. Firebase SDK'yı yükle (CDN, modular v9 compat) ───────
  // Modular v9 yerine compat katmanı kullanıyoruz:
  // App.js'te window.FB_* üzerinden doğrudan erişilebilir, import gerekmez.
  const CDN = 'https://www.gstatic.com/firebasejs/10.12.2/firebase-';
  const SDK_MODULES = [
    { url: CDN + 'app-compat.js',        key: 'app' },
    { url: CDN + 'firestore-compat.js',  key: 'firestore' },
    { url: CDN + 'storage-compat.js',    key: 'storage' },
    { url: CDN + 'auth-compat.js',       key: 'auth' },
  ];

  function _loadScript(src) {
    return new Promise(function (resolve, reject) {
      if (document.querySelector('script[src="' + src + '"]')) {
        resolve(); return;
      }
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = function () {
        reject(new Error('Firebase SDK yüklenemedi: ' + src));
      };
      document.head.appendChild(s);
    });
  }

  // ── 3. Sıralı yükleme → başlatma ────────────────────────────
  SDK_MODULES.reduce(function (chain, mod) {
    return chain.then(function () { return _loadScript(mod.url); });
  }, Promise.resolve())
    .then(function () {
      // firebase-app-compat yüklendikten sonra firebase global hazır
      if (!window.firebase) throw new Error('window.firebase bulunamadı');

      // Daha önce başlatılmışsa yeniden başlatma
      var app = window.firebase.apps.length
        ? window.firebase.app()
        : window.firebase.initializeApp(FIREBASE_CONFIG);

      // ── Servis referansları ──────────────────────────────────
      var db      = window.firebase.firestore();
      var storage = window.firebase.storage();
      var auth    = window.firebase.auth();

      // ── Firestore offline cache (isteğe bağlı) ──────────────
      // Kısa süreli offline destek — sayfa yenilemeden önce okunan
      // veriler cache'den gelir.
      db.enablePersistence({ synchronizeTabs: true })
        .catch(function (err) {
          // Birden fazla sekme veya özel mod: sessizce geç
          if (err.code !== 'failed-precondition' && err.code !== 'unimplemented') {
            console.warn('[BarcodeHalal] Firestore persistence:', err.code);
          }
        });

      // ── Global dışa aktarım ──────────────────────────────────
      window.FB_APP     = app;
      window.FB_DB      = db;
      window.FB_STORAGE = storage;
      window.FB_AUTH    = auth;
      window.FB_READY   = true;

      console.info(
        '[BarcodeHalal] Firebase hazır. ' +
        'Project: ' + FIREBASE_CONFIG.projectId
      );

      // ── İleride bağlanacak hook noktaları ────────────────────
      // Bu fonksiyonlar app.js'teki ilgili noktalardan çağrılacak.
      // Şimdilik sadece tanımlanmış, içleri boş.

      /**
       * Scan logu — kullanıcı barkod taradığında çağrılacak.
       * @param {string} barcode
       * @param {string} verdict  'halal' | 'haram' | 'mushbooh' | 'unknown'
       * @param {string} source   'BRAND_DB' | 'EXTRA_DB' | 'AI' | 'OFF'
       */
      window.FB_logScan = function (barcode, verdict, source) {
        // TODO: db.collection('scan_logs').add({...})
      };

      /**
       * Ürün bildirimi — submitReport() başarıyla tamamlandığında çağrılacak.
       * @param {Object} reportData  FormData içeriği (plain object olarak)
       */
      window.FB_saveReport = function (reportData) {
  if (typeof db === 'undefined' || !window.FB_READY) {
    return Promise.reject(new Error('Firebase/Firestore hazır değil.'));
  }

  return db.collection('reports').add(
    Object.assign({}, reportData, {
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      status: reportData.status || 'pending',
      source: reportData.source || 'user_report',
    })
  );
};

      /**
       * Bildirim fotoğrafı yükle — Storage'a.
       * @param {File}   file
       * @param {string} reportId
       * @returns {Promise<string>} download URL
       */
      window.FB_uploadPhoto = function (file, reportId) {
        // TODO: storage.ref('reports/' + reportId + '/' + file.name).put(file)
        return Promise.resolve(null);
      };

      /**
       * Admin girişi — Auth ile.
       * @param {string} email
       * @param {string} password
       * @returns {Promise}
       */
      window.FB_adminSignIn = function (email, password) {
        // TODO: auth.signInWithEmailAndPassword(email, password)
        return Promise.resolve(null);
      };

      /**
       * Admin çıkışı.
       * @returns {Promise}
       */
      window.FB_adminSignOut = function () {
        // TODO: auth.signOut()
        return Promise.resolve(null);
      };

    })
    .catch(function (err) {
      console.error('[BarcodeHalal] Firebase başlatılamadı:', err.message);
      window.FB_APP     = null;
      window.FB_DB      = null;
      window.FB_STORAGE = null;
      window.FB_AUTH    = null;
      window.FB_READY   = false;
    });

})();
