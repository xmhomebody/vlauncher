import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowLeft,
  ArrowRight,
  ArrowSquareOut,
  Bell,
  BookOpenText,
  CalendarBlank,
  CaretDown,
  CaretRight,
  ChatCircleText,
  CheckCircle,
  Cloud,
  Compass,
  CopySimple,
  CurrencyDollar,
  EnvelopeSimple,
  FileText,
  GlobeHemisphereWest,
  Heart,
  ImageSquare,
  LinkSimple,
  Leaf,
  Lightbulb,
  ListChecks,
  MagnifyingGlass,
  MapPin,
  Monitor,
  Palette,
  PaperPlaneTilt,
  RocketLaunch,
  ShareNetwork,
  ShieldCheck,
  Sparkle,
  Star,
  SquaresFour,
  TrendUp,
  UserCircle,
  UsersThree,
  UploadSimple,
  VideoCamera,
} from "@phosphor-icons/react";
import firstRevenueShowcase from "./assets/firstrevenue-app-showcase.png";
import firstRevenueMark from "./assets/firstrevenue-mark.jpg";
import founderAvatar from "./assets/sebastian-avatar.jpg";
import makerFeaturedImage from "./assets/maker-journal-featured.png";
import makerSketchesImage from "./assets/maker-journal-sketches.png";
import vlauncherCircleLogo from "./assets/vlauncher-circle-logo.png";

const translations = {
  en: {
    locale: "en",
    language: "ZH",
    languageLabel: "Switch to Chinese",
    nav: { discover: "Discover", weekly: "Weekly Launch", products: "Products", makers: "Makers", learn: "Learn", login: "Log in", launch: "Launch a product" },
  },
  zh: {
    locale: "zh-CN",
    language: "英文",
    languageLabel: "切换为英文",
    nav: { discover: "发现", weekly: "每周发布", products: "产品", makers: "创作者", learn: "学习中心", login: "登录", launch: "发布产品" },
  },
};

function LanguageSwitch({ language, onToggle }) {
  const text = translations[language];
  return <button className="language-switch" type="button" onClick={onToggle} aria-label={text.languageLabel}>{text.language}</button>;
}

function VLauncherLogo() {
  return <img className="brand-logo-image" src={vlauncherCircleLogo} alt="" aria-hidden="true" />;
}

function SiteHeader({ language, onToggle, active, onSearch }) {
  const text = translations[language];
  const { nav } = text;
  return <header className="site-header">
    <a className="brand" href="/" aria-label="VLauncher home"><span className="brand-mark"><VLauncherLogo /></span><span>VLauncher</span><em>{language === "zh" ? "独立产品社区" : "Independent product community"}</em></a>
    <nav className="main-nav" aria-label="Primary navigation"><a className={active === "discover" ? "active-nav" : ""} href="/#discover">{nav.discover}</a><a className={active === "weekly" ? "active-nav" : ""} href="/weekly-launch">{nav.weekly}</a><a className={active === "products" ? "active-nav" : ""} href="/products">{nav.products}</a><a className={active === "makers" ? "active-nav" : ""} href="/makers">{nav.makers}</a><a className={active === "learn" ? "active-nav" : ""} href="/learn">{nav.learn}</a></nav>
    <div className="header-actions"><button className="icon-button" aria-label={language === "zh" ? "搜索" : "Search"} onClick={onSearch}><MagnifyingGlass /></button><LanguageSwitch language={language} onToggle={onToggle} /><a className="login-link" href="/#launch">{nav.login}</a><a className={`header-cta ${active === "launch" ? "active" : ""}`} href="/launch">{nav.launch}</a></div>
  </header>;
}

const products = [
  {
    name: "Mint List",
    description: "A calm task space that turns big plans into small, finishable steps.",
    creator: "mika.liu",
    replies: 12,
    votes: 82,
    tags: ["Productivity", "Planning"],
    Icon: CheckCircle,
    tone: "mint",
  },
  {
    name: "Cloud Notes",
    description: "A local-first writing app with instant sync, Markdown, and thoughtful search.",
    creator: "yun.studio",
    replies: 18,
    votes: 68,
    tags: ["Writing", "Notes"],
    Icon: Cloud,
    tone: "sky",
    href: "/startup/cloud-notes",
  },
  {
    name: "Blue Whale",
    description: "A focused home for independent podcasts, from first recording to loyal listeners.",
    creator: "bluewhale.team",
    replies: 15,
    votes: 61,
    tags: ["Audio", "Creators"],
    Icon: ChatCircleText,
    tone: "violet",
  },
  {
    name: "Slow Circle",
    description: "A private ritual journal for people who want more meaningful conversations.",
    creator: "wenwen",
    replies: 9,
    votes: 49,
    tags: ["Wellbeing", "Community"],
    Icon: Heart,
    tone: "coral",
  },
  {
    name: "Pebble Forms",
    description: "Build generous forms and collect the answers that actually help you decide.",
    creator: "form.workshop",
    replies: 7,
    votes: 42,
    tags: ["No-code", "Research"],
    Icon: FileText,
    tone: "aqua",
  },
  {
    name: "Soft Album",
    description: "A shared photo journal that gives everyday moments room to linger.",
    creator: "lighthouse",
    replies: 11,
    votes: 38,
    tags: ["Photography", "Family"],
    Icon: Palette,
    tone: "gold",
  },
  {
    name: "First Hello",
    description: "Write warmer product onboarding messages with a quiet AI writing partner.",
    creator: "hello.team",
    replies: 6,
    votes: 31,
    tags: ["AI", "Onboarding"],
    Icon: Sparkle,
    tone: "violet",
  },
  {
    name: "Nest Calendar",
    description: "A shared home calendar for routines, subscriptions, and the plans ahead.",
    creator: "nest.co",
    replies: 5,
    votes: 27,
    tags: ["Lifestyle", "Calendar"],
    Icon: ListChecks,
    tone: "mint",
  },
  {
    name: "Open Canvas",
    description: "An infinite whiteboard for teams who prefer to think together in one place.",
    creator: "open.studio",
    replies: 8,
    votes: 24,
    tags: ["Design", "Collaboration"],
    Icon: SquaresFour,
    tone: "rose",
  },
];

const featured = [
  { name: "Mint List", copy: "A calmer way to finish what matters.", Icon: CheckCircle, tone: "mint" },
  { name: "Cloud Notes", copy: "Write locally. Find everything fast.", Icon: Cloud, tone: "sky" },
  { name: "Blue Whale", copy: "A gentler workflow for indie podcasters.", Icon: ChatCircleText, tone: "violet" },
];

const topics = [
  ["Productivity", ListChecks, "18"],
  ["Writing", BookOpenText, "12"],
  ["Creative tools", Palette, "10"],
  ["Design", Compass, "8"],
  ["Developer tools", RocketLaunch, "6"],
  ["Lifestyle", Heart, "11"],
  ["Community", UsersThree, "7"],
  ["More", SquaresFour, "4"],
];

const notes = [
  ["Why I chose to make a slower product", "Building is not a sprint. I wanted a place for people who value a calmer way to get things done.", "by Wenwen · Slow Circle", "1,242 reads"],
  ["From user feedback to version two", "Every response is a small gift. Here is how I turned a messy beta into a clearer note-taking flow.", "by Yun · Cloud Notes", "986 reads"],
  ["An indie podcaster's first 1,000 hours", "Tools change, but the time spent listening to your audience is never wasted.", "by Blue Whale Studio", "713 reads"],
];

const directoryProducts = [
  { name: "FirstRevenue", description: "A guided web app that helps first-time founders earn their first money online.", creator: "sebastian.l", replies: 14, votes: 96, tags: ["Education", "SaaS & Tools"], Icon: CurrencyDollar, tone: "violet", href: "/startup/firstrevenue" },
  { name: "Focora", description: "A robust, all-in-one productivity tracker for goals, habits, and daily progress.", creator: "justin.hadinata", replies: 3, votes: 42, tags: ["Productivity", "SaaS & Tools"], Icon: Heart, tone: "coral" },
  { name: "TenThirty", description: "A calm AI routine coach for evening habits, delivered as a focused web app.", creator: "czarina.catambing", replies: 19, votes: 67, tags: ["Productivity", "AI & ML"], Icon: Sparkle, tone: "violet" },
  { name: "ORBII", description: "A browser-based safety assistant that keeps essential voice support close when you need it.", creator: "orbii.safety", replies: 29, votes: 84, tags: ["Security", "Health & Wellness"], Icon: ShieldCheck, tone: "gold" },
  { name: "StreamCalc", description: "Compare creator payouts across YouTube, Twitch, Kick, Spotify, and TikTok in seconds.", creator: "artzz.phone", replies: 7, votes: 39, tags: ["SaaS & Tools", "Fintech"], Icon: TrendUp, tone: "sky" },
  { name: "BuyingWindow", description: "Know who is ready to buy before they start looking, then meet them at the right moment.", creator: "victor.oluwaleke", replies: 8, votes: 31, tags: ["SaaS & Tools", "Marketing"], Icon: Compass, tone: "aqua" },
  { name: "BeartIMAGE", description: "Resize, convert, compress, watermark, and edit a whole batch of photos in your browser.", creator: "arthur.arthur", replies: 8, votes: 36, tags: ["Design Tools", "Photography"], Icon: Palette, tone: "gold" },
  { name: "Chiplab", description: "Give AI agents virtual hardware to build, test, and simulate without touching a real chip.", creator: "sohyeon.park", replies: 9, votes: 51, tags: ["AI & ML", "Developer Tools"], Icon: SquaresFour, tone: "ink" },
  { name: "Synthreel", description: "Turn a script into narrated video and schedule it to YouTube from one focused workflow.", creator: "cody.braden", replies: 8, votes: 45, tags: ["AI & ML", "Content Creation"], Icon: VideoCamera, tone: "coral" },
  { name: "StudyEaseHaven", description: "A gentle study companion for crafting comfort and focus into every note.", creator: "amru.elmassad", replies: 15, votes: 33, tags: ["Education", "Productivity"], Icon: BookOpenText, tone: "mint" },
  { name: "Paper Critters", description: "A safe 3D paper-toy studio where kids can make creative little worlds for free.", creator: "jr.fabito", replies: 8, votes: 28, tags: ["3D & AR/VR", "Design Tools"], Icon: Leaf, tone: "green" },
];

const productNamesZh = {
  "Mint List": "薄荷清单",
  "Cloud Notes": "观云笔记",
  "Blue Whale": "蓝鲸播客",
  "Slow Circle": "缓慢关系",
  "Pebble Forms": "砂砾表单",
  "Soft Album": "微光相册",
  "First Hello": "开场白",
  "Nest Calendar": "栖木日历",
  "Open Canvas": "无界画板",
  FirstRevenue: "首笔营收",
  Focora: "专注熊",
  TenThirty: "十点半",
  ORBII: "奥比",
  StreamCalc: "流算",
  BuyingWindow: "购买窗口",
  BeartIMAGE: "熊图像",
  Chiplab: "芯片实验室",
  Synthreel: "合成短片",
  StudyEaseHaven: "安心学习",
  "Paper Critters": "纸片小兽",
  InstaGroups: "社群组",
  QuietForm: "静表单",
  "NexoMind AI": "心智 AI",
  "TradingBox Pro": "交易盒 Pro",
  MineMarket: "内容矿场",
  Ploxto: "像素编辑",
};

const productLabel = (name, language) => language === "zh" ? (productNamesZh[name] ?? name) : name;

const directoryCategories = [
  "All products", "SaaS & Tools", "AI & ML", "Developer Tools", "Productivity", "Design Tools", "Marketing", "Analytics", "Education", "Security", "No-code Tools", "Fintech", "Collaboration", "E-commerce", "Content Creation", "Customer Support", "DevOps & Infrastructure", "HR & Recruiting", "Web3 & Crypto", "Health & Wellness", "Indie Making", "Micro-SaaS", "Bootstrapping", "Maker Tools", "Workflow Automation", "CRM & Sales", "Business Ops", "Legal & Compliance", "Personal Finance", "Social & Community", "Travel & Maps", "API Tools", "Database Tools", "CLI Tools", "Photography", "Video & Audio", "3D & AR/VR", "AI Writing",
];

const categoryTranslations = {
  "All products": "全部产品", "SaaS & Tools": "SaaS 与工具", "AI & ML": "人工智能与机器学习", "Developer Tools": "开发者工具", "Developer tools": "开发者工具", Productivity: "效率工具", "Design Tools": "设计工具", Marketing: "营销", Analytics: "数据分析", Education: "教育", Security: "安全", "No-code Tools": "无代码工具", Fintech: "金融科技", Collaboration: "协作", "E-commerce": "电商", "Content Creation": "内容创作", "Customer Support": "客户支持", "DevOps & Infrastructure": "开发运维与基础设施", "HR & Recruiting": "人力与招聘", "Web3 & Crypto": "Web3 与加密", "Health & Wellness": "健康与生活方式", "Indie Making": "独立创作", "Micro-SaaS": "微型 SaaS", Bootstrapping: "自力创业", "Maker Tools": "创作者工具", "Workflow Automation": "工作流自动化", "CRM & Sales": "客户关系与销售", "Business Ops": "业务运营", "Legal & Compliance": "法律与合规", "Personal Finance": "个人理财", "Social & Community": "社交与社区", "Travel & Maps": "旅行与地图", "API Tools": "API 工具", "Database Tools": "数据库工具", "CLI Tools": "命令行工具", Photography: "摄影", "Video & Audio": "视频与音频", "3D & AR/VR": "3D 与 AR/VR", "AI Writing": "AI 写作", Planning: "规划", Writing: "写作", Audio: "音频", Creators: "创作者", Wellbeing: "身心健康", Community: "社区", "No-code": "无代码", Research: "研究", Family: "家庭", AI: "人工智能", Onboarding: "产品引导", Lifestyle: "生活方式", Calendar: "日历", Design: "设计", Notes: "笔记", Sales: "销售", "Creative tools": "创意工具", More: "更多", "Artificial Intelligence": "人工智能",
};

const categoryLabel = (category, language) => language === "zh" ? (categoryTranslations[category] ?? category) : category;

const zhCopy = {
  "A calm task space that turns big plans into small, finishable steps.": "一个安静的任务空间，把宏大计划变成可完成的小步骤。",
  "A local-first writing app with instant sync, Markdown, and thoughtful search.": "一款本地优先的写作应用，支持即时同步、Markdown 与贴心搜索。",
  "A focused home for independent podcasts, from first recording to loyal listeners.": "独立播客的专注工作台，从第一次录音到积累忠实听众。",
  "A private ritual journal for people who want more meaningful conversations.": "为重视深度交流的人准备的私密仪式日记。",
  "Build generous forms and collect the answers that actually help you decide.": "构建友好的表单，收集真正有助于决策的回答。",
  "A shared photo journal that gives everyday moments room to linger.": "共享照片日记，为日常片刻留下驻足的空间。",
  "Write warmer product onboarding messages with a quiet AI writing partner.": "借助安静的 AI 写作伙伴，写出更温暖的产品引导文案。",
  "A shared home calendar for routines, subscriptions, and the plans ahead.": "用于日常、订阅与未来计划的共享家庭日历。",
  "An infinite whiteboard for teams who prefer to think together in one place.": "为喜欢在同一处协作思考的团队打造的无限白板。",
  "A calmer way to finish what matters.": "更从容地完成真正重要的事。",
  "Write locally. Find everything fast.": "本地写作，快速找到一切。",
  "A gentler workflow for indie podcasters.": "为独立播客准备的轻松工作流。",
  "Why I chose to make a slower product": "为什么我选择做一款慢一点的产品",
  "Building is not a sprint. I wanted a place for people who value a calmer way to get things done.": "创造不是冲刺。我想为重视从容完成事情的人留出一个空间。",
  "by Wenwen · Slow Circle": "作者：Wenwen · 缓慢关系",
  "1,242 reads": "阅读 1,242",
  "From user feedback to version two": "从用户反馈到第二个版本",
  "Every response is a small gift. Here is how I turned a messy beta into a clearer note-taking flow.": "每一条回应都是一份小礼物。这里记录了我如何把混乱的测试版变成更清晰的笔记流程。",
  "by Yun · Cloud Notes": "作者：Yun · 观云笔记",
  "986 reads": "阅读 986",
  "An indie podcaster's first 1,000 hours": "一位独立播客的第一个 1,000 小时",
  "Tools change, but the time spent listening to your audience is never wasted.": "工具会变，但花时间倾听听众永远不会浪费。",
  "by Blue Whale Studio": "作者：蓝鲸播客工作室",
  "713 reads": "阅读 713",
  "A guided web app that helps first-time founders earn their first money online.": "一款帮助首次创业者在线赚到第一笔收入的引导式 Web 应用。",
  "A robust, all-in-one productivity tracker for goals, habits, and daily progress.": "强大的全能效率追踪工具，管理目标、习惯与每日进展。",
  "A calm AI routine coach for evening habits, delivered as a focused web app.": "一款专注于晚间习惯的 AI 节奏教练，以轻量 Web 应用的形式提供陪伴。",
  "A hands-free safety companion that keeps essential voice support close when you need it.": "需要时让关键语音支持触手可及的免手持安全伙伴。",
  "Compare creator payouts across YouTube, Twitch, Kick, Spotify, and TikTok in seconds.": "几秒内比较 YouTube、Twitch、Kick、Spotify 和 TikTok 的创作者收益。",
  "Know who is ready to buy before they start looking, then meet them at the right moment.": "在用户开始寻找前就识别购买意向，并在合适的时机与他们相遇。",
  "Resize, convert, compress, watermark, and edit a whole batch of photos in your browser.": "直接在浏览器中批量调整尺寸、转换、压缩、加水印和编辑照片。",
  "Give AI agents virtual hardware to build, test, and simulate without touching a real chip.": "为 AI 智能体提供虚拟硬件，用于构建、测试和模拟，无需真实芯片。",
  "Turn a script into narrated video and schedule it to YouTube from one focused workflow.": "将脚本转为旁白视频，并在一个专注工作流中发布到 YouTube。",
  "A gentle study companion for crafting comfort and focus into every note.": "温和的学习伙伴，让每一篇笔记都更舒适、更专注。",
  "A safe 3D paper-toy studio where kids can make creative little worlds for free.": "安全的 3D 纸玩具工作室，让孩子免费创造自己的小小世界。",
  "12 Best Directories to Submit Your Startup in 2026": "2026 年最值得提交创业项目的 12 个目录",
  "A founder-tested shortlist of startup directories worth your time this year.": "经过创始人验证、今年值得投入时间的创业项目目录精选。",
  "12 picks": "12 个精选",
  "9 Product Hunt alternatives for independent makers": "适合独立创作者的 9 个 Product Hunt 替代平台",
  "Ranked by audience fit, thoughtful feedback, and SEO value.": "按受众匹配度、优质反馈和 SEO 价值排序。",
  "9 picks": "9 个精选",
  "10 free places to launch your SaaS": "免费发布 SaaS 的 10 个平台",
  "A practical guide to more places early customers can find your work.": "让早期客户发现你的作品的实用平台指南。",
  "10 picks": "10 个精选",
  "12 launch platforms for AI startups, compared": "AI 创业项目的 12 个发布平台对比",
  "A simple comparison of audiences, costs, and launch-day momentum.": "一份关于受众、成本与发布日势能的简洁比较。",
  "10 launch platforms with useful backlinks": "带来有效外链的 10 个发布平台",
  "A creator-friendly list for products that need enduring discoverability.": "为需要长期可发现性的产品准备的创作者友好清单。",
  "10 launch platforms for B2B founders": "适合 B2B 创始人的 10 个发布平台",
  "Sorted for trust, reach, and the conversations that actually matter.": "按信任度、触达范围和真正重要的对话进行筛选。",
  "I shipped six ideas before finding the one people kept opening": "我发布了六个想法，才找到人们愿意持续打开的那个",
  "A candid look at how a maker moved from endless prototypes to a product with a weekly habit loop.": "坦诚记录一位创作者如何从无尽原型，走向拥有每周使用习惯的产品。",
  "Build log": "构建日志",
  "My quiet way of validating a product before I write the first line of code": "在写下第一行代码前，我如何安静地验证一个产品",
  "Three conversations, one sketchbook, and the small signal that helped a solo designer choose a direction.": "三次对话、一本速写本，以及帮助独立设计师选择方向的微小信号。",
  "Field notes": "田野笔记",
  "A small launch is still a launch: what changed after 18 early users replied": "小规模发布也是发布：18 位早期用户回复后发生了什么",
  "How a product designer turned individual feedback into a clearer first release.": "一位产品设计师如何把零散反馈转化为更清晰的首个版本。",
  "Launch diary": "发布日记",
  "I stopped chasing every channel and found a better first audience": "我不再追逐每个渠道，找到了更好的第一批用户",
  "The experiment that taught one maker to focus less on reach and more on a useful conversation.": "这个实验教会一位创作者少关注触达，多关注有价值的对话。",
  "The weekly review that keeps my side project from becoming another tab": "让我不把副业变成另一个标签页的每周复盘",
  "A lightweight ritual for finding the next useful thing to build without burning out.": "一种轻量仪式，帮助你不耗尽自己地找到下一件值得做的事。",
  "Practice": "实践",
  "What do you show someone before the product is ready?": "产品尚未准备好时，你会先向别人展示什么？",
  "18 replies": "18 条回复", "12 replies": "12 条回复", "26 replies": "26 条回复", "9 replies": "9 条回复",
  "How do you decide a launch is worth repeating?": "你如何判断一次发布值得再次尝试？",
  "What has made your user interviews more honest?": "什么让你的用户访谈变得更真诚？",
  "Share the one small workflow you now refuse to skip.": "分享一个你现在绝不愿跳过的小流程。",
  "Cloud Notes added offline export after 42 early-user requests.": "观云笔记在收到 42 位早期用户请求后加入了离线导出。",
  "Mint List opened its new shared planning flow to beta members.": "薄荷清单向测试成员开放了新的共享规划流程。",
  "Blue Whale reached its first 100 saved episodes.": "蓝鲸播客达到了首批 100 个已收藏节目。",
  "FirstRevenue published a transparent onboarding roadmap.": "首笔营收发布了透明的产品引导路线图。",
  "Pebble Forms made anonymous replies available for research teams.": "砂砾表单为研究团队提供了匿名回复功能。",
  "18m": "18 分钟", "1h": "1 小时", "3h": "3 小时", "5h": "5 小时", "7h": "7 小时",
  "A practical launch plan for your first 100 users": "面向前 100 位用户的实用发布计划",
  "A focused four-week sequence for finding early conversations, shaping a useful launch, and learning what to build next.": "一套聚焦的四周节奏，用于找到早期对话、打造有价值的发布，并学习下一步该做什么。",
  "Launch guide": "发布指南", "9 min read": "阅读约 9 分钟", "Start here": "从这里开始",
  "How to turn five customer calls into a clearer product brief": "如何把五通用户访谈变成更清晰的产品简报",
  "A lightweight synthesis ritual that makes patterns visible without pretending your first interviews are perfect research.": "一种轻量梳理方法，让模式浮现，不假装最初访谈已经是完美研究。",
  "Product craft": "产品方法", "7 min read": "阅读约 7 分钟", "Field-tested": "经过实践验证",
  "Shipping a Vite landing page that stays fast as it grows": "如何发布一个随着成长仍保持快速的 Vite 落地页",
  "A small technical checklist for routes, assets, code splitting, and the boring details that keep a launch page reliable.": "一份关于路由、资源、代码拆分及让发布页可靠运行的技术清单。",
  "Technical notes": "技术笔记", "11 min read": "阅读约 11 分钟", "Engineering": "工程实践",
  "The calm way to choose one acquisition channel": "从容选择一个获客渠道的方法",
  "A simple scorecard for deciding where your next ten hours of growth work will actually matter.": "一张简单评分表，帮助决定接下来十小时的增长工作应投入在哪里。",
  "Growth": "增长", "6 min read": "阅读约 6 分钟", "Practical": "实用方法",
  "Write product updates that give people a reason to return": "写出让用户愿意回来的产品更新",
  "A plain-language framework for release notes that make the change, the benefit, and the next action obvious.": "用清晰语言写发布说明，让改动、价值和下一步行动一目了然。",
  "5 min read": "阅读约 5 分钟", "Writing": "写作",
  "A small privacy checklist for your first product form": "为你的第一份产品表单准备的小型隐私清单",
  "Make data collection feel trustworthy before you add more tools, more fields, or more complicated compliance language.": "在添加更多工具、字段或复杂合规措辞之前，先让数据收集值得信任。",
  "8 min read": "阅读约 8 分钟",
  "All learning": "全部内容",
  "The smart team generator for PE teachers, coaches, and educators.": "为体育教师、教练与教育者打造的智能分组工具。",
  "A mature, self-serve SaaS with steady verified MRR and a loyal audience.": "成熟的自助式 SaaS，拥有稳定且经过验证的 MRR 和忠实用户。",
  "A private AI journal that turns everyday thinking into clarity.": "将日常思考转化为清晰洞察的私密 AI 日记。",
  "Proprietary algorithmic trading tools for independent traders.": "为独立交易者打造的专有算法交易工具。",
  "Short-form content workflows and training for solo operators.": "面向独立运营者的短内容工作流与培训。",
  "A browser-based photo editor with a beautiful and focused creative flow.": "拥有优雅、专注创作流程的浏览器照片编辑器。",
};

const copyFor = (value, language) => language === "zh" ? (zhCopy[value] ?? value) : value;

const weeklyDateLabel = (date, language) => {
  if (language !== "zh") return date;
  const months = { Jan: "1", Feb: "2", Mar: "3", Apr: "4", May: "5", Jun: "6", Jul: "7", Aug: "8", Sep: "9", Oct: "10", Nov: "11", Dec: "12" };
  const sameMonth = date.match(/^([A-Z][a-z]{2}) (\d+)–(\d+), (\d+)$/);
  if (sameMonth) return `${sameMonth[4]} 年 ${months[sameMonth[1]]} 月 ${sameMonth[2]}–${sameMonth[3]} 日`;
  const crossMonth = date.match(/^([A-Z][a-z]{2}) (\d+)–([A-Z][a-z]{2}) (\d+), (\d+)$/);
  return crossMonth ? `${crossMonth[5]} 年 ${months[crossMonth[1]]} 月 ${crossMonth[2]} 日–${months[crossMonth[3]]} 月 ${crossMonth[4]} 日` : date;
};

const shortDateLabel = (date, language) => {
  if (language !== "zh") return date;
  const months = { Jan: "1", Feb: "2", Mar: "3", Apr: "4", May: "5", Jun: "6", Jul: "7", Aug: "8", Sep: "9", Oct: "10", Nov: "11", Dec: "12" };
  const match = date.match(/^([A-Z][a-z]{2}) (\d+)$/);
  return match ? `${months[match[1]]} 月 ${match[2]} 日` : date;
};

const directoryGuides = [
  ["12 Best Directories to Submit Your Startup in 2026", "A founder-tested shortlist of startup directories worth your time this year.", "12 picks"],
  ["9 Product Hunt alternatives for independent makers", "Ranked by audience fit, thoughtful feedback, and SEO value.", "9 picks"],
  ["10 free places to launch your SaaS", "A practical guide to more places early customers can find your work.", "10 picks"],
  ["12 launch platforms for AI startups, compared", "A simple comparison of audiences, costs, and launch-day momentum.", "12 picks"],
  ["10 launch platforms with useful backlinks", "A creator-friendly list for products that need enduring discoverability.", "10 picks"],
  ["10 launch platforms for B2B founders", "Sorted for trust, reach, and the conversations that actually matter.", "10 picks"],
];

const learnArticles = [
  { title: "A practical launch plan for your first 100 users", excerpt: "A focused four-week sequence for finding early conversations, shaping a useful launch, and learning what to build next.", topic: "Launch guide", read: "9 min read", level: "Start here", Icon: RocketLaunch, featured: true },
  { title: "How to turn five customer calls into a clearer product brief", excerpt: "A lightweight synthesis ritual that makes patterns visible without pretending your first interviews are perfect research.", topic: "Product craft", read: "7 min read", level: "Field-tested", Icon: Lightbulb },
  { title: "Shipping a Vite landing page that stays fast as it grows", excerpt: "A small technical checklist for routes, assets, code splitting, and the boring details that keep a launch page reliable.", topic: "Technical notes", read: "11 min read", level: "Engineering", Icon: FileText },
  { title: "The calm way to choose one acquisition channel", excerpt: "A simple scorecard for deciding where your next ten hours of growth work will actually matter.", topic: "Growth", read: "6 min read", level: "Practical", Icon: TrendUp },
  { title: "Write product updates that give people a reason to return", excerpt: "A plain-language framework for release notes that make the change, the benefit, and the next action obvious.", topic: "Product craft", read: "5 min read", level: "Writing", Icon: BookOpenText },
  { title: "A small privacy checklist for your first product form", excerpt: "Make data collection feel trustworthy before you add more tools, more fields, or more complicated compliance language.", topic: "Technical notes", read: "8 min read", level: "Engineering", Icon: ShieldCheck },
];

const learnTopics = ["All learning", "Launch guide", "Product craft", "Technical notes", "Growth"];

const weeklyLaunches = [
  { date: "Aug 10–16, 2026", label: "This week", count: 48, winner: "Mint List", status: "Live", products: ["Mint List", "Cloud Notes", "Blue Whale", "Pebble Forms", "First Hello", "Open Canvas"], note: "The board is open for feedback, support, and first conversations." },
  { date: "Aug 03–09, 2026", count: 43, winner: "Cloud Notes", products: ["Cloud Notes", "Slow Circle", "Soft Album"], note: "A week of quieter tools and stronger early signals." },
  { date: "Jul 27–Aug 02, 2026", count: 51, winner: "First Hello", products: ["First Hello", "Mint List", "Open Canvas"], note: "Winning teams made their next step easy to understand." },
  { date: "Jul 20–26, 2026", count: 46, winner: "Blue Whale", products: ["Blue Whale", "Pebble Forms", "Nest Calendar"], note: "A good week for creative work that travels by word of mouth." },
  { date: "Jul 13–19, 2026", count: 39, winner: "Slow Circle", products: ["Slow Circle", "Cloud Notes", "Soft Album"], note: "Small groups, honest feedback, and steady momentum." },
  { date: "Jul 06–12, 2026", count: 44, winner: "Open Canvas", products: ["Open Canvas", "Mint List", "Blue Whale"], note: "New tools found their first collaborators." },
  { date: "Jun 29–Jul 05, 2026", count: 36, winner: "Pebble Forms", products: ["Pebble Forms", "Nest Calendar", "First Hello"], note: "The strongest launches started with a crisp problem statement." },
  { date: "Jun 22–28, 2026", count: 41, winner: "Nest Calendar", products: ["Nest Calendar", "Slow Circle", "Cloud Notes"], note: "A useful collection of products that make everyday routines lighter." },
];

const weeklyHallOfFame = [
  ["Mint List", "82 supports", CheckCircle, "mint"],
  ["Cloud Notes", "68 supports", Cloud, "sky"],
  ["Blue Whale", "61 supports", ChatCircleText, "violet"],
  ["Slow Circle", "49 supports", Heart, "coral"],
  ["Pebble Forms", "42 supports", FileText, "aqua"],
];

const makerStories = [
  { title: "I shipped six ideas before finding the one people kept opening", excerpt: "A candid look at how a maker moved from endless prototypes to a product with a weekly habit loop.", author: "Noah Hart", handle: "noah.builds", replies: 24, likes: 86, topic: "Build log", image: makerFeaturedImage, featured: true },
  { title: "My quiet way of validating a product before I write the first line of code", excerpt: "Three conversations, one sketchbook, and the small signal that helped a solo designer choose a direction.", author: "Maya Chen", handle: "maya.chen", replies: 17, likes: 61, topic: "Field notes", image: makerSketchesImage },
  { title: "A small launch is still a launch: what changed after 18 early users replied", excerpt: "How a product designer turned individual feedback into a clearer first release.", author: "Rae Okafor", handle: "rae.makes", replies: 11, likes: 48, topic: "Launch diary" },
  { title: "I stopped chasing every channel and found a better first audience", excerpt: "The experiment that taught one maker to focus less on reach and more on a useful conversation.", author: "Dario Kim", handle: "dariokim", replies: 31, likes: 74, topic: "Growth" },
  { title: "The weekly review that keeps my side project from becoming another tab", excerpt: "A lightweight ritual for finding the next useful thing to build without burning out.", author: "Nina Park", handle: "ninapark", replies: 8, likes: 39, topic: "Practice" },
];

const makerDiscussions = [
  ["What do you show someone before the product is ready?", "18 replies", "Mika Liu", "mint"],
  ["How do you decide a launch is worth repeating?", "12 replies", "Sebastian L.", "violet"],
  ["What has made your user interviews more honest?", "26 replies", "Rae Okafor", "coral"],
  ["Share the one small workflow you now refuse to skip.", "9 replies", "Noah Hart", "sky"],
];

const makerUpdates = [
  ["Cloud Notes added offline export after 42 early-user requests.", "18m", "Cloud"],
  ["Mint List opened its new shared planning flow to beta members.", "1h", "CheckCircle"],
  ["Blue Whale reached its first 100 saved episodes.", "3h", "ChatCircleText"],
  ["FirstRevenue published a transparent onboarding roadmap.", "5h", "CurrencyDollar"],
  ["Pebble Forms made anonymous replies available for research teams.", "7h", "FileText"],
];

function Mark({ Icon, tone = "blue", small = false }) {
  return (
    <span className={`product-mark ${tone} ${small ? "small" : ""}`} aria-hidden="true">
      <Icon weight="fill" />
    </span>
  );
}

function VoteButton({ value, onVote, voted, language = "en" }) {
  return (
    <button className={`vote-button ${voted ? "voted" : ""}`} onClick={(event) => onVote(event)} aria-label={language === "zh" ? `支持这个产品。${value} 次支持` : `Support this product. ${value} supports`}>
      <TrendUp weight="bold" />
      <span>{value}</span>
    </button>
  );
}

function HomePage({ language, onToggle }) {
  const text = translations[language];
  const [votes, setVotes] = useState(() => products.map((product) => product.votes));
  const [voted, setVoted] = useState(() => products.map(() => false));
  const [activeTab, setActiveTab] = useState("Newest");
  const [selectedDayIndex, setSelectedDayIndex] = useState(2);
  const [toast, setToast] = useState("");

  const handleVote = (index, event) => {
    event?.stopPropagation();
    setVotes((current) => current.map((value, itemIndex) => itemIndex === index ? value + (voted[index] ? -1 : 1) : value));
    setVoted((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value));
  };

  const announce = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2800);
  };
  const launchDays = language === "zh"
    ? [["周一", "8 月 10 日"], ["周二", "8 月 11 日"], ["周三", "8 月 12 日"], ["周四", "8 月 13 日"], ["周五", "8 月 14 日"], ["周六", "8 月 15 日"], ["周日", "8 月 16 日"]]
    : [["Mon", "Aug 10"], ["Tue", "Aug 11"], ["Wed", "Aug 12"], ["Thu", "Aug 13"], ["Fri", "Aug 14"], ["Sat", "Aug 15"], ["Sun", "Aug 16"]];

  return (
    <div className="site-shell">
      {toast && <div className="toast maker-toast" role="status"><CheckCircle weight="fill" />{toast}</div>}
      <SiteHeader language={language} onToggle={onToggle} active="discover" onSearch={() => announce(language === "zh" ? "搜索已准备就绪。" : "Search is ready.")} />

      <div className="digest-bar">
        <span className="live-dot" />
        <span><strong>{language === "zh" ? "创作者周报 · 第 33 周" : "Maker digest · Week 33"}</strong></span>
        <span>{language === "zh" ? "本周有 48 个新产品发布，182 位创作者正在参与。" : "48 new products are launching this week with 182 makers joining in."}</span>
        <a href="/weekly-launch">{language === "zh" ? "查看每周发布" : "Explore Weekly Launch"} <ArrowRight /></a>
      </div>

      <main id="top">
        <section className="hero" id="week">
          <div className="hero-copy">
            <p className="eyebrow">{language === "zh" ? "第 33 周 · 2026 年 8 月 10–16 日" : "WEEK 33 · AUG 10–16, 2026"}</p>
            <h1>{language === "zh" ? "好产品，值得不止一天的聚光灯。" : "Good products deserve more than one day in the spotlight."}</h1>
            <p className="hero-lede">{language === "zh" ? "VLauncher 是独立产品的每周发布阵地。分享你的作品，遇见早期用户，并让发布后的对话继续发生。" : "VLauncher is the weekly home for independent launches. Share your work, meet early users, and keep the conversation going after day one."}</p>
            <div className="week-strip" aria-label={language === "zh" ? "每周发布时间表" : "Launch week schedule"}>
              {launchDays.map(([day, date], index) => <button key={day} className={index === selectedDayIndex ? "active" : ""} aria-pressed={index === selectedDayIndex} onClick={() => { setSelectedDayIndex(index); announce(language === "zh" ? `已选择 ${day}，${date}。` : `${day}, ${date} is selected.`); }}><b>{day}</b><span>{date}</span></button>)}
            </div>
            <p className="today-note"><span>{selectedDayIndex === 2 ? (language === "zh" ? `今天 · ${launchDays[selectedDayIndex][1]}，${launchDays[selectedDayIndex][0]}` : `Today · ${launchDays[selectedDayIndex][0]}, ${launchDays[selectedDayIndex][1]}`) : (language === "zh" ? `已选择 · ${launchDays[selectedDayIndex][1]}，${launchDays[selectedDayIndex][0]}` : `Selected · ${launchDays[selectedDayIndex][0]}, ${launchDays[selectedDayIndex][1]}`)}</span><strong>{selectedDayIndex === 2 ? (language === "zh" ? "发布正在进行" : "Launches are live") : (language === "zh" ? "查看当天发布" : "View day launches")}</strong></p>
            <a className="hero-cta" href="/launch">{language === "zh" ? "发布你的产品" : "Launch your product"} <ArrowRight /></a>
          </div>
          <aside className="weekly-picks" aria-labelledby="picks-title">
            <div className="aside-heading">
              <div><p className="section-kicker"><span className="live-dot" /> {language === "zh" ? "本周进行中" : "LIVE THIS WEEK"}</p><h2 id="picks-title">{language === "zh" ? "本周精选" : "Weekly picks"}</h2></div>
              <a href="#products">{language === "zh" ? "查看全部" : "See all"} <ArrowRight /></a>
            </div>
            {products.slice(1, 4).map((product, index) => {
              const Icon = product.Icon;
              return <article className="pick-row" key={product.name} data-linked={Boolean(product.href)} onClick={() => product.href && window.location.assign(product.href)}>
                <Mark Icon={Icon} tone={product.tone} small />
                <div><h3>{productLabel(product.name, language)}</h3><p>{copyFor(product.description, language)}</p></div>
                <span className="pick-votes"><TrendUp weight="bold" />{votes[index + 1]}</span>
              </article>;
            })}
            <div className="next-update"><span>{language === "zh" ? "下次更新倒计时" : "Next update in"}</span><strong>22:47:18</strong></div>
          </aside>
        </section>

        <section className="feature-section" id="discover">
          <div className="section-heading">
            <div><p className="section-kicker">{language === "zh" ? "编辑精选" : "EDITOR'S PICK"}</p><h2>{language === "zh" ? "发现本周值得关注的产品" : "Discover this week's standouts"}</h2></div>
            <a href="#products">{language === "zh" ? "全部精选产品" : "All featured products"} <ArrowRight /></a>
          </div>
          <div className="feature-grid">
            {featured.map((product) => { const href = products.find((item) => item.name === product.name)?.href; return <article className="feature-card" key={product.name} data-linked={Boolean(href)} onClick={() => href && window.location.assign(href)}>
              <Mark Icon={product.Icon} tone={product.tone} />
              <div><h3>{productLabel(product.name, language)}</h3><p>{copyFor(product.copy, language)}</p><a href={href ?? "#products"}>{language === "zh" ? "查看产品" : "Explore product"} <ArrowRight /></a></div>
            </article>; })}
          </div>
        </section>

        <section className="launches-section" id="products">
          <div className="section-heading launch-heading">
            <div><p className="section-kicker">{language === "zh" ? "本周发布" : "LAUNCHING THIS WEEK"}</p><h2>{language === "zh" ? "本周新产品" : "New this week"} <span>{products.length}</span></h2></div>
            <div className="list-tabs" role="tablist" aria-label="Sort launches">
              {[["Newest", language === "zh" ? "最新" : "Newest"], ["Popular", language === "zh" ? "热门" : "Popular"], ["Following", language === "zh" ? "关注" : "Following"]].map(([tab, label]) => <button key={tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)} role="tab" aria-selected={activeTab === tab}>{label}</button>)}
            </div>
          </div>
          <div className="content-grid">
            <div className="product-list">
              {products.map((product, index) => {
                const Icon = product.Icon;
                return <article className="product-row" key={product.name} data-linked={Boolean(product.href)} onClick={() => product.href && window.location.assign(product.href)}>
                  <span className="rank">{index + 1}</span>
                  <Mark Icon={Icon} tone={product.tone} />
                  <div className="product-content">
                    <div className="product-title-line"><h3>{productLabel(product.name, language)}</h3><span className="new-badge">{language === "zh" ? "新" : "New"}</span></div>
                    <p>{copyFor(product.description, language)}</p>
                    <div className="product-meta"><span className="tag">{categoryLabel(product.tags[0], language)}</span><span className="tag">{categoryLabel(product.tags[1], language)}</span><span>{language === "zh" ? "来自 " : "by "}<a href="/makers" onClick={(event) => event.stopPropagation()}>@{product.creator}</a></span><span><ChatCircleText weight="fill" />{product.replies} {language === "zh" ? "条回复" : "replies"}</span></div>
                  </div>
                  <VoteButton value={votes[index]} voted={voted[index]} language={language} onVote={(event) => handleVote(index, event)} />
                </article>;
              })}
              <button className="load-more" onClick={() => announce(language === "zh" ? "更多产品将在本周陆续发布。" : "More launches will be added when this week’s makers go live.")}>{language === "zh" ? "查看更多发布" : "See more launches"} <ArrowRight /></button>
            </div>

            <aside className="right-rail">
              <section className="rail-section" id="categories">
                <div className="rail-heading"><h2>{language === "zh" ? "按分类浏览" : "Browse by category"}</h2><a href="#categories">{language === "zh" ? "查看全部" : "See all"} <ArrowRight /></a></div>
                <div className="topic-list">
                  {topics.map(([name, Icon, count]) => <button key={name} onClick={() => announce(language === "zh" ? `正在显示 ${categoryLabel(name, language)} 发布。` : `Showing ${name} launches.`)}><Icon /><span>{categoryLabel(name, language)}</span><b>{count}</b></button>)}
                </div>
              </section>
              <section className="rail-section conversations" id="makers">
                <div className="rail-heading"><h2>{language === "zh" ? "创作者正在讨论" : "Makers are talking"}</h2><a href="/makers">{language === "zh" ? "更多" : "More"} <ArrowRight /></a></div>
                <a href="/makers"><span className="mini-avatar coral" /><span>{language === "zh" ? "发布日之后，如何保持动力？" : "How do you keep momentum after launch day?"}<small>{language === "zh" ? "作者：Alex Morgan · 32 条回复" : "by Alex Morgan · 32 replies"}</small></span></a>
                <a href="/makers"><span className="mini-avatar blue" /><span>{language === "zh" ? "从零到一：我的第一个付费用户" : "From zero to one: my first paid customer"}<small>{language === "zh" ? "作者：Iris Lee · 21 条回复" : "by Iris Lee · 21 replies"}</small></span></a>
                <a href="/makers"><span className="mini-avatar green" /><span>{language === "zh" ? "独立创作者如何找到自己的节奏" : "How solo makers can find their rhythm"}<small>{language === "zh" ? "作者：Maya Park · 18 条回复" : "by Maya Park · 18 replies"}</small></span></a>
              </section>
              <section className="launch-card" id="launch">
                <p className="section-kicker">{language === "zh" ? "轮到你了" : "YOUR TURN"}</p>
                <h2>{language === "zh" ? "让你的产品加入这场对话。" : "Bring your product into the conversation."}</h2>
                <p>{language === "zh" ? "分享你的发布，从真正关心新工具的人那里获得有用反馈。" : "Share your launch and get useful feedback from people who care about new tools."}</p>
                <a className="launch-card-cta" href="/launch">{language === "zh" ? "发布产品" : "Launch a product"} <ArrowRight /></a>
                <small>{language === "zh" ? "本月已有 3,217 位创作者发布产品" : "3,217 makers launched this month"}</small>
              </section>
            </aside>
          </div>
        </section>

        <section className="notes-section" id="notes">
          <div className="section-heading"><div><p className="section-kicker">{language === "zh" ? "VLAUNCHER 学习中心" : "LEARN WITH VLAUNCHER"}</p><h2>{language === "zh" ? "为下一步准备的指南" : "Guides for your next move"}</h2></div><a href="/learn">{language === "zh" ? "探索学习中心" : "Explore Learn"} <ArrowRight /></a></div>
          <div className="notes-grid">
            {notes.map(([title, copy, author, reads]) => <article key={title}><h3>{copyFor(title, language)}</h3><p>{copyFor(copy, language)}</p><footer><span>{copyFor(author, language)}</span><span>{copyFor(reads, language)}</span></footer></article>)}
          </div>
          <a className="notes-button" href="/learn">{language === "zh" ? "浏览全部指南" : "Browse all guides"} <ArrowRight /></a>
        </section>

        <section className="bottom-cta">
          <div><p className="section-kicker">{language === "zh" ? "你的下一次发布" : "YOUR NEXT LAUNCH"}</p><h2>{language === "zh" ? "做了想被更多人发现的产品？" : "Made something you want people to find?"}</h2><p>{language === "zh" ? "给它一个专属发布周、用心的反馈，以及持续成长的起点。" : "Give it a dedicated launch week, thoughtful feedback, and a place to grow from."}</p></div>
          <a className="bottom-cta-link" href="/launch">{language === "zh" ? "免费发布" : "Launch for free"} <ArrowRight /></a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark"><VLauncherLogo /></span><span>VLauncher</span></a><p>{language === "zh" ? "独立产品与创造它们的人，每周在此相遇。" : "A weekly place for independent products and the people building them."}</p><div className="socials"><GlobeHemisphereWest /><Bell /><EnvelopeSimple /></div></div>
        <div><h3>{language === "zh" ? "探索" : "Explore"}</h3><a href="/products">{language === "zh" ? "产品" : "Products"}</a><a href="/weekly-launch">{language === "zh" ? "每周发布" : "Weekly Launch"}</a><a href="/#discover">{language === "zh" ? "编辑精选" : "Editor’s picks"}</a><a href="/makers">{language === "zh" ? "创作者" : "Makers"}</a></div>
        <div><h3>{language === "zh" ? "面向创作者" : "For makers"}</h3><a href="/launch">{language === "zh" ? "发布产品" : "Launch a product"}</a><a href="/learn">{language === "zh" ? "学习中心" : "Learn"}</a><a href="/makers">{language === "zh" ? "认识创作者" : "Meet makers"}</a><a href="/learn">{language === "zh" ? "发布指南" : "Launch guide"}</a></div>
        <div><h3>VLauncher</h3><a href="#top">{language === "zh" ? "关于我们" : "About us"}</a><a href="#top">{language === "zh" ? "联系我们" : "Contact"}</a><a href="#top">{language === "zh" ? "服务条款" : "Terms"}</a><a href="#top">{language === "zh" ? "隐私政策" : "Privacy"}</a></div>
        <form className="newsletter" onSubmit={(event) => { event.preventDefault(); announce(language === "zh" ? "你已订阅 VLauncher 每周简报。" : "You’re on the VLauncher weekly digest."); }}><h3>{language === "zh" ? "订阅每周简报" : "Get the weekly digest"}</h3><p>{language === "zh" ? "每周一封，介绍值得关注的产品。" : "One thoughtful email about the products worth following."}</p><div><input aria-label={language === "zh" ? "邮箱地址" : "Email address"} type="email" placeholder="you@example.com" required /><button type="submit">{language === "zh" ? "订阅" : "Subscribe"}</button></div></form>
        <div className="footer-bottom"><span>{language === "zh" ? "© 2026 VLauncher。保留所有权利。" : "© 2026 VLauncher. All rights reserved."}</span><span>{language === "zh" ? "为下一个好想法而生。" : "Built for the next good idea."}</span></div>
      </footer>
    </div>
  );
}

function ProductsPage({ language, onToggle }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All products");
  const [activePage, setActivePage] = useState(1);
  const [votes, setVotes] = useState(() => Object.fromEntries(directoryProducts.map(({ name, votes: value }) => [name, value])));
  const [voted, setVoted] = useState({});
  const [toast, setToast] = useState("");

  const announce = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2800);
  };

  const filtered = directoryProducts.filter((product) => {
    const matchesQuery = `${product.name} ${productLabel(product.name, language)} ${product.description} ${product.creator} ${product.tags.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase());
    const matchesCategory = activeCategory === "All products" || product.tags.includes(activeCategory);
    return matchesQuery && matchesCategory;
  });
  const visibleProducts = activePage === 1 ? filtered : [...filtered.slice(3), ...filtered.slice(0, 3)];
  const start = filtered.length ? (activePage - 1) * 10 + 1 : 0;
  const end = filtered.length ? start + visibleProducts.length - 1 : 0;

  const selectCategory = (category) => {
    setActiveCategory(category);
    setActivePage(1);
    announce(language === "zh" ? (category === "All products" ? "正在显示全部产品。" : `正在显示 ${categoryLabel(category, language)} 产品。`) : (category === "All products" ? "Showing all products." : `Showing ${category} products.`));
  };

  const handleVote = (name, event) => {
    event?.stopPropagation();
    setVotes((current) => ({ ...current, [name]: current[name] + (voted[name] ? -1 : 1) }));
    setVoted((current) => ({ ...current, [name]: !current[name] }));
  };

  return (
    <div className="directory-shell">
      {toast && <div className="toast" role="status"><CheckCircle weight="fill" />{toast}</div>}
      <SiteHeader language={language} onToggle={onToggle} active="products" onSearch={() => announce(language === "zh" ? "产品目录搜索已准备就绪。" : "Search the VLauncher directory.")} />
      <div className="directory-banner"><span>{language === "zh" ? "创作者网络 · 发现独立创作者打造的产品" : "Maker network · Discover products built by independent makers"}</span><a href="/launch">{language === "zh" ? "发布你的产品" : "Launch yours"} <ArrowRight /></a></div>

      <main className="directory-main">
        <section className="directory-hero">
          <div><p className="eyebrow">{language === "zh" ? "发现产品" : "DISCOVER PRODUCTS"}</p><h1>{language === "zh" ? "来自现在与过往发布的好产品。" : "Good tools from active and past launches."}</h1><p>{language === "zh" ? "探索由真实创作者打造的独立产品。搜索你需要的工具，或按类别寻找下一个灵感。" : "Explore independent products made by real makers. Search what you need, or browse by the category that fits your next idea."}</p></div>
          <div className="directory-stat"><span>{language === "zh" ? "本周新品" : "NEW THIS WEEK"}</span><strong>48</strong><p>{language === "zh" ? "值得进一步了解的新产品" : "fresh products worth a closer look"}</p></div>
        </section>

        <section className="directory-layout" aria-label={language === "zh" ? "产品目录" : "Product directory"}>
          <div className="directory-results">
            <div className="directory-search"><MagnifyingGlass /><input value={query} onChange={(event) => { setQuery(event.target.value); setActivePage(1); }} placeholder={language === "zh" ? "搜索产品、创作者或需求…" : "Search products, makers, or a problem…"} aria-label={language === "zh" ? "搜索产品" : "Search products"} /><button onClick={() => setQuery("")} aria-label={language === "zh" ? "清除产品搜索" : "Clear product search"}>{query ? (language === "zh" ? "清除" : "Clear") : "⌘ K"}</button></div>
            <div className="directory-list-head"><span>{filtered.length ? (language === "zh" ? `第 ${start}–${end} 个，共 629 个产品` : `${start}–${end} of 629 products`) : (language === "zh" ? "未找到产品" : "No products found")}</span><button onClick={() => announce(language === "zh" ? "已按最新产品排序。" : "Newest products are shown first.")}>{language === "zh" ? "最新" : "Newest"} <CaretDown /></button></div>
            <div className="directory-list">
              {visibleProducts.map((product) => {
                const Icon = product.Icon;
                return <article className="directory-product-row" key={product.name} data-linked={Boolean(product.href)} onClick={() => product.href && window.location.assign(product.href)}>
                  <Mark Icon={Icon} tone={product.tone} />
                  <div className="directory-product-copy">
                    <div className="directory-product-title"><h2>{productLabel(product.name, language)}</h2>{product.name === "FirstRevenue" && <span className="verified-badge"><ShieldCheck weight="fill" />{language === "zh" ? "已验证" : "Verified"}</span>}</div>
                    <p>{copyFor(product.description, language)}</p>
                    <div className="directory-product-meta"><span className="tag">{categoryLabel(product.tags[0], language)}</span><span className="tag">{categoryLabel(product.tags[1], language)}</span><span>{language === "zh" ? "来自 " : "by "}<a href={`#${product.creator}`} onClick={(event) => { event.preventDefault(); event.stopPropagation(); announce(language === "zh" ? `${product.creator} 的创作者主页即将打开。` : `${product.creator}'s maker profile is next.`); }}>@{product.creator}</a></span><span><ChatCircleText weight="fill" />{product.replies}</span></div>
                  </div>
                  <div className="directory-row-actions"><a className="view-product-link" href={product.href ?? `#${product.name.toLowerCase()}`} onClick={(event) => { event.stopPropagation(); if (!product.href) { event.preventDefault(); announce(language === "zh" ? `${productLabel(product.name, language)} 即将打开。` : `${product.name} is opening next.`); } }}>{language === "zh" ? "查看" : "View"} <ArrowRight /></a><VoteButton value={votes[product.name]} voted={Boolean(voted[product.name])} language={language} onVote={(event) => handleVote(product.name, event)} /></div>
                </article>;
              })}
              {!visibleProducts.length && <div className="empty-directory"><MagnifyingGlass /><h2>{language === "zh" ? "没有符合条件的产品。" : "No products match that search."}</h2><p>{language === "zh" ? "尝试更宽泛的关键词，或清除已选分类。" : "Try a broader term, or clear the selected category."}</p><button onClick={() => { setQuery(""); selectCategory("All products"); }}>{language === "zh" ? "显示全部产品" : "Show all products"}</button></div>}
            </div>
            {filtered.length > 0 && <nav className="directory-pagination" aria-label={language === "zh" ? "产品结果分页" : "Product result pages"}><button aria-label={language === "zh" ? "上一页" : "Previous page"} disabled={activePage === 1} onClick={() => setActivePage((page) => Math.max(1, page - 1))}>‹</button>{[1, 2, 3, 4, 5].map((page) => <button key={page} className={activePage === page ? "active" : ""} onClick={() => setActivePage(page)}>{page}</button>)}<span>…</span><button onClick={() => setActivePage((page) => Math.min(5, page + 1))}>{language === "zh" ? "下一页" : "Next"} <ArrowRight /></button></nav>}
          </div>

          <aside className="directory-categories" aria-labelledby="directory-categories-title">
            <div className="directory-categories-heading"><div><p className="section-kicker">{language === "zh" ? "筛选产品目录" : "FILTER THE DIRECTORY"}</p><h2 id="directory-categories-title">{language === "zh" ? "产品分类" : "Products"}</h2></div><button onClick={() => selectCategory("All products")}>{language === "zh" ? "重置" : "Reset"}</button></div>
            <div className="directory-category-list">{directoryCategories.map((category, index) => { const CategoryIcon = [SquaresFour, RocketLaunch, Sparkle, ListChecks, Palette, PaperPlaneTilt, TrendUp, BookOpenText, ShieldCheck, Compass, FileText, CurrencyDollar, UsersThree, Heart, VideoCamera, UsersThree, GlobeHemisphereWest, Heart, RocketLaunch, Leaf, Lightbulb, TrendUp, Sparkle, ArrowRight, FileText, ShieldCheck, CurrencyDollar, UsersThree, MapPin, LinkSimple, FileText, CaretRight, Palette, VideoCamera, SquaresFour, FileText, Sparkle][index] ?? SquaresFour; return <button key={category} className={activeCategory === category ? "active" : ""} onClick={() => selectCategory(category)}><CategoryIcon weight={activeCategory === category ? "fill" : "regular"} /><span>{categoryLabel(category, language)}</span>{activeCategory === category && <CheckCircle weight="fill" />}</button>; })}</div>
          </aside>
        </section>

        <section className="directory-guides" aria-labelledby="guides-title"><div className="detail-section-heading"><div><p className="section-kicker">{language === "zh" ? "面向创作者" : "FOR MAKERS"}</p><h2 id="guides-title">{language === "zh" ? "准备自己的发布？" : "Planning your own launch?"}</h2></div><a href="/learn">{language === "zh" ? "发布指南" : "Launch guides"} <ArrowRight /></a></div><div className="guide-grid">{directoryGuides.map(([title, copy, picks]) => <article key={title}><h3>{copyFor(title, language)}</h3><p>{copyFor(copy, language)}</p><a href="/learn">{copyFor(picks, language)} <ArrowRight /></a></article>)}</div></section>
      </main>
      <footer className="detail-footer directory-footer"><a className="brand" href="/"><span className="brand-mark"><VLauncherLogo /></span><span>VLauncher</span></a><span>{language === "zh" ? "为独立创作者与用心的发布而生。" : "Made for independent makers and thoughtful launches."}</span><span>© 2026 VLauncher</span></footer>
    </div>
  );
}

function WeeklyLaunchPage({ language, onToggle }) {
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [toast, setToast] = useState("");
  const [page, setPage] = useState(1);
  const activeWeek = weeklyLaunches[selectedWeek];

  const announce = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2800);
  };

  const productLookup = Object.fromEntries(products.map((product) => [product.name, product]));
  const visibleArchive = weeklyLaunches.slice((page - 1) * 4 + 1, (page - 1) * 4 + 5);
  const isChinese = language === "zh";
  const activeWeekLabel = selectedWeek === 0 ? (isChinese ? "本周进行中" : activeWeek.label) : (isChinese ? "历史周次" : "PAST WEEK");
  const activeWeekNote = isChinese ? (selectedWeek === 0 ? "发布面板已开放。支持喜欢的产品、留下反馈，并开始一场有价值的对话。" : "这一周的发布已归档。回看产品、反馈与创作者的进展。") : activeWeek.note;
  const supportLabel = (supports) => isChinese ? `${supports.split(" ")[0]} 次支持` : supports;

  return (
    <div className="weekly-shell">
      {toast && <div className="toast weekly-toast" role="status"><CheckCircle weight="fill" />{toast}</div>}
      <SiteHeader language={language} onToggle={onToggle} active="weekly" onSearch={() => announce(language === "zh" ? "每周发布搜索已准备就绪。" : "Search is ready for Weekly Launch.")} />
      <div className="weekly-banner"><span className="live-dot" /><strong>{language === "zh" ? "每周发布" : "Weekly Launch"}</strong><span>{language === "zh" ? "用一周时间被看见、获得反馈，并找到下一步。" : "One focused week to be discovered, get feedback, and learn what to do next."}</span><a href="/launch">{language === "zh" ? "发布你的产品" : "Launch your product"} <ArrowRight /></a></div>

      <main className="weekly-main">
        <section className="weekly-intro"><div><p className="eyebrow">{language === "zh" ? "VLAUNCHER 的每周节奏" : "THE VLAUNCHER RHYTHM"}</p><h1>{language === "zh" ? "每一次好发布，都值得多一点成长空间。" : "Every good launch needs a little more room to grow."}</h1><p>{language === "zh" ? "浏览每一周 VLauncher 的产品、创作者与经验。实时参与，也可以重看出彩的发布，为自己的产品找到更好的起点。" : "Browse the products, people, and lessons from each VLauncher week. Follow along live, revisit a standout, or use a past launch as a more useful starting point for yours."}</p></div><div className="weekly-intro-note"><TrendUp weight="fill" /><strong>{language === "zh" ? "本周有 48 个产品正在发布。" : "48 products are live this week."}</strong><span>{language === "zh" ? "182 位创作者和早期支持者已加入对话。" : "182 makers and early supporters are already in the conversation."}</span></div></section>

        <section className="weekly-layout" aria-label={isChinese ? "每周发布归档" : "Weekly launch archive"}>
          <div className="weekly-primary"><section className="active-week-card"><div className="active-week-heading"><div><p className="section-kicker">{activeWeekLabel}</p><h2>{isChinese ? `${weeklyDateLabel(activeWeek.date, language)} 的发布` : `Week of ${activeWeek.date}`}</h2><p>{isChinese ? <>{activeWeek.count} 个产品 <b>·</b> 本周优胜：<strong>{productLabel(activeWeek.winner, language)}</strong></> : <>{activeWeek.count} products · Winner: <strong>{activeWeek.winner}</strong></>}</p></div><div className="week-countdown"><span>{selectedWeek === 0 ? (isChinese ? "下一轮发布结束倒计时" : "NEXT BOARD CLOSES IN") : (isChinese ? "归档状态" : "ARCHIVE STATUS")}</span><strong>{selectedWeek === 0 ? (isChinese ? "4 天 23 小时 18 分" : "4d 23h 18m") : (isChinese ? "已归档" : "Complete")}</strong></div></div><div className="weekly-product-board">{activeWeek.products.map((name) => { const product = productLookup[name] ?? products[0]; const label = productLabel(name, language); return <button key={name} className="weekly-product-chip" onClick={() => product.href ? window.location.assign(product.href) : announce(isChinese ? `${label} 即将打开。` : `${name} is opening next.`)} aria-label={isChinese ? `打开 ${label}` : `Open ${name}`}><Mark Icon={product.Icon} tone={product.tone} /><span>{label}</span></button>; })}</div><div className="active-week-foot"><p>{activeWeekNote}</p><button onClick={() => announce(isChinese ? `正在展示 ${weeklyDateLabel(activeWeek.date, language)} 的发布面板。` : `Showing the ${activeWeek.date} launch board.`)}>{isChinese ? "打开本周发布" : "Open this week"} <ArrowRight /></button></div></section>
            <section className="weekly-archive"><div className="weekly-section-heading"><div><p className="section-kicker">{isChinese ? "历史周次" : "PAST WEEKS"}</p><h2>{isChinese ? "值得回看的每周发布" : "Launches worth revisiting"}</h2></div><span>{isChinese ? "每一周在投票结束后，依然值得回看。" : "Every week stays useful after the votes settle."}</span></div>{visibleArchive.map((week, index) => <article className={`archive-row ${selectedWeek === index + 1 ? "selected" : ""}`} key={week.date}><button className="archive-main" onClick={() => setSelectedWeek(index + 1)}><span className="archive-date">{isChinese ? `${weeklyDateLabel(week.date, language)} 的发布` : `Week of ${week.date}`}</span><span>{isChinese ? <>{week.count} 个产品 <b>·</b> 本周优胜：<strong>{productLabel(week.winner, language)}</strong></> : <>{week.count} products <b>·</b> Winner: <strong>{week.winner}</strong></>}</span></button><div className="archive-marks">{week.products.slice(0, 3).map((name) => { const product = productLookup[name] ?? products[0]; return <span key={name} title={productLabel(name, language)}><Mark Icon={product.Icon} tone={product.tone} small /></span>; })}</div><button className="archive-arrow" aria-label={isChinese ? `打开 ${weeklyDateLabel(week.date, language)} 的发布` : `Open week of ${week.date}`} onClick={() => setSelectedWeek(index + 1)}><ArrowRight /></button></article>)}<nav className="weekly-pagination" aria-label={isChinese ? "每周发布分页" : "Weekly launch pages"}><button aria-label={isChinese ? "上一页" : "Previous page"} disabled={page === 1} onClick={() => setPage((current) => Math.max(1, current - 1))}>‹</button>{[1, 2].map((number) => <button key={number} className={page === number ? "active" : ""} onClick={() => setPage(number)}>{number}</button>)}<button disabled={page === 2} onClick={() => setPage((current) => Math.min(2, current + 1))}>{isChinese ? "下一页" : "Next"} <ArrowRight /></button></nav></section></div>
          <aside className="weekly-side"><section className="weekly-hall"><div><p className="section-kicker">{isChinese ? "本周荣誉榜" : "HALL OF FAME"}</p><h2>{isChinese ? "本周最受支持" : "Most supported this week"}</h2></div>{weeklyHallOfFame.map(([name, supports, Icon, tone], index) => <button key={name} onClick={() => productLookup[name]?.href ? window.location.assign(productLookup[name].href) : announce(isChinese ? `${productLabel(name, language)} 即将打开。` : `${name} is opening next.`)}><span className="hall-rank">{index + 1}</span><Mark Icon={Icon} tone={tone} small /><span><strong>{productLabel(name, language)}</strong><small>{supportLabel(supports)}</small></span><TrendUp weight="bold" /></button>)}</section><section className="weekly-side-cta"><p className="section-kicker">{isChinese ? "准备发布产品？" : "PLANNING A LAUNCH?"}</p><h2>{isChinese ? "从一个能容纳真实对话的发布周开始。" : "Start with a week that makes space for a real conversation."}</h2><p>{isChinese ? "设定发布日期，准备第一条更新，并在上线前拿到一份实用清单。" : "Set your launch date, prepare your first update, and get a helpful checklist before you go live."}</p><a href="/learn">{isChinese ? "阅读发布指南" : "Read the launch guide"} <ArrowRight /></a></section></aside>
        </section>
      </main>
      <footer className="detail-footer weekly-footer"><a className="brand" href="/"><span className="brand-mark"><VLauncherLogo /></span><span>VLauncher</span></a><span>{isChinese ? "独立产品的每周发布之家。" : "A weekly home for independent launches."}</span><span>© 2026 VLauncher</span></footer>
    </div>
  );
}

function MiniMakerAvatar({ name, tone = "blue" }) {
  const initials = name.split(" ").map((part) => part[0]).join("").slice(0, 2);
  return <span className={`maker-avatar ${tone}`} aria-label={name}>{initials}</span>;
}

function MakersPage({ language, onToggle }) {
  const [activeFeed, setActiveFeed] = useState("Stories");
  const [liked, setLiked] = useState({});
  const [toast, setToast] = useState("");

  const announce = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2800);
  };

  const shownStories = activeFeed === "Stories" ? makerStories : [...makerStories.slice(2), ...makerStories.slice(0, 2)];

  return (
    <div className="makers-shell">
      {toast && <div className="toast maker-toast" role="status"><CheckCircle weight="fill" />{toast}</div>}
      <SiteHeader language={language} onToggle={onToggle} active="makers" onSearch={() => announce(language === "zh" ? "创作者日志搜索已准备就绪。" : "Search Maker Journal.")} />
      <div className="makers-banner"><span className="live-dot" /> <strong>{language === "zh" ? "创作者日志" : "Maker Journal"}</strong><span>{language === "zh" ? "来自 VLauncher 社区的小更新、真诚尝试与有用对话。" : "Small updates, honest experiments, and useful conversations from the VLauncher community."}</span><button onClick={() => announce(language === "zh" ? "创作者笔记编辑器已准备就绪。" : "The maker-note editor is ready.")}>{language === "zh" ? "写一篇笔记" : "Write a note"} <ArrowRight /></button></div>

      <main className="makers-main">
        <section className="makers-intro"><div><p className="eyebrow">{language === "zh" ? "正在创造下一步的人" : "THE PEOPLE BUILDING NEXT"}</p><h1>{language === "zh" ? "按自己的节奏，公开地持续前进。" : "Make progress in public, at your own pace."}</h1><p>{language === "zh" ? "关注有思考的尝试，分享你学到的东西，并遇见理解从零开始这份奇妙而慷慨工作的人。" : "Follow thoughtful experiments, share what you learn, and find people who understand the strange, generous work of building something from scratch."}</p></div><div className="makers-intro-stats"><div><strong>4,281</strong><span>{language === "zh" ? "正在发布的创作者" : "makers publishing"}</span></div><div><strong>137</strong><span>{language === "zh" ? "本周笔记" : "notes this week"}</span></div><div><strong>68</strong><span>{language === "zh" ? "新的对话" : "fresh conversations"}</span></div></div></section>

        <section className="makers-content" aria-label={language === "zh" ? "创作者社区日志" : "Maker community journal"}>
          <aside className="makers-left-rail"><div className="makers-rail-heading"><span>{language === "zh" ? "正在讨论" : "ON THE TABLE"}</span><button onClick={() => announce(language === "zh" ? "正在显示全部讨论。" : "Showing every discussion.")}>{language === "zh" ? "全部讨论" : "All discussions"} <ArrowRight /></button></div>{makerDiscussions.map(([title, replies, author, tone]) => <article key={title} className="maker-discussion"><h2>{copyFor(title, language)}</h2><footer><MiniMakerAvatar name={author} tone={tone} /><span>{copyFor(replies, language)} · {author}</span></footer></article>)}<section className="makers-prompt"><Sparkle weight="fill" /><p>{language === "zh" ? "有值得拆解的话题吗？" : "Have something useful to unpack?"}</p><button onClick={() => announce(language === "zh" ? "创作者笔记编辑器已准备就绪。" : "The maker-note editor is ready.")}>{language === "zh" ? "发起一场对话" : "Start a conversation"} <ArrowRight /></button></section></aside>

          <section className="makers-feed"><div className="makers-feed-head"><div><p className="section-kicker">{language === "zh" ? "来自社区" : "FROM THE COMMUNITY"}</p><h2>{language === "zh" ? "创作者正在学习什么" : "What makers are learning"}</h2></div><div className="makers-feed-tabs" role="tablist">{["Stories", "Most discussed"].map((tab) => <button role="tab" aria-selected={activeFeed === tab} className={activeFeed === tab ? "active" : ""} key={tab} onClick={() => setActiveFeed(tab)}>{language === "zh" ? (tab === "Stories" ? "故事" : "讨论最多") : tab}</button>)}</div></div>
            {shownStories.map((story, index) => <article className={`maker-story ${story.featured ? "featured" : ""} ${story.image ? "with-image" : "without-image"}`} key={story.title}>{story.image && <img src={story.image} alt="" />}{<div className="maker-story-body"><div className="maker-story-meta"><span>{copyFor(story.topic, language)}</span><span>·</span><span>{language === "zh" ? `${index + 1} 天前` : `${index + 1} day${index ? "s" : ""} ago`}</span></div><h2>{copyFor(story.title, language)}</h2><p>{copyFor(story.excerpt, language)}</p><footer><div><MiniMakerAvatar name={story.author} tone={index % 2 ? "coral" : "blue"} /><span><b>{story.author}</b> @{story.handle}</span></div><div className="story-actions"><button onClick={() => setLiked((current) => ({ ...current, [story.title]: !current[story.title] }))}><Heart weight={liked[story.title] ? "fill" : "regular"} />{story.likes + (liked[story.title] ? 1 : 0)}</button><button onClick={() => announce(language === "zh" ? `${story.replies} 条回复已准备好阅读。` : `${story.replies} replies are ready to read.`)}><ChatCircleText />{story.replies}</button></div></footer></div>}</article>)}
            <button className="maker-load-more" onClick={() => announce(language === "zh" ? "更多创作者故事正在路上。" : "More maker stories are on the way.")}>{language === "zh" ? "更多创作者日志" : "More from Maker Journal"} <ArrowRight /></button>
          </section>

          <aside className="makers-right-rail"><section className="maker-callout"><p className="section-kicker">{language === "zh" ? "你的社区角落" : "YOUR CORNER OF THE COMMUNITY"}</p><h2>{language === "zh" ? "分享发布背后的工作。" : "Share the work behind your launch."}</h2><p>{language === "zh" ? "一篇短笔记就足够：一个实验、一次挫折、一个问题，或刚刚学到的事。" : "A short note is enough: an experiment, a setback, a question, or the thing you just learned."}</p><button onClick={() => announce(language === "zh" ? "创作者笔记编辑器已准备就绪。" : "The maker-note editor is ready.")}>{language === "zh" ? "写一篇创作者笔记" : "Write a maker note"} <ArrowRight /></button></section><section className="makers-updates"><div className="makers-rail-heading"><span>{language === "zh" ? "产品最新动态" : "LATEST FROM PRODUCTS"}</span><button onClick={() => announce(language === "zh" ? "所有产品更新已准备就绪。" : "All product updates are ready.")}>{language === "zh" ? "全部更新" : "All updates"}</button></div>{makerUpdates.map(([message, time, iconName], index) => { const UpdateIcon = { Cloud, CheckCircle, ChatCircleText, CurrencyDollar, FileText }[iconName]; return <article key={message}><span className={`maker-update-icon update-${index}`}><UpdateIcon weight="fill" /></span><div><p>{copyFor(message, language)}</p><small>{language === "zh" ? `${copyFor(time, language)}前` : `${time} ago`}</small></div></article>; })}</section><section className="makers-opportunities"><div className="makers-rail-heading"><span>{language === "zh" ? "找到你的伙伴" : "FIND YOUR PEOPLE"}</span><button onClick={() => announce(language === "zh" ? "正在显示全部协作帖子。" : "Showing all collaboration posts.")}>{language === "zh" ? "查看全部" : "See all"}</button></div><article><UsersThree /><div><h3>{language === "zh" ? "寻找一位有想法的发布伙伴" : "Looking for a thoughtful launch partner"}</h3><p>{language === "zh" ? "产品与增长 · 远程" : "Product & growth · Remote"}</p></div></article><article><RocketLaunch /><div><h3>{language === "zh" ? "寻找一款从容金融工具的测试用户" : "Seeking beta testers for a calm finance tool"}</h3><p>{language === "zh" ? "研究 · 6 个名额" : "Research · 6 spots"}</p></div></article><article><MapPin /><div><h3>{language === "zh" ? "下一次创作者咖啡：上海" : "Next makers’ coffee: Shanghai"}</h3><p>{language === "zh" ? "8 月 15 日 · 上午 10:00" : "Aug 15 · 10:00 AM"}</p></div></article></section></aside>
        </section>

        <section className="makers-bottom"><div><p className="section-kicker">{language === "zh" ? "保持联系" : "KEEP IN TOUCH"}</p><h2>{language === "zh" ? "找到让你持续前进的节奏。" : "Find a rhythm that helps you keep going."}</h2><p>{language === "zh" ? "每周五，一篇用心的创作者笔记送达邮箱。" : "One thoughtful maker note in your inbox each Friday."}</p></div><form onSubmit={(event) => { event.preventDefault(); announce(language === "zh" ? "你已订阅创作者日志。" : "You’re on the Maker Journal digest."); }}><input type="email" aria-label={language === "zh" ? "邮箱地址" : "Email address"} placeholder="you@example.com" required /><button type="submit">{language === "zh" ? "订阅" : "Subscribe"} <ArrowRight /></button></form></section>
      </main>
      <footer className="detail-footer makers-footer"><a className="brand" href="/"><span className="brand-mark"><VLauncherLogo /></span><span>VLauncher</span></a><span>{language === "zh" ? "为独立创作者和下一个好想法而生。" : "Built for independent makers and the next good idea."}</span><span>© 2026 VLauncher</span></footer>
    </div>
  );
}

function LearnPage({ language, onToggle }) {
  const [activeTopic, setActiveTopic] = useState("All learning");
  const [toast, setToast] = useState("");

  const announce = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2800);
  };

  const articles = activeTopic === "All learning" ? learnArticles : learnArticles.filter((article) => article.topic === activeTopic);
  const featuredArticle = learnArticles[0];

  return (
    <div className="learn-shell">
      {toast && <div className="toast learn-toast" role="status"><CheckCircle weight="fill" />{toast}</div>}
      <SiteHeader language={language} onToggle={onToggle} active="learn" onSearch={() => announce(language === "zh" ? "学习中心搜索已准备就绪。" : "Search is ready for VLauncher Learn.")} />
      <div className="learn-banner"><BookOpenText weight="fill" /><span>{language === "zh" ? "VLauncher 学习中心" : "VLauncher Learn"}</span><strong>{language === "zh" ? "为从想法走向有用产品之间的每一步，提供实用指南。" : "Practical guides for the work between an idea and a useful product."}</strong></div>

      <main className="learn-main">
        <section className="learn-hero">
          <div><p className="eyebrow">{language === "zh" ? "面向独立创作者" : "FOR INDEPENDENT BUILDERS"}</p><h1>{language === "zh" ? "为创造、发布与公开学习，提供清晰建议。" : "Clear advice for building, launching, and learning in public."}</h1><p>{language === "zh" ? "短小、用心的指南，聚焦塑造年轻产品的关键时刻：和用户交流、找到重心、制定发布计划，以及让技术基础保持从容。" : "Short, thoughtful guides for the moments that shape a young product: talking to users, finding focus, making a launch plan, and keeping the technical foundation calm."}</p></div>
          <aside><span>{language === "zh" ? "本周路径" : "THIS WEEK’S PATH"}</span><ol><li><b>01</b><div><strong>{language === "zh" ? "找到有用信号" : "Find the useful signal"}</strong><small>{language === "zh" ? "与最接近问题的人交流。" : "Talk to the people closest to the problem."}</small></div></li><li><b>02</b><div><strong>{language === "zh" ? "发布最小且清晰的版本" : "Ship the smallest clear version"}</strong><small>{language === "zh" ? "让早期用户轻松做出下一步决定。" : "Make the next decision easy for an early user."}</small></div></li><li><b>03</b><div><strong>{language === "zh" ? "在扩张前先学习" : "Learn before you scale"}</strong><small>{language === "zh" ? "让真实行为指引下一次发布。" : "Let real behavior guide the next release."}</small></div></li></ol></aside>
        </section>

        <section className="learn-feature" aria-labelledby="featured-guide-title"><div className="learn-feature-icon"><featuredArticle.Icon weight="fill" /></div><div><p className="section-kicker">{language === "zh" ? "从这里开始" : "START HERE"} · {copyFor(featuredArticle.read, language)}</p><h2 id="featured-guide-title">{copyFor(featuredArticle.title, language)}</h2><p>{copyFor(featuredArticle.excerpt, language)}</p><button onClick={() => announce(language === "zh" ? "发布计划指南已准备好阅读。" : "The launch-plan guide is ready to read.")}>{language === "zh" ? "阅读指南" : "Read the guide"} <ArrowRight /></button></div><div className="learn-feature-note"><span>{language === "zh" ? "包含内容" : "INCLUDED"}</span><p>{language === "zh" ? "发布周清单、简单的反馈模板，以及从容决定下一步的方法。" : "A launch-week checklist, a simple feedback template, and a calm way to choose what happens next."}</p></div></section>

        <section className="learn-library" aria-labelledby="learn-library-title"><div className="learn-library-heading"><div><p className="section-kicker">{language === "zh" ? "内容库" : "THE LIBRARY"}</p><h2 id="learn-library-title">{language === "zh" ? "更清晰地创造。" : "Build a little more clearly."}</h2></div><div className="learn-topic-tabs" role="tablist">{learnTopics.map((topic) => <button key={topic} role="tab" aria-selected={activeTopic === topic} className={activeTopic === topic ? "active" : ""} onClick={() => setActiveTopic(topic)}>{copyFor(topic, language)}</button>)}</div></div><div className="learn-grid">{articles.slice(activeTopic === "All learning" ? 1 : 0).map((article) => <article key={article.title}><span className="learn-article-icon"><article.Icon weight="fill" /></span><div className="learn-article-meta"><span>{copyFor(article.topic, language)}</span><span>{copyFor(article.read, language)}</span></div><h3>{copyFor(article.title, language)}</h3><p>{copyFor(article.excerpt, language)}</p><footer><span>{copyFor(article.level, language)}</span><button onClick={() => announce(language === "zh" ? `${copyFor(article.title, language)} 已准备好阅读。` : `${article.title} is ready to read.`)}>{language === "zh" ? "阅读文章" : "Read article"} <ArrowRight /></button></footer></article>)}</div>{articles.length === 0 && <div className="learn-empty"><BookOpenText /><h3>{language === "zh" ? "更多指南正在准备中。" : "More guides are being prepared."}</h3><p>{language === "zh" ? "选择其他主题，继续探索内容库。" : "Choose another topic to keep exploring the library."}</p></div>}</section>

        <section className="learn-newsletter"><div><p className="section-kicker">{language === "zh" ? "每周一篇笔记" : "ONE NOTE A WEEK"}</p><h2>{language === "zh" ? "把有用的经验留在身边。" : "Keep the useful lessons close."}</h2><p>{language === "zh" ? "每周五：一篇实用指南、一个真诚的创作者故事，以及一款值得细看的产品。" : "Every Friday: one practical guide, one honest maker story, and one product worth a closer look."}</p></div><form onSubmit={(event) => { event.preventDefault(); announce(language === "zh" ? "你已订阅 VLauncher 学习中心简报。" : "You’re on the VLauncher Learn digest."); }}><input aria-label={language === "zh" ? "邮箱地址" : "Email address"} type="email" placeholder="you@example.com" required /><button type="submit">{language === "zh" ? "订阅" : "Subscribe"} <ArrowRight /></button></form></section>
      </main>
      <footer className="detail-footer learn-footer"><a className="brand" href="/"><span className="brand-mark"><VLauncherLogo /></span><span>VLauncher</span></a><span>{language === "zh" ? "为独立产品创作者提供实用学习。" : "Practical learning for independent product people."}</span><span>© 2026 VLauncher</span></footer>
    </div>
  );
}

const launchCategories = ["AI & ML", "Productivity", "Developer Tools", "Design Tools", "Content Creation", "Marketing", "Education", "SaaS & Tools"];
const launchWeeks = ["Aug 24–30, 2026", "Aug 31–Sep 06, 2026", "Sep 07–13, 2026"];
const launchGoals = ["Early feedback", "First users", "Grow awareness"];

function LaunchPage({ language, onToggle }) {
  const isChinese = language === "zh";
  const [step, setStep] = useState(0);
  const [toast, setToast] = useState("");
  const [form, setForm] = useState({
    productName: "",
    tagline: "",
    website: "https://",
    productType: "",
    category: "",
    description: "",
    makerName: "",
    makerEmail: "",
    logoName: "",
    galleryName: "",
    launchWeek: launchWeeks[0],
    goal: launchGoals[0],
    launchNote: "",
    agree: false,
  });

  const steps = isChinese ? ["产品信息", "故事与素材", "发布计划", "确认提交"] : ["Product", "Story & media", "Launch plan", "Review"];
  const typeOptions = [
    ["AI Agent", isChinese ? "AI 智能体" : "AI Agent", Sparkle],
    ["Web App", isChinese ? "Web 应用" : "Web App", GlobeHemisphereWest],
    ["H5 Experience", isChinese ? "H5 体验" : "H5 Experience", Monitor],
  ];
  const goalLabels = {
    "Early feedback": isChinese ? "获得早期反馈" : "Early feedback",
    "First users": isChinese ? "找到首批用户" : "First users",
    "Grow awareness": isChinese ? "提升产品认知" : "Grow awareness",
  };
  const update = (field, value) => setForm((current) => ({ ...current, [field]: value }));
  const announce = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  };
  const stepIsValid = [
    Boolean(form.productName.trim() && form.tagline.trim() && form.website.trim() && form.productType && form.category),
    Boolean(form.description.trim() && form.makerName.trim() && form.makerEmail.includes("@")),
    Boolean(form.launchWeek && form.goal && form.launchNote.trim() && form.agree),
    true,
  ][step];
  const nextStep = () => {
    if (!stepIsValid) {
      announce(isChinese ? "请先补全本步骤的必填信息。" : "Please complete the required fields in this step.");
      return;
    }
    setStep((current) => Math.min(3, current + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const submitLaunch = () => {
    window.localStorage.setItem("vlauncher-launch-draft", JSON.stringify(form));
    window.location.assign("/launch/success");
  };
  const previewIcon = form.productType === "AI Agent" ? Sparkle : form.productType === "H5 Experience" ? Monitor : GlobeHemisphereWest;

  return <div className="launch-shell">
    {toast && <div className="toast launch-toast" role="status"><CheckCircle weight="fill" />{toast}</div>}
    <SiteHeader language={language} onToggle={onToggle} active="launch" onSearch={() => announce(isChinese ? "发布帮助已准备就绪。" : "Launch help is ready.")} />
    <div className="launch-banner"><span><RocketLaunch weight="fill" />{isChinese ? "下一轮发布：2026 年 8 月 24–30 日" : "Next launch: Aug 24–30, 2026"}</span><strong>{isChinese ? "免费提交 · 人工审核" : "Free submission · Human reviewed"}</strong></div>

    <main className="launch-main">
      <section className="launch-intro">
        <div><p className="eyebrow">{isChinese ? "发布工作台" : "LAUNCH WORKSPACE"}</p><h1>{isChinese ? "让你的产品被真正需要它的人看见。" : "Put your product in front of people who genuinely need it."}</h1><p>{isChinese ? "用几分钟准备产品资料。我们会帮你把价值说清楚，并安排一个完整的每周发布窗口。" : "Take a few minutes to prepare your story. We’ll help make the value clear and give it a full week to be discovered."}</p></div>
      </section>

      <ol className="launch-progress" aria-label={isChinese ? "发布进度" : "Launch progress"}>
        {steps.map((label, index) => <li key={label} className={`${index === step ? "active" : ""} ${index < step ? "complete" : ""}`}><button onClick={() => index <= step && setStep(index)} aria-current={index === step ? "step" : undefined}><span>{index < step ? <CheckCircle weight="fill" /> : index + 1}</span><b>{label}</b></button></li>)}
      </ol>

      <div className="launch-layout">
        <section className="launch-form-card">
          {step === 0 && <div className="launch-step">
            <div className="launch-step-heading"><span>01</span><div><h2>{isChinese ? "先介绍一下你的产品" : "Start with the product"}</h2><p>{isChinese ? "这些信息会出现在产品卡片和详情页顶部。" : "This information appears on your product card and detail page."}</p></div></div>
            <div className="launch-field-grid">
              <label className="launch-field full"><span>{isChinese ? "产品名称" : "Product name"}<b>*</b></span><input value={form.productName} onChange={(event) => update("productName", event.target.value)} maxLength={42} placeholder={isChinese ? "例如：观云笔记" : "e.g. Cloud Notes"} /><small>{form.productName.length}/42</small></label>
              <label className="launch-field full"><span>{isChinese ? "一句话介绍" : "Tagline"}<b>*</b></span><input value={form.tagline} onChange={(event) => update("tagline", event.target.value)} maxLength={90} placeholder={isChinese ? "一句话说明产品为谁解决什么问题" : "Explain who it helps and how"} /><small>{form.tagline.length}/90</small></label>
              <label className="launch-field full"><span>{isChinese ? "产品网址" : "Product URL"}<b>*</b></span><div className="input-with-icon"><LinkSimple /><input value={form.website} onChange={(event) => update("website", event.target.value)} inputMode="url" /></div></label>
              <fieldset className="launch-choice-field full"><legend>{isChinese ? "产品形态" : "Product type"}<b>*</b></legend><div className="type-choice-grid">{typeOptions.map(([value, label, Icon]) => <button type="button" key={value} className={form.productType === value ? "selected" : ""} onClick={() => update("productType", value)}><Icon weight="fill" /><span><strong>{label}</strong><small>{value === "AI Agent" ? (isChinese ? "能理解任务并采取行动" : "Understands tasks and takes action") : value === "Web App" ? (isChinese ? "在浏览器中完成核心工作" : "Core workflow in the browser") : (isChinese ? "轻量、即开即用的网页体验" : "Lightweight, instant web experience")}</small></span>{form.productType === value && <CheckCircle weight="fill" />}</button>)}</div></fieldset>
              <label className="launch-field full"><span>{isChinese ? "主要分类" : "Primary category"}<b>*</b></span><select value={form.category} onChange={(event) => update("category", event.target.value)}><option value="">{isChinese ? "选择最匹配的分类" : "Choose the best fit"}</option>{launchCategories.map((category) => <option key={category} value={category}>{categoryLabel(category, language)}</option>)}</select></label>
            </div>
          </div>}

          {step === 1 && <div className="launch-step">
            <div className="launch-step-heading"><span>02</span><div><h2>{isChinese ? "讲清楚故事，准备好素材" : "Tell the story and add media"}</h2><p>{isChinese ? "帮助早期用户快速理解产品为什么值得关注。" : "Help early users understand why this product deserves attention."}</p></div></div>
            <div className="launch-field-grid">
              <label className="launch-field full"><span>{isChinese ? "产品介绍" : "Product description"}<b>*</b></span><textarea value={form.description} onChange={(event) => update("description", event.target.value)} maxLength={520} placeholder={isChinese ? "介绍问题、解决方式，以及现在为什么值得体验。" : "Describe the problem, your approach, and why it is worth trying now."} /><small>{form.description.length}/520</small></label>
              <label className="launch-field"><span>{isChinese ? "创作者姓名" : "Maker name"}<b>*</b></span><input value={form.makerName} onChange={(event) => update("makerName", event.target.value)} placeholder={isChinese ? "你的名字" : "Your name"} /></label>
              <label className="launch-field"><span>{isChinese ? "联系邮箱" : "Contact email"}<b>*</b></span><input type="email" value={form.makerEmail} onChange={(event) => update("makerEmail", event.target.value)} placeholder="you@example.com" /></label>
              <div className="launch-upload"><div className="upload-icon"><ImageSquare weight="fill" /></div><div><strong>{isChinese ? "产品 Logo" : "Product logo"}</strong><p>{isChinese ? "建议使用正方形 PNG 或 JPG，至少 512 × 512。" : "Square PNG or JPG, at least 512 × 512 recommended."}</p><span>{form.logoName || (isChinese ? "尚未选择文件" : "No file selected")}</span></div><label><UploadSimple />{isChinese ? "选择文件" : "Choose file"}<input type="file" accept="image/png,image/jpeg,image/webp" onChange={(event) => update("logoName", event.target.files?.[0]?.name ?? "")} /></label></div>
              <div className="launch-upload"><div className="upload-icon"><Monitor weight="fill" /></div><div><strong>{isChinese ? "产品截图" : "Product screenshot"}</strong><p>{isChinese ? "上传一张能展示核心体验的横向截图。" : "Upload one landscape image that shows the core experience."}</p><span>{form.galleryName || (isChinese ? "尚未选择文件" : "No file selected")}</span></div><label><UploadSimple />{isChinese ? "选择文件" : "Choose file"}<input type="file" accept="image/png,image/jpeg,image/webp" onChange={(event) => update("galleryName", event.target.files?.[0]?.name ?? "")} /></label></div>
            </div>
          </div>}

          {step === 2 && <div className="launch-step">
            <div className="launch-step-heading"><span>03</span><div><h2>{isChinese ? "选择发布周与目标" : "Choose your week and goal"}</h2><p>{isChinese ? "一个明确目标，会让整周获得的反馈更有价值。" : "A clear goal makes the feedback you receive far more useful."}</p></div></div>
            <fieldset className="launch-choice-field"><legend>{isChinese ? "计划发布周" : "Launch week"}<b>*</b></legend><div className="week-choice-grid">{launchWeeks.map((week, index) => <button type="button" key={week} className={form.launchWeek === week ? "selected" : ""} onClick={() => update("launchWeek", week)}><CalendarBlank weight="fill" /><span><strong>{weeklyDateLabel(week, language)}</strong><small>{index === 0 ? (isChinese ? "推荐 · 剩余 12 个名额" : "Recommended · 12 spots left") : (isChinese ? "仍可提交" : "Open for submissions")}</small></span>{form.launchWeek === week && <CheckCircle weight="fill" />}</button>)}</div></fieldset>
            <fieldset className="launch-choice-field"><legend>{isChinese ? "这次发布最重要的目标" : "Primary launch goal"}<b>*</b></legend><div className="goal-choice-grid">{launchGoals.map((goal) => <button type="button" key={goal} className={form.goal === goal ? "selected" : ""} onClick={() => update("goal", goal)}><span>{goalLabels[goal]}</span>{form.goal === goal && <CheckCircle weight="fill" />}</button>)}</div></fieldset>
            <label className="launch-field"><span>{isChinese ? "发布说明" : "Launch note"}<b>*</b></span><textarea value={form.launchNote} onChange={(event) => update("launchNote", event.target.value)} maxLength={280} placeholder={isChinese ? "告诉大家你现在最希望获得哪类建议。" : "Tell the community what kind of feedback would help most."} /><small>{form.launchNote.length}/280</small></label>
            <label className="launch-consent"><input type="checkbox" checked={form.agree} onChange={(event) => update("agree", event.target.checked)} /><span>{isChinese ? "我确认产品链接可正常访问，并同意遵守 VLauncher 的社区发布规范。" : "I confirm the product is accessible and agree to the VLauncher community launch guidelines."}</span></label>
          </div>}

          {step === 3 && <div className="launch-step review-step">
            <div className="launch-step-heading"><span>04</span><div><h2>{isChinese ? "检查无误后提交" : "Review and submit"}</h2><p>{isChinese ? "提交后，编辑团队通常会在 1 个工作日内完成审核。" : "After submission, the editorial team usually reviews it within one business day."}</p></div></div>
            <article className="launch-review-card"><div className="review-mark"><Mark Icon={previewIcon} tone="sky" /></div><div className="review-copy"><p className="section-kicker">{isChinese ? "发布预览" : "LAUNCH PREVIEW"}</p><h3>{form.productName || (isChinese ? "你的产品名称" : "Your product name")}</h3><p>{form.tagline || (isChinese ? "一句简洁、有力的产品介绍会显示在这里。" : "A concise, useful product tagline will appear here.")}</p><div><span>{form.productType ? (typeOptions.find(([value]) => value === form.productType)?.[1]) : (isChinese ? "产品形态" : "Product type")}</span><span>{form.category ? categoryLabel(form.category, language) : (isChinese ? "产品分类" : "Category")}</span></div></div><div className="review-support"><TrendUp weight="bold" /><strong>0</strong><span>{isChinese ? "发布后开始计数" : "Starts after launch"}</span></div></article>
            <div className="review-details"><div><span>{isChinese ? "创作者" : "Maker"}</span><strong>{form.makerName}</strong><small>{form.makerEmail}</small></div><div><span>{isChinese ? "发布周" : "Launch week"}</span><strong>{weeklyDateLabel(form.launchWeek, language)}</strong><small>{goalLabels[form.goal]}</small></div><div><span>{isChinese ? "产品网址" : "Product URL"}</span><strong>{form.website}</strong><small>{isChinese ? "审核时会检查可访问性" : "Accessibility checked during review"}</small></div></div>
            <div className="review-note"><Lightbulb weight="fill" /><div><strong>{isChinese ? "给编辑团队的说明" : "Note for the editorial team"}</strong><p>{form.launchNote}</p></div></div>
          </div>}

          <footer className="launch-form-actions"><button className="launch-back" type="button" disabled={step === 0} onClick={() => setStep((current) => Math.max(0, current - 1))}><ArrowLeft />{isChinese ? "上一步" : "Back"}</button><span>{isChinese ? `第 ${step + 1} 步，共 4 步` : `Step ${step + 1} of 4`}</span>{step < 3 ? <button className="launch-next" type="button" onClick={nextStep}>{isChinese ? "继续" : "Continue"}<ArrowRight /></button> : <button className="launch-next submit" type="button" onClick={submitLaunch}><RocketLaunch weight="fill" />{isChinese ? "提交审核" : "Submit for review"}</button>}</footer>
        </section>

        <aside className="launch-side">
          <section className="launch-live-preview"><div className="launch-side-heading"><span>{isChinese ? "实时预览" : "LIVE PREVIEW"}</span><b>{isChinese ? "产品卡片" : "Product card"}</b></div><article><Mark Icon={previewIcon} tone="sky" /><div><h3>{form.productName || (isChinese ? "你的产品" : "Your product")}</h3><p>{form.tagline || (isChinese ? "填写一句话介绍后，会在这里看到效果。" : "Your tagline preview will appear here.")}</p><span>{form.category ? categoryLabel(form.category, language) : (isChinese ? "等待选择分类" : "Choose a category")}</span></div></article></section>
          <section className="launch-benefits"><p className="section-kicker">{isChinese ? "一次发布，你会获得" : "WHAT YOUR LAUNCH INCLUDES"}</p><ul><li><CheckCircle weight="fill" /><span><strong>{isChinese ? "完整一周曝光" : "A full week of discovery"}</strong><small>{isChinese ? "持续出现在本周发布面板" : "Stay visible on the weekly launch board"}</small></span></li><li><CheckCircle weight="fill" /><span><strong>{isChinese ? "结构化产品详情页" : "A structured product profile"}</strong><small>{isChinese ? "讲清楚产品、数据与创作者故事" : "Tell the product, traction, and maker story"}</small></span></li><li><CheckCircle weight="fill" /><span><strong>{isChinese ? "真实社区反馈" : "Thoughtful community feedback"}</strong><small>{isChinese ? "支持、回复和早期使用建议" : "Supports, replies, and early-user notes"}</small></span></li></ul></section>
          <section className="launch-help"><ChatCircleText weight="fill" /><div><strong>{isChinese ? "不确定怎么写？" : "Not sure what to write?"}</strong><p>{isChinese ? "先阅读发布指南，或者带着草稿继续。提交前都可以修改。" : "Read the launch guide or continue with a rough draft. Everything stays editable before submission."}</p><a href="/learn">{isChinese ? "查看发布指南" : "Read the launch guide"} <ArrowRight /></a></div></section>
        </aside>
      </div>
    </main>
    <footer className="detail-footer launch-footer"><a className="brand" href="/"><span className="brand-mark"><VLauncherLogo /></span><span>VLauncher</span></a><span>{isChinese ? "让每一次认真创造，都有被看见的机会。" : "Give thoughtful products a fair chance to be seen."}</span><span>© 2026 VLauncher</span></footer>
  </div>;
}

function LaunchSuccessPage({ language, onToggle }) {
  const isChinese = language === "zh";
  let draft = {};
  try { draft = JSON.parse(window.localStorage.getItem("vlauncher-launch-draft") || "{}"); } catch { draft = {}; }
  const productName = draft.productName || (isChinese ? "你的产品" : "Your product");
  const launchWeek = draft.launchWeek || launchWeeks[0];
  return <div className="launch-shell success-shell">
    <SiteHeader language={language} onToggle={onToggle} active="launch" onSearch={() => {}} />
    <main className="launch-success-main">
      <section className="success-hero"><span className="success-icon"><CheckCircle weight="fill" /></span><p className="eyebrow">{isChinese ? "提交成功" : "SUBMISSION RECEIVED"}</p><h1>{isChinese ? `${productName} 已进入审核队列。` : `${productName} is in the review queue.`}</h1><p>{isChinese ? "资料已安全保存。编辑团队会检查产品链接、内容完整度和发布周安排，并通过邮件告知结果。" : "Your submission is safely saved. The editorial team will check the product link, content quality, and launch-week fit, then email you the result."}</p><div className="success-reference"><span>{isChinese ? "提交编号" : "Submission ID"}</span><strong>VL-260814-1842</strong><span>{isChinese ? "预计 1 个工作日内完成审核" : "Review expected within 1 business day"}</span></div></section>
      <section className="success-grid"><article className="success-summary"><p className="section-kicker">{isChinese ? "发布摘要" : "LAUNCH SUMMARY"}</p><div><span>{isChinese ? "产品" : "Product"}</span><strong>{productName}</strong></div><div><span>{isChinese ? "计划发布周" : "Planned week"}</span><strong>{weeklyDateLabel(launchWeek, language)}</strong></div><div><span>{isChinese ? "发布目标" : "Launch goal"}</span><strong>{draft.goal === "First users" ? (isChinese ? "找到首批用户" : "First users") : draft.goal === "Grow awareness" ? (isChinese ? "提升产品认知" : "Grow awareness") : (isChinese ? "获得早期反馈" : "Early feedback")}</strong></div><div><span>{isChinese ? "状态" : "Status"}</span><strong className="status-review"><span />{isChinese ? "审核中" : "In review"}</strong></div></article>
        <article className="success-next"><p className="section-kicker">{isChinese ? "接下来会发生什么" : "WHAT HAPPENS NEXT"}</p><ol><li><span>1</span><div><strong>{isChinese ? "编辑审核" : "Editorial review"}</strong><p>{isChinese ? "确认资料完整、链接正常，并优化少量展示文案。" : "We verify the details, links, and make small editorial refinements."}</p></div></li><li><span>2</span><div><strong>{isChinese ? "发布前确认" : "Pre-launch confirmation"}</strong><p>{isChinese ? "审核通过后，你会收到预览链接和最终发布时间。" : "Once approved, you receive a preview link and confirmed schedule."}</p></div></li><li><span>3</span><div><strong>{isChinese ? "每周发布上线" : "Weekly Launch goes live"}</strong><p>{isChinese ? "产品进入发布面板，开始获得支持、访问和反馈。" : "Your product joins the board and starts collecting support, visits, and feedback."}</p></div></li></ol></article></section>
      <section className="success-actions"><div><h2>{isChinese ? "审核期间，也可以继续准备发布。" : "Keep preparing while we review."}</h2><p>{isChinese ? "完善官网首屏、准备一条创作者动态，并想好最想问早期用户的问题。" : "Polish the first screen, prepare a maker update, and choose one question for early users."}</p></div><div><a className="secondary-button" href="/learn">{isChinese ? "阅读发布指南" : "Read launch guide"}</a><a className="launch-next" href="/">{isChinese ? "返回首页" : "Back to home"}<ArrowRight /></a></div></section>
    </main>
    <footer className="detail-footer launch-footer"><a className="brand" href="/"><span className="brand-mark"><VLauncherLogo /></span><span>VLauncher</span></a><span>{isChinese ? "你的下一次发布，从这里开始。" : "Your next launch starts here."}</span><span>© 2026 VLauncher</span></footer>
  </div>;
}

const performance = [
  { day: "Jul 16", value: 74 },
  { day: "Jul 18", value: 201 },
  { day: "Jul 20", value: 48 },
  { day: "Jul 22", value: 110 },
  { day: "Jul 24", value: 68 },
  { day: "Jul 26", value: 27 },
  { day: "Jul 28", value: 142 },
  { day: "Jul 30", value: 126 },
  { day: "Aug 01", value: 91 },
  { day: "Aug 03", value: 38 },
  { day: "Aug 05", value: 26 },
  { day: "Aug 07", value: 68 },
  { day: "Aug 09", value: 11 },
  { day: "Aug 11", value: 93 },
  { day: "Aug 12", value: 181 },
];

const trafficPerformance = [
  { day: "Jul 16", value: 1120 },
  { day: "Jul 18", value: 1680 },
  { day: "Jul 20", value: 940 },
  { day: "Jul 22", value: 2140 },
  { day: "Jul 24", value: 1820 },
  { day: "Jul 26", value: 1360 },
  { day: "Jul 28", value: 2480 },
  { day: "Jul 30", value: 2290 },
  { day: "Aug 01", value: 1940 },
  { day: "Aug 03", value: 1710 },
  { day: "Aug 05", value: 2660 },
  { day: "Aug 07", value: 2380 },
  { day: "Aug 09", value: 3210 },
  { day: "Aug 11", value: 2980 },
  { day: "Aug 12", value: 3470 },
];

const relatedStartups = [
  { name: "InstaGroups", category: "Education", summary: "The smart team generator for PE teachers, coaches, and educators.", revenue: "¥302", price: "$9k", multiple: "2.5x", tone: "ink", Icon: UsersThree },
  { name: "QuietForm", category: "No-code", summary: "A mature, self-serve SaaS with steady verified MRR and a loyal audience.", revenue: "¥21k", price: "$160k", multiple: "0.6x", tone: "periwinkle", Icon: FileText },
  { name: "NexoMind AI", category: "Developer Tools", summary: "A private AI journal that turns everyday thinking into clarity.", revenue: "¥1.1k", price: "$10k", multiple: "0.7x", tone: "cream", Icon: Lightbulb },
  { name: "TradingBox Pro", category: "Fintech", summary: "Proprietary algorithmic trading tools for independent traders.", revenue: "¥26k", price: "$99k", multiple: "0.3x", tone: "coral", Icon: TrendUp },
  { name: "MineMarket", category: "Marketing", summary: "Short-form content workflows and training for solo operators.", revenue: "¥2k", price: "$13k", multiple: "0.5x", tone: "sand", Icon: VideoCamera },
  { name: "Ploxto", category: "Artificial Intelligence", summary: "A browser-based photo editor with a beautiful and focused creative flow.", revenue: "¥2.2k", price: "$45k", multiple: "1.7x", tone: "mint", Icon: Palette },
];

function DetailMark() {
  return <img className="detail-product-mark" src={firstRevenueMark} alt="" aria-hidden="true" />;
}

function MetricCard({ label, children, detail, icon: Icon }) {
  return <article className="metric-card">
    <p>{label}</p>
    <div className="metric-value">{Icon && <Icon weight="fill" />}{children}</div>
    {detail && <small>{detail}</small>}
  </article>;
}

function InsightBlock({ icon: Icon, label, children, className = "" }) {
  return <article className={`insight-block ${className}`}>
    <p className="insight-label"><Icon weight="fill" />{label}</p>
    {children}
  </article>;
}

function Tag({ children, soft = false }) {
  return <span className={`detail-tag ${soft ? "soft" : ""}`}>{children}</span>;
}

function ProductDetail({ language, onToggle, productSlug = "firstrevenue" }) {
  const [range, setRange] = useState("Last 30 days");
  const [series, setSeries] = useState("revenue");
  const [followed, setFollowed] = useState(false);
  const [toast, setToast] = useState("");

  const announce = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2800);
  };

  const isChinese = language === "zh";
  const isCloudNotes = productSlug === "cloud-notes";
  const detail = isCloudNotes ? {
    name: "Cloud Notes",
    description: "A local-first writing space with instant sync, Markdown, and thoughtful search. Keep your notes private by default, then find the right idea when you need it.",
    descriptionZh: "一款本地优先的写作空间，支持即时同步、Markdown 与贴心搜索。默认保持私密，在需要时快速找到正确的想法。",
    url: "https://cloudnotes.app",
    revenue: "¥8,420",
    mrr: "¥2,180",
    visits: "24,680",
    trafficChange: "18%",
    founder: "Yun L.",
    founded: "January 2025",
    foundedZh: "2025 年 1 月",
    location: "Singapore",
    locationZh: "新加坡",
  } : {
    name: "FirstRevenue",
    description: "Selling FirstRevenue, a web app that helps beginners start earning money online. Users get a personalized roadmap and daily action plans based on their goals, budget and experience. Growth is mostly automated TikTok slideshows, with room to expand into Instagram and paid ads as revenue grows.",
    descriptionZh: "首笔营收是一款帮助新手开始在线赚钱的 Web 应用，提供基于目标、预算与经验的个性化路径和每日行动计划。",
    url: "https://firstrevenue.app",
    revenue: "¥2,246",
    mrr: "¥1,347",
    visits: "18,420",
    trafficChange: "24%",
    founder: "Sebastian L.",
    founded: "March 2026",
    foundedZh: "2026 年 3 月",
    location: "United Kingdom",
    locationZh: "英国",
  };
  const detailContent = isCloudNotes ? {
    value: "Cloud Notes is a local-first writing space where ideas can settle without interruption.",
    valueZh: "观云笔记是一款本地优先的写作空间，让想法在不被打扰的地方自然沉淀。",
    audience: "Writers, researchers, and thoughtful teams",
    audienceZh: "写作者、研究者与注重思考的团队",
    pricing: "Cloud Notes Free, Pro $8/month, Studio $15/month.",
    pricingZh: "观云笔记免费版，专业版每月 $8，工作室版每月 $15。",
    rating: "126 verified product ratings",
    ratingZh: "126 条已验证产品评分",
    problem: "Helps people write, organize, and retrieve meaningful notes without giving up privacy.",
    problemZh: "帮助人们在不牺牲隐私的前提下，书写、整理并找回有价值的笔记。",
    market: ["Productivity", "Writing", "SaaS & Tools", "AI"],
    founderMessage: "We are building Cloud Notes slowly and carefully, with privacy and calm at the center.",
    founderMessageZh: "我们会缓慢而认真地打造观云笔记，把隐私与从容放在中心。",
    founderRole: "Founder of Cloud Notes",
    founderRoleZh: "观云笔记创始人",
  } : {
    value: "FirstRevenue is a guided program that helps young entrepreneurs earn their very first money online.",
    valueZh: "首笔营收是一套引导式课程，帮助年轻创业者在线赚到人生第一笔收入。",
    audience: "Young entrepreneurs",
    audienceZh: "年轻创业者",
    pricing: "Weekly $7.99, FirstRevenue Yearly $29.99, FirstRevenue Monthly $9.99, Lifetime Access discount $49.99, Lifetime Access $99.99.",
    pricingZh: "每周 $7.99，首笔营收年度版 $29.99，月度版 $9.99，终身访问优惠价 $49.99，终身访问 $99.99。",
    rating: "77 verified product ratings",
    ratingZh: "77 条已验证产品评分",
    problem: "Helps young entrepreneurs earn their first revenue online without prior experience.",
    problemZh: "帮助年轻创业者在没有经验的情况下赚到第一笔在线收入。",
    market: ["Education", "SaaS & Tools", "Productivity", "Content Creation", "AI", "Sales"],
    founderMessage: "We are focusing on other projects, and looking to sell at a fair price.",
    founderMessageZh: "我们正在专注于其他项目，并希望以合理价格出售首笔营收。",
    founderRole: "Founder of FirstRevenue",
    founderRoleZh: "首笔营收创始人",
  };
  const displayName = productLabel(detail.name, language);
  const activeSeries = series === "visits" ? trafficPerformance : performance;
  const data = range === "Last 7 days" ? activeSeries.slice(-7) : activeSeries;
  const chartData = data.map((point) => ({ ...point, day: shortDateLabel(point.day, language) }));
  const seriesLabel = series === "visits" ? (isChinese ? "访问量" : "Visits") : (isChinese ? "营收" : "Revenue");
  const seriesValue = series === "visits" ? detail.visits : detail.revenue;
  const formatChartValue = (value) => series === "visits" ? value.toLocaleString() : `¥${value.toLocaleString()}`;
  const seriesColor = series === "visits" ? "#18a99a" : "#315ff5";

  return (
    <div className="detail-shell">
      {toast && <div className="toast detail-toast" role="status"><CheckCircle weight="fill" />{toast}</div>}
      <SiteHeader language={language} onToggle={onToggle} onSearch={() => announce(language === "zh" ? "搜索已准备就绪。" : "Search is ready.")} />

      <main className="detail-main">
        <nav className="breadcrumbs" aria-label={isChinese ? "面包屑导航" : "Breadcrumb"}><a href="/">VLauncher</a><CaretRight /><a href="/#discover">{isChinese ? "产品市场" : "Marketplace"}</a><CaretRight /><span>{displayName}</span></nav>

        <section className="project-overview" aria-labelledby="project-title">
          <div className="project-identity">
            {isCloudNotes ? <Mark Icon={Cloud} tone="sky" /> : <DetailMark />}
            <div>
              <h1 id="project-title">{displayName}</h1>
              <p>{isChinese ? detail.descriptionZh : detail.description}</p>
            </div>
          </div>
          <div className="project-actions">
            <button className="secondary-button" onClick={() => announce(isChinese ? "产品链接已复制。" : "Launch link copied to your clipboard.")}><ShareNetwork />{isChinese ? "分享" : "Share"}</button>
            <a className="visit-button" href={detail.url} target="_blank" rel="noreferrer">{isChinese ? "访问官网" : "Visit"} <ArrowSquareOut /></a>
          </div>
        </section>

        <section className="metric-grid" aria-label={isChinese ? `${displayName} 核心指标` : `${detail.name} key metrics`}>
          <MetricCard label={isChinese ? "近 30 天营收" : "Last 30 days revenue"} detail={isChinese ? "自 2026 年 6 月 25 日开始追踪" : "Tracked since Jun 25, 2026"}><strong>{detail.revenue}</strong></MetricCard>
          <MetricCard label="MRR" detail={isChinese ? (isCloudNotes ? "214 个活跃订阅" : "96 个活跃订阅") : (isCloudNotes ? "214 active subscriptions" : "96 active subscriptions")}><strong>{detail.mrr}</strong></MetricCard>
          <MetricCard label={isChinese ? "创始人" : "Founder"} detail={isChinese ? `${displayName} 创始人` : `Founder of ${detail.name}`} icon={UserCircle}><strong>{detail.founder}</strong></MetricCard>
          <MetricCard label={isChinese ? "近 30 天访问量" : "Last 30 days visits"} detail={isChinese ? `较上周期 +${detail.trafficChange}` : `+${detail.trafficChange} vs previous period`} icon={TrendUp}><strong>{detail.visits}</strong></MetricCard>
          <MetricCard label={isChinese ? "创立时间" : "Founded"} detail={isChinese ? detail.locationZh : detail.location} icon={MapPin}><strong>{isChinese ? detail.foundedZh : detail.founded}</strong></MetricCard>
        </section>

        <section className="performance-section" aria-labelledby="performance-title">
          <div className="performance-head">
            <div><p className="section-kicker">{isChinese ? "已验证的业绩" : "VERIFIED PERFORMANCE"}</p><h2 id="performance-title">{seriesValue} <span>{seriesLabel}</span></h2></div>
            <div className="performance-controls">
              <div className="series-switcher" role="group" aria-label={isChinese ? "选择业绩指标" : "Choose performance metric"}>
                {["revenue", "visits"].map((option) => <button key={option} className={`select-button ${series === option ? "active" : ""}`} onClick={() => { setSeries(option); announce(isChinese ? `当前展示${option === "visits" ? "访问量" : "营收"}数据。` : `${option === "visits" ? "Visits" : "Revenue"} is the active performance series.`); }}><span className={`series-dot ${option === "visits" ? "visits-dot" : ""}`} />{option === "visits" ? (isChinese ? "访问量" : "Visits") : (isChinese ? "营收" : "Revenue")}</button>)}
              </div>
              <div className="range-switcher" role="group" aria-label={isChinese ? `${seriesLabel}时间范围` : `${seriesLabel} time range`}>
                {["Last 7 days", "Last 30 days"].map((option) => <button key={option} className={range === option ? "active" : ""} onClick={() => setRange(option)}>{isChinese ? (option === "Last 7 days" ? "近 7 天" : "近 30 天") : option}</button>)}
              </div>
            </div>
          </div>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height={336}>
              <AreaChart data={chartData} margin={{ top: 12, right: 16, bottom: 4, left: -18 }}>
                <CartesianGrid vertical={false} stroke="#e7ebf3" strokeDasharray="2 4" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#7e889b", fontSize: 12 }} interval="preserveStartEnd" />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#7e889b", fontSize: 12 }} tickFormatter={formatChartValue} width={54} />
                <Tooltip cursor={{ stroke: "#cfd8ff", strokeDasharray: "3 3" }} contentStyle={{ border: "1px solid #dde4f1", borderRadius: 10, boxShadow: "0 10px 24px rgba(26,38,69,.10)", fontSize: 13 }} formatter={(value) => [formatChartValue(value), seriesLabel]} />
                <Area type="monotone" dataKey="value" stroke={seriesColor} strokeWidth={2.4} fill="transparent" activeDot={{ r: 5, fill: seriesColor, stroke: "#fff", strokeWidth: 2 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-foot"><span><span className="profit-key" />{series === "visits" ? (isChinese ? "访问量来自站点分析" : "Visits sourced from site analytics") : (isChinese ? "营收已通过 RevenueCat 验证" : "Revenue verified with RevenueCat")}</span><button onClick={() => announce(isChinese ? "已选择经典图表视图。" : "Classic chart view selected.")}>{isChinese ? "经典视图" : "Classic"} <CaretDown /></button></div>
        </section>

        <p className="verification-line"><ShieldCheck weight="fill" />{isChinese ? <>营收已通过 <strong>RevenueCat</strong> 验证 · 自 2026 年 6 月 25 日开始追踪 · 最后更新：2026 年 8 月 12 日 06:42</> : <>Revenue verified with <strong>RevenueCat</strong> · Tracked since Jun 25, 2026 · Last updated: Aug 12, 2026, 06:42 AM</>}</p>

        <section className="insights-section" aria-labelledby="insights-title">
          <div className="detail-section-heading"><div><p className="section-kicker">{isChinese ? "业务概览" : "THE BUSINESS AT A GLANCE"}</p><h2 id="insights-title">{isChinese ? "产品洞察" : "Startup insights"}</h2></div><span>{isChinese ? "已验证的创作者资料" : "Verified maker profile"}</span></div>
          <div className="insights-layout">
            <div className="insights-column">
              <InsightBlock icon={Lightbulb} label={isChinese ? "价值主张" : "VALUE PROPOSITION"} className="insight-primary"><h3>{isChinese ? detailContent.valueZh : detailContent.value}</h3></InsightBlock>
              <InsightBlock icon={UsersThree} label={isChinese ? "目标用户" : "AUDIENCE"}><p>{isChinese ? detailContent.audienceZh : detailContent.audience}</p><Tag>B2C</Tag></InsightBlock>
              <InsightBlock icon={CurrencyDollar} label={isChinese ? "定价" : "PRICING"}><p>{isChinese ? detailContent.pricingZh : detailContent.pricing}</p></InsightBlock>
              <InsightBlock icon={Star} label={isChinese ? "应用评分" : "APP RATING"}><div className="rating"><strong>4.8</strong><span>★★★★★</span></div><small>{isChinese ? detailContent.ratingZh : detailContent.rating}</small></InsightBlock>
              <InsightBlock icon={PaperPlaneTilt} label={isChinese ? "营销渠道" : "MARKETING CHANNELS"}><div className="tag-row"><Tag>TikTok</Tag><Tag>Instagram</Tag></div></InsightBlock>
            </div>
            <div className="insights-column">
              <InsightBlock icon={Compass} label={isChinese ? "解决的问题" : "PROBLEM SOLVED"}><p>{isChinese ? detailContent.problemZh : detailContent.problem}</p></InsightBlock>
              <InsightBlock icon={TrendUp} label={isChinese ? "访问量洞察" : "TRAFFIC INSIGHTS"}><p>{isChinese ? `近 30 天共有 ${detail.visits} 次访问，较上一个周期增长 ${detail.trafficChange}。` : `${detail.visits} visits in the last 30 days, up ${detail.trafficChange} from the previous period.`}</p><Tag>{isChinese ? "站点分析" : "Site analytics"}</Tag></InsightBlock>
              <InsightBlock icon={SquaresFour} label={isChinese ? "所属市场" : "MARKET"}><div className="tag-row">{detailContent.market.map((tag) => <Tag key={tag}>{categoryLabel(tag, language)}</Tag>)}</div></InsightBlock>
              <InsightBlock icon={FileText} label={isChinese ? "技术栈" : "TECH STACK"}><div className="stack-group"><span>{isChinese ? "前端" : "Frontend"}</span><div className="tag-row"><Tag>Next.js</Tag><Tag>TypeScript</Tag></div></div><div className="stack-group"><span>{isChinese ? "后端" : "Backend"}</span><div className="tag-row"><Tag>Supabase</Tag></div></div></InsightBlock>
              <InsightBlock icon={LinkSimple} label={isChinese ? "产品链接" : "PRODUCT LINKS"}><div className="tag-row"><a href={detail.url} target="_blank" rel="noreferrer">{isChinese ? "官网" : "Website"} <ArrowSquareOut /></a><button onClick={() => announce(isChinese ? "产品链接已复制。" : "Product link copied.")}>{isChinese ? "复制链接" : "Copy link"} <CopySimple /></button></div></InsightBlock>
            </div>
          </div>
        </section>

        <section className="showcase-section" aria-labelledby="showcase-title">
          <div className="detail-section-heading"><div><p className="section-kicker">{isChinese ? "产品预览" : "PRODUCT PREVIEW"}</p><h2 id="showcase-title">{isChinese ? "查看产品" : "See the product"}</h2></div><a href={detail.url} target="_blank" rel="noreferrer">{detail.url.replace("https://", "")} <ArrowSquareOut /></a></div>
          <img src={firstRevenueShowcase} alt={isChinese ? `${displayName} 的 Web 产品界面，展示课程、行动目标与进度` : `${detail.name} web app screens showing lessons, action goals, and progress`} className="product-showcase" />
        </section>

        <section className="founder-message" aria-labelledby="founder-title">
          <div className="detail-section-heading"><div><p className="section-kicker">{isChinese ? "来自创作者" : "FROM THE MAKER"}</p><h2 id="founder-title">{isChinese ? "创始人寄语" : "Message from the founder"}</h2></div></div>
          <div className="founder-body"><img src={founderAvatar} alt={detail.founder} /><blockquote>“{isChinese ? detailContent.founderMessageZh : detailContent.founderMessage}”<cite>{detail.founder} <span>{isChinese ? detailContent.founderRoleZh : detailContent.founderRole}</span></cite></blockquote><button className={`follow-button ${followed ? "following" : ""}`} onClick={() => { setFollowed((value) => !value); announce(followed ? (isChinese ? `你已取消关注 ${displayName}。` : `You stopped following ${detail.name}.`) : (isChinese ? `你正在关注 ${displayName}。` : `You’re following ${detail.name}.`)); }}>{followed ? <CheckCircle weight="fill" /> : <Bell />} {followed ? (isChinese ? "已关注" : "Following") : (isChinese ? "关注产品" : "Follow startup")}</button></div>
        </section>

        <section className="affiliate-strip"><span>{isChinese ? <>认识想购买 {displayName} 的人？你可以获得 <strong>$300。</strong></> : <>Know a buyer for {detail.name}? You could earn <strong>$300.</strong></>}</span><button onClick={() => announce(isChinese ? "联盟计划详情已准备好查看。" : "Affiliate program details are ready to review.")}>{isChinese ? "成为 VLauncher 联盟伙伴" : "Become a VLauncher affiliate"} <ArrowRight /></button></section>

        <section className="related-section" aria-labelledby="related-title">
          <div className="detail-section-heading"><div><p className="section-kicker">{isChinese ? "产品市场" : "MARKETPLACE"}</p><h2 id="related-title">{isChinese ? "更多待售产品" : "More startups for sale"}</h2></div><a href="/#discover">{isChinese ? "查看产品市场" : "View marketplace"} <ArrowRight /></a></div>
          <div className="related-grid">{relatedStartups.map(({ name, category, summary, revenue, price, multiple, tone, Icon }) => <article className={`related-card ${tone}`} key={name}><div className="related-top"><span className="related-icon"><Icon weight="fill" /></span><span className="for-sale">{isChinese ? "待售" : "For sale"}</span></div><h3>{productLabel(name, language)}</h3><p className="related-category">{categoryLabel(category, language)}</p><p className="related-summary">{copyFor(summary, language)}</p><dl><div><dt>{isChinese ? "营收" : "Revenue"}</dt><dd>{revenue}</dd></div><div><dt>{isChinese ? "报价" : "Asking price"}</dt><dd>{price}</dd></div><div><dt>{isChinese ? "倍数" : "Multiple"}</dt><dd>{multiple}</dd></div></dl><a href={`#${name.toLowerCase().replaceAll(" ", "-")}`} onClick={(event) => { event.preventDefault(); announce(isChinese ? `${productLabel(name, language)} 即将打开。` : `${name} is opening next.`); }}>{isChinese ? "查看产品" : "View startup"} <ArrowRight /></a></article>)}</div>
        </section>
      </main>

      <footer className="detail-footer"><a className="brand" href="/"><span className="brand-mark"><VLauncherLogo /></span><span>VLauncher</span></a><span>{isChinese ? "为独立创作者和下一个好想法而生。" : "Built for independent makers and the next good idea."}</span><span>© 2026 VLauncher</span></footer>
    </div>
  );
}

export function App() {
  const [language, setLanguage] = useState(() => window.localStorage.getItem("vlauncher-language") === "zh" ? "zh" : "en");
  const toggleLanguage = () => setLanguage((current) => current === "en" ? "zh" : "en");

  useEffect(() => {
    window.localStorage.setItem("vlauncher-language", language);
    document.documentElement.lang = translations[language].locale;
  }, [language]);

  const pageProps = { language, onToggle: toggleLanguage };
  if (window.location.pathname.startsWith("/launch/success")) return <LaunchSuccessPage {...pageProps} />;
  if (window.location.pathname.startsWith("/launch")) return <LaunchPage {...pageProps} />;
  if (window.location.pathname.startsWith("/startup/cloud-notes")) return <ProductDetail {...pageProps} productSlug="cloud-notes" />;
  if (window.location.pathname.startsWith("/startup/firstrevenue")) return <ProductDetail {...pageProps} />;
  if (window.location.pathname.startsWith("/weekly-launch")) return <WeeklyLaunchPage {...pageProps} />;
  if (window.location.pathname.startsWith("/products")) return <ProductsPage {...pageProps} />;
  if (window.location.pathname.startsWith("/makers")) return <MakersPage {...pageProps} />;
  if (window.location.pathname.startsWith("/learn")) return <LearnPage {...pageProps} />;
  return <HomePage {...pageProps} />;
}
