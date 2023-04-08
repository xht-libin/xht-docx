import {defineUserConfig} from "vuepress";
import theme from "./theme";
// @ts-ignore
export default defineUserConfig({
    base: "/",
    lang: "zh-CN",
    title: '小糊涂文档知识总结', //网站的标题。这将是所有页面标题的前缀，并显示在默认主题的导航栏中
    description: '小糊涂知识总结', //网站描述。这将在页面 HTML 中表现为一个 <meta> 标签。
    theme,
    shouldPrefetch: false,
    markdown: {
        toc: {
            level:[1,2,3]
        },
        headers: {
            level:[1,2,3]
        }
    },
    plugins: [

    ],
})
;
