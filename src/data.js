// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: [
        { key: "frontPage", label: "Front Page", id: "#frontPage" },
        {
          key: "ultimateProduct",
          label: "Ultimate Product",
          id: "#ultimateProduct",
        },
        { key: "gameCenter", label: "Game Center", id: "#gameCenter" },
        {
          key: "technicalExcellence",
          label: "Technical Excellence",
          id: "#technicalExcellence",
        },
        {
          key: "serviceAdvantages",
          label: "Service Advantages",
          id: "#serviceAdvantages",
        },
        { key: "templateCase", label: "Template Case", id: "#templateCase" },
        {
          key: "businessCooperation",
          label: "Business Cooperation",
          id: "#businessCooperation",
        },
      ],
      link: {
        title: "Demo entrance",
      },
      slider1: [
        {
          title: "Multi-language, multi-currency",
          description:
            "Build the strongest package network system in the industry",
        },
        {
          title: "Support multiple languages",
          description: "Support multiple platforms",
        },
      ],
      slider: [
        {
          title: "Original boutique customization",
          item1: "Original product creation",
          desc1:
            "PC, APP, H5 three-terminal products are purely natively built, with exquisite design and extremely smooth experience",
          item2: "Theme style customization",
          desc2:
            "Customize the platform's theme style according to industry users and platform target user groups",
          item3: "Exclusive brand production",
          desc3:
            " The industry's senior design team tailors the brand LOGO to comprehensively enhance the brand image",
          item4: "Rich theme templates",
          desc4:
            "Over a thousand payment interfaces, fast deposit and withdrawal, withdrawal within seconds",
        },
        {
          title:
            "Over a thousand payment interfaces, fast deposit and withdrawal, withdrawal within seconds",
          item1: "USDT digital currency trading",
          desc1:
            "24-hour trading is not subject to bank supervision, stable prices and no upper limit on transactions",
          item2: "Proxy storage function",
          desc2:
            " Super intelligent risk control system, risk control rules are ready to use, easy to prevent fraud",
          item3: "Exclusive discount channels",
          desc3:
            "Exclusive high-quality payment channels, low fees, and ultra-safety",
          item4: "Super convenient deposit and withdrawal",
          desc4:
            "Over a thousand payment interfaces, fast deposit and withdrawal, withdrawal within seconds",
        },
        {
          title: "Stable backend system",
          item1: "Agent Team Model",
          desc1:
            "Unique agency organization management and settlement management, clear at a glance",
          item2: "Proxy storage function",
          desc2:
            "Agents recharge for players, and they can play immediately after recharging without waiting",
          item3: "Big data analysis report",
          desc3:
            "Fully automatic data analysis, report analysis, and platform operation with confidence",
          item4: "Customize offer templates",
          desc4:
            "The backend system has multiple types of promotional activities built in, and you can go online by defining the data",
        },
        {
          title: " Powerful defense system",
          item1: "Domain name hijacking prevention",
          desc1:
            "Anti-hijacking covers multiple devices to ensure the security of the platform, users and funds",
          item2: "Super Intelligent Risk Control",
          desc2:
            "Super intelligent risk control system, risk control rules are ready to use, easy to prevent fraud",
          item3: "Super intelligent risk control system",
          desc3:
            "A team of more than 100 frontline experts to ensure maximum business and data security",
          item4: "Data Recovery",
          desc4:
            "Three-backup redundant system in two locations, three-level disaster recovery, virus, accidental deletion, abnormality and failure, etc., recovery in seconds",
        },
      ],
      newslider: [
        {
          title: "",
          desc: "We provide industry-leading Crown Sports, Sabah Sports, CMD Sports, SABA Sports, NBB Sports, IM Sports, AG Sports, BB Sports, SBO Sports, ESB Sports, TF Sports, and AI Sports, presenting players with the highest odds and the smoothest betting experience. Sports betting, no video is not exciting. DOING package network provides the most comprehensive and high-definition event videos covering the entire network, customer diversion, customer retention, omnipotent",
        },
        {
          title: "",
          desc: "ICG Electronics, PP Electronics, HC Electronics, FC Electronics, FG Electronics, BNG Electronics, MG Electronics, PG Electronics, CQ9 Electronics, PT Electronics, BB Electronics, SW Electronics, AG Electronics, PS Electronics, RSG Electronics, JOKER Electronics, JILI Electronics, MW Electronics, Rich88 Electronics, KA Electronics, JDB Electronics, GNS Electronics, etc. have always been the hottest game suppliers in the industry. DOING Baowang has joined hands with many manufacturers to help you create your own electronic entertainment platform as quickly as possible, with hundreds of games for users to choose from.",
        },
        {
          title: "",
          desc: "Kaiyuan chess and cards, JDB chess and cards, Leyou chess and cards, CQ9 chess and cards, MP chess and cards, KX chess and cards, whether self-developed or partnered, exquisite picture quality and smooth experience will help you establish a good reputation and create a boutique platform",
        },
        {
          title: "",
          desc: "The most comprehensive lottery types, the most stable prize sources, the richest ways to play, the most stable and fastest lottery results are the best ways for you to attract new customers. We also provide self-developed lottery tickets to make your platform more powerful.",
        },
        {
          title: "",
          desc: "We provide the best live venue games in the industry, including AG Live, AB Live, BB Live, BG Live, DG Live, EBET Live, EVO Live, EZUGI Live, MG Live, SA Live, WM Live, PP Live, etc., with exquisite graphics and fair wins and losses. We use trust to help you win the market and win the trust of users with word of mouth.",
        },
        {
          title: "",
          desc: "ESB E-sports, the industry's top e-sports event platform partner, provides the latest and most popular e-sports event predictions, as well as the most popular e-sports videos and the latest e-sports information services to help you build your brand and increase popularity",
        },
      ],
      cardData: [
        {
          title: "Top-level computer room",
          desc: "Top-level server hardware configuration provides data security and reliability. RESTful API enables storage and access anywhere on the Internet",
        },
        {
          title: "Safety protection",
          desc: "Self-developed CDN high-defense system, 360-degree security protection around the clock, providing 1T ultra-large protection bandwidth, effectively defending against T-level DDOS attacks and millions of CC concurrent attacks",
        },
        {
          title: "Dedicated lines",
          desc: "Dedicated fiber optic lines directly connect to important business markets such as the mainland, the Philippines, Hong Kong, Taiwan, and Japan. High-speed networks are spread across Southeast Asia, super fast and stable",
        },
        {
          title: "Anti-hijacking system",
          desc: "Self-developed anti-hijacking browser and underlying authentication algorithm, the communication link uses military-grade encryption algorithm to ensure the security and reliability of client and server communication",
        },
      ],
      cardData2: [
        {
          title: "Industry reputation is trustworthy",
          desc: "Select six major brand venues to create a new entertainment experience and make your brand stand out",
        },
        {
          title: "Exclusive service, worry-free and fast",
          desc: "Exclusive VIP service team, expert one-on-one guidance operation, personalized service, we are more professional",
        },
        {
          title: "Unique cooperation model",
          desc: "DOING Network innovates cooperation mode, customized layout, professional construction, 7/24 all year round without maintenance, meticulously crafted to create your exclusive brand",
        },
        {
          title: "Innovation and financial security",
          desc: "Innovation leads the industry technology + financial services, making the platform business and funds",
        },
        {
          title: "Professional technical team for worry-free operation",
          desc: "High-standard front-end and back-end full customer customization, high-quality customer service, upgraded",
        },
        {
          title: "Comprehensive support and assistance",
          desc: "DOING provides a large amount of support funds for the initial establishment of the platform, helping ",
        },
      ],
      busniess: [
        {
          heading: "High Security",
          desc: "We provide top-notch security solutions for your data.",
        },
        {
          heading: "Fast Performance",
          desc: "Our platform ensures lightning-fast performance across all devices.",
        },
        {
          heading: "Global Accessibility",
          desc: "Access your data from anywhere around the globe with ease.",
        },
        {
          heading: "User Friendly",
          desc: "Our intuitive interface ensures ease of use for all users.",
        },
        {
          heading: "24/7 Support",
          desc: "We provide around-the-clock support for all your needs.",
        },
      ],
      btn: [
        {
          title: "Contact Business",
        },
      ],
    },
  },
  zh: {
    translation: {
      navbar: [
        { key: "frontPage", label: "首页", id: "#frontPage" },
        { key: "ultimateProduct", label: "终极产品", id: "#ultimateProduct" },
        { key: "gameCenter", label: "游戏中心", id: "#gameCenter" },
        {
          key: "technicalExcellence",
          label: "技术卓越",
          id: "#technicalExcellence",
        },
        {
          key: "serviceAdvantages",
          label: "服务优势",
          id: "#serviceAdvantages",
        },
        { key: "templateCase", label: "模板案例", id: "#templateCase" },
        {
          key: "businessCooperation",
          label: "商务合作",
          id: "#businessCooperation",
        },
      ],
      link: {
        title: "演示入口",
      },
      slider1: [
        {
          title: "多语言，多货币",
          description: " 建立行业中最强大的包裹网络系统",
        },
        {
          title: "支持多种语言",
          description: "支持多种平台",
        },
      ],
      slider: [
        {
          title: "原始精品定制",
          item1: "原始产品创建",
          desc1: "PC、APP、H5三端产品纯粹本地构建，设计精美，体验极其流畅",
          item2: "主题风格定制",
          desc2: "根据行业用户和平台目标用户群体定制平台的主题风格",
          item3: "专属品牌制作",
          desc3: "行业资深设计团队量身定制品牌LOGO，全面提升品牌形象",
          item4: "丰富的主题模板",
          desc4: "超过一千种支付接口，快速存取款，秒内提款",
        },
        {
          title: "超过一千种支付接口，快速存取款，秒内提款",
          item1: "USDT数字货币交易",
          desc1: "24小时交易不受银行监管，价格稳定，交易无上限",
          item2: "代理存储功能",
          desc2: "超智能风险控制系统，风险控制规则随时可用，轻松防止欺诈",
          item3: "独家折扣通道",
          desc3: "独特的优质支付通道，低费用，超安全",
          item4: "超级方便的存取款",
          desc4: "超过一千种支付接口，快速存取款，秒内提款",
        },
        {
          title: "稳定的后台系统",
          item1: "代理团队模型",
          desc1: "独特的代理组织管理和结算管理，一目了然",
          item2: "代理存储功能",
          desc2: "代理为玩家充值，充值后即可立即游戏，无需等待",
          item3: "大数据分析报告",
          desc3: "全面自动化的数据分析，报告分析，安心运营平台",
          item4: "自定义优惠模板",
          desc4: "后台系统内置多种类型的促销活动，可通过定义数据上线",
        },
        {
          title: "强大的防御系统",
          item1: "域名劫持预防",
          desc1: "反劫持覆盖多种设备，确保平台、用户和资金的安全",
          item2: "超智能风险控制",
          desc2: "超智能风险控制系统，风险控制规则随时可用，轻松防止欺诈",
          item3: "超智能风险控制系统",
          desc3: "由100多名前线专家组成的团队，确保最大程度的业务和数据安全",
          item4: "数据恢复",
          desc4:
            "在两个位置的三重备份冗余系统，三级灾难恢复，病毒、意外删除、异常和故障等，秒内恢复",
        },
      ],
      newslider: [
        {
          title: "",
          desc: "我们提供行业领先的Crown Sports、Sabah Sports、CMD Sports、SABA Sports、NBB Sports、IM Sports、AG Sports、BB Sports、SBO Sports、ESB Sports、TF Sports和AI Sports，为玩家提供最高的赔率和最流畅的投注体验。体育博彩，没有视频就没有乐趣。DOING包网络提供最全面和高清的赛事视频，涵盖整个网络，客户分流，客户留存，万能",
        },
        {
          title: "",
          desc: "ICG电子、PP电子、HC电子、FC电子、FG电子、BNG电子、MG电子、PG电子、CQ9电子、PT电子、BB电子、SW电子、AG电子、PS电子、RSG电子、JOKER电子、JILI电子、MW电子、Rich88电子、KA电子、JDB电子、GNS电子等，一直以来都是行业内最热门的游戏供应商。DOING宝网与众多制造商携手合作，帮助您尽快创建自己的电子娱乐平台，提供数百款供用户选择的游戏。",
        },
        {
          title: "",
          desc: "凯元棋牌、JDB棋牌、乐游棋牌、CQ9棋牌、MP棋牌、KX棋牌，无论是自开发还是合作，精致的画质和流畅的体验将帮助您建立良好的声誉，创建精品平台。",
        },
        {
          title: "",
          desc: "最全面的彩票种类，最稳定的奖源，最丰富的玩法，最稳定和最快的彩票结果是您吸引新客户的最佳方式。我们还提供自开发的彩票，使您的平台更具竞争力。",
        },
        {
          title: "",
          desc: "我们提供行业内最好的现场场馆游戏，包括AG Live、AB Live、BB Live、BG Live、DG Live、EBET Live、EVO Live、EZUGI Live、MG Live、SA Live、WM Live、PP Live等，拥有精致的图形和公平的输赢。我们以信任帮助您赢得市场，并用口碑赢得用户的信任。",
        },
        {
          title: "",
          desc: "ESB电子竞技，行业顶尖的电子竞技赛事平台合作伙伴，提供最新和最热门的电子竞技赛事预测，以及最受欢迎的电子竞技视频和最新的电子竞技信息服务，帮助您建立品牌，提高知名度。",
        },
      ],
      cardData: [
        {
          title: "顶级计算机机房",
          desc: "顶级服务器硬件配置提供数据安全和可靠性。RESTful API使数据存储和访问无处不在。",
        },
        {
          title: "安全保护",
          desc: "自开发的CDN高防系统，提供360度安全保护，全天候提供1T超大防护带宽，有效抵御T级DDOS攻击和数百万CC并发攻击。",
        },
        {
          title: "专线",
          desc: "专用光纤线路直接连接到大陆、菲律宾、香港、台湾和日本等重要商业市场。高速网络覆盖东南亚，超快且稳定。",
        },
        {
          title: "反劫持系统",
          desc: "自开发的反劫持浏览器和底层认证算法，通信链路使用军用级加密算法，确保客户端与服务器通信的安全性和可靠性。",
        },
      ],
      cardData2: [
        {
          title: "行业声誉值得信赖",
          desc: "选择六大品牌场馆，创造全新娱乐体验，让您的品牌脱颖而出。",
        },
        {
          title: "专属服务，无忧快速",
          desc: "专属VIP服务团队，专家一对一指导运营，个性化服务，我们更专业。",
        },
        {
          title: "独特的合作模式",
          desc: "DOING网络创新合作模式，定制布局，专业建设，全年无休7/24无维护，精心打造您的专属品牌。",
        },
        {
          title: "创新与金融安全",
          desc: "创新引领行业技术+金融服务，实现平台业务和资金的结合。",
        },
        {
          title: "专业技术团队，运营无忧",
          desc: "高标准的前端和后端全客户定制，高质量的客户服务，升级版。",
        },
        {
          title: "全面支持与帮助",
          desc: "DOING为平台初始建立提供大量支持资金，助力您的发展。",
        },
      ],
      business: [
        {
          heading: "高安全性",
          desc: "我们为您的数据提供一流的安全解决方案。",
        },
        {
          heading: "快速性能",
          desc: "我们的平台确保所有设备上的闪电般快速性能。",
        },
        {
          heading: "全球可访问性",
          desc: "轻松从全球任何地方访问您的数据。",
        },
        {
          heading: "用户友好",
          desc: "我们直观的界面确保所有用户都能轻松使用。",
        },
        {
          heading: "全天候支持",
          desc: "我们提供全天候的支持，以满足您的所有需求。",
        },
      ],
      btn: [
        {
          title: "联系商务",
        },
      ],
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "zh",
  fallbackLng: "zh",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
