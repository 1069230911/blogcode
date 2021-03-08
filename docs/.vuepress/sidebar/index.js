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
            title: 'MarkDown相关用法',
            children: [ '/tools/markdown/' ]
        },
        {
            title: 'Git相关用法',
            children: [ '/tools/git/base.md', '/tools/git/norm.md', '/tools/git/question.md' ]
        }
    ]
}

module.exports = sidebar;