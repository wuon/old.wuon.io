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
            use: '@zefman/gridsome-source-instagram',
            options: {
                username: 'danielktwu', // Instagram username
                typeName: 'InstagramPhoto' // The GraphQL type you want the photos to be added under. Defaults to InstagramPhoto
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
