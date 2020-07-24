// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'wuon.io',
    siteDescription: 'wuon\'s personal website :)',
    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Post',
                path: 'blog/posts/*.md',
                route: '/blog/:slug',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Partner',
                path: 'blog/partners/*.md',
                route: '/partner/:slug',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Project',
                path: 'blog/projects/*.md',
            }
        }
    ],
    transformers: {
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
            plugins: [
                '@gridsome/remark-prismjs'
            ]
        }
    },
}
