(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(131)),o={id:"ex4-3",title:"Exercise 4-3"},c={unversionedId:"exercises/ex4-3",id:"exercises/ex4-3",isDocsHomePage:!1,title:"Exercise 4-3",description:"This is an in-class exercise. An exercise page like this one will contain",source:"@site/docs/exercises/ex4-3.md",slug:"/exercises/ex4-3",permalink:"/cs220-sp21/docs/exercises/ex4-3",version:"current"},s=[{value:"Part 1",id:"part-1",children:[]},{value:"Part 2",id:"part-2",children:[]},{value:"Part 3",id:"part-3",children:[]},{value:"Part 4",id:"part-4",children:[]},{value:"Part 5",id:"part-5",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain\na brief description but is intended to be supplemented by discussion\nduring our meeting time. Complete the exercise to the best of your ability\nin the time given. Feel free to talk with other students as you work,\nand do not be afraid to ask questions if you get stuck. Aim to complete as\nmuch as possible during our meeting, but you need not hand it in. You are\nencouraged to work at home to complete what you do not get through today."))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Learning Objectives")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Reinforces concepts learned in today's meeting:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Use pointer arithmetic to access array elements"),Object(r.b)("li",{parentName:"ul"},'Use pointer arithmetic to treat regions of a larger array as "sub-arrays"'),Object(r.b)("li",{parentName:"ul"},"Use pointer differences to compute indices of array elements based on\ntheir displacement from the base address"),Object(r.b)("li",{parentName:"ul"},"Use pointers to access subsets of a 2D array as 1D arrays")))),Object(r.b)("h3",{id:"part-1"},"Part 1"),Object(r.b)("p",null,"Pull the starter code for this exercise from the public repo by taking the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Log into an undergraduate cluster computer.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Confirm that your personal working git repository and the public course git repository are both cloned and accessible.  If this is not the case, ask for assistance.  You may need to redo steps from week 1 exercises. ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Navigate into ",Object(r.b)("inlineCode",{parentName:"p"},"cs220-sp21-public"),", type ",Object(r.b)("inlineCode",{parentName:"p"},"git status")," and confirm you have not modified any files or accidentally committed to the public repo. Ask for help if you have added or committed files there and need to undo.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Type ",Object(r.b)("inlineCode",{parentName:"p"},"git pull")," to synchronize your local repo and working copy with the remote repo.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Confirm that you can access the template files for today\u2019s exercise by typing\n",Object(r.b)("inlineCode",{parentName:"p"},"ls exercises/ex4-3")," -- you should see files named ",Object(r.b)("inlineCode",{parentName:"p"},"bsearch.c")," and ",Object(r.b)("inlineCode",{parentName:"p"},"sudoku.c"),", as well as 3 plain text input puzzle files ",Object(r.b)("inlineCode",{parentName:"p"},"puzzle*.txt"),". There should also be files ",Object(r.b)("inlineCode",{parentName:"p"},"sudokuHelpers.h"),", ",Object(r.b)("inlineCode",{parentName:"p"},"sudokuHelpers.c"),", and a Makefile for easy compilation and updating of the sudoku code."))),Object(r.b)("h3",{id:"part-2"},"Part 2"),Object(r.b)("p",null,"Grab a copy of all the files from the public class repository (in the ",Object(r.b)("em",{parentName:"p"},"/exercises/ex4-3/")," directory) and put it in your personal repo. To do so:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Use ",Object(r.b)("inlineCode",{parentName:"p"},"cd ~/cs220")," to move to your working copy of your personal repo.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Use ",Object(r.b)("inlineCode",{parentName:"p"},"cd exercises")," to change to your personal ",Object(r.b)("inlineCode",{parentName:"p"},"exercises")," directory.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Make a new directory for today\u2019s exercise by typing ",Object(r.b)("inlineCode",{parentName:"p"},"mkdir ex4-3"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Change to the new directory with ",Object(r.b)("inlineCode",{parentName:"p"},"cd ex4-3"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Copy the ",Object(r.b)("inlineCode",{parentName:"p"},"*.c")," source files to the current directory using: ",Object(r.b)("inlineCode",{parentName:"p"},"cp ~/cs220-sp21-public/exercises/ex4-3/*.c ."),". Similarly, copy the ",Object(r.b)("inlineCode",{parentName:"p"},"*.txt")," input files with ",Object(r.b)("inlineCode",{parentName:"p"},"cp ~/cs220-sp21-public/exercises/ex4-3/*.txt ."),". Lastly, use the same path to copy ",Object(r.b)("inlineCode",{parentName:"p"},"sudokuHeader.h")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Makefile")," into your exercise directory."))),Object(r.b)("h3",{id:"part-3"},"Part 3"),Object(r.b)("p",null,"Open ",Object(r.b)("inlineCode",{parentName:"p"},"bsearch.c")," with a text editor. To compile the code, use this command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"gcc -std=c99 -pedantic -Wall -Wextra bsearch.c -g -o bsearch   \n")),Object(r.b)("p",null,"or use our alias:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"gccc bsearch.c -g -o bsearch\n")),Object(r.b)("p",null,"You will need to modify ",Object(r.b)("inlineCode",{parentName:"p"},"bsearch.c")," as follows."),Object(r.b)("p",null,"First, add a declaration and definition for a function called ",Object(r.b)("inlineCode",{parentName:"p"},"search"),".\nThe declaration should look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},"int *search(int *start, int *end, int search_val);\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"TODO")," comments indicate where to add the declaration and definition."),Object(r.b)("p",null,"This function implements a binary search to find an integer value\n",Object(r.b)("inlineCode",{parentName:"p"},"search_val")," in a region of a sorted array of ",Object(r.b)("inlineCode",{parentName:"p"},"int")," values. The ",Object(r.b)("inlineCode",{parentName:"p"},"start")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"end")," parameters specify a range of elements to search, where ",Object(r.b)("inlineCode",{parentName:"p"},"start"),"\nis a pointer to the inclusive start element, and ",Object(r.b)("inlineCode",{parentName:"p"},"end")," is a pointer to\nthe ",Object(r.b)("em",{parentName:"p"},"exclusive")," end element.  I.e., the pointers to the elements in the range\nto be searched are greater than or equal to ",Object(r.b)("inlineCode",{parentName:"p"},"start"),", and strictly less\nthan ",Object(r.b)("inlineCode",{parentName:"p"},"end"),"."),Object(r.b)("p",null,"If the search is successful, the ",Object(r.b)("inlineCode",{parentName:"p"},"search")," function should return a pointer\nto the element where ",Object(r.b)("inlineCode",{parentName:"p"},"search_val")," was located.  If the search is unsuccessful,\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"search")," function should return ",Object(r.b)("inlineCode",{parentName:"p"},"NULL"),"."),Object(r.b)("p",null,"Recall that you implemented binary search in ",Object(r.b)("a",{parentName:"p",href:"ex3-1"},"Exercise 3-1"),".\nNote that in today's exercise, you are not required to implement the binary\nsearch using recursion.  Either recursion or iteration is fine. However, keep in mind that for Ex3-1 both of the range indices ",Object(r.b)("inlineCode",{parentName:"p"},"low")," and ",Object(r.b)("inlineCode",{parentName:"p"},"high")," were ",Object(r.b)("em",{parentName:"p"},"inclusive"),"."),Object(r.b)("p",null,"Next, after you have implemented the ",Object(r.b)("inlineCode",{parentName:"p"},"search")," function, you should complete\nthe code in the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," function.  You will see a block of code that looks\nlike this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},"// example of a successful search\npos = search(arr1, arr1 + 10, 809);\nassert(pos != NULL);\nassert(*pos == 809);\nindex = // TODO: compute the index of the matching element\nassert(7 == index);\n")),Object(r.b)("p",null,"Fix the code at the point of the ",Object(r.b)("inlineCode",{parentName:"p"},"TODO")," comment so that it computes the\nindex of the array element that ",Object(r.b)("inlineCode",{parentName:"p"},"pos")," points to, where ",Object(r.b)("inlineCode",{parentName:"p"},"pos")," is the result\nof a successful search.  Hint: this will involve a ",Object(r.b)("em",{parentName:"p"},"pointer difference"),"\ncomputation."),Object(r.b)("p",null,"Once you've completed the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," function, you should be able to run the\nprogram.  If the tests pass, you will see the output"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"All tests pass!\n")),Object(r.b)("p",null,"To finish this part of the exercise, add additional test cases to test the\n",Object(r.b)("inlineCode",{parentName:"p"},"search")," function.  You should add at least three test cases for successful\nsearches and three test cases for unsuccessful searches.  Make sure that\nall of your tests pass."),Object(r.b)("h3",{id:"part-4"},"Part 4"),Object(r.b)("p",null,"For the next part of this exercise, you'll be finishing the implementation of a sudoku checker program. The purpose of the program is to read an input puzzle file, where 0s represent empty cells. It should then check every row, column and cube to see if the puzzle is completely solved already, or not. You will only need to modify the ",Object(r.b)("inlineCode",{parentName:"p"},"sudokuHelper.c")," file, but should take time first to read through the code in the other files and ask if you have any questions."),Object(r.b)("p",null,"There are several helper functions you need to complete, as indicated by ",Object(r.b)("inlineCode",{parentName:"p"},"TODO")," comments in the file. In both ",Object(r.b)("inlineCode",{parentName:"p"},"makeCol")," and ",Object(r.b)("inlineCode",{parentName:"p"},"makeCube")," you need to declare the unit array that will be populated and returned in each function. (Their declarations will be identical.) You should also carefully read through the provided code in each method to ask if you don't understand how they work."),Object(r.b)("p",null,"Next you'll need to call these functions from two other helpers, again where indicated by ",Object(r.b)("inlineCode",{parentName:"p"},"TODO")," comments in functions ",Object(r.b)("inlineCode",{parentName:"p"},"checkRows"),", ",Object(r.b)("inlineCode",{parentName:"p"},"checkCols")," and ",Object(r.b)("inlineCode",{parentName:"p"},"checkCubes"),". Once this is done correctly, you should be able to compile everything with the Makefile and run the main program with each puzzle file as input. The first two are not correct/complete solutions, but ",Object(r.b)("inlineCode",{parentName:"p"},"puzzle3.txt")," is a completely solved puzzle."),Object(r.b)("h3",{id:"part-5"},"Part 5"),Object(r.b)("p",null,"Lastly, using the tools you learned in Ex4-2 during the last class session, modify the Makefile, adding the ",Object(r.b)("inlineCode",{parentName:"p"},"-g")," option to your compilation command(s) so that you can run ",Object(r.b)("inlineCode",{parentName:"p"},"gdb")," and ",Object(r.b)("inlineCode",{parentName:"p"},"valgrind")," on this code. Find a fix the memory leaks in ",Object(r.b)("inlineCode",{parentName:"p"},"sudokuHelpers.c")," for this final task."))}p.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||r;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);