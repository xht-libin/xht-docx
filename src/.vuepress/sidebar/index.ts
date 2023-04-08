import { sidebar } from "vuepress-theme-hope";

export default sidebar([
    {
        text: "JAVA", children: [
            {text: 'Bio', link: '/JavaSE/Bio.md'},
            {text: 'io', link: '/JavaSE/io.md'},
            {text: 'JDK8新特性', link: '/JavaSE/JDK8新特性.md'},
            {text: 'network', link: '/JavaSE/network.md'},
            {text: 'thread', link: '/JavaSE/thread.md'},
            {text: '工具类', link: '/JavaSE/工具类.md'},
            {text: 'logback', link: '/SpringBoot/logback.md'},
            {text: '实体转换MapStruct', link: '/其他/实体转换MapStruct.md'},
        ]
    },
    {
        text: "项目工具", children: [
            {text: 'Git', link: '/git/Git.md'},
            {text: 'Maven', link: '/package/Maven.md'},
            {text: 'Gradle', link: '/package/Gradle.md'},
        ]
    },
    {
        text: '数据库', children: [
            {text: 'MongoDB', link: '/databases/MongoDB.md'},
            {text: 'oracle常用命令', link: '/databases/oracle常用命令.md'},
            {text: 'mysql8安装-win', link: '/liunx/mysql8安装-win.md'},
            {text: 'oracle-liunx', link: '/liunx/oracle-liunx.md'},
            {text: 'mysql', link: '/mysql/mysql.md'},
        ]
    },
    {
        text: "Linux", children: [
            {text: 'Liunx命令', link: '/liunx/Liunx命令.md'},
            {text: 'Docker', link: '/Docker/Docker.md'},
            {text: 'nginx', link: '/nginx/nginx.md'},
            {text: 'redis', link: '/redis/redis.md'},
            {text: 'Shell', link: '/Shell/Shell.md'},
            {text: 'ntpd时间服务器搭建', link: '/liunx/ntpd时间服务器搭建.md'},
            {text: 'rsync', link: '/liunx/rsync&& ssh 无密码 传输文件.md'},
            {text: 'zooKeeper安装', link: '/liunx/zooKeeper安装.md'},
            {text: '服务自启动', link: '/liunx/服务自启动.md'},
        ]
    },
    {
        text: "后端框架", children: [
            {text: 'Spring注解版', link: '/Spring/Spring注解版.md'},
            {text: 'SpringBoot', link: '/SpringBoot/SpringBoot.md'},
            {text: 'Spring注解大全', link: '/SpringBoot/Spring注解大全.md'},
            {text: 'Swagger', link: '/Swagger/Swagger.md'},
            {text: '反应式编程-Webflux', link: '/SpringBoot/反应式编程-Webflux.md'},
            {text: '源码解析', link: '/SpringBoot/源码解析.md'},
            {text: 'SpringCloud', link: '/SpringCloud/SpringCloud.md'},
            {text: '分布式ID', link: '/SpringCloud/分布式ID.md'},
            {text: 'SpringSecurity', link: '/SpringSecurity/SpringSecurity.md'},
            {text: 'jwt', link: '/jwt/jwt.md'},
            {text: 'MyBatis笔记', link: '/MyBatis/MyBatis笔记.md'},
            {text: 'MyBatisPlus', link: '/MyBatisPlus/MyBatisPlus.md'},
        ]
    },
    {
        text: "前端", children: [
            {text: 'vue', link: '/web/vue.md'},
            {text: 'vue插件-3D轮播插件', link: '/web/vue插件-3D轮播插件(vue-carousel-3d).md'},
            {text: 'vue插件综合', link: '/web/vue插件综合.md'},
            {text: 'vue3', link: '/web/vue3.md'},
        ]
    },
    {
        text: "其他", children: [
            {text: 'powerdesinger的基本使用', link: '/其他/powerdesinger的基本使用/powerdesinger的基本使用.md'},
            {text: 'ps常用技巧', link: '/其他/ps常用技巧.md'},
            {text: '常用端口', link: '/其他/常用端口.md'},
            {text: '文件上传类型', link: '/其他/文件上传类型.md'}
        ]
    }
]);
