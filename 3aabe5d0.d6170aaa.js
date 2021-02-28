(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||f[m]||a;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(115)),i={id:"day15_questions",title:"Day 15 Recap Questions","reference solutions":"1.  It is a signed interger representation. One's complement of a binary number is flipping all 1 to 0 and vice versa. Two's complement is that binary number added 1 first, then flipping all bits. i.e. 2's complement = +1 then 1's complement. One reason of using 2's complement instead of 1's complement is the unique 0 represented in 2's complement. On the contrary, 1's complement has both +ve and -ve 0s. 2.  integers are simply converted to binary, floating-point values are stored in two parts - mantissa (significant bits) and exponent (for power 10 * mantissa) 3.  converting a \"larger\" data type into a \"smaller\" one, like float to int 4.  converting a \"smaller\" data type into a \"larger\" one 5.  explicitly or implicitly converting a value from one type to another 6.  int n = 32065 but (char) n = A \n float x = 24.590000 but (long) x = 24"},s={unversionedId:"questions/day15_questions",id:"questions/day15_questions",isDocsHomePage:!1,title:"Day 15 Recap Questions",description:"1. What is two's complement representation?",source:"@site/docs/questions/day15_questions.md",slug:"/questions/day15_questions",permalink:"/cs220-sp21/docs/questions/day15_questions",version:"current"},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"What is two's complement representation?"),Object(a.b)("li",{parentName:"ol"},"How does representation of integers and floating-point values differ in C?"),Object(a.b)("li",{parentName:"ol"},"What is type narrowing? "),Object(a.b)("li",{parentName:"ol"},"What is type promotion?"),Object(a.b)("li",{parentName:"ol"},"What is type casting?"),Object(a.b)("li",{parentName:"ol"},"What is the output of the code segment below?")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),'int n = 32065;\nfloat x = 24.79;\nprintf("int n = %d but (char) n = %c\\n", n, (char) n);\nprintf("float x = %f but (long) x = %ld\\n", x, (long) x);\n')))}p.isMDXComponent=!0}}]);