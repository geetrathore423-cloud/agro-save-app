import { CodeFile, CropItem, WeedItem, AiDoctorRemedy } from '../types';

export const INDIAN_CROPS: CropItem[] = [
  { 
    id: 'wheat', code: 'WHEAT', nameEn: 'Wheat', nameHi: 'गेहूं', emoji: '🌾', standardDosageLitersPerHectare: 2.5,
    lifecycle: {
      weedicideDay: 30, weedicideNameEn: 'Clodinafop-propargyl 15% WP', weedicideNameHi: 'क्लॉडिनाफॉप-प्रोपारगिल 15% WP',
      fertilizerDay: 45, fertilizerNameEn: 'Urea Top-Dress (45 kg/acre)', fertilizerNameHi: 'यूरिया टॉप-ड्रेस (45 किग्रा/एकड़)',
      secondPesticideDay: 65, secondPesticideNameEn: 'Propiconazole 25% EC (Tilt)', secondPesticideNameHi: 'प्रोपिकोनाज़ोल 25% EC (टिल्ट)',
      harvestDay: 125
    }
  },
  { 
    id: 'paddy', code: 'PADDY', nameEn: 'Paddy / Rice', nameHi: 'धान', emoji: '🌾', standardDosageLitersPerHectare: 2.8,
    lifecycle: {
      weedicideDay: 20, weedicideNameEn: 'Bispyribac-sodium 10% SC', weedicideNameHi: 'बिस्पायरीबैक-सोडियम 10% SC',
      fertilizerDay: 35, fertilizerNameEn: 'Zinc Sulphate + Urea 1st Split', fertilizerNameHi: 'जिंक सल्फेट + यूरिया पहली खुराक',
      secondPesticideDay: 55, secondPesticideNameEn: 'Cartap Hydrochloride 50% SP', secondPesticideNameHi: 'कार्टाप हाइड्रोक्लोराइड 50% SP',
      harvestDay: 130
    }
  },
  { 
    id: 'maize', code: 'MAIZE', nameEn: 'Maize', nameHi: 'मक्का', emoji: '🌽', standardDosageLitersPerHectare: 3.0,
    lifecycle: {
      weedicideDay: 20, weedicideNameEn: 'Atrazine 50% WP / Tembotrione', weedicideNameHi: 'एट्राजिन 50% WP / टेम्बोट्रियोन',
      fertilizerDay: 35, fertilizerNameEn: 'Urea Knee-High Stage Split', fertilizerNameHi: 'घुटने की ऊंचाई पर यूरिया छिड़काव',
      secondPesticideDay: 50, secondPesticideNameEn: 'Emamectin Benzoate (Fall Armyworm)', secondPesticideNameHi: 'इमामेक्टिन बेंजोएट (फॉल आर्मीवर्म)',
      harvestDay: 105
    }
  },
  { 
    id: 'soybean', code: 'SOYBEAN', nameEn: 'Soybean', nameHi: 'सोयाबीन', emoji: '🌱', standardDosageLitersPerHectare: 2.0,
    lifecycle: {
      weedicideDay: 18, weedicideNameEn: 'Imazethapyr 10% SL @ 400ml/acre', weedicideNameHi: 'इमाज़ेथापायर 10% SL @ 400ml/एकड़',
      fertilizerDay: 30, fertilizerNameEn: '19:19:19 Foliar Nutrition Spray', fertilizerNameHi: '19:19:19 घुलनशील खाद स्प्रे',
      secondPesticideDay: 48, secondPesticideNameEn: 'Chlorantraniliprole (Girdle Beetle)', secondPesticideNameHi: 'कोराजन / गर्डल बीटल रोकथाम',
      harvestDay: 95
    }
  },
  { 
    id: 'cotton', code: 'COTTON', nameEn: 'Cotton', nameHi: 'कपास', emoji: '☁️', standardDosageLitersPerHectare: 3.5,
    lifecycle: {
      weedicideDay: 25, weedicideNameEn: 'Pyrithiobac Sodium 10% EC', weedicideNameHi: 'पायरीथियोबैक सोडियम 10% EC',
      fertilizerDay: 45, fertilizerNameEn: 'NPK 13:00:45 + Boron 20%', fertilizerNameHi: 'पोटाशियम नाइट्रेट + बोरॉन 20%',
      secondPesticideDay: 75, secondPesticideNameEn: 'Profenofos + Cypermethrin (Bollworm)', secondPesticideNameHi: 'गुलाबी सुंडी रोकथाम कीटनाशक',
      harvestDay: 160
    }
  },
  { 
    id: 'sugarcane', code: 'SUGARCANE', nameEn: 'Sugarcane', nameHi: 'गन्ना', emoji: '🎋', standardDosageLitersPerHectare: 4.5,
    lifecycle: {
      weedicideDay: 35, weedicideNameEn: 'Atrazine 50% WP @ 1kg/acre', weedicideNameHi: 'एट्राजिन 50% WP @ 1 किग्रा/एकड़',
      fertilizerDay: 60, fertilizerNameEn: 'Urea + Potash 1st Earthing Top-Dress', fertilizerNameHi: 'मिट्टी चढ़ाते समय यूरिया + पोटाश',
      secondPesticideDay: 95, secondPesticideNameEn: 'Chlorantraniliprole 0.4% G (Top Borer)', secondPesticideNameHi: 'टॉप बोरर व कंसुआ रोकथाम',
      harvestDay: 330
    }
  },
  { 
    id: 'sesame', code: 'SESAME', nameEn: 'Sesame / Til', nameHi: 'तिल', emoji: '🌿', standardDosageLitersPerHectare: 1.5,
    lifecycle: {
      weedicideDay: 18, weedicideNameEn: 'Quizalofop-ethyl 5% EC', weedicideNameHi: 'क्विज़ालोफॉप-इथाइल 5% EC',
      fertilizerDay: 28, fertilizerNameEn: '2% Urea Foliar Spray', fertilizerNameHi: '2% यूरिया घोल का पर्णीय छिड़काव',
      secondPesticideDay: 45, secondPesticideNameEn: 'Dimethoate 30% EC (Leaf Webbed)', secondPesticideNameHi: 'डाइमेथोएट 30% EC (पत्ती लपेटक)',
      harvestDay: 85
    }
  },
  { 
    id: 'mustard', code: 'MUSTARD', nameEn: 'Mustard / Sarson', nameHi: 'सरसों', emoji: '🌼', standardDosageLitersPerHectare: 2.2,
    lifecycle: {
      weedicideDay: 22, weedicideNameEn: 'Isoproturon 75% WP', weedicideNameHi: 'आइसोप्रोट्यूरॉन 75% WP',
      fertilizerDay: 35, fertilizerNameEn: 'Sulphur 90% WG + Urea 1st Irrigation', fertilizerNameHi: 'सल्फर 90% + यूरिया पहली सिंचाई',
      secondPesticideDay: 55, secondPesticideNameEn: 'Dimethoate (Mustard Aphids / चेपा)', secondPesticideNameHi: 'डाइमेथोएट / माहू-चेपा रोकथाम',
      harvestDay: 115
    }
  },
  { 
    id: 'groundnut', code: 'GROUNDNUT', nameEn: 'Groundnut / Peanut', nameHi: 'मूंगफली', emoji: '🥜', standardDosageLitersPerHectare: 2.4,
    lifecycle: {
      weedicideDay: 20, weedicideNameEn: 'Imazethapyr 10% SL', weedicideNameHi: 'इमाज़ेथापायर 10% SL',
      fertilizerDay: 35, fertilizerNameEn: 'Gypsum 200 kg/acre at pegging', fertilizerNameHi: 'सूई बनते समय जिप्सम 200 किग्रा',
      secondPesticideDay: 55, secondPesticideNameEn: 'Hexaconazole 5% SC (Tikka Disease)', secondPesticideNameHi: 'हेक्साकोनाज़ोल (टिक्का फफूंद रोग)',
      harvestDay: 110
    }
  },
  { 
    id: 'chickpea', code: 'CHICKPEA', nameEn: 'Chickpea / Chana', nameHi: 'चना', emoji: '🌿', standardDosageLitersPerHectare: 1.8,
    lifecycle: {
      weedicideDay: 25, weedicideNameEn: 'Pendimethalin 30% EC post/hoeing', weedicideNameHi: 'पेंडीमेथालिन या पहली निराई-गुड़ाई',
      fertilizerDay: 40, fertilizerNameEn: 'NPK 0:52:34 Foliar Spray', fertilizerNameHi: '0:52:34 फूल आने से पूर्व स्प्रे',
      secondPesticideDay: 60, secondPesticideNameEn: 'Emamectin Benzoate (Gram Pod Borer)', secondPesticideNameHi: 'इमामेक्टिन (चना फली छेदक सुंडी)',
      harvestDay: 110
    }
  },
  { 
    id: 'arhar', code: 'ARHAR', nameEn: 'Pigeon Pea / Arhar / Tur', nameHi: 'अरहर / तुअर', emoji: '🌱', standardDosageLitersPerHectare: 2.5,
    lifecycle: {
      weedicideDay: 25, weedicideNameEn: 'Imazethapyr 10% SL @ 350ml/acre', weedicideNameHi: 'इमाज़ेथापायर 10% SL @ 350ml',
      fertilizerDay: 45, fertilizerNameEn: '2% DAP Foliar Spray pre-flowering', fertilizerNameHi: '2% डीएपी घोल का पर्णीय छिड़काव',
      secondPesticideDay: 70, secondPesticideNameEn: 'Indoxacarb 14.5% SC (Pod Borer)', secondPesticideNameHi: 'इंडोक्साकार्ब 14.5% SC (फली छेदक)',
      harvestDay: 155
    }
  },
  { 
    id: 'urad', code: 'URAD', nameEn: 'Black Gram / Urad', nameHi: 'उड़द', emoji: '🥣', standardDosageLitersPerHectare: 1.6,
    lifecycle: {
      weedicideDay: 18, weedicideNameEn: 'Imazethapyr 10% SL', weedicideNameHi: 'इमाज़ेथापायर 10% SL',
      fertilizerDay: 28, fertilizerNameEn: 'Multi-Micronutrient Grade IV', fertilizerNameHi: 'सूक्ष्म पोषक तत्व मिश्रण स्प्रे',
      secondPesticideDay: 42, secondPesticideNameEn: 'Imidacloprid 17.8% SL (Whitefly)', secondPesticideNameHi: 'इमिडाक्लोप्रिड (सफेद मक्खी / पीला मोज़ेक)',
      harvestDay: 75
    }
  },
  { 
    id: 'moong', code: 'MOONG', nameEn: 'Green Gram / Moong', nameHi: 'मूंग', emoji: '🌱', standardDosageLitersPerHectare: 1.6,
    lifecycle: {
      weedicideDay: 18, weedicideNameEn: 'Quizalofop-ethyl 5% EC', weedicideNameHi: 'क्विज़ालोफॉप-इथाइल 5% EC',
      fertilizerDay: 28, fertilizerNameEn: '19:19:19 Soluble Fertilizer Spray', fertilizerNameHi: '19:19:19 घुलनशील खाद स्प्रे',
      secondPesticideDay: 40, secondPesticideNameEn: 'Thiamethoxam 25% WG (Jassids)', secondPesticideNameHi: 'थियामेथॉक्सम 25% WG (रस चूसक कीट)',
      harvestDay: 70
    }
  },
  { 
    id: 'sunflower', code: 'SUNFLOWER', nameEn: 'Sunflower', nameHi: 'सूरजमुखी', emoji: '🌻', standardDosageLitersPerHectare: 2.0,
    lifecycle: {
      weedicideDay: 22, weedicideNameEn: 'Quizalofop 5% EC', weedicideNameHi: 'क्विज़ालोफॉप 5% EC',
      fertilizerDay: 35, fertilizerNameEn: 'Urea Top-Dress at bud stage', fertilizerNameHi: 'कली अवस्था पर यूरिया टॉप-ड्रेस',
      secondPesticideDay: 50, secondPesticideNameEn: 'Carbendazim 50% WP (Alternaria)', secondPesticideNameHi: 'कार्बेन्डाजिम (अल्टरनेरिया झुलसा)',
      harvestDay: 95
    }
  },
  { 
    id: 'bajra', code: 'BAJRA', nameEn: 'Pearl Millet / Bajra', nameHi: 'बाजरा', emoji: '🌾', standardDosageLitersPerHectare: 2.0,
    lifecycle: {
      weedicideDay: 20, weedicideNameEn: 'Atrazine 50% WP @ 800g/acre', weedicideNameHi: 'एट्राजिन 50% WP @ 800 ग्राम',
      fertilizerDay: 30, fertilizerNameEn: 'Urea 1st Split post-tillering', fertilizerNameHi: 'कल्ले फूटते समय यूरिया टॉप-ड्रेस',
      secondPesticideDay: 48, secondPesticideNameEn: 'Metalaxyl 35% WS (Downy Mildew)', secondPesticideNameHi: 'मेटालेक्सिल (जोगिया/डाउनी मिल्ड्यू)',
      harvestDay: 85
    }
  },
  { 
    id: 'jowar', code: 'JOWAR', nameEn: 'Sorghum / Jowar', nameHi: 'ज्वार', emoji: '🌾', standardDosageLitersPerHectare: 2.2,
    lifecycle: {
      weedicideDay: 22, weedicideNameEn: 'Atrazine 50% WP', weedicideNameHi: 'एट्राजिन 50% WP',
      fertilizerDay: 35, fertilizerNameEn: 'Urea 35 kg/acre top-dress', fertilizerNameHi: 'यूरिया 35 किग्रा/एकड़ टॉप-ड्रेस',
      secondPesticideDay: 50, secondPesticideNameEn: 'Phorate 10% G / Carbofuran', secondPesticideNameHi: 'तना छेदक मक्खी नियंत्रण',
      harvestDay: 100
    }
  },
  { 
    id: 'potato', code: 'POTATO', nameEn: 'Potato', nameHi: 'आलू', emoji: '🥔', standardDosageLitersPerHectare: 3.2,
    lifecycle: {
      weedicideDay: 15, weedicideNameEn: 'Metribuzin 70% WP @ 100g/acre', weedicideNameHi: 'मेट्रिब्युजिन 70% WP @ 100 ग्राम',
      fertilizerDay: 30, fertilizerNameEn: 'Urea + SOP during 1st Earthing', fertilizerNameHi: 'मिट्टी चढ़ाते समय यूरिया + पोटाश',
      secondPesticideDay: 45, secondPesticideNameEn: 'Mancozeb 75% WP (Late Blight Preventive)', secondPesticideNameHi: 'मेंकोज़ेब (पिछेता झुलसा रोकथाम)',
      harvestDay: 90
    }
  },
  { 
    id: 'onion', code: 'ONION', nameEn: 'Onion', nameHi: 'प्याज़', emoji: '🧅', standardDosageLitersPerHectare: 2.5,
    lifecycle: {
      weedicideDay: 20, weedicideNameEn: 'Oxyfluorfen 23.5% EC', weedicideNameHi: 'ऑक्सीफ्लोरफेन 23.5% EC',
      fertilizerDay: 35, fertilizerNameEn: 'NPK 0:52:34 + Micronutrients', fertilizerNameHi: '0:52:34 + सूक्ष्म पोषक तत्व स्प्रे',
      secondPesticideDay: 50, secondPesticideNameEn: 'Fipronil 5% SC (Thrips / थ्रिप्स)', secondPesticideNameHi: 'फिप्रोनिल 5% SC (थ्रिप्स नियंत्रण)',
      harvestDay: 120
    }
  },
  { 
    id: 'tomato', code: 'TOMATO', nameEn: 'Tomato', nameHi: 'टमाटर', emoji: '🍅', standardDosageLitersPerHectare: 3.0,
    lifecycle: {
      weedicideDay: 18, weedicideNameEn: 'Metribuzin 70% WP early hoeing', weedicideNameHi: 'हल्की निराई व मेट्रिब्युजिन',
      fertilizerDay: 30, fertilizerNameEn: 'Calcium Nitrate + Boron 20%', fertilizerNameHi: 'कैल्शियम नाइट्रेट + बोरॉन 20%',
      secondPesticideDay: 48, secondPesticideNameEn: 'Chlorantraniliprole (Fruit Borer)', secondPesticideNameHi: 'कोराजन (फल छेदक इल्ली रोकथाम)',
      harvestDay: 110
    }
  },
  { 
    id: 'chilli', code: 'CHILLI', nameEn: 'Chilli', nameHi: 'मिर्च', emoji: '🌶️', standardDosageLitersPerHectare: 2.8,
    lifecycle: {
      weedicideDay: 20, weedicideNameEn: 'Quizalofop 5% EC + Hoeing', weedicideNameHi: 'क्विज़ालोफॉप 5% EC व निराई',
      fertilizerDay: 35, fertilizerNameEn: '19:19:19 + Multi-Micro foliar', fertilizerNameHi: '19:19:19 + सूक्ष्म पोषक तत्व स्प्रे',
      secondPesticideDay: 50, secondPesticideNameEn: 'Diafenthiuron 50% WP (Thrips & Mites)', secondPesticideNameHi: 'डायफेंथियूरॉन (चुरड़ा-मुरड़ा रोग/माइट्स)',
      harvestDay: 130
    }
  }
];

export const INDIAN_WEEDS: WeedItem[] = [
  { id: 'phalaris', code: 'PHALARIS', nameEn: 'Phalaris minor / Gulli Danda', nameHi: 'गुल्ली डंडा', scientificName: 'Phalaris minor' },
  { id: 'chenopodium', code: 'CHENOPODIUM', nameEn: 'Chenopodium album / Bathua', nameHi: 'बथुआ', scientificName: 'Chenopodium album' },
  { id: 'cyperus', code: 'CYPERUS', nameEn: 'Cyperus rotundus / Motha', nameHi: 'मोथा', scientificName: 'Cyperus rotundus' },
  { id: 'parthenium', code: 'PARTHENIUM', nameEn: 'Parthenium hysterophorus / Gajar Ghas', nameHi: 'गाजर घास', scientificName: 'Parthenium hysterophorus' },
  { id: 'amaranthus', code: 'AMARANTHUS', nameEn: 'Amaranthus viridis / Chaulai', nameHi: 'चौलाई', scientificName: 'Amaranthus viridis' },
  { id: 'ban_sarson', code: 'BAN_SARSON', nameEn: 'Wild Mustard / Ban Sarson', nameHi: 'बन सरसों', scientificName: 'Sinapis arvensis' },
  { id: 'cyanotis', code: 'CYANOTIS', nameEn: 'Cyanotis axillaris / Solani / Kanjira', nameHi: 'सायनोटिस ऑक्सिलारिस', scientificName: 'Cyanotis axillaris' },
  { id: 'digera', code: 'DIGERA', nameEn: 'Digera arvensis / Lahsua', nameHi: 'दिगेरा / लहसुआ', scientificName: 'Digera arvensis' },
  { id: 'oxalis', code: 'OXALIS', nameEn: 'Oxalis corniculata / Khati Booti', nameHi: 'ऑक्सलिस / खट्टी बूटी', scientificName: 'Oxalis corniculata' },
  { id: 'cynodon', code: 'CYNODON', nameEn: 'Cynodon dactylon / Doob Ghas', nameHi: 'दूब घास', scientificName: 'Cynodon dactylon' },
  { id: 'echinochloa', code: 'ECHINOCHLOA', nameEn: 'Echinochloa crus-galli / Sanwa', nameHi: 'सांवा', scientificName: 'Echinochloa crus-galli' },
  { id: 'anagallis', code: 'ANAGALLIS', nameEn: 'Anagallis arvensis / Krishnaneel', nameHi: 'कृष्णनील', scientificName: 'Anagallis arvensis' },
  { id: 'convolvulus', code: 'CONVOLVULUS', nameEn: 'Convolvulus arvensis / Hirankhuri', nameHi: 'हिरणखुरी', scientificName: 'Convolvulus arvensis' },
  { id: 'argemone', code: 'ARGEMONE', nameEn: 'Argemone mexicana / Satyanashi', nameHi: 'सत्यानाशी', scientificName: 'Argemone mexicana' },
  { id: 'commelina', code: 'COMMELINA', nameEn: 'Commelina benghalensis / Kankowa', nameHi: 'कनकोवा', scientificName: 'Commelina benghalensis' },
  { id: 'portulaca', code: 'PORTULACA', nameEn: 'Portulaca oleracea / Kulfa', nameHi: 'कुलफा', scientificName: 'Portulaca oleracea' },
  { id: 'tribulus', code: 'TRIBULUS', nameEn: 'Tribulus terrestris / Gokhru', nameHi: 'गोखरू', scientificName: 'Tribulus terrestris' },
  { id: 'celosia', code: 'CELOSIA', nameEn: 'Celosia argentea / Murga Phool', nameHi: 'मुरगा फूल', scientificName: 'Celosia argentea' },
  { id: 'solanum', code: 'SOLANUM', nameEn: 'Solanum nigrum / Makoy', nameHi: 'मकोय', scientificName: 'Solanum nigrum' },
  { id: 'xanthium', code: 'XANTHIUM', nameEn: 'Xanthium strumarium / Bhangra / Cocklebur', nameHi: 'भंगरा', scientificName: 'Xanthium strumarium' }
];

export const AI_DOCTOR_REMEDIES: AiDoctorRemedy[] = [
  {
    id: 'phalaris_minor',
    keywords: ['gulli', 'danda', 'phalaris', 'mama', 'गुल्ली', 'डंडा', 'गेहूं का मामा', 'weed'],
    questionHi: 'गेहूं में गुल्ली डंडा (Phalaris minor) का नियंत्रण कैसे करें?',
    questionEn: 'How to control Gulli Danda (Phalaris minor) weed in wheat?',
    answerHi: 'गेहूं में गुल्ली डंडा (Phalaris minor) के नियंत्रण हेतु बुवाई के 30-35 दिन बाद (पहली सिंचाई के बाद ओट आने पर) क्लॉडिनाफॉप-प्रोपारगिल 15% WP @ 160 ग्राम/एकड़ या सल्फोसल्फ्यूरॉन 75% WG @ 13.3 ग्राम/एकड़ का 150 लीटर पानी में मिलाकर फ्लैट फैन नोज़ल से स्प्रे करें। यदि दवा के प्रति प्रतिरोध (resistance) दिखे तो पाइनोक्साडेन 5.1% EC (एक्सियल) @ 400 मिली/एकड़ का उपयोग करें।',
    answerEn: 'To control Phalaris minor (Gulli Danda) in wheat fields, spray Clodinafop-propargyl 15% WP @ 160g/acre or Sulfosulfuron 75% WG @ 13.3g/acre mixed in 150 liters of water at 30-35 days after sowing (after 1st irrigation). If herbicide resistance is observed, switch to Pinoxaden 5.1% EC @ 400ml/acre.',
    recommendedChemical: 'Clodinafop 15% WP / Sulfosulfuron 75% WG',
    recommendedDosage: '160g/acre or 13.3g/acre in 150L water',
    modeTipHi: 'AGRO SAVE मोड 1 (लक्षित खरपतवार मारक) चुनें ताकि सोलेनोइड केवल खरपतवार पर दवा स्प्रे करे।',
    modeTipEn: 'Select AGRO SAVE Mode 1 (Targeted Weedicide) so the solenoid valve actuates strictly on weed clusters.'
  },
  {
    id: 'yellow_rust',
    keywords: ['yellow', 'rust', 'ratua', 'haldi', 'पीला', 'रतुआ', 'हल्दी', 'wheat rust', 'गेहूं रोग'],
    questionHi: 'गेहूं में पीला रतुआ (Yellow Rust) रोग की दवा क्या है?',
    questionEn: 'What is the remedy for Yellow Rust disease in wheat?',
    answerHi: 'गेहूं में पीला रतुआ (Puccinia striiformis) के लक्षण (पत्तियों पर पीले रंग की धारियां जो छूने पर हल्दी जैसा पाउडर छोड़ती हैं) दिखते ही प्रोपिकोनाज़ोल 25% EC (टिल्ट) @ 200 मिली या टेबुकोनाज़ोल 25.9% EC @ 200 मिली प्रति एकड़ 200 लीटर पानी में घोलकर तुरंत स्प्रे करें। गंभीर प्रकोप की स्थिति में 12-15 दिन बाद दोबारा छिड़काव करें।',
    answerEn: 'At the earliest detection of Yellow Rust (Puccinia striiformis, characterized by yellow stripes dropping powdery yellow spores), spray Propiconazole 25% EC (Tilt) @ 200ml or Tebuconazole 25.9% EC @ 200ml per acre dissolved in 200 liters of water. Repeat after 12-15 days in case of high disease pressure.',
    recommendedChemical: 'Propiconazole 25% EC (Tilt) / Tebuconazole 25.9% EC',
    recommendedDosage: '200 ml / acre in 200L water',
    modeTipHi: 'मोड 2 (लक्षित फसल खाद/दवा मोड) चुनें ताकि फफूंदनाशी सीधे गेहूं के पत्तों पर गिरे, खाली जमीन पर व्यर्थ न हो।',
    modeTipEn: 'Select Mode 2 (Targeted Crop Foliar) to deposit fungicide directly onto crop canopy, saving 60% liquid.'
  },
  {
    id: 'pink_bollworm',
    keywords: ['pink', 'bollworm', 'sundi', 'cotton', 'गुलाबी', 'सुंडी', 'कपास', 'kapas'],
    questionHi: 'कपास में गुलाबी सुंडी (Pink Bollworm) की रोकथाम कैसे करें?',
    questionEn: 'How to manage Pink Bollworm in cotton crop?',
    answerHi: 'कपास में गुलाबी सुंडी (Pectinophora gossypiella) नियंत्रण हेतु प्रति एकड़ 5-8 फेरोमोन ट्रैप लगाएं। ईटीएल (ETL) पार होने पर इमामेक्टिन बेंजोएट 5% SG @ 80-100 ग्राम/एकड़ या क्लोरेंट्रानिलिप्रोल 18.5% SC (कोराजन) @ 60 मिली/एकड़ का 200 लीटर पानी में शाम के समय छिड़काव करें। कली व गूलर बनने की अवस्था पर विशेष निगरानी रखें।',
    answerEn: 'For Pink Bollworm in cotton, install 5-8 pheromone traps per acre for ETL monitoring. Spray Emamectin Benzoate 5% SG @ 80-100g/acre or Chlorantraniliprole 18.5% SC @ 60ml/acre in 200L water during evening hours at peak flowering and boll formation.',
    recommendedChemical: 'Emamectin Benzoate 5% SG / Chlorantraniliprole 18.5% SC',
    recommendedDosage: '80-100g or 60ml per acre in 200L water',
    modeTipHi: 'मोड 2 का प्रयोग करें ताकि कीटनाशक सीधे कपास के गूलर और पत्तियों पर लक्षित हो।',
    modeTipEn: 'Use Mode 2 to direct insecticide directly to cotton bolls and squares.'
  },
  {
    id: 'whitefly_control',
    keywords: ['whitefly', 'safed', 'makhi', 'fly', 'सफेद', 'मक्खी', 'chapa'],
    questionHi: 'सफेद मक्खी (Whitefly) का प्रभावी नियंत्रण कैसे करें?',
    questionEn: 'How to control Whitefly effectively in field crops?',
    answerHi: 'शुरुआती अवस्था में नीम का तेल (1500 ppm) 1 लीटर/एकड़ या 15-20 पीले चिपचिपे ट्रैप (Yellow Sticky Traps) प्रति एकड़ लगाएं। अधिक प्रकोप होने पर फ्लोनिकामिड 50% WG (उलाला) @ 80 ग्राम/एकड़ या डायफेंथियूरॉन 50% WP @ 250 ग्राम/एकड़ 150-200 लीटर पानी में स्प्रे करें। पत्तियों की निचली सतह पर दवा पहुंचाना आवश्यक है।',
    answerEn: 'In initial stages, apply Neem Oil (1500 ppm) @ 1L/acre or deploy 15-20 yellow sticky traps per acre. For chemical control, spray Flonicamid 50% WG @ 80g/acre or Diafenthiuron 50% WP @ 250g/acre in 150-200L water, focusing on under-surface of leaves.',
    recommendedChemical: 'Flonicamid 50% WG (Ulala) or Diafenthiuron 50% WP',
    recommendedDosage: '80g / acre or 250g / acre in 150-200L water',
    modeTipHi: 'पत्तियों के निचले हिस्से पर नोज़ल का कोण 45 डिग्री रखें।',
    modeTipEn: 'Adjust nozzle angle for deep under-canopy leaf penetration.'
  },
  {
    id: 'nano_urea_spray',
    keywords: ['nano', 'urea', 'nitrogen', 'dap', 'यूरिया', 'नैनो', 'खाद', 'fertilizer', 'खुराक'],
    questionHi: 'नैनो यूरिया (Nano Urea) का छिड़काव कब और कितनी मात्रा में करें?',
    questionEn: 'How and when to spray Liquid Nano Urea for crops?',
    answerHi: 'इफको नैनो यूरिया (तरल) 2 से 4 मिलीलीटर प्रति लीटर पानी (250-500 मिली प्रति एकड़) की दर से पहला छिड़काव कल्ले फूटने/शाखाएं निकलने की अवस्था (बुवाई के 30-35 दिन बाद) और दूसरा छिड़काव फूल आने से 7-10 दिन पहले करें। यह पारंपरिक यूरिया के 45 किग्रा बैग जितना प्रभावी है और पत्तियों द्वारा 80% से अधिक अवशोषित होता है।',
    answerEn: 'Mix IFFCO Liquid Nano Urea @ 2-4 ml per liter of water (250-500 ml per acre). 1st spray during active tillering/vegetative phase (30-35 DAS) and 2nd spray 7-10 days before flowering. Provides 80%+ nitrogen use efficiency, replacing one 45kg bag of granular urea.',
    recommendedChemical: 'IFFCO Liquid Nano Urea (4% N)',
    recommendedDosage: '2-4 ml / Liter of water (250-500 ml / acre)',
    modeTipHi: 'AGRO SAVE मोड 2 (टारगेटेड फसल पर्णीय स्प्रे) चुनें ताकि नैनो ड्रॉपलेट सीधे पत्तों के रंध्रों (Stomata) पर पड़ें।',
    modeTipEn: 'Select Mode 2 (Targeted Foliar Spray) so nano nitrogen droplets absorb directly into stomata.'
  },
  {
    id: 'paddy_blast',
    keywords: ['blast', 'paddy', 'rice', 'sheath', 'blight', 'धान', 'ब्लास्ट', 'झुलसा', 'गर्दन तोड़'],
    questionHi: 'धान में ब्लास्ट व शीथ ब्लाइट रोग का क्या उपचार है?',
    questionEn: 'What is the remedy for Blast and Sheath Blight in Paddy?',
    answerHi: 'धान में पत्ती एवं गर्दन तोड़ ब्लास्ट (Magnaporthe oryzae) के उपचार हेतु ट्राइसाइक्लाज़ोल 75% WP @ 120-160 ग्राम/एकड़ या आइसोप्रोथियोलेन 40% EC @ 300 मिली/एकड़ का 200 लीटर पानी में छिड़काव करें। शीथ ब्लाइट दिखने पर हेक्साकोनाज़ोल 5% SC @ 400 मिली/एकड़ का प्रयोग करें। यूरिया की अत्यधिक मात्रा से बचें।',
    answerEn: 'For leaf and neck blast in paddy, spray Tricyclazole 75% WP @ 120-160g/acre or Isoprothiolane 40% EC @ 300ml/acre in 200L water. For Sheath Blight, apply Hexaconazole 5% SC @ 400ml/acre. Avoid excessive split application of urea.',
    recommendedChemical: 'Tricyclazole 75% WP / Hexaconazole 5% SC',
    recommendedDosage: '120-160g / acre in 200L water',
    modeTipHi: 'मोड 2 से सीधे धान के तने व पत्तियों पर छिड़काव करें।',
    modeTipEn: 'Execute using Mode 2 targeting rice tillers and canopy.'
  },
  {
    id: 'motha_nutsedge',
    keywords: ['motha', 'cyperus', 'nutsedge', 'मोथा', 'नागरमोथा', 'घास'],
    questionHi: 'खेत में मोथा (Cyperus rotundus) को जड़ से कैसे खत्म करें?',
    questionEn: 'How to eradicate Motha (Purple Nutsedge) weed in fields?',
    answerHi: 'मोथा (Cyperus rotundus) की 3-5 पत्ती अवस्था पर हैलोसल्फ्यूरॉन-मिथाइल 75% WG (सेंपरा) @ 36 ग्राम प्रति एकड़ 150 लीटर पानी में नॉन-आयनिक सर्फैक्टेंट मिलाकर स्प्रे करें। यह मोथा की भूमिगत गांठों (tubers/nuts) में जाकर उसे जड़ से सुखा देता है। यह मक्का, गन्ना व धान में सुरक्षित है।',
    answerEn: 'Apply Halosulfuron-methyl 75% WG (Sempra) @ 36g/acre mixed in 150L water with a surfactant at 3-5 leaf weed stage. It translocates into underground tubers to destroy rhizomes permanently. Safe in maize, sugarcane, and paddy.',
    recommendedChemical: 'Halosulfuron-methyl 75% WG (Sempra)',
    recommendedDosage: '36 g / acre in 150L water',
    modeTipHi: 'मोड 1 (लक्षित खरपतवार मारक) चुनें।',
    modeTipEn: 'Use Mode 1 (Targeted Weedicide).'
  },
  {
    id: 'bathua_control',
    keywords: ['bathua', 'chenopodium', 'बथुआ', 'चौड़ी पत्ती'],
    questionHi: 'गेहूं में बथुआ (Bathua) खरपतवार कैसे नष्ट करें?',
    questionEn: 'How to control Bathua (Chenopodium album) in wheat?',
    answerHi: 'गेहूं में बथुआ व अन्य चौड़ी पत्ती वाले खरपतवारों के लिए मेटसल्फ्यूरॉन-मिथाइल 20% WP (एल्ग्रिप) @ 8 ग्राम प्रति एकड़ या 2,4-D अमाइन साल्ट 58% SL @ 400 मिली/एकड़ को 150 लीटर पानी में मिलाकर बुवाई के 30-35 दिन बाद छिड़कें। यदि गुल्ली डंडा और बथुआ दोनों हों, तो टोटल (सल्फोसल्फ्यूरॉन + मेटसल्फ्यूरॉन) 16 ग्राम/एकड़ का उपयोग करें।',
    answerEn: 'In wheat fields with Bathua and broadleaf weeds, spray Metsulfuron-methyl 20% WP @ 8g/acre or 2,4-D Amine salt 58% SL @ 400ml/acre in 150L water 30-35 DAS. If both Bathua and Gulli Danda are present, use Sulfosulfuron 75% + Metsulfuron 5% WG @ 16g/acre.',
    recommendedChemical: 'Metsulfuron-methyl 20% WP / 2,4-D 58% SL',
    recommendedDosage: '8 g / acre or 400 ml / acre in 150L water',
    modeTipHi: 'मोड 1 (खरपतवार मारक मोड) में चलाएं।',
    modeTipEn: 'Run in Mode 1 (Targeted Weedicide Mode).'
  },
  {
    id: 'mustard_aphids',
    keywords: ['mahu', 'aphid', 'sarson', 'mustard', 'माहू', 'मोयला', 'सरसों', 'चेपा'],
    questionHi: 'सरसों में माहू/मोयला (Aphids) कीट का क्या इलाज है?',
    questionEn: 'What is the remedy for Aphids (Mahu) in Mustard?',
    answerHi: 'सरसों में माहू (Lipaphis erysimi) नियंत्रण हेतु डायमेथोएट 30% EC (रोगोर) @ 250 मिली/एकड़ या थायमेथोक्सम 25% WG @ 80 ग्राम/एकड़ 150-200 लीटर पानी में स्प्रे करें। ध्यान दें: फूल आने के समय मधुमक्खियों की सुरक्षा के लिए शाम 4 बजे के बाद ही छिड़काव करें ताकि परागण प्रभावित न हो।',
    answerEn: 'Control mustard aphids (Lipaphis erysimi) using Dimethoate 30% EC @ 250ml/acre or Thiamethoxam 25% WG @ 80g/acre in 150-200L water. Strictly spray after 4:00 PM to safeguard foraging honeybees essential for mustard cross-pollination.',
    recommendedChemical: 'Dimethoate 30% EC / Thiamethoxam 25% WG',
    recommendedDosage: '250 ml/acre or 80 g/acre in 150-200L water',
    modeTipHi: 'मोड 2 से पौधों की ऊपरी टहनियों और फूल शाखाओं पर स्प्रे करें।',
    modeTipEn: 'Spray terminal shoots and inflorescence using Mode 2.'
  }
];

export const ANDROID_FILES: CodeFile[] = [
  {
    id: 'manifest',
    name: 'AndroidManifest.xml',
    path: 'app/src/main/AndroidManifest.xml',
    language: 'xml',
    description: 'Declares network permissions, audio recording for voice assistant (STT), notifications, vibration, and enables cleartext HTTP traffic for 192.168.4.1.',
    code: `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    package="com.agrosave.precisionsprayer">

    <!-- IoT Network, Weather Location, Voice Assistant & Telemetry Permissions -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.VIBRATE" />
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="AGRO SAVE"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.MaterialComponents.DayNight.NoActionBar"
        android:usesCleartextTraffic="true"
        tools:targetApi="33">

        <!-- CRITICAL: android:usesCleartextTraffic="true" is required to communicate
             with local ESP32-CAM Access Point via HTTP (http://192.168.4.1) on Android 9+ -->

        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:screenOrientation="portrait"
            android:configChanges="orientation|screenSize"
            tools:ignore="LockedOrientationActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>`
  },
  {
    id: 'activity_xml',
    name: 'activity_main.xml',
    path: 'app/src/main/res/layout/activity_main.xml',
    language: 'xml',
    description: 'Bilingual High-Contrast Agri-Tech UI with Language Toggle (EN | HI), 11 Indian Weeds, 3 Spray Modes, and Telemetry.',
    code: `<?xml version="1.0" encoding="utf-8"?>
<androidx.coordinatorlayout.widget.CoordinatorLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#F1F5F1"
    tools:context=".MainActivity">

    <ScrollView
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:fillViewport="true"
        android:scrollbars="none">

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:paddingBottom="28dp">

            <!-- 1. TOP APP BAR WITH DUAL-LANGUAGE TOGGLE & CONNECTION BADGE -->
            <androidx.cardview.widget.CardView
                android:id="@+id/cardHeader"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                app:cardBackgroundColor="#1B5E20"
                app:cardCornerRadius="0dp"
                app:cardElevation="6dp">

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="vertical"
                    android:paddingStart="16dp"
                    android:paddingTop="14dp"
                    android:paddingEnd="16dp"
                    android:paddingBottom="14dp">

                    <LinearLayout
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:gravity="center_vertical"
                        android:orientation="horizontal">

                        <!-- App Title & Subtitle -->
                        <LinearLayout
                            android:layout_width="0dp"
                            android:layout_height="wrap_content"
                            android:layout_weight="1"
                            android:orientation="vertical">

                            <TextView
                                android:id="@+id/tvAppTitle"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="AGRO SAVE • स्मार्ट कृषि"
                                android:textColor="#FFFFFF"
                                android:textSize="20sp"
                                android:textStyle="bold" />

                            <TextView
                                android:id="@+id/tvAppSubtitle"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="एआई परिशुद्धता छिड़काव यंत्र | ESP32-CAM"
                                android:textColor="#C8E6C9"
                                android:textSize="11sp" />
                        </LinearLayout>

                        <!-- Prominent Language Toggle Button ("Language / भाषा: EN | HI") -->
                        <Button
                            android:id="@+id/btnLanguageToggle"
                            style="?android:attr/buttonStyleSmall"
                            android:layout_width="wrap_content"
                            android:layout_height="36dp"
                            android:layout_marginEnd="8dp"
                            android:backgroundTint="#2E7D32"
                            android:minHeight="0dp"
                            android:paddingStart="10dp"
                            android:paddingEnd="10dp"
                            android:text="भाषा: HI | EN"
                            android:textColor="#FFFFFF"
                            android:textSize="11sp"
                            android:textStyle="bold"
                            app:cornerRadius="18dp"
                            app:strokeColor="#A5D6A7"
                            app:strokeWidth="1.2dp" />

                        <!-- Hardware Connection Badge -->
                        <LinearLayout
                            android:id="@+id/badgeConnection"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:background="@drawable/bg_status_badge"
                            android:gravity="center_vertical"
                            android:orientation="horizontal"
                            android:paddingStart="9dp"
                            android:paddingTop="6dp"
                            android:paddingEnd="9dp"
                            android:paddingBottom="6dp">

                            <View
                                android:id="@+id/viewConnectionDot"
                                android:layout_width="9dp"
                                android:layout_height="9dp"
                                android:layout_marginEnd="5dp"
                                android:background="@drawable/indicator_dot_disconnected" />

                            <TextView
                                android:id="@+id/tvConnectionStatus"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="DISCONNECTED"
                                android:textColor="#FFCDD2"
                                android:textSize="10sp"
                                android:textStyle="bold" />
                        </LinearLayout>
                    </LinearLayout>
                </LinearLayout>
            </androidx.cardview.widget.CardView>

            <!-- 2. SMART WEATHER & RAIN LOSS WARNING ENGINE (BILINGUAL) -->
            <androidx.cardview.widget.CardView
                android:id="@+id/cardWeatherAdvisory"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginStart="14dp"
                android:layout_marginTop="12dp"
                android:layout_marginEnd="14dp"
                app:cardBackgroundColor="#FFFFFF"
                app:cardCornerRadius="14dp"
                app:cardElevation="3dp">

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="vertical"
                    android:padding="16dp">

                    <!-- Header Row with Weather Icon, Title, and Bilingual Risk Badge -->
                    <LinearLayout
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:gravity="center_vertical"
                        android:orientation="horizontal">

                        <TextView
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="🌦️"
                            android:textSize="22sp" />

                        <LinearLayout
                            android:layout_width="0dp"
                            android:layout_height="wrap_content"
                            android:layout_marginStart="10dp"
                            android:layout_weight="1"
                            android:orientation="vertical">

                            <TextView
                                android:id="@+id/tvWeatherHeaderTitle"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="मौसम व बारिश चेतावनी (Weather Advisory)"
                                android:textColor="#1B5E20"
                                android:textSize="15sp"
                                android:textStyle="bold" />

                            <TextView
                                android:id="@+id/tvWeatherHeaderSubtitle"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="बारिश में दवा धुलने से 100% नुकसान बचाएं"
                                android:textColor="#616161"
                                android:textSize="11sp" />
                        </LinearLayout>

                        <!-- Weather Status Badge (SAFE TO SPRAY / DO NOT SPRAY) -->
                        <TextView
                            android:id="@+id/tvWeatherBadge"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:background="#FFCDD2"
                            android:paddingStart="10dp"
                            android:paddingTop="5dp"
                            android:paddingEnd="10dp"
                            android:paddingBottom="5dp"
                            android:text="आज स्प्रे न करें\nDO NOT SPRAY"
                            android:textAlignment="center"
                            android:textColor="#B71C1C"
                            android:textSize="10sp"
                            android:textStyle="bold" />
                    </LinearLayout>

                    <!-- Weather Metrics Grid (Temp, Humidity, Wind, Rain Chance) -->
                    <LinearLayout
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="12dp"
                        android:baselineAligned="false"
                        android:orientation="horizontal">

                        <!-- Temperature -->
                        <LinearLayout
                            android:layout_width="0dp"
                            android:layout_height="wrap_content"
                            android:layout_marginEnd="4dp"
                            android:layout_weight="1"
                            android:background="#F1F8E9"
                            android:gravity="center"
                            android:orientation="vertical"
                            android:padding="8dp">

                            <TextView
                                android:id="@+id/tvWeatherTemp"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="31°C"
                                android:textColor="#2E7D32"
                                android:textSize="14sp"
                                android:textStyle="bold" />

                            <TextView
                                android:id="@+id/tvWeatherTempLabel"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="तापमान / Temp"
                                android:textColor="#558B2F"
                                android:textSize="9sp" />
                        </LinearLayout>

                        <!-- Humidity -->
                        <LinearLayout
                            android:layout_width="0dp"
                            android:layout_height="wrap_content"
                            android:layout_marginStart="4dp"
                            android:layout_marginEnd="4dp"
                            android:layout_weight="1"
                            android:background="#E1F5FE"
                            android:gravity="center"
                            android:orientation="vertical"
                            android:padding="8dp">

                            <TextView
                                android:id="@+id/tvWeatherHumidity"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="78%"
                                android:textColor="#0277BD"
                                android:textSize="14sp"
                                android:textStyle="bold" />

                            <TextView
                                android:id="@+id/tvWeatherHumidityLabel"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="नमी / Humidity"
                                android:textColor="#0288D1"
                                android:textSize="9sp" />
                        </LinearLayout>

                        <!-- Wind Speed -->
                        <LinearLayout
                            android:layout_width="0dp"
                            android:layout_height="wrap_content"
                            android:layout_marginStart="4dp"
                            android:layout_marginEnd="4dp"
                            android:layout_weight="1"
                            android:background="#FFF3E0"
                            android:gravity="center"
                            android:orientation="vertical"
                            android:padding="8dp">

                            <TextView
                                android:id="@+id/tvWeatherWind"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="14 km/h"
                                android:textColor="#E65100"
                                android:textSize="14sp"
                                android:textStyle="bold" />

                            <TextView
                                android:id="@+id/tvWeatherWindLabel"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="हवा / Wind"
                                android:textColor="#F57C00"
                                android:textSize="9sp" />
                        </LinearLayout>

                        <!-- Rain Probability (Washout Risk) -->
                        <LinearLayout
                            android:layout_width="0dp"
                            android:layout_height="wrap_content"
                            android:layout_marginStart="4dp"
                            android:layout_weight="1"
                            android:background="#FFEBEE"
                            android:gravity="center"
                            android:orientation="vertical"
                            android:padding="8dp">

                            <TextView
                                android:id="@+id/tvWeatherRain"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="75%"
                                android:textColor="#C62828"
                                android:textSize="14sp"
                                android:textStyle="bold" />

                            <TextView
                                android:id="@+id/tvWeatherRainLabel"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="बारिश / Rain"
                                android:textColor="#D32F2F"
                                android:textSize="9sp" />
                        </LinearLayout>
                    </LinearLayout>

                    <!-- Bilingual Dynamic Advisory Alert Box -->
                    <LinearLayout
                        android:id="@+id/layoutWeatherAlertBox"
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="12dp"
                        android:background="#FFEBEE"
                        android:orientation="vertical"
                        android:padding="12dp">

                        <TextView
                            android:id="@+id/tvWeatherAdvisoryTitle"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="⚠️ किसान सलाह / FARMER ADVISORY:"
                            android:textColor="#B71C1C"
                            android:textSize="12sp"
                            android:textStyle="bold" />

                        <TextView
                            android:id="@+id/tvWeatherAdvisoryText"
                            android:layout_width="match_parent"
                            android:layout_height="wrap_content"
                            android:layout_marginTop="4dp"
                            android:text="सावधान: आज 75% बारिश की संभावना है। स्प्रे करने पर दवा बह जाएगी और मेहनत बर्बाद होगी। कृपया कल तक रुकें!\n\nAlert: 75% chance of rain today. If you spray now, your pesticide will wash away. Please wait until tomorrow!"
                            android:textColor="#37474F"
                            android:textSize="12sp" />
                    </LinearLayout>

                    <!-- Hardware Safety Lock Switch & Simulation Toggle -->
                    <LinearLayout
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="12dp"
                        android:gravity="center_vertical"
                        android:orientation="horizontal">

                        <Switch
                            android:id="@+id/switchWeatherLock"
                            android:layout_width="0dp"
                            android:layout_height="wrap_content"
                            android:layout_weight="1"
                            android:checked="true"
                            android:text="बारिश सुरक्षा सोलेनोइड लॉक (Rain Safety Valve Lock)"
                            android:textColor="#212121"
                            android:textSize="11sp"
                            android:textStyle="bold" />

                        <Button
                            android:id="@+id/btnToggleWeatherSimulation"
                            style="?android:attr/buttonStyleSmall"
                            android:layout_width="wrap_content"
                            android:layout_height="34dp"
                            android:layout_marginStart="8dp"
                            android:backgroundTint="#455A64"
                            android:minHeight="0dp"
                            android:paddingStart="8dp"
                            android:paddingEnd="8dp"
                            android:text="स्थिति बदलें (Simulate)"
                            android:textColor="#FFFFFF"
                            android:textSize="10sp" />
                    </LinearLayout>

                    <TextView
                        android:id="@+id/tvWeatherLockHelp"
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="4dp"
                        android:text="सक्रिय होने पर, 60% से अधिक बारिश की संभावना होने पर ESP32 सोलेनोइड स्प्रे नहीं खोलेगा।"
                        android:textColor="#757575"
                        android:textSize="10sp" />
                </LinearLayout>
            </androidx.cardview.widget.CardView>

            <!-- 3. SOWING DATE & CROP LIFECYCLE SPRAY SCHEDULE PLANNER -->
            <androidx.cardview.widget.CardView
                android:id="@+id/cardCropSchedule"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginStart="14dp"
                android:layout_marginTop="12dp"
                android:layout_marginEnd="14dp"
                app:cardBackgroundColor="#FFFFFF"
                app:cardCornerRadius="14dp"
                app:cardElevation="3dp">

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="vertical"
                    android:padding="16dp">

                    <!-- Title Header -->
                    <LinearLayout
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:gravity="center_vertical"
                        android:orientation="horizontal">

                        <TextView
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="🗓️"
                            android:textSize="22sp" />

                        <LinearLayout
                            android:layout_width="0dp"
                            android:layout_height="wrap_content"
                            android:layout_marginStart="10dp"
                            android:layout_weight="1"
                            android:orientation="vertical">

                            <TextView
                                android:id="@+id/tvScheduleHeaderTitle"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="फसल चक्र एवं स्प्रे टाइमलाइन (Crop Lifecycle Planner)"
                                android:textColor="#1B5E20"
                                android:textSize="15sp"
                                android:textStyle="bold" />

                            <TextView
                                android:id="@+id/tvScheduleHeaderSubtitle"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="बुवाई से कटाई तक सटीक चरणबद्ध छिड़काव सारणी"
                                android:textColor="#616161"
                                android:textSize="11sp" />
                        </LinearLayout>
                    </LinearLayout>

                    <!-- Sowing Date Picker Row -->
                    <LinearLayout
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="12dp"
                        android:background="#F1F8E9"
                        android:gravity="center_vertical"
                        android:orientation="horizontal"
                        android:padding="10dp">

                        <LinearLayout
                            android:layout_width="0dp"
                            android:layout_height="wrap_content"
                            android:layout_weight="1"
                            android:orientation="vertical">

                            <TextView
                                android:id="@+id/tvSowingLabel"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="फसल बुवाई की तारीख (Sowing Date):"
                                android:textColor="#33691E"
                                android:textSize="11sp"
                                android:textStyle="bold" />

                            <TextView
                                android:id="@+id/tvSelectedSowingDate"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="2026-09-01 (10 दिन पहले)"
                                android:textColor="#1B5E20"
                                android:textSize="13sp"
                                android:textStyle="bold" />
                        </LinearLayout>

                        <Button
                            android:id="@+id/btnSelectSowingDate"
                            style="?android:attr/buttonStyleSmall"
                            android:layout_width="wrap_content"
                            android:layout_height="36dp"
                            android:backgroundTint="#2E7D32"
                            android:minHeight="0dp"
                            android:paddingStart="12dp"
                            android:paddingEnd="12dp"
                            android:text="तारीख चुनें (Pick Date)"
                            android:textColor="#FFFFFF"
                            android:textSize="11sp" />
                    </LinearLayout>

                    <!-- Crop Age Badge Banner -->
                    <LinearLayout
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="8dp"
                        android:gravity="center_vertical"
                        android:orientation="horizontal">

                        <TextView
                            android:id="@+id/tvCurrentCropDisplay"
                            android:layout_width="0dp"
                            android:layout_height="wrap_content"
                            android:layout_weight="1"
                            android:text="चयनित फसल: गेहूं (Wheat 🌾)"
                            android:textColor="#424242"
                            android:textSize="12sp"
                            android:textStyle="bold" />

                        <TextView
                            android:id="@+id/tvCropAgeBadge"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:background="#C8E6C9"
                            android:paddingStart="8dp"
                            android:paddingTop="3dp"
                            android:paddingEnd="8dp"
                            android:paddingBottom="3dp"
                            android:text="आयु: 10 दिन (Day 10)"
                            android:textColor="#1B5E20"
                            android:textSize="11sp"
                            android:textStyle="bold" />
                    </LinearLayout>

                    <!-- 4 Timeline Milestones Container -->
                    <LinearLayout
                        android:id="@+id/layoutMilestonesContainer"
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="10dp"
                        android:orientation="vertical">

                        <!-- Stage 1: 1st Weedicide Spray -->
                        <LinearLayout
                            android:layout_width="match_parent"
                            android:layout_height="wrap_content"
                            android:layout_marginBottom="8dp"
                            android:background="#FAFAFA"
                            android:orientation="vertical"
                            android:padding="10dp">

                            <LinearLayout
                                android:layout_width="match_parent"
                                android:layout_height="wrap_content"
                                android:gravity="center_vertical"
                                android:orientation="horizontal">

                                <TextView
                                    android:layout_width="wrap_content"
                                    android:layout_height="wrap_content"
                                    android:text="1️⃣ 🌿"
                                    android:textSize="14sp" />

                                <TextView
                                    android:id="@+id/tvMilestone1Title"
                                    android:layout_width="0dp"
                                    android:layout_height="wrap_content"
                                    android:layout_marginStart="6dp"
                                    android:layout_weight="1"
                                    android:text="प्रथम खरपतवार स्प्रे (1st Weedicide)"
                                    android:textColor="#212121"
                                    android:textSize="12sp"
                                    android:textStyle="bold" />

                                <TextView
                                    android:id="@+id/tvMilestone1Status"
                                    android:layout_width="wrap_content"
                                    android:layout_height="wrap_content"
                                    android:background="#FFF9C4"
                                    android:paddingStart="6dp"
                                    android:paddingTop="2dp"
                                    android:paddingEnd="6dp"
                                    android:paddingBottom="2dp"
                                    android:text="20 दिन शेष"
                                    android:textColor="#F57F17"
                                    android:textSize="10sp"
                                    android:textStyle="bold" />
                            </LinearLayout>

                            <TextView
                                android:id="@+id/tvMilestone1Date"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:layout_marginTop="3dp"
                                android:text="दिन 30 • 01 Oct 2026"
                                android:textColor="#616161"
                                android:textSize="11sp" />

                            <TextView
                                android:id="@+id/tvMilestone1Chem"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:layout_marginTop="2dp"
                                android:text="सुझाव: Clodinafop-propargyl 15% WP"
                                android:textColor="#2E7D32"
                                android:textSize="11sp" />
                        </LinearLayout>

                        <!-- Stage 2: 1st Fertilizer Top-Dress -->
                        <LinearLayout
                            android:layout_width="match_parent"
                            android:layout_height="wrap_content"
                            android:layout_marginBottom="8dp"
                            android:background="#FAFAFA"
                            android:orientation="vertical"
                            android:padding="10dp">

                            <LinearLayout
                                android:layout_width="match_parent"
                                android:layout_height="wrap_content"
                                android:gravity="center_vertical"
                                android:orientation="horizontal">

                                <TextView
                                    android:layout_width="wrap_content"
                                    android:layout_height="wrap_content"
                                    android:text="2️⃣ 🧪"
                                    android:textSize="14sp" />

                                <TextView
                                    android:id="@+id/tvMilestone2Title"
                                    android:layout_width="0dp"
                                    android:layout_height="wrap_content"
                                    android:layout_marginStart="6dp"
                                    android:layout_weight="1"
                                    android:text="प्रथम खाद / पोषण (1st Fertilizer)"
                                    android:textColor="#212121"
                                    android:textSize="12sp"
                                    android:textStyle="bold" />

                                <TextView
                                    android:id="@+id/tvMilestone2Status"
                                    android:layout_width="wrap_content"
                                    android:layout_height="wrap_content"
                                    android:background="#E1F5FE"
                                    android:paddingStart="6dp"
                                    android:paddingTop="2dp"
                                    android:paddingEnd="6dp"
                                    android:paddingBottom="2dp"
                                    android:text="35 दिन शेष"
                                    android:textColor="#0277BD"
                                    android:textSize="10sp"
                                    android:textStyle="bold" />
                            </LinearLayout>

                            <TextView
                                android:id="@+id/tvMilestone2Date"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:layout_marginTop="3dp"
                                android:text="दिन 45 • 16 Oct 2026"
                                android:textColor="#616161"
                                android:textSize="11sp" />

                            <TextView
                                android:id="@+id/tvMilestone2Chem"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:layout_marginTop="2dp"
                                android:text="सुझाव: Urea Top-Dress (45 kg/acre)"
                                android:textColor="#0277BD"
                                android:textSize="11sp" />
                        </LinearLayout>

                        <!-- Stage 3: Disease & Pest Prevention Spray -->
                        <LinearLayout
                            android:layout_width="match_parent"
                            android:layout_height="wrap_content"
                            android:layout_marginBottom="8dp"
                            android:background="#FAFAFA"
                            android:orientation="vertical"
                            android:padding="10dp">

                            <LinearLayout
                                android:layout_width="match_parent"
                                android:layout_height="wrap_content"
                                android:gravity="center_vertical"
                                android:orientation="horizontal">

                                <TextView
                                    android:layout_width="wrap_content"
                                    android:layout_height="wrap_content"
                                    android:text="3️⃣ 🛡️"
                                    android:textSize="14sp" />

                                <TextView
                                    android:id="@+id/tvMilestone3Title"
                                    android:layout_width="0dp"
                                    android:layout_height="wrap_content"
                                    android:layout_marginStart="6dp"
                                    android:layout_weight="1"
                                    android:text="रोग व कीट रोकथाम (2nd Pesticide)"
                                    android:textColor="#212121"
                                    android:textSize="12sp"
                                    android:textStyle="bold" />

                                <TextView
                                    android:id="@+id/tvMilestone3Status"
                                    android:layout_width="wrap_content"
                                    android:layout_height="wrap_content"
                                    android:background="#EDE7F6"
                                    android:paddingStart="6dp"
                                    android:paddingTop="2dp"
                                    android:paddingEnd="6dp"
                                    android:paddingBottom="2dp"
                                    android:text="55 दिन शेष"
                                    android:textColor="#512DA8"
                                    android:textSize="10sp"
                                    android:textStyle="bold" />
                            </LinearLayout>

                            <TextView
                                android:id="@+id/tvMilestone3Date"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:layout_marginTop="3dp"
                                android:text="दिन 65 • 05 Nov 2026"
                                android:textColor="#616161"
                                android:textSize="11sp" />

                            <TextView
                                android:id="@+id/tvMilestone3Chem"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:layout_marginTop="2dp"
                                android:text="सुझाव: Propiconazole 25% EC (Tilt)"
                                android:textColor="#512DA8"
                                android:textSize="11sp" />
                        </LinearLayout>

                        <!-- Stage 4: Harvest Window -->
                        <LinearLayout
                            android:layout_width="match_parent"
                            android:layout_height="wrap_content"
                            android:background="#FAFAFA"
                            android:orientation="vertical"
                            android:padding="10dp">

                            <LinearLayout
                                android:layout_width="match_parent"
                                android:layout_height="wrap_content"
                                android:gravity="center_vertical"
                                android:orientation="horizontal">

                                <TextView
                                    android:layout_width="wrap_content"
                                    android:layout_height="wrap_content"
                                    android:text="4️⃣ 🌾"
                                    android:textSize="14sp" />

                                <TextView
                                    android:id="@+id/tvMilestone4Title"
                                    android:layout_width="0dp"
                                    android:layout_height="wrap_content"
                                    android:layout_marginStart="6dp"
                                    android:layout_weight="1"
                                    android:text="फसल कटाई समय (Harvest Window)"
                                    android:textColor="#212121"
                                    android:textSize="12sp"
                                    android:textStyle="bold" />

                                <TextView
                                    android:id="@+id/tvMilestone4Status"
                                    android:layout_width="wrap_content"
                                    android:layout_height="wrap_content"
                                    android:background="#DCEDC8"
                                    android:paddingStart="6dp"
                                    android:paddingTop="2dp"
                                    android:paddingEnd="6dp"
                                    android:paddingBottom="2dp"
                                    android:text="115 दिन शेष"
                                    android:textColor="#33691E"
                                    android:textSize="10sp"
                                    android:textStyle="bold" />
                            </LinearLayout>

                            <TextView
                                android:id="@+id/tvMilestone4Date"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:layout_marginTop="3dp"
                                android:text="दिन 125 • 04 Jan 2027"
                                android:textColor="#616161"
                                android:textSize="11sp" />

                            <TextView
                                android:id="@+id/tvMilestone4Chem"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:layout_marginTop="2dp"
                                android:text="परिपक्वता व कटाई (Maturity & Harvesting)"
                                android:textColor="#33691E"
                                android:textSize="11sp" />
                        </LinearLayout>
                    </LinearLayout>
                </LinearLayout>
            </androidx.cardview.widget.CardView>

            <!-- 4. AI AGRO SAVE DOCTOR & MULTILINGUAL VOICE ASSISTANT -->
            <androidx.cardview.widget.CardView
                android:id="@+id/cardAiDoctor"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginStart="14dp"
                android:layout_marginTop="12dp"
                android:layout_marginEnd="14dp"
                app:cardBackgroundColor="#FFFFFF"
                app:cardCornerRadius="14dp"
                app:cardElevation="3dp">

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="vertical"
                    android:padding="16dp">

                    <!-- Title Header with AI Doctor Badge & Voice Indicator -->
                    <LinearLayout
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:gravity="center_vertical"
                        android:orientation="horizontal">

                        <TextView
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="🩺"
                            android:textSize="22sp" />

                        <LinearLayout
                            android:layout_width="0dp"
                            android:layout_height="wrap_content"
                            android:layout_marginStart="8dp"
                            android:layout_weight="1"
                            android:orientation="vertical">

                            <TextView
                                android:id="@+id/tvAiDoctorTitle"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="AI एग्रो डॉक्टर व आवाज़ सलाहकार"
                                android:textColor="#1B5E20"
                                android:textSize="15sp"
                                android:textStyle="bold" />

                            <TextView
                                android:id="@+id/tvAiDoctorSubtitle"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="फसल रोग, खरपतवार व खाद उपचार हेतु बोलें या पूछें"
                                android:textColor="#616161"
                                android:textSize="11sp" />
                        </LinearLayout>

                        <!-- Voice Status Badge -->
                        <TextView
                            android:id="@+id/tvVoiceBadge"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:background="@drawable/bg_status_badge"
                            android:backgroundTint="#E8F5E9"
                            android:paddingStart="8dp"
                            android:paddingTop="4dp"
                            android:paddingEnd="8dp"
                            android:paddingBottom="4dp"
                            android:text="बोलें (Speak)"
                            android:textColor="#2E7D32"
                            android:textSize="10sp"
                            android:textStyle="bold" />
                    </LinearLayout>

                    <!-- Search / Query Input Bar with Voice Mic Button -->
                    <LinearLayout
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="12dp"
                        android:gravity="center_vertical"
                        android:orientation="horizontal">

                        <EditText
                            android:id="@+id/etDoctorQuery"
                            android:layout_width="0dp"
                            android:layout_height="48dp"
                            android:layout_weight="1"
                            android:background="@drawable/bg_input_field"
                            android:hint="जैसे: गुल्ली डंडा का इलाज, नैनो यूरिया, रतुआ रोग..."
                            android:imeOptions="actionSearch"
                            android:inputType="text"
                            android:maxLines="1"
                            android:paddingStart="14dp"
                            android:paddingEnd="14dp"
                            android:textColor="#212121"
                            android:textColorHint="#9E9E9E"
                            android:textSize="13sp" />

                        <!-- Voice Microphone Button -->
                        <ImageButton
                            android:id="@+id/btnVoiceMic"
                            android:layout_width="48dp"
                            android:layout_height="48dp"
                            android:layout_marginStart="8dp"
                            android:background="@drawable/bg_mic_button"
                            android:contentDescription="Voice Input Microphone"
                            android:src="@android:drawable/ic_btn_speak_now"
                            app:tint="#FFFFFF" />

                        <!-- Ask / Search Submit Button -->
                        <Button
                            android:id="@+id/btnAskDoctor"
                            android:layout_width="wrap_content"
                            android:layout_height="48dp"
                            android:layout_marginStart="8dp"
                            android:backgroundTint="#1B5E20"
                            android:insetTop="0dp"
                            android:insetBottom="0dp"
                            android:text="पूछें"
                            android:textColor="#FFFFFF"
                            android:textSize="12sp"
                            android:textStyle="bold"
                            app:cornerRadius="8dp" />
                    </LinearLayout>

                    <!-- Quick Query Suggestion Chips (Horizontal Scroll) -->
                    <HorizontalScrollView
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="8dp"
                        android:scrollbars="none">

                        <LinearLayout
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:orientation="horizontal">

                            <Button
                                android:id="@+id/chipQuery1"
                                style="@style/Widget.MaterialComponents.Button.OutlinedButton"
                                android:layout_width="wrap_content"
                                android:layout_height="36dp"
                                android:layout_marginEnd="6dp"
                                android:insetTop="0dp"
                                android:insetBottom="0dp"
                                android:paddingStart="10dp"
                                android:paddingEnd="10dp"
                                android:text="🌾 गुल्ली डंडा"
                                android:textColor="#2E7D32"
                                android:textSize="11sp"
                                app:cornerRadius="18dp"
                                app:strokeColor="#C8E6C9"
                                app:strokeWidth="1dp" />

                            <Button
                                android:id="@+id/chipQuery2"
                                style="@style/Widget.MaterialComponents.Button.OutlinedButton"
                                android:layout_width="wrap_content"
                                android:layout_height="36dp"
                                android:layout_marginEnd="6dp"
                                android:insetTop="0dp"
                                android:insetBottom="0dp"
                                android:paddingStart="10dp"
                                android:paddingEnd="10dp"
                                android:text="🍂 पीला रतुआ"
                                android:textColor="#2E7D32"
                                android:textSize="11sp"
                                app:cornerRadius="18dp"
                                app:strokeColor="#C8E6C9"
                                app:strokeWidth="1dp" />

                            <Button
                                android:id="@+id/chipQuery3"
                                style="@style/Widget.MaterialComponents.Button.OutlinedButton"
                                android:layout_width="wrap_content"
                                android:layout_height="36dp"
                                android:layout_marginEnd="6dp"
                                android:insetTop="0dp"
                                android:insetBottom="0dp"
                                android:paddingStart="10dp"
                                android:paddingEnd="10dp"
                                android:text="🐛 गुलाबी सुंडी"
                                android:textColor="#2E7D32"
                                android:textSize="11sp"
                                app:cornerRadius="18dp"
                                app:strokeColor="#C8E6C9"
                                app:strokeWidth="1dp" />

                            <Button
                                android:id="@+id/chipQuery4"
                                style="@style/Widget.MaterialComponents.Button.OutlinedButton"
                                android:layout_width="wrap_content"
                                android:layout_height="36dp"
                                android:insetTop="0dp"
                                android:insetBottom="0dp"
                                android:paddingStart="10dp"
                                android:paddingEnd="10dp"
                                android:text="🧪 नैनो यूरिया"
                                android:textColor="#2E7D32"
                                android:textSize="11sp"
                                app:cornerRadius="18dp"
                                app:strokeColor="#C8E6C9"
                                app:strokeWidth="1dp" />
                        </LinearLayout>
                    </HorizontalScrollView>

                    <!-- AI Doctor Diagnostic Remedy Box with Replay TTS Button -->
                    <LinearLayout
                        android:id="@+id/cardDoctorAnswer"
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="12dp"
                        android:background="@drawable/bg_doctor_answer"
                        android:orientation="vertical"
                        android:padding="12dp">

                        <LinearLayout
                            android:layout_width="match_parent"
                            android:layout_height="wrap_content"
                            android:gravity="center_vertical"
                            android:orientation="horizontal">

                            <TextView
                                android:id="@+id/tvDoctorAnswerTitle"
                                android:layout_width="0dp"
                                android:layout_height="wrap_content"
                                android:layout_weight="1"
                                android:text="डॉक्टर का परामर्श व समाधान (Agronomic Advisory):"
                                android:textColor="#1B5E20"
                                android:textSize="12sp"
                                android:textStyle="bold" />

                            <!-- Audio Speaker / Replay Button -->
                            <Button
                                android:id="@+id/btnReplayTts"
                                style="@style/Widget.MaterialComponents.Button.TextButton"
                                android:layout_width="wrap_content"
                                android:layout_height="32dp"
                                android:insetTop="0dp"
                                android:insetBottom="0dp"
                                android:minWidth="0dp"
                                android:paddingStart="6dp"
                                android:paddingEnd="6dp"
                                android:text="🔊 बोलकर सुनाएं"
                                android:textColor="#1B5E20"
                                android:textSize="11sp"
                                android:textStyle="bold" />
                        </LinearLayout>

                        <TextView
                            android:id="@+id/tvDoctorAnswer"
                            android:layout_width="match_parent"
                            android:layout_height="wrap_content"
                            android:layout_marginTop="6dp"
                            android:lineSpacingExtra="3dp"
                            android:text="नमस्ते! मैं AGRO SAVE कृषि विशेषज्ञ हूँ। किसी भी खरपतवार, कीट, कवक रोग या रासायनिक खुराक के बारे में पूछने के लिए माइक बटन दबाएं।"
                            android:textColor="#263238"
                            android:textSize="13sp" />

                        <!-- Recommended Chemical Dosage & Mode Recommendation Tag -->
                        <TextView
                            android:id="@+id/tvDoctorDosageBadge"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:layout_marginTop="8dp"
                            android:background="@drawable/bg_status_badge"
                            android:backgroundTint="#C8E6C9"
                            android:paddingStart="8dp"
                            android:paddingTop="3dp"
                            android:paddingEnd="8dp"
                            android:paddingBottom="3dp"
                            android:text="💡 सुझाव: मोड 1 खरपतवार या मोड 2 फसल खाद पर चलाएं"
                            android:textColor="#1B5E20"
                            android:textSize="11sp"
                            android:textStyle="bold" />
                    </LinearLayout>

                </LinearLayout>
            </androidx.cardview.widget.CardView>

            <!-- 3. MACHINE STATUS & BATTERY TELEMETRY SECTION -->
            <androidx.cardview.widget.CardView
                android:id="@+id/cardTelemetry"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginStart="14dp"
                android:layout_marginTop="12dp"
                android:layout_marginEnd="14dp"
                app:cardBackgroundColor="#FFFFFF"
                app:cardCornerRadius="14dp"
                app:cardElevation="3dp">

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="vertical"
                    android:padding="16dp">

                    <LinearLayout
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:gravity="center_vertical"
                        android:orientation="horizontal">

                        <TextView
                            android:id="@+id/tvTelemetryHeader"
                            android:layout_width="0dp"
                            android:layout_height="wrap_content"
                            android:layout_weight="1"
                            android:text="मशीन स्थिति / बैटरी का स्तर"
                            android:textColor="#1B5E20"
                            android:textSize="15sp"
                            android:textStyle="bold" />

                        <TextView
                            android:id="@+id/tvBatteryVoltage"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="12.6V"
                            android:textColor="#616161"
                            android:textSize="12sp"
                            android:textStyle="bold" />
                    </LinearLayout>

                    <!-- Battery Bar Row -->
                    <LinearLayout
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="10dp"
                        android:gravity="center_vertical"
                        android:orientation="horizontal">

                        <ProgressBar
                            android:id="@+id/progressBattery"
                            style="?android:attr/progressBarStyleHorizontal"
                            android:layout_width="0dp"
                            android:layout_height="16dp"
                            android:layout_weight="1"
                            android:max="100"
                            android:progress="85"
                            android:progressDrawable="@drawable/custom_battery_progress" />

                        <TextView
                            android:id="@+id/tvBatteryPercent"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:layout_marginStart="10dp"
                            android:text="85%"
                            android:textColor="#1B5E20"
                            android:textSize="14sp"
                            android:textStyle="bold" />
                    </LinearLayout>

                    <!-- Low Battery Warning Banner (< 15%) -->
                    <LinearLayout
                        android:id="@+id/cardLowBatteryWarning"
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="12dp"
                        android:background="@drawable/bg_warning_alert"
                        android:gravity="center_vertical"
                        android:orientation="horizontal"
                        android:padding="10dp"
                        android:visibility="gone"
                        tools:visibility="visible">

                        <TextView
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="⚠️"
                            android:textSize="20sp" />

                        <LinearLayout
                            android:layout_width="match_parent"
                            android:layout_height="wrap_content"
                            android:layout_marginStart="8dp"
                            android:orientation="vertical">

                            <TextView
                                android:id="@+id/tvWarningTitle"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="कम बैटरी चेतावनी (LOW BATTERY WARNING)"
                                android:textColor="#B71C1C"
                                android:textSize="12sp"
                                android:textStyle="bold" />

                            <TextView
                                android:id="@+id/tvWarningSubtitle"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="बैटरी 15% से कम है। कृपया 12V चार्जर तुरंत जोड़ें।"
                                android:textColor="#C62828"
                                android:textSize="11sp" />
                        </LinearLayout>
                    </LinearLayout>

                </LinearLayout>
            </androidx.cardview.widget.CardView>

            <!-- 3. THREE OPERATIONAL SPRAY MODES CARD -->
            <androidx.cardview.widget.CardView
                android:id="@+id/cardSprayModes"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginStart="14dp"
                android:layout_marginTop="12dp"
                android:layout_marginEnd="14dp"
                app:cardBackgroundColor="#FFFFFF"
                app:cardCornerRadius="14dp"
                app:cardElevation="3dp">

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="vertical"
                    android:padding="16dp">

                    <TextView
                        android:id="@+id/tvSprayModesHeader"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="स्प्रे मोड चुनें (Operational Spray Mode)"
                        android:textColor="#1B5E20"
                        android:textSize="15sp"
                        android:textStyle="bold" />

                    <TextView
                        android:id="@+id/tvSprayModesSub"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Select how the AI sprayer actuates the solenoid valve"
                        android:textColor="#757575"
                        android:textSize="11sp" />

                    <!-- RadioGroup containing the 3 Modes -->
                    <RadioGroup
                        android:id="@+id/rgSprayModes"
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="10dp">

                        <RadioButton
                            android:id="@+id/rbMode1Weed"
                            android:layout_width="match_parent"
                            android:layout_height="wrap_content"
                            android:background="@drawable/bg_mode_selector"
                            android:buttonTint="#1B5E20"
                            android:checked="true"
                            android:paddingStart="12dp"
                            android:paddingTop="10dp"
                            android:paddingEnd="12dp"
                            android:paddingBottom="10dp"
                            android:text="केवल खरपतवार मारक मोड (Weedicide)\nमुख्य फसल सुरक्षित, केवल खरपतवार पर स्प्रे"
                            android:textColor="#212121"
                            android:textSize="13sp"
                            android:textStyle="bold" />

                        <RadioButton
                            android:id="@+id/rbMode2Crop"
                            android:layout_width="match_parent"
                            android:layout_height="wrap_content"
                            android:layout_marginTop="8dp"
                            android:background="@drawable/bg_mode_selector"
                            android:buttonTint="#1B5E20"
                            android:paddingStart="12dp"
                            android:paddingTop="10dp"
                            android:paddingEnd="12dp"
                            android:paddingBottom="10dp"
                            android:text="केवल फसल खाद मोड (Fertilizer)\nपौधों के पत्तों पर स्प्रे, खाली जमीन पर दवा की बचत"
                            android:textColor="#212121"
                            android:textSize="13sp"
                            android:textStyle="bold" />

                        <RadioButton
                            android:id="@+id/rbMode3Universal"
                            android:layout_width="match_parent"
                            android:layout_height="wrap_content"
                            android:layout_marginTop="8dp"
                            android:background="@drawable/bg_mode_selector"
                            android:buttonTint="#1B5E20"
                            android:paddingStart="12dp"
                            android:paddingTop="10dp"
                            android:paddingEnd="12dp"
                            android:paddingBottom="10dp"
                            android:text="पूरे खेत में छिड़काव मोड (Universal Field)\nसमान रोकथाम के लिए निरंतर व्यापक छिड़काव"
                            android:textColor="#212121"
                            android:textSize="13sp"
                            android:textStyle="bold" />
                    </RadioGroup>

                </LinearLayout>
            </androidx.cardview.widget.CardView>

            <!-- 4. CROP & EXPANDED INDIAN WEEDS SELECTOR -->
            <androidx.cardview.widget.CardView
                android:id="@+id/cardCropWeedConfig"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginStart="14dp"
                android:layout_marginTop="12dp"
                android:layout_marginEnd="14dp"
                app:cardBackgroundColor="#FFFFFF"
                app:cardCornerRadius="14dp"
                app:cardElevation="3dp">

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="vertical"
                    android:padding="16dp">

                    <TextView
                        android:id="@+id/tvAiCalibrationHeader"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="फसल एवं खरपतवार चयन (AI मॉडल)"
                        android:textColor="#1B5E20"
                        android:textSize="15sp"
                        android:textStyle="bold" />

                    <TextView
                        android:id="@+id/tvAiCalibrationSub"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Configure ESP32 vision detection parameters for field pests"
                        android:textColor="#757575"
                        android:textSize="11sp" />

                    <!-- Crop Dropdown Spinner (20 Varieties) -->
                    <TextView
                        android:id="@+id/tvLabelCrop"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="12dp"
                        android:text="मुख्य फसल (Main Crop - 20 किस्में):"
                        android:textColor="#37474F"
                        android:textSize="13sp"
                        android:textStyle="bold" />

                    <Spinner
                        android:id="@+id/spinnerCrop"
                        android:layout_width="match_parent"
                        android:layout_height="48dp"
                        android:layout_marginTop="4dp"
                        android:background="@drawable/bg_spinner" />

                    <!-- Upgraded Multi-Select Weed & Unwanted Crop Selector (20 Indian Varieties) -->
                    <LinearLayout
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="14dp"
                        android:gravity="center_vertical"
                        android:orientation="horizontal">

                        <TextView
                            android:id="@+id/tvLabelWeed"
                            android:layout_width="0dp"
                            android:layout_height="wrap_content"
                            android:layout_weight="1"
                            android:text="लक्षित खरपतवार बहु-चयन (Multi-Select Weeds - 20 किस्में):"
                            android:textColor="#37474F"
                            android:textSize="13sp"
                            android:textStyle="bold" />

                        <TextView
                            android:id="@+id/tvWeedEndpointTag"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:background="#E8F5E9"
                            android:paddingStart="8dp"
                            android:paddingTop="3dp"
                            android:paddingEnd="8dp"
                            android:paddingBottom="3dp"
                            android:text="GET /set_weeds"
                            android:textColor="#1B5E20"
                            android:textSize="10sp"
                            android:textStyle="bold" />
                    </LinearLayout>

                    <TextView
                        android:id="@+id/tvWeedSelectorHint"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="2dp"
                        android:text="एक साथ 6-7 या अधिक खरपतवार चुनें। ईएसपी32 को 'http://192.168.4.1/set_weeds?list=[WEEDS]' प्रेषित होता है"
                        android:textColor="#757575"
                        android:textSize="10sp" />

                    <!-- Multi-Select Action Bar & Active Target Counter -->
                    <LinearLayout
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="8dp"
                        android:gravity="center_vertical"
                        android:orientation="horizontal">

                        <TextView
                            android:id="@+id/tvSelectedWeedsCount"
                            android:layout_width="0dp"
                            android:layout_height="wrap_content"
                            android:layout_weight="1"
                            android:background="#E8F5E9"
                            android:paddingStart="10dp"
                            android:paddingTop="6dp"
                            android:paddingEnd="10dp"
                            android:paddingBottom="6dp"
                            android:text="6 खरपतवार चयनित (6 SELECTED)"
                            android:textColor="#1B5E20"
                            android:textSize="11sp"
                            android:textStyle="bold" />

                        <Button
                            android:id="@+id/btnSelectCommonWeeds"
                            style="@style/Widget.MaterialComponents.Button.OutlinedButton"
                            android:layout_width="wrap_content"
                            android:layout_height="38dp"
                            android:layout_marginStart="6dp"
                            android:insetTop="0dp"
                            android:insetBottom="0dp"
                            android:paddingStart="10dp"
                            android:paddingEnd="10dp"
                            android:text="🌾 6 सामान्य"
                            android:textColor="#1B5E20"
                            android:textSize="11sp"
                            app:cornerRadius="6dp"
                            app:strokeColor="#2E7D32"
                            app:strokeWidth="1dp" />

                        <Button
                            android:id="@+id/btnSelectAllWeeds"
                            style="@style/Widget.MaterialComponents.Button.OutlinedButton"
                            android:layout_width="wrap_content"
                            android:layout_height="38dp"
                            android:layout_marginStart="4dp"
                            android:insetTop="0dp"
                            android:insetBottom="0dp"
                            android:paddingStart="8dp"
                            android:paddingEnd="8dp"
                            android:text="सभी (All)"
                            android:textColor="#1B5E20"
                            android:textSize="11sp"
                            app:cornerRadius="6dp"
                            app:strokeColor="#2E7D32"
                            app:strokeWidth="1dp" />

                        <Button
                            android:id="@+id/btnClearWeeds"
                            style="@style/Widget.MaterialComponents.Button.OutlinedButton"
                            android:layout_width="wrap_content"
                            android:layout_height="38dp"
                            android:layout_marginStart="4dp"
                            android:insetTop="0dp"
                            android:insetBottom="0dp"
                            android:paddingStart="8dp"
                            android:paddingEnd="8dp"
                            android:text="साफ"
                            android:textColor="#C62828"
                            android:textSize="11sp"
                            app:cornerRadius="6dp"
                            app:strokeColor="#EF9A9A"
                            app:strokeWidth="1dp" />
                    </LinearLayout>

                    <!-- Button to open 20-Weeds Full Multi-Choice Checkbox Dialog -->
                    <Button
                        android:id="@+id/btnOpenWeedsDialog"
                        style="@style/Widget.MaterialComponents.Button.OutlinedButton"
                        android:layout_width="match_parent"
                        android:layout_height="42dp"
                        android:layout_marginTop="8dp"
                        android:backgroundTint="#F1F8E9"
                        android:insetTop="0dp"
                        android:insetBottom="0dp"
                        android:text="📋 20 खरपतवार चेकलिस्ट डायलॉग खोलें (+20 Weeds Checkbox Dialog)"
                        android:textColor="#1B5E20"
                        android:textSize="12sp"
                        android:textStyle="bold"
                        app:cornerRadius="8dp"
                        app:strokeColor="#A5D6A7"
                        app:strokeWidth="1dp" />

                    <!-- Dynamic Multi-Select ChipGroup (Multiple items can be checked) -->
                    <HorizontalScrollView
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="8dp"
                        android:scrollbars="none">

                        <com.google.android.material.chip.ChipGroup
                            android:id="@+id/chipGroupWeeds"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            app:singleLine="true"
                            app:singleSelection="false" />
                    </HorizontalScrollView>

                    <!-- Active Multi-Weed Targets Confirmation Card -->
                    <LinearLayout
                        android:id="@+id/cardActiveWeedStatus"
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="8dp"
                        android:background="#F9FBE7"
                        android:orientation="vertical"
                        android:padding="12dp">

                        <LinearLayout
                            android:layout_width="match_parent"
                            android:layout_height="wrap_content"
                            android:gravity="center_vertical"
                            android:orientation="horizontal">

                            <TextView
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:text="🎯"
                                android:textSize="14sp" />

                            <TextView
                                android:id="@+id/tvActiveWeedsTitle"
                                android:layout_width="0dp"
                                android:layout_height="wrap_content"
                                android:layout_marginStart="6dp"
                                android:layout_weight="1"
                                android:text="सक्रिय खरपतवार लक्ष्य (Active Field Targets):"
                                android:textColor="#33691E"
                                android:textSize="12sp"
                                android:textStyle="bold" />

                            <TextView
                                android:id="@+id/tvActiveWeedsCountBadge"
                                android:layout_width="wrap_content"
                                android:layout_height="wrap_content"
                                android:background="#33691E"
                                android:paddingStart="8dp"
                                android:paddingTop="2dp"
                                android:paddingEnd="8dp"
                                android:paddingBottom="2dp"
                                android:text="6 ACTIVE"
                                android:textColor="#FFFFFF"
                                android:textSize="10sp"
                                android:textStyle="bold" />
                        </LinearLayout>

                        <TextView
                            android:id="@+id/tvActiveWeedsList"
                            android:layout_width="match_parent"
                            android:layout_height="wrap_content"
                            android:layout_marginTop="4dp"
                            android:text="गुल्ली डंडा, बथुआ, मोथा, गाजर घास, चौलाई, बन सरसों"
                            android:textColor="#37474F"
                            android:textSize="11sp" />

                        <TextView
                            android:id="@+id/tvActiveWeedsCommandUrl"
                            android:layout_width="match_parent"
                            android:layout_height="wrap_content"
                            android:layout_marginTop="4dp"
                            android:background="#FFFFFF"
                            android:fontFamily="monospace"
                            android:padding="6dp"
                            android:text="कमांड: http://192.168.4.1/set_weeds?list=PHALARIS,CHENOPODIUM,CYPERUS,PARTHENIUM,AMARANTHUS,BAN_SARSON"
                            android:textColor="#558B2F"
                            android:textSize="10sp" />
                    </LinearLayout>

                    <!-- Configure Model Button -->
                    <Button
                        android:id="@+id/btnConfigureModel"
                        android:layout_width="match_parent"
                        android:layout_height="54dp"
                        android:layout_marginTop="14dp"
                        android:backgroundTint="#2E7D32"
                        android:text="एआई मॉडल कॉन्फ़िगर करें (CONFIGURE MODEL)"
                        android:textAllCaps="false"
                        android:textColor="#FFFFFF"
                        android:textSize="14sp"
                        android:textStyle="bold"
                        app:cornerRadius="10dp" />

                </LinearLayout>
            </androidx.cardview.widget.CardView>

            <!-- 5. SMART LAND AREA & CHEMICAL ESTIMATOR CALCULATOR -->
            <androidx.cardview.widget.CardView
                android:id="@+id/cardCalculator"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginStart="14dp"
                android:layout_marginTop="12dp"
                android:layout_marginEnd="14dp"
                app:cardBackgroundColor="#FFFFFF"
                app:cardCornerRadius="14dp"
                app:cardElevation="3dp">

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="vertical"
                    android:padding="16dp">

                    <TextView
                        android:id="@+id/tvEstimatorHeader"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="खेत रकबा और अनुमानित दवा (Chemical Estimator)"
                        android:textColor="#1B5E20"
                        android:textSize="15sp"
                        android:textStyle="bold" />

                    <TextView
                        android:id="@+id/tvEstimatorSub"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Quick-select area (Hectares) to calculate pesticide volume"
                        android:textColor="#757575"
                        android:textSize="11sp" />

                    <!-- Quick Preset Buttons (0.5 Ha, 1 Ha, 2 Ha, 5 Ha) -->
                    <LinearLayout
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="12dp"
                        android:orientation="horizontal">

                        <Button
                            android:id="@+id/btnArea05"
                            style="?android:attr/buttonStyleSmall"
                            android:layout_width="0dp"
                            android:layout_height="40dp"
                            android:layout_weight="1"
                            android:backgroundTint="#E8F5E9"
                            android:text="0.5 Ha"
                            android:textColor="#1B5E20"
                            android:textSize="12sp"
                            android:textStyle="bold"
                            app:cornerRadius="8dp" />

                        <Button
                            android:id="@+id/btnArea10"
                            style="?android:attr/buttonStyleSmall"
                            android:layout_width="0dp"
                            android:layout_height="40dp"
                            android:layout_marginStart="6dp"
                            android:layout_weight="1"
                            android:backgroundTint="#1B5E20"
                            android:text="1.0 Ha"
                            android:textColor="#FFFFFF"
                            android:textSize="12sp"
                            android:textStyle="bold"
                            app:cornerRadius="8dp" />

                        <Button
                            android:id="@+id/btnArea20"
                            style="?android:attr/buttonStyleSmall"
                            android:layout_width="0dp"
                            android:layout_height="40dp"
                            android:layout_marginStart="6dp"
                            android:layout_weight="1"
                            android:backgroundTint="#E8F5E9"
                            android:text="2.0 Ha"
                            android:textColor="#1B5E20"
                            android:textSize="12sp"
                            android:textStyle="bold"
                            app:cornerRadius="8dp" />

                        <Button
                            android:id="@+id/btnArea50"
                            style="?android:attr/buttonStyleSmall"
                            android:layout_width="0dp"
                            android:layout_height="40dp"
                            android:layout_marginStart="6dp"
                            android:layout_weight="1"
                            android:backgroundTint="#E8F5E9"
                            android:text="5.0 Ha"
                            android:textColor="#1B5E20"
                            android:textSize="12sp"
                            android:textStyle="bold"
                            app:cornerRadius="8dp" />
                    </LinearLayout>

                    <!-- Custom Area Input -->
                    <LinearLayout
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="10dp"
                        android:gravity="center_vertical"
                        android:orientation="horizontal">

                        <TextView
                            android:id="@+id/tvCustomAreaLabel"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="कस्टम रकबा (Custom Area):"
                            android:textColor="#424242"
                            android:textSize="12sp" />

                        <EditText
                            android:id="@+id/etCustomArea"
                            android:layout_width="0dp"
                            android:layout_height="42dp"
                            android:layout_marginStart="8dp"
                            android:layout_weight="1"
                            android:background="@drawable/bg_edit_text"
                            android:hint="उदा. 1.5"
                            android:inputType="numberDecimal"
                            android:paddingStart="12dp"
                            android:paddingEnd="12dp"
                            android:text="1.0"
                            android:textColor="#1B5E20"
                            android:textSize="14sp"
                            android:textStyle="bold" />

                        <TextView
                            android:id="@+id/tvHectaresUnit"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:layout_marginStart="6dp"
                            android:text="Hectares (हेक्टेयर)"
                            android:textColor="#616161"
                            android:textSize="11sp" />
                    </LinearLayout>

                    <!-- Estimated Chemical Result Display Banner -->
                    <LinearLayout
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="14dp"
                        android:background="#E8F5E9"
                        android:orientation="vertical"
                        android:padding="12dp">

                        <TextView
                            android:id="@+id/tvEstimatedLiquidLabel"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="अनुमानित दवा की मात्रा (Estimated Liquid):"
                            android:textColor="#2E7D32"
                            android:textSize="12sp"
                            android:textStyle="bold" />

                        <TextView
                            android:id="@+id/tvEstimatedChemical"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:layout_marginTop="2dp"
                            android:text="2.50 Liters (लीटर)"
                            android:textColor="#1B5E20"
                            android:textSize="22sp"
                            android:textStyle="bold" />

                        <TextView
                            android:id="@+id/tvCalculationBreakdown"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:layout_marginTop="2dp"
                            android:text="गणना: 1.0 Ha × 2.5 L/Ha (गेहूं मानक)"
                            android:textColor="#558B2F"
                            android:textSize="11sp" />
                    </LinearLayout>

                </LinearLayout>
            </androidx.cardview.widget.CardView>

            <!-- 5. SYSTEM STATUS & TELEMETRY LOG -->
            <androidx.cardview.widget.CardView
                android:id="@+id/cardStatusLog"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginStart="14dp"
                android:layout_marginTop="12dp"
                android:layout_marginEnd="14dp"
                android:layout_marginBottom="24dp"
                app:cardBackgroundColor="#FFFFFF"
                app:cardCornerRadius="14dp"
                app:cardElevation="2dp">

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="vertical"
                    android:padding="14dp">

                    <TextView
                        android:id="@+id/tvStatusLogHeader"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="सिस्टम स्थिति (System Status Log)"
                        android:textColor="#1B5E20"
                        android:textSize="13sp"
                        android:textStyle="bold" />

                    <!-- Telemetry & Network Status Log -->
                    <TextView
                        android:id="@+id/tvStatusLog"
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="8dp"
                        android:background="#FAFAFA"
                        android:padding="10dp"
                        android:text="सिस्टम स्थिति: तैयार (System Ready)"
                        android:textColor="#424242"
                        android:textSize="11sp" />

                </LinearLayout>
            </androidx.cardview.widget.CardView>

        </LinearLayout>
    </ScrollView>

</androidx.coordinatorlayout.widget.CoordinatorLayout>`
  },
  {
    id: 'main_kt',
    name: 'MainActivity.kt',
    path: 'app/src/main/java/com/agrosave/precisionsprayer/MainActivity.kt',
    language: 'kotlin',
    description: 'Clean Kotlin architecture with AI Agri-Doctor voice assistant (STT + TTS), dynamic English/Hindi language toggle, 20 crops, 20 Indian weeds HTTP dispatch, and telemetry.',
    code: `package com.agrosave.precisionsprayer

import android.Manifest
import android.annotation.SuppressLint
import android.app.Activity
import android.app.DatePickerDialog
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Color
import android.os.Build
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.speech.RecognizerIntent
import android.speech.tts.TextToSpeech
import android.text.Editable
import android.text.TextWatcher
import android.util.Log
import android.view.View
import android.view.inputmethod.EditorInfo
import android.widget.*
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.app.NotificationCompat
import androidx.core.content.ContextCompat
import com.google.android.material.chip.Chip
import com.google.android.material.chip.ChipGroup
import org.json.JSONObject
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.Locale
import java.util.concurrent.Executors

class MainActivity : AppCompatActivity(), TextToSpeech.OnInitListener {

    companion object {
        private const val TAG = "AgroSaveApp"
        private const val NOTIFICATION_CHANNEL_ID = "agro_save_alerts"
        private const val NOTIFICATION_ID_BATTERY = 1001

        // ESP32-CAM Access Point IP and API Endpoints
        private const val BASE_URL = "http://192.168.4.1"
        private const val ENDPOINT_TELEMETRY = "$BASE_URL/telemetry"
        private const val ENDPOINT_SET_MODE = "$BASE_URL/set_mode?mode="
        private const val ENDPOINT_SET_WEEDS = "$BASE_URL/set_weeds?list="
        private const val ENDPOINT_SET_WEED = "$BASE_URL/set_weed?type="
        private const val ENDPOINT_SET_MODEL = "$BASE_URL/set_model"
        private const val ENDPOINT_LOCK_SOLENOID = "$BASE_URL/lock_solenoid?locked="

        private const val NETWORK_TIMEOUT = 2500
    }

    // Supported App Languages
    enum class AppLanguage { EN, HI }

    // Data Models
    data class CropLifecycle(
        val weedicideDay: Int,
        val weedicideChemHi: String,
        val weedicideChemEn: String,
        val fertilizerDay: Int,
        val fertilizerChemHi: String,
        val fertilizerChemEn: String,
        val secondPestDay: Int,
        val pestChemHi: String,
        val pestChemEn: String,
        val harvestDay: Int
    )

    data class Crop(
        val id: String, 
        val code: String, 
        val nameEn: String, 
        val nameHi: String, 
        val dosageLPerHa: Double,
        val lifecycle: CropLifecycle
    )

    data class WeatherAdvisory(
        val tempC: Int,
        val humidityPercent: Int,
        val windSpeedKmh: Int,
        val rainChancePercent: Int,
        val isSafe: Boolean,
        val advisoryHi: String,
        val advisoryEn: String
    )

    data class Weed(
        val id: String, 
        val code: String, 
        val nameEn: String, 
        val nameHi: String, 
        val scientificName: String
    )

    // 20 Major Indian Crops Database with Full Lifecycles
    private val cropList = listOf(
        Crop("wheat", "WHEAT", "Wheat", "गेहूं", 2.5, CropLifecycle(
            30, "क्लोडीनाफॉप 15% WP (Clodinafop-propargyl)", "Clodinafop-propargyl 15% WP",
            45, "यूरिया टॉप-ड्रेसिंग (45 kg/एकड़)", "Urea Top-Dress (45 kg/acre)",
            65, "प्रोपिकोनाज़ोल 25% EC (टिल्ट)", "Propiconazole 25% EC (Tilt)",
            125
        )),
        Crop("paddy", "PADDY", "Paddy / Rice", "धान", 2.8, CropLifecycle(
            20, "बिस्पायरीबैक सोडियम 10% SC (Nominee Gold)", "Bispyribac Sodium 10% SC",
            35, "जिंक सल्फेट + यूरिया छिड़काव", "Zinc Sulfate + Urea Top-dress",
            55, "ट्राइफ्लोक्सीस्ट्रोबिन + टेबुकोनाज़ोल (Nativo)", "Trifloxystrobin + Tebuconazole",
            130
        )),
        Crop("maize", "MAIZE", "Maize", "मक्का", 3.0, CropLifecycle(
            25, "एट्राज़िन 50% WP (Atrazine)", "Atrazine 50% WP",
            40, "यूरिया + पोटाश (MOP) पोषण", "Urea + Potash (MOP)",
            60, "कोराजन 18.5% SC (Coragen)", "Chlorantraniliprole 18.5% SC",
            110
        )),
        Crop("soybean", "SOYBEAN", "Soybean", "सोयाबीन", 2.0, CropLifecycle(
            20, "इमाज़ेथापायर 10% SL (Pursuit)", "Imazethapyr 10% SL",
            35, "19:19:19 NPK पर्णीय पोषण", "19:19:19 NPK Foliar Spray",
            50, "क्लोरांट्रानिलिप्रोल 18.5% SC", "Chlorantraniliprole 18.5% SC",
            95
        )),
        Crop("cotton", "COTTON", "Cotton", "कपास", 3.5, CropLifecycle(
            25, "पायरीथियोबैक सोडियम 10% EC (Hitweed)", "Pyrithiobac Sodium 10% EC",
            45, "डीएपी + यूरिया जड़ खाद", "Urea + DAP Ring Dressing",
            75, "फ्लूबेंडियामाइड 39.35% SC (Fame)", "Flubendiamide 39.35% SC",
            160
        )),
        Crop("sugarcane", "SUGARCANE", "Sugarcane", "गन्ना", 4.5, CropLifecycle(
            30, "एट्राज़िन + 2,4-D सोडियम साल्ट", "Atrazine + 2,4-D Sodium Salt",
            60, "यूरिया + पोटाश स्प्लिट खुराक", "Urea + Potash Split Dose",
            90, "फिप्रोनिल 0.3% GR (दीमक/तना छेदक)", "Fipronil 0.3% GR",
            360
        )),
        Crop("sesame", "SESAME", "Sesame / Til", "तिल", 1.5, CropLifecycle(
            20, "क्विज़ालोफॉप-इथाइल 5% EC (Targa Super)", "Quizalofop-ethyl 5% EC",
            30, "यूरिया पर्णीय स्प्रे (2%)", "Urea Foliar Spray (2%)",
            45, "मैनकोज़ेब 75% WP (Indofil M-45)", "Mancozeb 75% WP",
            85
        )),
        Crop("mustard", "MUSTARD", "Mustard / Sarson", "सरसों", 2.2, CropLifecycle(
            25, "आइसोप्रोट्यूरॉन 75% WP", "Isoproturon 75% WP",
            40, "यूरिया टॉप-ड्रेस + सल्फर 90% WDG", "Urea Top-Dress + Sulfur 90% WDG",
            60, "डाइमेथोएट 30% EC (माहू/चेपा नियंत्रण)", "Dimethoate 30% EC (Rogor)",
            115
        )),
        Crop("groundnut", "GROUNDNUT", "Groundnut / Peanut", "मूंगफली", 2.4, CropLifecycle(
            22, "इमाज़ेथापायर 10% SL", "Imazethapyr 10% SL",
            40, "जिप्सम भुरकाव (200 kg/एकड़)", "Gypsum Application (200 kg/acre)",
            65, "कार्बेन्डाज़िम + मैनकोज़ेब (Saaf)", "Carbendazim + Mancozeb (Saaf)",
            120
        )),
        Crop("chickpea", "CHICKPEA", "Chickpea / Chana", "चना", 1.8, CropLifecycle(
            25, "क्विज़ालोफॉप-इथाइल 5% EC", "Quizalofop-ethyl 5% EC",
            35, "NPK 19:19:19 पर्णीय (1%)", "NPK 19:19:19 Foliar (1%)",
            60, "एमामेक्टिन बेंजोएट 5% SG (Proclaim)", "Emamectin Benzoate 5% SG",
            105
        )),
        Crop("arhar", "ARHAR", "Pigeon Pea / Arhar / Tur", "अरहर / तुअर", 2.5, CropLifecycle(
            30, "पेंडीमेथालिन 30% EC", "Pendimethalin 30% EC",
            50, "यूरिया पोषण टॉप-ड्रेस", "Urea Top-Dress",
            75, "कोराजन 18.5% SC (फली छेदक)", "Chlorantraniliprole 18.5% SC",
            170
        )),
        Crop("urad", "URAD", "Black Gram / Urad", "उड़द", 1.6, CropLifecycle(
            20, "इमाज़ेथापायर 10% SL", "Imazethapyr 10% SL",
            30, "0:52:34 डीएपी पर्णीय स्प्रे", "0:52:34 DAP Foliar Spray",
            45, "थियामेथॉक्सम 25% WG (सफेद मक्खी)", "Thiamethoxam 25% WG",
            75
        )),
        Crop("moong", "MOONG", "Green Gram / Moong", "मूंग", 1.6, CropLifecycle(
            18, "इमाज़ेथापायर 10% SL", "Imazethapyr 10% SL",
            28, "NPK 13:00:45 पर्णीय स्प्रे", "NPK 13:00:45 Foliar Spray",
            42, "एमामेक्टिन बेंजोएट 5% SG", "Emamectin Benzoate 5% SG",
            70
        )),
        Crop("sunflower", "SUNFLOWER", "Sunflower", "सूरजमुखी", 2.0, CropLifecycle(
            25, "पेंडीमेथालिन 30% EC", "Pendimethalin 30% EC",
            40, "बोरॉन 20% स्प्रे (1g/L)", "Boron 20% Spray (1g/L)",
            60, "मैनकोज़ेब 75% WP", "Mancozeb 75% WP",
            95
        )),
        Crop("bajra", "BAJRA", "Pearl Millet / Bajra", "बाजरा", 2.0, CropLifecycle(
            22, "एट्राज़िन 50% WP", "Atrazine 50% WP",
            35, "यूरिया टॉप-ड्रेस (30 kg/एकड़)", "Urea Top-Dress (30 kg/acre)",
            55, "एज़ोक्सीस्ट्रोबिन 23% SC", "Azoxystrobin 23% SC",
            85
        )),
        Crop("jowar", "JOWAR", "Sorghum / Jowar", "ज्वार", 2.2, CropLifecycle(
            25, "एट्राज़िन 50% WP", "Atrazine 50% WP",
            40, "यूरिया टॉप-ड्रेस", "Urea Top-Dress",
            60, "क्लोरांट्रानिलिप्रोल 18.5% SC", "Chlorantraniliprole 18.5% SC",
            105
        )),
        Crop("potato", "POTATO", "Potato", "आलू", 3.2, CropLifecycle(
            25, "मेट्रिब्यूज़िन 70% WP (Sencor)", "Metribuzin 70% WP",
            45, "NPK 12:61:00 पर्णीय पोषण", "NPK 12:61:00 Foliar Spray",
            65, "साइमोक्सानिल + मैनकोज़ेब (Curzate)", "Cymoxanil + Mancozeb (Curzate)",
            90
        )),
        Crop("onion", "ONION", "Onion", "प्याज़", 2.5, CropLifecycle(
            20, "ऑक्सीफ्लोरोफेन 23.5% EC (Goal)", "Oxyfluorfen 23.5% EC",
            40, "सूक्ष्म पोषक तत्व मिश्रण छिड़काव", "Micronutrient Mixture Spray",
            65, "मैनकोज़ेब + मेटालेक्सिल (Ridomil)", "Mancozeb + Metalaxyl (Ridomil)",
            120
        )),
        Crop("tomato", "TOMATO", "Tomato", "टमाटर", 3.0, CropLifecycle(
            20, "पेंडीमेथालिन 30% EC", "Pendimethalin 30% EC",
            35, "19:19:19 + बोरॉन पर्णीय स्प्रे", "19:19:19 + Boron Foliar Spray",
            55, "सायनट्रानिलिप्रोल 10.26% OD (Benevia)", "Cyantraniliprole 10.26% OD",
            115
        )),
        Crop("chilli", "CHILLI", "Chilli", "मिर्च", 2.8, CropLifecycle(
            22, "क्विज़ालोफॉप-इथाइल 5% EC", "Quizalofop-ethyl 5% EC",
            40, "कैल्शियम नाइट्रेट + बोरॉन पोषण", "Calcium Nitrate + Boron",
            60, "स्पाइरोमेसिफेन 22.9% SC (Oberon)", "Spiromesifen 22.9% SC",
            150
        ))
    )

    // 20 Comprehensive Indian Weed Varieties Database
    private val weedList = listOf(
        Weed("phalaris", "PHALARIS", "Phalaris minor / Gulli Danda", "गुल्ली डंडा", "Phalaris minor"),
        Weed("chenopodium", "CHENOPODIUM", "Chenopodium album / Bathua", "बथुआ", "Chenopodium album"),
        Weed("cyperus", "CYPERUS", "Cyperus rotundus / Motha", "मोथा", "Cyperus rotundus"),
        Weed("parthenium", "PARTHENIUM", "Parthenium hysterophorus / Gajar Ghas", "गाजर घास", "Parthenium hysterophorus"),
        Weed("amaranthus", "AMARANTHUS", "Amaranthus viridis / Chaulai", "चौलाई", "Amaranthus viridis"),
        Weed("ban_sarson", "BAN_SARSON", "Wild Mustard / Ban Sarson", "बन सरसों", "Sinapis arvensis"),
        Weed("cyanotis", "CYANOTIS", "Cyanotis axillaris / Solani / Kanjira", "सायनोटिस ऑक्सिलारिस", "Cyanotis axillaris"),
        Weed("digera", "DIGERA", "Digera arvensis / Lahsua", "दिगेरा / लहसुआ", "Digera arvensis"),
        Weed("oxalis", "OXALIS", "Oxalis corniculata / Khati Booti", "ऑक्सलिस / खट्टी बूटी", "Oxalis corniculata"),
        Weed("cynodon", "CYNODON", "Cynodon dactylon / Doob Ghas", "दूब घास", "Cynodon dactylon"),
        Weed("echinochloa", "ECHINOCHLOA", "Echinochloa crus-galli / Sanwa", "सांवा", "Echinochloa crus-galli"),
        Weed("anagallis", "ANAGALLIS", "Anagallis arvensis / Krishnaneel", "कृष्णनील", "Anagallis arvensis"),
        Weed("convolvulus", "CONVOLVULUS", "Convolvulus arvensis / Hirankhuri", "हिरणखुरी", "Convolvulus arvensis"),
        Weed("argemone", "ARGEMONE", "Argemone mexicana / Satyanashi", "सत्यानाशी", "Argemone mexicana"),
        Weed("commelina", "COMMELINA", "Commelina benghalensis / Kankowa", "कनकोवा", "Commelina benghalensis"),
        Weed("portulaca", "PORTULACA", "Portulaca oleracea / Kulfa", "कुलफा", "Portulaca oleracea"),
        Weed("tribulus", "TRIBULUS", "Tribulus terrestris / Gokhru", "गोखरू", "Tribulus terrestris"),
        Weed("celosia", "CELOSIA", "Celosia argentea / Murga Phool", "मुरगा फूल", "Celosia argentea"),
        Weed("solanum", "SOLANUM", "Solanum nigrum / Makoy", "मकोय", "Solanum nigrum"),
        Weed("xanthium", "XANTHIUM", "Xanthium strumarium / Bhangra", "भंगरा", "Xanthium strumarium")
    )

    data class AiRemedy(
        val id: String,
        val keywords: List<String>,
        val questionHi: String,
        val questionEn: String,
        val answerHi: String,
        val answerEn: String,
        val recommendedChemical: String,
        val recommendedDosage: String,
        val modeTipHi: String,
        val modeTipEn: String
    )

    // 9 Verified Agronomic Disease, Pest & Weed Remedies Database
    private val aiRemedies = listOf(
        AiRemedy(
            id = "phalaris",
            keywords = listOf("gulli", "danda", "phalaris", "mama", "गुल्ली", "डंडा", "गेहूं का मामा", "weed"),
            questionHi = "गेहूं में गुल्ली डंडा (Phalaris minor) का नियंत्रण कैसे करें?",
            questionEn = "How to control Gulli Danda (Phalaris minor) weed in wheat?",
            answerHi = "गेहूं में गुल्ली डंडा के नियंत्रण हेतु बुवाई के 30-35 दिन बाद क्लॉडिनाफॉप-प्रोपारगिल 15% WP @ 160 ग्राम/एकड़ या सल्फोसल्फ्यूरॉन 75% WG @ 13.3 ग्राम/एकड़ 150 लीटर पानी में मिलाकर फ्लैट फैन नोज़ल से स्प्रे करें। प्रतिरोध होने पर पाइनोक्साडेन 5.1% EC (एक्सियल) 400 मिली/एकड़ प्रयोग करें।",
            answerEn = "To control Phalaris minor (Gulli Danda) in wheat, spray Clodinafop-propargyl 15% WP @ 160g/acre or Sulfosulfuron 75% WG @ 13.3g/acre in 150L water 30-35 DAS. For herbicide resistance, switch to Pinoxaden 5.1% EC @ 400ml/acre.",
            recommendedChemical = "Clodinafop 15% WP / Sulfosulfuron 75% WG",
            recommendedDosage = "160g/acre or 13.3g/acre in 150L water",
            modeTipHi = "AGRO SAVE मोड 1 (लक्षित खरपतवार मारक) चुनें ताकि सोलेनोइड केवल खरपतवार पर दवा स्प्रे करे।",
            modeTipEn = "Select AGRO SAVE Mode 1 (Targeted Weedicide) so the solenoid valve actuates strictly on weed clusters."
        ),
        AiRemedy(
            id = "rust",
            keywords = listOf("yellow", "rust", "ratua", "haldi", "पीला", "रतुआ", "हल्दी", "wheat rust"),
            questionHi = "गेहूं में पीला रतुआ (Yellow Rust) रोग की दवा क्या है?",
            questionEn = "What is the remedy for Yellow Rust disease in wheat?",
            answerHi = "पीला रतुआ (Puccinia striiformis) के लक्षण दिखते ही प्रोपिकोनाज़ोल 25% EC (टिल्ट) @ 200 मिली या टेबुकोनाज़ोल 25.9% EC @ 200 मिली प्रति एकड़ 200 लीटर पानी में घोलकर तुरंत स्प्रे करें। गंभीर प्रकोप में 12-15 दिन बाद दोबारा छिड़काव करें।",
            answerEn = "At first detection of Yellow Rust, spray Propiconazole 25% EC (Tilt) @ 200ml or Tebuconazole 25.9% EC @ 200ml per acre in 200L water. Repeat after 12-15 days under heavy fungal pressure.",
            recommendedChemical = "Propiconazole 25% EC (Tilt)",
            recommendedDosage = "200 ml / acre in 200L water",
            modeTipHi = "मोड 2 (लक्षित फसल खाद/दवा मोड) चुनें ताकि फफूंदनाशी सीधे गेहूं के पत्तों पर गिरे, खाली जमीन पर व्यर्थ न हो।",
            modeTipEn = "Select Mode 2 (Targeted Crop Foliar) to deposit fungicide directly onto crop canopy, saving 60% liquid."
        ),
        AiRemedy(
            id = "pink_bollworm",
            keywords = listOf("pink", "bollworm", "sundi", "cotton", "गुलाबी", "सुंडी", "कपास", "kapas"),
            questionHi = "कपास में गुलाबी सुंडी (Pink Bollworm) की रोकथाम कैसे करें?",
            questionEn = "How to manage Pink Bollworm in cotton crop?",
            answerHi = "कपास में गुलाबी सुंडी नियंत्रण हेतु प्रति एकड़ 5-8 फेरोमोन ट्रैप लगाएं। ईटीएल पार होने पर इमामेक्टिन बेंजोएट 5% SG @ 80-100 ग्राम/एकड़ या क्लोरेंट्रानिलिप्रोल 18.5% SC (कोराजन) @ 60 मिली/एकड़ 200 लीटर पानी में छिड़काव करें।",
            answerEn = "Deploy 5-8 pheromone traps per acre for Pink Bollworm monitoring. Spray Emamectin Benzoate 5% SG @ 80-100g/acre or Chlorantraniliprole 18.5% SC @ 60ml/acre in 200L water during flowering and boll formation.",
            recommendedChemical = "Emamectin Benzoate 5% SG / Chlorantraniliprole 18.5% SC",
            recommendedDosage = "80-100g or 60ml / acre in 200L water",
            modeTipHi = "मोड 2 का प्रयोग करें ताकि कीटनाशक सीधे कपास के गूलर और पत्तियों पर लक्षित हो।",
            modeTipEn = "Use Mode 2 to direct insecticide directly to cotton bolls and squares."
        ),
        AiRemedy(
            id = "whitefly",
            keywords = listOf("whitefly", "safed", "makhi", "fly", "सफेद", "मक्खी", "chapa"),
            questionHi = "सफेद मक्खी (Whitefly) का प्रभावी नियंत्रण कैसे करें?",
            questionEn = "How to control Whitefly effectively in field crops?",
            answerHi = "प्रारंभिक अवस्था में नीम तेल (1500 ppm) 1 लीटर/एकड़ या 15-20 पीले चिपचिपे ट्रैप लगाएं। अधिक प्रकोप में फ्लोनिकामिड 50% WG (उलाला) @ 80 ग्राम/एकड़ या डायफेंथियूरॉन 50% WP @ 250 ग्राम/एकड़ 150-200 लीटर पानी में पत्तियों की निचली सतह पर स्प्रे करें।",
            answerEn = "Apply Neem Oil (1500 ppm) @ 1L/acre or install yellow sticky traps. For chemical control, spray Flonicamid 50% WG @ 80g/acre or Diafenthiuron 50% WP @ 250g/acre in 150-200L water.",
            recommendedChemical = "Flonicamid 50% WG (Ulala) / Neem Oil",
            recommendedDosage = "80g / acre in 150-200L water",
            modeTipHi = "पत्तियों के निचले हिस्से पर नोज़ल का कोण 45 डिग्री रखें।",
            modeTipEn = "Adjust nozzle angle for deep under-canopy leaf penetration."
        ),
        AiRemedy(
            id = "nano_urea",
            keywords = listOf("nano", "urea", "nitrogen", "dap", "यूरिया", "नैनो", "खाद", "fertilizer"),
            questionHi = "नैनो यूरिया (Nano Urea) का छिड़काव कब और कितनी मात्रा में करें?",
            questionEn = "How and when to spray Liquid Nano Urea for crops?",
            answerHi = "इफको नैनो यूरिया तरल 2 से 4 मिलीलीटर प्रति लीटर पानी (250-500 मिली प्रति एकड़) की दर से पहला छिड़काव कल्ले फूटने (30-35 दिन) और दूसरा फूल आने से 7-10 दिन पहले करें। यह पारंपरिक यूरिया की एक 45 किग्रा बोरी की बचत करता है।",
            answerEn = "Mix Liquid Nano Urea @ 2-4 ml per liter of water (250-500 ml per acre). 1st spray at vegetative/tillering stage (30-35 DAS) and 2nd spray 7-10 days before flowering. Replaces one 45kg bag of urea.",
            recommendedChemical = "IFFCO Liquid Nano Urea (4% N)",
            recommendedDosage = "2-4 ml / Liter of water (250-500 ml / acre)",
            modeTipHi = "मोड 2 (टारगेटेड फसल पर्णीय स्प्रे) चुनें ताकि नैनो ड्रॉपलेट सीधे पत्तों के रंध्रों पर पड़ें।",
            modeTipEn = "Select Mode 2 (Targeted Foliar Spray) so nano nitrogen droplets absorb directly into stomata."
        ),
        AiRemedy(
            id = "blast",
            keywords = listOf("blast", "paddy", "rice", "sheath", "blight", "धान", "ब्लास्ट", "झुलसा"),
            questionHi = "धान में ब्लास्ट व शीथ ब्लाइट रोग का क्या उपचार है?",
            questionEn = "What is the remedy for Blast and Sheath Blight in Paddy?",
            answerHi = "धान में गर्दन तोड़ व पत्ती ब्लास्ट के नियंत्रण हेतु ट्राइसाइक्लाज़ोल 75% WP @ 120-160 ग्राम/एकड़ या आइसोप्रोथियोलेन 40% EC @ 300 मिली/एकड़ 200 लीटर पानी में स्प्रे करें। शीथ ब्लाइट दिखने पर हेक्साकोनाज़ोल 5% SC @ 400 मिली/एकड़ प्रयोग करें।",
            answerEn = "For leaf and neck blast in paddy, spray Tricyclazole 75% WP @ 120-160g/acre or Isoprothiolane 40% EC @ 300ml/acre in 200L water. For Sheath Blight, use Hexaconazole 5% SC @ 400ml/acre.",
            recommendedChemical = "Tricyclazole 75% WP",
            recommendedDosage = "120-160g / acre in 200L water",
            modeTipHi = "मोड 2 से सीधे धान के तने व पत्तियों पर छिड़काव करें।",
            modeTipEn = "Execute using Mode 2 targeting rice tillers and canopy."
        ),
        AiRemedy(
            id = "motha",
            keywords = listOf("motha", "cyperus", "nutsedge", "मोथा", "नागरमोथा"),
            questionHi = "खेत में मोथा (Cyperus rotundus) को जड़ से कैसे खत्म करें?",
            questionEn = "How to eradicate Motha (Purple Nutsedge) weed in fields?",
            answerHi = "मोथा की 3-5 पत्ती अवस्था पर हैलोसल्फ्यूरॉन-मिथाइल 75% WG (सेंपरा) @ 36 ग्राम प्रति एकड़ 150 लीटर पानी में नॉन-आयनिक सर्फैक्टेंट मिलाकर स्प्रे करें। यह मोथा की भूमिगत गांठों में जाकर उसे जड़ से सुखा देता है।",
            answerEn = "Apply Halosulfuron-methyl 75% WG (Sempra) @ 36g/acre in 150L water with surfactant at 3-5 leaf stage. Translocates into underground tubers to destroy rhizomes permanently.",
            recommendedChemical = "Halosulfuron-methyl 75% WG (Sempra)",
            recommendedDosage = "36 g / acre in 150L water",
            modeTipHi = "मोड 1 (लक्षित खरपतवार मारक) चुनें।",
            modeTipEn = "Use Mode 1 (Targeted Weedicide)."
        ),
        AiRemedy(
            id = "bathua",
            keywords = listOf("bathua", "chenopodium", "बथुआ", "चौड़ी पत्ती"),
            questionHi = "गेहूं में बथुआ (Bathua) खरपतवार कैसे नष्ट करें?",
            questionEn = "How to control Bathua (Chenopodium album) in wheat?",
            answerHi = "गेहूं में बथुआ नियंत्रण के लिए मेटसल्फ्यूरॉन-मिथाइल 20% WP (एल्ग्रिप) @ 8 ग्राम प्रति एकड़ या 2,4-D अमाइन साल्ट 58% SL @ 400 मिली/एकड़ 150 लीटर पानी में बुवाई के 30-35 दिन बाद छिड़कें।",
            answerEn = "In wheat fields with Bathua, spray Metsulfuron-methyl 20% WP @ 8g/acre or 2,4-D Amine salt 58% SL @ 400ml/acre in 150L water at 30-35 DAS.",
            recommendedChemical = "Metsulfuron-methyl 20% WP / 2,4-D",
            recommendedDosage = "8 g / acre in 150L water",
            modeTipHi = "मोड 1 (खरपतवार मारक मोड) में चलाएं।",
            modeTipEn = "Run in Mode 1 (Targeted Weedicide Mode)."
        ),
        AiRemedy(
            id = "aphid",
            keywords = listOf("mahu", "aphid", "sarson", "mustard", "माहू", "मोयला", "सरसों"),
            questionHi = "सरसों में माहू/मोयला (Aphids) कीट का क्या इलाज है?",
            questionEn = "What is the remedy for Aphids (Mahu) in Mustard?",
            answerHi = "सरसों में माहू नियंत्रण हेतु डायमेथोएट 30% EC (रोगोर) @ 250 मिली/एकड़ या थायमेथोक्सम 25% WG @ 80 ग्राम/एकड़ 150-200 लीटर पानी में स्प्रे करें। परागण करने वाली मधुमक्खियों की सुरक्षा हेतु शाम 4 बजे के बाद ही छिड़काव करें।",
            answerEn = "Control mustard aphids using Dimethoate 30% EC @ 250ml/acre or Thiamethoxam 25% WG @ 80g/acre in 150-200L water. Strictly spray after 4:00 PM to safeguard foraging honeybees.",
            recommendedChemical = "Dimethoate 30% EC / Thiamethoxam 25% WG",
            recommendedDosage = "250 ml/acre or 80 g/acre in 150-200L water",
            modeTipHi = "मोड 2 से पौधों की ऊपरी टहनियों और फूल शाखाओं पर स्प्रे करें।",
            modeTipEn = "Spray terminal shoots and inflorescence using Mode 2."
        )
    )

    // Background Thread Pool & Main Looper Handler
    private val networkExecutor = Executors.newSingleThreadExecutor()
    private val mainHandler = Handler(Looper.getMainLooper())

    // Voice STT & TTS Handlers
    private lateinit var speechResultLauncher: ActivityResultLauncher<Intent>
    private lateinit var audioPermissionLauncher: ActivityResultLauncher<String>
    private var textToSpeech: TextToSpeech? = null
    private var isTtsReady = false
    private var lastDoctorRemedy: AiRemedy? = null

    // UI View References
    private lateinit var tvAppTitle: TextView
    private lateinit var tvAppSubtitle: TextView
    private lateinit var btnLanguageToggle: Button
    private lateinit var viewConnectionDot: View
    private lateinit var tvConnectionStatus: TextView

    // AI Doctor Views
    private lateinit var tvAiDoctorTitle: TextView
    private lateinit var tvAiDoctorSubtitle: TextView
    private lateinit var tvVoiceBadge: TextView
    private lateinit var etDoctorQuery: EditText
    private lateinit var btnVoiceMic: ImageButton
    private lateinit var btnAskDoctor: Button
    private lateinit var chipQuery1: Button
    private lateinit var chipQuery2: Button
    private lateinit var chipQuery3: Button
    private lateinit var chipQuery4: Button
    private lateinit var cardDoctorAnswer: View
    private lateinit var tvDoctorAnswerTitle: TextView
    private lateinit var tvDoctorAnswer: TextView
    private lateinit var tvDoctorDosageBadge: TextView
    private lateinit var btnReplayTts: Button

    // Smart Weather & Rain Loss Warning Views
    private lateinit var tvWeatherHeaderTitle: TextView
    private lateinit var tvWeatherHeaderSubtitle: TextView
    private lateinit var tvWeatherBadge: TextView
    private lateinit var tvWeatherTemp: TextView
    private lateinit var tvWeatherTempLabel: TextView
    private lateinit var tvWeatherHumidity: TextView
    private lateinit var tvWeatherHumidityLabel: TextView
    private lateinit var tvWeatherWind: TextView
    private lateinit var tvWeatherWindLabel: TextView
    private lateinit var tvWeatherRain: TextView
    private lateinit var tvWeatherRainLabel: TextView
    private lateinit var layoutWeatherAlertBox: View
    private lateinit var tvWeatherAdvisoryTitle: TextView
    private lateinit var tvWeatherAdvisoryText: TextView
    private lateinit var switchWeatherLock: Switch
    private lateinit var btnToggleWeatherSimulation: Button
    private lateinit var tvWeatherLockHelp: TextView

    // Sowing Date & Crop Schedule Planner Views
    private lateinit var tvScheduleHeaderTitle: TextView
    private lateinit var tvScheduleHeaderSubtitle: TextView
    private lateinit var tvSowingLabel: TextView
    private lateinit var tvSelectedSowingDate: TextView
    private lateinit var btnSelectSowingDate: Button
    private lateinit var tvCurrentCropDisplay: TextView
    private lateinit var tvCropAgeBadge: TextView
    private lateinit var tvMilestone1Title: TextView
    private lateinit var tvMilestone1Status: TextView
    private lateinit var tvMilestone1Date: TextView
    private lateinit var tvMilestone1Chem: TextView
    private lateinit var tvMilestone2Title: TextView
    private lateinit var tvMilestone2Status: TextView
    private lateinit var tvMilestone2Date: TextView
    private lateinit var tvMilestone2Chem: TextView
    private lateinit var tvMilestone3Title: TextView
    private lateinit var tvMilestone3Status: TextView
    private lateinit var tvMilestone3Date: TextView
    private lateinit var tvMilestone3Chem: TextView
    private lateinit var tvMilestone4Title: TextView
    private lateinit var tvMilestone4Status: TextView
    private lateinit var tvMilestone4Date: TextView
    private lateinit var tvMilestone4Chem: TextView

    // Telemetry Views
    private lateinit var tvTelemetryHeader: TextView
    private lateinit var tvBatteryPercent: TextView
    private lateinit var tvBatteryVoltage: TextView
    private lateinit var progressBattery: ProgressBar
    private lateinit var cardLowBatteryWarning: View
    private lateinit var tvWarningTitle: TextView
    private lateinit var tvWarningSubtitle: TextView
    private lateinit var tvSprayModesHeader: TextView
    private lateinit var tvSprayModesSub: TextView
    private lateinit var rgSprayModes: RadioGroup
    private lateinit var rbMode1Weed: RadioButton
    private lateinit var rbMode2Crop: RadioButton
    private lateinit var rbMode3Universal: RadioButton
    private lateinit var tvAiCalibrationHeader: TextView
    private lateinit var tvAiCalibrationSub: TextView
    private lateinit var tvLabelCrop: TextView
    private lateinit var spinnerCrop: Spinner
    private lateinit var tvLabelWeed: TextView
    private lateinit var tvWeedSelectorHint: TextView
    private lateinit var tvSelectedWeedsCount: TextView
    private lateinit var btnSelectCommonWeeds: Button
    private lateinit var btnSelectAllWeeds: Button
    private lateinit var btnClearWeeds: Button
    private lateinit var btnOpenWeedsDialog: Button
    private lateinit var chipGroupWeeds: ChipGroup
    private lateinit var cardActiveWeedStatus: View
    private lateinit var tvActiveWeedsTitle: TextView
    private lateinit var tvActiveWeedsCountBadge: TextView
    private lateinit var tvActiveWeedsList: TextView
    private lateinit var tvActiveWeedsCommandUrl: TextView
    private lateinit var btnConfigureModel: Button
    private lateinit var tvEstimatorHeader: TextView
    private lateinit var tvEstimatorSub: TextView
    private lateinit var btnArea05: Button
    private lateinit var btnArea10: Button
    private lateinit var btnArea20: Button
    private lateinit var btnArea50: Button
    private lateinit var tvCustomAreaLabel: TextView
    private lateinit var etCustomArea: EditText
    private lateinit var tvHectaresUnit: TextView
    private lateinit var tvEstimatedLiquidLabel: TextView
    private lateinit var tvEstimatedChemical: TextView
    private lateinit var tvCalculationBreakdown: TextView
    private lateinit var tvStatusLog: TextView

    // State Variables
    private var currentLanguage = AppLanguage.HI // Default to Hindi for Indian farmers
    private var isConnected = false
    private var selectedCropIndex = 0
    // Multi-Select Weed Selection: Farmers typically have 6-7 dominant weed species simultaneously
    private val selectedWeedCodes = mutableSetOf(
        "PHALARIS", "CHENOPODIUM", "CYPERUS", "PARTHENIUM", "AMARANTHUS", "BAN_SARSON"
    )
    private var currentAreaHectares = 1.0
    private var lowBatteryAlertTriggered = false

    // Sowing Date Calendar (default: 10 days ago)
    private var sowingCalendar: Calendar = Calendar.getInstance().apply { add(Calendar.DAY_OF_YEAR, -10) }

    // Weather Simulation & Rain Safety Valve Lock State
    private var isWeatherSimulationHighRisk = true
    private var isWeatherLockActive = true

    // Periodic Telemetry Polling (every 5 seconds)
    private val telemetryRunnable = object : Runnable {
        override fun run() {
            fetchBatteryTelemetry()
            mainHandler.postDelayed(this, 5000)
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        createNotificationChannel()
        checkNotificationPermission()

        initVoiceAndTts()
        bindViews()
        setupLanguageToggle()
        setupWeatherAdvisory()
        setupCropSchedulePlanner()
        setupAiDoctor()
        setupCropAndMultiWeedSelector()
        setupSprayModeSelector()
        setupAreaCalculator()

        // Apply initial language state
        applyLanguage(currentLanguage)

        // Initial Calculations & Telemetry
        recalculateChemicalVolume()
        fetchBatteryTelemetry()
    }

    override fun onResume() {
        super.onResume()
        mainHandler.post(telemetryRunnable)
    }

    override fun onPause() {
        super.onPause()
        mainHandler.removeCallbacks(telemetryRunnable)
    }

    private fun bindViews() {
        tvAppTitle = findViewById(R.id.tvAppTitle)
        tvAppSubtitle = findViewById(R.id.tvAppSubtitle)
        btnLanguageToggle = findViewById(R.id.btnLanguageToggle)
        viewConnectionDot = findViewById(R.id.viewConnectionDot)
        tvConnectionStatus = findViewById(R.id.tvConnectionStatus)

        // Smart Weather & Rain Loss Warning Views
        tvWeatherHeaderTitle = findViewById(R.id.tvWeatherHeaderTitle)
        tvWeatherHeaderSubtitle = findViewById(R.id.tvWeatherHeaderSubtitle)
        tvWeatherBadge = findViewById(R.id.tvWeatherBadge)
        tvWeatherTemp = findViewById(R.id.tvWeatherTemp)
        tvWeatherTempLabel = findViewById(R.id.tvWeatherTempLabel)
        tvWeatherHumidity = findViewById(R.id.tvWeatherHumidity)
        tvWeatherHumidityLabel = findViewById(R.id.tvWeatherHumidityLabel)
        tvWeatherWind = findViewById(R.id.tvWeatherWind)
        tvWeatherWindLabel = findViewById(R.id.tvWeatherWindLabel)
        tvWeatherRain = findViewById(R.id.tvWeatherRain)
        tvWeatherRainLabel = findViewById(R.id.tvWeatherRainLabel)
        layoutWeatherAlertBox = findViewById(R.id.layoutWeatherAlertBox)
        tvWeatherAdvisoryTitle = findViewById(R.id.tvWeatherAdvisoryTitle)
        tvWeatherAdvisoryText = findViewById(R.id.tvWeatherAdvisoryText)
        switchWeatherLock = findViewById(R.id.switchWeatherLock)
        btnToggleWeatherSimulation = findViewById(R.id.btnToggleWeatherSimulation)
        tvWeatherLockHelp = findViewById(R.id.tvWeatherLockHelp)

        // Sowing Date & Crop Schedule Planner Views
        tvScheduleHeaderTitle = findViewById(R.id.tvScheduleHeaderTitle)
        tvScheduleHeaderSubtitle = findViewById(R.id.tvScheduleHeaderSubtitle)
        tvSowingLabel = findViewById(R.id.tvSowingLabel)
        tvSelectedSowingDate = findViewById(R.id.tvSelectedSowingDate)
        btnSelectSowingDate = findViewById(R.id.btnSelectSowingDate)
        tvCurrentCropDisplay = findViewById(R.id.tvCurrentCropDisplay)
        tvCropAgeBadge = findViewById(R.id.tvCropAgeBadge)
        tvMilestone1Title = findViewById(R.id.tvMilestone1Title)
        tvMilestone1Status = findViewById(R.id.tvMilestone1Status)
        tvMilestone1Date = findViewById(R.id.tvMilestone1Date)
        tvMilestone1Chem = findViewById(R.id.tvMilestone1Chem)
        tvMilestone2Title = findViewById(R.id.tvMilestone2Title)
        tvMilestone2Status = findViewById(R.id.tvMilestone2Status)
        tvMilestone2Date = findViewById(R.id.tvMilestone2Date)
        tvMilestone2Chem = findViewById(R.id.tvMilestone2Chem)
        tvMilestone3Title = findViewById(R.id.tvMilestone3Title)
        tvMilestone3Status = findViewById(R.id.tvMilestone3Status)
        tvMilestone3Date = findViewById(R.id.tvMilestone3Date)
        tvMilestone3Chem = findViewById(R.id.tvMilestone3Chem)
        tvMilestone4Title = findViewById(R.id.tvMilestone4Title)
        tvMilestone4Status = findViewById(R.id.tvMilestone4Status)
        tvMilestone4Date = findViewById(R.id.tvMilestone4Date)
        tvMilestone4Chem = findViewById(R.id.tvMilestone4Chem)

        // AI Doctor Views
        tvAiDoctorTitle = findViewById(R.id.tvAiDoctorTitle)
        tvAiDoctorSubtitle = findViewById(R.id.tvAiDoctorSubtitle)
        tvVoiceBadge = findViewById(R.id.tvVoiceBadge)
        etDoctorQuery = findViewById(R.id.etDoctorQuery)
        btnVoiceMic = findViewById(R.id.btnVoiceMic)
        btnAskDoctor = findViewById(R.id.btnAskDoctor)
        chipQuery1 = findViewById(R.id.chipQuery1)
        chipQuery2 = findViewById(R.id.chipQuery2)
        chipQuery3 = findViewById(R.id.chipQuery3)
        chipQuery4 = findViewById(R.id.chipQuery4)
        cardDoctorAnswer = findViewById(R.id.cardDoctorAnswer)
        tvDoctorAnswerTitle = findViewById(R.id.tvDoctorAnswerTitle)
        tvDoctorAnswer = findViewById(R.id.tvDoctorAnswer)
        tvDoctorDosageBadge = findViewById(R.id.tvDoctorDosageBadge)
        btnReplayTts = findViewById(R.id.btnReplayTts)

        // Telemetry
        tvTelemetryHeader = findViewById(R.id.tvTelemetryHeader)
        progressBattery = findViewById(R.id.progressBattery)
        tvBatteryPercent = findViewById(R.id.tvBatteryPercent)
        tvBatteryVoltage = findViewById(R.id.tvBatteryVoltage)
        cardLowBatteryWarning = findViewById(R.id.cardLowBatteryWarning)
        tvWarningTitle = findViewById(R.id.tvWarningTitle)
        tvWarningSubtitle = findViewById(R.id.tvWarningSubtitle)
        tvSprayModesHeader = findViewById(R.id.tvSprayModesHeader)
        tvSprayModesSub = findViewById(R.id.tvSprayModesSub)
        rgSprayModes = findViewById(R.id.rgSprayModes)
        rbMode1Weed = findViewById(R.id.rbMode1Weed)
        rbMode2Crop = findViewById(R.id.rbMode2Crop)
        rbMode3Universal = findViewById(R.id.rbMode3Universal)
        tvAiCalibrationHeader = findViewById(R.id.tvAiCalibrationHeader)
        tvAiCalibrationSub = findViewById(R.id.tvAiCalibrationSub)
        tvLabelCrop = findViewById(R.id.tvLabelCrop)
        spinnerCrop = findViewById(R.id.spinnerCrop)
        tvLabelWeed = findViewById(R.id.tvLabelWeed)
        tvWeedSelectorHint = findViewById(R.id.tvWeedSelectorHint)
        tvSelectedWeedsCount = findViewById(R.id.tvSelectedWeedsCount)
        btnSelectCommonWeeds = findViewById(R.id.btnSelectCommonWeeds)
        btnSelectAllWeeds = findViewById(R.id.btnSelectAllWeeds)
        btnClearWeeds = findViewById(R.id.btnClearWeeds)
        btnOpenWeedsDialog = findViewById(R.id.btnOpenWeedsDialog)
        chipGroupWeeds = findViewById(R.id.chipGroupWeeds)
        cardActiveWeedStatus = findViewById(R.id.cardActiveWeedStatus)
        tvActiveWeedsTitle = findViewById(R.id.tvActiveWeedsTitle)
        tvActiveWeedsCountBadge = findViewById(R.id.tvActiveWeedsCountBadge)
        tvActiveWeedsList = findViewById(R.id.tvActiveWeedsList)
        tvActiveWeedsCommandUrl = findViewById(R.id.tvActiveWeedsCommandUrl)
        btnConfigureModel = findViewById(R.id.btnConfigureModel)
        tvEstimatorHeader = findViewById(R.id.tvEstimatorHeader)
        tvEstimatorSub = findViewById(R.id.tvEstimatorSub)
        btnArea05 = findViewById(R.id.btnArea05)
        btnArea10 = findViewById(R.id.btnArea10)
        btnArea20 = findViewById(R.id.btnArea20)
        btnArea50 = findViewById(R.id.btnArea50)
        tvCustomAreaLabel = findViewById(R.id.tvCustomAreaLabel)
        etCustomArea = findViewById(R.id.etCustomArea)
        tvHectaresUnit = findViewById(R.id.tvHectaresUnit)
        tvEstimatedLiquidLabel = findViewById(R.id.tvEstimatedLiquidLabel)
        tvEstimatedChemical = findViewById(R.id.tvEstimatedChemical)
        tvCalculationBreakdown = findViewById(R.id.tvCalculationBreakdown)
        tvStatusLog = findViewById(R.id.tvStatusLog)
    }

    /**
     * 1. DUAL LANGUAGE TOGGLE & DYNAMIC STATE MANAGEMENT (EN <-> HI)
     */
    private fun setupLanguageToggle() {
        btnLanguageToggle.setOnClickListener {
            currentLanguage = if (currentLanguage == AppLanguage.HI) AppLanguage.EN else AppLanguage.HI
            applyLanguage(currentLanguage)
        }
    }

    private fun applyLanguage(lang: AppLanguage) {
        if (lang == AppLanguage.HI) {
            btnLanguageToggle.text = "Language / भाषा: [HI] EN"
            tvAppTitle.text = "AGRO SAVE • स्मार्ट कृषि"
            tvAppSubtitle.text = "एआई परिशुद्धता छिड़काव यंत्र | ESP32-CAM"

            // Weather Card Hindi labels
            tvWeatherHeaderTitle.text = "मौसम व बारिश चेतावनी (Weather Advisory)"
            tvWeatherHeaderSubtitle.text = "बारिश में दवा धुलने से 100% नुकसान बचाएं"
            tvWeatherTempLabel.text = "तापमान / Temp"
            tvWeatherHumidityLabel.text = "नमी / Humidity"
            tvWeatherWindLabel.text = "हवा / Wind"
            tvWeatherRainLabel.text = "बारिश / Rain"
            switchWeatherLock.text = "बारिश सुरक्षा सोलेनोइड लॉक (Rain Safety Valve Lock)"
            btnToggleWeatherSimulation.text = "स्थिति बदलें (Simulate)"
            tvWeatherLockHelp.text = "सक्रिय होने पर, 60% से अधिक बारिश की संभावना होने पर ESP32 सोलेनोइड स्प्रे नहीं खोलेगा।"

            // Schedule Planner Hindi labels
            tvScheduleHeaderTitle.text = "फसल चक्र एवं स्प्रे टाइमलाइन (Crop Lifecycle Planner)"
            tvScheduleHeaderSubtitle.text = "बुवाई से कटाई तक सटीक चरणबद्ध छिड़काव सारणी"
            tvSowingLabel.text = "फसल बुवाई की तारीख (Sowing Date):"
            btnSelectSowingDate.text = "तारीख चुनें (Pick Date)"

            // AI Doctor Hindi labels
            tvAiDoctorTitle.text = "🌾 एआई एग्रो-डॉक्टर और वॉइस असिस्टेंट"
            tvAiDoctorSubtitle.text = "रोग, कीट, खरपतवार या दवा की मात्रा बोलकर या लिखकर पूछें"
            tvVoiceBadge.text = "आवाज़ से पूछें (Voice STT / TTS)"
            etDoctorQuery.hint = "उदाहरण: गेहूं में गुल्ली डंडा या पीला रतुआ की दवा..."
            btnAskDoctor.text = "सलाह प्राप्त करें"
            chipQuery1.text = "गुल्ली डंडा दवा"
            chipQuery2.text = "गेहूं पीला रतुआ"
            chipQuery3.text = "कपास गुलाबी सुंडी"
            chipQuery4.text = "नैनो यूरिया मात्रा"
            tvDoctorAnswerTitle.text = "🌾 एआई एग्रो डॉक्टर निदान एवं उपचार:"
            btnReplayTts.text = "🔊 आवाज़ में सुनें (Replay Voice)"

            tvTelemetryHeader.text = "मशीन स्थिति / बैटरी का स्तर"
            tvWarningTitle.text = "कम बैटरी चेतावनी (LOW BATTERY WARNING)"
            tvWarningSubtitle.text = "बैटरी 15% से कम है। कृपया 12V चार्जर तुरंत जोड़ें।"
            
            tvSprayModesHeader.text = "स्प्रे मोड चुनें (Operational Spray Mode)"
            tvSprayModesSub.text = "सोलेनोइड वाल्व नियंत्रण विधि का चयन करें"
            rbMode1Weed.text = "केवल खरपतवार मारक मोड (Weedicide)\nमुख्य फसल सुरक्षित, केवल खरपतवार पर स्प्रे"
            rbMode2Crop.text = "केवल फसल खाद मोड (Fertilizer)\nपौधों के पत्तों पर स्प्रे, खाली जमीन पर दवा की बचत"
            rbMode3Universal.text = "पूरे खेत में छिड़काव मोड (Universal Field)\nसमान रोकथाम के लिए निरंतर व्यापक छिड़काव"

            tvAiCalibrationHeader.text = "फसल एवं खरपतवार बहु-चयन (AI मॉडल)"
            tvAiCalibrationSub.text = "खेत के अनुसार 6-7 खरपतवार एक साथ चुनें और ESP32 को भेजें"
            tvLabelCrop.text = "मुख्य फसल (Main Crop - 20 किस्में):"
            tvLabelWeed.text = "लक्षित खरपतवार बहु-चयन (Multi-Select Weeds - 20 किस्में):"
            tvWeedSelectorHint.text = "एक साथ 6-7 या अधिक खरपतवार चुनें। ईएसपी32 को 'http://192.168.4.1/set_weeds?list=[WEEDS]' प्रेषित होता है"
            btnSelectCommonWeeds.text = "🌾 6 सामान्य"
            btnSelectAllWeeds.text = "सभी (All)"
            btnClearWeeds.text = "साफ"
            btnOpenWeedsDialog.text = "📋 20 खरपतवार चेकलिस्ट डायलॉग खोलें (+20 Weeds Dialog)"
            tvActiveWeedsTitle.text = "सक्रिय खरपतवार लक्ष्य (Active Field Targets):"
            btnConfigureModel.text = "एआई मॉडल कॉन्फ़िगर करें (CONFIGURE MODEL)"

            tvEstimatorHeader.text = "खेत रकबा और अनुमानित दवा (Chemical Estimator)"
            tvEstimatorSub.text = "रकबा चुनें (हेक्टेयर) और कीटनाशक मात्रा की गणना करें"
            tvCustomAreaLabel.text = "कस्टम रकबा:"
            tvHectaresUnit.text = "Hectares (हेक्टेयर)"
            tvEstimatedLiquidLabel.text = "अनुमानित दवा की मात्रा (Estimated Liquid):"
            tvStatusLog.text = "सिस्टम स्थिति: तैयार"
        } else {
            btnLanguageToggle.text = "Language / भाषा: [EN] HI"
            tvAppTitle.text = "AGRO SAVE • Smart Agriculture"
            tvAppSubtitle.text = "AI Precision Sprayer | ESP32-CAM"

            // Weather Card English labels
            tvWeatherHeaderTitle.text = "Weather & Rain Loss Advisory"
            tvWeatherHeaderSubtitle.text = "Prevent 100% pesticide washout and chemical waste"
            tvWeatherTempLabel.text = "Temperature"
            tvWeatherHumidityLabel.text = "Humidity"
            tvWeatherWindLabel.text = "Wind Speed"
            tvWeatherRainLabel.text = "Rain Risk"
            switchWeatherLock.text = "Rain Safety Solenoid Lock"
            btnToggleWeatherSimulation.text = "Toggle Condition"
            tvWeatherLockHelp.text = "When active, ESP32 solenoid valve is locked if rain probability exceeds 60%."

            // Schedule Planner English labels
            tvScheduleHeaderTitle.text = "Crop Lifecycle & Spray Schedule Planner"
            tvScheduleHeaderSubtitle.text = "From sowing to harvest: precision multi-stage spray timeline"
            tvSowingLabel.text = "Crop Sowing Date:"
            btnSelectSowingDate.text = "Pick Date"

            // AI Doctor English labels
            tvAiDoctorTitle.text = "🌾 AI Agro-Doctor & Voice Assistant"
            tvAiDoctorSubtitle.text = "Ask questions on crop diseases, pests, weeds, or spray dosages"
            tvVoiceBadge.text = "Voice Enabled (STT / TTS)"
            etDoctorQuery.hint = "e.g. How to control Gulli Danda weed or Yellow Rust..."
            btnAskDoctor.text = "Ask Doctor"
            chipQuery1.text = "Phalaris Weed"
            chipQuery2.text = "Wheat Yellow Rust"
            chipQuery3.text = "Pink Bollworm"
            chipQuery4.text = "Nano Urea Dose"
            tvDoctorAnswerTitle.text = "🌾 AI Agro Doctor Remedy & Diagnosis:"
            btnReplayTts.text = "🔊 Listen to Remedy (Replay Voice)"

            tvTelemetryHeader.text = "Machine Status / Battery Level"
            tvWarningTitle.text = "LOW BATTERY WARNING (< 15%)"
            tvWarningSubtitle.text = "Battery below 15%. Connect 12V charger immediately."

            tvSprayModesHeader.text = "Operational Spray Mode"
            tvSprayModesSub.text = "Select how the AI sprayer actuates the solenoid valve"
            rbMode1Weed.text = "Targeted Weedicide Mode (Weedicide)\nProtects crops, sprays only detected weeds"
            rbMode2Crop.text = "Targeted Crop Fertilizer Mode (Fertilizer)\nSprays only crop foliage, saves liquid on bare soil"
            rbMode3Universal.text = "Universal Field Spray Mode\nContinuous blanket spraying across entire field"

            tvAiCalibrationHeader.text = "Crop & Multi-Weed Targets (AI Vision Model)"
            tvAiCalibrationSub.text = "Select 6-7 weeds simultaneously to calibrate ESP32 detection"
            tvLabelCrop.text = "Main Field Crop (20 Varieties):"
            tvLabelWeed.text = "Target Invasive Weeds Multi-Select (20 Varieties):"
            tvWeedSelectorHint.text = "Select 6-7 or more weeds simultaneously. Dispatches 'http://192.168.4.1/set_weeds?list=[WEEDS]' to ESP32"
            btnSelectCommonWeeds.text = "🌾 6 Common"
            btnSelectAllWeeds.text = "Select All"
            btnClearWeeds.text = "Clear"
            btnOpenWeedsDialog.text = "📋 Open 20-Weeds Multi-Choice Dialog"
            tvActiveWeedsTitle.text = "Active Multi-Weed Targets:"
            btnConfigureModel.text = "CONFIGURE AI MODEL"

            tvEstimatorHeader.text = "Land Area & Chemical Estimator"
            tvEstimatorSub.text = "Quick-select area (Hectares) to calculate pesticide volume"
            tvCustomAreaLabel.text = "Custom Area:"
            tvHectaresUnit.text = "Hectares"
            tvEstimatedLiquidLabel.text = "Estimated Liquid Volume:"
            tvStatusLog.text = "System Status: Ready"
        }

        // Re-display active remedy in newly selected language if one is active
        lastDoctorRemedy?.let { remedy ->
            displayDoctorRemedy(remedy, playVoice = false)
        }

        // Update Multi-Weed selection badges & dynamic chips
        updateActiveWeedsDisplay()
        rebuildWeedChips()

        // Re-populate crop spinner with updated language while keeping current selection
        updateCropSpinnerLanguage(lang)
        recalculateChemicalVolume()
        updateWeatherAdvisoryUI()
        updateCropLifecycleSchedule()
        setConnectedState(isConnected)
    }

    /**
     * 2. MULTI-SELECT WEED & UNWANTED CROP SELECTOR (20 VARIETIES)
     * Real-world agricultural fields have multiple weed species simultaneously (typically 6-7 weeds).
     * Transmits comma-separated list: http://192.168.4.1/set_weeds?list=GULLI_DANDA,BATHUA,MOTHA...
     */
    private fun updateCropSpinnerLanguage(lang: AppLanguage) {
        val cropNames = cropList.map { 
            if (lang == AppLanguage.HI) "\${it.nameHi} (\${it.nameEn} - \${it.dosageLPerHa} L/Ha)"
            else "\${it.nameEn} (\${it.nameHi} - \${it.dosageLPerHa} L/Ha)"
        }
        val cropAdapter = ArrayAdapter(this, android.R.layout.simple_spinner_dropdown_item, cropNames)
        spinnerCrop.adapter = cropAdapter
        spinnerCrop.setSelection(selectedCropIndex)
    }

    private fun setupCropAndMultiWeedSelector() {
        updateCropSpinnerLanguage(currentLanguage)

        spinnerCrop.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
            override fun onItemSelected(parent: AdapterView<*>?, view: View?, position: Int, id: Long) {
                selectedCropIndex = position
                recalculateChemicalVolume()
                updateCropLifecycleSchedule()
            }
            override fun onNothingSelected(parent: AdapterView<*>?) {}
        }

        // Initialize Dynamic Multi-Select Chips
        rebuildWeedChips()

        // Quick Preset 1: Select 6 Common Field Weeds
        btnSelectCommonWeeds.setOnClickListener {
            selectedWeedCodes.clear()
            selectedWeedCodes.addAll(listOf("PHALARIS", "CHENOPODIUM", "CYPERUS", "PARTHENIUM", "AMARANTHUS", "BAN_SARSON"))
            syncWeedChipsState()
            dispatchMultiWeedTarget()
        }

        // Quick Preset 2: Select All 20 Weeds
        btnSelectAllWeeds.setOnClickListener {
            selectedWeedCodes.clear()
            selectedWeedCodes.addAll(weedList.map { it.code })
            syncWeedChipsState()
            dispatchMultiWeedTarget()
        }

        // Action: Clear All Selections
        btnClearWeeds.setOnClickListener {
            selectedWeedCodes.clear()
            syncWeedChipsState()
            dispatchMultiWeedTarget()
        }

        // Action: Open Multi-Choice 20-Weeds Dialog with Checkboxes
        btnOpenWeedsDialog.setOnClickListener {
            showMultiWeedSelectionDialog()
        }

        // Action: Configure AI Vision Model on ESP32-CAM
        btnConfigureModel.setOnClickListener {
            val cropCode = cropList[selectedCropIndex].code
            val weedsParam = if (selectedWeedCodes.isEmpty()) "NONE" else selectedWeedCodes.joinToString(",")
            val url = "\$ENDPOINT_SET_MODEL?crop=\$cropCode&weeds=\$weedsParam"
            val msg = if (currentLanguage == AppLanguage.HI) 
                "एआई मॉडल कैलिब्रेट: \$cropCode vs [\${selectedWeedCodes.size} खरपतवार]" 
                else "AI Calibrated: \$cropCode vs [\${selectedWeedCodes.size} Weeds]"
            
            updateStatusLog(msg)
            sendHttpRequest(url, msg)
        }

        // Initial UI display
        updateActiveWeedsDisplay()
    }

    private fun rebuildWeedChips() {
        chipGroupWeeds.removeAllViews()
        val isHi = currentLanguage == AppLanguage.HI

        weedList.forEach { weed ->
            val chip = Chip(this).apply {
                text = if (isHi) "\${weed.nameHi} (\${weed.code})" else "\${weed.nameEn} (\${weed.code})"
                isCheckable = true
                isChecked = selectedWeedCodes.contains(weed.code)
                setTextColor(if (isChecked) Color.WHITE else Color.parseColor("#1B5E20"))
                chipBackgroundColor = ContextCompat.getColorStateList(
                    this@MainActivity,
                    if (isChecked) R.color.primary_light else R.color.surface_green
                )
                setOnCheckedChangeListener { _, isCheckedState ->
                    if (isCheckedState) {
                        selectedWeedCodes.add(weed.code)
                    } else {
                        selectedWeedCodes.remove(weed.code)
                    }
                    isChecked = isCheckedState
                    setTextColor(if (isCheckedState) Color.WHITE else Color.parseColor("#1B5E20"))
                    chipBackgroundColor = ContextCompat.getColorStateList(
                        this@MainActivity,
                        if (isCheckedState) R.color.primary_light else R.color.surface_green
                    )
                    updateActiveWeedsDisplay()
                    dispatchMultiWeedTarget()
                }
            }
            chipGroupWeeds.addView(chip)
        }
    }

    private fun syncWeedChipsState() {
        for (i in 0 until chipGroupWeeds.childCount) {
            val chip = chipGroupWeeds.getChildAt(i) as? Chip ?: continue
            val weed = weedList.getOrNull(i) ?: continue
            val shouldCheck = selectedWeedCodes.contains(weed.code)
            if (chip.isChecked != shouldCheck) {
                chip.isChecked = shouldCheck
                chip.setTextColor(if (shouldCheck) Color.WHITE else Color.parseColor("#1B5E20"))
                chip.chipBackgroundColor = ContextCompat.getColorStateList(
                    this,
                    if (shouldCheck) R.color.primary_light else R.color.surface_green
                )
            }
        }
        updateActiveWeedsDisplay()
    }

    private fun showMultiWeedSelectionDialog() {
        val isHi = currentLanguage == AppLanguage.HI
        val weedNames = weedList.map { 
            if (isHi) "\${it.nameHi} (\${it.scientificName}) [\${it.code}]" 
            else "\${it.nameEn} (\${it.scientificName}) [\${it.code}]" 
        }.toTypedArray()

        val checkedArray = weedList.map { selectedWeedCodes.contains(it.code) }.toBooleanArray()

        AlertDialog.Builder(this)
            .setTitle(if (isHi) "🌾 लक्षित खरपतवार बहु-चयन (20 प्रजातियां)" else "🌾 Target Weeds Multi-Select (20 Species)")
            .setMultiChoiceItems(weedNames, checkedArray) { _, which, isChecked ->
                val code = weedList[which].code
                if (isChecked) {
                    selectedWeedCodes.add(code)
                } else {
                    selectedWeedCodes.remove(code)
                }
            }
            .setPositiveButton(if (isHi) "लागू करें (APPLY)" else "APPLY") { dialog, _ ->
                syncWeedChipsState()
                dispatchMultiWeedTarget()
                dialog.dismiss()
            }
            .setNegativeButton(if (isHi) "रद्द करें" else "CANCEL") { dialog, _ ->
                dialog.dismiss()
            }
            .show()
    }

    private fun updateActiveWeedsDisplay() {
        val isHi = currentLanguage == AppLanguage.HI
        val count = selectedWeedCodes.size
        tvSelectedWeedsCount.text = if (isHi) "\$count खरपतवार चयनित (\$count SELECTED)" else "\$count Weeds Selected (\$count TARGETED)"
        tvActiveWeedsCountBadge.text = "\$count ACTIVE"

        if (selectedWeedCodes.isEmpty()) {
            tvActiveWeedsList.text = if (isHi) "कोई खरपतवार चयनित नहीं (कोई स्प्रे नहीं)" else "No weeds selected (Solenoid valve standby)"
            tvActiveWeedsCommandUrl.text = "कमांड: http://192.168.4.1/set_weeds?list=NONE"
        } else {
            val selectedItems = weedList.filter { selectedWeedCodes.contains(it.code) }
            val namesStr = selectedItems.joinToString(", ") { if (isHi) it.nameHi else it.nameEn }
            tvActiveWeedsList.text = namesStr

            val codesParam = selectedWeedCodes.joinToString(",")
            tvActiveWeedsCommandUrl.text = "कमांड: http://192.168.4.1/set_weeds?list=\$codesParam"
        }
    }

    private fun dispatchMultiWeedTarget() {
        val count = selectedWeedCodes.size
        val codesParam = if (selectedWeedCodes.isEmpty()) "NONE" else selectedWeedCodes.joinToString(",")
        val weedUrl = "\$ENDPOINT_SET_WEEDS\$codesParam"

        val weedMsg = if (currentLanguage == AppLanguage.HI) 
            "खरपतवार लक्ष्य (\$count): \${selectedWeedCodes.take(3).joinToString(", ")}\${if (count > 3) "..." else ""}"
            else "Target Weeds (\$count): \${selectedWeedCodes.take(3).joinToString(", ")}\${if (count > 3) "..." else ""}"
        
        updateStatusLog(weedMsg)
        sendHttpRequest(weedUrl, weedMsg)
    }

    /**
     * SMART WEATHER & RAIN LOSS WARNING ENGINE
     */
    private fun setupWeatherAdvisory() {
        switchWeatherLock.setOnCheckedChangeListener { _, isChecked ->
            isWeatherLockActive = isChecked
            val lockUrl = "$ENDPOINT_LOCK_SOLENOID$isChecked"
            val stateText = if (isChecked) {
                if (currentLanguage == AppLanguage.HI) "सक्रिय (LOCKED)" else "ACTIVE"
            } else {
                if (currentLanguage == AppLanguage.HI) "निष्क्रिय (UNLOCKED)" else "DISABLED"
            }
            val msg = if (currentLanguage == AppLanguage.HI) "सोलेनोइड सुरक्षा लॉक: \${stateText}" else "Solenoid Safety Lock: \${stateText}"
            updateStatusLog(msg)
            sendHttpRequest(lockUrl, msg)
        }

        btnToggleWeatherSimulation.setOnClickListener {
            isWeatherSimulationHighRisk = !isWeatherSimulationHighRisk
            updateWeatherAdvisoryUI()
            val msg = if (isWeatherSimulationHighRisk)
                if (currentLanguage == AppLanguage.HI) "सिमुलेशन: उच्च बारिश जोखिम (75%) • आज स्प्रे न करें" else "Simulated: High Rain Risk (75%) • Do Not Spray"
                else if (currentLanguage == AppLanguage.HI) "सिमुलेशन: मौसम अनुकूल (12% बारिश) • सुरक्षित स्प्रे" else "Simulated: Clear Weather (12% Rain) • Safe to Spray"
            updateStatusLog(msg)
        }

        updateWeatherAdvisoryUI()
    }

    private fun updateWeatherAdvisoryUI() {
        val isHi = currentLanguage == AppLanguage.HI
        if (isWeatherSimulationHighRisk) {
            // High rain risk scenario (Rain > 60%)
            tvWeatherTemp.text = "31°C"
            tvWeatherHumidity.text = "78%"
            tvWeatherWind.text = "14 km/h"
            tvWeatherRain.text = "75%"

            tvWeatherBadge.text = if (isHi) "आज स्प्रे न करें\nDO NOT SPRAY" else "DO NOT SPRAY\n(Rain Alert)"
            tvWeatherBadge.setBackgroundColor(Color.parseColor("#FFCDD2"))
            tvWeatherBadge.setTextColor(Color.parseColor("#B71C1C"))

            layoutWeatherAlertBox.setBackgroundColor(Color.parseColor("#FFEBEE"))
            tvWeatherAdvisoryTitle.text = if (isHi) "⚠️ किसान सलाह / FARMER ADVISORY:" else "⚠️ FARMER ADVISORY (RAIN LOSS WARNING):"
            tvWeatherAdvisoryTitle.setTextColor(Color.parseColor("#B71C1C"))

            tvWeatherAdvisoryText.text = if (isHi)
                "सावधान: आज 75% बारिश की संभावना है। स्प्रे करने पर दवा बह जाएगी और मेहनत बर्बाद होगी। कृपया कल तक रुकें!\n\nAlert: 75% chance of rain today. If you spray now, your pesticide will wash away. Please wait until tomorrow!"
            else
                "Alert: 75% chance of rain today. If you spray now, your pesticide will wash away, wasting cost and labor. Please wait until tomorrow!\n\nचेतावनी: आज 75% बारिश की संभावना है। छिड़काव न करें।"

            if (switchWeatherLock.isChecked) {
                // Ensure solenoid locked on ESP32
                sendHttpRequest("$ENDPOINT_LOCK_SOLENOID" + "true", "Rain lock active")
            }
        } else {
            // Clear weather scenario (Rain < 60%)
            tvWeatherTemp.text = "28°C"
            tvWeatherHumidity.text = "52%"
            tvWeatherWind.text = "6 km/h"
            tvWeatherRain.text = "12%"

            tvWeatherBadge.text = if (isHi) "सुरक्षित मौसम\nSAFE TO SPRAY" else "SAFE TO SPRAY\n(Clear Sky)"
            tvWeatherBadge.setBackgroundColor(Color.parseColor("#C8E6C9"))
            tvWeatherBadge.setTextColor(Color.parseColor("#1B5E20"))

            layoutWeatherAlertBox.setBackgroundColor(Color.parseColor("#E8F5E9"))
            tvWeatherAdvisoryTitle.text = if (isHi) "✅ छिड़काव के लिए आदर्श मौसम / PERFECT CONDITIONS:" else "✅ PERFECT CONDITIONS FOR SPRAYING:"
            tvWeatherAdvisoryTitle.setTextColor(Color.parseColor("#1B5E20"))

            tvWeatherAdvisoryText.text = if (isHi)
                "मौसम बिल्कुल साफ है (बारिश केवल 12%, हवा 6 km/h)। दवा का पूरा असर होगा और बहाव (drift) नहीं होगा। आप सुरक्षित छिड़काव कर सकते हैं।\n\nConditions are optimal (12% rain, wind 6 km/h). No drift, maximum chemical absorption."
            else
                "Conditions are optimal for precision spraying (12% rain risk, wind 6 km/h). Safe for application with zero chemical washout risk.\n\nमौसम अनुकूल है, छिड़काव किया जा सकता है।"
        }
    }

    /**
     * SOWING DATE & CROP LIFECYCLE SPRAY SCHEDULE PLANNER
     */
    private fun setupCropSchedulePlanner() {
        btnSelectSowingDate.setOnClickListener {
            showDatePickerDialog()
        }
        updateCropLifecycleSchedule()
    }

    private fun showDatePickerDialog() {
        val year = sowingCalendar.get(Calendar.YEAR)
        val month = sowingCalendar.get(Calendar.MONTH)
        val day = sowingCalendar.get(Calendar.DAY_OF_MONTH)

        val dpd = DatePickerDialog(this, { _, selectedYear, selectedMonth, selectedDay ->
            sowingCalendar.set(selectedYear, selectedMonth, selectedDay)
            updateCropLifecycleSchedule()
        }, year, month, day)

        dpd.show()
    }

    private fun updateCropLifecycleSchedule() {
        val isHi = currentLanguage == AppLanguage.HI
        val sdf = SimpleDateFormat("dd MMM yyyy", Locale.getDefault())
        val sowingDateStr = sdf.format(sowingCalendar.time)

        // Calculate days elapsed since sowing
        val now = Calendar.getInstance()
        val diffMillis = now.timeInMillis - sowingCalendar.timeInMillis
        val daysElapsed = (diffMillis / (1000 * 60 * 60 * 24)).toInt().coerceAtLeast(0)

        // Current crop info
        val currentCrop = cropList[selectedCropIndex]
        val lifecycle = currentCrop.lifecycle

        tvSelectedSowingDate.text = if (isHi) "$sowingDateStr ($daysElapsed दिन पहले)" else "$sowingDateStr ($daysElapsed days ago)"
        tvCurrentCropDisplay.text = if (isHi) "चयनित फसल: \${currentCrop.nameHi} (\${currentCrop.nameEn})" else "Selected Crop: \${currentCrop.nameEn} (\${currentCrop.nameHi})"
        tvCropAgeBadge.text = if (isHi) "फसल उम्र: $daysElapsed दिन / \${lifecycle.totalDaysToHarvest} दिन" else "Crop Age: $daysElapsed d / \${lifecycle.totalDaysToHarvest} d"

        // Milestone 1 (Sowing / Pre-emergence)
        val cal1 = sowingCalendar.clone() as Calendar
        cal1.add(Calendar.DAY_OF_YEAR, lifecycle.preEmergenceDays)
        val isM1Active = daysElapsed <= lifecycle.preEmergenceDays + 3
        val isM1Passed = daysElapsed > lifecycle.preEmergenceDays + 3
        tvMilestone1Title.text = if (isHi) "१. \${lifecycle.preEmergenceNameHi} (दिन \${lifecycle.preEmergenceDays})" else "1. \${lifecycle.preEmergenceNameEn} (Day \${lifecycle.preEmergenceDays})"
        tvMilestone1Date.text = sdf.format(cal1.time)
        tvMilestone1Chem.text = if (isHi) "अनुशंसित: \${lifecycle.preEmergenceChemHi}" else "Recommended: \${lifecycle.preEmergenceChemEn}"
        tvMilestone1Status.text = if (isM1Passed) (if (isHi) "संपन्न (Completed)" else "Completed") else if (isM1Active) (if (isHi) "वर्तमान चरण (ACTIVE NOW)" else "ACTIVE NOW") else (if (isHi) "आगामी (Upcoming)" else "Upcoming")
        tvMilestone1Status.setTextColor(if (isM1Active) Color.parseColor("#E65100") else if (isM1Passed) Color.parseColor("#2E7D32") else Color.parseColor("#757575"))

        // Milestone 2 (Vegetative Spray)
        val cal2 = sowingCalendar.clone() as Calendar
        cal2.add(Calendar.DAY_OF_YEAR, lifecycle.vegetativeSprayDays)
        val isM2Active = daysElapsed in (lifecycle.vegetativeSprayDays - 3)..(lifecycle.vegetativeSprayDays + 5)
        val isM2Passed = daysElapsed > lifecycle.vegetativeSprayDays + 5
        tvMilestone2Title.text = if (isHi) "२. \${lifecycle.vegetativeSprayNameHi} (दिन \${lifecycle.vegetativeSprayDays})" else "2. \${lifecycle.vegetativeSprayNameEn} (Day \${lifecycle.vegetativeSprayDays})"
        tvMilestone2Date.text = sdf.format(cal2.time)
        tvMilestone2Chem.text = if (isHi) "अनुशंसित: \${lifecycle.vegetativeSprayChemHi}" else "Recommended: \${lifecycle.vegetativeSprayChemEn}"
        tvMilestone2Status.text = if (isM2Passed) (if (isHi) "संपन्न (Completed)" else "Completed") else if (isM2Active) (if (isHi) "वर्तमान चरण (ACTIVE NOW)" else "ACTIVE NOW") else (if (isHi) "आगामी (Upcoming)" else "Upcoming")
        tvMilestone2Status.setTextColor(if (isM2Active) Color.parseColor("#E65100") else if (isM2Passed) Color.parseColor("#2E7D32") else Color.parseColor("#757575"))

        // Milestone 3 (Flowering / Protective Spray)
        val cal3 = sowingCalendar.clone() as Calendar
        cal3.add(Calendar.DAY_OF_YEAR, lifecycle.floweringSprayDays)
        val isM3Active = daysElapsed in (lifecycle.floweringSprayDays - 3)..(lifecycle.floweringSprayDays + 5)
        val isM3Passed = daysElapsed > lifecycle.floweringSprayDays + 5
        tvMilestone3Title.text = if (isHi) "३. \${lifecycle.floweringSprayNameHi} (दिन \${lifecycle.floweringSprayDays})" else "3. \${lifecycle.floweringSprayNameEn} (Day \${lifecycle.floweringSprayDays})"
        tvMilestone3Date.text = sdf.format(cal3.time)
        tvMilestone3Chem.text = if (isHi) "अनुशंसित: \${lifecycle.floweringSprayChemHi}" else "Recommended: \${lifecycle.floweringSprayChemEn}"
        tvMilestone3Status.text = if (isM3Passed) (if (isHi) "संपन्न (Completed)" else "Completed") else if (isM3Active) (if (isHi) "वर्तमान चरण (ACTIVE NOW)" else "ACTIVE NOW") else (if (isHi) "आगामी (Upcoming)" else "Upcoming")
        tvMilestone3Status.setTextColor(if (isM3Active) Color.parseColor("#E65100") else if (isM3Passed) Color.parseColor("#2E7D32") else Color.parseColor("#757575"))

        // Milestone 4 (Maturity / Pre-Harvest Stop)
        val cal4 = sowingCalendar.clone() as Calendar
        cal4.add(Calendar.DAY_OF_YEAR, lifecycle.maturityDays)
        val isM4Passed = daysElapsed >= lifecycle.maturityDays
        tvMilestone4Title.text = if (isHi) "४. \${lifecycle.maturityNameHi} (दिन \${lifecycle.maturityDays})" else "4. \${lifecycle.maturityNameEn} (Day \${lifecycle.maturityDays})"
        tvMilestone4Date.text = sdf.format(cal4.time)
        tvMilestone4Chem.text = if (isHi) "निर्देश: \${lifecycle.maturityAdviceHi}" else "Guideline: \${lifecycle.maturityAdviceEn}"
        tvMilestone4Status.text = if (isM4Passed) (if (isHi) "कटाई का समय (Harvest Ready)" else "Harvest Ready") else (if (isHi) "दवा बंद (Spray Stop)" else "Spray Stop Ahead")
        tvMilestone4Status.setTextColor(if (isM4Passed) Color.parseColor("#1B5E20") else Color.parseColor("#B71C1C"))
    }

    /**
     * Area Calculator Logic
     */
    private fun setupAreaCalculator() {
        fun selectArea(area: Double, activeBtn: Button) {
            currentAreaHectares = area
            etCustomArea.setText(String.format("%.1f", area))

            listOf(btnArea05, btnArea10, btnArea20, btnArea50).forEach {
                it.setBackgroundColor(Color.parseColor("#E8F5E9"))
                it.setTextColor(Color.parseColor("#1B5E20"))
            }
            activeBtn.setBackgroundColor(Color.parseColor("#1B5E20"))
            activeBtn.setTextColor(Color.WHITE)

            recalculateChemicalVolume()
        }

        btnArea05.setOnClickListener { selectArea(0.5, btnArea05) }
        btnArea10.setOnClickListener { selectArea(1.0, btnArea10) }
        btnArea20.setOnClickListener { selectArea(2.0, btnArea20) }
        btnArea50.setOnClickListener { selectArea(5.0, btnArea50) }

        etCustomArea.addTextChangedListener(object : TextWatcher {
            override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {}
            override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
                val input = s.toString().toDoubleOrNull()
                if (input != null && input > 0) {
                    currentAreaHectares = input
                    recalculateChemicalVolume()
                }
            }
            override fun afterTextChanged(s: Editable?) {}
        })
    }

    private fun recalculateChemicalVolume() {
        val selectedCrop = cropList[selectedCropIndex]
        val totalVolumeLiters = currentAreaHectares * selectedCrop.dosageLPerHa

        tvEstimatedChemical.text = String.format("%.2f Liters (%s)", totalVolumeLiters, if (currentLanguage == AppLanguage.HI) "लीटर" else "L")
        val cropName = if (currentLanguage == AppLanguage.HI) selectedCrop.nameHi else selectedCrop.nameEn
        tvCalculationBreakdown.text = String.format(
            if (currentLanguage == AppLanguage.HI) "गणना: %.1f Ha × %.1f L/Ha (%s मानक)" else "Formula: %.1f Ha × %.1f L/Ha (%s standard)",
            currentAreaHectares,
            selectedCrop.dosageLPerHa,
            cropName
        )
    }

    /**
     * Battery Telemetry & Low Battery System Alert
     */
    private fun fetchBatteryTelemetry() {
        networkExecutor.execute {
            var connection: HttpURLConnection? = null
            try {
                val url = URL(ENDPOINT_TELEMETRY)
                connection = (url.openConnection() as HttpURLConnection).apply {
                    requestMethod = "GET"
                    connectTimeout = 1800
                    readTimeout = 1800
                }

                if (connection.responseCode == HttpURLConnection.HTTP_OK) {
                    val reader = BufferedReader(InputStreamReader(connection.inputStream))
                    val jsonStr = reader.readText().trim()
                    reader.close()

                    val json = JSONObject(jsonStr)
                    val batteryPercent = json.optInt("batteryPercent", 85)
                    val voltage = json.optDouble("voltage", 12.6)

                    runOnUiThread {
                        setConnectedState(true)
                        updateBatteryUI(batteryPercent, voltage)
                    }
                } else {
                    runOnUiThread { setConnectedState(false) }
                }
            } catch (e: Exception) {
                runOnUiThread { setConnectedState(false) }
            } finally {
                connection?.disconnect()
            }
        }
    }

    private fun updateBatteryUI(percent: Int, voltage: Double) {
        progressBattery.progress = percent
        tvBatteryPercent.text = "$percent%"
        tvBatteryVoltage.text = String.format("%.1fV", voltage)

        if (percent < 15) {
            cardLowBatteryWarning.visibility = View.VISIBLE
            progressBattery.progressDrawable = ContextCompat.getDrawable(this, R.drawable.custom_battery_progress_low)
            tvBatteryPercent.setTextColor(Color.parseColor("#C62828"))

            if (!lowBatteryAlertTriggered) {
                lowBatteryAlertTriggered = true
                sendLowBatteryPushNotification(percent)
            }
        } else {
            cardLowBatteryWarning.visibility = View.GONE
            progressBattery.progressDrawable = ContextCompat.getDrawable(this, R.drawable.custom_battery_progress)
            tvBatteryPercent.setTextColor(Color.parseColor("#1B5E20"))
            lowBatteryAlertTriggered = false
        }
    }

    /**
     * 3 Operational Spray Modes Setup
     */
    private fun setupSprayModeSelector() {
        rgSprayModes.setOnCheckedChangeListener { _, checkedId ->
            val modeNum = when (checkedId) {
                R.id.rbMode1Weed -> 1
                R.id.rbMode2Crop -> 2
                R.id.rbMode3Universal -> 3
                else -> 1
            }

            // Hardware safety check for rain lockout
            if (isWeatherLockActive && isWeatherSimulationHighRisk) {
                val rainAlert = if (currentLanguage == AppLanguage.HI)
                    "⚠️ बारिश सुरक्षा सक्रिय: 75% बारिश के जोखिम के कारण सोलेनोइड स्प्रे लॉक है!"
                    else "⚠️ Rain Safety Lock: Solenoid locked due to 75% rain probability!"
                Toast.makeText(this@MainActivity, rainAlert, Toast.LENGTH_LONG).show()
                updateStatusLog(rainAlert)
            }

            val modeName = when (modeNum) {
                1 -> if (currentLanguage == AppLanguage.HI) "मोड 1: केवल खरपतवार मारक" else "Mode 1: Targeted Weedicide"
                2 -> if (currentLanguage == AppLanguage.HI) "मोड 2: केवल फसल खाद" else "Mode 2: Targeted Crop Fertilizer"
                3 -> if (currentLanguage == AppLanguage.HI) "मोड 3: पूरे खेत में छिड़काव" else "Mode 3: Universal Field Spray"
                else -> ""
            }

            updateStatusLog(modeName)
            sendHttpRequest("$ENDPOINT_SET_MODE$modeNum", "Mode set to $modeNum")
        }
    }

    /**
     * Network Dispatcher
     */
    private fun sendHttpRequest(urlString: String, actionDescription: String) {
        networkExecutor.execute {
            var connection: HttpURLConnection? = null
            try {
                val url = URL(urlString)
                connection = (url.openConnection() as HttpURLConnection).apply {
                    requestMethod = "GET"
                    connectTimeout = NETWORK_TIMEOUT
                    readTimeout = NETWORK_TIMEOUT
                    useCaches = false
                }

                val responseCode = connection.responseCode
                if (responseCode == HttpURLConnection.HTTP_OK) {
                    runOnUiThread {
                        setConnectedState(true)
                        updateStatusLog("OK: $actionDescription")
                    }
                } else {
                    runOnUiThread {
                        updateStatusLog("HTTP $responseCode: $actionDescription")
                    }
                }
            } catch (e: Exception) {
                Log.e(TAG, "Network failure: \${e.localizedMessage}", e)
                runOnUiThread {
                    setConnectedState(false)
                    updateStatusLog("Failed: $actionDescription")
                }
            } finally {
                connection?.disconnect()
            }
        }
    }

    private fun setConnectedState(connected: Boolean) {
        isConnected = connected
        if (connected) {
            tvConnectionStatus.text = if (currentLanguage == AppLanguage.HI) "जुड़ा हुआ (ONLINE)" else "ONLINE"
            tvConnectionStatus.setTextColor(Color.parseColor("#C8E6C9"))
            viewConnectionDot.setBackgroundResource(R.drawable.indicator_dot_connected)
        } else {
            tvConnectionStatus.text = if (currentLanguage == AppLanguage.HI) "डिस्कनेक्ट (OFFLINE)" else "OFFLINE"
            tvConnectionStatus.setTextColor(Color.parseColor("#FFCDD2"))
            viewConnectionDot.setBackgroundResource(R.drawable.indicator_dot_disconnected)
        }
    }

    private fun updateStatusLog(msg: String) {
        val prefix = if (currentLanguage == AppLanguage.HI) "सिस्टम स्थिति: " else "System: "
        tvStatusLog.text = "$prefix$msg"
    }

    /**
     * Push Notification Service
     */
    private fun sendLowBatteryPushNotification(batteryLevel: Int) {
        val notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        val title = if (currentLanguage == AppLanguage.HI) 
            "⚠️ AGRO SAVE: बैटरी कम है (Low Battery)!" 
            else "⚠️ AGRO SAVE: Low Battery Warning!"
        val text = if (currentLanguage == AppLanguage.HI)
            "मशीन की बैटरी $batteryLevel% है। कृपया तत्काल 12V चार्जर से जोड़ें।"
            else "Battery is down to $batteryLevel%. Please recharge immediately."

        val builder = NotificationCompat.Builder(this, NOTIFICATION_CHANNEL_ID)
            .setSmallIcon(android.R.drawable.stat_sys_warning)
            .setContentTitle(title)
            .setContentText(text)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setVibrate(longArrayOf(0, 300, 200, 300))
            .setAutoCancel(true)

        notificationManager.notify(NOTIFICATION_ID_BATTERY, builder.build())
    }

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                NOTIFICATION_CHANNEL_ID,
                "AGRO SAVE Telemetry Alerts",
                NotificationManager.IMPORTANCE_HIGH
            ).apply {
                description = "Hardware battery and critical spraying alerts for AGRO SAVE"
                enableVibration(true)
            }
            val manager = getSystemService(NotificationManager::class.java)
            manager.createNotificationChannel(channel)
        }
    }

    private fun checkNotificationPermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            if (ContextCompat.checkSelfPermission(this, Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                ActivityCompat.requestPermissions(this, arrayOf(Manifest.permission.POST_NOTIFICATIONS), 101)
            }
        }
    }

    /**
     * AI AGRO-DOCTOR & VOICE ASSISTANT (STT & TTS)
     */
    private fun initVoiceAndTts() {
        // Register audio permission launcher for Speech-to-Text
        audioPermissionLauncher = registerForActivityResult(
            ActivityResultContracts.RequestPermission()
        ) { isGranted ->
            if (isGranted) {
                startSpeechToText()
            } else {
                Toast.makeText(
                    this,
                    if (currentLanguage == AppLanguage.HI) 
                        "वॉइस सुविधा के लिए माइक्रोफ़ोन अनुमति आवश्यक है" 
                    else 
                        "Microphone permission is required for voice assistant",
                    Toast.LENGTH_SHORT
                ).show()
            }
        }

        // Register speech-to-text recognizer result launcher
        speechResultLauncher = registerForActivityResult(
            ActivityResultContracts.StartActivityForResult()
        ) { result ->
            if (result.resultCode == Activity.RESULT_OK && result.data != null) {
                val matches = result.data?.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS)
                val spokenText = matches?.firstOrNull()
                if (!spokenText.isNullOrBlank()) {
                    etDoctorQuery.setText(spokenText)
                    processDoctorQuery(spokenText)
                }
            }
        }

        // Initialize Android Text-to-Speech Engine
        textToSpeech = TextToSpeech(this, this)
    }

    override fun onInit(status: Int) {
        if (status == TextToSpeech.SUCCESS) {
            isTtsReady = true
            val locale = if (currentLanguage == AppLanguage.HI) Locale("hi", "IN") else Locale.ENGLISH
            val result = textToSpeech?.setLanguage(locale)
            if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                textToSpeech?.language = Locale.ENGLISH
            }
        } else {
            isTtsReady = false
            Log.e(TAG, "TextToSpeech initialization failed: $status")
        }
    }

    private fun setupAiDoctor() {
        // Voice mic button click
        btnVoiceMic.setOnClickListener {
            if (ContextCompat.checkSelfPermission(this, Manifest.permission.RECORD_AUDIO) == PackageManager.PERMISSION_GRANTED) {
                startSpeechToText()
            } else {
                audioPermissionLauncher.launch(Manifest.permission.RECORD_AUDIO)
            }
        }

        // Ask doctor submit button
        btnAskDoctor.setOnClickListener {
            val query = etDoctorQuery.text.toString().trim()
            if (query.isNotEmpty()) {
                processDoctorQuery(query)
            } else {
                Toast.makeText(
                    this,
                    if (currentLanguage == AppLanguage.HI) "कृपया अपनी समस्या या रोग का नाम लिखें या बोलें" else "Please enter or speak your crop issue",
                    Toast.LENGTH_SHORT
                ).show()
            }
        }

        // Keyboard search action listener
        etDoctorQuery.setOnEditorActionListener { _, actionId, _ ->
            if (actionId == EditorInfo.IME_ACTION_SEARCH || actionId == EditorInfo.IME_ACTION_DONE) {
                val query = etDoctorQuery.text.toString().trim()
                if (query.isNotEmpty()) {
                    processDoctorQuery(query)
                }
                true
            } else {
                false
            }
        }

        // Quick query chip listeners
        chipQuery1.setOnClickListener {
            val q = if (currentLanguage == AppLanguage.HI) "गुल्ली डंडा" else "Phalaris weed"
            etDoctorQuery.setText(q)
            processDoctorQuery(q)
        }
        chipQuery2.setOnClickListener {
            val q = if (currentLanguage == AppLanguage.HI) "पीला रतुआ गेहूं" else "Wheat Yellow Rust"
            etDoctorQuery.setText(q)
            processDoctorQuery(q)
        }
        chipQuery3.setOnClickListener {
            val q = if (currentLanguage == AppLanguage.HI) "गुलाबी सुंडी कपास" else "Pink bollworm cotton"
            etDoctorQuery.setText(q)
            processDoctorQuery(q)
        }
        chipQuery4.setOnClickListener {
            val q = if (currentLanguage == AppLanguage.HI) "नैनो यूरिया छिड़काव" else "Nano urea spray dose"
            etDoctorQuery.setText(q)
            processDoctorQuery(q)
        }

        // Replay audio button
        btnReplayTts.setOnClickListener {
            lastDoctorRemedy?.let { remedy ->
                val answer = if (currentLanguage == AppLanguage.HI) remedy.answerHi else remedy.answerEn
                speakDoctorAnswer(answer)
            }
        }
    }

    private fun startSpeechToText() {
        try {
            val intent = Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).apply {
                putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM)
                putExtra(RecognizerIntent.EXTRA_LANGUAGE, if (currentLanguage == AppLanguage.HI) "hi-IN" else "en-IN")
                putExtra(RecognizerIntent.EXTRA_LANGUAGE_PREFERENCE, if (currentLanguage == AppLanguage.HI) "hi-IN" else "en-IN")
                putExtra(
                    RecognizerIntent.EXTRA_PROMPT,
                    if (currentLanguage == AppLanguage.HI) 
                        "फसल की बीमारी, कीट या खरपतवार का नाम बोलें..." 
                    else 
                        "Speak crop disease, pest, or weed name..."
                )
            }
            speechResultLauncher.launch(intent)
        } catch (e: Exception) {
            Toast.makeText(
                this,
                if (currentLanguage == AppLanguage.HI) "वॉइस पहचान उपलब्ध नहीं है" else "Speech recognition not available",
                Toast.LENGTH_SHORT
            ).show()
        }
    }

    private fun processDoctorQuery(query: String) {
        val cleanQuery = query.lowercase(Locale.ROOT).trim()

        // Match query with remedy database keywords
        val matchedRemedy = aiRemedies.find { remedy ->
            remedy.keywords.any { keyword -> cleanQuery.contains(keyword.lowercase(Locale.ROOT)) } ||
            remedy.questionEn.lowercase(Locale.ROOT).contains(cleanQuery) ||
            remedy.questionHi.lowercase(Locale.ROOT).contains(cleanQuery)
        }

        if (matchedRemedy != null) {
            lastDoctorRemedy = matchedRemedy
            displayDoctorRemedy(matchedRemedy, playVoice = true)
        } else {
            // Contextual fallback advice
            val isHi = currentLanguage == AppLanguage.HI
            val fallbackTitle = if (isHi) "एआई एग्रो-सलाहकार सुझाव" else "AI Agro Advisory Guidance"
            val fallbackAnswer = if (isHi) {
                "आपकी क्वेरी '\${query}' के लिए: सटीक निदान हेतु कृषि विज्ञान केंद्र (KVK) या टोल-फ्री किसान कॉल सेंटर 1800-180-1551 पर संपर्क करें। खरपतवार नियंत्रण के लिए AGRO SAVE मोड 1 (लक्षित खरपतवार मारक) अथवा पर्णीय पोषण के लिए मोड 2 का चयन करें।"
            } else {
                "For query '\${query}': For localized diagnosis, consult your nearest KVK or Kisan Call Center at 1800-180-1551. Select AGRO SAVE Mode 1 for precision weedicide targeting or Mode 2 for foliar crop nutrition."
            }
            val fallbackDosage = if (isHi) "दवा: कीटनाशक लेबल के अनुसार | पानी: 150-200 लीटर/एकड़" else "Chemical: As per CIBRC approved label | Water: 150-200 L/acre"

            cardDoctorAnswer.visibility = View.VISIBLE
            tvDoctorAnswerTitle.text = fallbackTitle
            tvDoctorAnswer.text = fallbackAnswer
            tvDoctorDosageBadge.text = fallbackDosage

            speakDoctorAnswer(fallbackAnswer)
        }
    }

    private fun displayDoctorRemedy(remedy: AiRemedy, playVoice: Boolean) {
        val isHi = currentLanguage == AppLanguage.HI
        cardDoctorAnswer.visibility = View.VISIBLE
        tvDoctorAnswerTitle.text = if (isHi) remedy.questionHi else remedy.questionEn
        val fullAnswer = buildString {
            append(if (isHi) remedy.answerHi else remedy.answerEn)
            append("\\n\\n💡 ")
            append(if (isHi) remedy.modeTipHi else remedy.modeTipEn)
        }
        tvDoctorAnswer.text = fullAnswer
        tvDoctorDosageBadge.text = if (isHi) {
            "अनुशंसित दवा: \${remedy.recommendedChemical} | खुराक: \${remedy.recommendedDosage}"
        } else {
            "Recommended: \${remedy.recommendedChemical} | Dose: \${remedy.recommendedDosage}"
        }

        if (playVoice) {
            speakDoctorAnswer(if (isHi) remedy.answerHi else remedy.answerEn)
        }
    }

    private fun speakDoctorAnswer(textToSpeak: String) {
        if (isTtsReady && textToSpeech != null) {
            val locale = if (currentLanguage == AppLanguage.HI) Locale("hi", "IN") else Locale.ENGLISH
            textToSpeech?.language = locale
            textToSpeech?.speak(textToSpeak, TextToSpeech.QUEUE_FLUSH, null, "DOCTOR_REMEDY_AUDIO")
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        textToSpeech?.stop()
        textToSpeech?.shutdown()
        networkExecutor.shutdown()
    }
}`
  },
  {
    id: 'colors_xml',
    name: 'colors.xml',
    path: 'app/src/main/res/values/colors.xml',
    language: 'xml',
    description: 'Agri-Tech color palette designed for high sunlight readability.',
    code: `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- High-Contrast Agricultural Color Palette for Outdoor Sunlight Visibility -->
    <color name="primary">#1B5E20</color>
    <color name="primary_dark">#0D330E</color>
    <color name="primary_light">#2E7D32</color>
    <color name="accent_green">#4CAF50</color>
    <color name="surface_green">#E8F5E9</color>
    <color name="warning_red">#C62828</color>
    <color name="warning_background">#FFEBEE</color>
    <color name="text_primary">#212121</color>
    <color name="text_secondary">#616161</color>
    <color name="background_light">#F1F5F1</color>
</resources>`
  },
  {
    id: 'firmware',
    name: 'ESP32_CAM_AgroSave_V2.ino',
    path: 'firmware/ESP32_CAM_AgroSave_V2.ino',
    language: 'cpp',
    description: 'ESP32-CAM Arduino C++ firmware supporting /telemetry, /set_mode, /set_weed, and /set_model HTTP endpoints.',
    code: `#include "esp_camera.h"
#include <WiFi.h>
#include "esp_http_server.h"

#define CAMERA_MODEL_AI_THINKER
#define PWDN_GPIO_NUM     32
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM      0
#define SIOD_GPIO_NUM     26
#define SIOC_GPIO_NUM     27
#define Y9_GPIO_NUM       35
#define Y8_GPIO_NUM       34
#define Y7_GPIO_NUM       39
#define Y6_GPIO_NUM       36
#define Y5_GPIO_NUM       21
#define Y4_GPIO_NUM       19
#define Y3_GPIO_NUM       18
#define Y2_GPIO_NUM        5
#define VSYNC_GPIO_NUM    25
#define HREF_GPIO_NUM     23
#define PCLK_GPIO_NUM     22

// Hardware Actuators & Sensors
#define PIN_SOLENOID      12   // 5V Relay triggering 12V Solenoid Valve
#define PIN_BATTERY_ADC   33   // Voltage divider (R1=100k, R2=27k)
#define PIN_IR_SENSOR     13   // Crop proximity / furrow sensor

httpd_handle_t stream_httpd = NULL;
httpd_handle_t cmd_httpd = NULL;

int operationalMode = 1;       // 1: Weedicide, 2: Fertilizer, 3: Universal
String activeCrop = "WHEAT";
String activeWeed = "PHALARIS";
bool isSolenoidOpen = false;

// Battery Reading Function
float readBatteryVoltage() {
  int rawAdc = analogRead(PIN_BATTERY_ADC);
  // ADC 3.3V / 4095 with 100k/27k divider: multiplier approx 4.70
  float pinVoltage = (rawAdc / 4095.0f) * 3.3f;
  float batteryVolts = pinVoltage * ((100.0f + 27.0f) / 27.0f);
  return batteryVolts;
}

int calculateBatteryPercent(float voltage) {
  if (voltage >= 12.6f) return 100;
  if (voltage <= 11.1f) return 5;
  return (int)(((voltage - 11.1f) / (12.6f - 11.1f)) * 95.0f) + 5;
}

// Telemetry Endpoint: GET /telemetry
static esp_err_t telemetry_handler(httpd_req_t *req) {
  float v = readBatteryVoltage();
  int pct = calculateBatteryPercent(v);
  
  char json[150];
  snprintf(json, sizeof(json), 
    "{\\"batteryPercent\\":%d,\\"voltage\\":%.2f,\\"mode\\":%d,\\"crop\\":\\"%s\\",\\"weed\\":\\"%s\\"}",
    pct, v, operationalMode, activeCrop.c_str(), activeWeed.c_str());
  
  httpd_resp_set_type(req, "application/json");
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
  return httpd_resp_send(req, json, HTTPD_RESP_USE_STRLEN);
}

// Status & Battery Polling Endpoint: GET /status -> {"battery_level": 63, "mode": "CROP", "relay": false, "ir_triggered": false}
static esp_err_t status_handler(httpd_req_t *req) {
  float v = readBatteryVoltage();
  int pct = calculateBatteryPercent(v);
  const char* modeStr = (operationalMode == 2) ? "CROP" : "WEED";
  bool isIrActive = (digitalRead(PIN_IR_SENSOR) == LOW); // Active detection
  
  char json[128];
  snprintf(json, sizeof(json), 
    "{\\"battery_level\\":%d,\\"mode\\":\\"%s\\",\\"relay\\":%s,\\"ir_triggered\\":%s}", 
    pct, modeStr, isSolenoidOpen ? "true" : "false", isIrActive ? "true" : "false");
  
  httpd_resp_set_type(req, "application/json");
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
  httpd_resp_set_hdr(req, "Access-Control-Allow-Methods", "GET, OPTIONS");
  httpd_resp_set_hdr(req, "Access-Control-Allow-Headers", "Content-Type");
  return httpd_resp_send(req, json, HTTPD_RESP_USE_STRLEN);
}

// Operating Mode Switch: GET /setMode?mode=CROP OR /setMode?mode=WEED
static esp_err_t set_mode_named_handler(httpd_req_t *req) {
  char buf[32];
  if (httpd_req_get_url_query_str(req, buf, sizeof(buf)) == ESP_OK) {
    char param[16];
    if (httpd_query_key_value(buf, "mode", param, sizeof(param)) == ESP_OK) {
      if (strcasecmp(param, "crop") == 0) {
        operationalMode = 2; // Crop fertilizer mode (CROP)
      } else if (strcasecmp(param, "weed") == 0) {
        operationalMode = 1; // Weed herbicide mode (WEED)
      }
    }
  }
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
  httpd_resp_set_hdr(req, "Access-Control-Allow-Methods", "GET, OPTIONS");
  return httpd_resp_send(req, "OK", HTTPD_RESP_USE_STRLEN);
}

// Set Operational Mode Endpoint: GET /set_mode?mode=1|2|3
static esp_err_t set_mode_handler(httpd_req_t *req) {
  char buf[32];
  if (httpd_req_get_url_query_str(req, buf, sizeof(buf)) == ESP_OK) {
    char param[8];
    if (httpd_query_key_value(buf, "mode", param, sizeof(param)) == ESP_OK) {
      operationalMode = atoi(param);
      if (operationalMode == 3) {
        digitalWrite(PIN_SOLENOID, HIGH);
        isSolenoidOpen = true;
      }
    }
  }
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
  return httpd_resp_send(req, "OK", HTTPD_RESP_USE_STRLEN);
}

// Set Target Weed Endpoint (Legacy): GET /set_weed?type=PHALARIS
static esp_err_t set_weed_handler(httpd_req_t *req) {
  char buf[64];
  if (httpd_req_get_url_query_str(req, buf, sizeof(buf)) == ESP_OK) {
    char param[32];
    if (httpd_query_key_value(buf, "type", param, sizeof(param)) == ESP_OK) {
      activeWeed = String(param);
    }
  }
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
  return httpd_resp_send(req, "WEED_UPDATED", HTTPD_RESP_USE_STRLEN);
}

// Upgraded Multi-Select Weeds Endpoint: GET /set_weeds?list=PHALARIS,BATHUA,MOTHA...
String activeWeedsList = "PHALARIS,CHENOPODIUM,CYPERUS,PARTHENIUM,AMARANTHUS,BAN_SARSON";
static esp_err_t set_weeds_handler(httpd_req_t *req) {
  char buf[256];
  if (httpd_req_get_url_query_str(req, buf, sizeof(buf)) == ESP_OK) {
    char param[256];
    if (httpd_query_key_value(buf, "list", param, sizeof(param)) == ESP_OK) {
      activeWeedsList = String(param);
      Serial.print("Active Weeds Multi-List Updated: ");
      Serial.println(activeWeedsList);
    }
  }
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
  return httpd_resp_send(req, "WEEDS_LIST_UPDATED", HTTPD_RESP_USE_STRLEN);
}

// Set AI Model Endpoint: GET /set_model?crop=X&weed=Y or /set_model?crop=X&weeds=Y,Z...
static esp_err_t set_model_handler(httpd_req_t *req) {
  char buf[256];
  if (httpd_req_get_url_query_str(req, buf, sizeof(buf)) == ESP_OK) {
    char cropParam[32], weedParam[32], weedsParam[256];
    if (httpd_query_key_value(buf, "crop", cropParam, sizeof(cropParam)) == ESP_OK) {
      activeCrop = String(cropParam);
    }
    if (httpd_query_key_value(buf, "weeds", weedsParam, sizeof(weedsParam)) == ESP_OK) {
      activeWeedsList = String(weedsParam);
    } else if (httpd_query_key_value(buf, "weed", weedParam, sizeof(weedParam)) == ESP_OK) {
      activeWeed = String(weedParam);
    }
  }
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
  return httpd_resp_send(req, "MODEL_CALIBRATED", HTTPD_RESP_USE_STRLEN);
}

// Manual Spray Endpoint: GET /spray?state=on|off
static esp_err_t spray_handler(httpd_req_t *req) {
  char buf[32];
  if (httpd_req_get_url_query_str(req, buf, sizeof(buf)) == ESP_OK) {
    char param[8];
    if (httpd_query_key_value(buf, "state", param, sizeof(param)) == ESP_OK) {
      if (strcmp(param, "on") == 0) {
        digitalWrite(PIN_SOLENOID, HIGH);
        isSolenoidOpen = true;
      } else {
        digitalWrite(PIN_SOLENOID, LOW);
        isSolenoidOpen = false;
      }
    }
  }
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
  return httpd_resp_send(req, "OK", HTTPD_RESP_USE_STRLEN);
}

void setup() {
  Serial.begin(115200);
  pinMode(PIN_SOLENOID, OUTPUT);
  digitalWrite(PIN_SOLENOID, LOW);
  pinMode(PIN_IR_SENSOR, INPUT);

  // Configure ESP32 Access Point: AGRO_SAVE_KIT / 12345678
  WiFi.softAP("AGRO_SAVE_KIT", "12345678");
  Serial.println("Access Point IP: 192.168.4.1");

  // HTTP Server Registration...
}

void loop() {
  // Mode 1: Targeted Weedicide Mode
  // If weed detected in camera/IR, actuate PIN_SOLENOID
  delay(20);
}`
  }
];
