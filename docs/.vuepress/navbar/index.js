const navbar =  [
    {text: '首页', link: '/'},

    {
        text: '前端', 
        items: [
            {
                text: 'JavaScript',
                items: [
                    {
                        text: '基础',
                        link: '/fore/JavaScript/base/'
                    },
                    {
                        text: '进阶',
                        link: '/fore/JavaScript/advanced/'
                    }
                ]
            },
            {
                text: '前端框架',
                items: [
                    {
                        text: 'Vue',
                        link: '/fore/framework/vue/'
                    },
                ]
            },
            {
                text: '可视化',
                items: [
                    {
                        text: 'D3',
                        link: '/fore/visualisation/D3/'
                    },
                    {
                        text: 'Echarts',
                        link: '/fore/visualisation/Echarts/'
                    }
                ]
            },
            {
                text: '工程化',
                items: [
                    {
                        text: 'Webpack',
                        link: '/fore/engineering/webpack/'
                    }
                ]
            },
        ]
    },
    
    {
        text: '后端',
        items: [
            {
                text: 'NodeJs',
                link: ''
            },

            {
                text: '数据库',
                items: [
                    {
                        text: 'MongoDB',
                        link: '/backEnd/db/'
                    }
                ]
            }
        ]
    },

    {
        text: '工具',
        link: '/tools/markdown/'
    }
    
]

module.exports = navbar;