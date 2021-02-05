(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),i=(a(0),a(97)),o={id:"hw1",title:"Homework 1"},s={unversionedId:"assignments/hw1",id:"assignments/hw1",isDocsHomePage:!1,title:"Homework 1",description:"Update 2/3: Corrected the expected output for Example 3.",source:"@site/docs/assignments/hw1.md",slug:"/assignments/hw1",permalink:"/cs220-sp21/docs/assignments/hw1",version:"current"},c=[{value:"Learning Objectives",id:"learning-objectives",children:[{value:"Overview",id:"overview",children:[]},{value:"Program Requirements",id:"program-requirements",children:[]},{value:"Specific Requirements",id:"specific-requirements",children:[]},{value:"Example Runs",id:"example-runs",children:[]},{value:"Submission",id:"submission",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Update 2/3"),": Corrected the expected output for Example 3."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"You are expected to work individually."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Due: Tuesday ",Object(i.b)("strong",{parentName:"strong"},"February 9th")," at 11pm EDT (Baltimore time).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"This assignment is worth 60 points."))))),Object(i.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Objectives")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"arithmetic operators"),Object(i.b)("li",{parentName:"ul"},"control structures"),Object(i.b)("li",{parentName:"ul"},"input collection and validation"),Object(i.b)("li",{parentName:"ul"},"version control using ",Object(i.b)("inlineCode",{parentName:"li"},"git"))))),Object(i.b)("h3",{id:"overview"},"Overview"),Object(i.b)("p",null,"In this assignment, you will create a C program which allows the user to enter an arithmetic expression of temperatures that is of arbitrary length and contains a mix of Celsius and Farenheit values. The program will calculate and output the final temperature value of that expression in Farenheit. You will read in the input using standard input and output the result to standard output after all the values have been read. If there is an error in the format of the user input, then you will identify the error type and return a specified value. See the Example Runs section below."),Object(i.b)("h3",{id:"program-requirements"},"Program Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The expression will contain non-zero length temperature-unit pairs joined by arithmetic operators.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A numeric floating point value will indicate the temperature value."),Object(i.b)("li",{parentName:"ul"},"A case-sensitive character will represent the temperature unit -- ",Object(i.b)("inlineCode",{parentName:"li"},"c")," for Celsius and ",Object(i.b)("inlineCode",{parentName:"li"},"f")," for Farenheit."),Object(i.b)("li",{parentName:"ul"},"Arithmetic operators could be ",Object(i.b)("inlineCode",{parentName:"li"},"+")," (for addition) or ",Object(i.b)("inlineCode",{parentName:"li"},"-")," (for subtraction). There will be no parentheses in the equation."))),Object(i.b)("li",{parentName:"ul"},"The result printed out by the program should be in Farenheit and be formated to two decimal places, followed by a space and ",Object(i.b)("inlineCode",{parentName:"li"},"F"),". A successful run will return with value ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."),Object(i.b)("li",{parentName:"ul"},"Your program must validate the user's input and catch any errors.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If the user inputs an expression which is not well-formed (for example missing operands or operators, contains invalid operators, contains parentheses, etc.), your program will report the error message ",Object(i.b)("inlineCode",{parentName:"li"},"malformed expression")," followed by a new line and end immediately with a return value of ",Object(i.b)("inlineCode",{parentName:"li"},"1"),". "),Object(i.b)("li",{parentName:"ul"},"If the user inputs an expression with an invalid temperature unit, your program will report the error message ",Object(i.b)("inlineCode",{parentName:"li"},"invalid unit")," followed by a new line and end immediately with a return value of ",Object(i.b)("inlineCode",{parentName:"li"},"2"),".  Since the input should be evaluated seqentially, the program should exit with the first error found regardless of the number of errors in the full expression."),Object(i.b)("li",{parentName:"ul"},'The program should catch the first error in the sequence and exit the program. At most one of "malformed expression" or "invalid unit" will apply to a given input, since the program is immediately terminated once one or the other is detected.')))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"To convert from celsius to farenheit, you can multiply the celsius value by 1.8 and add 32.0 to the result."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Note that your program will continue collecting (parts of) the expression entered by the user as long as it is well-formed. A proper expression may contain zero or more of any kind of whitespace (spaces, tabs, newlines) between operands and operators. As such, the user will press ",Object(i.b)("strong",{parentName:"li"},"ctrl-d")," to indicate the end of the input.  ")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In some situations, the user will need to press ",Object(i.b)("strong",{parentName:"p"},"ctrl-d")," twice in a row."))),Object(i.b)("h3",{id:"specific-requirements"},"Specific Requirements"),Object(i.b)("p",null,"In the homework folder of your private repository (",Object(i.b)("inlineCode",{parentName:"p"},"2021-spring-student-JHED"),"), you will create a new subfolder named ",Object(i.b)("inlineCode",{parentName:"p"},"hw1"),". In that ",Object(i.b)("inlineCode",{parentName:"p"},"hw1")," subfolder, you will create your program in a new C source file named ",Object(i.b)("inlineCode",{parentName:"p"},"hw1.c"),". At the top of the file, be sure to add two comment lines that indicate ",Object(i.b)("strong",{parentName:"p"},"your name")," and ",Object(i.b)("strong",{parentName:"p"},"JHED ID"),"  (name-based)."),Object(i.b)("p",null,"Throughout your work on this assignment, be sure to frequently add, commit (supplying meaningful messages) and push your changes to your personal git repository.  After you complete your work on the assignment, you will be asked to submit a ",Object(i.b)("em",{parentName:"p"},"gitlog.txt")," file, just as in Homework 0. However, we expect your log for this homework to show more activity."),Object(i.b)("p",null,"Recall that your code is always expected to compile without errors or warnings. Submissions which do not compile properly may earn zero points, so be sure to submit to Gradescope early and often! And once you get a good start on the assignment, always have some earlier compiling version of your work pushed up to Github."),Object(i.b)("h3",{id:"example-runs"},"Example Runs"),Object(i.b)("p",null,"Here are several samples runs of the program on ugrad, where $ denotes the command prompt. Note that the first line shown below is the command you are expected to use as you compile your program (and the one that will be used by the graders).  The compilation line should report zero errors and warnings, as demonstrated below:"),Object(i.b)("p",null,"Example 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ gcc -std=c99 -pedantic -Wall -Wextra hw1.c\n$ ./a.out\nPlease enter the weather trend using + and - only:\n5.25 f (followed by ctrl-d)\n5.25 F\n")),Object(i.b)("p",null,"Example 2 (note the absence of the space)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ ./a.out\nPlease enter the weather trend using + and - only:\n5.25c\n41.45 F\n")),Object(i.b)("p",null,"Example 3"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ ./a.out\nPlease enter the weather trend using + and - only:\n5c + 5.4f + 2.32 f - 45c\n-64.28 F\n")),Object(i.b)("p",null,"Example 4"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ ./a.out\nPlease enter the weather trend using + and - only:\n5c + + + 3f\nmalformed expression\n")),Object(i.b)("p",null,"Example 5"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ ./a.out\nPlease enter the weather trend using + and - only:\n5k + 3c\ninvalid unit\n")),Object(i.b)("p",null,"Example 6"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ ./a.out\nPlease enter the weather trend using + and - only:\n5c * 2f\nmalformed expression\n")),Object(i.b)("p",null,"Example 7 (note that the program exits with the first error parsed)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ ./a.out\nPlease enter the weather trend using + and - only:\n5k * 2f\ninvalid unit\n")),Object(i.b)("p",null,"Example 8 (spaces and new lines should be ignored)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ ./a.out\nPlease enter the weather trend using + and - only:\n5c +\n3 f+2  c +3f\n82.60 F\n")),Object(i.b)("p",null,"Example 9"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ ./a.out\nPlease enter the weather trend using + and - only:\n5c + 3 + 2f\ninvalid unit\n")),Object(i.b)("p",null,"Example 10"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ ./a.out\nPlease enter the weather trend using + and - only:\n(user enters nothing prior to ctrl-d)\nmalformed expression\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"There may be other ways for the input expressions to be malformed, besides the three ways shown above. You must be careful to check for all the various ways it might be malformed. The following examples show valid expressions:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"1.c + 2f\n(user enters ctrl-d)\n\n.1f - .5 c\n(user enters ctrl-d)\n\n-.5f\n(user enters ctrl-d)\n\n1c + +1f\n(user enters ctrl-d)\n\n1f - 01 f\n+ 2c (note: user hits enter and continues typing before hitting ctrl-d)\n(user presses ctrl-d)\n")))),Object(i.b)("h3",{id:"submission"},"Submission"),Object(i.b)("p",null,"Create a ",Object(i.b)("em",{parentName:"p"},".zip")," file named ",Object(i.b)("em",{parentName:"p"},"hw1.zip")," which contains only ",Object(i.b)("strong",{parentName:"p"},"hw1.c")," and ",Object(i.b)("strong",{parentName:"p"},"gitlog.txt"),". Copy the ",Object(i.b)("em",{parentName:"p"},"hw1.zip")," file to your local machine and submit it as Homework 1 on Gradescope. "),Object(i.b)("p",null,"Recall you can create your ",Object(i.b)("inlineCode",{parentName:"p"},"gitlog.txt")," file by running ",Object(i.b)("inlineCode",{parentName:"p"},"git log > gitlog.txt"),"."),Object(i.b)("p",null,"When you submit, Gradescope conducts a series of automatic tests.  These tests do basic checks like making sure that you submitted the right files and that your ",Object(i.b)("inlineCode",{parentName:"p"},".c")," file compiles properly.  If you see error messages here (look for red), address them and resubmit."),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"No-compile Policy")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Remember that if your final submitted code does not compile, you will earn a zero score for the assignment."))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You may re-submit any number of times prior to the deadline; only your latest submission will be graded."))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Review the course syllabus for late submission policies (grace period and late days). You will want to save your late days for the future assignments as they will be more involved."))),Object(i.b)("p",null,"You should also make sure that your code has good style. You can look at the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://jhucsf.github.io/spring2021/assign/style.html"}),"coding style guidelines here")," of a course you will take later that also applies to this course. In brief, you should make sure that your submission is well formed:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"it is not overcommented or undercommented"),Object(i.b)("li",{parentName:"ul"},"there are no ambiguous variable names "),Object(i.b)("li",{parentName:"ul"},"proper/consistent bracket placements and indentation"),Object(i.b)("li",{parentName:"ul"},"no global variables")),Object(i.b)("p",null,"Two notes regarding automatic checks for programming assignments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Passing an automatic check is not itself worth points. (There might be a nominal, low point value like 0.01 associated with a check, but that will not count in the end.) The checks exist to help you and the graders find obvious errors. This will be true for most of the assignments; the actual grades are given manually by the graders, along with comments."),Object(i.b)("li",{parentName:"ul"},"The automatic checks cover some of the requirements set out in the assignment, but not all. There will be hidden tests that test edge cases. In general, it is up to you to test your own work and ensure your programs satisfy all stated requirements. Passing all the automatic checks does not necessarily mean you will earn all the points.")))}b.isMDXComponent=!0},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=b(a),u=n,d=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return a?r.a.createElement(d,s(s({ref:t},l),{},{components:a})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);