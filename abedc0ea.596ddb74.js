(window.webpackJsonp=window.webpackJsonp||[]).push([[16,9],{105:function(e,t,a){"use strict";var l=a(0),n=a.n(l),i=a(100),s=a(91),o=a(49),c=a.n(o);const r=37,d=39;t.a=function(e){const{block:t,children:a,defaultValue:o,values:m,groupId:p,className:u}=e,{tabGroupChoices:h,setTabGroupChoices:k}=Object(i.a)(),[b,f]=Object(l.useState)(o),[E,w]=Object(l.useState)(!1);if(null!=p){const e=h[p];null!=e&&e!==b&&m.some((t=>t.value===e))&&f(e)}const _=e=>{f(e),null!=p&&k(p,e)},y=[],g=e=>{e.metaKey||e.altKey||e.ctrlKey||w(!0)},x=()=>{w(!1)};return Object(l.useEffect)((()=>(window.addEventListener("keydown",g),window.addEventListener("mousedown",x),()=>{window.removeEventListener("keydown",g),window.removeEventListener("mousedown",x)})),[]),n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},u)},m.map((({value:e,label:t})=>n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":b===e,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":b===e}),style:E?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case d:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case r:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),g(e)},onFocus:()=>_(e),onClick:()=>{_(e),w(!1)},onPointerDown:()=>w(!1)},t)))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},l.Children.toArray(a).filter((e=>e.props.value===b))[0]))}},106:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(e){return n.a.createElement("div",null,e.children)}},116:function(e,t,a){var l={"./wk1data.json":134,"./wk2data.json":135};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(l,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return l[e]}n.keys=function(){return Object.keys(l)},n.resolve=i,e.exports=n,n.id=116},134:function(e){e.exports=JSON.parse('{"days":["Day 1 (1/25)","Day 2 (1/27)","Day 3 (1/29)"],"videos":[[{"title":"Course intro","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=77073791-306f-43c0-b8c7-acb7010bcc09"},{"title":"Linux, ugrad accounts","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d6bb780e-7f77-423d-a5a2-acb701750ed2"}],[{"title":"Hello world program in C","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2912145c-de78-4810-8a06-acb500313555"},{"title":"C basics","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f25350a1-fca7-4a12-9f9b-acb5003133d2"}],[{"title":"Editors (emacs)","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0bc6cbce-e7db-40f4-8961-acb5003135d4"},{"title":"Git","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=695b3415-c00b-47cc-b015-acb9013c2c2e"},{"title":"Submission workflow","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ab3c5c69-5c49-452a-827a-acb500313465"}]],"slides":[[{"title":"Course intro","link":"../slides/day01_intro.pdf"},{"title":"Linux, ugrad accounts","link":"../slides/day01_linux_basics.pdf"}],[{"title":"Hello world program in C","link":"../slides/day02_hello_world_c.pdf"},{"title":"C basics","link":"../slides/day02_c_basics.pdf"}],[{"title":"Editors (emacs)","link":"../slides/day03_editors.pdf"},{"title":"Git","link":"../slides/day03_git.pdf"},{"title":"Submission workflow","link":"../slides/day03_submission_workflow.pdf"}]],"questions":[[{"title":"Day 1","link":"../docs/questions/day01_questions"}],[{"title":"Day 2","link":"../docs/questions/day02_questions"}],[{"title":"Day 3","link":"../docs/questions/day03_questions"}]],"exercises":[[{"title":"Github Account","link":"../docs/github"}],[{"title":"Ex1-1","link":"../docs/exercises/ex1-1"}],[{"title":"Ex1-2","link":"../docs/exercises/ex1-2"},{"title":"Ex1-3","link":"../docs/exercises/ex1-3"}]],"resources":[[{"title":"Linux bootcamp","link":"https://cli-boot.camp/"},{"title":"Section 02 notes","link":"../section_materials/sec02_jan_25_notes.pdf"},{"title":"Section 05 notes","link":"../section_materials/sec05_jan_25_notes.pdf"}],[{"title":"Online C compiler","link":"https://www.onlinegdb.com/online_c_compiler"},{"title":"Section 02 notes","link":"../section_materials/sec02_jan_27_notes.pdf"},{"title":"Section 05 notes","link":"../section_materials/sec05_jan_27_notes.pdf"}],[{"title":"Emacs reference card","link":"https://www.gnu.org/software/emacs/refcards/pdf/refcard.pdf"},{"title":"Interactive vim tutorial","link":"https://www.openvim.com/"},{"title":"Git cheatsheet","link":"https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf"},{"title":"Section 01 notes","link":"../section_materials/sec01_jan_29_notes.pdf"},{"title":"Section 02 notes","link":"../section_materials/sec02_jan_29_notes.pdf"},{"title":"Section 05 notes","link":"../section_materials/sec05_jan_29_notes.pdf"}]],"zooms":[[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e7f77900-e7e6-413a-99e4-acbb013050df"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=36d126b2-9507-4b86-acaf-acbc007531be"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c8239267-9e39-4b5c-936a-acbd007df991"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=82b34f3a-1457-4020-8e29-acbc0075387e"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8199a0ea-4bd5-443d-a0c8-acbe00ef22bf"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c846f7bc-03f8-445e-ac13-acbd014709b8"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b49d00e8-f05c-463a-b55d-acbd0116def8"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6d2b854e-5990-4c47-87bc-acbd00fa49d6"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e0eb8b1f-752e-4d64-b7d1-acbf0143cfb3"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fdaed227-a8d9-4407-bbc2-acbf014a252a"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=91baa2b4-22db-4718-9e27-acbf01119cb5"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=64a4effb-51b0-44e5-9e5a-acbf00fcca0e"}]]}')},135:function(e){e.exports=JSON.parse('{"days":["Day 4 (2/1)","Day 5 (2/3)","Day 6 (2/5)"],"videos":[[{"title":"Logical operators, control flow","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e83c3c47-6ee8-4351-b488-acb500313777"}],[{"title":"Arrays, ASCII","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d75b0b98-f404-4e00-94dd-acb500313362"},{"title":"C strings","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=aff96a7c-3c0a-4631-a005-acb5003132e3"}],[{"title":"File I/O, assert, math functions","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=222af12f-e830-4f46-90d8-acb500313281"},{"title":"Writing functions, command line arguments","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d3706539-7a02-4a5d-8850-acb5003131e8"}]],"slides":[[{"title":"Logical operators, control flow","link":"../slides/day04_control_flow.pdf"}],[{"title":"Arrays","link":"../slides/day05_arrays.pdf"},{"title":"Strings","link":"../slides/day05_c_strings.pdf"}],[{"title":"File I/O, assert, math functions","link":"../slides/day06_fileio_assertion_math.pdf"},{"title":"Writing functions, command line arguments","link":"../slides/day06_functions_command_line_arguments.pdf"}]],"questions":[[{"title":"Day 4","link":"../docs/questions/day04_questions"}],[{"title":"Day 5","link":"../docs/questions/day05_questions"}],[{"title":"Day 6","link":"../docs/questions/day06_questions"}]],"exercises":[[{"title":"Ex2-1","link":"../docs/exercises/ex2-1"}],[{"title":"Ex2-2","link":"../docs/exercises/ex2-2"}],[{"title":"Ex2-3","link":"../docs/exercises/ex2-3"}]],"resources":[[{"title":"Section 01 Notes","link":"../section_materials/sec01_feb_1_notes.pdf"},{"title":"Section 02 Notes","link":"../section_materials/sec02_feb_1_notes.pdf"},{"title":"Section 05 Notes","link":"../section_materials/sec05_feb_1_notes.pdf"}],[{"title":"Section 05 Q&A Panel","link":"https://pigeonhole.at/DMJNU8/q/1577565"}],[{"title":"TBA","link":"#"}]],"zooms":[[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=95f534d6-bcde-4170-8402-acc30177a2cb"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8eec82e2-cbd0-4331-8922-acc201475135"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=30813ee3-d122-4422-aae4-acc20113c235"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cc67fa05-7bd9-41e8-9fae-acc200f6c2d3"}],[{"title":"Section 1 (TBA)","link":"#"},{"title":"Section 2 (TBA)","link":"#"},{"title":"Section 4 (TBA)","link":"#"},{"title":"Section 5 (TBA)","link":"#"}],[{"title":"Section 1 (TBA)","link":"#"},{"title":"Section 2 (TBA)","link":"#"},{"title":"Section 4 (TBA)","link":"#"},{"title":"Section 5 (TBA)","link":"#"}]]}')},47:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),i=a(48),s=a.n(i);t.default=function(e){return e.days&&e.videos&&e.slides&&e.questions&&e.exercises&&e.resources&&e.zooms?n.a.createElement("table",{className:s.a.table},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null,e.days[0]),n.a.createElement("th",null,e.days[1]),n.a.createElement("th",null,e.days[2]))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Videos"),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.videos[0].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.videos[1].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.videos[2].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),n.a.createElement("tr",null,n.a.createElement("th",null,"Slides"),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.slides[0].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.slides[1].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.slides[2].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),n.a.createElement("tr",null,n.a.createElement("th",null,"Recap Questions"),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.questions[0].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.questions[1].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.questions[2].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link}," ",e.title," "))))))),n.a.createElement("tr",null,n.a.createElement("th",null,"Exercise"),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.exercises[0].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.exercises[1].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.exercises[2].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link}," ",e.title," "))))))),n.a.createElement("tr",null,n.a.createElement("th",null,"Additional Resources"),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.resources[0].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.resources[1].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.resources[2].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),n.a.createElement("tr",null,n.a.createElement("th",null,"Recorded Sessions"),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.zooms[0].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.zooms[1].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:s.a.li},e.zooms[2].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))))):n.a.createElement("div",null)}},74:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),i=a(97),s=a(105),o=a(106),c=a(47);t.default=function(){for(var e=new Array,t=1;t<=7;++t)try{let l=a(116)("./wk"+t+"data.json");e.push(n.a.createElement(o.a,{value:"w"+t},n.a.createElement(c.default,{days:l.days,videos:l.videos,slides:l.slides,questions:l.questions,exercises:l.exercises,resources:l.resources,zooms:l.zooms})))}catch(m){console.log("cannot read from ./data/wk"+t+"data.json")}var l=n.a.createElement(s.a,{defaultValue:"w2",values:[{label:"Wk 1",value:"w1"},{label:"Wk 2",value:"w2"},{label:"Wk 3",value:"w3"},{label:"Wk 4",value:"w4"},{label:"Wk 5",value:"w5"},{label:"Wk 6",value:"w6"},{label:"Wk 7",value:"w7"}]},e),r=new Array;for(t=8;t<=14;++t)try{let e=a(116)("./wk"+t+"data.json");r.push(n.a.createElement(o.a,{value:"w"+t},n.a.createElement(c.default,{days:e.days,videos:e.videos,slides:e.slides,questions:e.questions,exercises:e.exercises,resources:e.resources,zooms:e.zooms})))}catch(m){console.log("cannot read from ./data/wk"+t+"data.json")}var d=n.a.createElement(s.a,{defaultValue:"w8",values:[{label:"Wk 8",value:"w8"},{label:"Wk 9",value:"w9"},{label:"Wk 10",value:"w10"},{label:"Wk 11",value:"w11"},{label:"Wk 12",value:"w12"},{label:"Wk 13",value:"w13"},{label:"Wk 14",value:"w14"}]},r);return n.a.createElement(i.a,{title:"Schedule"},n.a.createElement("span",{className:"alert alert--info",style:{display:"flex",justifyContent:"center",padding:"0 0 0 0"}},"The weekly tabs will be populated with new course material as the semester progresses (see the tentative\xa0",n.a.createElement("a",{href:"../schedule"},"schedule"),")."),n.a.createElement("div",{style:{display:"block",justifyContent:"center",padding:"1% 1% 1% 1%"},class:"container"},n.a.createElement(s.a,{block:"true",defaultValue:"c",values:[{label:"C (Week 1 - Week 7)",value:"c"},{label:"C++ (Week 8 - Week 14)",value:"c++"}]},n.a.createElement(o.a,{value:"c"},l),n.a.createElement(o.a,{value:"c++"},d))))}}}]);