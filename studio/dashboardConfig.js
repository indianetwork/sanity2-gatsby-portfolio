export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f2b9a34a3f03260d5d8853',
                  title: 'Sanity Studio',
                  name: 'sanity-2-gatsby-portfolio-studio',
                  apiId: '8384554c-5828-4679-a62d-a308fa538b96'
                },
                {
                  buildHookId: '61f2b9a34a3f0321a75d8a22',
                  title: 'Portfolio Website',
                  name: 'sanity-2-gatsby-portfolio',
                  apiId: '9cc9871e-bd2f-45a9-b088-c9cacf50f47b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/indianetwork/sanity2-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-2-gatsby-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
