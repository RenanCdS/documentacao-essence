(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{142:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return i}));var n=r(0),o=r.n(n);function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},A=Object.keys(e);for(n=0;n<A.length;n++)r=A[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(n=0;n<A.length;n++)r=A[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),l=function(e){var t=o.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,A=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=l(r),s=n,i=p["".concat(c,".").concat(s)]||p[s]||b[s]||A;return r?o.a.createElement(i,a(a({ref:t},d),{},{components:r})):o.a.createElement(i,a({ref:t},d))}));function i(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var A=r.length,c=new Array(A);c[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var d=2;d<A;d++)c[d]=r[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},197:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,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"},88:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),A=(r(0),r(142)),c={id:"manager",title:"Gestor",sidebar_label:"Gestor"},a={unversionedId:"competences/manager",id:"competences/manager",isDocsHomePage:!1,title:"Gestor",description:"Estrela do representante do produto",source:"@site/docs/competences/manager.md",slug:"/competences/manager",permalink:"/documentacao-essence/docs/competences/manager",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/competences/manager.md",version:"current",sidebar_label:"Gestor",sidebar:"someSidebar",previous:{title:"Desenvolvedor",permalink:"/documentacao-essence/docs/competences/developer"},next:{title:"Tester",permalink:"/documentacao-essence/docs/competences/tester"}},u=[],d={toc:u};function l(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(A.b)("wrapper",Object(n.a)({},d,c,{components:t,mdxType:"MDXLayout"}),Object(A.b)("p",null,Object(A.b)("img",{alt:"Estrela do representante do produto",src:r(197).default})),Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},"Orquestrador das reuni\xf5es do processo"),Object(A.b)("li",{parentName:"ul"},"Ponte para resolu\xe7\xe3o de problemas que possam aparecer no decorrer do desenvolvimento"),Object(A.b)("li",{parentName:"ul"},"Auxilia na defini\xe7\xe3o de prioridades do projeto"),Object(A.b)("li",{parentName:"ul"},"Respons\xe1vel por gerar documento de gest\xe3o de mudan\xe7as no time")))}l.isMDXComponent=!0}}]);