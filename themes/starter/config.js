/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '房仲哖大師', // 英雄区文字
  STARTER_HERO_TITLE_2: '找一間房子，過妳想過的日子', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '新案上架', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://master.ponien.com/newcase', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '大師精選', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://master.ponien.com/chosen', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/banner01.webp', // 網站主視覺圖

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: '',
  STARTER_NAV_BUTTON_1_URL: '',

  STARTER_NAV_BUTTON_2_TEXT: '',
  STARTER_NAV_BUTTON_2_URL: '',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '', // 特性
  STARTER_FEATURE_TEXT_1: '房仲哖大師', // 特性
  STARTER_FEATURE_TEXT_2:
    '，全方位的仲介服務，您的房產顧問。 ', // 特性

  STARTER_FEATURE_1_TITLE_1: '房屋銷售', // 特性1
  STARTER_FEATURE_1_TEXT_1: '３００人團隊聯賣，為您最快找到好買家', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://master.ponien.com/onsale', // 特性1

  STARTER_FEATURE_2_TITLE_1: '案件租賃', // 特性2
  STARTER_FEATURE_2_TEXT_1: '買屋服務的文案買屋服務的文案買屋服務的文案買屋服務的文案', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    '/', // 特性2

  STARTER_FEATURE_3_TITLE_1: '投資法規', // 特性3
  STARTER_FEATURE_3_TEXT_1: '資產配置投資標的', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '/', // 特性3

  STARTER_FEATURE_4_TITLE_1: '加入大師', // 特性4
  STARTER_FEATURE_4_TEXT_1: '期待找到好夥伴與我一起前進', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: '/', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '選擇哖大師做妳的房產顧問',
  STARTER_ABOUT_TEXT:
    '找一個替妳著想的房產顧問，以客戶的利益為優先。 <br /> <br /> 日子久了妳會發現，哖大師總能替妳做到最好',
  STARTER_ABOUT_BUTTON_TEXT: '認識我',
  STARTER_ABOUT_BUTTON_URL: 'https://www.notion.so/nccu520/117304513d0580b7b6b7d76dbfd2a857?pvs=4#118304513d05805ab372d7ff9dbe651c',
  STARTER_ABOUT_IMAGE_1: 'https://unsplash.com/photos/a-street-with-buildings-on-either-side-0nSLgZFVdvk',
  STARTER_ABOUT_IMAGE_2: 'https://images.unsplash.com/photo-1532795986-dbef1643a596?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
  STARTER_ABOUT_TIPS_1: '6億+業績達成',
  STARTER_ABOUT_TIPS_2: '群洋團隊',
  STARTER_ABOUT_TIPS_3: '業績屢破新高',

  // 首页价格区块
  STARTER_PRICING_ENABLE: false, // 价格区块开关
  STARTER_PRICING_TITLE: '精選案件',
  STARTER_PRICING_TEXT_1: '為您精選的專約委託',
  STARTER_PRICING_TEXT_2:
    '哖大師團隊獨賣,精選案件找尋特別的妳',

  STARTER_PRICING_1_TITLE: '案件範例一',
  STARTER_PRICING_1_PRICE: '5280',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '萬元',
  STARTER_PRICING_1_HEADER: '案件特色',
  STARTER_PRICING_1_FEATURES: '國泰建設好口碑,四房三衛雙車位,近捷運公車站', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '點我了解',
  STARTER_PRICING_1_BUTTON_URL:
    '/',

  STARTER_PRICING_2_TAG: '精選專案',
  STARTER_PRICING_2_TITLE: '基础版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含入门版,项目源码,内部社群,技术咨询,SEO优化', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '高级版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含基础版,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

   // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '不只是銷售',
  STARTER_TESTIMONIALS_TEXT_1: '一定是特別的緣分',
  STARTER_TESTIMONIALS_TEXT_2:
    '最好的廣告，莫過於客戶的口碑。呈現最真實的客戶評價，讓您更了解哖大師的服務。相信這些分享，一定能給您帶來更多的幫助',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '「感謝阿哖在這段期間的協助，從一開始的委託到最後順利成交，您都非常用心。特別是您在行銷房屋上很有創意，製作的影片非常吸引人，成功吸引了許多潛在買家，讓我對您的專業感到非常佩服。未來有機會一定會再介紹朋友給您。」 ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '老古',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '傳產業者',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '「謝謝哖大師，多虧了您的幫忙，我終於買到夢想中的房子了！從一開始看屋到最後的簽約，您都非常有耐心，而且您對區域的熟悉度很高，幫我找到最適合我的社區，還幫我談到一個很不錯的價格，讓我省了很多心力。真的很感謝您！」',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '鄭先生',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '大學老師',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '「阿哖，我真的不知道該怎麼表達對您的感謝。在找房子的過程中，我遇到了很多困難，但多虧了您的幫助，我終於找到了屬於我的家。您不僅是我們的房仲，更是我們的朋友。謝謝您！」',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Boni',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '金融業',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '感谢提供这么好的项目哈哈 之前一直不知道怎么部署(别的项目好难好复杂)这个相对非常简单 新手非常友好哦',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'AI资源分享 Blog',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
    },
  
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '關於房仲業務',
  STARTER_FAQ_TEXT_1: '你認識那一種房仲人員呢?',
  STARTER_FAQ_TEXT_2: '阿哖了解，買房是人生大事。我會站在您的角度，為您量身打造最適合的購屋方案。無論您是首次購屋的新手，還是經驗豐富的投資者，大師房屋都能提供您最專業的服務。您的需求，就是我的目標。',

  STARTER_FAQ_1_QUESTION: ' 房仲只會介紹貴的房子',
  STARTER_FAQ_1_ANSWER:
    '「我們的服務是為您量身打造，會根據您的預算、地點、坪數等需求，推薦最適合您的房源。我們不是要賣出最貴的房子，而是要幫助您找到最適合您的家。」',

  STARTER_FAQ_2_QUESTION: '房仲只在乎成交，不會關心客戶的感受',
  STARTER_FAQ_2_ANSWER:
    '「我們不僅是您的房產顧問，更是您的夥伴。我們關心您的需求，希望您能找到一個滿意的家。成交只是過程，您的滿意才是我們的目標。」',

  STARTER_FAQ_3_QUESTION: '找房仲買房會花很多仲介費',
  STARTER_FAQ_3_ANSWER:
    '「仲介費是根據交易金額來計算的，我們會協助您辦理相關手續，節省您的時間和精力，相較於您自行處理，往往能獲得更優惠的條件。」',

  STARTER_FAQ_4_QUESTION: '買賣房屋不複雜，自己處理就好',
  STARTER_FAQ_4_ANSWER:
    '「買賣房屋涉及許多法律程序和細節，若處理不當，容易產生糾紛。我們擁有豐富的經驗，能協助您順利完成交易，保障您的權益。」',

  // 团队成员区块
  STARTER_TEAM_ENABLE: false, // 团队成员区块开关
  STARTER_TEAM_TITLE: '誠徵隊友',
  STARTER_TEAM_TEXT_1: '以下是我需要的隊友',
  STARTER_TEAM_TEXT_2:
    '人生旅程像一個闖關遊戲，希望我能是妳同行的戰友!誠徵下列角色人物',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg?table=collection&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&width=100&cache=v2',
      STARTER_TEAM_ITEM_NICKNAME: '戰士',
      STARTER_TEAM_ITEM_DESCRIPTION: '能在每個據點站一天的人'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: '僧侶',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
      {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: '勇士',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: '美工魔法師',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '',
  STARTER_BLOG_COUNT: 6, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '近期更新',
  STARTER_BLOG_TEXT_2:
    '為您提供新的案件以及重要資訊,看更多案件請點擊網站主選單的「銷售案件」',

  // 联系模块
  STARTER_CONTACT_ENABLE: false, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，福建',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'mail@tangly1024.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/yfctc7', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '找一間房子，過你想過的日子',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '線上資源',
      LINK_GROUP: [
        { TITLE: '內政部實登查詢', URL: 'https://lvr.land.moi.gov.tw/' },
        { TITLE: '地籍圖資查詢', URL: 'https://easymap.land.moi.gov.tw/Home' },
        {
          TITLE: '土增稅試算',
          URL: 'https://www.etax.nat.gov.tw/etwmain/etw158w/51'
        },
        {
          TITLE: '契稅試算',
          URL: 'https://www.etax.nat.gov.tw/etwmain/etw158w/53'
        }       
      ]
    },
    {
      TITLE: '主題專欄',
      LINK_GROUP: [
        {
          TITLE: '好書推薦',
          URL: '/gbook'
        },
        {
          TITLE: '二',
          URL: '/'
        },
        { TITLE: '三', URL: '/' }
      ]
    },
    {
      TITLE: '建置區三',
      LINK_GROUP: [
        {
          TITLE: '三',
          URL: '/'
        },
        {
          TITLE: '三',
          URL: '/'
        },
        {
          TITLE: '三',
          URL: '/'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隱私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律聲明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '團隊故事',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '頁面無回應。',
  STARTER_404_TEXT: '抱歉！頁面可能遺失或產生錯誤。',
  STARTER_404_BACK: '返回首頁',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '專注在您的需求',
  STARTER_CTA_TITLE_2: '即刻預約哖大師~',
  STARTER_CTA_DESCRIOTN:
    '我們了解每個人對家的渴望都不同。告訴阿哖!!您的需求，我將為您提供最完善的房產服務。',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    'https://forms.gle/nEbEYANNLqz8Ux28A',
  STARTER_CTA_BUTTON_TEXT: '點擊預約',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://master.ponien.com/', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
