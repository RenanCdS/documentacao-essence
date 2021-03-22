module.exports = {
  someSidebar: {
    Docusaurus: ['doc1', 'doc2', 'doc3'],
    Alphas: [
      {
        Cliente: [
          'alphas/client/client-index',
          {
            Oportunidade: [
              {
                Estados: [
                  'alphas/client/opportunity/levels/addressed',
                  'alphas/client/opportunity/levels/benefit-accrued',
                  'alphas/client/opportunity/levels/identified',
                  'alphas/client/opportunity/levels/solution-needed',
                  'alphas/client/opportunity/levels/value-established',
                  'alphas/client/opportunity/levels/viable',
                ]
              },
              {
                Produtos: [
                  {
                    'Visão do produto': [
                      {
                        Atividades: [
                          'alphas/client/opportunity/product/activities/identify-needs',
                          'alphas/client/opportunity/product/activities/preview-solution',
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            Stakeholder: [
              {
                Estados: [
                  'alphas/client/stakeholder/levels/in-agreement',
                  'alphas/client/stakeholder/levels/involved',
                  'alphas/client/stakeholder/levels/recognized',
                  'alphas/client/stakeholder/levels/represented',
                  'alphas/client/stakeholder/levels/satisfied-for-deployment',
                  'alphas/client/stakeholder/levels/satisfied-in-use',
                ]
              },
              {
                Produtos: [
                  {
                    'Rede de Stakeholders': [
                      {
                        Atividades: [
                          'alphas/client/stakeholder/product/activities/stakeholder-identification'
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        'Solução': [
          'alphas/solution/solution-index',
          'alphas/solution/requirements',
          'alphas/solution/software-system'
        ],
        'Esforço': [
          'alphas/endeavor/endeavor-index',
          'alphas/endeavor/team', 'alphas/endeavor/way-of-working',
          'alphas/endeavor/work'
        ]
      }
    ],
    'Competências': ['doc1',],
  },
};
