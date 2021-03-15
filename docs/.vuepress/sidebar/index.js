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

    '/backEnd/db/': [
        {
            title: 'MongoDB',
            collapsable: true,
            children: [ '/backEnd/db/mongodb/commonUse.md' ]
        }
    ],

    '/tools/': [
        {
            title: 'Markdown',
            children: [ '/tools/markdown/' ]
        },
        {
            title: 'Git',
            children: [ '/tools/git/base.md', '/tools/git/norm.md', '/tools/git/question.md' ]
        }
    ]
}

module.exports = sidebar;