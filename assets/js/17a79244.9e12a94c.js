(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{151:function(e,i,o){"use strict";o.d(i,"a",(function(){return c})),o.d(i,"b",(function(){return f}));var a=o(0),t=o.n(a);function n(e,i,o){return i in e?Object.defineProperty(e,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[i]=o,e}function r(e,i){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),o.push.apply(o,a)}return o}function A(e){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{};i%2?r(Object(o),!0).forEach((function(i){n(e,i,o[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i))}))}return e}function s(e,i){if(null==e)return{};var o,a,t=function(e,i){if(null==e)return{};var o,a,t={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],i.indexOf(o)>=0||(t[o]=e[o]);return t}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],i.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=t.a.createContext({}),p=function(e){var i=t.a.useContext(l),o=i;return e&&(o="function"==typeof e?e(i):A(A({},i),e)),o},c=function(e){var i=p(e.components);return t.a.createElement(l.Provider,{value:i},e.children)},d={inlineCode:"code",wrapper:function(e){var i=e.children;return t.a.createElement(t.a.Fragment,{},i)}},g=t.a.forwardRef((function(e,i){var o=e.components,a=e.mdxType,n=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(o),g=a,f=c["".concat(r,".").concat(g)]||c[g]||d[g]||n;return o?t.a.createElement(f,A(A({ref:i},l),{},{components:o})):t.a.createElement(f,A({ref:i},l))}));function f(e,i){var o=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var n=o.length,r=new Array(n);r[0]=g;var A={};for(var s in i)hasOwnProperty.call(i,s)&&(A[s]=i[s]);A.originalType=e,A.mdxType="string"==typeof e?e:a,r[1]=A;for(var l=2;l<n;l++)r[l]=o[l];return t.a.createElement.apply(null,r)}return t.a.createElement.apply(null,o)}g.displayName="MDXCreateElement"},200:function(e,i,o){"use strict";o.r(i),i.default="data:image/png;base64,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"},75:function(e,i,o){"use strict";o.r(i),o.d(i,"frontMatter",(function(){return r})),o.d(i,"metadata",(function(){return A})),o.d(i,"toc",(function(){return s})),o.d(i,"default",(function(){return p}));var a=o(3),t=o(7),n=(o(0),o(151)),r={id:"prototype",title:"Prot\xf3tipo",sidebar_label:"Prot\xf3tipo"},A={unversionedId:"areas/solution/alphas/software-system/products/prototype/prototype",id:"areas/solution/alphas/software-system/products/prototype/prototype",isDocsHomePage:!1,title:"Prot\xf3tipo",description:"- Vis\xe3o geral",source:"@site/docs/areas/solution/alphas/software-system/products/prototype/prototype.md",slug:"/areas/solution/alphas/software-system/products/prototype/prototype",permalink:"/documentacao-essence/docs/areas/solution/alphas/software-system/products/prototype/prototype",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/areas/solution/alphas/software-system/products/prototype/prototype.md",version:"current",sidebar_label:"Prot\xf3tipo",sidebar:"someSidebar",previous:{title:"Atividades relacionadas ao Alpha de Sistema de software",permalink:"/documentacao-essence/docs/areas/solution/alphas/software-system/activities/software-system-activities"},next:{title:"Front-end",permalink:"/documentacao-essence/docs/areas/solution/alphas/software-system/products/front-end/front-end"}},s=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[{value:"Defini\xe7\xe3o de experi\xeancia de usu\xe1rio",id:"defini\xe7\xe3o-de-experi\xeancia-de-usu\xe1rio",children:[]},{value:"Defini\xe7\xe3o de interface",id:"defini\xe7\xe3o-de-interface",children:[]},{value:"Valida\xe7\xe3o de interface",id:"valida\xe7\xe3o-de-interface",children:[]},{value:"Finaliza\xe7\xe3o do layout",id:"finaliza\xe7\xe3o-do-layout",children:[]}]},{value:"Atividades relacionadas",id:"atividades-relacionadas",children:[]}],l={toc:s};function p(e){var i=e.components,r=Object(t.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},l,r,{components:i,mdxType:"MDXLayout"}),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#vis%C3%A3o-geral"},"Vis\xe3o geral")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#atividades-relacionadas"},"Atividades relacionadas"))),Object(n.b)("p",null,Object(n.b)("img",{alt:"Workflow",src:o(200).default})),Object(n.b)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#defini%C3%A7%C3%A3o-de-experi%C3%AAncia-de-usu%C3%A1rio"},"Defini\xe7\xe3o de experi\xeancia de usu\xe1rio")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#defini%C3%A7%C3%A3o-de-interface"},"Defini\xe7\xe3o de interface")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#valida%C3%A7%C3%A3o-de-interface"},"Valida\xe7\xe3o de interface")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#finaliza%C3%A7%C3%A3o-do-layout"},"Finaliza\xe7\xe3o do layout"))),Object(n.b)("h3",{id:"defini\xe7\xe3o-de-experi\xeancia-de-usu\xe1rio"},"Defini\xe7\xe3o de experi\xeancia de usu\xe1rio"),Object(n.b)("ul",{className:"contains-task-list"},Object(n.b)("li",{parentName:"ul",className:"task-list-item"},Object(n.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Realizar pesquisa de benchmark"),Object(n.b)("li",{parentName:"ul",className:"task-list-item"},Object(n.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Definir experi\xeancia de usu\xe1rio")),Object(n.b)("h3",{id:"defini\xe7\xe3o-de-interface"},"Defini\xe7\xe3o de interface"),Object(n.b)("ul",{className:"contains-task-list"},Object(n.b)("li",{parentName:"ul",className:"task-list-item"},Object(n.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Definir interface gr\xe1fica")),Object(n.b)("h3",{id:"valida\xe7\xe3o-de-interface"},"Valida\xe7\xe3o de interface"),Object(n.b)("ul",{className:"contains-task-list"},Object(n.b)("li",{parentName:"ul",className:"task-list-item"},Object(n.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Pedir feedback da interface para os stakeholders")),Object(n.b)("h3",{id:"finaliza\xe7\xe3o-do-layout"},"Finaliza\xe7\xe3o do layout"),Object(n.b)("ul",{className:"contains-task-list"},Object(n.b)("li",{parentName:"ul",className:"task-list-item"},Object(n.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Aplicar corre\xe7\xf5es caso solicitado pelos stakeholders")),Object(n.b)("h2",{id:"atividades-relacionadas"},"Atividades relacionadas"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("h3",{parentName:"li",id:"layout"},Object(n.b)("a",{parentName:"h3",href:"/docs/areas/solution/alphas/software-system/activities/software-system-activities#layout"},"Layout")))))}p.isMDXComponent=!0}}]);