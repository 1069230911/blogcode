const sidebar = {
    '/fore/JavaScript/': [
        {
            
            title: '基础页',
            collapsable: true,
            children: [
                ['/fore/JavaScript/base/', '基础']
            ]
        },
    ],

    '/fore/JavaScript/advanced/': [
        {
            title: '进阶',
            collapsable: true,
            children: ['/fore/JavaScript/advanced/']
        }
    ],

    '/tools/': [
        {
            title: 'mardown相关用法',
            children: ['/tools/markdown/']
        },
        {
            title: 'git相关用法',
            children: ['/tools/git/']
        }
    ]
}

module.exports = sidebar;