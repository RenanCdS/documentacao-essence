module.exports = {
  someSidebar: {
    Docusaurus: ['doc1', 'doc2', 'doc3'],
    Alphas: [
      {
        Cliente: [
          'alphas/client/client-index',
          'alphas/client/opportunity',
          {
            Stakeholder: [
              'alphas/client/stakeholder/levels/in-agreement',
              'alphas/client/stakeholder/levels/involved',
              'alphas/client/stakeholder/levels/recognized',
              'alphas/client/stakeholder/levels/represented',
              'alphas/client/stakeholder/levels/satisfied-for-deployment',
              'alphas/client/stakeholder/levels/satisfied-in-use',
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
