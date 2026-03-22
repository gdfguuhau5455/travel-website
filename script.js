/* ==================== 旅游攻略数据库 ==================== */
const guideData = {
    "桂林": {
        title: "广西·桂林 旅游攻略",
        subtitle: "山水甲天下 · 漓江烟雨如诗如画",
        heroImg: "https://images.unsplash.com/photo-1537531383496-f4748a8e6c8b?w=1200",
        bestTime: "3月-5月 / 9月-11月",
        duration: "4-5天",
        budget: "¥2500-4500",
        transport: "飞机/高铁至桂林",
        days: [
            {
                day: "Day 1", title: "抵达桂林 · 两江四湖",
                items: ["桂林北站/机场入住酒店", "下午游览两江四湖（漓江+桃花江+榕湖+杉湖+桂湖+木龙湖）", "夜游象鼻山，欣赏亮灯夜景", "品尝桂林米粉 + 啤酒鱼"]
            },
            {
                day: "Day 2", title: "漓江精华 · 阳朔",
                items: ["早乘游船漓江（桂林→阳朔 4小时，推荐竹筏段）", "欣赏九马画山、黄布倒影、冠岩等经典山水", "下午抵达阳朔，逛西街，体验异域风情", "晚看《印象刘三姐》实景演出（强烈推荐）"]
            },
            {
                day: "Day 3", title: "阳朔深度 · 古村骑行",
                items: ["租自行车骑行遇龙河沿岸（15km，风景绝美）", "游览十里画廊、大榕树、月亮山穿洞", "下午泛竹筏遇龙河段（约2小时）", "傍晚回西街购物、尝桂林特色小吃"]
            },
            {
                day: "Day 4", title: "龙脊梯田 · 壮族文化",
                items: ["全天龙脊梯田（选金坑大寨/平安寨），推荐早上看云海日出", "体验壮族红瑶文化，欣赏长发秀", "下午返回桂林市区", "晚餐：正阳路步行街美食集市"]
            },
            {
                day: "Day 5", title: "芦笛岩 · 返程",
                items: ["上午游览芦笛岩（岩溶地貌奇观）", "游七星公园，观骆驼山", "采购特产：桂花糕、漓江啤酒、腊味", "返程"]
            }
        ],
        spots: [
            { name: "漓江", desc: "世界上规模最大、风景最美的岩溶山水游览区，被誉为'天下第一水'" },
            { name: "阳朔西街", desc: "百年老街，洋溢着异域风情与文艺气息，各国游客汇聚之地" },
            { name: "龙脊梯田", desc: "始建于元代，有800年历史，梯田层层叠叠直入云霄" },
            { name: "象鼻山", desc: "桂林城徽，酷似大象饮水的天然奇观，是桂林最具代表性的标志" },
        ],
        foods: [
            { icon: "🍜", name: "桂林米粉", desc: "卤水汤底，Q弹米粉，早餐首选" },
            { icon: "🐟", name: "啤酒鱼", desc: "阳朔特色，漓江鲜鱼加桂林啤酒红烧" },
            { icon: "🥜", name: "荔浦芋扣肉", desc: "肥而不腻，入口即化的地道名菜" },
            { icon: "🌶️", name: "螺蛳粉", desc: "酸辣鲜香，重口味必尝" },
            { icon: "🍰", name: "桂花糕", desc: "传统糕点，桂花香气浓郁" },
            { icon: "🦐", name: "漓江虾", desc: "现捞现做，鲜嫩无比" }
        ],
        tips: [
            "漓江游船旺季需提前3天预订，推荐乘坐4-8人小竹筏（更灵活自由）",
            "阳朔西街晚上热闹但物价较高，建议货比三家再购物",
            "龙脊梯田最美时节：4-5月（稻田灌水镜面）和9-10月（金色丰收）",
            "桂林市区和阳朔打车方便，也可租电动车，注意下雨路滑",
            "防晒防蚊必备，山区早晚温差大，带一件薄外套"
        ],
        budgets: [
            { type: "经济游", label: "背包客", price: "¥1800" },
            { type: "舒适游", label: "推荐", price: "¥3500" },
            { type: "豪华游", label: "品质游", price: "¥6000+" }
        ]
    },
    "大理": {
        title: "云南·大理 旅游攻略",
        subtitle: "风花雪月之地 · 洱海苍山的诗意慢生活",
        heroImg: "https://images.unsplash.com/photo-1606067493596-2de7c3d9d8e9?w=1200",
        bestTime: "3月-5月 / 10月-12月",
        duration: "3-5天",
        budget: "¥2000-4000",
        transport: "飞机至大理机场/高铁至大理站",
        days: [
            {
                day: "Day 1", title: "大理古城 · 慢时光",
                items: ["入住古城民宿，推荐人民路或洱海边", "漫步大理古城四方街，感受白族文化", "参观崇圣寺三塔（拍照必去）", "古城夜市品尝乳扇、木瓜水、砂锅鱼"]
            },
            {
                day: "Day 2", title: "洱海环游 · 最美公路",
                items: ["租电动车/自行车环洱海（全程130km，可选半程）", "双廊古镇游览，欣赏洱海日出日落", "喜洲镇品尝喜洲粑粑，参观白族民居", "才村码头日落观景"]
            },
            {
                day: "Day 3", title: "苍山 · 蝴蝶泉",
                items: ["上午索道上苍山，俯瞰洱海全景", "游览苍山洗马潭，高山湖泊风光绝美", "下午蝴蝶泉景区（4月蝴蝶会最盛）", "白族扎染体验DIY"]
            },
            {
                day: "Day 4", title: "周城 · 诺邓古村（可选）",
                items: ["周城白族扎染之乡，购入手工扎染布品", "诺邓古村：千年白族村落，诺邓火腿闻名天下", "下午返回大理古城，放松休闲", "夜游人民路酒吧街"]
            }
        ],
        spots: [
            { name: "洱海", desc: "云南第二大淡水湖，海拔1966米，水质清澈，被誉为'高原明珠'" },
            { name: "大理古城", desc: "保存完好的明代古城，白族建筑风格浓郁，文艺氛围极佳" },
            { name: "苍山", desc: "横亘在洱海西侧，19峰、18溪，最高峰海拔4122米" },
            { name: "双廊古镇", desc: "洱海边的艺术小镇，拥有最美的洱海日落，文艺民宿众多" }
        ],
        foods: [
            { icon: "🧀", name: "乳扇", desc: "大理特色奶酪，煎炸后香脆可口" },
            { icon: "🐟", name: "砂锅鱼", desc: "洱海鲤鱼炖煮，汤鲜味美" },
            { icon: "🥞", name: "喜洲粑粑", desc: "白族传统面食，外酥里嫩" },
            { icon: "🫗", name: "木瓜水", desc: "酸甜爽口，大理独特饮品" },
            { icon: "🥓", name: "诺邓火腿", desc: "千年传统腌制，咸香醇厚" },
            { icon: "🍲", name: "白族三道茶", desc: "苦、甜、回味，寓意人生哲理" }
        ],
        tips: [
            "洱海保护区游客需预约入内，旺季须提前2天网上预约",
            "环洱海骑行强度较大，量力而行，也可坐观光车",
            "大理紫外线极强，防晒霜、遮阳帽、太阳镜必备",
            "民宿价格差异大，古城内性价比高的民宿建议提前2周预订",
            "4月蝴蝶会、6月火把节是大理最热闹的时节"
        ],
        budgets: [
            { type: "经济游", label: "背包客", price: "¥1500" },
            { type: "舒适游", label: "推荐", price: "¥3000" },
            { type: "豪华游", label: "品质游", price: "¥5500+" }
        ]
    },
    "丽江": {
        title: "云南·丽江 旅游攻略",
        subtitle: "世界文化遗产 · 纳西古乐与古城的千年传承",
        heroImg: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200",
        bestTime: "4月-10月（雨季景色更美）",
        duration: "3-5天",
        budget: "¥2500-5000",
        transport: "飞机至丽江三义机场（推荐）",
        days: [
            {
                day: "Day 1", title: "丽江古城 · 四方街",
                items: ["入住古城客栈，感受纳西风情", "漫步四方街，这是茶马古道重要集散地", "游览木府（纳西土司府邸，极具气势）", "夜晚古城酒吧街，听纳西古乐表演"]
            },
            {
                day: "Day 2", title: "玉龙雪山 · 蓝月谷",
                items: ["早出发玉龙雪山景区（建议7:00前入园）", "乘索道上大索道至4506米观景台，欣赏雪景", "游览蓝月谷（镜湖+蓝月湖+听涛湖，颜色梦幻）", "下午游云杉坪，参观纳西族《印象丽江》演出"]
            },
            {
                day: "Day 3", title: "束河古镇 · 白沙壁画",
                items: ["上午束河古镇（比丽江更安静文艺，三眼井必去）", "白沙壁画：明代壁画国宝级文物", "下午黑龙潭公园，免费拍玉龙雪山倒影", "傍晚狮子山俯瞰古城全景"]
            },
            {
                day: "Day 4", title: "泸沽湖 / 虎跳峡（可选一日游）",
                items: ["泸沽湖：摩梭人的女儿国，猪槽船游湖", "或选虎跳峡：峡谷徒步2-3小时，适合户外达人", "返回丽江采购特产", "尝普米族烤全猪、纳西火锅"]
            }
        ],
        spots: [
            { name: "丽江古城", desc: "世界文化遗产，有800年历史，古城内水渠纵横，纳西民居错落有致" },
            { name: "玉龙雪山", desc: "北半球最近赤道的现代冰川，终年积雪，是纳西族的神山" },
            { name: "束河古镇", desc: "茶马古道上保存最完好的重要集镇，比丽江更有烟火气" },
            { name: "泸沽湖", desc: "摩梭族母系社会保留地，高原湖泊，水质清澈湛蓝" }
        ],
        foods: [
            { icon: "🥩", name: "腊排骨火锅", desc: "丽江招牌，腊香浓郁，驱寒暖身" },
            { icon: "🍫", name: "丽江粑粑", desc: "纳西族传统面食，酥软可口" },
            { icon: "🫙", name: "天麻炖鸡", desc: "高原药膳，滋补养身" },
            { icon: "🥗", name: "凉拌苦菜", desc: "清热解暑，高原特色野菜" },
            { icon: "🍺", name: "青稞酒", desc: "纳西族传统酿酒，香醇甘甜" },
            { icon: "🌸", name: "鲜花饼", desc: "云南特产，玫瑰花馅酥饼" }
        ],
        tips: [
            "玉龙雪山大索道票紧张，务必提前1-2天通过景区App预约",
            "高原反应：丽江海拔约2400米，初到不宜剧烈运动，备好红景天",
            "古城内台阶较多，穿平底防滑鞋，晚上石板路湿滑",
            "泸沽湖距丽江约4小时车程，建议至少安排1晚住宿",
            "丽江古城内小摊价格可砍价，正规店铺明码标价"
        ],
        budgets: [
            { type: "经济游", label: "背包客", price: "¥2000" },
            { type: "舒适游", label: "推荐", price: "¥4000" },
            { type: "豪华游", label: "品质游", price: "¥7000+" }
        ]
    },
    "玉龙雪山": {
        title: "云南·玉龙雪山 旅游攻略",
        subtitle: "北纬26°的冰川奇迹 · 纳西神山的壮美雪景",
        heroImg: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200",
        bestTime: "11月-次年4月（雪季最美）/ 全年可游",
        duration: "1-2天（配合丽江）",
        budget: "¥800-1500（门票+索道）",
        transport: "丽江包车/景区直通车（约1小时）",
        days: [
            {
                day: "Day 1", title: "玉龙雪山全景游",
                items: ["7:00前抵达景区，早入园避开人潮", "乘大索道至4506米观景台，赏冰川雪景（约40分钟）", "游蓝月谷（镜湖→蓝月湖→听涛湖，全程约2小时）", "云杉坪缆车游览，观原始针叶林", "白水河边拍雪山倒影（免费区域）", "下午3点前下山，避免高山天气突变"]
            },
            {
                day: "Day 2", title: "《印象丽江》+ 甘海子",
                items: ["上午观看《印象丽江》张艺谋实景演出（3416米户外剧场，震撼）", "甘海子草原骑马，以雪山为背景拍照", "冰川公园探索古冰川遗迹", "返回丽江古城休整"]
            }
        ],
        spots: [
            { name: "大索道观景台", desc: "海拔4506米，最高可到达区域，冰川近在眼前，震撼无比" },
            { name: "蓝月谷", desc: "冰川融水形成的梦幻湖泊群，蓝绿色湖水配雪山，如梦如幻" },
            { name: "云杉坪", desc: "海拔3240米的高原草甸，周围原始云杉林，是纳西族的圣地" },
            { name: "甘海子草原", desc: "雪山脚下的开阔草原，是拍摄玉龙雪山全貌的最佳位置" }
        ],
        foods: [
            { icon: "🍜", name: "丽江粑粑", desc: "上山前补充能量的传统面食" },
            { icon: "☕", name: "热奶茶", desc: "山顶御寒必备，暖胃暖心" },
            { icon: "🥩", name: "牦牛肉干", desc: "高原特产，耐饿又美味" },
            { icon: "🍬", name: "酥油茶糖", desc: "藏式风味小食，提神醒脑" },
            { icon: "🫙", name: "玛咖", desc: "高原滋补植物，纳西族传统食品" },
            { icon: "🌸", name: "鲜花饼", desc: "云南特产，下山带回家" }
        ],
        tips: [
            "大索道票必须提前1-2天预约（微信小程序/官网），旺季当天无票",
            "高反注意：4506米处气压低，心肺功能弱者请谨慎，备好氧气袋",
            "山顶温度比山下低15-20℃，即使夏天也要穿厚外套，可在山脚租赁",
            "蓝月谷和云杉坪是分开的索道，套票更划算，提前规划游览顺序",
            "下午2点后山顶常起云雾，建议上午登顶能见度更佳"
        ],
        budgets: [
            { type: "基础票", label: "门票+大索道", price: "¥650" },
            { type: "套餐票", label: "含3条索道", price: "¥900" },
            { type: "全含套", label: "含演出+马术", price: "¥1300+" }
        ]
    },
    "梵净山": {
        title: "贵州·梵净山 旅游攻略",
        subtitle: "世界自然遗产 · 云雾仙境与红云金顶",
        heroImg: "https://images.unsplash.com/photo-1531761535209-83451df0a37d?w=1200",
        bestTime: "4月-6月 / 9月-11月",
        duration: "2-3天",
        budget: "¥1500-3000",
        transport: "飞机至铜仁凤凰机场，再乘车约1.5小时",
        days: [
            {
                day: "Day 1", title: "入住 · 古镇探秘",
                items: ["抵达铜仁，入住梵净山脚民宿", "游览亚木沟景区（峡谷栈道，感受黔东原始森林）", "品尝铜仁特色美食：社饭、红薯粉", "了解梵净山攀登路线，准备次日登山"]
            },
            {
                day: "Day 2", title: "登顶梵净山 · 红云金顶",
                items: ["6:00早起出发，乘索道至山腰（节省体力）", "徒步至金顶（约1.5小时，坡度较陡）", "攀登红云金顶：新金顶海拔2336米，垂直登顶铁梯（须胆大）", "欣赏蘑菇石奇观（梵净山标志性景观）", "下午乘索道下山，返回住所休整"]
            },
            {
                day: "Day 3", title: "太平河 · 返程",
                items: ["上午游览太平河漂流（夏季推荐）", "苗族村寨参观，体验苗绣、苗歌", "采购特产：梵净山茶叶、野生蜂蜜", "返程"]
            }
        ],
        spots: [
            { name: "红云金顶", desc: "梵净山最高峰，两座金顶相对而立，常有红云环绕，壮观神圣" },
            { name: "蘑菇石", desc: "亿年形成的天然奇石，形如蘑菇屹立山顶，是梵净山的标志" },
            { name: "万米睡佛", desc: "从特定角度望去，整个山体酷似一尊巨大的卧佛，神奇壮观" },
            { name: "太子石", desc: "海拔2494米处的巨石，佛教圣迹，环境清幽神秘" }
        ],
        foods: [
            { icon: "🍚", name: "社饭", desc: "清明节传统食品，艾叶香气四溢" },
            { icon: "🍜", name: "红薯粉", desc: "贵州特色粉条，酸辣爽滑" },
            { icon: "🥬", name: "折耳根", desc: "贵州人最爱的野菜，鱼腥草独特风味" },
            { icon: "🍵", name: "梵净山茶", desc: "高山云雾茶，清香甘醇" },
            { icon: "🍖", name: "腊猪脚", desc: "贵州传统腌制，浓香软烂" },
            { icon: "🌶️", name: "糟辣椒", desc: "贵州家家必备的腌制辣椒酱" }
        ],
        tips: [
            "旺季（五一、十一、暑假）游客极多，需提前5-7天预约门票+索道",
            "金顶最后的铁梯几乎垂直，恐高者慎重考虑，雨天铁梯湿滑禁止攀登",
            "山区天气多变，带防雨冲锋衣、防滑登山鞋",
            "梵净山黔金丝猴是珍稀保护动物，可能在路途中偶遇，不可投喂",
            "从铜仁出发建议包车，公共交通不便"
        ],
        budgets: [
            { type: "经济游", label: "背包客", price: "¥1200" },
            { type: "舒适游", label: "推荐", price: "¥2200" },
            { type: "豪华游", label: "品质游", price: "¥4000+" }
        ]
    },
    "厦门": {
        title: "福建·厦门 旅游攻略",
        subtitle: "海上花园城市 · 鼓浪屿琴声与文艺小清新",
        heroImg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
        bestTime: "10月-次年4月（秋冬最宜）",
        duration: "3-4天",
        budget: "¥2000-4000",
        transport: "飞机/高铁至厦门北站",
        days: [
            {
                day: "Day 1", title: "鼓浪屿 · 世界文化遗产",
                items: ["乘船渡海至鼓浪屿（20分钟），建议早上8点前上岛", "游览日光岩（鼓浪屿最高点，俯瞰全岛）", "菽庄花园：依海而建的私家园林", "钢琴博物馆、风琴博物馆感受音乐文化", "龙头路小吃街：馅饼、沙茶面、土笋冻必尝"]
            },
            {
                day: "Day 2", title: "曾厝垵 · 环岛骑行",
                items: ["骑自行车环岛路（全长43km，可选半程）", "黄厝海滩游泳、拍照", "曾厝垵文创渔村，逛特色小店、喝闽南奶茶", "南普陀寺参拜，素斋体验（需提前预约）", "夜晚中山路步行街品小吃"]
            },
            {
                day: "Day 3", title: "南普陀 · 厦大 · 沙坡尾",
                items: ["厦门大学校园游览（芙蓉湖拍照极美，需提前预约）", "厦大后门白城沙滩游玩", "沙坡尾避风坞，网红打卡地，文艺咖啡馆聚集", "轮渡码头夜景（海湾大桥灯光秀）"]
            },
            {
                day: "Day 4", title: "集美学村 · 返程",
                items: ["集美学村：陈嘉庚创办，闽南与罗马式建筑融合", "集美鳌园：陈嘉庚墓园，融合闽南文化的艺术奇观", "八市海鲜早市：最地道的厦门早市体验", "购买特产：馅饼、铁观音、贡糖"]
            }
        ],
        spots: [
            { name: "鼓浪屿", desc: "世界文化遗产，钢琴之岛，历史国际社区，文艺氛围浓厚" },
            { name: "曾厝垵", desc: "中国最文艺的渔村，各类创意小店、民宿咖啡馆云集" },
            { name: "厦门大学", desc: "被誉为中国最美大学之一，环境优美，值得专程一游" },
            { name: "南普陀寺", desc: "闽南佛教圣地，香火鼎盛，素斋远近闻名" }
        ],
        foods: [
            { icon: "🍢", name: "沙茶面", desc: "厦门特色，沙茶汤底香浓，配料丰富" },
            { icon: "🥚", name: "土笋冻", desc: "海边特产，口感独特，蘸醋食用" },
            { icon: "🥟", name: "馅饼", desc: "闽南传统饼食，薄皮大馅，多种口味" },
            { icon: "🦪", name: "海蛎煎", desc: "海蛎+鸡蛋+地瓜粉，闽台共同的美食记忆" },
            { icon: "🥭", name: "花生汤", desc: "清甜软糯，厦门传统甜品" },
            { icon: "🍭", name: "贡糖", desc: "鼓浪屿伴手礼，香甜酥脆" }
        ],
        tips: [
            "鼓浪屿旺季渡船需提前预约，建议工作日或早上出行，人少景美",
            "厦大校园需提前网上预约，每日限流，不可随意入内",
            "环岛骑行注意红绿灯和单行道，部分路段不能骑行",
            "中山路步行街周末人多，建议工作日晚上去，更有感觉",
            "台风季（7-9月）注意天气，鼓浪屿渡轮可能停运"
        ],
        budgets: [
            { type: "经济游", label: "背包客", price: "¥1500" },
            { type: "舒适游", label: "推荐", price: "¥3000" },
            { type: "豪华游", label: "品质游", price: "¥5000+" }
        ]
    },
    "海南岛": {
        title: "海南·三亚 旅游攻略",
        subtitle: "中国的热带天堂 · 阳光、沙滩与免税购物",
        heroImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
        bestTime: "11月-次年4月（旱季最佳）",
        duration: "5-7天",
        budget: "¥4000-10000",
        transport: "飞机至三亚凤凰国际机场",
        days: [
            {
                day: "Day 1", title: "抵达三亚 · 亚龙湾",
                items: ["入住亚龙湾五星级酒店（推荐自带私人沙滩的度假村）", "下午亚龙湾海滩游泳、冲浪", "海底世界潜水（初学者适合海滩潜水）", "夜晚第一市场海鲜自选（性价比之选）"]
            },
            {
                day: "Day 2", title: "蜈支洲岛 · 海上运动",
                items: ["全天蜈支洲岛（三亚最美小岛，需提前预约）", "浮潜、玻璃底船、摩托艇等海上项目任选", "岛上北海石、情人桥等观景点打卡", "下午返回，免税店购物（海南岛免税政策优惠）"]
            },
            {
                day: "Day 3", title: "天涯海角 · 南山文化区",
                items: ["天涯海角：天涯石、海角石，海天一色的浪漫", "南山文化旅游区：108米南海观音，气势恢宏", "大小洞天：天然盆景园，道教文化圣地", "夜游三亚湾，欣赏椰林海岸夜景"]
            },
            {
                day: "Day 4", title: "呀诺达 · 热带雨林",
                items: ["呀诺达热带雨林文化旅游区：感受真实雨林生态", "雨林徒步、溯溪、峡谷秋千，刺激好玩", "下午槟榔谷：黎苗文化体验", "傍晚大东海游泳（三亚市区最近的海滩）"]
            },
            {
                day: "Day 5", title: "免税购物 · 休闲",
                items: ["三亚国际免税城集中购物（香化、奢品、电子等均有）", "下午海坡休闲度假区，逛海边商业街", "日落时分解放路夜市，品地道海南粉", "最后一晚享受酒店泳池休闲"]
            }
        ],
        spots: [
            { name: "亚龙湾", desc: "中国最美海湾之一，沙细水清，是三亚最顶级的度假海滩" },
            { name: "蜈支洲岛", desc: "中国最美的潜水胜地之一，珊瑚礁保存完好，鱼类丰富" },
            { name: "天涯海角", desc: "中国著名旅游胜地，海水碧蓝，礁石奇异，极具浪漫色彩" },
            { name: "南海观音", desc: "世界上最高的观音圣像之一，高达108米，气势磅礴" }
        ],
        foods: [
            { icon: "🦀", name: "海南清蒸螃蟹", desc: "原汁原味，蟹肉鲜甜肥美" },
            { icon: "🐔", name: "海南文昌鸡", desc: "皮黄肉嫩，白切最佳，清甜无比" },
            { icon: "🍜", name: "海南粉", desc: "粗米粉+多种配料，酸香爽滑" },
            { icon: "🌴", name: "椰子鸡火锅", desc: "椰汁汤底，鲜甜清爽" },
            { icon: "🦐", name: "加积鸭", desc: "海南四大名菜之一，皮脆肉香" },
            { icon: "🥥", name: "椰子冻", desc: "天然椰子为碗，冰凉香甜解暑" }
        ],
        tips: [
            "春节和暑假是三亚最旺的季节，机票酒店提前1个月预订",
            "蜈支洲岛每天限流，旺季务必提前至少3天网上预约购票",
            "免税购物有限额（每人每年10万元），合理规划购物清单",
            "出租车有拒载、绕路情况，推荐使用滴滴打车",
            "海边紫外线超强，防晒SPF50以上，建议穿防晒衣下水"
        ],
        budgets: [
            { type: "经济游", label: "背包客", price: "¥3000" },
            { type: "舒适游", label: "推荐", price: "¥6000" },
            { type: "豪华游", label: "奢华度假", price: "¥15000+" }
        ]
    },
    "婺源": {
        title: "江西·婺源 旅游攻略",
        subtitle: "中国最美乡村 · 油菜花海与徽派古村落",
        heroImg: "https://images.unsplash.com/photo-1519922639192-e73293ca430e?w=1200",
        bestTime: "3月中旬-4月（油菜花最盛）/ 10月-11月（红叶）",
        duration: "3-4天",
        budget: "¥1500-3000",
        transport: "高铁至婺源站（南昌/上饶中转）",
        days: [
            {
                day: "Day 1", title: "江岭 · 篁岭",
                items: ["早抵婺源，直奔江岭（最美梯田油菜花，视野开阔）", "日出前上江岭山顶，等待金色花海渐亮", "下午篁岭古村：世界上最美的晒秋景观", "篁岭索道俯瞰整个古村与花海"]
            },
            {
                day: "Day 2", title: "李坑 · 汪口 · 晓起",
                items: ["李坑古村：小桥流水人家，典型徽派水乡古村", "汪口古村：乾隆年间古建，俞氏宗祠精美绝伦", "晓起古村：古樟树群，千年古樟遮天蔽日", "下午赏村落民居，寻找最美取景角"]
            },
            {
                day: "Day 3", title: "彩虹桥 · 清华镇",
                items: ["彩虹桥：宋代廊桥，横跨古驿道，拍照极美", "清华镇：千年古镇，白墙黛瓦，古韵悠然", "思溪延村：明清商人古宅，保存完好", "乡间骑行，自由探索不知名的美丽村落"]
            }
        ],
        spots: [
            { name: "江岭梯田", desc: "婺源最壮观的梯田花海，油菜花季节4000多亩黄花连天接地" },
            { name: "篁岭古村", desc: "悬崖上的古村落，晒秋习俗形成的彩色画卷举世闻名" },
            { name: "彩虹桥", desc: "建于宋代的风雨廊桥，800年历史，是婺源最美古桥" },
            { name: "李坑", desc: "小桥流水人家的典范，粉墙黛瓦与流水古桥构成绝美画卷" }
        ],
        foods: [
            { icon: "🐟", name: "荷包红鲤鱼", desc: "婺源特产，鱼肉细嫩，红烧或清蒸皆宜" },
            { icon: "🫙", name: "糊豆腐", desc: "婺源传统家常菜，豆腐+猪肉末勾芡" },
            { icon: "🥢", name: "清明粿", desc: "艾草制成，清香软糯，清明节特产" },
            { icon: "🍵", name: "婺源绿茶", desc: "中国历史名茶，"婺绿"茶香高爽" },
            { icon: "🐷", name: "粉蒸肉", desc: "米粉+五花肉蒸制，香软可口" },
            { icon: "🌰", name: "板栗", desc: "婺源山区特产，秋季现炒香甜" }
        ],
        tips: [
            "油菜花最佳观赏期通常在3月15日-4月10日，具体时间随气温变化",
            "旺季（花季+长假）住宿必须提前2周以上预订，村落民宿更有特色",
            "篁岭、江岭等景点均收费且需门票，买通票更划算",
            "乡间小路弯多，建议租车或包车游览，骑行需体力",
            "带好现金，部分古村微信/支付宝信号不稳定"
        ],
        budgets: [
            { type: "经济游", label: "背包客", price: "¥1000" },
            { type: "舒适游", label: "推荐", price: "¥2200" },
            { type: "豪华游", label: "品质游", price: "¥4000+" }
        ]
    },
    "天门山": {
        title: "湖南·天门山 旅游攻略",
        subtitle: "中华第一神山 · 天门洞与玻璃栈道的极限体验",
        heroImg: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
        bestTime: "4月-10月",
        duration: "1-2天",
        budget: "¥600-1200",
        transport: "高铁至张家界西站，市区打车约30分钟",
        days: [
            {
                day: "Day 1", title: "天门山全景游",
                items: ["乘世界最长客运索道（全长7455米）上山，俯瞰张家界全貌", "天门洞：海拔1264米的天然穿山溶洞，99级台阶登顶", "鬼谷栈道：悬崖峭壁的玻璃栈道，脚下万丈深渊", "天界神仙谷：云雾缭绕，如入仙境", "下午乘盘山公路返回（99道弯，体验绝佳）"]
            },
            {
                day: "Day 2", title: "张家界国家森林公园（联游）",
                items: ["袁家界：阿凡达悬浮山原型，哈利路亚山", "金鞭溪：5km徒步溪谷，风景如画", "黄石寨：俯瞰张家界石峰群全景", "天子山：峰林石柱，御笔峰等奇峰林立"]
            }
        ],
        spots: [
            { name: "天门洞", desc: "世界上最高的天然穿山溶洞，海拔1264米，洞口高131.5米" },
            { name: "玻璃栈道", desc: "悬挂在绝壁上的玻璃栈道，透过脚下可见云雾和深渊" },
            { name: "天门山索道", desc: "世界最长客运单线循环式索道，全程俯瞰奇峰怪石" },
            { name: "99道弯公路", desc: "盘绕天门山的公路艺术，有"世界最壮观公路"之称" }
        ],
        foods: [
            { icon: "🐟", name: "土家腊鱼", desc: "柴火熏制，咸香浓郁" },
            { icon: "🥩", name: "张家界土猪肉", desc: "散养土猪，肉质紧实鲜美" },
            { icon: "🍲", name: "合渣", desc: "土家族传统豆腐，嫩滑清淡" },
            { icon: "🌶️", name: "剁椒鱼头", desc: "湖南名菜，辣而鲜香" },
            { icon: "🍵", name: "三道茶", desc: "土家族待客礼仪，苦甜回味" },
            { icon: "🥜", name: "葛根粉", desc: "天门山特产，健脾养胃" }
        ],
        tips: [
            "天门山和张家界森林公园景区不同，天门山在市区，单独购票",
            "天门洞99级台阶坡度大，膝关节不好的游客量力而行",
            "玻璃栈道有身高、体重限制，恐高者请慎重",
            "山顶全年云雾缭绕，即使天气预报晴天也可能有雾，穿好雨衣",
            "建议上午游天门山，下午看张家界，两景区打车约30分钟"
        ],
        budgets: [
            { type: "天门山", label: "门票+索道", price: "¥520" },
            { type: "两园联票", label: "含张家界", price: "¥869" },
            { type: "豪华套", label: "含住宿餐饮", price: "¥1500+" }
        ]
    },
    "九寨沟": {
        title: "四川·九寨沟 旅游攻略",
        subtitle: "童话世界 · 彩色湖泊与瀑布的人间仙境",
        heroImg: "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?w=1200",
        bestTime: "9月-11月（秋色最美）/ 4月-6月（春水最清）",
        duration: "2-3天",
        budget: "¥2500-5000",
        transport: "飞机至九黄机场（最快）/ 成都出发自驾约8小时",
        days: [
            {
                day: "Day 1", title: "日则沟 · 彩色湖泊",
                items: ["早7:30入园，先乘观光车直达日则沟尽头", "镜海→天鹅湖（返程时游览）", "从日则沟顶部步行下行：珍珠滩瀑布→珍珠滩→五彩池→诺日朗瀑布", "下午游原始森林→犀牛海→芦苇海", "傍晚返回营地镇休息"]
            },
            {
                day: "Day 2", title: "树正沟 · 则查洼沟",
                items: ["早进则查洼沟：长海（九寨沟最大海子）→五彩池（最美）", "下行：上下季节海→下季节海", "树正沟：树正群海→双龙海→树正瀑布→荷叶寨", "犀牛海拍夕阳倒影（极美）"]
            },
            {
                day: "Day 3", title: "黄龙景区（可选）",
                items: ["成都-九寨沟途中可顺游黄龙（钙华彩池举世无双）", "黄龙景区海拔3000-3559米，需做好高反准备", "五彩池（黄龙顶部）→迎宾彩池→争艳彩池，全程约5km", "下午返回成都或继续行程"]
            }
        ],
        spots: [
            { name: "五彩池", desc: "九寨沟最小却最美的海子，湖水随光线变化呈现出多种颜色" },
            { name: "珍珠滩瀑布", desc: "宽达162米的宽幅瀑布，翻滚的水珠犹如万颗珍珠飞溅" },
            { name: "诺日朗瀑布", desc: "中国最宽的钙华瀑布，宽320米，气势磅礴" },
            { name: "长海", desc: "九寨沟海拔最高、面积最大的海子，四季景色各异" }
        ],
        foods: [
            { icon: "🥩", name: "藏族烤羊肉", desc: "高原散养羊，炭火烤制，香嫩无腥" },
            { icon: "🍺", name: "青稞酒", desc: "藏族传统美酒，甘甜醇香" },
            { icon: "🍲", name: "酥油茶", desc: "牛奶+茶+酥油，驱寒补充热量" },
            { icon: "🥚", name: "酸奶", desc: "牦牛酸奶，浓稠香醇" },
            { icon: "🍖", name: "牦牛肉", desc: "高原牦牛，肉质细嫩，蛋白质丰富" },
            { icon: "🥞", name: "糌粑", desc: "藏族传统主食，炒熟的青稞磨粉" }
        ],
        tips: [
            "九寨沟每日限流限额，旺季必须提前7天在官方小程序预约购票",
            "高原反应：景区平均海拔2000-3000米，备好红景天，避免剧烈运动",
            "秋季（9-11月）是人最多的季节，建议工作日出行",
            "景区内全程步行+观光车，穿舒适运动鞋，全天游览约需8小时",
            "2017年地震后部分区域仍在修复，进入前查看最新开放区域公告"
        ],
        budgets: [
            { type: "经济游", label: "背包客", price: "¥2000" },
            { type: "舒适游", label: "推荐", price: "¥3500" },
            { type: "豪华游", label: "品质游", price: "¥6000+" }
        ]
    },
    "洪崖洞": {
        title: "重庆·洪崖洞 旅游攻略",
        subtitle: "现实版千与千寻 · 山城立体夜景与魔幻重庆",
        heroImg: "https://images.unsplash.com/photo-1537202108838-e7072bad1927?w=1200",
        bestTime: "全年皆宜（秋冬雾季最神秘）",
        duration: "3-4天",
        budget: "¥2000-4000",
        transport: "飞机至重庆江北机场 / 高铁至重庆北站或沙坪坝站",
        days: [
            {
                day: "Day 1", title: "洪崖洞 · 解放碑夜游",
                items: ["下午抵达，入住解放碑附近（步行即可到各景点）", "洪崖洞：傍晚天色渐暗时入场，灯光逐渐亮起最美", "俯视角度：嘉陵江边千厮门大桥上看全景（拍大片必去）", "逛洪崖洞11层吊脚楼，品小吃、买特产", "解放碑步行街夜宵：闹市灯光璀璨"]
            },
            {
                day: "Day 2", title: "磁器口 · 长江索道",
                items: ["磁器口古镇：千年巴渝名镇，陈麻花、豆花饭必尝", "轻轨2号线穿楼（李子坝站）：网红打卡，10分钟走过", "长江索道：横跨长江，两岸夜景尽收眼底", "朝天门广场：两江交汇，江风习习，夜景超美"]
            },
            {
                day: "Day 3", title: "武隆 · 天坑地缝",
                items: ["全天武隆（世界自然遗产，距重庆约2.5小时）", "芙蓉洞：中国最美溶洞之一，钟乳石奇观", "天生三桥：《满城尽带黄金甲》拍摄地，三座天然石桥", "龙水峡地缝：深达百米的峡谷，栈道穿行"]
            },
            {
                day: "Day 4", title: "火锅 · 购物 · 返程",
                items: ["早游南滨路：长江对岸看重庆全景（最佳摄影地）", "正宗重庆火锅（九宫格+毛肚+鸭肠+脑花）", "观音桥商圈或南坪商圈购物", "机场/高铁返程"]
            }
        ],
        spots: [
            { name: "洪崖洞", desc: "11层巴渝风格吊脚楼，夜晚灯火通明，宛如宫崎骏动画场景" },
            { name: "李子坝轻轨站", desc: "轻轨穿楼而过的奇景，成为重庆最具标志性的网红打卡地" },
            { name: "磁器口古镇", desc: "千年历史的巴渝古镇，保留最完整的重庆老街风貌" },
            { name: "武隆天生三桥", desc: "世界自然遗产，三座巨大天然石桥横跨深谷，壮观无比" }
        ],
        foods: [
            { icon: "🔥", name: "重庆火锅", desc: "九宫格麻辣烫锅，毛肚鸭肠是灵魂，正宗必去南岸老店" },
            { icon: "🍜", name: "小面", desc: "重庆街头早餐，麻辣爽滑，撒上葱花香气扑鼻" },
            { icon: "🥩", name: "江湖菜", desc: "来凤鱼、芋儿鸡、泡椒牛蛙，豪迈江湖风格" },
            { icon: "🍢", name: "陈麻花", desc: "磁器口特色，麻辣香甜多种口味" },
            { icon: "🥓", name: "豆花饭", desc: "嫩白豆花配白米饭，蘸碟麻辣，朴实美味" },
            { icon: "🧃", name: "冰粉", desc: "消暑甜品，加红糖醪糟花生，清凉解辣" }
        ],
        tips: [
            "洪崖洞最佳拍摄时间：日落后半小时至晚上10点，灯光全开最美",
            "千厮门大桥是拍洪崖洞全景的最佳位置，免费，比在洪崖洞内更好看",
            "重庆地形复杂，建议使用高德地图，有轻轨、缆车等特殊交通提示",
            "火锅必须预订，网红老店节假日要提前1天以上排队或预约",
            "吃火锅前可备好止泻药和胃药，初次吃重庆火锅注意辣度"
        ],
        budgets: [
            { type: "经济游", label: "背包客", price: "¥1500" },
            { type: "舒适游", label: "推荐", price: "¥3000" },
            { type: "豪华游", label: "品质游", price: "¥5500+" }
        ]
    },
    "老君山": {
        title: "河南·老君山 旅游攻略",
        subtitle: "道教圣地 · 云海金顶与北方最美雪景",
        heroImg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
        bestTime: "11月-次年2月（雪景）/ 9月-10月（秋景）",
        duration: "1-2天",
        budget: "¥500-1200",
        transport: "高铁至栾川站 / 洛阳出发自驾约2.5小时",
        days: [
            {
                day: "Day 1", title: "老君山全景游",
                items: ["早8:00抵达景区，购票入园（建议网上提前购）", "乘索道至山顶（可选步行，约1.5小时登顶）", "游览太清宫：依山而建的道教建筑群，金碧辉煌", "金顶远眺：天气好时可望见洛阳盆地", "云海观景台：等待云雾翻腾，如入仙境", "下午步行下山，沿途赏秋色/雪景"]
            },
            {
                day: "Day 2", title: "鸡冠洞 · 龙峪湾（可选）",
                items: ["鸡冠洞：栾川著名溶洞，钟乳石造型奇特", "龙峪湾国家森林公园：原始森林，瀑布溪流", "栾川县城美食街品当地特色", "返回洛阳，可顺游龙门石窟"]
            }
        ],
        spots: [
            { name: "金顶太清宫", desc: "海拔2200米处的道教宫殿，金色琉璃瓦在阳光下熠熠生辉" },
            { name: "云海观景台", desc: "秋冬时节云海翻腾，金顶时隐时现，是老君山最震撼的景观" },
            { name: "步道雪景", desc: "冬季登山步道银装素裹，红灯笼与白雪相映，极具中国风情" },
            { name: "老君庙", desc: "道教始祖老子炼丹处，千年道教文化圣地，香火鼎盛" }
        ],
        foods: [
            { icon: "🥩", name: "栾川全羊", desc: "山区散养，肉质鲜嫩，白水煮最原味" },
            { icon: "🍄", name: "山珍炖鸡", desc: "野生蘑菇+土鸡，汤清味鲜" },
            { icon: "🌽", name: "柴火饃", desc: "河南传统烤馍，外酥内软" },
            { icon: "🐟", name: "伊河鲤鱼", desc: "伊河鲜鱼，红烧或清炖皆美" },
            { icon: "🫙", name: "山茱萸酒", desc: "栾川特产中药酒，保健养身" },
            { icon: "🌰", name: "栾川板栗", desc: "山区特产，秋季糖炒最香甜" }
        ],
        tips: [
            "冬季老君山雪景全网爆火，元旦春节期间人极多，必须提前抢票",
            "山顶气温比山下低8-15℃，冬季要穿羽绒服，准备防滑冰爪",
            "索道上山约15分钟，步行上山1.5小时，体力好推荐步行欣赏沿途风景",
            "洛阳出发的旅游大巴有直达班车，性价比高，不用自驾",
            "老君山+龙门石窟可组合1-2日游，洛阳为中转城市"
        ],
        budgets: [
            { type: "经济游", label: "背包客", price: "¥400" },
            { type: "舒适游", label: "推荐", price: "¥800" },
            { type: "豪华游", label: "含住宿", price: "¥1500+" }
        ]
    }
};

/* ==================== 渲染攻略弹窗 ==================== */
function buildGuideHTML(dest) {
    const d = guideData[dest];
    if (!d) {
        return `<div class="guide-body">
            <h2 class="guide-title">🔍 ${dest} 旅游攻略</h2>
            <p class="guide-subtitle" style="margin-top:20px;">
                正在为您整理「${dest}」的详细旅游攻略，请稍候或联系客服获取专属定制方案！
            </p>
        </div>`;
    }

    const daysHTML = d.days.map(day => `
        <div class="guide-day">
            <div class="guide-day-header">${day.day} · ${day.title}</div>
            <ul>${day.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>`).join('');

    const spotsHTML = d.spots.map(s => `
        <div class="guide-spot-item">
            <h4>📍 ${s.name}</h4>
            <p>${s.desc}</p>
        </div>`).join('');

    const foodsHTML = d.foods.map(f => `
        <div class="guide-food-item">
            <div class="food-icon">${f.icon}</div>
            <h4>${f.name}</h4>
            <p>${f.desc}</p>
        </div>`).join('');

    const tipsHTML = d.tips.map(t => `
        <div class="guide-tip"><i class="fas fa-lightbulb"></i><span>${t}</span></div>`).join('');

    const budgetsHTML = d.budgets.map(b => `
        <div class="guide-budget-item">
            <div class="budget-type">${b.type}</div>
            <div class="budget-label">${b.label}</div>
            <div class="budget-price">${b.price}</div>
        </div>`).join('');

    return `
        <img class="guide-hero" src="${d.heroImg}" alt="${d.title}">
        <div class="guide-body">
            <h1 class="guide-title">${d.title}</h1>
            <p class="guide-subtitle">${d.subtitle}</p>

            <div class="guide-meta">
                <div class="guide-meta-item"><i class="fas fa-calendar-check"></i> <strong>最佳时间：</strong>${d.bestTime}</div>
                <div class="guide-meta-item"><i class="fas fa-clock"></i> <strong>建议天数：</strong>${d.duration}</div>
                <div class="guide-meta-item"><i class="fas fa-wallet"></i> <strong>参考费用：</strong>${d.budget}</div>
                <div class="guide-meta-item"><i class="fas fa-bus"></i> <strong>交通：</strong>${d.transport}</div>
            </div>

            <div class="guide-section">
                <h3 class="guide-section-title"><i class="fas fa-route"></i> 推荐行程</h3>
                <div class="guide-days">${daysHTML}</div>
            </div>

            <div class="guide-section">
                <h3 class="guide-section-title"><i class="fas fa-map-pin"></i> 必游景点</h3>
                <div class="guide-spots-list">${spotsHTML}</div>
            </div>

            <div class="guide-section">
                <h3 class="guide-section-title"><i class="fas fa-utensils"></i> 特色美食</h3>
                <div class="guide-food-list">${foodsHTML}</div>
            </div>

            <div class="guide-section">
                <h3 class="guide-section-title"><i class="fas fa-lightbulb"></i> 旅行贴士</h3>
                <div class="guide-tips">${tipsHTML}</div>
            </div>

            <div class="guide-section">
                <h3 class="guide-section-title"><i class="fas fa-yen-sign"></i> 费用预算（人均）</h3>
                <div class="guide-budget">${budgetsHTML}</div>
            </div>

            <div class="guide-cta">
                <button class="btn-primary" onclick="document.getElementById('guideModal').classList.remove('show')">
                    <i class="fas fa-paper-plane"></i> 立即预订此行程
                </button>
            </div>
        </div>`;
}

function openGuide(dest) {
    const modal = document.getElementById('guideModal');
    const body = document.getElementById('guideModalBody');
    body.innerHTML = buildGuideHTML(dest);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
    body.scrollTop = 0;
}

function closeGuide() {
    document.getElementById('guideModal').classList.remove('show');
    document.body.style.overflow = '';
}

/* ==================== 弹窗关闭逻辑 ==================== */
document.getElementById('guideModalClose').addEventListener('click', closeGuide);
document.getElementById('guideModal').addEventListener('click', function(e) {
    if (e.target === this) closeGuide();
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeGuide();
});

/* ==================== 搜索表单 ==================== */
document.getElementById('mainSearchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const dest = document.getElementById('searchDestination').value.trim();
    if (!dest) {
        document.getElementById('searchDestination').focus();
        document.getElementById('searchDestination').style.borderColor = '#ff6b6b';
        return;
    }
    document.getElementById('searchDestination').style.borderColor = '';
    // 智能匹配：模糊匹配攻略库中的目的地
    const keys = Object.keys(guideData);
    const matched = keys.find(k => dest.includes(k) || k.includes(dest)) || dest;
    openGuide(matched);
});

document.getElementById('searchDestination').addEventListener('input', function() {
    this.style.borderColor = '';
});

/* ==================== 热门标签点击 ==================== */
document.querySelectorAll('.hot-tag').forEach(btn => {
    btn.addEventListener('click', function() {
        const dest = this.getAttribute('data-dest');
        document.getElementById('searchDestination').value = dest;
        openGuide(dest);
    });
});

/* ==================== 景点卡片「查看攻略」按钮 ==================== */
document.querySelectorAll('.btn-guide').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        openGuide(this.getAttribute('data-dest'));
    });
});

/* ==================== 景点卡片整体点击 ==================== */
document.querySelectorAll('.spot-card').forEach(card => {
    card.addEventListener('click', function() {
        openGuide(this.getAttribute('data-dest'));
    });
});

/* ==================== 导航栏滚动效果 ==================== */
const navbar = document.querySelector('.navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.12)';
        backToTop.classList.add('show');
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ==================== 导航高亮 ==================== */
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
            navLinks.forEach(l => {
                l.classList.remove('active');
                if (l.getAttribute('href') === `#${id}`) l.classList.add('active');
            });
        }
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

/* ==================== 移动端汉堡菜单 ==================== */
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    hamburger.classList.toggle('active');
});

/* ==================== 平滑滚动 ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
        }
    });
});

/* ==================== 轮播图 ==================== */
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function startAutoPlay() { slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000); }
function stopAutoPlay()  { clearInterval(slideInterval); }

nextBtn.addEventListener('click', () => { stopAutoPlay(); showSlide(currentSlide + 1); startAutoPlay(); });
prevBtn.addEventListener('click', () => { stopAutoPlay(); showSlide(currentSlide - 1); startAutoPlay(); });
dots.forEach((dot, i) => dot.addEventListener('click', () => { stopAutoPlay(); showSlide(i); startAutoPlay(); }));

const slider = document.querySelector('.hero-slider');
slider.addEventListener('mouseenter', stopAutoPlay);
slider.addEventListener('mouseleave', startAutoPlay);

showSlide(0);
startAutoPlay();

/* ==================== 数字计数动画 ==================== */
const counters = document.querySelectorAll('.counter');
let counted = false;
const statsSection = document.querySelector('.stats-section');

function animateCounters() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const inc = Math.ceil(target / 150);
        const timer = setInterval(() => {
            count = Math.min(count + inc, target);
            counter.innerText = count.toLocaleString();
            if (count >= target) clearInterval(timer);
        }, 10);
    });
}

if (statsSection) {
    new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !counted) {
            animateCounters();
            counted = true;
        }
    }, { threshold: 0.5 }).observe(statsSection);
}

/* ==================== 联系表单 ==================== */
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('感谢您的留言！我们会在1个工作日内与您联系。');
        contactForm.reset();
    });
}

/* ==================== 订阅表单 ==================== */
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        alert(`订阅成功！最新旅行资讯将发送到 ${email}`);
        newsletterForm.reset();
    });
}

/* ==================== 预订按钮 ==================== */
document.querySelectorAll('.btn-book').forEach(btn => {
    btn.addEventListener('click', function() {
        const title = this.closest('.package-card').querySelector('h3').textContent;
        alert(`您已选择「${title}」\n请登录账号完成预订！`);
    });
});

console.log('🌍 探索世界旅游网站加载完成！');
