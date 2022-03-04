"use strict";(self.webpackChunkminstrel_docs=self.webpackChunkminstrel_docs||[]).push([[131],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9795:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(7294),a="container_Ak5I",l="widget_DC7_",i="userAvatar_H_Vg",o="userTag_BirN",s="userUsername_uIS0",c="userDiscriminator_chY_",u="container_usuQ",m="children_AcWt",d="popup_N1vF",p="containerHover__1Ny",f="popupText_TNeV",h="popupTriangle_VKJW";function y(e){var t=e.children,n=e.onClickOutside,a=(0,r.useRef)(null);function l(e){a.current&&!a.current.contains(e.target)&&n(e)}return(0,r.useEffect)((function(){return document.addEventListener("mousedown",l),function(){return document.removeEventListener("mousedown",l)}}),[]),r.createElement("span",{ref:a},t)}var k=n(5450);function g(e){var t=e.children,n=e.title,a=e.mode,l=void 0===a?"hover":a,i=(0,r.useState)(!1),o=i[0],s=i[1],c=(0,k.If)().isDarkTheme;return r.createElement(y,{onClickOutside:function(){return s(!1)}},r.createElement("span",{className:u+" "+("hover"===l?p:"")},r.createElement("span",{onClick:function(){return s(!o)},className:m},t),r.createElement("span",{className:d,style:{display:"click"===l&&o?"block":"none"}},r.createElement("span",{className:f,style:{backgroundColor:c?"#dadae0":"#2f3136",color:c?"#000":"#fff"}},n),r.createElement("span",{className:h,style:{borderTopColor:c?"#dadae0":"#2f3136"}}))))}function N(e){var t,n=e.data,u=(0,k.If)().isDarkTheme;return r.createElement(g,{title:r.createElement("span",null,r.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===n.type?n.id:n.username),r.createElement("a",{href:null!=(t=n.url)?t:"",style:{color:"inherit"},target:"_blank"},r.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},r.createElement("span",{className:a},r.createElement("span",{className:l,style:{backgroundColor:u?"#2f3136":"#dadae0"}},r.createElement("img",{src:n.avatarUrl,alt:"",className:i}),r.createElement("span",{className:o},"discord"===n.type?r.createElement(r.Fragment,null,r.createElement("span",{className:s,style:{color:u?"#fff":"#000"}},n.name),r.createElement("span",{className:c},"#",n.discriminator)):r.createElement("span",{className:s,style:{color:u?"#fff":"#000"}},n.name)))))}},3874:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return m},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=n(9795),o=["components"],s={},c="MAIN.md",u={unversionedId:"writers/files/MAIN",id:"writers/files/MAIN",title:"MAIN.md",description:"Metadata",source:"@site/docs/writers/files/MAIN.md",sourceDirName:"writers/files",slug:"/writers/files/MAIN",permalink:"/docs/writers/files/MAIN",editUrl:"https://github.com/minstrelbot/docs/tree/master/docs/docs/writers/files/MAIN.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/writers/basics"},next:{title:"end.md",permalink:"/docs/writers/files/end"}},m={},d=[{value:"Metadata",id:"metadata",level:2},{value:"Content",id:"content",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mainmd"},"MAIN.md"),(0,l.kt)("h2",{id:"metadata"},"Metadata"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the story. This is used to link to the story within the bot, and must be unique to this story."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the story as displayed to the users."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"author"),(0,l.kt)("td",{parentName:"tr",align:null},"The Discord ID of the author of this story. This will be shown in the documentation for your story like this: ",(0,l.kt)(i.Z,{data:{notFound:!0,type:"discord",id:"439223656200273932",name:"Unknown User",username:"",discriminator:"0000",avatarUrl:"https://cdn.discordapp.com/embed/avatars/0.png?size=32",url:null},mdxType:"UserWidgetInline"})),(0,l.kt)("td",{parentName:"tr",align:null},"snowflake"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"The Minstrel format version of this story."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1")))),(0,l.kt)("h2",{id:"content"},"Content"),(0,l.kt)("p",null,"The content of this file should be the description of the story when viewed in the bot before playing."))}f.isMDXComponent=!0}}]);