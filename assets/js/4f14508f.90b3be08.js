(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{151:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var b=c.a.createContext({}),l=function(e){var t=c.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=l(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,p=d["".concat(a,".").concat(f)]||d[f]||i[f]||o;return r?c.a.createElement(p,u(u({ref:t},b),{},{components:r})):c.a.createElement(p,u({ref:t},b))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var b=2;b<o;b++)a[b]=r[b];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},209:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,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"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),c=r(7),o=(r(0),r(151)),a={id:"architect",title:"Arquiteto",sidebar_label:"Arquiteto"},u={unversionedId:"competences/architect",id:"competences/architect",isDocsHomePage:!1,title:"Arquiteto",description:"Estrela do representante do produto",source:"@site/docs/competences/architect.md",slug:"/competences/architect",permalink:"/documentacao-essence/docs/competences/architect",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/competences/architect.md",version:"current",sidebar_label:"Arquiteto",sidebar:"someSidebar",previous:{title:"Analista",permalink:"/documentacao-essence/docs/competences/analyst"},next:{title:"Designer",permalink:"/documentacao-essence/docs/competences/designer"}},s=[],b={toc:s};function l(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"Estrela do representante do produto",src:r(209).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Possui amplo conhecimento de software"),Object(o.b)("li",{parentName:"ul"},"Tem a capacidade de propor arquiteturas de software escal\xe1veis e que atendam requisitos funcionais e n\xe3o funcionais (performance, seguran\xe7a etc)")))}l.isMDXComponent=!0}}]);