import {hopeTheme} from "vuepress-theme-hope";
import zhNavbar from "./navbar/index.js";
import sidebars from "./sidebar/index.js";

export default hopeTheme({
    locales: {},
    sidebar: sidebars,
    hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
    author: {
        name: "小糊涂",
        url: "https://mrhope.site",
        email: "616326125@qq.com",
    },
    darkmode: 'toggle',
    fullscreen: true,
    backToTop: true,
    themeColor: {
        blue: "#2196f3",
        red: "#f26d6d",
        green: "#3eaf7c",
        orange: "#fb9b5f",
    },
    iconAssets: "iconfont",
    logo: "/logo.jpg",
    docsDir: "/src",
    docsBranch: 'master',
    repo: "xht-libin/notes",  // 默认为 GitHub. 同时也可以是一个完整的 URL
    repoLabel: "GitHub",  // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    repoDisplay: true,  // 是否在导航栏内显示仓库链接，默认为 `true`
    navbar: zhNavbar,
    navbarIcon: true,
    navbarLayout: {start: ["Brand"], center: [], end: ["Links", "Language", "Repo", "Outlook", "Search"]},
    encrypt: {
        global: false,
        admin: '123456',
    },
    breadcrumb: false,
    breadcrumbIcon: false,
    prevLink: true,
    nextLink: true,
    titleIcon: false,
    pageInfo: ["Author", "Tag", "ReadingTime", "Word"],
    lastUpdated: true,
    contributors: false,
    editLink: true,
    displayFooter: false,
    print: true,
    toc: true,
    headerDepth: 6,
    plugins: {
        autoCatalog: {
            level: 3
        },
        comment: false,
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            container: true,
            demo: true,
            echarts: true,
            figure: true,
            flowchart: true,
            gfm: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
        },
    },
});
