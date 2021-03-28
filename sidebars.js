module.exports = {
  someSidebar: {
    Areas: [
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
                      'areas/client/alphas/opportunity/levels/addressed',
                      'areas/client/alphas/opportunity/levels/benefit-accrued',
                      'areas/client/alphas/opportunity/levels/identified',
                      'areas/client/alphas/opportunity/levels/solution-needed',
                      'areas/client/alphas/opportunity/levels/value-established',
                      'areas/client/alphas/opportunity/levels/viable',
                    ]
                  },
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
                  {
                    Produtos: [
                      {
                        'Rede de Stakeholders': [
                          {
                            Atividades: [
                            ]
                          }
                        ]
                      }
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
                  {
                    Produtos: [
                      {
                        'Visão do produto': [
                          {
                            Atividades: [
                              'areas/client/alphas/opportunity/products/activities/identify-needs',
                              'areas/client/alphas/opportunity/products/activities/preview-solution',
                            ]
                          }
                        ]
                      }
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
                  {
                    Produtos: [
                      {
                        'Rede de Stakeholders': [
                          {
                            Atividades: [
                            ]
                          }
                        ]
                      }
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
                  {
                    Produtos: [
                      {
                        'Rede de Stakeholders': [
                          {
                            Atividades: [
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    'Competências': ['competences/product-representative'],
  },
};
