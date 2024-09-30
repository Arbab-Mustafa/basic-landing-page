// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: [
        { key: "frontPage", label: "Front Page" },
        { key: "ultimateProduct", label: "Ultimate Product" },
        { key: "gameCenter", label: "Game Center" },
        { key: "technicalExcellence", label: "Technical Excellence" },
        { key: "serviceAdvantages", label: "Service Advantages" },
        { key: "templateCase", label: "Template Case" },
        { key: "businessCooperation", label: "Business Cooperation" },
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
    },
  },
  zh: {
    translation: {
      navbar: [
        { key: "frontPage", label: "首页" },
        { key: "ultimateProduct", label: "终极产品" },
        { key: "gameCenter", label: "游戏中心" },
        { key: "technicalExcellence", label: "技术卓越" },
        { key: "serviceAdvantages", label: "服务优势" },
        { key: "templateCase", label: "模板案例" },
        { key: "businessCooperation", label: "商务合作" },
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
