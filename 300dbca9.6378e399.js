(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(115)),i={id:"day02_questions",title:"Day 2 Recap Questions"},c={unversionedId:"questions/day02_questions",id:"questions/day02_questions",isDocsHomePage:!1,title:"Day 2 Recap Questions",description:"1. The command to compile a C program is gcc  -std=c99 -pedantic -Wall -Wextra. Use man or Google to find out the meaning of the four flags, i.e. -std=c99, -pedantic, -Wall and -Wextra.",source:"@site/docs/questions/day02_questions.md",slug:"/questions/day02_questions",permalink:"/cs220-sp21/docs/questions/day02_questions",version:"current"},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The command to compile a C program is ",Object(a.b)("inlineCode",{parentName:"li"},"gcc <source file> -std=c99 -pedantic -Wall -Wextra"),". Use ",Object(a.b)("inlineCode",{parentName:"li"},"man")," or Google to find out the meaning of the four flags, i.e. ",Object(a.b)("inlineCode",{parentName:"li"},"-std=c99"),", ",Object(a.b)("inlineCode",{parentName:"li"},"-pedantic"),", ",Object(a.b)("inlineCode",{parentName:"li"},"-Wall")," and ",Object(a.b)("inlineCode",{parentName:"li"},"-Wextra"),"."),Object(a.b)("li",{parentName:"ol"},"Briefly describe what a preprocessor, compiler and linker do when transporting C code into executable?"),Object(a.b)("li",{parentName:"ol"},"What does an ",Object(a.b)("strong",{parentName:"li"},"undefined")," behavior mean in programming? Do we need to care about it? Why or why not?"),Object(a.b)("li",{parentName:"ol"},"What does the modifier ",Object(a.b)("inlineCode",{parentName:"li"},"const")," mean? "),Object(a.b)("li",{parentName:"ol"},"What are the primitive types in C and what are their byte sizes?"),Object(a.b)("li",{parentName:"ol"},"What is the value of 7 / 2 (a division of two integers) in a C program?"),Object(a.b)("li",{parentName:"ol"},"Is ",Object(a.b)("inlineCode",{parentName:"li"},"i=i++")," a well-defined expression in C?")))}p.isMDXComponent=!0}}]);