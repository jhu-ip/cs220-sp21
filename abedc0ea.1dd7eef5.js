(window.webpackJsonp=window.webpackJsonp||[]).push([[27,14],{130:function(e,t,a){"use strict";var i=a(0),s=a.n(i),o=a(126),n=a(116),l=a(49),c=a.n(l);const d=37,p=39;t.a=function(e){const{block:t,children:a,defaultValue:l,values:r,groupId:m,className:h}=e,{tabGroupChoices:k,setTabGroupChoices:f}=Object(o.a)(),[b,_]=Object(i.useState)(l),[u,P]=Object(i.useState)(!1);if(null!=m){const e=k[m];null!=e&&e!==b&&r.some((t=>t.value===e))&&_(e)}const w=e=>{_(e),null!=m&&f(m,e)},g=[],x=e=>{e.metaKey||e.altKey||e.ctrlKey||P(!0)},y=()=>{P(!1)};return Object(i.useEffect)((()=>(window.addEventListener("keydown",x),window.addEventListener("mousedown",y),()=>{window.removeEventListener("keydown",x),window.removeEventListener("mousedown",y)})),[]),s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(n.a)("tabs",{"tabs--block":t},h)},r.map((({value:e,label:t})=>s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":b===e,className:Object(n.a)("tabs__item",c.a.tabItem,{"tabs__item--active":b===e}),style:u?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case p:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case d:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),x(e)},onFocus:()=>w(e),onClick:()=>{w(e),P(!1)},onPointerDown:()=>P(!1)},t)))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(a).filter((e=>e.props.value===b))[0]))}},131:function(e,t,a){"use strict";var i=a(0),s=a.n(i);t.a=function(e){return s.a.createElement("div",null,e.children)}},142:function(e,t,a){var i={"./wk1data.json":173,"./wk2data.json":174,"./wk3data.json":175,"./wk4data.json":176,"./wk5data.json":177,"./wk6data.json":178,"./wk7data.json":179};function s(e){var t=o(e);return a(t)}function o(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=o,e.exports=s,s.id=142},173:function(e){e.exports=JSON.parse('{"days":["Day 1 (1/25)","Day 2 (1/27)","Day 3 (1/29)"],"videos":[[{"title":"Course intro","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=77073791-306f-43c0-b8c7-acb7010bcc09"},{"title":"Linux, ugrad accounts","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d6bb780e-7f77-423d-a5a2-acb701750ed2"}],[{"title":"Hello world program in C","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2912145c-de78-4810-8a06-acb500313555"},{"title":"C basics","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f25350a1-fca7-4a12-9f9b-acb5003133d2"}],[{"title":"Editors (emacs)","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0bc6cbce-e7db-40f4-8961-acb5003135d4"},{"title":"Git","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=695b3415-c00b-47cc-b015-acb9013c2c2e"},{"title":"Submission workflow","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ab3c5c69-5c49-452a-827a-acb500313465"}]],"slides":[[{"title":"Course intro","link":"../slides/day01_intro.pdf"},{"title":"Linux, ugrad accounts","link":"../slides/day01_linux_basics.pdf"}],[{"title":"Hello world program in C","link":"../slides/day02_hello_world_c.pdf"},{"title":"C basics","link":"../slides/day02_c_basics.pdf"}],[{"title":"Editors (emacs)","link":"../slides/day03_editors.pdf"},{"title":"Git","link":"../slides/day03_git.pdf"},{"title":"Submission workflow","link":"../slides/day03_submission_workflow.pdf"}]],"questions":[[{"title":"Day 1","link":"../docs/questions/day01_questions"}],[{"title":"Day 2","link":"../docs/questions/day02_questions"}],[{"title":"Day 3","link":"../docs/questions/day03_questions"}]],"exercises":[[{"title":"Github account","link":"../docs/exercises/github"}],[{"title":"Ex1-1","link":"../docs/exercises/ex1-1"}],[{"title":"Ex1-2","link":"../docs/exercises/ex1-2"},{"title":"Ex1-3","link":"../docs/exercises/ex1-3"}]],"resources":[[{"title":"Linux bootcamp","link":"https://cli-boot.camp/"},{"title":"Github SSH key setup","link":"../docs/resources/github-ssh"},{"title":"Section 02 notes","link":"../section_materials/sec02_jan_25_notes.pdf"},{"title":"Section 05 notes","link":"../section_materials/sec05_jan_25_notes.pdf"}],[{"title":"Online C compiler","link":"https://www.onlinegdb.com/online_c_compiler"},{"title":"Section 01 notes","link":"../section_materials/sec01_jan_27_notes.pdf"},{"title":"Section 02 notes","link":"../section_materials/sec02_jan_27_notes.pdf"},{"title":"Section 05 notes","link":"../section_materials/sec05_jan_27_notes.pdf"}],[{"title":"Emacs reference card","link":"https://www.gnu.org/software/emacs/refcards/pdf/refcard.pdf"},{"title":"Interactive vim tutorial","link":"https://www.openvim.com/"},{"title":"Git cheatsheet","link":"https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf"},{"title":"Section 01 notes","link":"../section_materials/sec01_jan_29_notes.pdf"},{"title":"Section 02 notes","link":"../section_materials/sec02_jan_29_notes.pdf"},{"title":"Section 05 notes","link":"../section_materials/sec05_jan_29_notes.pdf"}]],"zooms":[[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e7f77900-e7e6-413a-99e4-acbb013050df"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=36d126b2-9507-4b86-acaf-acbc007531be"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c8239267-9e39-4b5c-936a-acbd007df991"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=82b34f3a-1457-4020-8e29-acbc0075387e"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8199a0ea-4bd5-443d-a0c8-acbe00ef22bf"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c846f7bc-03f8-445e-ac13-acbd014709b8"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b49d00e8-f05c-463a-b55d-acbd0116def8"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6d2b854e-5990-4c47-87bc-acbd00fa49d6"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e0eb8b1f-752e-4d64-b7d1-acbf0143cfb3"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fdaed227-a8d9-4407-bbc2-acbf014a252a"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=91baa2b4-22db-4718-9e27-acbf01119cb5"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=64a4effb-51b0-44e5-9e5a-acbf00fcca0e"}]]}')},174:function(e){e.exports=JSON.parse('{"days":["Day 4 (2/1)","Day 5 (2/3)","Day 6 (2/5)"],"videos":[[{"title":"Logical operators, control flow","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e83c3c47-6ee8-4351-b488-acb500313777"}],[{"title":"Arrays, ASCII","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d75b0b98-f404-4e00-94dd-acb500313362"},{"title":"C strings","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=aff96a7c-3c0a-4631-a005-acb5003132e3"}],[{"title":"File I/O, assert, math functions","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=222af12f-e830-4f46-90d8-acb500313281"},{"title":"Writing functions, command line arguments","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d3706539-7a02-4a5d-8850-acb5003131e8"}]],"slides":[[{"title":"Logical operators, control flow","link":"../slides/day04_control_flow.pdf"}],[{"title":"Arrays","link":"../slides/day05_arrays.pdf"},{"title":"Strings","link":"../slides/day05_c_strings.pdf"}],[{"title":"File I/O, assert, math functions","link":"../slides/day06_fileio_assertion_math.pdf"},{"title":"Writing functions, command line arguments","link":"../slides/day06_functions_command_line_arguments.pdf"}]],"questions":[[{"title":"Day 4","link":"../docs/questions/day04_questions"}],[{"title":"Day 5","link":"../docs/questions/day05_questions"}],[{"title":"Day 6","link":"../docs/questions/day06_questions"}]],"exercises":[[{"title":"Ex2-1","link":"../docs/exercises/ex2-1"}],[{"title":"Ex2-2","link":"../docs/exercises/ex2-2"}],[{"title":"Ex2-3","link":"../docs/exercises/ex2-3"}]],"resources":[[{"title":"Section 01 Notes","link":"../section_materials/sec01_feb_1_notes.pdf"},{"title":"Section 02 Notes","link":"../section_materials/sec02_feb_1_notes.pdf"},{"title":"Section 05 Notes","link":"../section_materials/sec05_feb_1_notes.pdf"}],[{"title":"Section 02 Notes","link":"../section_materials/sec02_feb_3_notes.pdf"},{"title":"Section 05 Q&A Session","link":"https://pigeonhole.at/DMJNU8/q/1577565"},{"title":"Section 05 Notes","link":"../section_materials/sec05_feb_3_notes.pdf"}],[{"title":"Section 01 Notes","link":"../section_materials/sec01_feb_5_notes.pdf"},{"title":"Section 01 Example code","link":"../section_materials/sec01_feb_5_code.zip"},{"title":"Section 02 Notes","link":"../section_materials/sec02_feb_5_notes.pdf"},{"title":"Section 05 Q&A Session","link":"https://pigeonhole.at/3VE467/q/1580034"},{"title":"Section 05 Notes","link":"../section_materials/sec05_feb_5_notes.pdf"}]],"zooms":[[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=95f534d6-bcde-4170-8402-acc30177a2cb"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8eec82e2-cbd0-4331-8922-acc201475135"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=30813ee3-d122-4422-aae4-acc20113c235"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cc67fa05-7bd9-41e8-9fae-acc200f6c2d3"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cd48f9fa-da06-47ef-8e74-acc500f92c6f"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6a395ea8-8783-494f-a18d-acc4014885eb"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b00c21a9-b9ae-477f-9854-acc4010fce75"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ca42d64e-819b-4a9f-92e7-acc401088158"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7dc762af-abe7-4368-9edf-acc6014963e9"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fb319391-ab29-46a5-aeb1-acc6014a3ed3"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=82783501-5eb8-4bfe-8c2d-acc6011282d7"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=667b2175-fc16-4858-bba7-acc600f95c62"}]]}')},175:function(e){e.exports=JSON.parse('{"days":["Day 7 (2/8)","Day 8 (2/10)","Day 9 (2/12)"],"videos":[[{"title":"Function declarations","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f5732da2-23a6-48b6-87fb-acb500312fee"},{"title":"Passing arrays to functions","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ee062ff8-9081-494b-ac8a-acb500312f87"},{"title":"Recursion","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=95564f92-94bc-492d-930b-acc50057460a"}],[{"title":"Separate compilation","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b974c998-f6dd-440c-8887-acb50031315c"},{"title":"Makefiles","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c5d10cc2-d6ab-414e-8392-acb5003130de"},{"title":"Header guards","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ec849587-7fab-433f-9ca2-acb500313080"}],[{"title":"Multidimensional arrays, gdb","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6d13469d-e03f-44d2-8b49-acb500312ea5"}]],"slides":[[{"title":"Function declarations","link":"../slides/day07_function_declaration.pdf"},{"title":"Passing arrays to functions","link":"../slides/day07_passing_arrays_to_functions.pdf"},{"title":"Recursion","link":"../slides/day07_recursion.pdf"}],[{"title":"Separate compilation","link":"../slides/day08_separate_complication.pdf"},{"title":"Makefiles","link":"../slides/day08_makefiles.pdf"},{"title":"Header guards","link":"../slides/day08_header_guards.pdf"}],[{"title":"Multidimensional arrays, gdb","link":"../slides/day09_multidimensional_arrays_gdb.pdf"}]],"questions":[[{"title":"Day 7","link":"../docs/questions/day07_questions"}],[{"title":"Day 8","link":"../docs/questions/day08_questions"}],[{"title":"Day 9","link":"../docs/questions/day09_questions"}]],"exercises":[[{"title":"Ex3-1","link":"../docs/exercises/ex3-1"}],[{"title":"Ex3-2","link":"../docs/exercises/ex3-2"}],[{"title":"Ex3-3","link":"../docs/exercises/ex3-3"}]],"resources":[[{"title":"Section 01 Notes","link":"../section_materials/sec01_feb_8_notes.pdf"},{"title":"Section 02 Notes","link":"../section_materials/sec02_feb_8_notes.pdf"},{"title":"Section 05 Notes","link":"../section_materials/sec05_feb_8_notes.pdf"}],[{"title":"C Makefile Cheat Sheet","link":"https://cppcheatsheet.com/notes/c_make.html"},{"title":"Section 01 Notes","link":"../section_materials/sec01_feb_10_notes.pdf"},{"title":"Section 01 Example Code","link":"../section_materials/sec01_feb_10_code.zip"},{"title":"Section 02 Notes","link":"../section_materials/sec02_feb_10_notes.pdf"},{"title":"Section 05 Notes","link":"../section_materials/sec05_feb_10_notes.pdf"}],[{"title":"GDB Cheat Sheet","link":"https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf"},{"title":"Section 01 Notes","link":"../section_materials/sec01_feb_12_notes.pdf"},{"title":"Section 02 Notes","link":"../section_materials/sec02_feb_12_notes.pdf"},{"title":"Section 05 Notes","link":"../section_materials/sec05_feb_12_notes.pdf"}]],"zooms":[[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f7b0dc47-2138-4b9b-a5ad-acc9012f1924"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d19bad92-dc5e-4687-82db-acc90150aaa6"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6913bc4b-3d84-4248-8f1b-acc90111e8f4"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=58a2740b-5d63-4c1e-90f3-acc900f69b26"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1f4a2376-d5be-4087-abcd-accb01364355"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5d69a10c-6a24-4c98-9ab5-accb0148a951"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e60bb4c1-902a-46b6-b3cc-accb01136ae4"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=aad89bfa-9cf5-40de-a5c6-accb00f45a77"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=560efd6a-f3a8-4b39-9bb7-accd013164e2"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fc66ef0c-2002-4c98-8884-accd0145a4f7"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=42c024b6-d611-49cb-801e-accd010fe254"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e31506b3-8027-413a-ad9c-accd00f97403"}]]}')},176:function(e){e.exports=JSON.parse('{"days":["Day 10 (2/15)","Day 11 (2/17)","Day 12 (2/19)"],"videos":[[{"title":"Pointer Basics","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fff26523-30d0-4dec-833e-acb500312e2b"}],[{"title":"Dynamic Memory Allocation","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f34a6017-a4e9-4f02-9aba-acb500312d7e"},{"title":"Valgrind","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6bac2637-2609-46f8-9273-acb500312d1e"}],[{"title":"Pointer Arithmetic","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=27e05586-457c-40c1-99b0-acd0012ea8cf"},{"title":"Dynamic 2D Arrays, Pointers & const","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e8e772dd-e10f-4373-8968-acd001826cc7"}]],"slides":[[{"title":"Pointer Basics","link":"../slides/day10_pointers.pdf"}],[{"title":"Dynamic Memory Allocation","link":"../slides/day11_dynamic_memory_allocation.pdf"},{"title":"Valgrind","link":"../slides/day11_valgrind.pdf"}],[{"title":"Pointer Arithmetic","link":"../slides/day12_pointer_arithmetic.pdf"},{"title":"Dynamic 2D Arrays, Pointers & const","link":"../slides/day12_more_pointers_dynamic_2d_arrays.pdf"}]],"questions":[[{"title":"Day 10","link":"../docs/questions/day10_questions/"}],[{"title":"Day 11","link":"../docs/questions/day11_questions/"}],[{"title":"Day 12","link":"../docs/questions/day12_questions/"}]],"exercises":[[{"title":"Ex4-1","link":"../docs/exercises/ex4-1/"}],[{"title":"Ex4-2","link":"../docs/exercises/ex4-2/"}],[{"title":"Ex4-3","link":"../docs/exercises/ex4-3/"}]],"resources":[[{"title":"Binky the Pointer (video)","link":"https://www.youtube.com/watch?v=6pmWojisM_E"},{"title":"Section 01 Notes","link":"../section_materials/sec01_feb_15_notes.pdf"},{"title":"Section 02 Notes","link":"../section_materials/sec02_feb_15_notes.pdf"},{"title":"Section 05 Notes","link":"../section_materials/sec05_feb_15_notes.pdf"}],[{"title":"Section 01 Notes","link":"../section_materials/sec01_feb_17_notes.pdf"},{"title":"Section 02 Notes","link":"../section_materials/sec02_feb_17_notes.pdf"},{"title":"Section 05 Notes","link":"../section_materials/sec05_feb_17_notes.pdf"}],[{"title":"Section 01 Notes","link":"../section_materials/sec01_feb_19_notes.pdf"},{"title":"Section 02 Notes","link":"../section_materials/sec02_feb_19_notes.pdf"},{"title":"Section 05 Notes","link":"../section_materials/sec05_feb_19_notes.pdf"}]],"zooms":[[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=202e1c36-a457-4b04-9289-acd0012dddb4"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=124e6309-025f-484f-b557-acd00149654e"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=85d1c3fe-813a-495c-93e1-acd001155372"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5228c241-677e-413b-b4c6-acd000fc0f74"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4113b59a-3ee6-43e9-ba55-acd2013cd21b"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1eeca552-479d-43de-af99-acd2014e6b26"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c267001b-515b-4533-bc8f-acd20110cfb8"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b72e11e3-6de8-41ec-88b2-acd200f778c7"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1802f9fd-14b4-4670-933d-acd4012d6e51"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=67c95093-9e8d-4a41-be13-acd4014b9913"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a557eb89-b2f4-4dbf-9c3d-acd4011b75c3"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=96831b5e-9d55-4733-aaf5-acd400fd7729"}]]}')},177:function(e){e.exports=JSON.parse('{"days":["Day 13 (2/22)","Day 14 (2/24)","Day 15 (2/26)"],"videos":[[{"title":"Lifetime/scope","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=708e30e5-78bf-4b90-9739-acb500312c7e"},{"title":"Structs","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e3713ed2-286e-459b-8345-acb500312c09"},{"title":"Random number generation","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2673bca1-fe33-44be-8071-acd2001a397e"}],[{"title":"Binary file I/O","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cc5e280f-8830-4228-a464-acd1005a75b0"},{"title":"Bitwise operations","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d917e33b-f380-4459-9653-acb500312b05"}],[{"title":"Number representation, type conversion/casting","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7534d0e3-e420-4206-ac0f-acb500312a82"}]],"slides":[[{"title":"Lifetime/scope","link":"../slides/day13_lifetime_scope.pdf"},{"title":"Structs","link":"../slides/day13_struct_type.pdf"},{"title":"Random numbers","link":"../slides/day13_random_numbers.pdf"}],[{"title":"Binary file I/O","link":"../slides/day14_binary_file_io.pdf"},{"title":"Bitwise operations","link":"../slides/day14_bitwise_operations.pdf"}],[{"title":"Number representation, type conversions","link":"../slides/day15_number_rep_type_conversions.pdf"}]],"questions":[[{"title":"Day 13","link":"../docs/questions/day13_questions"}],[{"title":"Day 14","link":"../docs/questions/day14_questions"}],[{"title":"Day 15","link":"../docs/questions/day15_questions"}]],"exercises":[[{"title":"Ex5-1","link":"../docs/exercises/ex5-1/"}],[{"title":"Ex5-2","link":"../docs/exercises/ex5-2/"}],[{"title":"Ex5-3","link":"../docs/exercises/ex5-3/"}]],"resources":[[{"title":"Section 01 Notes","link":"../section_materials/sec01_feb_22_notes.pdf"},{"title":"Section 02 Notes","link":"../section_materials/sec02_feb_22_notes.pdf"},{"title":"Section 05 Notes","link":"../section_materials/sec05_feb_22_notes.pdf"}],[{"title":"Section 01 Notes","link":"../section_materials/sec01_feb_24_notes.pdf"},{"title":"Section 01 Example Code","link":"../section_materials/sec01_feb_24_code.zip"},{"title":"Section 02 Notes","link":"../section_materials/sec02_feb_24_notes.pdf"},{"title":"Section 05 Notes","link":"../section_materials/sec05_feb_24_notes.pdf"}],[{"title":"Section 01 Notes","link":"../section_materials/sec01_feb_26_notes.pdf"},{"title":"Section 02 Notes","link":"../section_materials/sec01_feb_26_notes.pdf"},{"title":"Section 05 Notes","link":"../section_materials/sec05_feb_26_notes.pdf"}]],"zooms":[[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1b51e09e-1769-4e54-8a88-acd7012fde5d"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e6ddd055-4b86-4895-806d-acd70149fd9a"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=74ba7a65-6cd9-4ef2-b079-acd701166595"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fb323093-c523-44c9-84f3-acd700f5b8f4"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d50cdc13-0884-42e1-8eac-acd90136559f"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=02aa647a-37fe-42b6-86e9-acd901501377"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=be659b08-1385-46bb-99fb-acd901126c8a"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=54b07461-1d4a-4312-bf8b-acd900f7b177"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=eefbad0a-dd72-4636-9187-acdb01487e93"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c1a05b6d-b460-4eda-a067-acdb0149f035"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=68288701-caf3-4617-95d7-acdb0110fa75"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=22870c06-a6d8-487a-97dd-acdb00f3b7d9"}]]}')},178:function(e){e.exports=JSON.parse('{"days":["Day 16 (3/1)","Day 17 (3/3)","Day 18 (3/5)"],"videos":[[{"title":"Linked lists","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=aa5a0c06-ca88-420c-8dc9-acb500312992"}],[{"title":"More linked lists","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=194870d7-41d8-488c-9f41-acb50031292b"}],[{"title":"N/A","link":"#"}]],"slides":[[{"title":"Linked lists","link":"../slides/day16_linked_lists.pdf"}],[{"title":"More linked lists","link":"../slides/day17_more_linked_lists.pdf"}],[{"title":"Midterm project","link":"../docs/assignments/midterm"}]],"questions":[[{"title":"Day 16","link":"../docs/questions/day16_questions"}],[{"title":"Day 17","link":"../docs/questions/day17_questions"}],[{"title":"N/A","link":"#"}]],"exercises":[[{"title":"Ex6-1","link":"../docs/exercises/ex6-1/"}],[{"title":"Ex6-2","link":"../docs/exercises/ex6-2/"}],[{"title":"N/A","link":"#"}]],"resources":[[{"title":"Midterm review questions","link":"https://docs.google.com/document/d/19Wwak8BQWpML5ot-u3NRs38EtpuA-I5g5ACQbbDzg5U/edit?usp=sharing"},{"title":"Section 01 Notes","link":"../section_materials/sec01_mar_1_notes.pdf"},{"title":"Section 02 Notes","link":"../section_materials/sec02_mar_1_notes.pdf"},{"title":"Section 05 Notes","link":"../section_materials/sec05_mar_1_notes.pdf"}],[{"title":"Section 01 Notes","link":"../section_materials/sec01_mar_3_notes.pdf"},{"title":"Section 02 Notes","link":"../section_materials/sec02_mar_3_notes.pdf"},{"title":"Section 05 Notes","link":"../section_materials/sec05_mar_3_notes.pdf"}],[{"title":"Life design lab","link":"../slides/day17_life_design_lab.pdf"},{"title":"Midterm review answers","link":"https://docs.google.com/document/d/1f_Tp9_IKy-kdCfzrnTLuZPpsXpL0Z7YobYPnBz1T5A8/edit?usp=sharing"},{"title":"Section 01 Notes","link":"../section_materials/sec01_mar_5_notes.pdf"},{"title":"Section 02 Notes","link":"../section_materials/sec02_mar_5_notes.pdf"},{"title":"Section 04 Notes","link":"../section_materials/sec04_mar_5_notes.pdf"},{"title":"Section 05 Notes","link":"../section_materials/sec05_mar_5_notes.pdf"}]],"zooms":[[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=98df5344-c607-4586-a971-acde013362f8"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a754eae4-0ceb-4fe8-8203-acde01729981"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e77cd280-ec26-4fdc-938a-acde0152f419"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2775c343-d433-4b98-8c8a-acde00f956a0"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8c9311b4-d4a3-42af-b574-ace0012d3b4a"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=20d83d54-58db-45f5-9f6b-ace00150aa0a"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=79c95c0e-fccf-48c1-8756-ace00113d744"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fb913ab7-5b63-48e7-aa90-ace00104aaf6"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d384050c-cd26-4129-b867-ace20135488a"},{"title":"Section 2","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ef663d55-8e2e-4044-949c-ace20158f114"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=33601019-c633-47df-b21d-ace2011098f6"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7e4f40a9-39f4-4e6c-9c51-ace200fd539e"}]]}')},179:function(e){e.exports=JSON.parse('{"days":["Day 19 (3/8)","Day 20 (3/10)","Day 21 (3/12)"],"videos":[[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}]],"slides":[[{"title":"Midterm Preparation","link":"#"}],[{"title":"Midterm Preparation","link":"#"}],[{"title":"Midterm Exam (on Blackboard)","link":"#"}]],"questions":[[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}]],"exercises":[[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}]],"resources":[[{"title":"Midterm review questions","link":"https://docs.google.com/document/d/19Wwak8BQWpML5ot-u3NRs38EtpuA-I5g5ACQbbDzg5U/edit?usp=sharing"},{"title":"Midterm review answers","link":"https://docs.google.com/document/d/1f_Tp9_IKy-kdCfzrnTLuZPpsXpL0Z7YobYPnBz1T5A8/edit?usp=sharing"},{"title":"Midterm review slides","link":"https://docs.google.com/presentation/d/1SBNONdfctV4xZtavyIF4luisiaiqV9MmhEYI-i4wAcc/edit?usp=sharing"},{"title":"Midterm review session","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ddfbb1ab-f575-4eb2-b1f7-ace40161a42c"},{"title":"Section 01 Notes","link":"../section_materials/sec01_mar_8_notes.pdf"}],[{"title":"Midterm review questions","link":"https://docs.google.com/document/d/19Wwak8BQWpML5ot-u3NRs38EtpuA-I5g5ACQbbDzg5U/edit?usp=sharing"},{"title":"Midterm review answers","link":"https://docs.google.com/document/d/1f_Tp9_IKy-kdCfzrnTLuZPpsXpL0Z7YobYPnBz1T5A8/edit?usp=sharing"},{"title":"Midterm review slides","link":"https://docs.google.com/presentation/d/1SBNONdfctV4xZtavyIF4luisiaiqV9MmhEYI-i4wAcc/edit?usp=sharing"},{"title":"Midterm review session","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ddfbb1ab-f575-4eb2-b1f7-ace40161a42c"}],[{"title":"N/A","link":"#"}]],"zooms":[[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4a8b62ce-7bb3-4914-8563-ace600e1c061"},{"title":"Section 2 (n/a)","link":"#"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5947d446-0f84-40dc-8017-ace501127d39"},{"title":"Section 5 (n/a)","link":"#"}],[{"title":"Section 1 (n/a)","link":"#"},{"title":"Section 2 (n/a)","link":"#"},{"title":"Section 4 (n/a)","link":"#"},{"title":"Section 5 (n/a)","link":"#"}],[{"title":"(no class meeting)","link":"#"},{"title":"(no class meeting)","link":"#"},{"title":"(no class meeting)","link":"#"},{"title":"(no class meeting)","link":"#"}]]}')},47:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),o=a(48),n=a.n(o);t.default=function(e){return e.days&&e.videos&&e.slides&&e.questions&&e.exercises&&e.resources&&e.zooms?s.a.createElement("table",{className:n.a.table},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null),s.a.createElement("th",null,e.days[0]),s.a.createElement("th",null,e.days[1]),s.a.createElement("th",null,e.days[2]))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Videos"),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.videos[0].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.videos[1].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.videos[2].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),s.a.createElement("tr",null,s.a.createElement("th",null,"Slides"),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.slides[0].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.slides[1].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.slides[2].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),s.a.createElement("tr",null,s.a.createElement("th",null,"Recap Questions"),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.questions[0].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.questions[1].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.questions[2].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," "))))))),s.a.createElement("tr",null,s.a.createElement("th",null,"Exercise"),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.exercises[0].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.exercises[1].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.exercises[2].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link}," ",e.title," "))))))),s.a.createElement("tr",null,s.a.createElement("th",null,"Additional Resources"),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.resources[0].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.resources[1].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.resources[2].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),s.a.createElement("tr",null,s.a.createElement("th",null,"Recorded Sessions"),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.zooms[0].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.zooms[1].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),s.a.createElement("th",null,s.a.createElement("ul",{className:n.a.li},e.zooms[2].map(((e,t)=>s.a.createElement("li",{key:t},s.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))))):s.a.createElement("div",null)}},85:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),o=a(122),n=a(130),l=a(131),c=a(47);t.default=function(){for(var e=new Array,t=1;t<=7;++t)try{var i=a(142)("./wk"+t+"data.json");e.push(s.a.createElement(l.a,{value:"w"+t},s.a.createElement(c.default,{days:i.days,videos:i.videos,slides:i.slides,questions:i.questions,exercises:i.exercises,resources:i.resources,zooms:i.zooms})))}catch(h){console.log("cannot read from ./data/wk"+t+"data.json")}var d=s.a.createElement(n.a,{defaultValue:"w7",values:[{label:"Wk 1",value:"w1"},{label:"Wk 2",value:"w2"},{label:"Wk 3",value:"w3"},{label:"Wk 4",value:"w4"},{label:"Wk 5",value:"w5"},{label:"Wk 6",value:"w6"},{label:"Wk 7",value:"w7"}]},e),p=new Array;for(t=8;t<=14;++t)try{var r=a(142)("./wk"+t+"data.json");p.push(s.a.createElement(l.a,{value:"w"+t},s.a.createElement(c.default,{days:r.days,videos:r.videos,slides:r.slides,questions:r.questions,exercises:r.exercises,resources:r.resources,zooms:r.zooms})))}catch(h){console.log("cannot read from ./data/wk"+t+"data.json")}var m=s.a.createElement(n.a,{defaultValue:"w8",values:[{label:"Wk 8",value:"w8"},{label:"Wk 9",value:"w9"},{label:"Wk 10",value:"w10"},{label:"Wk 11",value:"w11"},{label:"Wk 12",value:"w12"},{label:"Wk 13",value:"w13"},{label:"Wk 14",value:"w14"}]},p);return s.a.createElement(o.a,{title:"Schedule"},s.a.createElement("span",{className:"alert alert--info",style:{display:"flex",justifyContent:"center",padding:"0 0 0 0"}},"The weekly tabs will be populated with new course material as the semester progresses (see the tentative\xa0",s.a.createElement("a",{href:"../schedule"},"schedule"),")."),s.a.createElement("div",{style:{display:"block",justifyContent:"center",padding:"1% 1% 1% 1%"},class:"container"},s.a.createElement(n.a,{block:"true",defaultValue:"c",values:[{label:"C (Week 1 - Week 7)",value:"c"},{label:"C++ (Week 8 - Week 14)",value:"c++"}]},s.a.createElement(l.a,{value:"c"},d),s.a.createElement(l.a,{value:"c++"},m))))}}}]);