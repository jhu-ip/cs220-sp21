(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),i=n(6),r=(n(0),n(146)),o={id:"ex11-1",title:"Exercise 11-1"},c={unversionedId:"exercises/ex11-1",id:"exercises/ex11-1",isDocsHomePage:!1,title:"Exercise 11-1",description:"As you work, feel free to discuss with other students and ask questions of the Professor/CAs. Aim to complete as much as possible during our meeting time. Work at home to complete what you do not get through during class. You will not hand in your work.",source:"@site/docs\\exercises\\ex11-1.md",slug:"/exercises/ex11-1",permalink:"/cs220-sp21/docs/exercises/ex11-1",version:"current"},s=[{value:"Part 1",id:"part-1",children:[]},{value:"Part 2",id:"part-2",children:[]},{value:"Part 3",id:"part-3",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"As you work, feel free to discuss with other students and ask questions of the Professor/CAs. Aim to complete as much as possible during our meeting time. Work at home to complete what you do not get through during class. You will not hand in your work."))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Learning Objectives")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Reinforces concepts learned in today meeting:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"C++ classes, fields & member functions"),Object(r.b)("li",{parentName:"ul"},"Linked lists in C++"),Object(r.b)("li",{parentName:"ul"},"Operator overloading, friend functions, rule of three")))),Object(r.b)("h3",{id:"part-1"},"Part 1"),Object(r.b)("p",null,"Pull the starter code for this exercise from the public repo by taking the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Log into ugrad, then navigate into ",Object(r.b)("inlineCode",{parentName:"p"},"cs220-sp21-public"),", type ",Object(r.b)("inlineCode",{parentName:"p"},"git status")," and confirm you have not modified any files or accidentally committed to the public repo. Ask for help if you have added or committed files there and need to undo.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Type ",Object(r.b)("inlineCode",{parentName:"p"},"git pull")," to synchronize your local repo and working copy with the remote repo.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Confirm that you can see the template files for today\u2019s exercise by typing ",Object(r.b)("inlineCode",{parentName:"p"},"ls exercises/ex11-1")," -- you should see files named ",Object(r.b)("inlineCode",{parentName:"p"},"Makefile"),", ",Object(r.b)("inlineCode",{parentName:"p"},"README"),", ",Object(r.b)("inlineCode",{parentName:"p"},"int_node.h"),", ",Object(r.b)("inlineCode",{parentName:"p"},"int_set.[h/cpp]"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"main1.cpp")," inside.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Copy the above files from the public class repository (in the ",Object(r.b)("inlineCode",{parentName:"p"},"/exercises/ex11-1/")," directory) to your personal repo in a new directory named ",Object(r.b)("inlineCode",{parentName:"p"},"ex11-1")," under ",Object(r.b)("inlineCode",{parentName:"p"},"~/cs220/exercises/"),"."))),Object(r.b)("h3",{id:"part-2"},"Part 2"),Object(r.b)("p",null,"Read ",Object(r.b)("inlineCode",{parentName:"p"},"main1.cpp"),".  It shows an example of how to use the given code for the ",Object(r.b)("inlineCode",{parentName:"p"},"int_set")," class. You can compile and run the code using commands ",Object(r.b)("inlineCode",{parentName:"p"},"make main1")," and ",Object(r.b)("inlineCode",{parentName:"p"},"./main1"),". Some of the statements in ",Object(r.b)("inlineCode",{parentName:"p"},"main1.cpp")," will not compile yet because of missing functions in ",Object(r.b)("inlineCode",{parentName:"p"},"int_set.cpp"),". You can comment them out to check that the supplied code is working correctly. "),Object(r.b)("p",null,"Follow the instructional comments in ",Object(r.b)("inlineCode",{parentName:"p"},"README")," and ",Object(r.b)("inlineCode",{parentName:"p"},"int_set.cpp")," to write some missing functions for which we have provided headers.  You should not change anything in the ",Object(r.b)("inlineCode",{parentName:"p"},"int_set.h")," file. Do not reinvent the wheel when implementing these functions! That is, consider how code reuse can make your job easier."),Object(r.b)("h3",{id:"part-3"},"Part 3"),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"valgrind")," on ",Object(r.b)("inlineCode",{parentName:"p"},"main1.cpp")," by calling ",Object(r.b)("inlineCode",{parentName:"p"},"valgrind --leak-check=full ./main1"),". Fix any memory leaks that it finds. Finally, add a new line in ",Object(r.b)("inlineCode",{parentName:"p"},"main1.cpp")," which assigns an existing non-empty set to itself, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"s = s;"),"  Investigate what occurs using ",Object(r.b)("inlineCode",{parentName:"p"},"valgrind"),"! See if you are able to eliminate any problems that occur."))}l.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=a,u=b["".concat(o,".").concat(d)]||b[d]||m[d]||r;return n?i.a.createElement(u,c(c({ref:t},p),{},{components:n})):i.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);