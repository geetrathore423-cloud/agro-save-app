import { AiDoctorRemedy } from '../types';

export const COMPREHENSIVE_AGRO_REMEDIES: AiDoctorRemedy[] = [
  {
    id: 'phalaris_minor',
    keywords: ['gulli', 'danda', 'phalaris', 'mama', 'गुल्ली', 'डंडा', 'गेहूं का मामा', 'mandusi', 'मंडूसी'],
    questionHi: 'गेहूं में गुल्ली डंडा (Phalaris minor / मंडूसी) का नियंत्रण कैसे करें?',
    questionEn: 'How to control Gulli Danda (Phalaris minor) weed in wheat?',
    answerHi: 'गेहूं में गुल्ली डंडा (Phalaris minor) के नियंत्रण हेतु पहली सिंचाई के बाद (बुवाई के 30-35 दिन बाद, ओट आने पर) क्लॉडिनाफॉप-प्रोपारगिल 15% WP @ 160 ग्राम/एकड़ या सल्फोसल्फ्यूरॉन 75% WG @ 13.3 ग्राम/एकड़ का 150 लीटर पानी में मिलाकर फ्लैट फैन नोज़ल से स्प्रे करें। यदि प्रतिरोध (resistance) दिखे तो पाइनोक्साडेन 5.1% EC (Axial) @ 400 मिली/एकड़ का प्रयोग करें।',
    answerEn: 'To control Phalaris minor (Gulli Danda) in wheat, spray Clodinafop-propargyl 15% WP @ 160g/acre or Sulfosulfuron 75% WG @ 13.3g/acre mixed in 150L water 30-35 days after sowing (post 1st irrigation). If herbicide resistance is observed, switch to Pinoxaden 5.1% EC @ 400ml/acre.',
    recommendedChemical: 'Clodinafop 15% WP / Pinoxaden 5.1% EC',
    recommendedDosage: '160g / acre in 150L water',
    modeTipHi: 'AGRO SAVE मोड 1 चुनें ताकि सोलेनोइड केवल खरपतवार के गुच्छों पर ही रसायन स्प्रे करे और 65% रसायन बचाए।',
    modeTipEn: 'Select AGRO SAVE Mode 1 so the solenoid valve actuates strictly on weed clusters, saving 65% chemical.',
    suggestedMode: 'WEED',
    nozzleType: 'फ्लैट फैन नोज़ल (Flat Fan 110°)',
    sprayTiming: 'बुवाई के 30-35 दिन बाद (2-4 पत्ती अवस्था)',
    waterVolume: '150 लीटर प्रति एकड़'
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
    modeTipHi: 'AGRO SAVE मोड 2 (लक्षित फसल खाद/दवा मोड) चुनें ताकि फफूंदनाशी सीधे गेहूं के पत्तों पर गिरे, खाली जमीन पर व्यर्थ न हो।',
    modeTipEn: 'Select AGRO SAVE Mode 2 (Targeted Crop Foliar) to deposit fungicide directly onto crop canopy, saving 60% liquid.',
    suggestedMode: 'CROP',
    nozzleType: 'हॉलो कोन नोज़ल (Hollow Cone Nozzle)',
    sprayTiming: 'लक्षण दिखते ही सुबह के समय',
    waterVolume: '200 लीटर प्रति एकड़'
  },
  {
    id: 'pink_bollworm',
    keywords: ['pink', 'bollworm', 'sundi', 'cotton', 'गुलाबी', 'सुंडी', 'कपास', 'kapas'],
    questionHi: 'कपास में गुलाबी सुंडी (Pink Bollworm) की रोकथाम कैसे करें?',
    questionEn: 'How to manage Pink Bollworm in cotton crop?',
    answerHi: 'कपास में गुलाबी सुंडी (Pectinophora gossypiella) नियंत्रण हेतु प्रति एकड़ 5-8 फेरोमोन ट्रैप लगाएं। ईटीएल (ETL) पार होने पर इमामेक्टिन बेंजोएट 5% SG @ 100 ग्राम/एकड़ या क्लोरेंट्रानिलिप्रोल 18.5% SC (कोराजन) @ 60 मिली/एकड़ का 200 लीटर पानी में शाम 4 बजे के बाद छिड़काव करें। कली व गूलर बनने की अवस्था पर विशेष निगरानी रखें।',
    answerEn: 'For Pink Bollworm in cotton, install 5-8 pheromone traps per acre for ETL monitoring. Spray Emamectin Benzoate 5% SG @ 100g/acre or Chlorantraniliprole 18.5% SC @ 60ml/acre in 200L water during evening hours at peak flowering and boll formation.',
    recommendedChemical: 'Emamectin Benzoate 5% SG / Coragen 18.5% SC',
    recommendedDosage: '100g or 60ml / acre in 200L water',
    modeTipHi: 'AGRO SAVE मोड 2 का प्रयोग करें ताकि कीटनाशक सीधे कपास के गूलर और पत्तियों पर लक्षित हो।',
    modeTipEn: 'Use AGRO SAVE Mode 2 to direct insecticide directly to cotton bolls and squares.',
    suggestedMode: 'CROP',
    nozzleType: 'हॉलो कोन नोज़ल (Hollow Cone Nozzle)',
    sprayTiming: 'शाम 4 से 6 बजे के बीच',
    waterVolume: '200 लीटर प्रति एकड़'
  },
  {
    id: 'nano_urea_spray',
    keywords: ['nano', 'urea', 'nitrogen', 'dap', 'यूरिया', 'नैनो', 'नेनो', 'नेनो यूरिया', 'नैनो यूरिया', 'खाद', 'fertilizer', 'खुराक', 'iffco'],
    questionHi: 'नैनो यूरिया (Nano Urea) का छिड़काव कब और कितनी मात्रा में करें?',
    questionEn: 'How and when to spray Liquid Nano Urea for crops?',
    answerHi: 'इफको नैनो यूरिया (तरल) 2 से 4 मिलीलीटर प्रति लीटर पानी (250-500 मिली प्रति एकड़) की दर से पहला छिड़काव कल्ले फूटने/शाखाएं निकलने की अवस्था (बुवाई के 30-35 दिन बाद) और दूसरा छिड़काव फूल आने से 7-10 दिन पहले करें। यह पारंपरिक यूरिया के 45 किग्रा बैग जितना प्रभावी है और पत्तियों द्वारा 80% से अधिक अवशोषित होता है।',
    answerEn: 'Mix IFFCO Liquid Nano Urea @ 2-4 ml per liter of water (250-500 ml per acre). 1st spray during active tillering/vegetative phase (30-35 DAS) and 2nd spray 7-10 days before flowering. Provides 80%+ nitrogen use efficiency, replacing one 45kg bag of granular urea.',
    recommendedChemical: 'IFFCO Liquid Nano Urea (4% N)',
    recommendedDosage: '2-4 ml / Liter of water (250-500 ml / acre)',
    modeTipHi: 'AGRO SAVE मोड 2 चुनें ताकि नैनो ड्रॉपलेट सीधे पत्तों के रंध्रों (Stomata) पर पड़ें और जमीन पर न बहें।',
    modeTipEn: 'Select AGRO SAVE Mode 2 so nano nitrogen droplets absorb directly into leaf stomata.',
    suggestedMode: 'CROP',
    nozzleType: 'फाइन फ्लैट फैन नोज़ल (Fine Flat Fan)',
    sprayTiming: 'कल्ले फूटते समय और फूल आने से पूर्व (सुबह 9-11 बजे)',
    waterVolume: '125-150 लीटर प्रति एकड़'
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
    modeTipHi: 'AGRO SAVE मोड 2 में पत्तियों के निचले हिस्से पर नोज़ल का कोण 45 डिग्री रखें।',
    modeTipEn: 'In AGRO SAVE Mode 2, adjust nozzle angle 45° for deep under-canopy penetration.',
    suggestedMode: 'CROP',
    nozzleType: 'हॉलो कोन नोज़ल (Under-Canopy Hollow Cone)',
    sprayTiming: 'सुबह के समय जब मक्खी सुस्त रहती है',
    waterVolume: '150-200 लीटर प्रति एकड़'
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
    modeTipHi: 'AGRO SAVE मोड 1 (लक्षित खरपतवार मारक) चुनें ताकि खरपतवार पर सटीक वार हो।',
    modeTipEn: 'Select AGRO SAVE Mode 1 (Targeted Weedicide) for selective spot spray.',
    suggestedMode: 'WEED',
    nozzleType: 'फ्लैट फैन नोज़ल (FloodJet / Flat Fan)',
    sprayTiming: 'मोथा की 3-5 पत्ती अवस्था',
    waterVolume: '150 लीटर प्रति एकड़'
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
    modeTipHi: 'AGRO SAVE मोड 1 में चलाएं ताकि खाली जमीन या गेहूं की फसल पर अनावश्यक रसायन न गिरे।',
    modeTipEn: 'Run in AGRO SAVE Mode 1 to avoid spraying on bare ground or non-target foliage.',
    suggestedMode: 'WEED',
    nozzleType: 'फ्लैट फैन नोज़ल (Flat Fan 110°)',
    sprayTiming: 'बुवाई के 30-35 दिन बाद नम जमीन में',
    waterVolume: '150 लीटर प्रति एकड़'
  },
  {
    id: 'mustard_aphids',
    keywords: ['mahu', 'aphid', 'sarson', 'mustard', 'माहू', 'मोयला', 'सरसों', 'चेपा'],
    questionHi: 'सरसों में माहू/मोयला (Aphids) कीट का क्या इलाज है?',
    questionEn: 'What is the remedy for Aphids (Mahu) in Mustard?',
    answerHi: 'सरसों में माहू (Lipaphis erysimi) नियंत्रण हेतु डायमेथोएट 30% EC (रोगोर) @ 250 मिली/एकड़ या थायमेथोक्सम 25% WG @ 80 ग्राम/एकड़ 150-200 लीटर पानी में स्प्रे करें। ध्यान दें: फूल आने के समय मधुमक्खियों की सुरक्षा के लिए शाम 4 बजे के बाद ही छिड़काव करें ताकि परागण प्रभावित न हो।',
    answerEn: 'Control mustard aphids (Lipaphis erysimi) using Dimethoate 30% EC @ 250ml/acre or Thiamethoxam 25% WG @ 80g/acre in 150-200L water. Strictly spray after 4:00 PM to safeguard foraging honeybees essential for mustard cross-pollination.',
    recommendedChemical: 'Dimethoate 30% EC / Thiamethoxam 25% WG',
    recommendedDosage: '250 ml / acre or 80 g / acre in 150-200L water',
    modeTipHi: 'AGRO SAVE मोड 2 से पौधों की ऊपरी टहनियों और फूल शाखाओं पर सटीक स्प्रे करें।',
    modeTipEn: 'Spray terminal shoots and inflorescence using AGRO SAVE Mode 2.',
    suggestedMode: 'CROP',
    nozzleType: 'हॉलो कोन नोज़ल (Fine Hollow Cone)',
    sprayTiming: 'शाम 4 बजे के बाद (मधुमक्खी सुरक्षा)',
    waterVolume: '150-200 लीटर प्रति एकड़'
  },
  {
    id: 'parthenium_weed',
    keywords: ['parthenium', 'gajar', 'ghas', 'गाजर घास', 'कांग्रेस घास', 'चटक चांदनी'],
    questionHi: 'गाजर घास (Parthenium) का उन्मूलन कैसे करें?',
    questionEn: 'How to control Parthenium (Gajar Ghas) weed?',
    answerHi: 'गाजर घास में फूल आने से पूर्व नॉन-क्रॉप क्षेत्रों में ग्लाइफोसेट 41% SL @ 1.0-1.2 लीटर/एकड़ का छिड़काव करें। खड़ी फसल में मेट्रिब्यूजिन 70% WP @ 200 ग्राम प्रति एकड़ 150 लीटर पानी में घोलकर स्प्रे करें। यह एलर्जी और मिट्टी की उर्वरता हानि से बचाता है।',
    answerEn: 'Before flowering, in non-crop areas apply Glyphosate 41% SL @ 1-1.2L/acre. In standing crops, apply Metribuzin 70% WP @ 200g/acre in 150L water.',
    recommendedChemical: 'Glyphosate 41% SL / Metribuzin 70% WP',
    recommendedDosage: '1.0 Liter or 200g / acre in 150L water',
    modeTipHi: 'AGRO SAVE मोड 1 (लक्षित खरपतवार मारक) चुनें।',
    modeTipEn: 'Select AGRO SAVE Mode 1 for targeted spot spraying on Parthenium.',
    suggestedMode: 'WEED',
    nozzleType: 'फ्लैट फैन नोज़ल (Flat Fan Nozzle)',
    sprayTiming: 'फूल आने से पहले सक्रिय वानस्पतिक अवस्था',
    waterVolume: '150-200 लीटर प्रति एकड़'
  },
  {
    id: 'fall_armyworm',
    keywords: ['armyworm', 'fall', 'corn', 'maize', 'आर्मीवर्म', 'मक्का', 'इल्ली', 'कीट'],
    questionHi: 'मक्का में फॉल आर्मीवर्म (Fall Armyworm) की क्या दवा है?',
    questionEn: 'What is the control measure for Fall Armyworm in Maize?',
    answerHi: 'मक्का के पोंगे (whorl) में फॉल आर्मीवर्म दिखने पर क्लोरेंट्रानिलिप्रोल 18.5% SC (कोराजन) @ 80 मिली/एकड़ या स्पिनोटोरम 11.7% SC @ 100 मिली/एकड़ का 200 लीटर पानी में स्प्रे करें। नोज़ल को सीधे पौधे के पोंगे में केंद्रित करें।',
    answerEn: 'For Fall Armyworm in maize whorls, spray Chlorantraniliprole 18.5% SC (Coragen) @ 80ml/acre or Spinetoram 11.7% SC @ 100ml/acre in 200L water directly into plant whorls.',
    recommendedChemical: 'Chlorantraniliprole 18.5% SC / Spinetoram 11.7% SC',
    recommendedDosage: '80 ml or 100 ml / acre in 200L water',
    modeTipHi: 'AGRO SAVE मोड 2 चुनें और सोलेनोइड से सीधे पोंगे पर दवा डालें।',
    modeTipEn: 'Choose AGRO SAVE Mode 2 and direct solenoid mist directly into the maize whorl.',
    suggestedMode: 'CROP',
    nozzleType: 'हॉलो कोन नोज़ल (Whorl-Directed Hollow Cone)',
    sprayTiming: 'शाम के समय फसल की 15-30 दिन अवस्था',
    waterVolume: '200 लीटर प्रति एकड़'
  }
];

export function diagnoseAgroQuery(query: string, lang: 'HI' | 'EN'): AiDoctorRemedy {
  const raw = query.trim();
  const q = raw.toLowerCase();

  // 1. Exact or Keyword Match in Rich Knowledge Base
  const matched = COMPREHENSIVE_AGRO_REMEDIES.find(remedy =>
    remedy.keywords.some(k => q.includes(k.toLowerCase())) ||
    remedy.questionEn.toLowerCase().includes(q) ||
    remedy.questionHi.toLowerCase().includes(q)
  );

  if (matched) {
    return matched;
  }

  // 2. Intelligent Dynamic Agronomic Synthesis
  const isWeed = /खरपतवार|weed|घास|घासफूस|दूब|बथुआ|मोथा|कांस|चौलाई|सांवा|हिरणखुरी|सत्यानाशी/i.test(q);
  const isFertilizer = /खाद|यूरिया|urea|dap|fertilizer|पोटाश|जिंक|zinc|बोरॉन|boron|npk|पोषण|पोषक/i.test(q);
  const isInsect = /कीट|कीड़ा|सुंडी|इल्ली|मक्खी|aphid|pest|bollworm|borer|thrips|jassid|मच्छर|चेपा|माहू/i.test(q);
  const isFungal = /रोग|झुलसा|रतुआ|ब्लास्ट|धब्बा|फफूंद|fungus|blight|rust|rot|mildew|सड़न|उकठा|विल्ट/i.test(q);

  if (isWeed) {
    return {
      id: `dynamic_weed_${Date.now()}`,
      keywords: [raw],
      questionHi: `खरपतवार निदान: ${raw}`,
      questionEn: `Weed Identification & Control: ${raw}`,
      answerHi: `${raw} के नियंत्रण हेतु उपयुक्त चयनात्मक खरपतवारनाशी (Selective Herbicide) का उपयोग करें। चौड़ी पत्ती के लिए 2,4-D अमाइन 58% SL @ 400 मिली या मेटसल्फ्यूरॉन 20% WP @ 8 ग्राम/एकड़ और संकरी पत्ती के लिए क्लॉडिनाफॉप 15% WP @ 160 ग्राम/एकड़ 150 लीटर पानी में फ्लैट फैन नोज़ल से स्प्रे करें।`,
      answerEn: `For ${raw}, apply recommended selective herbicide. For broadleaf weeds use 2,4-D Amine 58% SL @ 400ml or Metsulfuron 20% WP @ 8g/acre. For grassy weeds use Clodinafop 15% WP @ 160g/acre in 150L water with Flat Fan nozzle.`,
      recommendedChemical: 'CIBRC Registered Selective Herbicide',
      recommendedDosage: '150-200 L Water / Acre (Flat Fan Nozzle)',
      modeTipHi: 'AGRO SAVE मोड 1 चुनें ताकि सोलेनोइड केवल खरपतवार पर दवा स्प्रे करे और फसल को सुरक्षित रखे।',
      modeTipEn: 'Select AGRO SAVE Mode 1 so the solenoid valve targets only weed clusters, protecting the main crop.',
      suggestedMode: 'WEED',
      nozzleType: 'फ्लैट फैन नोज़ल (Flat Fan 110°)',
      sprayTiming: 'खरपतवार की 2 से 4 पत्ती अवस्था (नम मिट्टी में)',
      waterVolume: '150 लीटर प्रति एकड़'
    };
  }

  if (isFertilizer) {
    return {
      id: `dynamic_fert_${Date.now()}`,
      keywords: [raw],
      questionHi: `पोषक तत्व व पर्णीय खाद सलाह: ${raw}`,
      questionEn: `Nutrient & Foliar Fertilizer Advisory: ${raw}`,
      answerHi: `${raw} के प्रभावी अवशोषण हेतु 19:19:19 (घुलनशील एनपीके) @ 1 किग्रा/एकड़ या नैनो यूरिया @ 2-4 मिली/लीटर पानी में मिलाकर स्प्रे करें। सूक्ष्म पोषक तत्वों की कमी दूर करने हेतु 0.5% जिंक सल्फेट + 0.25% बुझा हुआ चूना पानी का छिड़काव लाभकारी है।`,
      answerEn: `For efficient foliar absorption of ${raw}, apply water-soluble NPK 19:19:19 @ 1kg/acre or Liquid Nano Urea @ 2-4ml/L water. Supplement with 0.5% Zinc Sulphate or Grade-IV micronutrients for vigor.`,
      recommendedChemical: 'Water Soluble NPK 19:19:19 / Nano Urea',
      recommendedDosage: '1.0 kg/acre or 250-500 ml/acre in 150L water',
      modeTipHi: 'AGRO SAVE मोड 2 चुनें ताकि पर्णीय खाद सीधे फसल के पत्तों के रंध्रों पर लक्षित हो।',
      modeTipEn: 'Select AGRO SAVE Mode 2 to direct nutrient droplets directly onto crop foliage.',
      suggestedMode: 'CROP',
      nozzleType: 'फाइन हॉलो कोन नोज़ल (Fine Hollow Cone)',
      sprayTiming: 'सुबह के समय ओस सूखने के तुरंत बाद',
      waterVolume: '150 लीटर प्रति एकड़'
    };
  }

  if (isInsect) {
    return {
      id: `dynamic_insect_${Date.now()}`,
      keywords: [raw],
      questionHi: `कीट रोकथाम सलाह: ${raw}`,
      questionEn: `Pest Control Prescription: ${raw}`,
      answerHi: `${raw} की रोकथाम हेतु रस चूसक कीटों पर थियामेथॉक्सम 25% WG @ 80 ग्राम/एकड़ अथवा इमिडाक्लोप्रिड 17.8% SL @ 60 मिली/एकड़ का छिड़काव करें। यदि चबाने वाले कीट या सुंडी हैं तो क्लोरेंट्रानिलिप्रोल 18.5% SC (कोराजन) @ 60 मिली या इमामेक्टिन बेंजोएट 5% SG @ 100 ग्राम/एकड़ 200 लीटर पानी में मिलाकर शाम के समय स्प्रे करें।`,
      answerEn: `To control ${raw}, spray Thiamethoxam 25% WG @ 80g/acre or Imidacloprid 17.8% SL @ 60ml/acre for sucking pests. For chewers/caterpillars, spray Chlorantraniliprole 18.5% SC @ 60ml/acre or Emamectin Benzoate 5% SG @ 100g/acre in 200L water.`,
      recommendedChemical: 'Imidacloprid 17.8% SL / Coragen 18.5% SC',
      recommendedDosage: '60-80 ml or 100g in 150-200L water',
      modeTipHi: 'AGRO SAVE मोड 2 चुनें और नोज़ल को पौधे के तने व छतरी पर केंद्रित करें।',
      modeTipEn: 'Select AGRO SAVE Mode 2 targeting crop canopy and foliage.',
      suggestedMode: 'CROP',
      nozzleType: 'हॉलो कोन नोज़ल (Hollow Cone)',
      sprayTiming: 'शाम 4 बजे के बाद',
      waterVolume: '150-200 लीटर प्रति एकड़'
    };
  }

  // Default / General Pathological Diagnosis
  return {
    id: `dynamic_disease_${Date.now()}`,
    keywords: [raw],
    questionHi: `रोग व फसल सुरक्षा परामर्श: ${raw}`,
    questionEn: `Disease & Crop Protection Advisory: ${raw}`,
    answerHi: `${raw} के उपचार हेतु व्यापक फफूंदनाशी एज़ोक्सीस्ट्रोबिन 18.2% + डिफेनोकोनाज़ोल 11.4% SC (एमिस्टार टॉप) @ 200 मिली/एकड़ या मैंकोज़ेब 75% WP @ 600-800 ग्राम/एकड़ को 200 लीटर पानी में घोलकर स्प्रे करें। अधिक सहायता हेतु किसान कॉल सेंटर 1800-180-1551 पर संपर्क करें।`,
    answerEn: `To treat ${raw}, spray broad-spectrum fungicide Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 200ml/acre or Mancozeb 75% WP @ 600-800g/acre in 200L water. For personalized local advisory, call Kisan Call Center 1800-180-1551.`,
    recommendedChemical: 'Azoxystrobin + Difenoconazole SC / Mancozeb 75% WP',
    recommendedDosage: '200 ml or 600g in 200L water',
    modeTipHi: 'AGRO SAVE मोड 2 चुनें ताकि दवा सीधे फसल की पत्तियों पर गिरे।',
    modeTipEn: 'Select AGRO SAVE Mode 2 to direct fungicide droplets onto crop foliage.',
    suggestedMode: 'CROP',
    nozzleType: 'हॉलो कोन नोज़ल (Hollow Cone Nozzle)',
    sprayTiming: 'लक्षण दिखते ही सुबह के समय',
    waterVolume: '200 लीटर प्रति एकड़'
  };
}
