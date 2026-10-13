/**
 * 組織學 Vol.8 皮表系統（Integumentary System）50 題完整題庫（含純淨高清切片與解剖圖譜）
 */
const MASTER_QUIZ_QUESTIONS = [
  {
    "id": 1,
    "category": "表皮分層",
    "question": "關於表皮（Epidermis）各分層結構的敘述，下列何者正確？",
    "options": [
      "Stratum lucidum 在薄皮膚與厚皮膚中皆發育良好且嗜鹼性",
      "Stratum corneum 由失去細胞核與胞器的扁平角質細胞構成",
      "Stratum basale 透過 Desmosome 直接固定在基底膜之上",
      "Stratum spinosum 為表皮中細胞核分裂活性最強盛之區域"
    ],
    "answer": 1,
    "ref": "共筆 Vol.8 P.5-9",
    "explanation": "Stratum corneum（角質層）由完全角化、無核無胞器的死細胞（corneocytes）構成；Stratum lucidum 僅存在於厚皮膚且嗜酸性；Stratum basale 藉由 Hemidesmosome 錨定於基底膜，且為有絲分裂最旺盛之處。",
    "image": "images/diagram_epidermis_layers.jpg"
  },
  {
    "id": 2,
    "category": "表皮分層",
    "question": "光學顯微鏡下，表皮棘狀層（Stratum spinosum）細胞呈現典型棘刺狀外觀（Spines），其主要的微細構造基礎為何？",
    "options": [
      "微絨毛相互嵌合於細胞間質",
      "緊密連結分布於外側頂端面",
      "半胞橋小體向外側胞質延伸",
      "胞橋小體與張力微絲相互牽繫"
    ],
    "answer": 3,
    "ref": "共筆 Vol.8 P.7",
    "explanation": "棘狀層細胞在組織脫水製片時細胞本體收縮，但細胞間的 Desmosomes（胞橋小體）與胞質內的 Tonofilaments（張力微絲）緊密相連，牽扯形成棘狀突起。"
  },
  {
    "id": 3,
    "category": "表皮分層",
    "question": "表皮顆粒層（Stratum granulosum）能形成重要的表皮防水與防滲透屏障，其主要依賴下列何種胞器的分泌作用？",
    "options": [
      "Keratohyalin granule 釋出核酸",
      "Birbeck granule 釋出防禦素",
      "Lamellar granule 釋出醣脂質",
      "Melanosome 釋出黑色素小體"
    ],
    "answer": 2,
    "ref": "共筆 Vol.8 P.8",
    "explanation": "顆粒層內的 Lamellar granules（層狀小體 / Odland bodies）具單層膜包覆，會透過胞吐作用將醣脂質釋放至細胞間隙，形成主要的水分滲透屏障；Keratohyalin granules 則無膜包覆，富含 profillagrin。"
  },
  {
    "id": 4,
    "category": "表皮分層",
    "question": "關於厚皮膚（Thick skin）與薄皮膚（Thin skin）之組織學比較，下列敘述何者正確？",
    "options": [
      "厚皮膚之真皮層厚度必然顯著大於薄皮膚真皮層",
      "薄皮膚之表皮層完整包含透明層且角質層極厚實",
      "薄皮膚僅分布於手掌與腳底等承受高摩擦力部位",
      "厚皮膚缺乏皮脂腺與毛囊但具有發達外分泌汗腺"
    ],
    "answer": 3,
    "ref": "共筆 Vol.8 P.3-5",
    "explanation": "解剖學上「厚/薄皮膚」是以 Epidermis（表皮層）厚度定義。厚皮膚分布於手掌與腳底，角質層厚且具 Stratum lucidum，缺乏毛囊、豎毛肌與皮脂腺，但有大量外分泌汗腺。",
    "image": "images/slide_a63_thick_skin.jpg"
  },
  {
    "id": 5,
    "category": "表皮細胞",
    "question": "關於黑色素細胞（Melanocyte）的組織來源與細胞學特徵，下列敘述何者正確？",
    "options": [
      "由骨髓造血幹細胞分化而來且常駐於顆粒層",
      "由神經脊分化而來且通常不與相鄰細胞形成胞橋小體",
      "由表皮基底幹細胞分化而來且具有網球拍狀小體",
      "由中胚層間質細胞分化而來且具有發達肌上皮微絲"
    ],
    "answer": 1,
    "ref": "共筆 Vol.8 P.15",
    "explanation": "Melanocyte 源自神經脊（Neural crest），遷移至 Stratum basale。其特徵為不與周圍的 Keratinocyte 形成 Desmosome，因此製片時常在核周圍出現收縮透亮區（Halo）。"
  },
  {
    "id": 6,
    "category": "表皮細胞",
    "question": "黑色素細胞將合成之黑色素轉移至鄰近角質形成細胞（Keratinocyte）的過程，稱為下列何者？",
    "options": [
      "Holocrine secretion 全發分泌",
      "Apocrine secretion 頂發分泌",
      "Merocrine secretion 局發分泌",
      "Cytocrine secretion 細胞分泌"
    ],
    "answer": 3,
    "ref": "共筆 Vol.8 P.15-16",
    "explanation": "Melanocyte 利用樹突狀突起伸入棘狀層，角質形成細胞吞噬其突起末端，將 Melanosome 轉移至 Keratinocyte 胞質內，此特殊轉移機制稱為 Cytocrine secretion。",
    "image": "images/diagram_melanocyte_cytocrine.jpg"
  },
  {
    "id": 7,
    "category": "表皮細胞",
    "question": "人體不同族群之皮膚顏色深淺差異，在組織生理學上主要取決於下列哪一項因素？",
    "options": [
      "單位皮膚面積內所含黑色素細胞的絕對總數量",
      "表皮顆粒層內透明角質顆粒堆積厚度與透光程度",
      "黑色素小體的大小分佈與溶體分解酵素的作用速度",
      "真皮乳頭層微血管網內血紅素還原態的結合比例"
    ],
    "answer": 2,
    "ref": "共筆 Vol.8 P.16",
    "explanation": "各族群皮膚中 Melanocyte 密度基本相同（約 1:4 至 1:10 之比例）。膚色差異主要在於：黑種人 Melanosome 較大、數量多、分散且分解緩慢；白種人 Melanosome 較小、成群聚集且迅速被溶體分解。"
  },
  {
    "id": 8,
    "category": "表皮細胞",
    "question": "在表皮切片中若觀察到抗原呈現細胞（APC），並於電顯下發現網球拍形小體（Birbeck granules），該細胞最可能為：",
    "options": [
      "Merkel cell 梅克爾細胞",
      "Melanocyte 黑色素細胞",
      "Langerhans cell 蘭氏細胞",
      "Keratinocyte 角質細胞"
    ],
    "answer": 2,
    "ref": "共筆 Vol.8 P.17",
    "explanation": "Langerhans cell 源自骨髓，主要位於棘狀層，為樹突狀抗原呈現細胞，特徵構造即為桿狀或網球拍狀之 Birbeck granules，表面標記為 CD1a 與 Langerin。",
    "image": "images/diagram_langerhans_tem.jpg"
  },
  {
    "id": 9,
    "category": "表皮細胞",
    "question": "關於梅克爾細胞（Merkel cell）的組織學定位與生理特性，下列敘述何者正確？",
    "options": [
      "主要位於角質層且負責感受深層高頻震動刺激",
      "主要位於真皮深層且包覆洋蔥狀同心圓板層結構",
      "主要位於基底層且與傳入神經共同構成輕觸覺受器",
      "主要位於棘狀層且胞質充滿豐富嗜鹼性角質顆粒"
    ],
    "answer": 2,
    "ref": "共筆 Vol.8 P.18, 32",
    "explanation": "Merkel cell 位於表皮基底層（Stratum basale），胞質含神經內分泌顆粒，與去髓鞘之軸突末梢形成 Merkel disc，屬於慢適應第一型機械受器（Slow-adapting mechanoreceptor），感受輕觸覺。",
    "image": "images/diagram_merkel_cell.jpg"
  },
  {
    "id": 10,
    "category": "真皮組織",
    "question": "關於真皮層（Dermis）乳頭層（Papillary layer）與網狀層（Reticular layer）的組織學比較，下列何者正確？",
    "options": [
      "乳頭層主要由緻密不規則結締組織構成且富含粗大膠原束",
      "乳頭層由疏鬆結締組織構成且常含有麥氏小體感受器",
      "網狀層主要由疏鬆結締組織構成且含有豐富微血管網",
      "網狀層由單層立方上皮構成且主要負責分泌皮脂屏障"
    ],
    "answer": 1,
    "ref": "共筆 Vol.8 P.10",
    "explanation": "真皮乳頭層為淺層的 Loose connective tissue，含微血管環與 Meissner's corpuscles；網狀層為深層的 Dense irregular connective tissue，富含粗大第一型膠原纖維與彈性纖維。"
  },
  {
    "id": 11,
    "category": "真皮組織",
    "question": "外科手術切口若欲減少疤痕形成並促進傷口癒合，通常應順著皮紋裂線（Langer's lines），該線之走向取決於：",
    "options": [
      "真皮網狀層內粗大膠原纖維與彈性纖維之排列束向",
      "真皮乳頭層與表皮釘突交界處微血管網絡的分佈",
      "皮下脂肪組織中小葉間隔平滑肌纖維束之牽引方向",
      "表皮基底層幹細胞於有絲分裂時染色體之分裂軸線"
    ],
    "answer": 0,
    "ref": "共筆 Vol.8 P.10",
    "explanation": "Langer's lines（裂線/皮紋張力線）是由真皮網狀層中主要平行的膠原纖維束走向所決定。順著此線下刀能使切口張力最小，癒合後疤痕最不明顯。"
  },
  {
    "id": 12,
    "category": "皮膚腺體",
    "question": "關於皮脂腺（Sebaceous gland）的分泌型態與顯微特徵，下列敘述何者正確？",
    "options": [
      "屬於全發分泌且腺泡細胞在常規染色下胞質呈泡沫狀",
      "屬於頂發分泌且導管大多直接開口於皮膚表層汗孔",
      "屬於局發分泌且腺體外圍具有發達的肌上皮細胞環繞",
      "屬於外分泌型且腺泡細胞頂端具有顯著突出的小芽胞"
    ],
    "answer": 0,
    "ref": "共筆 Vol.8 P.23-26",
    "explanation": "皮脂腺屬於 Holocrine secretion（全發分泌，細胞破裂形成分泌物），腺體細胞內含大量微小脂滴，在常規製片脂質被溶出後呈透明泡沫狀（Foamy appearance），導管多開口於毛囊上方。",
    "image": "images/diagram_sebaceous_histology.jpg"
  },
  {
    "id": 13,
    "category": "皮膚腺體",
    "question": "調節人體體溫的主要外分泌汗腺（Eccrine / Merocrine sweat gland），其神經支配型態為何？",
    "options": [
      "副交感神經節後纖維，釋放正腎上腺素調節",
      "副交感神經節前纖維，釋放乙醯膽鹼進行控制",
      "交感神經節後纖維，釋放乙醯膽鹼進行控制",
      "交感神經節後纖維，釋放正腎上腺素進行控制"
    ],
    "answer": 2,
    "ref": "共筆 Vol.8 P.27",
    "explanation": "外分泌汗腺（Eccrine sweat gland）由交感神經支配，但其節後神經元釋放的是乙醯膽鹼（Sympathetic cholinergic innervation），為人體自主神經系統中的經典特例。",
    "image": "images/slide_a63_sweat_pore_spiral.jpg"
  },
  {
    "id": 14,
    "category": "皮膚腺體",
    "question": "在組織切片中鑑別外分泌汗腺的分泌部（Secretory portion）與導管部（Duct portion），下列特徵何者正確？",
    "options": [
      "導管部管壁由雙層深染之立方上皮構成且無肌上皮細胞",
      "分泌部管壁由雙層深染之柱狀上皮構成且管腔較狹窄",
      "導管部具有單層淡染細胞並由發達之肌上皮細胞包繞",
      "分泌部管腔極為狹小且外圍完全缺乏微血管網絡供血"
    ],
    "answer": 0,
    "ref": "共筆 Vol.8 P.27, 39",
    "explanation": "Eccrine sweat gland 的導管部為雙層立方上皮（Stratified cuboidal epithelium），染色深且管腔較小；分泌部管腔較寬，細胞淡染，外層具有 Myoepithelial cells（肌上皮細胞）協助擠出汗液。",
    "image": "images/slide_a63_sweat_duct_secretory.jpg"
  },
  {
    "id": 15,
    "category": "皮膚腺體",
    "question": "頂漿汗腺（Apocrine sweat gland）與一般外分泌汗腺相比，下列哪一項特徵屬於頂漿汗腺專有？",
    "options": [
      "管腔顯著膨大擴張且主要開口於毛囊漏斗部上方",
      "全身廣泛均勻分佈且直接開口於表皮之汗孔構造",
      "腺泡細胞周圍完全缺乏收縮性肌上皮細胞之輔助",
      "自嬰兒出生即完全成熟並負責排汗以調節體溫恆定"
    ],
    "answer": 0,
    "ref": "共筆 Vol.8 P.29, 48",
    "explanation": "Apocrine sweat gland 局限於腋窩、乳暈、會陰等處，受性荷爾蒙刺激於青春期發育，管腔極為巨大膨大（Dilated lumen），通常開口於毛囊（Hair follicle）而非表皮表面。",
    "image": "images/slide_apocrine_sweat_gland.jpg"
  },
  {
    "id": 16,
    "category": "毛髮指甲",
    "question": "毛囊生長周期中，負責毛髮幹細胞分裂增殖並向上分化為毛髮實體的構造為何？",
    "options": [
      "毛球基底之毛基質區域",
      "真皮結締組織鞘之中段",
      "透明層鄰近之立毛肌端",
      "外毛根鞘上方之皮脂管"
    ],
    "answer": 0,
    "ref": "共筆 Vol.8 P.19-21",
    "explanation": "毛球（Hair bulb）底部的 Hair matrix（毛基質）包圍真皮乳頭，含有活躍分裂增生的幹細胞，由此處向上分化形成毛髮髓質、皮質與內毛根鞘。",
    "image": "images/slide_b25_hair_bulb.jpg"
  },
  {
    "id": 17,
    "category": "毛髮指甲",
    "question": "關於立毛肌（Arrector pili muscle）的組織學歸類與附著解剖，下列敘述何者正確？",
    "options": [
      "屬於骨骼肌纖維，受體神經系統隨意運動支配控制",
      "屬於心肌樣纖維，受節律點細胞自發性活動所調節",
      "屬於肌上皮組織，包覆於皮脂腺泡外層促使脂質排空",
      "屬於平滑肌束，由真皮乳頭斜向連接至毛囊結締組織鞘"
    ],
    "answer": 3,
    "ref": "共筆 Vol.8 P.22, 44",
    "explanation": "Arrector pili muscle 為平滑肌束，受交感神經支配。由真皮乳頭層斜向延伸至毛囊外結締組織鞘，收縮時使毛髮豎立（雞皮疙瘩）並擠壓夾在其間的皮脂腺。",
    "image": "images/slide_b25_arrector_sebaceous.jpg"
  },
  {
    "id": 18,
    "category": "毛髮指甲",
    "question": "指甲構造中，負責指甲板（Nail plate）持續生長延長的核心分裂區域為何？",
    "options": [
      "Hyponychium 甲下皮",
      "Eponychium 甲上皮",
      "Nail bed 甲床基質",
      "Nail matrix 甲母質"
    ],
    "answer": 3,
    "ref": "共筆 Vol.8 P.30, 45",
    "explanation": "Nail matrix（甲母質）位於甲根下方，細胞持續進行有絲分裂並發生無顆粒角化，向上向遠端推擠形成堅硬的 Nail plate；甲半月（Lunula）即為甲母質向外延伸之區域。",
    "image": "images/slide_b27_nail_plate.jpg"
  },
  {
    "id": 19,
    "category": "感覺受器",
    "question": "位於真皮乳頭層內、外觀呈橢圓柱狀且內有橫向層狀雪旺細胞排列之感覺受器為：",
    "options": [
      "巴氏小體 Pacinian corpuscle",
      "梅克爾盤 Merkel's disc",
      "魯氏小體 Ruffini corpuscle",
      "麥氏小體 Meissner's corpuscle"
    ],
    "answer": 3,
    "ref": "共筆 Vol.8 P.33, 46",
    "explanation": "Meissner's corpuscle 專門位於真皮乳頭層（Dermal papillae），呈橢圓柱狀，由橫向層狀堆疊之 Modified Schwann cells 包覆無髓鞘軸突，負責感受輕觸覺（Low-frequency vibration / light touch）。",
    "image": "images/slide_c22_meissner.jpg"
  },
  {
    "id": 20,
    "category": "感覺受器",
    "question": "關於巴氏小體（Pacinian corpuscle）之顯微構造與生理功能，下列敘述何者正確？",
    "options": [
      "主要分佈於真皮乳頭層且專門負責辨識溫熱變化",
      "由多層同心圓薄板圍繞中央軸突且對高頻振動極敏感",
      "外圍缺乏任何包膜構造並直接穿入表皮顆粒層內",
      "屬於慢適應感覺神經末梢且持續對皮膚伸展產生放電"
    ],
    "answer": 1,
    "ref": "共筆 Vol.8 P.32, 47",
    "explanation": "Pacinian corpuscle 體積巨大，位於深層真皮或皮下組織，切面呈洋蔥狀同心圓板層（Concentric lamellae），為快速適應受器，專門感受高頻振動（High-frequency vibration）與深層壓覺。",
    "image": "images/slide_b27_pacinian.jpg"
  },
  {
    "id": 21,
    "category": "感覺受器",
    "question": "對皮膚之機械性拉伸（Skin stretch）與持續張力具有慢適應響應之囊狀受器為：",
    "options": [
      "Ruffini corpuscle 魯氏小體",
      "Pacinian corpuscle 巴氏小體",
      "Meissner's corpuscle 麥氏小體",
      "Krause end bulb 克氏小體"
    ],
    "answer": 0,
    "ref": "共筆 Vol.8 P.33",
    "explanation": "Ruffini's corpuscle 紡錘狀，位於真皮網狀層，軸突分支穿梭於膠原纖維間，對組織拉伸（Stretch）與扭力敏感，屬於慢適應機械受器（Slowly adapting mechanoreceptor）。"
  },
  {
    "id": 22,
    "category": "實驗跑台",
    "question": "在實驗跑台切片（Slide A-25）觀察深色皮膚時，表皮基底層細胞核上方聚集之深棕色顆粒為：",
    "options": [
      "含鐵血黃素顆粒 Hemosiderin",
      "黑色素小體 Melanosome",
      "脂褐質退化顆粒 Lipofuscin",
      "透明角質小體 Keratohyalin"
    ],
    "answer": 1,
    "ref": "共筆 Vol.8 P.40",
    "explanation": "切片 A-25 為 Heavily pigmented skin，在基底層 Keratinocyte 核上方可清楚見到由 Melanocyte 轉移過來的 Melanin（黑色素小體），形成「遮陽帽」樣的保護構造（Supranuclear cap）。",
    "image": "images/slide_a25_pigmented_skin.jpg"
  },
  {
    "id": 23,
    "category": "實驗跑台",
    "question": "在頭皮縱切標本（Slide B-25）中，毛囊旁常可觀察到緊密相鄰之兩大附屬結構，分別為：",
    "options": [
      "外分泌汗腺導管與巴氏小體構造",
      "皮脂腺腺泡組織與立毛肌平滑肌束",
      "頂漿汗腺巨大管腔與麥氏小體受器",
      "真皮微血管球團與指甲母質上皮層"
    ],
    "answer": 1,
    "ref": "共筆 Vol.8 P.41-44",
    "explanation": "頭皮切片中毛囊（Hair follicle）旁呈三角形分佈的三合一構造：毛囊幹、淡染泡沫狀的 Sebaceous gland（皮脂腺）、以及斜向行走的粉紅平滑肌束 Arrector pili muscle（立毛肌）。",
    "image": "images/slide_b25_arrector_sebaceous.jpg"
  },
  {
    "id": 24,
    "category": "臨床病理",
    "question": "最常見之皮膚惡性腫瘤為基底細胞癌（Basal cell carcinoma），其鏡下典型病理組織特徵為：",
    "options": [
      "黑色素細胞顯著異型增生且侵襲真皮深層血管淋巴",
      "腫瘤巢中央可見顯著角化珠形成且富含細胞間橋連",
      "腫瘤巢外圍細胞呈現垂直柵狀排列且轉移機率極低",
      "表皮層角質形成細胞完全壞死脫落並形成大量水泡"
    ],
    "answer": 2,
    "ref": "共筆 Vol.8 P.35",
    "explanation": "Basal cell carcinoma 源自基底層未分化細胞，鏡下呈小葉狀或島狀分佈，最邊緣一層細胞呈特徵性柵狀排列（Peripheral palisading），破壞局部組織但極少遠處轉移；角化珠為鱗狀細胞癌（SCC）特徵。",
    "image": "images/clinical_skin_cancers.jpg"
  },
  {
    "id": 25,
    "category": "臨床病理",
    "question": "關於臨床燒燙傷深度分級（Burns）之組織學病理變化，下列敘述何者正確？",
    "options": [
      "一度燒傷破壞全層表皮與真皮且患者感覺喪失無痛感",
      "三度燒傷僅局限於角質層表面且通常數天內自行脫落",
      "二度燒傷傷及真皮層並常形成顯著水泡且具劇烈疼痛",
      "四度燒傷僅傷及皮下脂肪層而深層肌腱與骨骼完全無損"
    ],
    "answer": 2,
    "ref": "共筆 Vol.8 P.34",
    "explanation": "一度燒傷僅限表皮（紅腫無水泡）；二度燒傷侵犯真皮（水泡形成，神經末梢暴露導致劇痛）；三度燒傷全層壞死（全厚度），神經壞死反而失去痛覺；四度傷及皮下筋膜、肌肉與骨骼。",
    "image": "images/clinical_burns_degrees.jpg"
  },
  {
    "id": 26,
    "category": "實驗跑台",
    "question": "在手部指甲與末端指節切片（Slide B-27）中，甲床（Nail bed）的上皮層通常由哪兩層表皮細胞組成？",
    "options": [
      "Stratum basale 與 Stratum spinosum",
      "Stratum corneum 與 Stratum granulosum",
      "Stratum granulosum 與 Stratum lucidum",
      "Stratum lucidum 與 Stratum basale"
    ],
    "answer": 0,
    "ref": "共筆 Vol.8 P.45",
    "explanation": "指甲板下方之 Nail bed（甲床）屬於未完全角化的上皮，組織上僅由表皮較深之兩層構成：Stratum basale（基底層）與 Stratum spinosum（棘狀層），缺乏顆粒層與角質層。",
    "image": "images/slide_b27_nail_plate.jpg"
  },
  {
    "id": 27,
    "category": "表皮生理",
    "question": "人體皮膚在紫外線（UVB）照射下合成維生素 D3（Cholecalciferol）的前驅物主要位於表皮哪幾層？",
    "options": [
      "Stratum lucidum 與 Stratum corneum",
      "Stratum corneum 與 Stratum granulosum",
      "Stratum granulosum 與 Stratum lucidum",
      "Stratum basale 與 Stratum spinosum"
    ],
    "answer": 3,
    "ref": "共筆 Vol.8 P.2-6",
    "explanation": "維生素 D3 的光化學前驅物 7-dehydrocholesterol 主要儲存於代謝活躍的 Stratum basale 與 Stratum spinosum 之角質細胞質膜中，經 UVB 光解後再運送至肝腎羥化為活性維生素 D。"
  },
  {
    "id": 28,
    "category": "表皮分層",
    "question": "表皮角質層外層細胞發生生理性脫落（Desquamation），主要依賴下列何種酵素分解細胞間黏附分子？",
    "options": [
      "基質金屬蛋白酶 MMP-9",
      "溶體酸性磷酸酶 Acid phosphatase",
      "激肽釋放酶相關胜肽酶 KLKs",
      "酪胺酸蛋白激酶 Tyrosine kinase"
    ],
    "answer": 2,
    "ref": "共筆 Vol.8 P.9",
    "explanation": "在角質層最外層，Kallikrein-related peptidases（KLKs，如 KLK5 與 KLK7 等絲胺酸蛋白酶）在弱酸環境下水解 Desmoglein 1 等角質小體連結蛋白，促使成熟角質細胞脫落。"
  },
  {
    "id": 29,
    "category": "表皮分層",
    "question": "透明層（Stratum lucidum）在厚皮膚切片中呈現均質透明帶，其胞質中含有的特殊中介蛋白為：",
    "options": [
      "Involucrin 外膜蛋白",
      "Filaggrin 絲聚合蛋白",
      "Eleidin 依萊丁蛋白",
      "Loricrin 兜甲蛋白"
    ],
    "answer": 2,
    "ref": "共筆 Vol.8 P.9",
    "explanation": "Stratum lucidum 的角質細胞核已退化消失，胞質充滿嗜酸性、透亮的角質變性產物 Eleidin（依萊丁），此構造僅出現於承受高度摩擦的手掌與腳底之厚皮膚中。"
  },
  {
    "id": 30,
    "category": "表皮分層",
    "question": "顆粒層中的透明角質顆粒（Keratohyalin granules），其主要含有的多胜肽前驅物為：",
    "options": [
      "Profilaggrin 前絲聚合蛋白",
      "Proelastin 前彈性蛋白",
      "Procollagen 前膠原蛋白",
      "Protropomyosin 前原肌球蛋白"
    ],
    "answer": 0,
    "ref": "共筆 Vol.8 P.8",
    "explanation": "Keratohyalin granules 嗜鹼性無膜包覆，富含 Profilaggrin。在角化過程中去磷酸化形成 Filaggrin，能將 Keratin 中間絲交聯成緊密的平行束狀，使細胞變扁脫水。"
  },
  {
    "id": 31,
    "category": "臨床病理",
    "question": "尋常性天皰瘡（Pemphigus vulgaris）患者出現表皮內水泡與棘層鬆解，其自體抗體主要攻擊之標的為：",
    "options": [
      "半胞橋小體之 BP180 抗原",
      "基底膜之第四型膠原蛋白",
      "胞橋小體之 Desmoglein 3",
      "緊密連結之 Claudin-1 蛋白"
    ],
    "answer": 2,
    "ref": "共筆 Vol.8 P.7, 34",
    "explanation": "Pemphigus vulgaris 為自體免疫疾病，抗體攻擊棘狀層 Desmosome 中的 Desmoglein 3，破壞細胞間連結導致棘層鬆解（Acantholysis），形成表皮內鬆弛性水泡（Intraepidermal blister）。"
  },
  {
    "id": 32,
    "category": "臨床病理",
    "question": "大皰性類天皰瘡（Bullous pemphigoid）形成張力性表皮下水泡，其自體抗體主要針對下列何種構造？",
    "options": [
      "半胞橋小體之 Hemidesmosome 蛋白",
      "胞橋小體之 Desmocollin 蛋白",
      "間隙連結之 Connexin-43 蛋白",
      "黏著帶之 E-cadherin 蛋白"
    ],
    "answer": 0,
    "ref": "共筆 Vol.8 P.6, 34",
    "explanation": "Bullous pemphigoid 自體抗體攻擊 Hemidesmosome（半胞橋小體）上的 BP180 / BP230，使基底細胞與基底膜分離，形成不易破裂的張力性表皮下水泡（Subepidermal blister）。"
  },
  {
    "id": 33,
    "category": "臨床病理",
    "question": "乾癬（Psoriasis）在組織切片下可見表皮細胞更新週期急劇縮短，角質層中保留細胞核之現象稱為：",
    "options": [
      "過度角化 Hyperkeratosis",
      "棘層肥厚 Acanthosis",
      "不全角化 Parakeratosis",
      "乳頭瘤樣增生 Papillomatosis"
    ],
    "answer": 2,
    "ref": "共筆 Vol.8 P.9, 34",
    "explanation": "乾癬表皮幹細胞過度增生，更新週期由正常的 3~4 週縮短至 3~5 天，角質細胞來不及完全降解細胞核即推擠至表面，形成角質層帶核的「不全角化（Parakeratosis）」。"
  },
  {
    "id": 34,
    "category": "表皮細胞",
    "question": "黑色素細胞於前黑色素小體內催化酪胺酸（Tyrosine）轉化為多巴（DOPA）之限速酵素為：",
    "options": [
      "酪胺酸酶 Tyrosinase",
      "過氧化氫酶 Catalase",
      "超氧化物歧化酶 SOD",
      "多巴胺脫羧酶 DDC"
    ],
    "answer": 0,
    "ref": "共筆 Vol.8 P.15",
    "explanation": "Melanosome 合成 Melanin 的關鍵限速酵素為含銅的 Tyrosinase（酪胺酸酶），若該酵素先天缺乏突變則會導致白化症（Albinism）。"
  },
  {
    "id": 35,
    "category": "真皮組織",
    "question": "真皮乳頭（Dermal papillae）與表皮突（Rete pegs）相互咬合交錯，在生物力學上的主要意義為何？",
    "options": [
      "阻斷表皮角質形成細胞向真皮深層之正常滲透路徑",
      "增大真皮與表皮之接觸面積以抵禦水平剪切剪力",
      "促進皮下脂肪細胞向真皮網狀層進行大規模遷移",
      "減少真皮微血管網對表皮基底層營養物質的擴散"
    ],
    "answer": 1,
    "ref": "共筆 Vol.8 P.10",
    "explanation": "真皮乳頭與表皮釘突交錯排列，大幅增加了表皮與真皮間的基底膜接觸面積，強化兩者間的錨定力量，防止皮膚在遭受外力摩擦時表皮與真皮相互剝離。"
  },
  {
    "id": 36,
    "category": "真皮組織",
    "question": "分佈於手指末端與指甲下方之動靜脈吻合體（Glomus body），其主要的生理組織功能為何？",
    "options": [
      "調節皮膚末端微循環血流量以進行核心體溫控制",
      "直接分泌酸性皮脂形成抑菌化學防禦保護膜",
      "負責合成大量粗大第一型膠原蛋白以強化真皮",
      "吞噬由表皮脫落進入真皮組織之死角質細胞殘渣"
    ],
    "answer": 0,
    "ref": "共筆 Vol.8 P.10, 30",
    "explanation": "Glomus bodies 為特化的動靜脈吻合枝（AV shunt），平滑肌管壁發達，繞過微血管網直接將小動脈血液分流至小靜脈，寒冷時收縮減少散熱、溫熱時放鬆增加血流散熱。"
  },
  {
    "id": 37,
    "category": "皮膚腺體",
    "question": "包繞於外分泌汗腺分泌部腺泡基底側之肌上皮細胞（Myoepithelial cells），其胚胎發育來源為：",
    "options": [
      "中胚層之平滑肌母細胞",
      "造血幹細胞之巨噬細胞系",
      "神經脊之間質幹細胞系",
      "外胚層之上皮幹細胞系"
    ],
    "answer": 3,
    "ref": "共筆 Vol.8 P.27, 39",
    "explanation": "肌上皮細胞（Myoepithelial cells）雖然胞質充滿肌動蛋白微絲且具收縮能力，但在發育起源上與汗腺細胞相同，屬於外胚層上皮來源（Ectodermal epithelial origin）。"
  },
  {
    "id": 38,
    "category": "皮膚腺體",
    "question": "頂漿汗腺（Apocrine sweat gland）剛自腺體管腔分泌排出時之新鮮汗液，其特性為何？",
    "options": [
      "呈完全透明水樣且不含有任何脂質或類固醇性荷爾蒙成分",
      "具有強烈惡臭酸味且含有極高濃度之尿素與高張力電解質",
      "本身無菌無味但富含蛋白質並經體表共生細菌分解產生氣味",
      "直接由嗜鹼性多層立方細胞破裂釋出且pH值呈現強酸性"
    ],
    "answer": 2,
    "ref": "共筆 Vol.8 P.29",
    "explanation": "頂漿汗腺分泌物在剛排出時是無菌且無氣味的黏稠乳狀液體，富含蛋白質、脂質與固醇，到達皮膚表面後經表皮葡萄球菌與棒狀桿菌等細菌分解代謝，才產生特徵性體味。"
  },
  {
    "id": 39,
    "category": "毛髮指甲",
    "question": "毛囊生長週期中，毛球細胞停止分裂萎縮且真皮乳頭脫離毛球之退化期稱為：",
    "options": [
      "生長期 Anagen",
      "退行期 Catagen",
      "休止期 Telogen",
      "脫落期 Exogen"
    ],
    "answer": 1,
    "ref": "共筆 Vol.8 P.20",
    "explanation": "毛囊週期包含：Anagen（生長期，matrix 快速分裂）、Catagen（退行期，細胞停止分裂，毛球萎縮向上收縮形成 club hair）、Telogen（休止期，毛囊完全靜止）。"
  },
  {
    "id": 40,
    "category": "毛髮指甲",
    "question": "毛囊之內毛根鞘（Internal root sheath）由外向內依序可細分為哪三層構造？",
    "options": [
      "Huxley's layer、Henle's layer、Medulla",
      "Cuticle、Huxley's layer、Henle's layer",
      "Glassy membrane、Henle's layer、Cortex",
      "Henle's layer、Huxley's layer、Cuticle"
    ],
    "answer": 3,
    "ref": "共筆 Vol.8 P.21, 43",
    "explanation": "內毛根鞘由外而內依次為：單層立方無核的 Henle's layer、多層含 trichohyalin 顆粒的 Huxley's layer、以及覆瓦狀重疊的鞘角質層 Cuticle。",
    "image": "images/slide_b26_hair_cross_section.jpg"
  },
  {
    "id": 41,
    "category": "毛髮指甲",
    "question": "指甲近端之半月痕（Lunula）在肉眼觀察下呈現乳白色半月形，其組織學原因為何？",
    "options": [
      "該處甲母質上皮層較厚掩蓋了深層真皮微血管網",
      "該處角質層異常增厚阻擋了深層真皮血管之反光",
      "該處缺乏微血管網絡且真皮由大量脂肪細胞構成",
      "該處聚集了大量具色素之黑色素細胞吸收所有光線"
    ],
    "answer": 0,
    "ref": "共筆 Vol.8 P.30, 45",
    "explanation": "Lunula（甲半月）為活化分裂的 Nail matrix（甲母質）遠端延伸部位。由於甲母質細胞層較厚且尚未完全透明角化，掩蓋了下方真皮豐富的粉紅色微血管網絡，故呈現不透明乳白色。",
    "image": "images/slide_b27_nail_section.jpg"
  },
  {
    "id": 42,
    "category": "感覺受器",
    "question": "皮膚中的自由神經末梢（Free nerve endings）其無髓鞘軸突末端最淺可穿透抵達表皮哪一層？",
    "options": [
      "Stratum lucidum 透明層",
      "Stratum granulosum 顆粒層",
      "Stratum corneum 角質層外緣",
      "僅止於真皮網狀層底部"
    ],
    "answer": 1,
    "ref": "共筆 Vol.8 P.32",
    "explanation": "自由神經末梢穿透基底膜後失去神經膜細胞包膜，裸露的無髓鞘軸突穿行於角質形成細胞間，最高可向上抵達 Stratum granulosum（顆粒層），負責感知痛覺、溫度覺與搔癢。"
  },
  {
    "id": 43,
    "category": "感覺受器",
    "question": "在指尖與唇部等具有極高兩點辨別覺（Two-point discrimination）之無毛皮膚中，密度最高之受器為：",
    "options": [
      "Pacinian corpuscle 巴氏小體",
      "Meissner's corpuscle 麥氏小體",
      "Ruffini corpuscle 魯氏小體",
      "Krause end bulb 克氏小體"
    ],
    "answer": 1,
    "ref": "共筆 Vol.8 P.33",
    "explanation": "Meissner's corpuscle 密集分佈於指腹、手掌、腳底與嘴唇等無毛皮膚的真皮乳頭中，感受微小接觸與滑動摩擦，是決定兩點辨別覺精細空間解析度的核心受器。",
    "image": "images/diagram_receptors_summary.jpg"
  },
  {
    "id": 44,
    "category": "感覺受器",
    "question": "巴氏小體（Pacinian corpuscle）能對高頻震動產生快速適應（Rapid adaptation），主要依賴其何種構造？",
    "options": [
      "表皮角質層厚實的阻隔使深層壓力訊號衰減至零",
      "中央軸突末梢含有大量抑制性神經胜肽阻斷動作電位",
      "受器囊壁含有緻密骨骼肌微絲主動向相反方向牽拉",
      "外圍充滿液體之多層同心圓薄板吸收持續靜態壓力"
    ],
    "answer": 3,
    "ref": "共筆 Vol.8 P.32, 47",
    "explanation": "Pacinian corpuscle 的洋蔥狀同心圓板層由雪旺細胞特化而成，板層間充滿液體。靜態恆定壓力施加時，層間液體迅速流動重新分佈，使中央軸突不再變形；只有高頻振動才能持續造成機械變形。",
    "image": "images/diagram_receptors_histology.jpg"
  },
  {
    "id": 45,
    "category": "臨床病理",
    "question": "鱗狀細胞癌（Squamous cell carcinoma, SCC）在病理組織切片中的典型診斷特徵為：",
    "options": [
      "腫瘤巢最外圍單層細胞呈柵狀排列",
      "同心圓狀角化珠形成與細胞間橋構造",
      "胞質充滿大量深黑色素之梭形瘤細胞",
      "廣泛黏液分泌形成大印戒細胞樣結構"
    ],
    "answer": 1,
    "ref": "共筆 Vol.8 P.35",
    "explanation": "SCC 源自表皮棘狀層細胞，鏡下可見異型扁平上皮細胞浸潤真皮，特徵為腫瘤巢內出現「角化珠（Keratin pearls）」以及保留的「細胞間橋（Intercellular bridges / Desmosomes）」。"
  },
  {
    "id": 46,
    "category": "臨床病理",
    "question": "臨床鑑別惡性黑色素瘤（Malignant melanoma）的 ABCDE 準則中，字母「C」代表的意義為何？",
    "options": [
      "Color 色澤深淺不均多樣",
      "Cellularity 細胞浸潤密度",
      "Circumference 病灶圓周長度",
      "Consistency 觸診質地堅硬度"
    ],
    "answer": 0,
    "ref": "共筆 Vol.8 P.35",
    "explanation": "ABCDE 原則：A = Asymmetry（不對稱）、B = Border irregularity（邊緣不規則）、C = Color variation（顏色多樣不均，如混雜棕、黑、紅、藍、白）、D = Diameter > 6mm、E = Evolving（病灶快速改變）。",
    "image": "images/clinical_melanoma.jpg"
  },
  {
    "id": 47,
    "category": "表皮生理",
    "question": "當皮膚遭受嚴重擦傷全層表皮剝落時，表皮幹細胞可自毛囊何處遷移出來以加速上皮重新覆蓋？",
    "options": [
      "毛囊結締組織鞘之中段",
      "立毛肌之肌腱附著點端",
      "毛髮髓質之最內核心區",
      "外毛根鞘之隆起部 Bulge"
    ],
    "answer": 3,
    "ref": "共筆 Vol.8 P.19, 34",
    "explanation": "毛囊外毛根鞘（Outer root sheath）靠近立毛肌附著處具有「隆起部（Bulge region）」，含有多潛能幹細胞。當表皮大面積損傷時，Bulge 幹細胞會向上遷移增生，分化為表皮角質細胞協助傷口上皮化。"
  },
  {
    "id": 48,
    "category": "實驗跑台",
    "question": "在切片標本 Slide A-63（Human skin sweat gland, HE + Reticular fiber stain）中，鍍銀/網狀纖維染色呈現深黑色的是：",
    "options": [
      "雙層立方上皮導管內層細胞之角質蛋白",
      "腺泡及微血管基底膜之網狀纖維網絡",
      "外分泌汗腺管腔內所含之高張濃稠汗液",
      "立毛肌平滑肌束內之肌動蛋白微絲束"
    ],
    "answer": 1,
    "ref": "共筆 Vol.8 P.37",
    "explanation": "Slide A-63 特殊染色結合了 Reticular fiber stain（鍍銀法），第三型膠原（網狀纖維）呈現黑色細線，緊密包繞於汗腺分泌腺泡、導管基底膜外圍以及微血管周圍，突顯出腺體的分葉結構。",
    "image": "images/slide_a63_sweat_gland_overview.jpg"
  },
  {
    "id": 49,
    "category": "實驗跑台",
    "question": "在頭皮毛囊切線橫切標本（Slide B-26）中，緊鄰毛囊結締組織鞘內側且均質嗜酸性的透明膜狀構造為：",
    "options": [
      "Henle's layer 亨利層",
      "Huxley's layer 赫胥黎層",
      "Glassy membrane 玻璃膜",
      "Internal root sheath 內毛根鞘"
    ],
    "answer": 2,
    "ref": "共筆 Vol.8 P.43",
    "explanation": "Glassy membrane（玻璃膜）為外毛根鞘與周圍真皮結締組織鞘之間的特化增厚基底膜（Basement membrane），在光學顯微鏡下呈均質透明且強烈嗜酸性的厚帶。",
    "image": "images/slide_b26_hair_cross_section.jpg"
  },
  {
    "id": 50,
    "category": "真皮組織",
    "question": "皮下組織（Hypodermis / Subcutis）在人體組織結構上不屬於嚴格皮膚定義，其主要組成的組織類型為：",
    "options": [
      "緻密規則結締組織與彈性軟骨",
      "網狀結締組織與骨小樑構造",
      "角化複層扁平上皮與骨骼肌束",
      "疏鬆結締組織與大量脂肪小葉"
    ],
    "answer": 3,
    "ref": "共筆 Vol.8 P.3, 10",
    "explanation": "皮下組織（Hypodermis / Superficial fascia）由 Loose connective tissue 與大量白脂肪細胞（Adipose tissue）構成，具緩衝避震、保溫儲能以及連結皮膚至深層深筋膜與骨骼之重要功能。"
  }
];
const QUIZ_QUESTIONS = MASTER_QUIZ_QUESTIONS;
