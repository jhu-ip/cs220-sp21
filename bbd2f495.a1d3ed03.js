(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(122)),o={id:"day10_questions",title:"Day 10 Recap Questions","reference solutions":'1. Pointer is a data type in C that stores a memory address. We can dereference it to retrieve the value in the memory. 2. p = &a 3. use `*p` in place of `a` as in `printf("%d", *p)` and `*p = 10;` 4. because in order to change the variable in the calling function, you need to pass the address of the variable 5. 1.00, 32.00, 13.00, 40'},c={unversionedId:"questions/day10_questions",id:"questions/day10_questions",isDocsHomePage:!1,title:"Day 10 Recap Questions",description:"1. What is a pointer?",source:"@site/docs/questions/day10_questions.md",slug:"/questions/day10_questions",permalink:"/cs220-sp21/docs/questions/day10_questions",version:"current"},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"What is a pointer?"),Object(i.b)("li",{parentName:"ol"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"a")," is an int variable, and ",Object(i.b)("inlineCode",{parentName:"li"},"p")," is a variable whose type is ",Object(i.b)("em",{parentName:"li"},"pointer-to-int"),", how do you make ",Object(i.b)("inlineCode",{parentName:"li"},"p")," point to ",Object(i.b)("inlineCode",{parentName:"li"},"a"),"?"),Object(i.b)("li",{parentName:"ol"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"p")," is a ",Object(i.b)("em",{parentName:"li"},"pointer-to-int")," variable that points to an ",Object(i.b)("inlineCode",{parentName:"li"},"int")," variable ",Object(i.b)("inlineCode",{parentName:"li"},"a"),", how can you access the value of ",Object(i.b)("inlineCode",{parentName:"li"},"a")," or assign a value to ",Object(i.b)("inlineCode",{parentName:"li"},"a")," without directly referring to ",Object(i.b)("inlineCode",{parentName:"li"},"a"),"?  Show examples of printing the value of ",Object(i.b)("inlineCode",{parentName:"li"},"a")," and modifying the value of ",Object(i.b)("inlineCode",{parentName:"li"},"a"),", but without directly referring to ",Object(i.b)("inlineCode",{parentName:"li"},"a"),"."),Object(i.b)("li",{parentName:"ol"},"When calling ",Object(i.b)("inlineCode",{parentName:"li"},"scanf"),", why do you need to put a ",Object(i.b)("inlineCode",{parentName:"li"},"&")," symbol in front of a variable in which you want ",Object(i.b)("inlineCode",{parentName:"li"},"scanf")," to store an input value?"),Object(i.b)("li",{parentName:"ol"},"Trace the little program below and determine what the output will be.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),'int func(float ra[], float x, float *y) {\n    ra[0] += 10;\n    x *= 20;\n    *y += 30;\n    return 40;\n}\nint main() {\n    float a = 1;\n    float b = 2;\n    float c[] = {3, 4, 5, 6};\n    int d;\n    d = func(c, a, &b);\n    printf("%.2f, %.2f, %.2f, %d\\n", a, b, c[0], d);\n}\n')))}u.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return n?r.a.createElement(f,c(c({ref:t},p),{},{components:n})):r.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);