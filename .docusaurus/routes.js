
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','f0f'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','5f6'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','0df'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','9f1'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','f28'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','197'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','c41'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','a0e'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','a67'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','1e2'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','dba'),
  exact: true,
},
{
  path: '/docs/create-a-blog-post',
  component: ComponentCreator('/docs/create-a-blog-post','12e'),
  exact: true,
},
{
  path: '/docs/create-a-document',
  component: ComponentCreator('/docs/create-a-document','3f4'),
  exact: true,
},
{
  path: '/docs/create-a-page',
  component: ComponentCreator('/docs/create-a-page','486'),
  exact: true,
},
{
  path: '/docs/markdown-features',
  component: ComponentCreator('/docs/markdown-features','f04'),
  exact: true,
},
{
  path: '/docs/thank-you',
  component: ComponentCreator('/docs/thank-you','3bd'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
