
const BRAND_DB = {
  // Nutella / Ferrero — barkod: 3017620422003
  '3017620422003': {
    brand: 'Ferrero / Nutella',
    product: 'Nutella 400g',
    logo: '🍫',
    verdict: 'halal',
    score: 78,
    certifications: ['Halal certified in Australia (AFIC)', 'Halal certified in Malaysia & Indonesia', 'Most Ferrero factories halal-certified (19/25 as of 2020)'],
    companyStatement: "Nutella® is Halal certified. Ferrero's halal journey began in 2009 and by 2020 covers 19 of 25 factories globally. All products in the Middle East are halal-certified.",
    source: 'Ferrero Food Service Official FAQ',
    warning: 'Europe & North America: Not officially certified in all markets. Some scholars debate trace vanilla extract. Check local packaging for halal logo.',
    ingredients: ['Sugar', 'Palm Oil (RSPO-certified)', 'Hazelnuts 13%', 'Skim Milk Powder', 'Cocoa 7.4%', 'Lecithin (Soya)', 'Vanillin'],
    ingredientFlags: []
  },
  // Haribo Goldbears Germany — barkod örneği
  '4001686301470': {
    brand: 'Haribo',
    product: 'Goldbears (Germany/Europe)',
    logo: '🐻',
    verdict: 'haram',
    score: 5,
    certifications: [],
    companyStatement: 'Haribo products in Germany and most of Europe are made with PORK SKIN GELATIN (Schweinegelatine). Haribo Germany officially states: "The HARIBO items containing gelatine available in Germany are primarily produced with pork skin gelatine."',
    source: 'Haribo Official FAQ — haribo.com',
    warning: '⛔ HARAM: Contains pork gelatin. Only Haribo produced in Turkey (with "Made in Turkey" label) is halal-certified by EHZ and TSE.',
    ingredients: ['Glucose Syrup', 'Sugar', 'Gelatin (PORK)', 'Dextrose', 'Citric Acid', 'Fruit Juice Concentrates', 'Vegetable Oil', 'Carnauba Wax'],
    ingredientFlags: ['Gelatin (PORK) — E441 — HARAM']
  },
  // Coca-Cola — barkod: 5449000000996
  '5449000000996': {
    brand: 'The Coca-Cola Company',
    product: 'Coca-Cola Classic',
    logo: '🥤',
    verdict: 'halal',
    score: 88,
    certifications: ['Halal certified in Indonesia (MUI)', 'Halal certified in Malaysia', 'Recognized as permissible by scholars in 50+ countries'],
    companyStatement: 'Coca-Cola USA official reply: "Our products are non-intoxicating (no alcohol) and do not contain meat ingredients. Even if our soft drink products are not formally certified as halal, they are officially recognized and registered as nonalcoholic beverages." UK statement: "None of the products of Coca-Cola Great Britain contain ingredients derived from mammals."',
    source: 'Coca-Cola Official Twitter & GMWA Statement',
    warning: 'Not formally halal-certified in USA/Canada/Europe, but no haram ingredients confirmed. Certified in Muslim-majority countries.',
    ingredients: ['Carbonated Water', 'Sugar', 'Caramel Color E150d', 'Phosphoric Acid', 'Natural Flavors', 'Caffeine'],
    ingredientFlags: []
  },
  // Oreo — barkod: 7622210449283
  '7622210449283': {
    brand: 'Mondelēz International',
    product: 'Oreo Original',
    logo: '🍪',
    verdict: 'halal',
    score: 72,
    certifications: ['Halal certified by JAKIM in Malaysia', 'Halal certified by LPPOM MUI in Indonesia', 'Halal certified in UAE & Saudi Arabia (ESMA/GSO)'],
    companyStatement: 'Mondelēz official statement: "Oreo biscuits produced in Europe are not Halal certified but their composition or production process does not make them unsuitable for the Muslim diet." The company confirms no pork-derived ingredients or alcohol. UAE Ministry of Economy confirmed: "What has been circulated that Oreo contains pork and alcohol is incorrect."',
    source: 'Mondelēz International Official & UAE Ministry of Economy',
    warning: 'Not certified in USA, Canada or Europe. Exceptions: Oreo Strawberry Cheesecake, Oreo Choco Brownie, Oreo Enrobed — these MAY contain questionable ingredients.',
    ingredients: ['Wheat Flour', 'Sugar', 'Palm Oil', 'Rapeseed Oil', 'Cocoa Powder 4.3%', 'Wheat Starch', 'Glucose-Fructose Syrup', 'Soya Lecithin', 'Flavoring'],
    ingredientFlags: []
  },
  // KitKat — barkod: 7613034626844
  '7613034626844': {
    brand: 'Nestlé',
    product: 'KitKat 4-Finger',
    logo: '🍫',
    verdict: 'halal',
    score: 75,
    certifications: ['Halal certified in Malaysia & Indonesia', 'Halal certified in Australia (AFIC)', 'KitKat Gold, KitKat Chunky also halal-certified in AU (from April 2019)'],
    companyStatement: "Nestle official reply: Yes, our KitKats are suitable for a Halal diet. Nestle Canada: We don't facilitate halal certification but rely on home market certification for imported products. Ingredients in US/EU version contain no haram components.",
    source: 'Nestlé Official Customer Service & Chewwies Research',
    warning: "Nestle confirms ingredients vary by market. US KitKat produced by Hersheys — check local label. Not certified in all European markets.",
    ingredients: ['Sugar', 'Wheat Flour', 'Cocoa Butter', 'Skimmed Milk Powder', 'Cocoa Mass', 'Palm Oil', 'Lactose', 'Soy Lecithin', 'Yeast', 'Salt', 'Vanillin'],
    ingredientFlags: []
  },
  // Pringles Original — barkod: 5053990101066
  '5053990101066': {
    brand: "Kellanova (Kellogg's)",
    product: 'Pringles Original',
    logo: '🥔',
    verdict: 'halal',
    score: 80,
    certifications: ['Halal certified in Malaysia & Muslim-majority countries', 'Original flavor considered halal-suitable in EU'],
    companyStatement: 'Kellanova has stated their commitment to providing halal-certified products. Pringles Original (plain) contains no animal-derived ingredients. However, halal certification is not universal — some flavors (BBQ, Sour Cream, Bacon) may contain non-halal ingredients.',
    source: 'Kellanova / HalalGaze Research',
    warning: '⚠️ Flavor-dependent: Original = safe. Avoid: Smoked Bacon, some BBQ flavors. Always check specific flavor packaging.',
    ingredients: ['Dried Potatoes', 'Vegetable Oils', 'Degerminated Milled Corn', 'Wheat Starch', 'Rice Flour', 'Salt', 'Dextrose'],
    ingredientFlags: []
  },
  // Toblerone — barkod: 7622300441937
  '7622300441937': {
    brand: 'Mondelēz International',
    product: 'Toblerone Original',
    logo: '🍫',
    verdict: 'halal',
    score: 92,
    certifications: ['Halal certified — Bern Switzerland factory (April 2018)', 'Also Kosher certified'],
    companyStatement: 'Mondelēz official CNN statement: "The certification did not result in any change to our beloved traditional Toblerone original recipe. Due to the inherent nature of Toblerone chocolate its production process essentially meets the halal criteria anyway."',
    source: 'Mondelēz International — CNN & Global News (Dec 2018)',
    warning: 'Recipe unchanged — always was halal-suitable. Factory officially certified since April 2018.',
    ingredients: ['Sugar', 'Whole Milk Powder', 'Cocoa Butter', 'Cocoa Mass', 'Honey 3.6%', 'Almond 6%', 'Egg White', 'Nougat'],
    ingredientFlags: []
  },
  // Ferrero Rocher — barkod: 3017620401139
  '3017620401139': {
    brand: 'Ferrero',
    product: 'Ferrero Rocher',
    logo: '🍬',
    verdict: 'halal',
    score: 82,
    certifications: ['Halal certified in Malaysia & Indonesia', 'Halal certified in Australia (AFIC)', 'Halal certified in Gulf countries'],
    companyStatement: 'Ferrero official FAQ 2024: "Some of our products are certified halal in specific markets such as Malaysia and Indonesia. Our halal journey began in 2009. By 2020, 19 of our 25 factories are halal-certified." IlmHub confirmed: Ferrero Rocher is halal and permissible when produced in Canada, US, Germany & Italy.',
    source: 'Ferrero Official FAQ 2024 & Salaam Gateway',
    warning: 'Check packaging for halal logo in your market. Shared factories may process non-halal Ferrero lines (Mon Chéri contains alcohol).',
    ingredients: ['Milk Chocolate', 'Sugar', 'Hazelnuts 30%', 'Wheat Flour', 'Skim Milk Powder', 'Whey Powder', 'Cocoa Butter', 'Soy Lecithin', 'Vanillin'],
    ingredientFlags: []
  },
  // Kinder Bueno — barkod: 8000500103838
  '8000500103838': {
    brand: 'Ferrero / Kinder',
    product: 'Kinder Bueno',
    logo: '🍫',
    verdict: 'halal',
    score: 78,
    certifications: ['Ferrero confirmed suitable for halal diet', 'Halal certified in Malaysia & Gulf countries'],
    companyStatement: 'Ferrero confirmed directly to theHalalLife.co.uk (Mar 2024): Kinder Bueno is suitable for a halal diet. No pork derivatives, no alcohol. Lecithin used is soy-based.',
    source: 'The Halal Life UK — Ferrero Direct Confirmation (Mar 2024)',
    warning: 'Not officially certified in all European markets. Kinder Delice in France may contain "arome" — check local packaging.',
    ingredients: ['Sugar', 'Wheat Flour', 'Palm Oil', 'Hazelnuts', 'Cocoa Butter', 'Skim Milk Powder', 'Cocoa Mass', 'Soy Lecithin', 'Vanillin'],
    ingredientFlags: []
  },
  // Maggi Instant Noodles — barkod: 7613034738158
  '7613034738158': {
    brand: 'Nestlé / MAGGI',
    product: 'Maggi Instant Noodles',
    logo: '🍜',
    verdict: 'halal',
    score: 90,
    certifications: ['Halal certified (official Maggi FAQ)', 'Kosher certified', 'Vegetarian certified'],
    companyStatement: 'MAGGI® Official FAQ: "Maggi® Instant Noodles are vegetarian, kosher and halal-certified! Our vegetarian foods contain ZERO meat, poultry, fish/seafood, and/or any ingredients derived from these sources, such as stock or broth, lard, gelatin, or collagen."',
    source: 'MAGGI® Official FAQ — goodnes.com',
    warning: 'Chicken flavor variants — verify halal cert on local packaging as chicken source may vary by country.',
    ingredients: ['Wheat Flour', 'Palm Oil', 'Salt', 'Sugar', 'Spices', 'Onion Powder', 'Garlic Powder'],
    ingredientFlags: []
  },
  // Lay's Original — barkod: 5053990108683
  '5053990108683': {
    brand: "PepsiCo / Lay's",
    product: "Lay's Classic Original",
    logo: '🥔',
    verdict: 'halal',
    score: 75,
    certifications: ['JAKIM certified in Malaysia', 'Halal certified in Pakistan (PepsiCo Pakistan)', 'Halal certified in UAE, Saudi Arabia, Egypt'],
    companyStatement: "PepsiCo Pakistan official statement: Lay's Snacks Pakistan strictly adheres to local food laws using only certified halal ingredients in all products. Original flavor (potato, oil, salt) contains no animal derivatives. JAKIM certified for Malaysia market.",
    source: 'PepsiCo Pakistan Official & AFP Fact Check 2020',
    warning: '⚠️ Flavor-dependent: Original = Halal. AVOID: Sour Cream, Bacon, some BBQ flavors in US/EU — may contain non-halal enzymes. Always check specific flavor packaging.',
    ingredients: ['Potatoes', 'Vegetable Oil (Sunflower/Corn)', 'Salt'],
    ingredientFlags: []
  },
  // Milka — barkod: 7622210012661
  '7622210012661': {
    brand: 'Mondelēz International',
    product: 'Milka Alpine Milk',
    logo: '🍫',
    verdict: 'mushbooh',
    score: 45,
    certifications: [],
    companyStatement: 'Milka customer service official response: "We do not have equipment that is used only for halal production. Furthermore, our products are not certified as halal." Mondelēz confirmed no dedicated halal production line for Milka.',
    source: 'Milka Official Customer Service Response',
    warning: '⚠️ NOT halal certified. Shared production lines with non-halal products. E476 emulsifier source unspecified. Suitable for vegetarians but NOT officially halal. Consult your scholar.',
    ingredients: ['Sugar', 'Whole Milk Powder', 'Cocoa Butter', 'Cocoa Mass', 'Wheat Flour', 'Whey Powder', 'Butterfat', 'E476 Emulsifier', 'Vanillin'],
    ingredientFlags: ['E476 — source unspecified (may be animal-derived)']
  },
  // KitKat Chunky — barkod: 8593893747614
  '8593893747614': {
    brand: 'Nestlé',
    product: 'KitKat Chunky',
    logo: '🍫',
    verdict: 'halal',
    score: 75,
    certifications: ['Halal certified in Australia (AFIC)', 'Halal certified in Malaysia'],
    companyStatement: 'Nestlé confirms KitKat Chunky is halal-certified in Australia and Malaysia. Suitable for halal diet.',
    source: 'Nestlé Official',
    warning: 'Verify local packaging for halal logo in your country.',
    ingredients: ['Sugar', 'Wheat Flour', 'Cocoa Butter', 'Skimmed Milk', 'Palm Oil', 'Soy Lecithin'],
    ingredientFlags: []
  },  // KitKat Chunky — son entry

  // M&M's — barkod: 0040000488064
  '0040000488064': {
    brand: "Mars Inc. / M&M's",
    product: "M&M's Milk Chocolate",
    logo: '🍬',
    verdict: 'mushbooh',
    score: 38,
    certifications: ['Halal certified in Malaysia & UAE (local packaging only)'],
    companyStatement: "M&M's official FAQ (Feb 2025): M&M'S are not certified as Halal or Kosher. However, they do not contain any pork-based ingredients. UK: M&M's UK Twitter stated products are not suitable for a halal diet — additives derived from animal products are used. UAE: products sold in UAE stores are confirmed halal by local authorities.",
    source: "Mars Official FAQ 2025 & M&M's UK Twitter Statement",
    warning: "⚠️ NOT halal certified in USA/UK/Europe. UK version contains E120 (carmine from insects) — HARAM. UAE/Malaysia versions are halal-certified. Always check country of manufacture on pack.",
    ingredients: ['Milk Chocolate', 'Sugar', 'Cocoa Butter', 'Skim Milk', 'Cocoa Mass', 'Soy Lecithin', 'E120 Carmine (in some regions)', 'Artificial Colors'],
    ingredientFlags: ['E120 Carmine — insect-derived — HARAM in some regional versions']
  },

  // Snickers — barkod: 0040000404651
  '0040000404651': {
    brand: 'Mars Wrigley / Snickers',
    product: 'Snickers Original',
    logo: '🍫',
    verdict: 'mushbooh',
    score: 55,
    certifications: ['Halal certified in MENA/Gulf region (Mars official)', 'Halal certified in Malaysia & Indonesia'],
    companyStatement: "Snickers MENA official website: Yes, all Snickers products sold in the MENA region are halal suitable. US: Snickers bars in the U.S. are not officially Halal-certified, but contain ingredients generally considered Halal (milk, eggs, peanuts, caramel). No gelatin in standard bar. Some hi-protein Snickers variants contain gelatin — avoid those.",
    source: 'Snickers MENA Official Site & CandyRetailer FAQ',
    warning: "⚠️ Mushbooh: No gelatin in classic bar, but NOT certified in USA/EU. MENA/Malaysia = certified halal. Avoid Snickers Hi-Protein — contains gelatin. Check pack for halal logo.",
    ingredients: ['Milk Chocolate', 'Peanuts', 'Caramel', 'Sugar', 'Palm Oil', 'Skim Milk', 'Egg Whites', 'Corn Syrup', 'Soy Lecithin', 'Salt'],
    ingredientFlags: ['Egg Whites — halal only if no non-halal processing', 'No halal cert in EU/USA']
  },

  // Twix — barkod: 0040000445365
  '0040000445365': {
    brand: 'Mars Wrigley / Twix',
    product: 'Twix Original',
    logo: '🍫',
    verdict: 'mushbooh',
    score: 52,
    certifications: ['Halal certified in UAE & MENA markets', 'Halal certified in Malaysia'],
    companyStatement: "Mars official position: Twix does not contain pork or alcohol, but Mars does not apply for halal certification globally. Vanilla used in certain Twix formulations confirmed by Mars NOT to use alcohol as carrier — removing a common concern. Standard Twix ingredient lists do not show gelatin, lard, or explicit animal-derived additives.",
    source: 'Mars Wrigley Official Statement & theHalalLife.co.uk Research',
    warning: "⚠️ Not universally halal-certified. Ingredient-compatible with halal diet in most regions, but no official cert in USA/EU. UAE/Malaysia = certified. Always check local packaging for halal logo.",
    ingredients: ['Milk Chocolate', 'Wheat Flour', 'Sugar', 'Palm Oil', 'Caramel', 'Skim Milk', 'Corn Syrup', 'Soy Lecithin', 'PGPR', 'Salt'],
    ingredientFlags: ['No halal cert in EU/USA — emulsifier source unconfirmed']
  },

  // Bounty — barkod: 5000159461122
  '5000159461122': {
    brand: 'Mars Wrigley / Bounty',
    product: 'Bounty Milk Chocolate',
    logo: '🥥',
    verdict: 'mushbooh',
    score: 58,
    certifications: ['Halal certified in UAE & Gulf countries', 'Halal certified in Malaysia & Indonesia'],
    companyStatement: "Mars confirms Bounty is halal-certified in Middle East and Gulf region. UK Halal & Haram Directory: Bounty Dark, Milk, Milk Twin and Funsize are listed as Halal. Note: Bounty Milk Miniatures and some Funsize varieties contain calf whey powder — check specific variant packaging.",
    source: 'Mars Official & UK Halal & Haram Directory',
    warning: "⚠️ Standard Bounty bars generally halal-suitable. Avoid: Bounty Milk Miniatures — contains calf whey. Always check variant — Milk, Dark = OK; Miniatures = verify.",
    ingredients: ['Coconut 28%', 'Sugar', 'Milk Chocolate', 'Glucose Syrup', 'Skimmed Milk Powder', 'Cocoa Butter', 'Cocoa Mass', 'Soy Lecithin', 'Salt'],
    ingredientFlags: ['Calf whey in Miniatures variant — check specific pack']
  },

  // Cadbury Dairy Milk — barkod: 7622210449009
  '7622210449009': {
    brand: 'Mondelēz / Cadbury',
    product: 'Cadbury Dairy Milk',
    logo: '🍫',
    verdict: 'mushbooh',
    score: 55,
    certifications: ['Halal certified in Malaysia (JAKIM)', 'Halal certified in South Africa (SANHA)', 'Halal certified in Australia (AFIC — by ingredients)'],
    companyStatement: "Cadbury UK official response: All Cadbury Dairy Milk lines in the UK are suitable for vegetarians but NOT registered as halal. Cadbury Australia: Halal suitable by ingredients. Malaysia: JAKIM certified. Note: Some Cadbury Roses/Heroes assortments may contain alcohol flavourings — avoid those specific varieties.",
    source: 'Cadbury Official Customer Service & belconi.com.my Research 2024',
    warning: "⚠️ UK/EU: Suitable for vegetarians but NOT officially halal certified. Malaysia/South Africa = certified. AVOID: Cadbury Rum & Raisin, Roses/Heroes assortments (may contain alcohol). Plain Dairy Milk = generally safe by ingredients.",
    ingredients: ['Sugar', 'Cocoa Butter', 'Cocoa Mass', 'Dried Whole Milk', 'Vegetable Fat', 'Emulsifiers (Soya Lecithin, E476)', 'Flavourings'],
    ingredientFlags: ['E476 — source unspecified in some markets', 'Alcohol flavourings in Rum & Raisin variant']
  },

  // Doritos Nacho Cheese — barkod: 0028400090094
  '0028400090094': {
    brand: 'PepsiCo / Frito-Lay',
    product: 'Doritos Nacho Cheese',
    logo: '🌮',
    verdict: 'haram',
    score: 10,
    certifications: ['Halal certified in UAE & Saudi Arabia (local formulation)', 'Halal certified in Canada (Nacho Cheese & Cool Ranch)'],
    companyStatement: "Frito-Lay North America official confirmation: Doritos Nacho Cheese and Cool Ranch contain animal-derived enzymes (porcine rennet) in the cheese seasoning. PepsiCo confirmed to Muslim consumers: products in UK, USA, and Canada are not halal certified due to cheese and whey ingredients containing animal enzymes. UAE/Saudi formulations are halal-certified under local authorities.",
    source: 'Frito-Lay Official Website & PepsiCo Consumer Affairs Confirmation',
    warning: "⛔ HARAM in USA/UK/EU: Contains pork-derived enzymes in cheese seasoning. AVOID in Western markets. UAE/Saudi Arabia/Canada versions may be halal-certified — check local pack. Spicy Sweet Chili flavor = vegan, generally safer.",
    ingredients: ['Corn', 'Vegetable Oil', 'Cheddar Cheese (Milk, Cheese Cultures, Salt, Enzymes)', 'Whey', 'Buttermilk', 'Monosodium Glutamate', 'Natural Flavors'],
    ingredientFlags: ['Enzymes in Cheese — porcine (pork) source confirmed by Frito-Lay in USA/UK', 'Whey — animal-derived']
  },

  // Red Bull — barkod: 9002490100070
  '9002490100070': {
    brand: 'Red Bull GmbH',
    product: 'Red Bull Energy Drink 250ml',
    logo: '🐂',
    verdict: 'halal',
    score: 82,
    certifications: ['IFANCA certified (USA)', 'HFA certified (UK)', 'Halal certified in Malaysia, UAE, Saudi Arabia'],
    companyStatement: "Red Bull International Customer Service official reply: Red Bull Energy Drink is a non-alcoholic beverage. The taurine in Red Bull is NOT derived from animals — it is produced synthetically by pharmaceutical companies, making it suitable for Muslim and vegetarian diets. Red Bull is registered as halal in multiple Muslim-majority countries.",
    source: 'Red Bull Official Customer Service & IFANCA Certification',
    warning: 'Standard Red Bull is halal. AVOID: Red Bull Editions containing wine/beer flavors (e.g. some limited editions). Always check flavor-specific packaging.',
    ingredients: ['Carbonated Water', 'Sucrose', 'Glucose', 'Citric Acid', 'Taurine (synthetic)', 'Sodium Bicarbonate', 'Magnesium Carbonate', 'Caffeine', 'Niacin', 'B Vitamins', 'Natural & Artificial Flavors'],
    ingredientFlags: []
  },

  // Pepsi — barkod: 5449000214911
  '5449000214911': {
    brand: 'PepsiCo',
    product: 'Pepsi Cola 330ml',
    logo: '🥤',
    verdict: 'halal',
    score: 87,
    certifications: ['Halal certified in Indonesia (MUI)', 'Halal certified in Malaysia (JAKIM)', 'Halal certified in Gulf countries', 'Recognized permissible in 40+ Muslim countries'],
    companyStatement: "PepsiCo confirms Pepsi-Cola contains no animal derivatives, no alcohol, and no pork products. Ingredients: carbonated water, sugar, caramel color (E150d), phosphoric acid, natural flavors, caffeine. Halal certified in Muslim-majority markets. Not formally certified in USA/EU but widely accepted as permissible by Islamic scholars.",
    source: 'PepsiCo Official & JAKIM Halal Directory',
    warning: 'Diet Pepsi and Pepsi Max: check local packaging as some sweetener sources may vary. Standard Pepsi = universally considered halal by ingredients.',
    ingredients: ['Carbonated Water', 'Sugar', 'Caramel Color E150d', 'Phosphoric Acid', 'Natural Flavors', 'Caffeine'],
    ingredientFlags: []
  },

  // Danone Activia Plain — barkod: 3033490004958
  '3033490004958': {
    brand: 'Danone / Activia',
    product: 'Activia Natural Yogurt',
    logo: '🥛',
    verdict: 'mushbooh',
    score: 48,
    certifications: ['Halal certified in Middle East & North Africa markets', 'Halal certified in Malaysia & Indonesia (select products)'],
    companyStatement: "Danone confirmed: Activia yogurts are halal-certified in Muslim-majority markets. However, in Western markets (UK, USA, France), Activia products are NOT halal certified and some variants — especially flavored/low-fat lines — contain Bovine Gelatin whose source is unverified. IlmHub Canada: Activia Low Fat Yogurt is Haram due to Bovine Gelatin.",
    source: 'Danone Official & IlmHub Halal Foods Research',
    warning: "⚠️ Critical: AVOID Activia flavored/low-fat variants in Western markets — contain unverified Bovine Gelatin. Plain/natural Activia in Muslim countries = halal certified. Always check packaging for gelatin source.",
    ingredients: ['Whole Milk', 'Skimmed Milk', 'Cream', 'Sugar', 'Bifidus ActiRegularis cultures', 'Gelatin (in some variants)'],
    ingredientFlags: ['Bovine Gelatin in flavored/low-fat variants — source unverified in Western markets']
  },

  // Alpro Oat Drink — barkod: 5411188121985
  '5411188121985': {
    brand: 'Danone / Alpro',
    product: 'Alpro Oat Original',
    logo: '🌾',
    verdict: 'halal',
    score: 91,
    certifications: ['Vegan certified (Vegan Society)', 'No animal ingredients', 'Widely accepted as halal by Islamic scholars'],
    companyStatement: "Alpro official: All Alpro products are 100% plant-based. Alpro Oat contains no animal-derived ingredients. While Alpro does not hold an official halal certification, all ingredients are plant-based and free from any haram substances. Widely recommended by halal food researchers as safe for Muslim consumers.",
    source: 'Alpro Official Website & Danone Consumer Affairs',
    warning: 'Alpro products are plant-based and generally safe. Always verify: no cross-contamination issues reported. Oat, Soy, Almond, Coconut = all plant-based = halal by ingredients.',
    ingredients: ['Water', 'Oat 10%', 'Sunflower Oil', 'Sea Salt', 'Calcium', 'Vitamins (D, B2, B12)'],
    ingredientFlags: []
  }
,
  // ============================================================
  // TELEGRAM KANAL VERİSİ — "Ich esse helal und gesund" grubu
  // 30 ürün/marka değerlendirmesi — topluluk onaylı
  // ============================================================
  "tg_katjes_tg_hal": {"product": "Katjes Jelibon (Vegan/Vegetarisch)", "brand": "Katjes", "store": "", "logo": "🍬", "verdict": "halal", "score": 88, "certifications": [], "companyStatement": "Katjes jelibonlar yenilebilir. Aromalarında sıkıntı yokmuş. Firma ile görüşülmüş.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "", "ingredients": [], "ingredientFlags": []},
  "tg_haribo_tg_hal": {"product": "Haribo Vegetarisch / Vegan", "brand": "Haribo", "store": "", "logo": "🐻", "verdict": "halal", "score": 85, "certifications": [], "companyStatement": "Haribo'nun Vegetarisch ya da Vegan çeşitleri yenebilir. Standart Haribo domuz jelatini içerir.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "", "ingredients": [], "ingredientFlags": []},
  "tg_haribo_tg_har": {"product": "Haribo (standart)", "brand": "Haribo", "store": "", "logo": "🐻", "verdict": "haram", "score": 5, "certifications": [], "companyStatement": "Standart Haribo ürünleri domuz jelatini içermektedir. Vegetarisch veya Vegan etiketli olanlar tercih edilmeli.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "❌ Haram: Domuz jelatini içeriyor.", "ingredients": [], "ingredientFlags": []},
  "tg_langnese_tg_hal": {"product": "Langnese / Cremissimo (Algida)", "brand": "Langnese", "store": "", "logo": "🍦", "verdict": "halal", "score": 87, "certifications": [], "companyStatement": "Langnese/Cremissimo (Türkiye'deki adıyla Algida) hayvansal jelatin içermez. Bazı çeşitlerinde alkol bulunuyor, içerik kontrol edilerek alınabilir.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "⚠️ Alkollü çeşitlerden kaçının, içerik kontrolü yapın.", "ingredients": [], "ingredientFlags": []},
  "tg_algida_tg_hal": {"product": "Algida (Algida amblemi taşıyanlar)", "brand": "Algida", "store": "", "logo": "🍦", "verdict": "halal", "score": 85, "certifications": [], "companyStatement": "Algida amblemi taşıyan ürünler genel olarak yenilebilir. Aroma içerenlerde alkol şüphesi var.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "⚠️ Aroma içeren çeşitlerinde alkol olabilir.", "ingredients": [], "ingredientFlags": []},
  "tg_cremissimo_tg_hal": {"product": "Cremissimo Dondurma", "brand": "Cremissimo", "store": "", "logo": "🍦", "verdict": "halal", "score": 88, "certifications": [], "companyStatement": "Cremissimo markasının tüm ürünlerinde emülgatörler bitkisel kaynaklı. Yenilebilir.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "", "ingredients": [], "ingredientFlags": []},
  "tg_dr_oetker_tg_hal": {"product": "Dr. Oetker Kabartma Tozu", "brand": "Dr. Oetker", "store": "", "logo": "🍰", "verdict": "halal", "score": 92, "certifications": [], "companyStatement": "Dr. Oetker'in kabartma tozu uygundur. Aynı zamanda vanilyası da uygundur.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "", "ingredients": [], "ingredientFlags": []},
  "tg_belbake_tg_hal": {"product": "Lidl Belbake Kabartma Tozu", "brand": "Belbake", "store": "", "logo": "🍞", "verdict": "halal", "score": 90, "certifications": [], "companyStatement": "Belbake (Lidl) kabartma tozu helal olarak teyit edilmiştir.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "", "ingredients": [], "ingredientFlags": []},
  "tg_ritter_sport_tg_hal": {"product": "Ritter Sport (2-3 çeşit hariç)", "brand": "Ritter Sport", "store": "", "logo": "🍫", "verdict": "halal", "score": 80, "certifications": [], "companyStatement": "2-3 çeşidi hariç Ritter Sport yenilebilir. Açık alkol içerenler hariç tutulmalı.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "⚠️ Vanilya ekstraktlı ve açıkça alkol içeren çeşitlerden kaçının.", "ingredients": [], "ingredientFlags": []},
  "tg_galbani_tg_hal": {"product": "Galbani Mozzarella", "brand": "Galbani", "store": "", "logo": "🧀", "verdict": "halal", "score": 85, "certifications": [], "companyStatement": "Galbani marka mozzarella peyniri yenilebilir.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "", "ingredients": [], "ingredientFlags": []},
  "tg_alpro_tg_hal": {"product": "Alpro Yoğurt", "brand": "Alpro", "store": "", "logo": "🥛", "verdict": "halal", "score": 92, "certifications": [], "companyStatement": "Alpro marka yoğurt uygundur. Bitkisel kaynaklı.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "", "ingredients": [], "ingredientFlags": []},
  "tg_fladenbrot_tg_hal": {"product": "Fladenbrot Ekmek (Sybal Arabisches)", "brand": "Fladenbrot", "store": "", "logo": "🍞", "verdict": "halal", "score": 88, "certifications": [], "companyStatement": "Sybal Arabiches Fladenbrot: un, su, şeker, tuz, maya içerir. Maya koruma maddesi uygun.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "", "ingredients": [], "ingredientFlags": []},
  "tg_crownfield_tg_hal": {"product": "Crownfield Choco Shells", "brand": "Crownfield", "store": "", "logo": "🥣", "verdict": "halal", "score": 82, "certifications": [], "companyStatement": "Crownfield Choco Shells yenilebilir.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "", "ingredients": [], "ingredientFlags": []},
  "tg_orbit_tg_hal": {"product": "Orbit Sakız (Sorbitol içeren)", "brand": "Orbit", "store": "", "logo": "🍬", "verdict": "halal", "score": 80, "certifications": [], "companyStatement": "Sorbitol içeren Orbit çeşitleri yenebilir.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "", "ingredients": [], "ingredientFlags": []},
  "tg_merci_tg_hal": {"product": "Merci Çikolata", "brand": "Merci", "store": "", "logo": "🍫", "verdict": "halal", "score": 80, "certifications": [], "companyStatement": "Merci Edel-Marzipan yenilebilir.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "", "ingredients": [], "ingredientFlags": []},
  "tg_nimm2_tg_mus": {"product": "Nimm2 Şeker (Portakal-Limon)", "brand": "Nimm2", "store": "", "logo": "🍬", "verdict": "mushbooh", "score": 45, "certifications": [], "companyStatement": "Nimm2 Familienpackung Orangen- und Zitronenbonbons: Aroma etil alkolle işlem ihtimali bulunuyor.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "⚠️ Şüpheli: Aroma etil alkolle işlem ihtimali var.", "ingredients": [], "ingredientFlags": []},
  "tg_ülker_tg_mus": {"product": "Ülker Jelibon", "brand": "Ülker", "store": "", "logo": "🍬", "verdict": "mushbooh", "score": 45, "certifications": [], "companyStatement": "Ülker Jelibon 'sığır jelatini vardır', 'domuz ürünleri yoktur' diye not düşülmüş. Sığır jelatininin helal kaynaktan temin edildiği konusu şüpheli.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "⚠️ Şüpheli: Sığır jelatini var ancak helal kaynaktan temin edildiği belirsiz.", "ingredients": [], "ingredientFlags": []},
  "tg_skittles_tg_mus": {"product": "Skittles Fruits", "brand": "Skittles", "store": "", "logo": "🍬", "verdict": "mushbooh", "score": 45, "certifications": [], "companyStatement": "Skittles Fruits: aroma ve emülgatör içeriyor, kaynağı belirsiz.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "⚠️ Şüpheli: Aroma ve emülgatör kaynağı belirsiz.", "ingredients": [], "ingredientFlags": []},
  "tg_bounty_tg_mus": {"product": "Bounty", "brand": "Bounty", "store": "", "logo": "🍫", "verdict": "mushbooh", "score": 45, "certifications": [], "companyStatement": "Bounty aroması alkol ile çözülüyor. Kaynağı belirsiz emülgatör de var.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "⚠️ Şüpheli: Vanilya aroma alkolle işlem görüyor.", "ingredients": [], "ingredientFlags": []},
  "tg_bahlsen_tg_mus": {"product": "Bahlsen Waffeletten", "brand": "Bahlsen", "store": "", "logo": "🍪", "verdict": "mushbooh", "score": 45, "certifications": [], "companyStatement": "Bahlsen Waffeletten: Aroma var şüpheli. Molkenerzeugnis var şüpheli (hayvansal kaynaklı olabilir).", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "⚠️ Şüpheli: Aroma ve Molkenerzeugnis hayvansal kaynaklı olabilir.", "ingredients": [], "ingredientFlags": []},
  "tg_crownfield_tg_mus": {"product": "Crownfield Schoko Müsli", "brand": "Crownfield", "store": "", "logo": "🥣", "verdict": "mushbooh", "score": 45, "certifications": [], "companyStatement": "Crownfield Schoko Müsli: kakao aroması var, etil alkolle elde edilme ihtimali.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "⚠️ Şüpheli: Kakao aroması etil alkolle elde edilme ihtimali.", "ingredients": [], "ingredientFlags": []},
  "tg_lindt_tg_mus": {"product": "Lindt Milch Crunchy", "brand": "Lindt", "store": "", "logo": "🍫", "verdict": "mushbooh", "score": 45, "certifications": [], "companyStatement": "Lindt Milch Crunchy: Gerstenmalzextrakt şüpheli, alkolle çözünebiliyor.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "⚠️ Şüpheli: Gerstenmalzextrakt alkolle çözünebiliyor.", "ingredients": [], "ingredientFlags": []},
  "tg_danone_tg_mus": {"product": "Danone Joghurt", "brand": "Danone", "store": "", "logo": "🥛", "verdict": "mushbooh", "score": 45, "certifications": [], "companyStatement": "Danone joghurt: Natürliches aroma, pektin alkolle muamele bakımından belirsiz.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "⚠️ Şüpheli: Natürliches Aroma ve pektin alkolle muamele bakımından belirsiz.", "ingredients": [], "ingredientFlags": []},
  "tg_nestle_tg_mus": {"product": "Nestle Choclait Chips", "brand": "Nestle", "store": "", "logo": "🍫", "verdict": "mushbooh", "score": 45, "certifications": [], "companyStatement": "Nestle Choclait Chips: Molkenerzeugnis maddesi Lab ile elde edilme ihtimali, Lab da hayvansal olabilir.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "⚠️ Şüpheli: Molkenerzeugnis hayvansal Lab ile elde edilme ihtimali.", "ingredients": [], "ingredientFlags": []},
  "tg_pringles_tg_mus": {"product": "Pringles Sour Cream & Onion", "brand": "Pringles", "store": "", "logo": "🥔", "verdict": "mushbooh", "score": 45, "certifications": [], "companyStatement": "Pringles Sour Cream & Onion: Hefeextrakt, Süßmolkenpulver ve aroma var. Aroma kaynağı belirsiz.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "⚠️ Şüpheli: Rauch Aromen, aroma içeriği belirsiz.", "ingredients": [], "ingredientFlags": []},
  "tg_ja_tg_har": {"product": "Ja! Nuss-Nougat Creme", "brand": "Ja!", "store": "", "logo": "🍫", "verdict": "haram", "score": 5, "certifications": [], "companyStatement": "Rewe Ja! Nuss-Nougat Creme: HalalCheck verilerine göre haram kategorisinde.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "❌ Haram: HalalCheck verisi — alkol veya hayvansal katkı tespit edildi.", "ingredients": [], "ingredientFlags": []},
  "tg_manner_tg_har": {"product": "Manner Çikolata", "brand": "Manner", "store": "", "logo": "🍪", "verdict": "haram", "score": 5, "certifications": [], "companyStatement": "Manner: Hayvansal bileşenler kullanımını tamamen dışlayamıyoruz diyor üretici.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "❌ Haram: Hayvansal bileşen (jelatin gibi) içeriyor.", "ingredients": [], "ingredientFlags": []},
  "tg_desira_tg_har": {"product": "Desira Joghurt Crips", "brand": "Desira", "store": "", "logo": "🥛", "verdict": "haram", "score": 5, "certifications": [], "companyStatement": "Desira Joghurt Crips: Arkasında açıkça domuz içeriği yazdığı için yenmez.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "❌ Haram: Arkasında açıkça 'Schwein' (domuz) yazıyor.", "ingredients": [], "ingredientFlags": []},
  "tg_genel_tg_har": {"product": "Tierisches Lab içeren peynirler", "brand": "Genel", "store": "", "logo": "🧀", "verdict": "haram", "score": 5, "certifications": [], "companyStatement": "Tierisches Lab (hayvansal peynir mayası) içeren tüm peynirler yenmez. Mikrobielles Lab veya Vegetarisch etiketli olanlar tercih edilmeli.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "❌ Haram: Hayvansal maya (Tierisches Lab) içeriyor.", "ingredients": [], "ingredientFlags": []},
  "tg_genel_tg_hal": {"product": "Mikrobielles Lab içeren peynirler", "brand": "Genel", "store": "", "logo": "🧀", "verdict": "halal", "score": 90, "certifications": [], "companyStatement": "Mikrobielles Lab (bitkisel/mikrobiyal peynir mayası) içeren peynirler yenilebilir. Paket üzerinde 'Mikrobielles Lab' veya 'Vegetarisch' yazanlar tercih edilmeli.", "source": "Telegram: \"Ich esse helal und gesund\" grubu (4.170 üye)", "warning": "", "ingredients": [], "ingredientFlags": []},
};

/* ============================================================
   TRANSLATIONS
============================================================ */
const T = {
  en: {
    badge: 'Free · Open Food Facts · 900K+ products',
    subtitle: 'Check if any food product is Halal — instantly, for free',
    placeholder: 'Enter barcode number…',
    scanBtn: 'Scan',
    tryExamples: 'Try an example barcode:',
    analyzing: 'Analyzing product…',
    statProducts: 'Products', statEcodes: 'E-codes', statCerts: 'Cert Bodies', statFree: 'Always Free',
    howTitle: 'How it works',
    how1Title: 'Enter Barcode', how1Desc: 'Type the number from any food product',
    how2Title: 'AI Analysis', how2Desc: 'Every ingredient checked against our halal database',
    how3Title: 'Instant Verdict', how3Desc: 'Halal, Mushbooh or Haram result in seconds',
    verdictHalal: 'HALAL', verdictMushbooh: 'MUSHBOOH', verdictHaram: 'HARAM',
    subHalal: 'No prohibited ingredients detected',
    subMushbooh: 'Doubtful ingredients — verify with a scholar',
    subHaram: 'Contains prohibited ingredients',
    certTitle: '🏅 Halal Certifications',
    noCert: 'No known halal certification found in database.',
    ingrTitle: '🧪 Ingredient Analysis',
    noFlag: 'No flagged ingredients detected in database.',
    fullIngr: '📋 Full Ingredients List',
    noIngr: 'No ingredient data available for this product.',
    nutriTitle: '📊 Nutrition',
    disclaimerText: '⚠️ Disclaimer: This is an automated analysis for informational purposes only and does not constitute a religious fatwa. Always verify with a qualified Islamic scholar or certified halal authority. Data sourced from Open Food Facts.',
    notFound: 'Product not found. Try one of the example barcodes above.',
    networkErr: 'Network error. Please check your connection.',
    halalTag: '✓ Halal', haramTag: '✗ Haram', doubtTag: '⚠ Doubtful',
    scoreLabel: '/ 100',
    energy: 'Energy', fat: 'Fat', carbs: 'Carbs', protein: 'Protein',
  },
  tr: {
    badge: 'Ücretsiz · Open Food Facts · 900K+ ürün',
    subtitle: 'Herhangi bir gıda ürününün Helal olup olmadığını anında kontrol et',
    placeholder: 'Barkod numarası girin…',
    scanBtn: 'Tara',
    tryExamples: 'Örnek barkod dene:',
    analyzing: 'Ürün analiz ediliyor…',
    statProducts: 'Ürün', statEcodes: 'E-kodu', statCerts: 'Sertifika', statFree: 'Ücretsiz',
    howTitle: 'Nasıl çalışır?',
    how1Title: 'Barkod Gir', how1Desc: 'Herhangi bir ürünün barkodunu yaz',
    how2Title: 'AI Analizi', how2Desc: 'Her içerik helal veri tabanında kontrol edilir',
    how3Title: 'Anında Sonuç', how3Desc: 'Saniyeler içinde Helal, Şüpheli veya Haram sonucu',
    verdictHalal: 'HELAL', verdictMushbooh: 'ŞÜPHELİ', verdictHaram: 'HARAM',
    subHalal: 'Yasaklı içerik tespit edilmedi',
    subMushbooh: 'Şüpheli içerik bulundu — din aliminden teyit alın',
    subHaram: 'Yasaklı içerik içeriyor',
    certTitle: '🏅 Helal Sertifikaları',
    noCert: 'Veri tabanında bilinen helal sertifikası bulunamadı.',
    ingrTitle: '🧪 İçerik Analizi',
    noFlag: 'Veri tabanında işaretlenen içerik bulunamadı.',
    fullIngr: '📋 Tam İçerik Listesi',
    noIngr: 'Bu ürün için içerik verisi mevcut değil.',
    nutriTitle: '📊 Besin Değerleri',
    disclaimerText: '⚠️ Uyarı: Bu analiz yalnızca bilgilendirme amaçlıdır ve dini fetva niteliği taşımaz. Her zaman yetkili bir İslam alimi veya sertifikalı helal otoritesiyle doğrulayın. Veriler Open Food Facts\'ten alınmıştır.',
    notFound: 'Ürün bulunamadı. Yukarıdaki örnek barkodlardan birini deneyin.',
    networkErr: 'Ağ hatası. Bağlantınızı kontrol edin.',
    halalTag: '✓ Helal', haramTag: '✗ Haram', doubtTag: '⚠ Şüpheli',
    scoreLabel: '/ 100',
    energy: 'Enerji', fat: 'Yağ', carbs: 'Karbonhidrat', protein: 'Protein',
  },
  fr: {
    badge: 'Gratuit · Open Food Facts · 900K+ produits',
    subtitle: 'Vérifiez si un produit alimentaire est Halal — instantanément, gratuitement',
    placeholder: 'Entrez le code-barres…',
    scanBtn: 'Scanner',
    tryExamples: 'Essayez un exemple:',
    analyzing: 'Analyse en cours…',
    statProducts: 'Produits', statEcodes: 'Codes E', statCerts: 'Certif.', statFree: 'Gratuit',
    howTitle: 'Comment ça marche',
    how1Title: 'Code-barres', how1Desc: 'Entrez le numéro du produit',
    how2Title: 'Analyse IA', how2Desc: 'Chaque ingrédient vérifié dans notre base halal',
    how3Title: 'Résultat', how3Desc: 'Halal, Mushbooh ou Haram en secondes',
    verdictHalal: 'HALAL', verdictMushbooh: 'MUSHBOOH', verdictHaram: 'HARAM',
    subHalal: 'Aucun ingrédient interdit détecté',
    subMushbooh: 'Ingrédients douteux — vérifiez avec un érudit',
    subHaram: 'Contient des ingrédients interdits',
    certTitle: '🏅 Certifications Halal',
    noCert: 'Aucune certification halal connue trouvée.',
    ingrTitle: '🧪 Analyse des ingrédients',
    noFlag: 'Aucun ingrédient signalé dans la base de données.',
    fullIngr: '📋 Liste complète des ingrédients',
    noIngr: 'Données d\'ingrédients non disponibles.',
    nutriTitle: '📊 Valeurs nutritionnelles',
    disclaimerText: '⚠️ Avertissement: Cette analyse est fournie à titre informatif uniquement et ne constitue pas une fatwa religieuse. Vérifiez toujours avec un érudit islamique qualifié. Données provenant d\'Open Food Facts.',
    notFound: 'Produit introuvable. Essayez un exemple ci-dessus.',
    networkErr: 'Erreur réseau. Vérifiez votre connexion.',
    halalTag: '✓ Halal', haramTag: '✗ Haram', doubtTag: '⚠ Douteux',
    scoreLabel: '/ 100',
    energy: 'Énergie', fat: 'Lipides', carbs: 'Glucides', protein: 'Protéines',
  },
  de: {
    badge: 'Kostenlos · Open Food Facts · 900K+ Produkte',
    subtitle: 'Prüfen Sie sofort, ob ein Lebensmittel Halal ist — kostenlos',
    placeholder: 'Barcode-Nummer eingeben…',
    scanBtn: 'Scannen',
    tryExamples: 'Beispiel-Barcode ausprobieren:',
    analyzing: 'Produkt wird analysiert…',
    statProducts: 'Produkte', statEcodes: 'E-Nummern', statCerts: 'Zertifikate', statFree: 'Kostenlos',
    howTitle: 'So funktioniert es',
    how1Title: 'Barcode eingeben', how1Desc: 'Geben Sie die Nummer eines Lebensmittels ein',
    how2Title: 'KI-Analyse', how2Desc: 'Jede Zutat wird in unserer Halal-Datenbank geprüft',
    how3Title: 'Sofortiges Ergebnis', how3Desc: 'Halal, Mushbooh oder Haram in Sekunden',
    verdictHalal: 'HALAL', verdictMushbooh: 'MUSHBOOH', verdictHaram: 'HARAM',
    subHalal: 'Keine verbotenen Zutaten gefunden',
    subMushbooh: 'Zweifelhafte Zutaten gefunden — bitte bei einem Gelehrten nachfragen',
    subHaram: 'Enthält verbotene Zutaten',
    certTitle: '🏅 Halal-Zertifizierungen',
    noCert: 'Keine bekannte Halal-Zertifizierung in der Datenbank gefunden.',
    ingrTitle: '🧪 Zutatenanalyse',
    noFlag: 'Keine markierten Zutaten in der Datenbank gefunden.',
    fullIngr: '📋 Vollständige Zutatenliste',
    noIngr: 'Keine Zutatendaten für dieses Produkt verfügbar.',
    nutriTitle: '📊 Nährwerte',
    disclaimerText: '⚠️ Hinweis: Diese Analyse dient nur zu Informationszwecken und stellt keine religiöse Fatwa dar. Bitte immer bei einem qualifizierten islamischen Gelehrten nachfragen. Daten von Open Food Facts.',
    notFound: 'Produkt nicht gefunden. Versuchen Sie einen der Beispiel-Barcodes.',
    networkErr: 'Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.',
    halalTag: '✓ Halal', haramTag: '✗ Haram', doubtTag: '⚠ Zweifelhaft',
    scoreLabel: '/ 100',
    energy: 'Energie', fat: 'Fett', carbs: 'Kohlenhydrate', protein: 'Eiweiß',
  },
  ar: {
    badge: 'مجاني · Open Food Facts · أكثر من 900 ألف منتج',
    subtitle: 'تحقق من حلال أي منتج غذائي — فوراً ومجاناً',
    placeholder: 'أدخل رقم الباركود…',
    scanBtn: 'فحص',
    tryExamples: 'جرّب باركود مثال:',
    analyzing: 'جاري تحليل المنتج…',
    statProducts: 'منتج', statEcodes: 'رمز E', statCerts: 'جهة شهادة', statFree: 'مجاناً دائماً',
    howTitle: 'كيف يعمل',
    how1Title: 'أدخل الباركود', how1Desc: 'اكتب الرقم الموجود على أي منتج غذائي',
    how2Title: 'تحليل بالذكاء الاصطناعي', how2Desc: 'يتم فحص كل مكوّن في قاعدة بيانات الحلال',
    how3Title: 'نتيجة فورية', how3Desc: 'حلال أو مشبوه أو حرام في ثوانٍ',
    verdictHalal: 'حلال', verdictMushbooh: 'مشبوه', verdictHaram: 'حرام',
    subHalal: 'لم يتم الكشف عن مكوّنات محظورة',
    subMushbooh: 'مكوّنات مشكوك فيها — تحقق مع عالم دين',
    subHaram: 'يحتوي على مكوّنات محظورة',
    certTitle: '🏅 شهادات الحلال',
    noCert: 'لم يتم العثور على شهادة حلال معروفة في قاعدة البيانات.',
    ingrTitle: '🧪 تحليل المكوّنات',
    noFlag: 'لم يتم العثور على مكوّنات مُعلَّمة في قاعدة البيانات.',
    fullIngr: '📋 قائمة المكوّنات الكاملة',
    noIngr: 'لا تتوفر بيانات مكوّنات لهذا المنتج.',
    nutriTitle: '📊 القيم الغذائية',
    disclaimerText: '⚠️ تنبيه: هذا التحليل لأغراض إعلامية فقط ولا يُعدّ فتوى دينية. يُرجى دائماً التحقق مع عالم إسلامي مؤهل أو جهة حلال معتمدة. البيانات مصدرها Open Food Facts.',
    notFound: 'المنتج غير موجود. جرّب أحد الباركودات المثال أعلاه.',
    networkErr: 'خطأ في الشبكة. يرجى التحقق من اتصالك.',
    halalTag: '✓ حلال', haramTag: '✗ حرام', doubtTag: '⚠ مشبوه',
    scoreLabel: '/ 100',
    energy: 'طاقة', fat: 'دهون', carbs: 'كربوهيدرات', protein: 'بروتين',
  }
};

let lang = 'tr';

function t(key) { return (T[lang] && T[lang][key]) || T.en[key] || key; }

function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.textContent === l.toUpperCase()));
  document.documentElement.lang = l;
  // RTL support for Arabic
  const isRTL = l === 'ar';
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  if (document.body) {
  document.body.style.fontFamily = isRTL
    ? "'Cairo', 'Outfit', sans-serif"
    : "'Outfit', sans-serif";
}
  // Load Arabic font if needed
  if (isRTL && !document.getElementById('arabic-font')) {
    const link = document.createElement('link');
    link.id = 'arabic-font';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap';
    document.head.appendChild(link);
  }
  // Update all data-t elements
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    el.textContent = t(key);
  });
  // Placeholders
  document.querySelectorAll('[data-placeholder-t]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-placeholder-t'));
  });
}

/* ============================================================
   HALAL DATABASE
============================================================ */
// ============================================================
// HARAM_DB — Kesinlikle Haram Maddeler (Çok Dilli)
// TR + DE + EN + FR + NL + AR + ES + IT
// ============================================================
const HARAM_DB = {

  // === DOMUZ / PORK ===
  // Türkçe
  'domuz': { name: 'Domuz', reason: '⛔ Haramdır.', category: 'pork' },
  'domuz yağı': { name: 'Domuz Yağı', reason: '⛔ Haramdır.', category: 'pork' },
  'domuz eti': { name: 'Domuz Eti', reason: '⛔ Haramdır.', category: 'pork' },
  // Almanca
  'schwein': { name: 'Schwein (Domuz)', reason: '⛔ Domuz içeriği, haramdır.', category: 'pork' },
  'schweinefleisch': { name: 'Schweinefleisch (Domuz Eti)', reason: '⛔ Haramdır.', category: 'pork' },
  'schweinebauch': { name: 'Schweinebauch (Domuz Göbeği)', reason: '⛔ Haramdır.', category: 'pork' },
  'schweineschmalz': { name: 'Schweineschmalz (Domuz İç Yağı)', reason: '⛔ Haramdır.', category: 'pork' },
  'schweinespeck': { name: 'Schweinespeck (Domuz Pastırması)', reason: '⛔ Haramdır.', category: 'pork' },
  'speck': { name: 'Speck (Domuz Pastırması)', reason: '⛔ Domuz ürünüdür, haramdır.', category: 'pork' },
  'schmalz': { name: 'Schmalz (İç Yağı)', reason: '⛔ Domuz iç yağı olabilir.', category: 'pork' },
  'schinken': { name: 'Schinken (Jambon)', reason: '⛔ Domuz ürünüdür.', category: 'pork' },
  'speck vom schwein': { name: 'Schweinespeck', reason: '⛔ Haramdır.', category: 'pork' },
  // İngilizce
  'pork': { name: 'Pork (Domuz)', reason: '⛔ Haramdır.', category: 'pork' },
  'lard': { name: 'Lard (Domuz Yağı)', reason: '⛔ Haramdır.', category: 'pork' },
  'ham': { name: 'Ham (Jambon)', reason: '⛔ Domuz ürünüdür.', category: 'pork' },
  'bacon': { name: 'Bacon (Domuz Pastırması)', reason: '⛔ Haramdır.', category: 'pork' },
  'pepperoni': { name: 'Pepperoni', reason: '⛔ Domuz içerebilir.', category: 'pork' },
  'pig fat': { name: 'Pig Fat (Domuz Yağı)', reason: '⛔ Haramdır.', category: 'pork' },
  'pork fat': { name: 'Pork Fat (Domuz Yağı)', reason: '⛔ Haramdır.', category: 'pork' },
  'pork gelatin': { name: 'Pork Gelatin (Domuz Jelatini)', reason: '⛔ Haramdır.', category: 'pork' },
  // Fransızca
  'porc': { name: 'Porc (Domuz)', reason: '⛔ Haramdır.', category: 'pork' },
  'cochon': { name: 'Cochon (Domuz)', reason: '⛔ Haramdır.', category: 'pork' },
  'saindoux': { name: 'Saindoux (Domuz Yağı)', reason: '⛔ Haramdır.', category: 'pork' },
  'jambon': { name: 'Jambon (Domuz Jambonu)', reason: '⛔ Haramdır.', category: 'pork' },
  'lardons': { name: 'Lardons (Domuz Yağı)', reason: '⛔ Haramdır.', category: 'pork' },
  'graisse de porc': { name: 'Graisse de Porc (Domuz Yağı)', reason: '⛔ Haramdır.', category: 'pork' },
  'gélatine de porc': { name: 'Gélatine de Porc (Domuz Jelatini)', reason: '⛔ Haramdır.', category: 'pork' },
  // Felemenkçe (Hollandaca)
  'varken': { name: 'Varken (Domuz)', reason: '⛔ Haramdır.', category: 'pork' },
  'varkensvlees': { name: 'Varkensvlees (Domuz Eti)', reason: '⛔ Haramdır.', category: 'pork' },
  'varkensvet': { name: 'Varkensvet (Domuz Yağı)', reason: '⛔ Haramdır.', category: 'pork' },
  'spek': { name: 'Spek (Domuz Pastırması)', reason: '⛔ Haramdır.', category: 'pork' },
  'gelatine van varken': { name: 'Varkensgelatine (Domuz Jelatini)', reason: '⛔ Haramdır.', category: 'pork' },
  // İspanyolca
  'cerdo': { name: 'Cerdo (Domuz)', reason: '⛔ Haramdır.', category: 'pork' },
  'tocino': { name: 'Tocino (Domuz Yağı)', reason: '⛔ Haramdır.', category: 'pork' },
  'manteca de cerdo': { name: 'Manteca de Cerdo (Domuz Yağı)', reason: '⛔ Haramdır.', category: 'pork' },
  // İtalyanca
  'maiale': { name: 'Maiale (Domuz)', reason: '⛔ Haramdır.', category: 'pork' },
  'grasso di maiale': { name: 'Grasso di Maiale (Domuz Yağı)', reason: '⛔ Haramdır.', category: 'pork' },
  'gelatina di maiale': { name: 'Gelatina di Maiale (Domuz Jelatini)', reason: '⛔ Haramdır.', category: 'pork' },

  // === ALKOL ===
  // Türkçe/Genel
  'etil alkol': { name: 'Etil Alkol', reason: '⛔ İçilebilir alkol, haramdır.', category: 'alcohol_haram' },
  // Almanca
  'alkohol': { name: 'Alkohol (Alkol)', reason: '⛔ İçilebilir alkol, haramdır.', category: 'alcohol_haram' },
  'ethanol': { name: 'Ethanol (Etil Alkol)', reason: '⛔ Haramdır.', category: 'alcohol_haram' },
  'ethylalkohol': { name: 'Ethylalkohol (Etil Alkol)', reason: '⛔ Haramdır.', category: 'alcohol_haram' },
  'wein ': { name: 'Wein (Şarap)', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  'bier': { name: 'Bier (Bira)', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  'wodka': { name: 'Wodka (Votka)', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  // İngilizce
  'alcohol': { name: 'Alcohol (Alkol)', reason: '⛔ Haramdır.', category: 'alcohol_haram' },
  'ethyl alcohol': { name: 'Ethyl Alcohol (Etil Alkol)', reason: '⛔ Haramdır.', category: 'alcohol_haram' },
  'wine': { name: 'Wine (Şarap)', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  'beer': { name: 'Beer (Bira)', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  'rum': { name: 'Rum', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  'whisky': { name: 'Whisky', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  'whiskey': { name: 'Whiskey', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  'vodka': { name: 'Vodka', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  'liqueur': { name: 'Liqueur (Likör)', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  'brandy': { name: 'Brandy', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  // Fransızca
  'alcool': { name: 'Alcool (Alkol)', reason: '⛔ Haramdır.', category: 'alcohol_haram' },
  'alcool éthylique': { name: 'Alcool Éthylique (Etil Alkol)', reason: '⛔ Haramdır.', category: 'alcohol_haram' },
  'vin ': { name: 'Vin (Şarap)', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  'bière': { name: 'Bière (Bira)', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  // Felemenkçe
  'alcohol': { name: 'Alcohol (Alkol)', reason: '⛔ Haramdır.', category: 'alcohol_haram' },
  'ethanol': { name: 'Ethanol', reason: '⛔ Haramdır.', category: 'alcohol_haram' },
  'wijn': { name: 'Wijn (Şarap)', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  'bier ': { name: 'Bier (Bira)', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  // İspanyolca
  'alcohol etílico': { name: 'Alcohol Etílico (Etil Alkol)', reason: '⛔ Haramdır.', category: 'alcohol_haram' },
  'vino': { name: 'Vino (Şarap)', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  'cerveza': { name: 'Cerveza (Bira)', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  // İtalyanca
  'alcol': { name: 'Alcol (Alkol)', reason: '⛔ Haramdır.', category: 'alcohol_haram' },
  'alcool etilico': { name: 'Alcool Etilico (Etil Alkol)', reason: '⛔ Haramdır.', category: 'alcohol_haram' },
  'vino ': { name: 'Vino (Şarap)', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },
  'birra': { name: 'Birra (Bira)', reason: '⛔ Alkollü içecek, haramdır.', category: 'alcohol_haram' },

  // === KARMİN / BOCEKTen ELDE EDİLEN ===
  'carmine': { name: 'Carmine (Karmin E120)', reason: '⛔ Böcekten elde edilen renk maddesi.', category: 'insect' },
  'cochineal': { name: 'Cochineal (E120)', reason: '⛔ Böcekten elde edilir.', category: 'insect' },
  'karmin': { name: 'Karmin (E120)', reason: '⛔ Böcekten elde edilen renk maddesi.', category: 'insect' },
  'cochenille': { name: 'Cochenille (E120)', reason: '⛔ Böcekten elde edilir.', category: 'insect' },
  'karmijn': { name: 'Karmijn (E120 Hollandaca)', reason: '⛔ Böcekten elde edilir.', category: 'insect' },
  'carminio': { name: 'Carminio (E120 İtalyanca)', reason: '⛔ Böcekten elde edilir.', category: 'insect' },
  'carmín': { name: 'Carmín (E120 İspanyolca)', reason: '⛔ Böcekten elde edilir.', category: 'insect' },
  'e120': { name: 'E120 (Karmin/Cochineal)', reason: '⛔ Böcekten elde edilir.', category: 'insect' },

  // === HAYVANSAL YAĞ (kaynağı belirsiz) ===
  'tierisches fett': { name: 'Tierisches Fett (Hayvansal Yağ)', reason: '⛔ Hayvansal yağ — kaynak belirsiz.', category: 'animal_fat' },
  'graisse animale': { name: 'Graisse Animale (Hayvansal Yağ)', reason: '⛔ Hayvansal yağ — kaynak belirsiz.', category: 'animal_fat' },
  'animal fat': { name: 'Animal Fat (Hayvansal Yağ)', reason: '⛔ Kaynak belirsiz hayvansal yağ.', category: 'animal_fat' },
  'dierlijk vet': { name: 'Dierlijk Vet (Hayvansal Yağ)', reason: '⛔ Kaynak belirsiz hayvansal yağ.', category: 'animal_fat' },
  'grasso animale': { name: 'Grasso Animale (Hayvansal Yağ)', reason: '⛔ Kaynak belirsiz hayvansal yağ.', category: 'animal_fat' },
  'grasa animal': { name: 'Grasa Animal (Hayvansal Yağ)', reason: '⛔ Kaynak belirsiz hayvansal yağ.', category: 'animal_fat' },

  // === DİĞER NET HARAM ===
  'salami': { name: 'Salami', reason: '⛔ Domuz içerebilir.', category: 'pork' },
  'prosciutto': { name: 'Prosciutto (İtalyan Jambonu)', reason: '⛔ Domuz ürünüdür.', category: 'pork' },
  'chorizo': { name: 'Chorizo (Domuzlu Sosis)', reason: '⛔ Domuz ürünüdür.', category: 'pork' },
  'mortadella': { name: 'Mortadella', reason: '⛔ Domuz içerebilir.', category: 'pork' },
  'saucisson': { name: 'Saucisson (Fransız Sosis)', reason: '⛔ Domuz içerebilir.', category: 'pork' },
};

// ============================================================
// MUSHBOOH_DB — Telegram "Ich esse halal und gesund" sabit mesajı
// Kaynak: 4.170 üyeli topluluk, alim görüşleri doğrultusunda
// ============================================================
const MUSHBOOH_DB = {

  // === HAYVANSal KÖKENLİ OLMA İHTİMALİ YÖNÜNDEN BELİRSİZ MADDELER ===

  // 1) Mono ve Digliseritler (E471 ve devamı)
  'mono und diglyceride': { name: 'Mono und Diglyceride (E471)', reason: 'Hayvansal kökenli olma ihtimali var. Bitkisel kaynaklı olduğu üretici tarafından teyit edilmedikçe belirsizdir.', category: 'animal' },
  'mono and diglycerides': { name: 'Mono and Diglycerides (E471)', reason: 'Hayvansal kökenli olma ihtimali var.', category: 'animal' },
  'monoglyceride': { name: 'Monoglyceride (E471)', reason: 'Hayvansal kökenli olma ihtimali var.', category: 'animal' },
  'diglyceride': { name: 'Diglyceride (E471)', reason: 'Hayvansal kökenli olma ihtimali var.', category: 'animal' },
  'e471': { name: 'E471 (Mono/Diglyzeride)', reason: 'Hayvansal kökenli olma ihtimali var. Kaynağı bitkisel olduğu üretici tarafından teyit edilmedikçe belirsizdir.', category: 'animal' },
  'e472': { name: 'E472 (Yağ asidi esterleri)', reason: 'E471 ile aynı belirsizlik grubu.', category: 'animal' },
  'e473': { name: 'E473 (Sukroz esterleri)', reason: 'E471 ile aynı belirsizlik grubu.', category: 'animal' },
  'e474': { name: 'E474 (Sukrogliseritler)', reason: 'E471 ile aynı belirsizlik grubu.', category: 'animal' },
  'e475': { name: 'E475 (Poligliserin esterleri)', reason: 'E471 ile aynı belirsizlik grubu.', category: 'animal' },
  'e477': { name: 'E477 (Propan-1,2-diol esterleri)', reason: 'E471 ile aynı belirsizlik grubu.', category: 'animal' },
  'e479b': { name: 'E479b (Isomerize soya yağı)', reason: 'E471 ile aynı belirsizlik grubu.', category: 'animal' },
  'e481': { name: 'E481 (Sodyum stearoil laktat)', reason: 'Hayvansal kökenli olabilir.', category: 'animal' },
  'e482': { name: 'E482 (Kalsiyum stearoil laktat)', reason: 'Hayvansal kökenli olabilir.', category: 'animal' },
  'emulgator': { name: 'Emülgatör (kaynak belirsiz)', reason: 'E-kodu belirtilmemişse kaynak belirsizdir.', category: 'animal' },
  'emulsifier': { name: 'Emulsifier (kaynak belirsiz)', reason: 'E-kodu belirtilmemişse kaynak belirsizdir.', category: 'animal' },

  // 2) Lesitin
  'lecithin': { name: 'Lesitin (Lecithin)', reason: 'Soya, ayçiçeği veya yumurta kaynaklı olabilir. Yumurta kaynaklıysa alimler arasında tartışmalıdır.', category: 'animal' },
  'lecithine': { name: 'Lesitin (Lecithine)', reason: 'Kaynak belirsiz olduğunda şüpheli.', category: 'animal' },
  'sojalecithin': { name: 'Soya Lesitini', reason: 'Soya kaynaklı — genellikle uygun, ancak işleme yöntemine göre değişir.', category: 'animal' },
  'e322': { name: 'E322 (Lesitin)', reason: 'Soya, ayçiçeği veya yumurta kaynaklı olabilir.', category: 'animal' },

  // 3) Jelatin
  'gelatin': { name: 'Jelatin (Gelatin)', reason: 'Domuz veya sığır kökenli olabilir. Kaynak belirtilmedikçe kesinlikle şüphelidir.', category: 'animal' },
  'gelatine': { name: 'Jelatin (Gelatine)', reason: 'Domuz veya sığır kökenli olabilir.', category: 'animal' },
  'rindergelatine': { name: 'Sığır Jelatini (Rindergelatine)', reason: 'Sığır kaynaklı — helal kesimden mi temin edildiği belirsiz.', category: 'animal' },
  'e441': { name: 'E441 (Jelatin)', reason: 'Domuz veya sığır kökenli olabilir.', category: 'animal' },
  'e542': { name: 'E542 (Kemik fosfatı)', reason: 'Hayvan kemiklerinden elde edilir.', category: 'animal' },

  // 4) Gliserin / Gliserol
  'glycerin': { name: 'Gliserin (Glycerin)', reason: 'Hayvansal veya bitkisel kaynaklı olabilir. Kaynak belirtilmedikçe belirsizdir.', category: 'animal' },
  'glycerol': { name: 'Gliserol (Glycerol)', reason: 'Hayvansal veya bitkisel kaynaklı olabilir.', category: 'animal' },
  'glycerine': { name: 'Gliserin (Glycerine)', reason: 'Kaynak belirsiz olduğunda şüpheli.', category: 'animal' },
  'e422': { name: 'E422 (Gliserol)', reason: 'Hayvansal veya bitkisel kaynaklı olabilir.', category: 'animal' },

  // 5) Süt tozu / peynir altı suyu
  'süßmolkenpulver': { name: 'Süt Tozu (Süßmolkenpulver)', reason: 'Peynir altı suyu tozu — hayvansal peynir mayasıyla elde edilme ihtimali var.', category: 'animal' },
  'molkenpulver': { name: 'Peynir Altı Suyu Tozu (Molkenpulver)', reason: 'Hayvansal peynir mayasıyla elde edilme ihtimali var.', category: 'animal' },
  'whey powder': { name: 'Peynir Altı Suyu Tozu (Whey Powder)', reason: 'Hayvansal peynir mayasıyla elde edilme ihtimali var.', category: 'animal' },
  'whey': { name: 'Peynir Altı Suyu (Whey)', reason: 'Hayvansal peynir mayasıyla elde edilme ihtimali var.', category: 'animal' },

  // 6) Lab (Peynir mayası)
  'lab ': { name: 'Lab (Peynir Mayası)', reason: 'Hayvansal veya mikrobiyal olabilir. "Tierisches Lab" kesinlikle haramdır, "Mikrobielles Lab" uygundur.', category: 'animal' },
  'labkäse': { name: 'Lab Peyniri', reason: 'Hayvansal peynir mayası içerebilir.', category: 'animal' },
  'tierisches lab': { name: 'Tierisches Lab (Hayvansal Peynir Mayası)', reason: 'Hayvansal kaynaklı peynir mayası — haramdır.', category: 'haram_risk' },
  'animal rennet': { name: 'Hayvansal Peynir Mayası', reason: 'Haramdır.', category: 'haram_risk' },
  'rennet': { name: 'Rennet (Peynir Mayası)', reason: 'Hayvansal veya mikrobiyal — kaynak kontrol edilmeli.', category: 'animal' },

  // 7) Molkenerzeugnis
  'molkenerzeugnis': { name: 'Molkenerzeugnis (Peynir Altı Suyu Yan Ürünü)', reason: 'Hayvansal peynir mayasıyla elde edilme ihtimali var.', category: 'animal' },
  'milcheiweiß': { name: 'Süt Proteini (Milcheiweiß)', reason: 'Hayvansal peynir mayasıyla elde edilme ihtimali var.', category: 'animal' },
  'milchprotein': { name: 'Süt Proteini (Milchprotein)', reason: 'Hayvansal peynir mayasıyla elde edilme ihtimali var.', category: 'animal' },

  // 8) Laktoz / Milchzucker
  'milchzucker': { name: 'Milchzucker (Laktoz)', reason: 'Elde edilirken hayvansal peynir mayası ihtimali var.', category: 'animal' },
  'lactose': { name: 'Laktoz (Lactose)', reason: 'Elde edilirken hayvansal peynir mayası ihtimali var.', category: 'animal' },

  // 9) Quark
  'quark': { name: 'Quark', reason: 'Hayvansal peynir mayası içerebilir.', category: 'animal' },

  // 10) Karmin (E120)
  'karmin': { name: 'Karmin (E120)', reason: 'Cochineal böceğinden elde edilir. Alimler arasında tartışmalıdır.', category: 'animal' },
  'carmine': { name: 'Karmin (Carmine)', reason: 'Cochineal böceğinden elde edilir.', category: 'animal' },
  'cochenille': { name: 'Cochenille (E120)', reason: 'Böcekten elde edilir, tartışmalıdır.', category: 'animal' },
  'e120': { name: 'E120 (Karmin)', reason: 'Cochineal böceğinden elde edilir. Alimler arasında tartışmalıdır.', category: 'animal' },

  // 11) Schellack (E904)
  'schellack': { name: 'Schellack (E904)', reason: 'Lac böceğinin salgısından elde edilir.', category: 'animal' },
  'shellac': { name: 'Shellac (E904)', reason: 'Lac böceğinin salgısından elde edilir.', category: 'animal' },
  'e904': { name: 'E904 (Shellac)', reason: 'Böcek salgısından elde edilir.', category: 'animal' },

  // 12) Sorbitanmonestearat (E491)
  'sorbitanmonostearat': { name: 'Sorbitanmonostearat (E491)', reason: 'Ekmek mayalarında kullanılır — hayvansal stearik asit kaynağı şüpheli.', category: 'animal' },
  'sorbitan monostearate': { name: 'Sorbitan Monostearate (E491)', reason: 'Hayvansal kökenli olabilir.', category: 'animal' },
  'e491': { name: 'E491 (Sorbitanmonostearat)', reason: 'Ekmek mayalarında kullanılır, kaynak belirsiz.', category: 'animal' },

  // 13) L-Sistein (E920)
  'l-cystein': { name: 'L-Cystein (E920)', reason: 'Un işleme ajanı — saç, tüy veya hayvansal kaynaklı olabilir.', category: 'animal' },
  'l-cysteine': { name: 'L-Cysteine (E920)', reason: 'Saç, tüy veya hayvansal kaynaklı olabilir.', category: 'animal' },
  'cystein': { name: 'Cystein (E920)', reason: 'Hayvansal kaynaklı olabilir.', category: 'animal' },
  'e920': { name: 'E920 (L-Cystein)', reason: 'Un işleme ajanı, hayvansal kaynaklı olabilir.', category: 'animal' },

  // 14) Jogurterzeugnis
  'jogurterzeugnis': { name: 'Jogurterzeugnis (Yoğurt Ürünü)', reason: 'Hayvansal katkı yönünden belirsiz.', category: 'animal' },
  'yoghurt powder': { name: 'Yoğurt Tozu', reason: 'Hayvansal katkı yönünden belirsiz.', category: 'animal' },

  // 15) Beta Karoten (E160a)
  'beta carotin': { name: 'Beta Carotin (E160a)', reason: 'Jelatinle elde edilme ihtimali var.', category: 'animal' },
  'beta carotene': { name: 'Beta Carotene (E160a)', reason: 'Jelatin kapsül içinde olabilir.', category: 'animal' },
  'e160a': { name: 'E160a (Beta Karoten)', reason: 'Jelatinle elde edilme ihtimali var.', category: 'animal' },

  // === ETİL ALKOLLE MUAMELE AÇISINDAN BELİRSİZ MADDELER ===

  // 1) Sirke çeşitleri
  'weinessig': { name: 'Weinessig (Şarap Sirkesi)', reason: 'Hanefi çoğunluğa göre uygun, diğer mezheplerde caiz görmeyenler ağırlıkta.', category: 'alcohol' },
  'weißweinessig': { name: 'Weißweinessig (Beyaz Şarap Sirkesi)', reason: 'Hanefi çoğunluğa göre uygun, diğer mezheplerde tartışmalı.', category: 'alcohol' },
  'branntweinessig': { name: 'Branntweinessig (Alkol Sirkesi)', reason: 'Hanefi çoğunluğa göre uygun, diğer mezheplerde tartışmalı.', category: 'alcohol' },
  'rotweinessig': { name: 'Rotweinessig (Kırmızı Şarap Sirkesi)', reason: 'Hanefi çoğunluğa göre uygun, diğer mezheplerde tartışmalı.', category: 'alcohol' },
  'wine vinegar': { name: 'Şarap Sirkesi (Wine Vinegar)', reason: 'Hanefi çoğunluğa göre uygun, diğer mezheplerde tartışmalı.', category: 'alcohol' },
  'spirit vinegar': { name: 'Alkol Sirkesi (Spirit Vinegar)', reason: 'Hanefi çoğunluğa göre uygun, diğer mezheplerde tartışmalı.', category: 'alcohol' },

  // 2) Aromalar
  'aroma': { name: 'Aroma', reason: 'Etil alkolle muamele görmüş olabilir. Kaynağı belirtilmedikçe şüphelidir.', category: 'alcohol' },
  'aromen': { name: 'Aromen (Aromalar)', reason: 'Etil alkolle muamele görmüş olabilir.', category: 'alcohol' },
  'natürliches aroma': { name: 'Natürliches Aroma (Doğal Aroma)', reason: 'Etil alkolle çözünmüş olabilir. Şüphelidir.', category: 'alcohol' },
  'natürliche aromen': { name: 'Natürliche Aromen (Doğal Aromalar)', reason: 'Etil alkolle çözünmüş olabilir.', category: 'alcohol' },
  'natural aroma': { name: 'Doğal Aroma', reason: 'Etil alkolle muamele görmüş olabilir.', category: 'alcohol' },
  'natural flavour': { name: 'Natural Flavour (Doğal Aroma)', reason: 'Etil alkolle çözünmüş olabilir.', category: 'alcohol' },
  'natural flavor': { name: 'Natural Flavor (Doğal Aroma)', reason: 'Etil alkolle çözünmüş olabilir.', category: 'alcohol' },
  'flavoring': { name: 'Flavoring (Aroma)', reason: 'Etil alkolle çözünmüş olabilir.', category: 'alcohol' },
  'flavouring': { name: 'Flavouring (Aroma)', reason: 'Etil alkolle çözünmüş olabilir.', category: 'alcohol' },
  'vanillin': { name: 'Vanillin (Aroma)', reason: 'Sentetik vanillin genellikle uygundur ancak etil alkolle işlem görmüş olabilir.', category: 'alcohol' },
  'vanille': { name: 'Vanille (Vanilja Aroması)', reason: 'Vanilya ekstrakt ise etil alkol içerebilir.', category: 'alcohol' },

  // 3) Ekstraktlar
  'vanilleextrakt': { name: 'Vanilleextrakt (Vanilya Ekstrakt)', reason: 'Etil alkol içeriyor olabilir — en yaygın şüpheli ekstrakt.', category: 'alcohol' },
  'vanilla extract': { name: 'Vanilla Extract', reason: 'Etil alkol içerir.', category: 'alcohol' },
  'extrakt': { name: 'Extrakt (Ekstrakt)', reason: 'Gerstemalzextrakt hariç çoğunda alkolle çözünme ihtimali var.', category: 'alcohol' },
  'extract': { name: 'Extract (Ekstrakt)', reason: 'Alkolle çözünmüş olabilir.', category: 'alcohol' },

  // 4) Pektin
  'pektin': { name: 'Pektin', reason: 'Alkolle muamele görmüş olabilir.', category: 'alcohol' },
  'pectin': { name: 'Pectin (Pektin)', reason: 'Alkolle muamele görmüş olabilir.', category: 'alcohol' },
  'e440': { name: 'E440 (Pektin)', reason: 'Alkolle muamele görmüş olabilir.', category: 'alcohol' },

  // 5) Carrageen
  'carrageen': { name: 'Carrageen (E407)', reason: 'Alkolle muamele görmüş olabilir.', category: 'alcohol' },
  'carrageenan': { name: 'Carrageenan (E407)', reason: 'Alkolle muamele görmüş olabilir.', category: 'alcohol' },
  'e407': { name: 'E407 (Carrageen)', reason: 'Alkolle muamele görmüş olabilir.', category: 'alcohol' },

  // === NET HARAM MADDELER ===
  'ethanol': { name: 'Ethanol (Etil Alkol)', reason: '⛔ İçilebilir alkol çeşididir, haramdır.', category: 'haram' },
  'ethyl alcohol': { name: 'Ethyl Alcohol (Etil Alkol)', reason: '⛔ İçilebilir alkol çeşididir, haramdır.', category: 'haram' },
  'alkohol': { name: 'Alkohol (Alkol)', reason: '⛔ İçilebilir alkol çeşididir, haramdır.', category: 'haram' },
  'alcohol': { name: 'Alcohol (Alkol)', reason: '⛔ İçilebilir alkol çeşididir, haramdır.', category: 'haram' },
  'wein': { name: 'Wein (Şarap)', reason: '⛔ Alkollü içecektir, haramdır.', category: 'haram' },
  'bier': { name: 'Bier (Bira)', reason: '⛔ Alkollü içecektir, haramdır.', category: 'haram' },
  'schwein': { name: 'Schwein (Domuz)', reason: '⛔ Domuz içeriği, haramdır.', category: 'haram' },
  'schweinefleisch': { name: 'Schweinefleisch (Domuz Eti)', reason: '⛔ Domuz eti, haramdır.', category: 'haram' },
  'schmalz': { name: 'Schmalz (İç Yağ)', reason: '⛔ Domuz iç yağı olabilir, haramdır.', category: 'haram' },
  'lard': { name: 'Lard (Domuz Yağı)', reason: '⛔ Domuz yağı, haramdır.', category: 'haram' },
  'pork': { name: 'Pork (Domuz)', reason: '⛔ Domuz içeriği, haramdır.', category: 'haram' },
  'porc': { name: 'Porc (Domuz)', reason: '⛔ Domuz içeriği, haramdır.', category: 'haram' },
  'cochon': { name: 'Cochon (Domuz)', reason: '⛔ Domuz içeriği, haramdır.', category: 'haram' },

  // === BERRAK MEYVE SULARI UYARISI ===
  'klarer': { name: 'Berrak/Klarer (Meyve Suyu)', reason: '⚠️ Berrak meyve sularında içerikte yazmasa da jelatinle süzülerek elde edilme ihtimali var.', category: 'animal' },

  // Eski formatla uyumluluk
  'e631': { name: 'E631 (Sodyum İnozinat)', reason: 'Domuz kaynaklı olabilir.', category: 'animal' },
  'e635': { name: 'E635 (Dinoküleotid)', reason: 'Domuz kaynaklı olabilir.', category: 'animal' },
};

// ============================================================
// E-KODU VERİTABANI — MUIS + HalalCodeCheck.com (374 E-kodu)
// Kaynak: muis.gov.sg + halalcodecheck.com
// Durum: halal | mushbooh | haram
// ============================================================
const ECODES_DB = {
  // === RENKLER (E100-E199) ===
  'e100': { name: 'Curcumin/Turmeric (Zerdeçal)', status: 'mushbooh', reason: 'Yağ bazlı emülgatörlerle işlenirse şüpheli.' },
  'e101': { name: 'Riboflavin (B2 Vitamini)', status: 'mushbooh', reason: 'Sentetik kaynaktan üretilmişse helal.' },
  'e102': { name: 'Tartrazine (Sarı Renk)', status: 'halal', reason: 'Sentetik boya — helal.' },
  'e104': { name: 'Quinoline Yellow', status: 'mushbooh', reason: 'Toz formda helal, sıvıda solvent kontrol gerekli.' },
  'e110': { name: 'Sunset Yellow FCF', status: 'mushbooh', reason: 'Toz formda helal, sıvıda solvent kontrol gerekli.' },
  'e120': { name: 'Cochineal/Carminic Acid (Karmin)', status: 'haram', reason: 'Böcekten elde edilir — haramdır.' },
  'e122': { name: 'Carmoisine/Azorubine', status: 'mushbooh', reason: 'Toz formda helal, sıvıda solvent kontrol gerekli.' },
  'e123': { name: 'Amaranth', status: 'mushbooh', reason: 'Toz formda helal, sıvıda solvent kontrol gerekli.' },
  'e124': { name: 'Ponceau 4R / Cochineal Red A', status: 'haram', reason: 'Cochineal Red A haram renktir.' },
  'e127': { name: 'Erythrosine BS', status: 'mushbooh', reason: 'Sıvıda solvent kontrol gerekli.' },
  'e129': { name: 'Allura Red AC', status: 'halal', reason: 'Sentetik boya — helal.' },
  'e131': { name: 'Patent Blue V', status: 'mushbooh', reason: 'Sıvıda solvent kontrol gerekli.' },
  'e132': { name: 'Indigo Carmine', status: 'mushbooh', reason: 'Sentetik üretim helal, sıvıda solvent kontrol gerekli.' },
  'e133': { name: 'Brilliant Blue FCF', status: 'halal', reason: 'Sentetik boya — helal.' },
  'e140': { name: 'Chlorophyll (Klorofil)', status: 'mushbooh', reason: 'Ekstraksiyon çözücüsü alkol değilse helal.' },
  'e141': { name: 'Copper Complex of Chlorophyll', status: 'mushbooh', reason: 'Ekstraksiyon çözücüsü alkol değilse helal.' },
  'e142': { name: 'Green S', status: 'halal', reason: 'Suda çözünen sentetik boya — helal.' },
  'e150a': { name: 'Caramel I', status: 'halal', reason: 'Karamel renk — helal.' },
  'e150b': { name: 'Caramel II', status: 'halal', reason: 'Karamel renk — helal.' },
  'e150c': { name: 'Caramel III', status: 'halal', reason: 'Karamel renk — helal.' },
  'e150d': { name: 'Caramel IV', status: 'halal', reason: 'Karamel renk — helal.' },
  'e151': { name: 'Black PN / Brilliant Black BN', status: 'halal', reason: 'Suda çözünen sentetik boya — helal.' },
  'e153': { name: 'Carbon Black / Vegetable Carbon', status: 'mushbooh', reason: 'Sıvıda solvent kontrol gerekli.' },
  'e160a': { name: 'Alpha/Beta/Gamma Carotene', status: 'mushbooh', reason: 'Jelatin katkısı olabilir — şüpheli.' },
  'e160b': { name: 'Annatto, Bixin, Norbixin', status: 'halal', reason: 'Bitkisel kaynaklı renk — helal.' },
  'e160c': { name: 'Capsanthin/Capsorbin (Paprika)', status: 'halal', reason: 'Bitkisel kaynaklı — helal.' },
  'e160d': { name: 'Lycopene (Likopen)', status: 'mushbooh', reason: 'Organik çözücüde çözünürse şüpheli.' },
  'e160e': { name: 'Beta-apo-8-carotenal', status: 'mushbooh', reason: 'Jelatin katkısı olabilir.' },
  'e160f': { name: 'Ethyl ester of Beta-apo-8', status: 'mushbooh', reason: 'Jelatin katkısı olabilir.' },
  'e161a': { name: 'Flavoxanthin', status: 'mushbooh', reason: 'Ekstraksiyon çözücüsüne bağlı.' },
  'e161b': { name: 'Lutein', status: 'mushbooh', reason: 'Alkol ile ekstrakte edilmişse şüpheli.' },
  'e161c': { name: 'Cryptoxanthin', status: 'mushbooh', reason: 'Alkol ile ekstrakte edilmişse şüpheli.' },
  'e161d': { name: 'Rubixanthin', status: 'mushbooh', reason: 'Çözücüye bağlı.' },
  'e161e': { name: 'Violaxanthin', status: 'mushbooh', reason: 'Çözücüye bağlı.' },
  'e161f': { name: 'Rhodoxanthin', status: 'mushbooh', reason: 'Çözücüye bağlı.' },
  'e161g': { name: 'Canthaxanthin', status: 'mushbooh', reason: 'Çözücüye bağlı.' },
  'e162': { name: 'Beetroot Red / Betanin', status: 'mushbooh', reason: 'Ekstraksiyon çözücüsüne bağlı.' },
  'e163': { name: 'Anthocyanins (Antosiyaninler)', status: 'halal', reason: 'Su ile ekstrakte edilen bitkisel renk — helal.' },
  'e170': { name: 'Calcium Carbonate (Kalsiyum Karbonat)', status: 'halal', reason: 'İnorganik kimyasal — helal.' },
  'e171': { name: 'Titanium Dioxide (Titanyum Dioksit)', status: 'halal', reason: 'İnorganik kimyasal — helal.' },
  'e172': { name: 'Iron Oxides and Hydroxides', status: 'halal', reason: 'Demir minerali — helal.' },
  'e173': { name: 'Aluminium', status: 'halal', reason: 'Metal — helal.' },
  'e174': { name: 'Silver (Gümüş)', status: 'halal', reason: 'Metal — helal.' },
  'e175': { name: 'Gold (Altın)', status: 'halal', reason: 'Metal — helal.' },
  'e180': { name: 'Pigment Rubine / Lithol Rubine BK', status: 'mushbooh', reason: 'Sıvıda solvent kontrol gerekli.' },

  // === KORUYUCULAR (E200-E299) ===
  'e200': { name: 'Sorbic Acid (Sorbik Asit)', status: 'halal', reason: 'Kimyasal koruyucu — helal.' },
  'e201': { name: 'Sodium Sorbate', status: 'halal', reason: 'Kimyasal koruyucu — helal.' },
  'e202': { name: 'Potassium Sorbate', status: 'halal', reason: 'Kimyasal koruyucu — helal.' },
  'e203': { name: 'Calcium Sorbate', status: 'halal', reason: 'Kimyasal koruyucu — helal.' },
  'e210': { name: 'Benzoic Acid (Benzoik Asit)', status: 'mushbooh', reason: 'Kimyasal koruyucu — şüpheli.' },
  'e211': { name: 'Sodium Benzoate', status: 'halal', reason: 'Kimyasal koruyucu — helal.' },
  'e212': { name: 'Potassium Benzoate', status: 'halal', reason: 'Kimyasal koruyucu — helal.' },
  'e213': { name: 'Calcium Benzoate', status: 'mushbooh', reason: 'Kimyasal koruyucu — şüpheli.' },
  'e214': { name: 'Ethyl 4-hydroxybenzoate', status: 'mushbooh', reason: 'Alkol çözücü kullanılmışsa şüpheli.' },
  'e215': { name: 'Ethyl 4-hydroxybenzoate Sodium Salt', status: 'halal', reason: 'Helal çözücüyle üretilmişse helal.' },
  'e216': { name: 'Propyl 4-hydroxybenzoate', status: 'mushbooh', reason: 'Alkol çözücü kullanılmışsa şüpheli.' },
  'e218': { name: 'Methyl 4-hydroxybenzoate', status: 'mushbooh', reason: 'Alkol çözücü kullanılmışsa şüpheli.' },
  'e219': { name: 'Methyl 4-hydroxybenzoate Sodium', status: 'halal', reason: 'Helal.' },
  'e220': { name: 'Sulphur Dioxide (Kükürt Dioksit)', status: 'halal', reason: 'İnorganik kimyasal — helal.' },
  'e221': { name: 'Sodium Sulphite', status: 'halal', reason: 'İnorganik — helal.' },
  'e222': { name: 'Sodium Hydrogen Sulphite', status: 'halal', reason: 'İnorganik — helal.' },
  'e223': { name: 'Sodium Metabisulphite', status: 'halal', reason: 'İnorganik — helal.' },
  'e224': { name: 'Potassium Metabisulphite', status: 'halal', reason: 'İnorganik — helal.' },
  'e226': { name: 'Calcium Sulphite', status: 'halal', reason: 'İnorganik — helal.' },
  'e227': { name: 'Calcium Hydrogen Sulphite', status: 'halal', reason: 'İnorganik — helal.' },
  'e228': { name: 'Potassium Hydrogen Sulphite', status: 'halal', reason: 'İnorganik — helal.' },
  'e230': { name: 'Biphenyl / Diphenyl', status: 'halal', reason: 'Kimyasal — helal.' },
  'e231': { name: 'Orthophenyl Phenol', status: 'halal', reason: 'Kimyasal — helal.' },
  'e232': { name: 'Sodium Orthophenyl Phenol', status: 'halal', reason: 'Kimyasal — helal.' },
  'e234': { name: 'Nisin', status: 'halal', reason: 'Doğal antimikrobiyal — helal.' },
  'e235': { name: 'Natamycin (Natamisin)', status: 'halal', reason: 'Doğal antifungal — helal.' },
  'e239': { name: 'Hexamethylene Tetramine', status: 'mushbooh', reason: 'Şüpheli.' },
  'e242': { name: 'Dimethyl Dicarbonate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e249': { name: 'Potassium Nitrite', status: 'halal', reason: 'İnorganik — helal.' },
  'e250': { name: 'Sodium Nitrite', status: 'halal', reason: 'İnorganik — helal.' },
  'e251': { name: 'Sodium Nitrate', status: 'halal', reason: 'İnorganik — helal.' },
  'e252': { name: 'Potassium Nitrate', status: 'halal', reason: 'İnorganik — helal.' },
  'e260': { name: 'Acetic Acid (Asetik Asit)', status: 'halal', reason: 'Kimyasal — helal.' },
  'e261': { name: 'Potassium Acetate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e262': { name: 'Sodium Acetates', status: 'halal', reason: 'Kimyasal — helal.' },
  'e263': { name: 'Calcium Acetate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e270': { name: 'Lactic Acid (Laktik Asit)', status: 'halal', reason: 'Kimyasal — helal.' },
  'e280': { name: 'Propionic Acid', status: 'halal', reason: 'Kimyasal — helal.' },
  'e281': { name: 'Sodium Propanoate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e282': { name: 'Calcium Propanoate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e283': { name: 'Potassium Propanoate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e284': { name: 'Boric Acid', status: 'halal', reason: 'İnorganik — helal.' },
  'e285': { name: 'Sodium Tetraborate (Borax)', status: 'halal', reason: 'İnorganik — helal.' },
  'e290': { name: 'Carbon Dioxide (Karbondioksit)', status: 'halal', reason: 'İnorganik gaz — helal.' },
  'e296': { name: 'Malic Acid (Malik Asit)', status: 'halal', reason: 'Organik asit — helal.' },
  'e297': { name: 'Fumaric Acid', status: 'halal', reason: 'Organik asit — helal.' },

  // === ANTİOKSİDANLAR (E300-E399) ===
  'e300': { name: 'Ascorbic Acid (C Vitamini)', status: 'halal', reason: 'C vitamini — helal.' },
  'e301': { name: 'Sodium Ascorbate', status: 'halal', reason: 'C vitamini türevi — helal.' },
  'e302': { name: 'Calcium Ascorbate', status: 'halal', reason: 'C vitamini türevi — helal.' },
  'e304': { name: 'Ascorbyl Palmitate', status: 'mushbooh', reason: 'Palmitik asit kaynağı hayvansal olabilir.' },
  'e306': { name: 'Tocopherols (E Vitamini)', status: 'halal', reason: 'E vitamini — helal.' },
  'e307': { name: 'Alpha-tocopherol', status: 'halal', reason: 'E vitamini — helal.' },
  'e308': { name: 'Gamma-tocopherol', status: 'halal', reason: 'E vitamini — helal.' },
  'e309': { name: 'Delta-tocopherol', status: 'halal', reason: 'E vitamini — helal.' },
  'e310': { name: 'Propyl Gallate', status: 'mushbooh', reason: 'Solvent şüpheli olabilir.' },
  'e311': { name: 'Octyl Gallate', status: 'mushbooh', reason: 'Solvent şüpheli olabilir.' },
  'e312': { name: 'Dodecyl Gallate', status: 'mushbooh', reason: 'Solvent şüpheli olabilir.' },
  'e315': { name: 'Erythorbic Acid', status: 'halal', reason: 'Kimyasal — helal.' },
  'e316': { name: 'Sodium Erythorbate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e319': { name: 'TBHQ', status: 'halal', reason: 'Sentetik antioksidan — helal.' },
  'e320': { name: 'BHA (Butylated Hydroxyanisole)', status: 'halal', reason: 'Sentetik antioksidan — helal.' },
  'e321': { name: 'BHT (Butylated Hydroxytoluene)', status: 'halal', reason: 'Sentetik antioksidan — helal.' },
  'e322': { name: 'Lecithins (Lesitin)', status: 'mushbooh', reason: 'Soya/ayçiçeği kaynaklıysa helal; yumurta kaynaklıysa şüpheli.' },
  'e325': { name: 'Sodium Lactate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e326': { name: 'Potassium Lactate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e327': { name: 'Calcium Lactate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e328': { name: 'Ammonium Lactate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e329': { name: 'Magnesium Lactate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e330': { name: 'Citric Acid (Sitrik Asit)', status: 'halal', reason: 'Organik asit — helal.' },
  'e331': { name: 'Sodium Citrates', status: 'halal', reason: 'Kimyasal — helal.' },
  'e332': { name: 'Potassium Citrates', status: 'halal', reason: 'Kimyasal — helal.' },
  'e333': { name: 'Calcium Citrates', status: 'halal', reason: 'Kimyasal — helal.' },
  'e334': { name: 'Tartaric Acid (Tartarik Asit)', status: 'halal', reason: 'Organik asit — helal.' },
  'e335': { name: 'Sodium Tartrates', status: 'halal', reason: 'Kimyasal — helal.' },
  'e336': { name: 'Potassium Tartrates', status: 'halal', reason: 'Kimyasal — helal.' },
  'e337': { name: 'Sodium Potassium Tartrate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e338': { name: 'Phosphoric Acid', status: 'halal', reason: 'İnorganik asit — helal.' },
  'e339': { name: 'Sodium Phosphates', status: 'halal', reason: 'İnorganik — helal.' },
  'e340': { name: 'Potassium Phosphates', status: 'halal', reason: 'İnorganik — helal.' },
  'e341': { name: 'Calcium Phosphates', status: 'halal', reason: 'İnorganik — helal.' },
  'e343': { name: 'Magnesium Phosphates', status: 'halal', reason: 'İnorganik — helal.' },
  'e350': { name: 'Sodium Malates', status: 'halal', reason: 'Kimyasal — helal.' },
  'e351': { name: 'Potassium Malate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e352': { name: 'Calcium Malates', status: 'halal', reason: 'Kimyasal — helal.' },
  'e353': { name: 'Metatartaric Acid', status: 'halal', reason: 'Organik asit — helal.' },
  'e354': { name: 'Calcium Tartrate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e355': { name: 'Adipic Acid', status: 'halal', reason: 'Organik asit — helal.' },
  'e356': { name: 'Sodium Adipate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e357': { name: 'Potassium Adipate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e363': { name: 'Succinic Acid', status: 'halal', reason: 'Organik asit — helal.' },
  'e380': { name: 'Triammonium Citrate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e385': { name: 'EDTA (Calcium Disodium)', status: 'halal', reason: 'Kimyasal — helal.' },

  // === EMÜLGATÖRLER (E400-E499) ===
  'e400': { name: 'Alginic Acid (Aljinik Asit)', status: 'halal', reason: 'Deniz yosunundan — helal.' },
  'e401': { name: 'Sodium Alginate', status: 'halal', reason: 'Deniz yosunundan — helal.' },
  'e402': { name: 'Potassium Alginate', status: 'halal', reason: 'Deniz yosunundan — helal.' },
  'e403': { name: 'Ammonium Alginate', status: 'halal', reason: 'Deniz yosunundan — helal.' },
  'e404': { name: 'Calcium Alginate', status: 'halal', reason: 'Deniz yosunundan — helal.' },
  'e405': { name: 'Propylene Glycol Alginate', status: 'mushbooh', reason: 'Propilen glikol kaynağı şüpheli.' },
  'e406': { name: 'Agar (Agar-agar)', status: 'halal', reason: 'Deniz yosunundan — helal. Jelatine alternatif.' },
  'e407': { name: 'Carrageenan (Karragenan)', status: 'mushbooh', reason: 'Alkolle muamele görmüş olabilir.' },
  'e407a': { name: 'Processed Eucheuma Seaweed', status: 'mushbooh', reason: 'İşleme yöntemine bağlı.' },
  'e410': { name: 'Locust Bean Gum (Keçiboynuzu Zamkı)', status: 'halal', reason: 'Bitkisel — helal.' },
  'e412': { name: 'Guar Gum (Guar Zamkı)', status: 'halal', reason: 'Bitkisel — helal.' },
  'e413': { name: 'Tragacanth (Tragakant)', status: 'halal', reason: 'Bitkisel — helal.' },
  'e414': { name: 'Acacia Gum / Arabic Gum', status: 'halal', reason: 'Bitkisel zamk — helal.' },
  'e415': { name: 'Xanthan Gum (Ksantan Zamkı)', status: 'halal', reason: 'Fermentasyonla üretilir — helal.' },
  'e416': { name: 'Karaya Gum', status: 'halal', reason: 'Bitkisel — helal.' },
  'e417': { name: 'Tara Gum', status: 'halal', reason: 'Bitkisel — helal.' },
  'e418': { name: 'Gellan Gum', status: 'halal', reason: 'Fermentasyonla üretilir — helal.' },
  'e420': { name: 'Sorbitol (Sorbitol)', status: 'halal', reason: 'Bitkisel kaynaklı şeker alkolü — helal.' },
  'e421': { name: 'Mannitol (Mannitol)', status: 'halal', reason: 'Bitkisel — helal.' },
  'e422': { name: 'Glycerol (Gliserin)', status: 'mushbooh', reason: 'Hayvansal veya bitkisel kaynaklı olabilir.' },
  'e425': { name: 'Konjac', status: 'halal', reason: 'Bitkisel — helal.' },
  'e426': { name: 'Soybean Hemicellulose', status: 'halal', reason: 'Soya bazlı — helal.' },
  'e427': { name: 'Cassia Gum', status: 'halal', reason: 'Bitkisel — helal.' },
  'e431': { name: 'Polyoxyethylene (40) Stearate', status: 'mushbooh', reason: 'Stearik asit kaynağı hayvansal olabilir.' },
  'e432': { name: 'Polyoxyethylene Sorbitan Monolaurate (Polysorbate 20)', status: 'mushbooh', reason: 'Kaynak belirsiz.' },
  'e433': { name: 'Polyoxyethylene Sorbitan Monooleate (Polysorbate 80)', status: 'mushbooh', reason: 'Kaynak belirsiz.' },
  'e434': { name: 'Polyoxyethylene Sorbitan Monopalmitate (Polysorbate 40)', status: 'mushbooh', reason: 'Kaynak belirsiz.' },
  'e435': { name: 'Polyoxyethylene Sorbitan Monostearate (Polysorbate 60)', status: 'mushbooh', reason: 'Kaynak belirsiz.' },
  'e436': { name: 'Polyoxyethylene Sorbitan Tristearate (Polysorbate 65)', status: 'mushbooh', reason: 'Kaynak belirsiz.' },
  'e440': { name: 'Pectins (Pektin)', status: 'mushbooh', reason: 'Alkolle muamele görmüş olabilir.' },
  'e441': { name: 'Gelatin (Jelatin)', status: 'haram', reason: 'Domuz veya helal olmayan hayvan kaynaklı olabilir.' },
  'e442': { name: 'Ammonium Phosphatides', status: 'mushbooh', reason: 'Hayvansal yağdan elde edilebilir.' },
  'e444': { name: 'Sucrose Acetate Isobutyrate', status: 'halal', reason: 'Kimyasal — helal.' },
  'e445': { name: 'Glycerol Esters of Wood Rosins', status: 'mushbooh', reason: 'Gliserin kaynağı belirsiz.' },
  'e450': { name: 'Diphosphates (Difosfatlar)', status: 'halal', reason: 'İnorganik — helal.' },
  'e451': { name: 'Triphosphates', status: 'halal', reason: 'İnorganik — helal.' },
  'e452': { name: 'Polyphosphates', status: 'halal', reason: 'İnorganik — helal.' },
  'e459': { name: 'Beta-cyclodextrin', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e460': { name: 'Microcrystalline Cellulose', status: 'halal', reason: 'Bitkisel selüloz — helal.' },
  'e461': { name: 'Methyl Cellulose', status: 'halal', reason: 'Bitkisel selüloz — helal.' },
  'e462': { name: 'Ethyl Cellulose', status: 'halal', reason: 'Bitkisel selüloz — helal.' },
  'e463': { name: 'Hydroxypropyl Cellulose', status: 'halal', reason: 'Bitkisel selüloz — helal.' },
  'e464': { name: 'Hydroxypropyl Methyl Cellulose', status: 'halal', reason: 'Bitkisel selüloz — helal.' },
  'e465': { name: 'Methyl Ethyl Cellulose', status: 'halal', reason: 'Bitkisel selüloz — helal.' },
  'e466': { name: 'Sodium Carboxymethyl Cellulose', status: 'halal', reason: 'Bitkisel selüloz — helal.' },
  'e468': { name: 'Cross-linked Sodium Carboxymethyl Cellulose', status: 'halal', reason: 'Bitkisel — helal.' },
  'e469': { name: 'Enzymatically Hydrolysed CMC', status: 'halal', reason: 'Bitkisel — helal.' },
  'e470a': { name: 'Sodium/Potassium/Calcium Salts of Fatty Acids', status: 'mushbooh', reason: 'Yağ asidi kaynağı hayvansal olabilir.' },
  'e470b': { name: 'Magnesium Salts of Fatty Acids', status: 'mushbooh', reason: 'Yağ asidi kaynağı hayvansal olabilir.' },
  'e471': { name: 'Mono & Diglycerides of Fatty Acids', status: 'mushbooh', reason: 'Hayvansal veya bitkisel kaynaklı olabilir. Kaynağı açıklanmamışsa şüpheli.' },
  'e472a': { name: 'Acetic Acid Esters of Mono/Diglycerides', status: 'mushbooh', reason: 'E471 ile aynı şüphe.' },
  'e472b': { name: 'Lactic Acid Esters of Mono/Diglycerides', status: 'mushbooh', reason: 'E471 ile aynı şüphe.' },
  'e472c': { name: 'Citric Acid Esters of Mono/Diglycerides', status: 'mushbooh', reason: 'E471 ile aynı şüphe.' },
  'e472d': { name: 'Tartaric Acid Esters of Mono/Diglycerides', status: 'mushbooh', reason: 'E471 ile aynı şüphe.' },
  'e472e': { name: 'Mono & Diacetyl Tartaric Acid Esters (DATEM)', status: 'mushbooh', reason: 'E471 ile aynı şüphe.' },
  'e472f': { name: 'Mixed Tartaric/Acetic/Lactic Esters', status: 'mushbooh', reason: 'E471 ile aynı şüphe.' },
  'e473': { name: 'Sucrose Esters of Fatty Acids', status: 'mushbooh', reason: 'Yağ asidi kaynağı belirsiz.' },
  'e474': { name: 'Sucroglycerides', status: 'mushbooh', reason: 'Yağ asidi kaynağı belirsiz.' },
  'e475': { name: 'Polyglycerol Esters of Fatty Acids', status: 'mushbooh', reason: 'Yağ asidi kaynağı belirsiz.' },
  'e476': { name: 'Polyglycerol Polyricinoleate (PGPR)', status: 'mushbooh', reason: 'Gliserin kaynağı belirsiz.' },
  'e477': { name: 'Propylene Glycol Esters of Fatty Acids', status: 'mushbooh', reason: 'Propilen glikol kaynağı şüpheli.' },
  'e479b': { name: 'Thermally Oxidised Soya Bean Oil', status: 'mushbooh', reason: 'İşleme yöntemine bağlı.' },
  'e481': { name: 'Sodium Stearoyl-2-lactylate (SSL)', status: 'mushbooh', reason: 'Stearik asit kaynağı belirsiz.' },
  'e482': { name: 'Calcium Stearoyl-2-lactylate (CSL)', status: 'mushbooh', reason: 'Stearik asit kaynağı belirsiz.' },
  'e483': { name: 'Stearyl Tartrate', status: 'mushbooh', reason: 'Stearik asit kaynağı belirsiz.' },
  'e491': { name: 'Sorbitan Monostearate', status: 'mushbooh', reason: 'Stearik asit kaynağı belirsiz.' },
  'e492': { name: 'Sorbitan Tristearate', status: 'mushbooh', reason: 'Stearik asit kaynağı belirsiz.' },
  'e493': { name: 'Sorbitan Monolaurate', status: 'mushbooh', reason: 'Kaynak belirsiz.' },
  'e494': { name: 'Sorbitan Monooleate', status: 'mushbooh', reason: 'Kaynak belirsiz.' },
  'e495': { name: 'Sorbitan Monopalmitate', status: 'mushbooh', reason: 'Kaynak belirsiz.' },

  // === TATLANDIRICILAR / BAL (E500-E599) ===
  'e500': { name: 'Sodium Carbonates (Karbonat)', status: 'halal', reason: 'İnorganik — helal.' },
  'e501': { name: 'Potassium Carbonates', status: 'halal', reason: 'İnorganik — helal.' },
  'e503': { name: 'Ammonium Carbonates', status: 'halal', reason: 'İnorganik — helal.' },
  'e504': { name: 'Magnesium Carbonates', status: 'halal', reason: 'İnorganik — helal.' },
  'e507': { name: 'Hydrochloric Acid', status: 'halal', reason: 'İnorganik asit — helal.' },
  'e508': { name: 'Potassium Chloride', status: 'halal', reason: 'İnorganik — helal.' },
  'e509': { name: 'Calcium Chloride', status: 'halal', reason: 'İnorganik — helal.' },
  'e511': { name: 'Magnesium Chloride', status: 'halal', reason: 'İnorganik — helal.' },
  'e512': { name: 'Stannous Chloride', status: 'halal', reason: 'İnorganik — helal.' },
  'e514': { name: 'Sodium Sulphates', status: 'halal', reason: 'İnorganik — helal.' },
  'e515': { name: 'Potassium Sulphates', status: 'halal', reason: 'İnorganik — helal.' },
  'e516': { name: 'Calcium Sulphate', status: 'halal', reason: 'İnorganik — helal.' },
  'e517': { name: 'Ammonium Sulphate', status: 'halal', reason: 'İnorganik — helal.' },
  'e520': { name: 'Aluminium Sulphate', status: 'halal', reason: 'İnorganik — helal.' },
  'e524': { name: 'Sodium Hydroxide', status: 'halal', reason: 'İnorganik — helal.' },
  'e525': { name: 'Potassium Hydroxide', status: 'halal', reason: 'İnorganik — helal.' },
  'e526': { name: 'Calcium Hydroxide', status: 'halal', reason: 'İnorganik — helal.' },
  'e527': { name: 'Ammonium Hydroxide', status: 'halal', reason: 'İnorganik — helal.' },
  'e528': { name: 'Magnesium Hydroxide', status: 'halal', reason: 'İnorganik — helal.' },
  'e529': { name: 'Calcium Oxide', status: 'halal', reason: 'İnorganik — helal.' },
  'e530': { name: 'Magnesium Oxide', status: 'halal', reason: 'İnorganik — helal.' },
  'e535': { name: 'Sodium Ferrocyanide', status: 'halal', reason: 'İnorganik — helal.' },
  'e536': { name: 'Potassium Ferrocyanide', status: 'halal', reason: 'İnorganik — helal.' },
  'e538': { name: 'Calcium Ferrocyanide', status: 'halal', reason: 'İnorganik — helal.' },
  'e541': { name: 'Sodium Aluminium Phosphate', status: 'halal', reason: 'İnorganik — helal.' },
  'e542': { name: 'Bone Phosphate (Kemik Fosfatı)', status: 'haram', reason: 'Hayvan kemiklerinden elde edilir.' },
  'e551': { name: 'Silicon Dioxide (Silika)', status: 'halal', reason: 'İnorganik — helal.' },
  'e552': { name: 'Calcium Silicate', status: 'halal', reason: 'İnorganik — helal.' },
  'e553a': { name: 'Magnesium Silicate', status: 'halal', reason: 'İnorganik — helal.' },
  'e553b': { name: 'Talc', status: 'halal', reason: 'Mineral — helal.' },
  'e554': { name: 'Sodium Aluminium Silicate', status: 'halal', reason: 'İnorganik — helal.' },
  'e558': { name: 'Bentonite', status: 'halal', reason: 'Mineral kil — helal.' },
  'e559': { name: 'Aluminium Silicate (Kaolin)', status: 'halal', reason: 'Mineral — helal.' },
  'e570': { name: 'Fatty Acids (Yağ Asitleri)', status: 'mushbooh', reason: 'Hayvansal kaynaklı olabilir.' },
  'e574': { name: 'Gluconic Acid', status: 'halal', reason: 'Organik asit — helal.' },
  'e575': { name: 'Glucono Delta-lactone', status: 'halal', reason: 'Organik — helal.' },
  'e576': { name: 'Sodium Gluconate', status: 'halal', reason: 'Organik — helal.' },
  'e577': { name: 'Potassium Gluconate', status: 'halal', reason: 'Organik — helal.' },
  'e578': { name: 'Calcium Gluconate', status: 'halal', reason: 'Organik — helal.' },
  'e579': { name: 'Ferrous Gluconate', status: 'halal', reason: 'Organik — helal.' },
  'e585': { name: 'Ferrous Lactate', status: 'halal', reason: 'Organik — helal.' },

  // === TAT GÜÇLENDİRİCİLER (E600-E699) ===
  'e620': { name: 'Glutamic Acid (Glutamik Asit)', status: 'halal', reason: 'Amino asit — helal.' },
  'e621': { name: 'Monosodium Glutamate (MSG)', status: 'halal', reason: 'Fermentasyonla üretilir — helal.' },
  'e622': { name: 'Monopotassium Glutamate', status: 'halal', reason: 'Amino asit tuzu — helal.' },
  'e623': { name: 'Calcium Diglutamate', status: 'halal', reason: 'Amino asit tuzu — helal.' },
  'e624': { name: 'Monoammonium Glutamate', status: 'halal', reason: 'Amino asit tuzu — helal.' },
  'e625': { name: 'Magnesium Diglutamate', status: 'halal', reason: 'Amino asit tuzu — helal.' },
  'e626': { name: 'Guanylic Acid', status: 'mushbooh', reason: 'Hayvansal kaynaklı olabilir.' },
  'e627': { name: 'Disodium Guanylate', status: 'mushbooh', reason: 'Hayvansal kaynaklı olabilir.' },
  'e628': { name: 'Dipotassium Guanylate', status: 'mushbooh', reason: 'Hayvansal kaynaklı olabilir.' },
  'e629': { name: 'Calcium Guanylate', status: 'mushbooh', reason: 'Hayvansal kaynaklı olabilir.' },
  'e630': { name: 'Inosinic Acid', status: 'mushbooh', reason: 'Domuz kaynaklı olabilir.' },
  'e631': { name: 'Disodium Inosinate', status: 'mushbooh', reason: 'Domuz kaynaklı olabilir.' },
  'e632': { name: 'Dipotassium Inosinate', status: 'mushbooh', reason: 'Domuz kaynaklı olabilir.' },
  'e633': { name: 'Calcium Inosinate', status: 'mushbooh', reason: 'Domuz kaynaklı olabilir.' },
  'e634': { name: 'Calcium 5-ribonucleotides', status: 'mushbooh', reason: 'Domuz kaynaklı olabilir.' },
  'e635': { name: 'Disodium 5-ribonucleotides', status: 'mushbooh', reason: 'Domuz kaynaklı olabilir.' },
  'e636': { name: 'Maltol', status: 'halal', reason: 'Sentetik aroma — helal.' },
  'e637': { name: 'Ethyl Maltol', status: 'halal', reason: 'Sentetik aroma — helal.' },
  'e640': { name: 'Glycine (Glisin)', status: 'mushbooh', reason: 'Hayvansal kaynaklı amino asit olabilir.' },
  'e641': { name: 'L-Leucine', status: 'mushbooh', reason: 'Hayvansal kaynaklı amino asit olabilir.' },
  'e650': { name: 'Zinc Acetate', status: 'halal', reason: 'İnorganik — helal.' },

  // === CILA / KORUMA (E900-E999) ===
  'e901': { name: 'Beeswax (Balmumu)', status: 'halal', reason: 'Arıdan elde edilir — helal.' },
  'e902': { name: 'Candelilla Wax', status: 'halal', reason: 'Bitkisel mum — helal.' },
  'e903': { name: 'Carnauba Wax (Karnauba Mumu)', status: 'halal', reason: 'Bitkisel mum — helal.' },
  'e904': { name: 'Shellac (Şellak)', status: 'mushbooh', reason: 'Lac böceğinin salgısından elde edilir. Alimler ihtilaf halinde.' },
  'e905': { name: 'Microcrystalline Wax', status: 'halal', reason: 'Mineral mum — helal.' },
  'e907': { name: 'Crystalline Wax', status: 'halal', reason: 'Mineral mum — helal.' },
  'e912': { name: 'Montanic Acid Esters', status: 'mushbooh', reason: 'Kaynak belirsiz.' },
  'e914': { name: 'Oxidised Polyethylene Wax', status: 'halal', reason: 'Sentetik — helal.' },
  'e920': { name: 'L-Cysteine (L-Sistein)', status: 'mushbooh', reason: 'Saç, tüy veya hayvansal kaynaklı olabilir.' },
  'e927b': { name: 'Carbamide (Üre)', status: 'mushbooh', reason: 'Hayvansal kaynaklı olabilir.' },
  'e938': { name: 'Argon', status: 'halal', reason: 'İnert gaz — helal.' },
  'e939': { name: 'Helium', status: 'halal', reason: 'İnert gaz — helal.' },
  'e941': { name: 'Nitrogen (Azot)', status: 'halal', reason: 'İnert gaz — helal.' },
  'e942': { name: 'Nitrous Oxide', status: 'halal', reason: 'İnert gaz — helal.' },
  'e943a': { name: 'Butane', status: 'halal', reason: 'İnert gaz — helal.' },
  'e943b': { name: 'Isobutane', status: 'halal', reason: 'İnert gaz — helal.' },
  'e944': { name: 'Propane', status: 'halal', reason: 'İnert gaz — helal.' },
  'e948': { name: 'Oxygen (Oksijen)', status: 'halal', reason: 'İnert gaz — helal.' },
  'e949': { name: 'Hydrogen (Hidrojen)', status: 'halal', reason: 'İnert gaz — helal.' },
  'e950': { name: 'Acesulfame K (Aspartam)', status: 'halal', reason: 'Sentetik tatlandırıcı — helal.' },
  'e951': { name: 'Aspartame (Aspartam)', status: 'halal', reason: 'Sentetik tatlandırıcı — helal.' },
  'e952': { name: 'Cyclamic Acid / Cyclamates', status: 'halal', reason: 'Sentetik tatlandırıcı — helal.' },
  'e953': { name: 'Isomalt (İsomalt)', status: 'halal', reason: 'Şeker alkolü — helal.' },
  'e954': { name: 'Saccharin (Sakkarin)', status: 'halal', reason: 'Sentetik tatlandırıcı — helal.' },
  'e955': { name: 'Sucralose (Sukraloz)', status: 'halal', reason: 'Şekerden üretilir — helal.' },
  'e957': { name: 'Thaumatin (Taumatin)', status: 'halal', reason: 'Bitkisel protein — helal.' },
  'e959': { name: 'Neohesperidine DC', status: 'halal', reason: 'Bitkisel kaynaklı — helal.' },
  'e960': { name: 'Steviol Glycosides (Stevia)', status: 'halal', reason: 'Bitkisel tatlandırıcı — helal.' },
  'e961': { name: 'Neotame', status: 'halal', reason: 'Sentetik tatlandırıcı — helal.' },
  'e962': { name: 'Aspartame-acesulfame Salt', status: 'halal', reason: 'Sentetik tatlandırıcı — helal.' },
  'e965': { name: 'Maltitol (Maltitol)', status: 'halal', reason: 'Şeker alkolü — helal.' },
  'e966': { name: 'Lactitol (Laktitol)', status: 'halal', reason: 'Şeker alkolü — helal.' },
  'e967': { name: 'Xylitol (Ksilitol)', status: 'halal', reason: 'Bitkisel şeker alkolü — helal.' },
  'e968': { name: 'Erythritol (Eritritol)', status: 'halal', reason: 'Fermentasyonla üretilir — helal.' },
  'e999': { name: 'Quillaia Extract', status: 'mushbooh', reason: 'Ekstraksiyon yöntemine bağlı.' },

  // === EK E-KODLARI (E1000-E1520) ===
  'e1100': { name: 'Amylases (Amilaz)', status: 'halal', reason: 'Enzim — helal.' },
  'e1101': { name: 'Proteases (Proteaz)', status: 'mushbooh', reason: 'Hayvansal kaynaklı olabilir.' },
  'e1102': { name: 'Glucose Oxidase', status: 'halal', reason: 'Enzim — helal.' },
  'e1103': { name: 'Invertases', status: 'halal', reason: 'Enzim — helal.' },
  'e1104': { name: 'Lipases (Lipaz)', status: 'mushbooh', reason: 'Hayvansal kaynaklı olabilir.' },
  'e1105': { name: 'Lysozyme (Lizozim)', status: 'mushbooh', reason: 'Yumurta beyazından elde edilir.' },
  'e1200': { name: 'Polydextrose', status: 'halal', reason: 'Sentetik lif — helal.' },
  'e1201': { name: 'Polyvinylpyrrolidone (PVP)', status: 'halal', reason: 'Sentetik — helal.' },
  'e1202': { name: 'Polyvinylpolypyrrolidone (PVPP)', status: 'halal', reason: 'Sentetik — helal.' },
  'e1203': { name: 'Polyvinyl Alcohol', status: 'halal', reason: 'Sentetik — helal.' },
  'e1204': { name: 'Pullulan', status: 'halal', reason: 'Fermentasyonla üretilir — helal.' },
  'e1205': { name: 'Basic Methacrylate Copolymer', status: 'halal', reason: 'Sentetik — helal.' },
  'e1400': { name: 'Dextrin (Dekstrin)', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1401': { name: 'Acid-treated Starch', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1402': { name: 'Alkaline-treated Starch', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1403': { name: 'Bleached Starch', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1404': { name: 'Oxidised Starch', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1405': { name: 'Enzyme-treated Starches', status: 'mushbooh', reason: 'Enzim kaynağı belirsiz.' },
  'e1410': { name: 'Monostarch Phosphate', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1411': { name: 'Distarch Glycerol', status: 'mushbooh', reason: 'Gliserin kaynağı belirsiz.' },
  'e1412': { name: 'Distarch Phosphate', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1413': { name: 'Phosphated Distarch Phosphate', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1414': { name: 'Acetylated Distarch Phosphate', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1420': { name: 'Acetylated Starch', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1421': { name: 'Acetylated Starch', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1422': { name: 'Acetylated Distarch Adipate', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1423': { name: 'Acetylated Distarch Glycerol', status: 'mushbooh', reason: 'Gliserin kaynağı belirsiz.' },
  'e1430': { name: 'Distarch Glycerine', status: 'mushbooh', reason: 'Gliserin kaynağı belirsiz.' },
  'e1440': { name: 'Hydroxy Propyl Starch', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1441': { name: 'Hydroxy Propyl Distarch Glycerol', status: 'mushbooh', reason: 'Gliserin kaynağı belirsiz.' },
  'e1442': { name: 'Hydroxy Propyl Distarch Phosphate', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1443': { name: 'Hydroxy Propyl Distarch Glycerol', status: 'mushbooh', reason: 'Gliserin kaynağı belirsiz.' },
  'e1450': { name: 'Starch Sodium Octenyl Succinate', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1451': { name: 'Acetylated Oxidised Starch', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1452': { name: 'Starch Aluminium Octenyl Succinate', status: 'halal', reason: 'Bitkisel nişastadan — helal.' },
  'e1500': { name: 'Butane-1,3-diol', status: 'halal', reason: 'Sentetik çözücü — helal.' },
  'e1501': { name: 'Benzyl Alcohol', status: 'mushbooh', reason: 'Çözücü olarak kullanıldığında şüpheli.' },
  'e1502': { name: 'Butane-1,3-diol', status: 'halal', reason: 'Sentetik — helal.' },
  'e1503': { name: 'Castor Oil (Hint Yağı)', status: 'halal', reason: 'Bitkisel yağ — helal.' },
  'e1504': { name: 'Ethyl Acetate', status: 'mushbooh', reason: 'Alkol türevi — şüpheli.' },
  'e1505': { name: 'Triethyl Citrate', status: 'halal', reason: 'Sentetik — helal.' },
  'e1510': { name: 'Ethanol (Ethyl Alcohol)', status: 'haram', reason: '⛔ Etil alkol — haramdır.' },
  'e1516': { name: 'Glyceryl Monoacetate (Acetin)', status: 'mushbooh', reason: 'Gliserin kaynağı belirsiz.' },
  'e1517': { name: 'Glyceryl Diacetate (Diacetin)', status: 'mushbooh', reason: 'Gliserin kaynağı belirsiz.' },
  'e1518': { name: 'Glyceryl Triacetate (Triacetin)', status: 'mushbooh', reason: 'Gliserin kaynağı belirsiz.' },
  'e1519': { name: 'Benzyl Alcohol', status: 'mushbooh', reason: 'Aroma çözücüsü — şüpheli.' },
  'e1520': { name: 'Propylene Glycol (Propan-1,2-diol)', status: 'mushbooh', reason: 'Alkol türevi — şüpheli.' },

  // === EKSİK ORTA SINIF E-KODLARI ===
  'e585': { name: 'Ferrous Lactate', status: 'halal', reason: 'Organik demir tuzu — helal.' },
  'e586': { name: 'Hexamethylenetetramine', status: 'mushbooh', reason: 'Koruyucu — şüpheli.' },
  'e620': { name: 'Glutamic Acid (Glutamik Asit)', status: 'halal', reason: 'Amino asit — helal.' },
  'e650': { name: 'Zinc Acetate', status: 'halal', reason: 'İnorganik tuz — helal.' },
  'e900': { name: 'Dimethyl Polysiloxane', status: 'halal', reason: 'Sentetik köpük önleyici — helal.' },
  'e900a': { name: 'Dimethyl Polysiloxane', status: 'halal', reason: 'Sentetik — helal.' },
  'e900b': { name: 'Methylphenylpolysiloxane', status: 'halal', reason: 'Sentetik — helal.' },
  'e901': { name: 'Beeswax (Balmumu)', status: 'halal', reason: 'Arı ürünü — helal.' },
  'e902': { name: 'Candelilla Wax', status: 'halal', reason: 'Bitkisel mum — helal.' },
  'e906': { name: 'Benzoin Gum', status: 'mushbooh', reason: 'Alkol ekstraksiyonu olabilir.' },
  'e908': { name: 'Rice Bran Wax', status: 'halal', reason: 'Bitkisel — helal.' },
  'e909': { name: 'Spermaceti Wax', status: 'haram', reason: '⛔ Balina yağından elde edilir.' },
  'e910': { name: 'Wax Esters', status: 'mushbooh', reason: 'Kaynak belirsiz.' },
  'e911': { name: 'Methyl Esters of Fatty Acids', status: 'mushbooh', reason: 'Yağ asidi kaynağı belirsiz.' },
  'e913': { name: 'Lanolin (Yün Yağı)', status: 'mushbooh', reason: 'Koyun yününden — alimler arasında tartışmalı.' },
  'e916': { name: 'Calcium Iodate', status: 'halal', reason: 'İnorganik — helal.' },
  'e917': { name: 'Potassium Iodate', status: 'halal', reason: 'İnorganik — helal.' },
  'e918': { name: 'Nitrogen Oxides', status: 'halal', reason: 'İnorganik gaz — helal.' },
  'e919': { name: 'Nitrosyl Chloride', status: 'halal', reason: 'İnorganik — helal.' },
  'e921': { name: 'L-Cystine', status: 'mushbooh', reason: 'Hayvansal kaynaklı olabilir.' },
  'e922': { name: 'Potassium Persulphate', status: 'halal', reason: 'İnorganik — helal.' },
  'e923': { name: 'Ammonium Persulphate', status: 'halal', reason: 'İnorganik — helal.' },
  'e924': { name: 'Potassium Bromate', status: 'halal', reason: 'İnorganik — helal.' },
  'e925': { name: 'Chlorine (Klor)', status: 'halal', reason: 'İnorganik — helal.' },
  'e926': { name: 'Chlorine Dioxide', status: 'halal', reason: 'İnorganik — helal.' },
  'e927a': { name: 'Azodicarbonamide', status: 'halal', reason: 'Sentetik un işleme ajanı — helal.' },
  'e928': { name: 'Benzoyl Peroxide', status: 'halal', reason: 'İnorganik — helal.' },
  'e929': { name: 'Acetone Peroxide', status: 'halal', reason: 'Sentetik — helal.' },
  'e930': { name: 'Calcium Peroxide', status: 'halal', reason: 'İnorganik — helal.' },
  'e940': { name: 'Dichlorodifluoromethane', status: 'halal', reason: 'İnert gaz — helal.' },
  'e943a': { name: 'Butane', status: 'halal', reason: 'İnert gaz — helal.' },
  'e943b': { name: 'Isobutane', status: 'halal', reason: 'İnert gaz — helal.' },
  'e950': { name: 'Acesulfame K', status: 'halal', reason: 'Sentetik tatlandırıcı — helal.' },
  'e956': { name: 'Alitame', status: 'halal', reason: 'Sentetik tatlandırıcı — helal.' },
  'e958': { name: 'Glycyrrhizin (Meyan Kökü)', status: 'halal', reason: 'Bitkisel — helal.' },
  'e969': { name: 'Advantame', status: 'halal', reason: 'Sentetik tatlandırıcı — helal.' },
};

// Eski format uyumluluğu için
const HALAL_ECODES = Object.fromEntries(
  Object.entries(ECODES_DB)
    .filter(([, v]) => v.status === 'halal')
    .map(([k, v]) => [k, v.name])
);

// Known halal certified brands (simplified)
const CERT_BRANDS = {
  ifanca: ['halal', 'ifanca', 'islamic food'],
  hfa: ['hfa', 'halal food authority'],
  esma: ['esma', 'uae halal'],
  jakim: ['jakim', 'malaysia halal'],
};

const CERT_INFO = {
  ifanca: { name: 'IFANCA', region: '🇺🇸 North America', logo: 'IFANCA' },
  hfa: { name: 'HFA', region: '🇬🇧 UK & Europe', logo: 'HFA' },
  esma: { name: 'ESMA', region: '🇦🇪 UAE / Global', logo: 'ESMA' },
  jakim: { name: 'JAKIM', region: '🇲🇾 Malaysia / Global', logo: 'JAKIM' },
};

function detectCerts(product) {
  const searchText = JSON.stringify(product).toLowerCase();
  const found = [];
  for (const [key, keywords] of Object.entries(CERT_BRANDS)) {
    if (keywords.some(k => searchText.includes(k))) {
      found.push(key);
    }
  }
  return found;
}

function analyzeIngredients(text) {
  if (!text) return { items: [], verdict: 'mushbooh', score: 50, animalCount: 0, alcoholCount: 0, haramCount: 0 };
  const lower = text.toLowerCase();
  const findings = [];
  const flags = [];
  let animalCount = 0, alcoholCount = 0, haramCount = 0;

  for (const [key, val] of Object.entries(HARAM_DB)) {
    if (lower.includes(key)) {
      if (!findings.find(f => f.name === val.name)) {
        findings.push({ name: val.name, reason: val.reason, status: 'haram', category: val.category || 'haram' });
        flags.push('haram');
        haramCount++;
      }
    }
  }
  for (const [key, val] of Object.entries(MUSHBOOH_DB)) {
    if (lower.includes(key)) {
      if (!findings.find(f => f.name === val.name)) {
        // category'ye göre status belirle
        const cat = val.category || 'animal';
        let status = 'mushbooh';
        if (cat === 'haram' || cat === 'haram_risk') { status = 'haram'; flags.push('haram'); haramCount++; }
        else { flags.push('mushbooh'); }
        if (cat === 'animal' || cat === 'haram_risk') animalCount++;
        if (cat === 'alcohol') alcoholCount++;
        findings.push({ name: val.name, reason: val.reason, status, category: cat });
      }
    }
  }
  for (const [code, name] of Object.entries(HALAL_ECODES)) {
    if (lower.includes(code)) {
      if (!findings.find(f => f.name.toLowerCase().includes(code))) {
        findings.push({ name: `${name} (${code.toUpperCase()})`, reason: 'Helal katkı maddesi', status: 'halal', category: 'halal' });
      }
    }
  }

  let verdict = 'halal';
  let score = 96;
  if (flags.includes('haram')) { verdict = 'haram'; score = 5; }
  else if (flags.includes('mushbooh')) {
    verdict = 'mushbooh';
    // Şüpheli madde sayısına göre puan düşür — her zaman 69'un altında
    score = Math.max(25, 68 - (animalCount * 8) - (alcoholCount * 6));
  }
  else if (findings.length === 0) { score = 72; }

  return { items: findings, verdict, score, animalCount, alcoholCount, haramCount };
}

/* ============================================================
   SCAN
============================================================ */
async function scan() {
  const raw = document.getElementById('barcodeInput').value.trim().replace(/\s/g,'');
  const barcode = raw.replace(/\D/g,'');
  if (!barcode || barcode.length < 4) {
    showError('Please enter a valid barcode number (digits only).');
    return;
  }

  document.getElementById('loading').style.display = 'block';
  document.getElementById('result').style.display = 'none';
  document.getElementById('errorBox').style.display = 'none';
  document.getElementById('intro').style.display = 'none';

  // 1. Önce BRAND_DB + EXTRA_DB kontrol et
  const brandInfo = BRAND_DB[barcode] || (typeof EXTRA_DB !== 'undefined' && EXTRA_DB[barcode]);

  // 2. Veritabanında varsa direkt göster — OFF'a gitme
  if (brandInfo) {
    document.getElementById('loading').style.display = 'none';
    renderBrandOnly(barcode, brandInfo);
    return;
  }

  // 3. Veritabanında yoksa — önce OFF, olmazsa UPC Item DB dene
  const apis = [
    {
      url: `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`,
      parse: (data) => data.status === 1 && data.product ? data.product : null
    },
    {
      url: `https://api.upcitemdb.com/prod/trial/lookup?upc=${barcode}`,
      parse: (data) => {
        if (!data.items || !data.items[0]) return null;
        const item = data.items[0];
        return {
          product_name: item.title || item.brand || 'Bilinmeyen Ürün',
          brands: item.brand || '',
          ingredients_text: item.description || '',
          countries_tags: [],
          labels_tags: [],
          images: {}
        };
      }
    }
  ];

  let found = false;
  for (const api of apis) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      const res = await fetch(api.url, { signal: controller.signal });
      clearTimeout(timeout);
      if (!res.ok) continue;
      const data = await res.json();
      const product = api.parse(data);
      if (product) {
        renderResult(product, barcode);
        found = true;
        break;
      }
    } catch (e) {
      continue;
    }
  }

  if (!found) {
    showError(`🔍 Bu barkod (${barcode}) veritabanlarımızda bulunamadı. "Ürün bildir" butonunu kullanarak eklememize yardımcı olabilirsiniz.`);
  }

  document.getElementById('loading').style.display = 'none';
}

// Show result using only brand DB (when OFF doesn't have the product)
function renderBrandOnly(barcode, b) {
  const vMap = {
    halal:    { cls:'halal',    icon:'✅', titleKey:'verdictHalal',    subKey:'subHalal',    ar:'حلال'  },
    mushbooh: { cls:'mushbooh', icon:'⚠️', titleKey:'verdictMushbooh', subKey:'subMushbooh', ar:'مشبوه' },
    haram:    { cls:'haram',    icon:'❌', titleKey:'verdictHaram',     subKey:'subHaram',    ar:'حرام'  },
  };
  const vd = vMap[b.verdict] || vMap.mushbooh;

  const ingrHTML = (b.ingredients || []).map(ing => {
    const flagged = b.ingredientFlags && b.ingredientFlags.find(f => f.startsWith(ing));
    const status = flagged ? 'haram' : 'halal';
    return `<div class="ingr-item">
      <div class="ingr-left"><div class="ingr-name">${ing}</div></div>
      <span class="ibadge ${status==='halal'?'ok':'no'}">${status==='halal'?t('halalTag'):t('haramTag')}</span>
    </div>`;
  }).join('');

  const warningHTML = b.warning
    ? `<div style="margin:10px 0;background:rgba(251,191,36,0.1);border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:10px 12px;font-size:12px;color:#92400e;">⚠️ ${b.warning}</div>`
    : '';

  document.getElementById('result').innerHTML = `
    <div class="product-card">
      <div class="product-row">
        <div class="product-img-ph" style="font-size:36px;">${b.logo}</div>
        <div class="product-info">
          <div class="product-name">${b.product}</div>
          <div class="product-brand">${b.brand}</div>
          <div class="product-barcode">${barcode}</div>
        </div>
      </div>
    </div>

    <div class="verdict ${vd.cls}">
      <div class="v-icon">${vd.icon}</div>
      <div class="v-body">
        <div class="v-title">${t(vd.titleKey)} <span class="v-title-ar">${vd.ar}</span></div>
        <div class="v-sub">${t(vd.subKey)}</div>
        <div class="v-reason-badge verified">✅ Üretici Onaylı Kayıt</div>
      </div>
    </div>

    ${b.certifications && b.certifications.length ? `
    <div class="card">
      <div class="card-title">${t('certTitle')}</div>
      ${b.certifications.map(c => `<div style="padding:6px 0;font-size:13px;color:var(--text);border-bottom:1px solid var(--border);">🏅 ${c}</div>`).join('')}
    </div>` : ''}

    ${b.ingredients && b.ingredients.length ? `
    <div class="card">
      <div class="card-title">${t('ingrTitle')}</div>
      ${ingrHTML}
    </div>` : ''}

    ${warningHTML}

    <div class="card" style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:2px solid #4ade80;">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#166534;margin-bottom:8px;">📧 Company Statement (Verified)</div>
      <div style="font-size:13px;font-weight:600;color:#14532d;margin-bottom:6px;">${b.logo} ${b.brand}</div>
      <div style="font-size:12px;color:#166534;line-height:1.6;margin-bottom:8px;font-style:italic;">"${b.companyStatement}"</div>
      <div style="font-size:11px;color:#15803d;font-weight:600;">📌 Source: ${b.source}</div>
    </div>

    <div class="disclaimer">${t('disclaimerText')}</div>
    <button class="report-btn" onclick="openReport('${barcode}', '${b.product}', '${b.verdict}')">
      🚩 Hata Bildir / Ürün Güncelle
    </button>
  `;

  document.getElementById('result').style.display = 'block';
  document.querySelector('.result').scrollIntoView({ behavior:'smooth', block:'start' });
  saveToHistory(barcode, b.product, b.verdict);
}

function renderResult(p, barcode) {
  const name = p.product_name || p.product_name_en || p.generic_name || 'Unknown Product';
  const brand = p.brands || '';
  const ingredients = p.ingredients_text || p.ingredients_text_en || '';
  const imgUrl = p.image_front_small_url || p.image_front_url || '';
  const categories = (p.categories_tags || []).slice(0,3).map(c => c.replace(/^[a-z]+:/,'')).filter(Boolean);

  const analysis = analyzeIngredients(ingredients);
  const certs = detectCerts(p);
  const n = p.nutriments || {};

  // Brand DB — override AI verdict with verified company data
  const brandInfo = BRAND_DB[barcode] || getCustomDB()[barcode];
  if (brandInfo) {
    analysis.verdict = brandInfo.verdict;
    analysis.score = brandInfo.score;
  }

  // Net karar gerekçesi
  function getReasonBadge(analysis, brandInfo) {
    if (brandInfo) {
      if (brandInfo.verdict === 'halal') return '<div class="v-reason-badge verified">✅ Üretici Onaylı — Veritabanında Kayıtlı</div>';
      if (brandInfo.verdict === 'haram') return '<div class="v-reason-badge haram-found">❌ Veritabanında Haram Kayıtlı</div>';
      return '<div class="v-reason-badge animal">⚠️ Veritabanında Şüpheli Kayıtlı</div>';
    }
    if (analysis.verdict === 'haram') {
      const names = analysis.items.filter(i=>i.status==='haram').map(i=>i.name).slice(0,2).join(', ');
      return `<div class="v-reason-badge haram-found">❌ Haram İçerik: ${names}</div>`;
    }
    if (analysis.verdict === 'mushbooh') {
      const animal = analysis.animalCount > 0 ? `🐄 ${analysis.animalCount} hayvansal şüpheli` : '';
      const alcohol = analysis.alcoholCount > 0 ? `🍷 ${analysis.alcoholCount} alkol şüpheli` : '';
      const parts = [animal, alcohol].filter(Boolean).join(' · ');
      return `<div class="v-reason-badge ${analysis.animalCount > analysis.alcoholCount ? 'animal' : 'alcohol'}">⚠️ ${parts || 'Şüpheli İçerik Tespit Edildi'}</div>`;
    }
    if (analysis.items.length === 0) {
      return '<div class="v-reason-badge unknown">❓ İçerik Listesi Bulunamadı</div>';
    }
    return '<div class="v-reason-badge no-issue">✅ Sorunlu İçerik Bulunamadı</div>';
  }

  // Ingredients HTML
  let ingrHTML = '';
  const sorted = [...analysis.items].sort((a,b) => {
    const o = { haram:0, mushbooh:1, halal:2 };
    return o[a.status] - o[b.status];
  });
  if (sorted.length > 0) {
    ingrHTML = sorted.map(i => `
      <div class="ingr-item">
        <div class="ingr-left">
          <div class="ingr-name">${i.name}</div>
          <div class="ingr-reason">${i.reason}</div>
        </div>
        <span class="ibadge ${i.status==='halal'?'ok':i.status==='haram'?'no':'warn'}">
          ${i.status==='halal'?t('halalTag'):i.status==='haram'?t('haramTag'):t('doubtTag')}
        </span>
      </div>`).join('');
  } else {
    ingrHTML = `<div style="color:var(--muted);font-size:13px;padding:6px 0">${t('noFlag')}</div>`;
  }

  // Cert HTML
  let certHTML = '';
  if (certs.length > 0) {
    certHTML = certs.map(c => {
      const ci = CERT_INFO[c];
      return `<div class="cert-badge">
        <div class="cert-badge-logo">${ci.logo}</div>
        <div class="cert-badge-info">
          <div class="cert-name">${ci.name}</div>
          <div class="cert-region">${ci.region}</div>
        </div>
      </div>`;
    }).join('');
  } else {
    certHTML = `<div style="color:var(--muted);font-size:13px">${t('noCert')}</div>`;
  }

  // Nutrition
  const nutrItems = [
    { label: t('energy'), val: n['energy-kcal_100g'] ? Math.round(n['energy-kcal_100g'])+'kcal' : '—' },
    { label: t('fat'), val: n.fat_100g!=null ? n.fat_100g+'g' : '—' },
    { label: t('carbs'), val: n.carbohydrates_100g!=null ? n.carbohydrates_100g+'g' : '—' },
    { label: t('protein'), val: n.proteins_100g!=null ? n.proteins_100g+'g' : '—' },
  ];
  const nutriHTML = nutrItems.map(x => `
    <div class="nutri-item">
      <div class="nutri-label">${x.label}</div>
      <div class="nutri-val">${x.val}</div>
    </div>`).join('');

  const imgEl = imgUrl
    ? `<img src="${imgUrl}" class="product-img" alt="${name}" onerror="this.outerHTML='<div class=product-img-ph>🛒</div>'">`
    : `<div class="product-img-ph">🛒</div>`;

  document.getElementById('result').innerHTML = `
    <div class="product-card">
      <div class="product-row">
        ${imgEl}
        <div class="product-info">
          <div class="product-name">${name}</div>
          ${brand ? `<div class="product-brand">${brand}</div>` : ''}
          <div class="product-barcode">${barcode}</div>
          ${categories.length ? `<div class="product-tags">${categories.map(c=>`<span class="ptag">${c}</span>`).join('')}</div>` : ''}
        </div>
      </div>
    </div>

    <div class="verdict ${vd.cls}">
      <div class="v-icon">${vd.icon}</div>
      <div class="v-body">
        <div class="v-title">
          ${t(vd.titleKey)}
          <span class="v-title-ar">${vd.ar}</span>
        </div>
        <div class="v-sub">${t(vd.subKey)}</div>
        ${getReasonBadge(analysis, brandInfo)}
      </div>
    </div>

    <div class="card">
      <div class="card-title">${t('certTitle')}</div>
      <div class="cert-found">${certHTML}</div>
    </div>

    <div class="card">
      <div class="card-title">${t('ingrTitle')}</div>
      <div class="ingr-list">${ingrHTML}</div>
      ${ingredients ? `
        <div style="margin-top:14px">
          <div class="card-title" style="margin-bottom:8px">${t('fullIngr')}</div>
          <div class="raw-ingr">${ingredients}</div>
        </div>` : `<div style="color:var(--muted);font-size:13px;margin-top:10px">${t('noIngr')}</div>`}
    </div>

    <div class="card">
      <div class="card-title">${t('nutriTitle')} <span style="font-weight:400;text-transform:none;letter-spacing:0">(per 100g)</span></div>
      <div class="nutri-grid">${nutriHTML}</div>
    </div>

    <div class="disclaimer">${t('disclaimerText')}</div>
    <button class="report-btn" onclick="openReport('${barcode}', '${name}', '${analysis.verdict}')">
      🚩 Hata Bildir / Ürün Güncelle
    </button>
  `;

  document.getElementById('result').style.display = 'block';
  document.querySelector('.result').scrollIntoView({ behavior:'smooth', block:'start' });
  saveToHistory(barcode, name, analysis.verdict);

  if (brandInfo) {
    const warningHTML = brandInfo.warning
      ? '<div style="margin-top:8px; background:rgba(251,191,36,0.15); border-left:3px solid #f59e0b; border-radius:0 8px 8px 0; padding:8px 10px; font-size:12px; color:#92400e;">⚠️ ' + brandInfo.warning + '</div>'
      : '';
    const brandHTML = '<div style="margin-top:16px; background:linear-gradient(135deg,#f0fdf4,#dcfce7); border:2px solid #4ade80; border-radius:16px; padding:16px;">'
      + '<div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#166534; margin-bottom:8px;">📧 Company Statement (Verified)</div>'
      + '<div style="font-size:13px; font-weight:600; color:#14532d; margin-bottom:6px;">' + brandInfo.logo + ' ' + brandInfo.brand + '</div>'
      + '<div style="font-size:12px; color:#166534; line-height:1.6; margin-bottom:8px; font-style:italic;">"' + brandInfo.companyStatement + '"</div>'
      + '<div style="font-size:11px; color:#15803d; font-weight:600;">📌 Source: ' + brandInfo.source + '</div>'
      + warningHTML
      + '</div>';
    document.getElementById('result').innerHTML += brandHTML;
  }
}

function showError(msg) {
  const box = document.getElementById('errorBox');
  const barcode = document.getElementById('barcodeInput').value.trim().replace(/\D/g,'');
  const isNotFound = msg === t('notFound');

  box.innerHTML = '❌ ' + msg + (isNotFound && barcode ? `
    <div style="margin-top:12px;">
      <button onclick="openAddProduct('${barcode}')" style="background:linear-gradient(135deg,#165c30,#22a152);color:white;border:none;border-radius:12px;padding:11px 18px;font-size:13px;font-weight:700;cursor:pointer;font-family:'Outfit',sans-serif;width:100%;">
        📸 Fotoğraf çek, bu ürünü ekle
      </button>
    </div>` : '');
  box.style.display = 'block';
  document.getElementById('intro').style.display = 'block';
}

/* ============================================================
   CUSTOM PRODUCT DATABASE (localStorage)
============================================================ */
function getCustomDB() {
  try { return JSON.parse(localStorage.getItem('halalCustomDB') || '{}'); } catch(e) { return {}; }
}
function saveCustomDB(db) {
  try { localStorage.setItem('halalCustomDB', JSON.stringify(db)); } catch(e) {}
}

let addProductBarcode = '';

function openAddProduct(barcode) {
  addProductBarcode = barcode;
  document.getElementById('addProductBarcode').textContent = barcode;
  document.getElementById('addProductModal').style.display = 'flex';
  // Reset form
  document.getElementById('addProductResult').style.display = 'none';
  document.getElementById('addProductResult').innerHTML = '';
  document.getElementById('addPhotoPreview').style.display = 'none';
  document.getElementById('addProductSaveBtn').style.display = 'none';
  document.getElementById('addProductForm').style.display = 'block';
  window._addProductData = null;
}

function closeAddProductModal() {
  document.getElementById('addProductModal').style.display = 'none';
}

function triggerAddPhoto() {
  document.getElementById('addProductPhotoInput').click();
}

async function handleAddProductPhoto(input) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];

  // Show preview
  const reader = new FileReader();
  reader.onload = async (e) => {
    const preview = document.getElementById('addPhotoPreview');
    preview.src = e.target.result;
    preview.style.display = 'block';

    // Show loading
    document.getElementById('addProductAnalyzeBtn').style.display = 'none';
    document.getElementById('addProductLoading').style.display = 'block';

    try {
      const base64 = e.target.result.split(',')[1];
      const mediaType = file.type || 'image/jpeg';

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{
            role: 'user',
            content: [
              { type: 'image', source: { type: 'base64', media_type: mediaType, data: base64 } },
              { type: 'text', text: `This is a food product photo. The barcode is ${addProductBarcode}.
Extract all information visible and respond ONLY with valid JSON:
{
  "productName": "full product name",
  "brand": "brand name",
  "ingredients": ["ingredient1", "ingredient2"],
  "halalVerdict": "halal" or "mushbooh" or "haram",
  "halalScore": 0-100,
  "halalReason": "brief reason for verdict",
  "certifications": ["cert name if visible on packaging"],
  "warnings": ["any warning e.g. contains pork gelatin"]
}` }
            ]
          }]
        })
      });

      const data = await response.json();
      document.getElementById('addProductLoading').style.display = 'none';

      if (data.error) throw new Error(data.error.message);

      const text = data.content.map(c => c.text || '').join('');
      const parsed = JSON.parse(text.replace(/```json|```/g, '').trim());
      window._addProductData = parsed;

      // Show result preview
      const verdictColors = { halal:'#166534', mushbooh:'#92400e', haram:'#991b1b' };
      const verdictBg = { halal:'#dcfce7', mushbooh:'#fef9c3', haram:'#fee2e2' };
      const v = parsed.halalVerdict || 'mushbooh';
      document.getElementById('addProductResult').innerHTML = `
        <div style="background:${verdictBg[v]};border-radius:12px;padding:14px;margin-top:12px;">
          <div style="font-size:14px;font-weight:800;color:${verdictColors[v]};">
            ${v==='halal'?'✅ HELAL':v==='haram'?'❌ HARAM':'⚠️ ŞÜPHELİ'}
          </div>
          <div style="font-size:13px;font-weight:600;color:var(--text);margin-top:6px;">${parsed.productName}</div>
          <div style="font-size:12px;color:var(--muted);">${parsed.brand}</div>
          <div style="font-size:12px;color:${verdictColors[v]};margin-top:4px;">${parsed.halalReason}</div>
          ${parsed.ingredients && parsed.ingredients.length ? '<div style="font-size:11px;color:var(--muted);margin-top:6px;">İçerikler: ' + parsed.ingredients.slice(0,5).join(', ') + '</div>' : ''}
        </div>`;
      document.getElementById('addProductResult').style.display = 'block';
      document.getElementById('addProductSaveBtn').style.display = 'block';

    } catch(err) {
      document.getElementById('addProductLoading').style.display = 'none';
      document.getElementById('addProductAnalyzeBtn').style.display = 'block';
      document.getElementById('addProductResult').innerHTML = '<div style="color:var(--red);font-size:13px;">❌ Analiz başarısız. Tekrar dene.</div>';
      document.getElementById('addProductResult').style.display = 'block';
    }
  };
  reader.readAsDataURL(file);
}

function saveAddedProduct() {
  const data = window._addProductData;
  if (!data || !addProductBarcode) return;

  const db = getCustomDB();
  db[addProductBarcode] = {
    barcode: addProductBarcode,
    product: data.productName || 'Unknown Product',
    brand: data.brand || '',
    logo: '📦',
    verdict: data.halalVerdict || 'mushbooh',
    score: data.halalScore || 50,
    certifications: data.certifications || [],
    companyStatement: data.halalReason || 'Analyzed from product photo.',
    source: 'Fotoğraftan AI analizi',
    warning: (data.warnings || []).join(' '),
    ingredients: data.ingredients || [],
    ingredientFlags: [],
    addedAt: new Date().toISOString()
  };
  saveCustomDB(db);

  document.getElementById('addProductSaveBtn').textContent = '✅ Kaydedildi!';
  setTimeout(() => {
    closeAddProductModal();
    // Re-scan to show result
    document.getElementById('barcodeInput').value = addProductBarcode;
    scan();
  }, 1000);
}

function tryBarcode(code) {
  document.getElementById('barcodeInput').value = code;
  scan();
}

/* ============================================================
   CAMERA BARCODE SCANNER (BarcodeDetector API + fallback)
============================================================ */
let camStream   = null;
let camInterval = null;
let _lastScanned = null;   // tekrar okuma önleme
let _scanLocked  = false;  // okuma tamamlanırken kilitle

/* Titreşim yardımcısı */
function _vibrate(pattern) {
  try { if (navigator.vibrate) navigator.vibrate(pattern); } catch(_) {}
}

/* Scan frame'i aktif/pasif yap */
function _setScanFrame(active) {
  const line = document.getElementById('scanLine');
  const corners = document.querySelectorAll('#cameraModal [style*="border-top:3px"], #cameraModal [style*="border-bottom:3px"]');
  if (line) {
    line.style.background = active
      ? 'linear-gradient(90deg,transparent,#4cce7e,transparent)'
      : 'linear-gradient(90deg,transparent,#fbbf24,transparent)';
  }
}

/* Barkod bulundu → titreş, kilitle, kapat, tara */
function _onBarcodeFound(code) {
  if (_scanLocked) return;
  const clean = String(code).replace(/\s/g, '');
  // EAN-13, EAN-8, UPC-A uzunluk filtresi
  // (BarcodeDetector'ın döndürdüğü diğer format'ları da kabul et)
  if (!clean) return;
  // Aynı barkodu 2 saniye içinde tekrar işleme
  if (clean === _lastScanned) return;
  _lastScanned = clean;
  _scanLocked  = true;
  setTimeout(() => { _lastScanned = null; _scanLocked = false; }, 2000);

  _vibrate([80, 40, 80]);        // çift hafif titreşim
  _setScanFrame(false);          // frame sarıya döner (onay göstergesi)

  // Kısa gecikme — kullanıcı frame rengini görsün
  setTimeout(() => {
    closeCamera();
    document.getElementById('barcodeInput').value = clean;
    scan();
  }, 180);
}

async function openCamera() {
  const modal  = document.getElementById('cameraModal');
  const video  = document.getElementById('camVideo');
  const status = document.getElementById('camStatus');

  _scanLocked  = false;
  _lastScanned = null;

  modal.style.display = 'flex';
  status.textContent  = '⏳ Kamera başlatılıyor…';
  _setScanFrame(true);

  if (camStream)   { camStream.getTracks().forEach(t => t.stop()); camStream = null; }
  if (camInterval) { clearInterval(camInterval); camInterval = null; }

  try {
    // Düşük ışık için: yüksek çözünürlük + arka kamera + mümkünse torch iste
    const constraints = {
      video: {
        facingMode: { ideal: 'environment' },
        width:  { ideal: 1280 },
        height: { ideal: 720 }
      }
    };
    camStream = await navigator.mediaDevices.getUserMedia(constraints);

    // Torch (el feneri) — destekleyen cihazlarda düşük ışık için
    try {
      const track = camStream.getVideoTracks()[0];
      const caps  = track.getCapabilities ? track.getCapabilities() : {};
      if (caps.torch) await track.applyConstraints({ advanced: [{ torch: false }] });
    } catch(_) {}

    video.srcObject = camStream;
    await video.play();
    status.textContent = '🟢 Barkodu çerçeve içine getirin';

    // ── Yöntem 1: BarcodeDetector (Chrome 83+ / Android) ──────────────
    if ('BarcodeDetector' in window) {
      try {
        // Desteklenen formatları sorgula, listeye göre detector kur
        let supportedFmts = ['ean_13', 'ean_8', 'upc_a'];
        try {
          const allFmts = await BarcodeDetector.getSupportedFormats();
          const wanted  = ['ean_13','ean_8','upc_a','upc_e','code_128','code_39','qr_code'];
          supportedFmts = wanted.filter(f => allFmts.includes(f));
          if (!supportedFmts.length) supportedFmts = ['ean_13','ean_8','upc_a'];
        } catch(_) {}

        const det = new BarcodeDetector({ formats: supportedFmts });

        camInterval = setInterval(async () => {
          if (_scanLocked || !video.videoWidth) return;
          try {
            const codes = await det.detect(video);
            if (codes.length) {
              clearInterval(camInterval); camInterval = null;
              _onBarcodeFound(codes[0].rawValue);
            }
          } catch(_) {}
        }, 200);   // 200ms → daha hızlı tepki
        return;
      } catch(e) { console.warn('BarcodeDetector failed:', e); }
    }

    // ── Yöntem 2: Canvas + QuaggaJS ───────────────────────────────────
    try {
      if (typeof Quagga === 'undefined') {
        status.textContent = '⏳ Tarayıcı yükleniyor…';
        await loadScript('https://cdn.jsdelivr.net/npm/quagga@0.12.1/dist/quagga.min.js');
      }
      status.textContent = '🟢 Barkodu çerçeve içine getirin';

      const canvas = document.createElement('canvas');
      camInterval = setInterval(() => {
        if (_scanLocked || !video.videoWidth) return;
        canvas.width  = video.videoWidth;
        canvas.height = video.videoHeight;
        // Düşük ışık: contrast artır
        const ctx = canvas.getContext('2d');
        ctx.filter = 'contrast(1.3) brightness(1.1)';
        ctx.drawImage(video, 0, 0);
        ctx.filter = 'none';

        Quagga.decodeSingle({
          decoder: { readers: ['ean_reader','ean_8_reader','upc_reader','upc_e_reader','code_128_reader'] },
          locate:  true,
          src:     canvas.toDataURL('image/jpeg', 0.9)
        }, result => {
          if (result && result.codeResult && result.codeResult.code) {
            clearInterval(camInterval); camInterval = null;
            _onBarcodeFound(result.codeResult.code);
          }
        });
      }, 500);
      return;
    } catch(e) { console.warn('Quagga failed:', e); }

    // ── Yöntem 3: ZXing ───────────────────────────────────────────────
    try {
      if (typeof ZXing === 'undefined') {
        status.textContent = '⏳ Tarayıcı yükleniyor…';
        await loadScript('https://cdn.jsdelivr.net/npm/@zxing/library@0.20.0/umd/index.min.js');
      }
      status.textContent = '🟢 Barkodu çerçeve içine getirin';
      const canvas = document.createElement('canvas');
      const zreader = new ZXing.BrowserMultiFormatReader();
      window._zxingReader = zreader;

      camInterval = setInterval(async () => {
        if (_scanLocked || !video.videoWidth) return;
        canvas.width  = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        try {
          const result = await zreader.decodeFromCanvas(canvas);
          if (result) {
            clearInterval(camInterval); camInterval = null;
            _onBarcodeFound(result.getText());
          }
        } catch(_) {}
      }, 350);
      return;
    } catch(e) { console.warn('ZXing failed:', e); }

    status.textContent = '❌ Tarayıcı yüklenemedi. Barkod numarasını elle girin.';

  } catch(err) {
    // Kamera izni / donanım hata mesajları
    const msgs = {
      NotAllowedError:
        '❌ Kamera izni reddedildi.\nTarayıcı adres çubuğundaki 🔒 simgesine tıklayıp "Kamera → İzin Ver" seçin.',
      NotFoundError:
        '❌ Kamera bulunamadı. Cihazınızda kamera olduğundan emin olun.',
      NotReadableError:
        '❌ Kamera başka bir uygulama tarafından kullanılıyor. Diğer sekmeleri kapatıp tekrar deneyin.',
      OverconstrainedError:
        '❌ Kamera bu çözünürlüğü desteklemiyor. Sayfayı yenileyip tekrar deneyin.',
      SecurityError:
        '❌ Güvenli bağlantı (HTTPS) gereklidir.',
    };
    status.textContent = msgs[err.name] || ('❌ ' + (err.message || 'Bilinmeyen kamera hatası'));
  }
}

function closeCamera() {
  _scanLocked  = false;
  _lastScanned = null;
  _setScanFrame(true);   // frame'i yeşile sıfırla
  document.getElementById('cameraModal').style.display = 'none';
  if (camInterval) { clearInterval(camInterval); camInterval = null; }
  if (camStream)   { camStream.getTracks().forEach(t => t.stop()); camStream = null; }
  if (window._zxingReader) { try { window._zxingReader.reset(); } catch(_) {} window._zxingReader = null; }
  if (window._quaggaActive){ try { Quagga.stop(); } catch(_) {} window._quaggaActive = false; }
  const v = document.getElementById('camVideo');
  if (v) v.srcObject = null;
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const s = document.createElement('script');
    s.src = src; s.onload = resolve; s.onerror = reject;
    document.head.appendChild(s);
  });
}

/* ============================================================
   BRAND DATABASE — Araştırılmış şirket açıklamaları
============================================================ */


/* ============================================================
   TABS
============================================================ */
function showTab(tab) {
  ['scan','ecodes','history','nearby'].forEach(t => {
    document.getElementById('tabcontent-'+t).style.display = t===tab ? 'block' : 'none';
    const btn = document.getElementById('tab-'+t);
    if(btn) btn.classList.toggle('tab-active', t===tab);
  });
  if(tab==='history') renderHistory();
  if(tab==='ecodes') document.getElementById('ecodeInput').focus();
}

function scrollToTop() {
  window.scrollTo({top:0, behavior:'smooth'});
  document.getElementById('intro').style.display = 'block';
  document.getElementById('result').style.display = 'none';
}

/* ============================================================
   E-CODE SEARCH
============================================================ */
const FULL_ECODE_DB = {
  'e100': {name:'Curcumin', status:'halal', desc:'Yellow pigment from turmeric'},
  'e101': {name:'Riboflavin (B2)', status:'halal', desc:'Vitamin B2, plant or synthetic'},
  'e102': {name:'Tartrazine', status:'halal', desc:'Synthetic yellow dye'},
  'e104': {name:'Quinoline Yellow', status:'halal', desc:'Synthetic yellow dye'},
  'e110': {name:'Sunset Yellow FCF', status:'halal', desc:'Synthetic orange dye'},
  'e120': {name:'Carmine / Cochineal', status:'haram', desc:'Red dye from insects — HARAM'},
  'e122': {name:'Carmoisine', status:'halal', desc:'Synthetic red dye'},
  'e124': {name:'Ponceau 4R', status:'halal', desc:'Synthetic red dye'},
  'e129': {name:'Allura Red AC', status:'halal', desc:'Synthetic red dye'},
  'e133': {name:'Brilliant Blue FCF', status:'halal', desc:'Synthetic blue dye'},
  'e140': {name:'Chlorophyll', status:'halal', desc:'Green pigment from plants'},
  'e150': {name:'Caramel', status:'halal', desc:'Heated sugar coloring'},
  'e160a': {name:'Beta-carotene', status:'halal', desc:'Orange pigment, plant-based'},
  'e162': {name:'Beetroot Red', status:'halal', desc:'Natural red from beetroot'},
  'e170': {name:'Calcium Carbonate', status:'halal', desc:'Mineral, chalk'},
  'e200': {name:'Sorbic Acid', status:'halal', desc:'Preservative, synthetic'},
  'e202': {name:'Potassium Sorbate', status:'halal', desc:'Common preservative'},
  'e210': {name:'Benzoic Acid', status:'halal', desc:'Preservative'},
  'e211': {name:'Sodium Benzoate', status:'halal', desc:'Common preservative'},
  'e220': {name:'Sulphur Dioxide', status:'halal', desc:'Preservative in dried fruits & wine (check context)'},
  'e270': {name:'Lactic Acid', status:'halal', desc:'From fermentation, plant-based'},
  'e300': {name:'Ascorbic Acid (Vit C)', status:'halal', desc:'Antioxidant vitamin C'},
  'e322': {name:'Lecithins', status:'halal', desc:'Usually soy or sunflower — check if egg'},
  'e330': {name:'Citric Acid', status:'halal', desc:'From citrus, fermentation'},
  'e406': {name:'Agar', status:'halal', desc:'Seaweed-based gelling agent'},
  'e407': {name:'Carrageenan', status:'halal', desc:'Seaweed extract'},
  'e410': {name:'Locust Bean Gum', status:'halal', desc:'Plant-based thickener'},
  'e412': {name:'Guar Gum', status:'halal', desc:'Plant-based thickener'},
  'e414': {name:'Acacia Gum', status:'halal', desc:'Tree sap, plant-based'},
  'e415': {name:'Xanthan Gum', status:'halal', desc:'Microbial fermentation'},
  'e420': {name:'Sorbitol', status:'halal', desc:'Sugar alcohol, plant-based'},
  'e422': {name:'Glycerol / Glycerin', status:'mushbooh', desc:'May be animal or plant-based — check source'},
  'e440': {name:'Pectins', status:'halal', desc:'From fruit peels'},
  'e441': {name:'Gelatine', status:'haram', desc:'Usually pork-derived — HARAM unless fish/beef certified'},
  'e471': {name:'Mono & Diglycerides', status:'mushbooh', desc:'May be animal-derived — verify source'},
  'e472': {name:'Fatty Acid Esters', status:'mushbooh', desc:'May be animal-derived'},
  'e481': {name:'Sodium Stearoyl Lactylate', status:'mushbooh', desc:'May be animal-derived'},
  'e500': {name:'Sodium Carbonates', status:'halal', desc:'Baking soda family'},
  'e503': {name:'Ammonium Carbonates', status:'halal', desc:'Leavening agent'},
  'e542': {name:'Bone Phosphate', status:'mushbooh', desc:'From animal bones'},
  'e551': {name:'Silicon Dioxide', status:'halal', desc:'Anti-caking agent, mineral'},
  'e621': {name:'Monosodium Glutamate (MSG)', status:'halal', desc:'Flavor enhancer, fermentation'},
  'e631': {name:'Sodium Inosinate', status:'mushbooh', desc:'May be pork-derived'},
  'e635': {name:'Disodium Ribonucleotides', status:'mushbooh', desc:'May be pork-derived'},
  'e920': {name:'L-Cysteine', status:'mushbooh', desc:'May be from hair/feathers'},
  'e950': {name:'Acesulfame K', status:'halal', desc:'Artificial sweetener'},
  'e951': {name:'Aspartame', status:'halal', desc:'Artificial sweetener'},
  'e955': {name:'Sucralose', status:'halal', desc:'Artificial sweetener'},
  'e960': {name:'Steviol Glycosides', status:'halal', desc:'Natural sweetener from stevia'},
  'e965': {name:'Maltitol', status:'halal', desc:'Sugar alcohol'},
  'e967': {name:'Xylitol', status:'halal', desc:'Sugar alcohol from plants'},
};

function searchEcode(query) {
  const q = query.toLowerCase().trim();
  const container = document.getElementById('ecodeResults');
  if (!q) { container.innerHTML = ''; return; }

  const matches = Object.entries(FULL_ECODE_DB).filter(([code, info]) =>
    code.includes(q) || info.name.toLowerCase().includes(q) || info.desc.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    container.innerHTML = `<div style="color:var(--muted);font-size:13px;text-align:center;padding:20px;">No results for "${query}"</div>`;
    return;
  }

  container.innerHTML = matches.map(([code, info]) => {
    const colors = { halal:['#e8f9f0','#0a4f25'], mushbooh:['#fffbea','#78350f'], haram:['#fff1f0','#7f1d1d'] };
    const labels = { halal:'✓ Halal', mushbooh:'⚠ Doubtful', haram:'✗ Haram' };
    const [bg, color] = colors[info.status];
    return `
    <div style="background:white;border-radius:14px;padding:14px 16px;border:1.5px solid var(--border);margin-bottom:8px;display:flex;align-items:center;gap:12px;box-shadow:var(--shadow-sm);">
      <div style="background:${bg};border-radius:10px;padding:6px 10px;font-size:13px;font-weight:800;color:${color};flex-shrink:0;font-family:monospace;">${code.toUpperCase()}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:13px;font-weight:700;color:var(--text);">${info.name}</div>
        <div style="font-size:11px;color:var(--muted);margin-top:2px;">${info.desc}</div>
      </div>
      <span style="font-size:10px;font-weight:700;padding:3px 9px;border-radius:20px;background:${bg};color:${color};flex-shrink:0;">${labels[info.status]}</span>
    </div>`;
  }).join('');
}

/* ============================================================
   SCAN HISTORY (localStorage)
============================================================ */
function saveToHistory(barcode, name, verdict) {
  try {
    const history = JSON.parse(localStorage.getItem('halalHistory') || '[]');
    const entry = { barcode, name, verdict, time: Date.now() };
    const filtered = history.filter(h => h.barcode !== barcode);
    filtered.unshift(entry);
    localStorage.setItem('halalHistory', JSON.stringify(filtered.slice(0, 20)));
  } catch(e) {}
}

function renderHistory() {
  const container = document.getElementById('historyList');
  try {
    const history = JSON.parse(localStorage.getItem('halalHistory') || '[]');
    if (history.length === 0) {
      container.innerHTML = `<div style="text-align:center;padding:32px 0;color:var(--muted);font-size:13px;">No scans yet.<br>Scan a product to see your history here.</div>`;
      return;
    }
    const icons = { halal:'✅', mushbooh:'⚠️', haram:'❌' };
    const colors = { halal:'#0a4f25', mushbooh:'#78350f', haram:'#7f1d1d' };
    const bgs = { halal:'#e8f9f0', mushbooh:'#fffbea', haram:'#fff1f0' };
    container.innerHTML = history.map(h => `
      <div onclick="tryBarcode('${h.barcode}')" style="background:white;border-radius:14px;padding:14px 16px;border:1.5px solid var(--border);margin-bottom:8px;display:flex;align-items:center;gap:12px;cursor:pointer;box-shadow:var(--shadow-sm);">
        <div style="font-size:24px;">${icons[h.verdict]||'❓'}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:13px;font-weight:700;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${h.name}</div>
          <div style="font-size:11px;color:var(--muted);font-family:monospace;">${h.barcode}</div>
        </div>
        <span style="font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;background:${bgs[h.verdict]};color:${colors[h.verdict]};flex-shrink:0;">${h.verdict==='halal'?'✅ Helal':h.verdict==='haram'?'❌ Haram':'⚠️ Şüpheli'}</span>
      </div>`).join('');
  } catch(e) {
    container.innerHTML = `<div style="color:var(--muted);font-size:13px;text-align:center;padding:20px;">History unavailable.</div>`;
  }
}

/* ============================================================
   NEARBY HALAL RESTAURANTS
============================================================ */
function findNearby() {
  const container = document.getElementById('nearbyContent');
  container.innerHTML = `<div style="text-align:center;padding:32px 0;"><div class="spinner" style="margin:0 auto 12px;"></div><div style="color:var(--muted);font-size:13px;">Finding your location…</div></div>`;

  if (!navigator.geolocation) {
    showNearbyError('Geolocation not supported on this device.');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      const mapsUrl = `https://www.google.com/maps/search/halal+restaurant/@${lat},${lng},14z`;
      const mapsUrlFood = `https://www.google.com/maps/search/halal+food+shop/@${lat},${lng},14z`;

      container.innerHTML = `
        <div style="text-align:center;margin-bottom:16px;">
          <div style="font-size:32px;margin-bottom:8px;">📍</div>
          <div style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:4px;">Location found!</div>
          <div style="font-size:11px;color:var(--muted);">${lat.toFixed(4)}, ${lng.toFixed(4)}</div>
        </div>
        <a href="${mapsUrl}" target="_blank" style="display:flex;align-items:center;gap:12px;background:white;border:1.5px solid var(--border);border-radius:14px;padding:16px;text-decoration:none;margin-bottom:10px;box-shadow:var(--shadow-sm);">
          <div style="font-size:28px;">🍽️</div>
          <div>
            <div style="font-size:14px;font-weight:700;color:var(--text);">Halal Restaurants</div>
            <div style="font-size:12px;color:var(--muted);">Open in Google Maps →</div>
          </div>
        </a>
        <a href="${mapsUrlFood}" target="_blank" style="display:flex;align-items:center;gap:12px;background:white;border:1.5px solid var(--border);border-radius:14px;padding:16px;text-decoration:none;margin-bottom:10px;box-shadow:var(--shadow-sm);">
          <div style="font-size:28px;">🛒</div>
          <div>
            <div style="font-size:14px;font-weight:700;color:var(--text);">Halal Food Shops</div>
            <div style="font-size:12px;color:var(--muted);">Open in Google Maps →</div>
          </div>
        </a>
        <a href="https://halalfinderapp.com" target="_blank" style="display:flex;align-items:center;gap:12px;background:white;border:1.5px solid var(--border);border-radius:14px;padding:16px;text-decoration:none;box-shadow:var(--shadow-sm);">
          <div style="font-size:28px;">🌍</div>
          <div>
            <div style="font-size:14px;font-weight:700;color:var(--text);">HalalFinder Directory</div>
            <div style="font-size:12px;color:var(--muted);">Global halal business directory →</div>
          </div>
        </a>`;
    },
    err => showNearbyError('Could not get your location. Please allow location access.')
  );
}

function showNearbyError(msg) {
  document.getElementById('nearbyContent').innerHTML = `
    <div style="text-align:center;padding:24px;color:var(--red);font-size:13px;">${msg}</div>
    <div style="text-align:center;"><button onclick="findNearby()" style="background:var(--g2);color:white;border:none;border-radius:12px;padding:10px 20px;font-size:13px;font-weight:600;cursor:pointer;font-family:'Outfit',sans-serif;">Try Again</button></div>`;
}


let currentPhotoBase64 = null;

function openPhotoAnalysis() {
  document.getElementById('photoModal').style.display = 'flex';
}

function closePhotoModal() {
  document.getElementById('photoModal').style.display = 'none';
  clearPhoto();
  document.getElementById('photoResult').style.display = 'none';
  document.getElementById('photoResult').innerHTML = '';
}

function handlePhotoFile(input) {
  const file = input.files[0];
  if (!file) return;
  readPhotoFile(file);
}

function handlePhotoDrop(e) {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) readPhotoFile(file);
}

function readPhotoFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    currentPhotoBase64 = dataUrl.split(',')[1];
    document.getElementById('photoPreview').src = dataUrl;
    document.getElementById('photoPreviewWrap').style.display = 'block';
    document.getElementById('analyzePhotoBtn').style.display = 'block';
    document.getElementById('photoUploadArea').style.opacity = '0.5';
  };
  reader.readAsDataURL(file);
}

function clearPhoto() {
  currentPhotoBase64 = null;
  document.getElementById('photoPreviewWrap').style.display = 'none';
  document.getElementById('analyzePhotoBtn').style.display = 'none';
  document.getElementById('photoUploadArea').style.opacity = '1';
  document.getElementById('photoFileInput').value = '';
}

async function analyzePhoto() {
  if (!currentPhotoBase64) return;

  document.getElementById('analyzePhotoBtn').style.display = 'none';
  document.getElementById('photoLoading').style.display = 'block';
  document.getElementById('photoResult').style.display = 'none';
  document.getElementById('photoLoadingText').textContent = 'Reading ingredients with AI…';

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'anthropic-dangerous-direct-browser-access': 'true' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: 'image/jpeg', data: currentPhotoBase64 }
            },
            {
              type: 'text',
              text: `Sen uzman bir helal gıda analistisin. Bu ürün fotoğrafını analiz et:

1. Tüm içerik/bileşen listesini oku (Almanca, Fransızca, İngilizce, Türkçe olabilir)
2. Her madde için HELAL / ŞÜPHELİ / HARAM kararı ver
3. Özellikle şunlara dikkat et:
   - Domuz/Schwein/Porc/Pork ve türevleri → HARAM
   - Alkol/Ethanol/Alcool → HARAM
   - E-kodları (E120, E441, E471, E472, E476 vb.) → kaynağını belirt
   - Jelatin/Gelatine/Gélatine → kaynağı belirsizse ŞÜPHELİ
   - Aroma/Arôme/Flavouring → ŞÜPHELİ
   - Lab/Rennet (peynir mayası) → kaynağı belirsizse ŞÜPHELİ
   - Karmin/Carmine/E120 → HARAM (böcek kaynaklı)

Sadece JSON ile yanıtla, markdown veya açıklama ekleme:
{
  "productName": "görünen ürün adı veya Bilinmiyor",
  "ingredientsRaw": "okunan içerik listesi tam metin",
  "verdict": "halal" veya "mushbooh" veya "haram",
  "halalScore": 0-100 arası puan,
  "ingredients": [
    {"name": "madde adı", "status": "halal/mushbooh/haram", "reason": "kısa Türkçe gerekçe"}
  ],
  "summary": "Türkçe tek cümle özet"
}`
            }
          ]
        }]
      })
    });

    const data = await response.json();
    document.getElementById('photoLoading').style.display = 'none';

    if (data.error) {
      showPhotoError('API error: ' + data.error.message);
      return;
    }

    const text = data.content.map(c => c.text || '').join('');
    let result;
    try {
      const clean = text.replace(/```json|```/g, '').trim();
      result = JSON.parse(clean);
    } catch(e) {
      showPhotoError('Could not parse AI response. Please try a clearer photo.');
      return;
    }

    renderPhotoResult(result);

  } catch(err) {
    document.getElementById('photoLoading').style.display = 'none';
    showPhotoError('Network error. Please check your connection.');
  }
}

function renderPhotoResult(r) {
  const vMap = {
    halal:    { cls:'halal',    icon:'✅', label:'HALAL',    ar:'حلال',   bg:'rgba(14,80,38,0.8)',    border:'#4cce7e' },
    mushbooh: { cls:'mushbooh', icon:'⚠️', label:'MUSHBOOH', ar:'مشبوه',  bg:'rgba(120,55,14,0.8)',   border:'#fbbf24' },
    haram:    { cls:'haram',    icon:'❌', label:'HARAM',    ar:'حرام',   bg:'rgba(127,29,29,0.8)',   border:'#fca5a5' },
  };
  const v = vMap[r.verdict] || vMap.mushbooh;

  const sorted = (r.ingredients || []).sort((a,b) => {
    const o = {haram:0,mushbooh:1,halal:2};
    return (o[a.status]||1) - (o[b.status]||1);
  });

  const ingrRows = sorted.map(i => `
    <div style="display:flex;align-items:flex-start;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.07);gap:10px;">
      <div>
        <div style="font-size:13px;font-weight:600;color:white;">${i.name}</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.45);margin-top:1px;">${i.reason||''}</div>
      </div>
      <span style="font-size:10px;font-weight:700;padding:3px 9px;border-radius:20px;white-space:nowrap;flex-shrink:0;
        background:${i.status==='halal'?'rgba(76,206,126,0.2)':i.status==='haram'?'rgba(252,165,165,0.2)':'rgba(251,191,36,0.2)'};
        color:${i.status==='halal'?'#4cce7e':i.status==='haram'?'#fca5a5':'#fbbf24'};">
        ${i.status==='halal'?'✓ Halal':i.status==='haram'?'✗ Haram':'⚠ Doubtful'}
      </span>
    </div>`).join('');

  document.getElementById('photoResult').innerHTML = `
    <div style="border-radius:16px;padding:18px;border:2px solid ${v.border};background:${v.bg};display:flex;align-items:center;gap:14px;margin-bottom:12px;">
      <div style="font-size:40px;line-height:1;">${v.icon}</div>
      <div style="flex:1;">
        <div style="font-size:22px;font-weight:800;color:white;letter-spacing:-0.5px;">${v.label} <span style="font-family:'Noto Kufi Arabic',serif;font-size:18px;opacity:0.7;">${v.ar}</span></div>
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-top:3px;">${r.summary||''}</div>
      </div>
    </div>

    ${sorted.length > 0 ? `
    <div style="background:rgba(255,255,255,0.05);border-radius:14px;padding:14px 16px;margin-bottom:10px;">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:rgba(255,255,255,0.4);margin-bottom:8px;">🧪 Ingredients</div>
      ${ingrRows}
    </div>` : ''}

    ${r.ingredientsRaw ? `
    <div style="background:rgba(255,255,255,0.04);border-radius:12px;padding:12px 14px;">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:rgba(255,255,255,0.3);margin-bottom:6px;">📋 Raw Text</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5);line-height:1.7;">${r.ingredientsRaw}</div>
    </div>` : ''}
  `;

  document.getElementById('photoResult').style.display = 'block';
  document.getElementById('analyzePhotoBtn').style.display = 'block';
  document.getElementById('analyzePhotoBtn').textContent = '🔄 Analyze Again';
}

function showPhotoError(msg) {
  document.getElementById('photoResult').innerHTML = `
    <div style="background:rgba(185,28,28,0.2);border:1px solid #fca5a5;border-radius:12px;padding:14px;color:#fca5a5;font-size:13px;text-align:center;">❌ ${msg}</div>`;
  document.getElementById('photoResult').style.display = 'block';
  document.getElementById('analyzePhotoBtn').style.display = 'block';
}

/* ============================================================
   EMAIL ANALYSIS (Claude API)
============================================================ */
function openEmailAnalysis() {
  document.getElementById('emailModal').style.display = 'flex';
}

function closeEmailModal() {
  document.getElementById('emailModal').style.display = 'none';
  document.getElementById('emailResult').style.display = 'none';
  document.getElementById('emailResult').innerHTML = '';
  document.getElementById('emailText').value = '';
}

function fillExampleEmail() {
  document.getElementById('emailText').value = `Dear Customer,

Thank you for contacting us regarding the halal status of our Chocolate Hazelnut Spread (Product code: CHN-200g).

We can confirm the following:

HALAL CERTIFICATION:
Our product is certified by IFANCA (Islamic Food and Nutrition Council of America) with certificate number IFANCA-2024-88721, valid until December 2025.

INGREDIENTS:
Sugar, Palm Oil, Hazelnuts (13%), Skimmed Milk Powder, Fat-Reduced Cocoa (7.4%), Lecithin (Soya), Vanillin (Artificial Flavour).

ALLERGENS: Contains milk, hazelnuts, soy.

All ingredients used in this product are sourced from halal-certified suppliers. Our manufacturing facility is regularly audited by IFANCA.

If you have any further questions, please do not hesitate to contact us.

Kind regards,
Consumer Services Team
NutriFood Europe GmbH`;
}

async function analyzeEmail() {
  const emailText = document.getElementById('emailText').value.trim();
  if (!emailText || emailText.length < 20) {
    document.getElementById('emailResult').innerHTML = `<div style="background:rgba(185,28,28,0.2);border:1px solid #fca5a5;border-radius:12px;padding:14px;color:#fca5a5;font-size:13px;text-align:center;">❌ Please paste an email first.</div>`;
    document.getElementById('emailResult').style.display = 'block';
    return;
  }

  document.getElementById('analyzeEmailBtn').style.display = 'none';
  document.getElementById('emailLoading').style.display = 'block';
  document.getElementById('emailResult').style.display = 'none';

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'anthropic-dangerous-direct-browser-access': 'true' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Sen uzman bir helal gıda danışmanısın. Aşağıdaki üretici mail/cevabını analiz et ve helal durumunu değerlendir.

Mail metni Almanca, Türkçe, Fransızca veya İngilizce olabilir.
Özellikle şunları ara:
- Hayvansal içerikler (jelatin, lab/rennet, hayvansal yağ)
- Alkol/etanol içeriği
- E-kodu bilgileri (E471, E120, E441 vb.)
- Helal sertifika bilgisi
- "Vegetarisch/Vegan" ifadeleri (helal için olumlu işaret)
- Domuz/Schwein/Porc içeriği

MAİL:
${emailText}

Sadece JSON ile yanıtla, markdown ekleme:
{
  "productName": "bahsedilen ürün adı",
  "halalStatus": "certified" veya "not_certified" veya "unknown" veya "partial",
  "certifications": [{"body": "sertifika kurumu", "number": "numara varsa", "validUntil": "tarih varsa"}],
  "ingredients": [{"name": "madde", "status": "halal/mushbooh/haram", "reason": "Türkçe kısa gerekçe"}],
  "keyFindings": ["önemli bulgu 1", "önemli bulgu 2"],
  "warnings": ["uyarı varsa"],
  "overallVerdict": "halal" veya "mushbooh" veya "haram" veya "unknown",
  "summary": "Üreticinin söylediklerinin 2 cümlelik Türkçe özeti"
}`
        }]
      })
    });

    const data = await response.json();
    document.getElementById('emailLoading').style.display = 'none';
    document.getElementById('analyzeEmailBtn').style.display = 'block';

    if (data.error) {
      showEmailError('API error: ' + data.error.message);
      return;
    }

    const text = data.content.map(c => c.text || '').join('');
    let result;
    try {
      result = JSON.parse(text.replace(/```json|```/g, '').trim());
    } catch(e) {
      showEmailError('Could not parse response. Please try again.');
      return;
    }

    renderEmailResult(result);

  } catch(err) {
    document.getElementById('emailLoading').style.display = 'none';
    document.getElementById('analyzeEmailBtn').style.display = 'block';
    showEmailError('Network error. Check your connection.');
  }
}

function renderEmailResult(r) {
  const statusColors = {
    certified:     { bg:'rgba(14,80,38,0.8)',  border:'#4cce7e', label:'✅ HALAL CERTIFIED',     sub:'Company confirmed halal certification' },
    not_certified: { bg:'rgba(127,29,29,0.8)', border:'#fca5a5', label:'❌ NOT CERTIFIED',        sub:'No halal certification mentioned' },
    partial:       { bg:'rgba(120,55,14,0.8)', border:'#fbbf24', label:'⚠️ PARTIALLY CERTIFIED', sub:'Some products certified, verify specifically' },
    unknown:       { bg:'rgba(55,55,55,0.8)',  border:'#9ca3af', label:'❓ UNCLEAR',              sub:'Could not determine certification status' },
  };
  const s = statusColors[r.halalStatus] || statusColors.unknown;

  // Certifications
  const certHTML = (r.certifications || []).length > 0
    ? (r.certifications).map(c => `
        <div style="background:rgba(76,206,126,0.1);border:1px solid rgba(76,206,126,0.3);border-radius:10px;padding:10px 12px;margin-bottom:6px;">
          <div style="font-size:13px;font-weight:700;color:#4cce7e;">🏅 ${c.body}</div>
          ${c.number ? `<div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px;">Cert #: ${c.number}</div>` : ''}
          ${c.validUntil ? `<div style="font-size:11px;color:rgba(255,255,255,0.5);">Valid until: ${c.validUntil}</div>` : ''}
        </div>`).join('')
    : `<div style="color:rgba(255,255,255,0.4);font-size:12px;">No certification details found in email.</div>`;

  // Key findings
  const findingsHTML = (r.keyFindings || []).map(f =>
    `<div style="display:flex;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.07);">
      <span style="color:#4cce7e;flex-shrink:0;">→</span>
      <span style="font-size:13px;color:rgba(255,255,255,0.8);">${f}</span>
    </div>`).join('');

  // Warnings
  const warningsHTML = (r.warnings || []).length > 0
    ? `<div style="background:rgba(251,191,36,0.1);border:1px solid rgba(251,191,36,0.3);border-radius:10px;padding:12px;margin-top:8px;">
        ${r.warnings.map(w => `<div style="font-size:12px;color:#fbbf24;">⚠️ ${w}</div>`).join('')}
      </div>` : '';

  // Ingredients
  const ingrHTML = (r.ingredients || []).length > 0
    ? `<div style="background:rgba(255,255,255,0.04);border-radius:12px;padding:12px 14px;margin-top:8px;">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:rgba(255,255,255,0.35);margin-bottom:8px;">🧪 Ingredients from Email</div>
        ${r.ingredients.map(i => `
          <div style="display:flex;align-items:flex-start;justify-content:space-between;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.06);gap:10px;">
            <div>
              <div style="font-size:13px;font-weight:600;color:white;">${i.name}</div>
              ${i.reason ? `<div style="font-size:11px;color:rgba(255,255,255,0.4);">${i.reason}</div>` : ''}
            </div>
            <span style="font-size:10px;font-weight:700;padding:3px 8px;border-radius:20px;flex-shrink:0;white-space:nowrap;
              background:${i.status==='halal'?'rgba(76,206,126,0.2)':i.status==='haram'?'rgba(252,165,165,0.2)':'rgba(251,191,36,0.2)'};
              color:${i.status==='halal'?'#4cce7e':i.status==='haram'?'#fca5a5':'#fbbf24'};">
              ${i.status==='halal'?'✓ Halal':i.status==='haram'?'✗ Haram':'⚠ Doubtful'}
            </span>
          </div>`).join('')}
      </div>` : '';

  document.getElementById('emailResult').innerHTML = `
    <!-- Verdict banner -->
    <div style="border-radius:16px;padding:16px 18px;border:2px solid ${s.border};background:${s.bg};display:flex;align-items:center;gap:14px;margin-bottom:12px;">
      <div style="flex:1;">
        <div style="font-size:18px;font-weight:800;color:white;">${s.label}</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.55);margin-top:3px;">${r.summary || s.sub}</div>
      </div>
      <div style="text-align:center;flex-shrink:0;">
        <div style="font-size:30px;font-weight:800;color:white;">${r.score}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.4);">/ 100</div>
      </div>
    </div>

    <!-- Certifications -->
    <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:12px 14px;margin-bottom:8px;">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:rgba(255,255,255,0.35);margin-bottom:8px;">🏅 Halal Certifications</div>
      ${certHTML}
    </div>

    <!-- Key findings -->
    ${findingsHTML ? `
    <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:12px 14px;margin-bottom:8px;">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:rgba(255,255,255,0.35);margin-bottom:4px;">📋 Key Findings</div>
      ${findingsHTML}
    </div>` : ''}

    ${ingrHTML}
    ${warningsHTML}
  `;

  document.getElementById('emailResult').style.display = 'block';
}

function showEmailError(msg) {
  document.getElementById('emailResult').innerHTML = `
    <div style="background:rgba(185,28,28,0.2);border:1px solid #fca5a5;border-radius:12px;padding:14px;color:#fca5a5;font-size:13px;text-align:center;">❌ ${msg}</div>`;
  document.getElementById('emailResult').style.display = 'block';
}



// ── products.js verilerini BRAND_DB'ye merge et ─────────────────────────────
// products.js'deki window.EXTRA_DB_E1 ve window.EXTRA_DB_E2 objeleri
// DOMContentLoaded anında BRAND_DB ile birleştirilir.
// Script sırası: products.js → app.js (index.html'de bu sırayla yüklenmeli)
window.addEventListener('DOMContentLoaded', function() {
  [window.EXTRA_DB_E1, window.EXTRA_DB_E2].forEach(function(E) {
    if (E && typeof E === 'object') {
      Object.keys(E).forEach(function(k) { BRAND_DB[k] = E[k]; });
    }
  });
  console.log('BarcodeHalal:', Object.keys(BRAND_DB).length, 'urun yuklendi');
});
var emailModal = document.getElementById('emailModal');
if (emailModal) {
  emailModal.addEventListener('click', function(e) {
    if (e.target === this) closeEmailModal();
  });
}

var photoModal = document.getElementById('photoModal');
if (photoModal) {
  photoModal.addEventListener('click', function(e) {
    if (e.target === this) closePhotoModal();
  });
}

var cameraModal = document.getElementById('cameraModal');
if (cameraModal) {
  cameraModal.addEventListener('click', function(e) {
    if (e.target === this) closeCamera();
  });
}
function openReport(barcode, productName, currentVerdict) {
  document.getElementById('reportBarcode').value = barcode || '';
  document.getElementById('reportProductName').value = productName || '';
  document.getElementById('reportCurrentVerdict').value = currentVerdict || '';
  document.getElementById('reportSuccess').style.display = 'none';
  document.getElementById('reportFormContent').style.display = 'block';
  document.getElementById('reportModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeReport() {
  document.getElementById('reportModal').classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('reportForm').reset();
  document.getElementById('reportPhotoPreview').innerHTML = '';
  document.getElementById('reportSuccess').style.display = 'none';
  document.getElementById('reportFormContent').style.display = 'block';
}

function previewReportPhotos(input) {
  const preview = document.getElementById('reportPhotoPreview');
  preview.innerHTML = '';
  Array.from(input.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = document.createElement('img');
      img.src = e.target.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
}

async function submitReport(e) {
  e.preventDefault();

  const btn = document.getElementById('reportSubmitBtn');
  btn.disabled = true;
  btn.textContent = '⏳ Gönderiliyor...';

  const form = document.getElementById('reportForm');
  const data = new FormData(form);

  const reportData = {
    barcode: data.get('barcode') || '',
    productName: data.get('productName') || '',
    brand: data.get('brand') || '',
    issueType: data.get('issueType') || '',
    userNote: data.get('userNote') || '',
    photos: [],
    status: 'pending',
    source: 'user_report'
  };

  try {
    if (window.FB_READY && typeof window.FB_saveReport === 'function') {
      await window.FB_saveReport(reportData);
    } else {
      const res = await fetch('https://formspree.io/f/xykvbqzy', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error();
    }

    document.getElementById('reportFormContent').style.display = 'none';
    document.getElementById('reportSuccess').style.display = 'block';

  } catch (err) {
    btn.disabled = false;
    btn.textContent = '📩 Bildirimi Gönder';
    alert('Gönderme hatası. Lütfen tekrar deneyin.');
    console.error('[BarcodeHalal] Rapor gönderme hatası:', err);
  }
}
setLang("tr");
