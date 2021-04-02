module.exports = {
  someSidebar: {
    'Áreas': [
      {
        Cliente: [
          'areas/client/client-index',
          {
            Alphas: [
              {
                Oportunidade: [
                  {
                    Produtos: [
                      'areas/client/alphas/opportunity/products/product-vision/product-vision'
                    ]
                  },
                  'areas/client/alphas/opportunity/activities/opportunity-activities',
                  {
                    Estados: [
                      'areas/client/alphas/opportunity/levels/addressed',
                      'areas/client/alphas/opportunity/levels/benefit-accrued',
                      'areas/client/alphas/opportunity/levels/identified',
                      'areas/client/alphas/opportunity/levels/solution-needed',
                      'areas/client/alphas/opportunity/levels/value-established',
                      'areas/client/alphas/opportunity/levels/viable',
                    ]
                  },

                ]
              },
              {
                Stakeholder: [
                  {
                    Produtos: [
                      'areas/client/alphas/stakeholder/products/stakeholder-network/stakeholder-network'
                    ]
                  },
                  'areas/client/alphas/stakeholder/activities/stakeholder-activities',
                  {
                    Estados: [
                      'areas/client/alphas/stakeholder/levels/in-agreement',
                      'areas/client/alphas/stakeholder/levels/involved',
                      'areas/client/alphas/stakeholder/levels/recognized',
                      'areas/client/alphas/stakeholder/levels/represented',
                      'areas/client/alphas/stakeholder/levels/satisfied-for-deployment',
                      'areas/client/alphas/stakeholder/levels/satisfied-in-use',
                    ]
                  },
                ]
              }
            ]
          }
        ],
        'Solução': [
          'areas/solution/solution-index',
          {
            Alphas: [
              {
                Requisitos: [
                  {
                    Estados: [
                      'areas/solution/alphas/requirements/levels/requirements-conceived',
                      'areas/solution/alphas/requirements/levels/requirements-bounded',
                      'areas/solution/alphas/requirements/levels/requirements-coeherent',
                      'areas/solution/alphas/requirements/levels/requirements-acceptable',
                      'areas/solution/alphas/requirements/levels/requirements-addressed',
                      'areas/solution/alphas/requirements/levels/requirements-fullfilled',
                    ]
                  },
                  'areas/solution/alphas/requirements/activities/requirement-activities',
                  {
                    Produtos: [
                      'areas/solution/alphas/requirements/products/definition-of-done/definition-of-done',
                      'areas/solution/alphas/requirements/products/system-document/system-document',
                      'areas/solution/alphas/requirements/products/user-stories/user-stories',
                    ]
                  }
                ]
              },
              {
                'Sistema de software': [
                  {
                    Estados: [
                      'areas/client/alphas/stakeholder/levels/in-agreement',
                      'areas/client/alphas/stakeholder/levels/involved',
                      'areas/client/alphas/stakeholder/levels/recognized',
                      'areas/client/alphas/stakeholder/levels/represented',
                      'areas/client/alphas/stakeholder/levels/satisfied-for-deployment',
                      'areas/client/alphas/stakeholder/levels/satisfied-in-use',
                    ]
                  },
                  'areas/solution/alphas/software-system/activities/software-system-activities',
                  {
                    Produtos: [
                      'areas/solution/alphas/software-system/products/prototype/prototype',
                      'areas/solution/alphas/software-system/products/front-end/front-end',
                      'areas/solution/alphas/software-system/products/deploy/deploy',
                    ]
                  }
                ]
              }
            ]
          }
        ],
        'Esforço': [
          'areas/endeavor/endeavor-index',
          {
            Alphas: [
              {
                Time: [
                  {
                    Estados: [
                      'areas/client/alphas/opportunity/levels/addressed',
                      'areas/client/alphas/opportunity/levels/benefit-accrued',
                      'areas/client/alphas/opportunity/levels/identified',
                      'areas/client/alphas/opportunity/levels/solution-needed',
                      'areas/client/alphas/opportunity/levels/value-established',
                      'areas/client/alphas/opportunity/levels/viable',
                    ]
                  },
                  'areas/endeavor/alphas/team/activities/team-activities',
                  {
                    Produtos: [
                      'areas/endeavor/alphas/team/products/team-members/team-members'
                    ]
                  }
                ]
              },
              {
                'Maneira de trabalhar': [
                  {
                    Estados: [
                      'areas/client/alphas/stakeholder/levels/in-agreement',
                      'areas/client/alphas/stakeholder/levels/involved',
                      'areas/client/alphas/stakeholder/levels/recognized',
                      'areas/client/alphas/stakeholder/levels/represented',
                      'areas/client/alphas/stakeholder/levels/satisfied-for-deployment',
                      'areas/client/alphas/stakeholder/levels/satisfied-in-use',
                    ]
                  },
                  'areas/endeavor/alphas/way-of-working/activities/way-of-working-activities',
                  {
                    Produtos: [
                      'areas/endeavor/alphas/way-of-working/products/way-of-working/way-of-working-document'
                    ]
                  }
                ]
              },
              {
                Trabalho: [
                  {
                    Estados: [
                      'areas/client/alphas/stakeholder/levels/in-agreement',
                      'areas/client/alphas/stakeholder/levels/involved',
                      'areas/client/alphas/stakeholder/levels/recognized',
                      'areas/client/alphas/stakeholder/levels/represented',
                      'areas/client/alphas/stakeholder/levels/satisfied-for-deployment',
                      'areas/client/alphas/stakeholder/levels/satisfied-in-use',
                    ]
                  },
                  'areas/endeavor/alphas/work/activities/work-activities',
                  {
                    Produtos: [
                      'areas/endeavor/alphas/work/products/task-board/task-board'
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    'Competências': [
      'competences/product-representative',
      'competences/analyst',
      'competences/architect',
      'competences/designer',
      'competences/developer',
      'competences/manager',
      'competences/tester',
    ],
    'Membros': [
      'members/members'
    ]
  },
};
