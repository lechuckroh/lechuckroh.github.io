(self.webpackChunklechuck_blog=self.webpackChunklechuck_blog||[]).push([[672],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.default=t.exports,t.exports.__esModule=!0},3646:function(t,e,r){var n=r(7228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},9100:function(t,e,r){var n=r(9489),o=r(7067);function u(e,r,l){return o()?(t.exports=u=Reflect.construct,t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=u=function(t,e,r){var o=[null];o.push.apply(o,e);var u=new(Function.bind.apply(t,o));return r&&n(u,r.prototype),u},t.exports.default=t.exports,t.exports.__esModule=!0),u.apply(null,arguments)}t.exports=u,t.exports.default=t.exports,t.exports.__esModule=!0},9713:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},7067:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.default=t.exports,t.exports.__esModule=!0},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},319:function(t,e,r){var n=r(3646),o=r(6860),u=r(379),l=r(8206);t.exports=function(t){return n(t)||o(t)||u(t)||l()},t.exports.default=t.exports,t.exports.__esModule=!0},379:function(t,e,r){var n=r(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},5441:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});r(7294);var n=r(5444),o=r(5762);function u(t){var e,r=(0,n.useStaticQuery)("3159585216"),u=null!==(e=t.pageTitle)&&void 0!==e?e:r.site.siteMetadata.title;return(0,o.tZ)("div",{style:{margin:"0 auto",maxWidth:650,padding:"0 1rem"}},(0,o.tZ)("title",null,u),(0,o.tZ)("nav",null,(0,o.tZ)("ul",null,(0,o.tZ)("li",null,(0,o.tZ)(n.Link,{to:"/"},"Home")),(0,o.tZ)("li",null,(0,o.tZ)(n.Link,{to:"/about"},"About")),(0,o.tZ)("li",null,(0,o.tZ)(n.Link,{to:"/blog"},"Blog")))),(0,o.tZ)("main",null,t.children))}},1971:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var n=r(5441),o=r(6725),u=r(5762);function l(t){var e=t.data;return(0,u.tZ)(n.Z,{pageTitle:e.mdx.frontmatter.title},(0,u.tZ)("p",null,e.mdx.frontmatter.date),(0,u.tZ)(o.MDXRenderer,null,e.mdx.body))}},6725:function(t,e,r){var n=r(3395);t.exports={MDXRenderer:n}},3395:function(t,e,r){var n=r(9100),o=r(319),u=r(9713),l=r(7316),c=["scope","children"];function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var a=r(7294),p=r(4983).mdx,f=r(9480).useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,u=l(t,c),i=f(e),d=a.useMemo((function(){if(!r)return null;var t=s({React:a,mdx:p},i),e=Object.keys(t),u=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(u)))}),[r,e]);return a.createElement(d,s({},u))}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-slug-tsx-ee9cdcb66e13c72489e8.js.map