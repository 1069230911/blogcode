const nav = require('./navbar');
const sidebar = require('./sidebar');
module.exports = {
    base: '/blog/',
    lang: 'zh-CN',
    title: 'loudScream',
    head: [
        ['link', { rel: 'icon', href: '/images/blog-icon.png' }]
    ],
    themeConfig: {
        logo: '/images/blog-icon.png', // 页面logo
        nav,
        sidebar
    },

    markdown: {
        lineNumbers: true
    }
}