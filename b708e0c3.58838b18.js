(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),r=(n(0),n(131)),o={id:"hw3",title:"Homework 3"},l={unversionedId:"assignments/hw3",id:"assignments/hw3",isDocsHomePage:!1,title:"Homework 3",description:"* You are expected to work individually.",source:"@site/docs/assignments/hw3.md",slug:"/assignments/hw3",permalink:"/cs220-sp21/docs/assignments/hw3",version:"current"},c=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Specific Requirements and Assumptions",id:"specific-requirements-and-assumptions",children:[]},{value:"Sample Runs",id:"sample-runs",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Files",id:"files",children:[{value:"Provided files",id:"provided-files",children:[]},{value:"Gitlog",id:"gitlog",children:[]},{value:"README",id:"readme",children:[]}]},{value:"Compiling",id:"compiling",children:[]},{value:"Submission",id:"submission",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"You are expected to work individually."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Due: ",Object(r.b)("del",{parentName:"strong"},"Tuesday")," Wednesday ",Object(r.b)("em",{parentName:"strong"},"February ",Object(r.b)("del",{parentName:"em"},"23rd")," 24th")," at 11pm EST (Baltimore time).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"This assignment is worth 60 points."))))),Object(r.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(r.b)("div",{className:"admonition admonition-success alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Objectives")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"To practice with:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"arrays,"),Object(r.b)("li",{parentName:"ul"},"strings,"),Object(r.b)("li",{parentName:"ul"},"file I/O,"),Object(r.b)("li",{parentName:"ul"},"command-line arguments,"),Object(r.b)("li",{parentName:"ul"},"Makefiles,"),Object(r.b)("li",{parentName:"ul"},"recursion,"),Object(r.b)("li",{parentName:"ul"},"program organization,"),Object(r.b)("li",{parentName:"ul"},"testing with ",Object(r.b)("inlineCode",{parentName:"li"},"assert"),".")))),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"A regular expression, or simply ",Object(r.b)("strong",{parentName:"p"},"regex"),", is a sequence of characters that defines a search pattern ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Regular_expression"},"wikipedia"),". We then use such patterns to do \u201cfind\u201d or \u201cfind-then-replace\u201d operations on a given text. Regular expressions are very popular and widely used. You, yourself, use them regularly when working on a mac/linux terminal. For instance, if you intend to list all files with extension ",Object(r.b)("inlineCode",{parentName:"p"},".c"),", you simply do ",Object(r.b)("inlineCode",{parentName:"p"},"ls *.c"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"*")," in ",Object(r.b)("inlineCode",{parentName:"p"},"*.c")," represents a catch all, and can represent any set of characters, followed by a ",Object(r.b)("inlineCode",{parentName:"p"},".c"),". (Note that ",Object(r.b)("inlineCode",{parentName:"p"},"*")," in a filename wildcard pattern has a slightly different meaning than ",Object(r.b)("inlineCode",{parentName:"p"},"*")," in a regular expression, as you will see shortly.)"),Object(r.b)("p",null,"In this homework, you will implement a simple yet effective regular expression matcher. A number of words are stored in an input file that should be initially read and stored into a 2D array of characters. Each row in this array stores one word. Next, the program repeatedly prompts the user to enter a regex and reports which of the words in the 2D array (if any) match the given regex. The user of the program can exit the program by pressing ",Object(r.b)("inlineCode",{parentName:"p"},"ctrl-d")," at any time. We are going to modify the standard regex protocol for this assignment, to make it simpler to implement."),Object(r.b)("h2",{id:"specific-requirements-and-assumptions"},"Specific Requirements and Assumptions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"There are three regex wildcard characters for this assignment: ",Object(r.b)("inlineCode",{parentName:"li"},"*"),", ",Object(r.b)("inlineCode",{parentName:"li"},"?"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"~"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"*")," (Kleene star) - will match the regex character preceding the star ",Object(r.b)("strong",{parentName:"li"},"0 or more times"),Object(r.b)("br",{parentName:"li"}),"For example, the regex ",Object(r.b)("inlineCode",{parentName:"li"},"a*bc")," matches a word consisting of some (possibly zero) numbers of the character ",Object(r.b)("inlineCode",{parentName:"li"},"a"),", followed by ",Object(r.b)("inlineCode",{parentName:"li"},"bc"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"?")," (Question Mark) - will match the regex character preceding the question mark ",Object(r.b)("strong",{parentName:"li"},"0 or 1 time"),", but no more.",Object(r.b)("br",{parentName:"li"}),"For example, the regex ",Object(r.b)("inlineCode",{parentName:"li"},"a?bc")," matches consisting of at most one character ",Object(r.b)("inlineCode",{parentName:"li"},"a"),", followed by ",Object(r.b)("inlineCode",{parentName:"li"},"bc"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"~")," (Tilde) - will match any group of length between ","[0, ",Object(r.b)("inlineCode",{parentName:"li"},"restriction"),"]",", where restriction length can optionally be changed in the command line. This overrides the standard ",Object(r.b)("inlineCode",{parentName:"li"},"~")," operator found in regex.",Object(r.b)("br",{parentName:"li"}),"For example, the regex ",Object(r.b)("inlineCode",{parentName:"li"},"~bc")," will match any word of length at most ",Object(r.b)("inlineCode",{parentName:"li"},"restriction+2")," ending in ",Object(r.b)("inlineCode",{parentName:"li"},"bc"),"."))),Object(r.b)("li",{parentName:"ul"},"The input file will be passed in as the first argument to the program. If you run the program without specifying an input file, you must print an error and return a non-zero value from main.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The first line of the input file will contain a number ",Object(r.b)("inlineCode",{parentName:"li"},"n")," indicating the number of words in the file. If the first line is not a valid number, you must print an error message and return a non-zero value from the main function."),Object(r.b)("li",{parentName:"ul"},"You can assume that there will be no more than 1024 words in the input file."),Object(r.b)("li",{parentName:"ul"},"You can assume the words will be at most 32 characters in length and will only contain valid alphabets (A - Z, a - z), numbers (0 - 9) or special characters (@, #, \\$, %, !, &)."),Object(r.b)("li",{parentName:"ul"},"Words in the file can be different sizes, and are not required to use all 32 characters."),Object(r.b)("li",{parentName:"ul"},"There will be no regex wildcards (",Object(r.b)("inlineCode",{parentName:"li"},"*"),", ",Object(r.b)("inlineCode",{parentName:"li"},"?"),", or ",Object(r.b)("inlineCode",{parentName:"li"},"~"),") in the words found in the input file."),Object(r.b)("li",{parentName:"ul"},"If there are fewer words in the word file than specified by the number in the first line of the file, then you must print an error message and return a non-zero value from main."),Object(r.b)("li",{parentName:"ul"},"You must only read the first ",Object(r.b)("inlineCode",{parentName:"li"},"n")," words, you can ignore all words after ",Object(r.b)("inlineCode",{parentName:"li"},"n")," and should continue with the program."))),Object(r.b)("li",{parentName:"ul"},"Once the files are read, the user can input into the ",Object(r.b)("inlineCode",{parentName:"li"},"stdin")," input stream the regex patterns to match with the list of words from the filename.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The patterns are separated using white space characters (any amount) and the executable should continue to look for patterns until it reaches end of input (",Object(r.b)("inlineCode",{parentName:"li"},"ctrl-D")," if stdin is not redirected)."),Object(r.b)("li",{parentName:"ul"},"You can assume each input regex pattern will be under 128 characters."),Object(r.b)("li",{parentName:"ul"},"For each regex pattern, the words that match the regex pattern should be printed to ",Object(r.b)("inlineCode",{parentName:"li"},"stdout")," ",Object(r.b)("strong",{parentName:"li"},"in the order they were read in from the file")," with one word per line."),Object(r.b)("li",{parentName:"ul"},"You can assume that the regex pattern a user inputs is well formed, and that there will always be a valid character before the ",Object(r.b)("inlineCode",{parentName:"li"},"?")," and ",Object(r.b)("inlineCode",{parentName:"li"},"*")," wildcard characters."),Object(r.b)("li",{parentName:"ul"},"The regex pattern has to ",Object(r.b)("strong",{parentName:"li"},"match the whole word"),", and not just a substring of the word."),Object(r.b)("li",{parentName:"ul"},"There may be a multiple ways a regex pattern can match a search word. For example, for the search word ",Object(r.b)("inlineCode",{parentName:"li"},"aa")," and the regex pattern ",Object(r.b)("inlineCode",{parentName:"li"},"a?a?a"),", either the first ",Object(r.b)("inlineCode",{parentName:"li"},"a?")," or the second token can be counted as 0 instance (with the other counted as 1 instance) to match the search word - you must explore all possibilities. (Hint: think recursion!)"),Object(r.b)("li",{parentName:"ul"},"If a particular regex pattern has no match, then you should output ",Object(r.b)("inlineCode",{parentName:"li"},"No match found for regex '...'")," where ",Object(r.b)("inlineCode",{parentName:"li"},"...")," contains the regex pattern"))),Object(r.b)("li",{parentName:"ul"},"The default ",Object(r.b)("inlineCode",{parentName:"li"},"restriction")," length for the ",Object(r.b)("inlineCode",{parentName:"li"},"~")," (tilde) operator is 10, however the user can optionally specify a ",Object(r.b)("inlineCode",{parentName:"li"},"restriction")," length (>= 1) in the command line argument after the filename argument. If the user specifies an invalid ",Object(r.b)("inlineCode",{parentName:"li"},"restriction")," length, then the program should print an error message and return a non-zero value from main.  (Hint: You can use C's ",Object(r.b)("inlineCode",{parentName:"li"},"atoi")," command in ",Object(r.b)("inlineCode",{parentName:"li"},"stdlib.h")," or ",Object(r.b)("inlineCode",{parentName:"li"},"sscanf")," to convert a string from the command line into an ",Object(r.b)("inlineCode",{parentName:"li"},"int"),".)"),Object(r.b)("li",{parentName:"ul"},"All variables must be declared inside functions. No variables should be global or ",Object(r.b)("inlineCode",{parentName:"li"},"extern"),"."),Object(r.b)("li",{parentName:"ul"},'You must factor your code into functions, each function performing a distinct task. We give one required function prototype below under "Testing" but this should ',Object(r.b)("strong",{parentName:"li"},"NOT")," be the only non-main function in your program."),Object(r.b)("li",{parentName:"ul"},"You may ",Object(r.b)("strong",{parentName:"li"},"NOT")," use the C library ",Object(r.b)("inlineCode",{parentName:"li"},"regex.h")," or any inbuilt regular expression matching types in your program."),Object(r.b)("li",{parentName:"ul"},"Put all function declarations into a header file (",Object(r.b)("inlineCode",{parentName:"li"},"functions.h"),"). ",Object(r.b)("inlineCode",{parentName:"li"},"functions.c")," will contain implementations for those functions, and ",Object(r.b)("inlineCode",{parentName:"li"},"hw3.c")," will use those functions to implement the interface described above. Additionally, ",Object(r.b)("inlineCode",{parentName:"li"},"test_functions.c")," will also contain a main function that tests each of the functions in ",Object(r.b)("inlineCode",{parentName:"li"},"functions.c"),". All three ",Object(r.b)("inlineCode",{parentName:"li"},".c")," files should ",Object(r.b)("inlineCode",{parentName:"li"},'#include "functions.h"'),"."),Object(r.b)("li",{parentName:"ul"},"Include your name and JHED as comments in the top two lines of ",Object(r.b)("strong",{parentName:"li"},"each")," .c and .h file you create."),Object(r.b)("li",{parentName:"ul"},"Your Makefile should compile the ",Object(r.b)("inlineCode",{parentName:"li"},"hw3")," executable with the command ",Object(r.b)("inlineCode",{parentName:"li"},"make hw3"),", and create AND run the ",Object(r.b)("inlineCode",{parentName:"li"},"test")," executable with the command ",Object(r.b)("inlineCode",{parentName:"li"},"make test"),".")),Object(r.b)("h2",{id:"sample-runs"},"Sample Runs"),Object(r.b)("p",null,"USAGE: ",Object(r.b)("inlineCode",{parentName:"p"},"./hw3 <filename> <OPTIONAL: restriction_length>")),Object(r.b)("p",null,"Let input text file ",Object(r.b)("inlineCode",{parentName:"p"},"input.txt")," contain:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"5\nintermediate\ninttterrmeediateeee\nprogram\nppproograaamm\naaa\n")),Object(r.b)("p",null,"Run the command using ",Object(r.b)("inlineCode",{parentName:"p"},"./hw3 input.txt")),Object(r.b)("p",null,"Note: Ignore the dollar sign (\\$) at the front of the user input, it is used here just to distinguish a user input from program output."),Object(r.b)("p",null,"Test 1"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ intermediate      # user input\nintermediate        # program output\n")),Object(r.b)("p",null,"Test 2"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ int*e*r*me*diate* # user input\nintermediate        # program output\ninttterrmeediateeee # program output\n")),Object(r.b)("p",null,"Test 3"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ ina?ttt?t*e*r*ms?e*diate*\ninttterrmeediateeee\n")),Object(r.b)("p",null,"Test 4"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ ~                     # only show words with at most 10 characters\nprogram\naaa\n")),Object(r.b)("p",null,"Test 5"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ ~~                    # words at most 2*10 = 20 characters (all words)\nintermediate\ninttterrmeediateeee\nprogram\nppproograaamm\naaa\n")),Object(r.b)("p",null,"Test 6"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ ~a                    # the ~ can represent two characters, followed by an a.\naaa                     # All regex characters need to be matched.\n")),Object(r.b)("p",null,"Test 7"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ a?a?a?a?a?a?a?aaa   # all the 'a?' are ignored, and only the trailing 'aaa' are considered\naaa\n")),Object(r.b)("p",null,"Test 8"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ a*\naaa\n")),Object(r.b)("p",null,"Test 9"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ a*b\nNo match found for regex 'a*b'\n")),Object(r.b)("h2",{id:"testing"},"Testing"),Object(r.b)("p",null,"In addition to your ",Object(r.b)("inlineCode",{parentName:"p"},"hw3.c")," program, you must write a second program called ",Object(r.b)("inlineCode",{parentName:"p"},"test_functions.c")," that tests your functions via ",Object(r.b)("inlineCode",{parentName:"p"},"assert(...)")," statements. This program will have its own main function and takes no input. It simply runs a series of tests that you have written. Your tests should use assert statements to make sure your functions behave properly. If all tests pass, the program should output a message indicating success."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"It is extremely, extremely good programming practice to write test cases to"),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},"test your basic assumptions"),Object(r.b)("li",{parentName:"ol"},'try "corner" and extreme cases'),Object(r.b)("li",{parentName:"ol"},"test loop invariants, etc")),Object(r.b)("p",{parentName:"div"},"It can save you a great deal of frustration and effort down the road. We will look carefully at your tests when grading."))),Object(r.b)("p",null,"The command ",Object(r.b)("inlineCode",{parentName:"p"},"make test")," should create AND run the test executable. Running the test file should also give a message at the end indicating that all tests have passed (already done for you). Please do add more of your own tests to the test files."),Object(r.b)("p",null,"When creating your example ",Object(r.b)("inlineCode",{parentName:"p"},".txt")," files to test your ",Object(r.b)("inlineCode",{parentName:"p"},"read_file")," function, you must ",Object(r.b)("strong",{parentName:"p"},"create the text files from within the test program"),". For example, let's say I want to create a test file, I must go about doing it like this."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},'FILE* fptr = fopen("test_file_1.txt", "w");\nfprintf(fptr, "5\\nintermediate\\ninttterrmeediateeee\\nprogram\\nppproograaamm\\naaa");\nfclose(fptr);\n// now I can open this file, and use it for my tests to fill the grid.\n')),Object(r.b)("p",null,"When you submit your ",Object(r.b)("inlineCode",{parentName:"p"},".zip")," file to Gradescope, you do not need to submit your ",Object(r.b)("inlineCode",{parentName:"p"},".txt")," test files, because the test program should create them ",Object(r.b)("strong",{parentName:"p"},"from within")," the program."),Object(r.b)("h2",{id:"files"},"Files"),Object(r.b)("h3",{id:"provided-files"},"Provided files"),Object(r.b)("p",null,"Start with the template Makefile, source files, and header file in the public repo: ",Object(r.b)("inlineCode",{parentName:"p"},"cs220-sp21-public/homework/hw3/"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The Makefile contains some, but not all, of the needed target definitions. The definitions provided are enough for you to build the ",Object(r.b)("inlineCode",{parentName:"li"},"hw3")," executable using ",Object(r.b)("inlineCode",{parentName:"li"},"make hw3")," on the command line. The Makefile does not have a target for the ",Object(r.b)("inlineCode",{parentName:"li"},"test")," executable -- you must add this yourself. Include the final Makefile (with working targets for both ",Object(r.b)("inlineCode",{parentName:"li"},"test_functions.c")," and ",Object(r.b)("inlineCode",{parentName:"li"},"hw3.c"),") in your submitted files. Remember: ",Object(r.b)("inlineCode",{parentName:"li"},"make test")," should create the test executable ",Object(r.b)("strong",{parentName:"li"},"and")," run the test file in one command."),Object(r.b)("li",{parentName:"ul"},"The source and header files contain some, but not all, of the declarations/definitions you will need and you will also have to add code in the ",Object(r.b)("inlineCode",{parentName:"li"},"TODO")," regions. ")),Object(r.b)("h3",{id:"gitlog"},"Gitlog"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://imgs.xkcd.com/comics/git_commit.png",alt:"Git commit trend throughout the project"})),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You must commit your changes with meaningful messages every so often. But what are meaningful commit messages? They are simply messages that can inform the reader what the commit exactly did to improve the program. If you want further information, you can read ",Object(r.b)("a",{parentName:"p",href:"https://chris.beams.io/posts/git-commit/"},"this")," 10 minute article that talks about good commit message practice."))),Object(r.b)("p",null,"You must include with your submission a copy of the output of git log showing at least five commits to the repository. Save the ",Object(r.b)("inlineCode",{parentName:"p"},"git log")," output into a file called ",Object(r.b)("inlineCode",{parentName:"p"},"gitlog.txt")," (e.g. by doing ",Object(r.b)("inlineCode",{parentName:"p"},"git log > gitlog.txt)"),"."),Object(r.b)("h3",{id:"readme"},"README"),Object(r.b)("p",null,"Please submit a file called ",Object(r.b)("inlineCode",{parentName:"p"},"README")," (not ",Object(r.b)("inlineCode",{parentName:"p"},"README.txt")," or ",Object(r.b)("inlineCode",{parentName:"p"},"README.md"),", etc -- just ",Object(r.b)("inlineCode",{parentName:"p"},"README"),") including information about what design choices you made and anything the graders should know about your submission. In your ",Object(r.b)("inlineCode",{parentName:"p"},"README")," you should:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Write your name and JHED ID at the top of the file"),Object(r.b)("li",{parentName:"ul"},"Briefly justify the structure of your program; why you defined the functions you did, etc"),Object(r.b)("li",{parentName:"ul"},"If applicable: Highlight anything you did that was particularly clever"),Object(r.b)("li",{parentName:"ul"},"If applicable: Tell the graders if you couldn\u2019t do everything. Where did you stop? What did you get stuck on? What are the parts you already know do not work according to the requirements?")),Object(r.b)("h2",{id:"compiling"},"Compiling"),Object(r.b)("p",null,"Your code should compile with no errors or warnings with the typical command: ",Object(r.b)("inlineCode",{parentName:"p"},"gcc <source> -Wall -Wextra -std=c99 -pedantic"),". Do not use any special libraries, like math.h, that require additional/different compiler options. Libraries such as ",Object(r.b)("inlineCode",{parentName:"p"},"string.h")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ctype.h")," are okay to use in general. Your program should compile without errors or warnings with the Makefile."),Object(r.b)("h2",{id:"submission"},"Submission"),Object(r.b)("p",null,"Create a ",Object(r.b)("inlineCode",{parentName:"p"},".zip")," file named ",Object(r.b)("inlineCode",{parentName:"p"},"hw3.zip")," containing:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"hw3.c"),Object(r.b)("li",{parentName:"ul"},"functions.h"),Object(r.b)("li",{parentName:"ul"},"functions.c"),Object(r.b)("li",{parentName:"ul"},"test_functions.c"),Object(r.b)("li",{parentName:"ul"},"README"),Object(r.b)("li",{parentName:"ul"},"Makefile"),Object(r.b)("li",{parentName:"ul"},"gitlog.txt")),Object(r.b)("p",null,"Copy ",Object(r.b)("inlineCode",{parentName:"p"},"hw3.zip")," file to your local machine (using ",Object(r.b)("inlineCode",{parentName:"p"},"scp")," or ",Object(r.b)("inlineCode",{parentName:"p"},"pscp"),"), and submit it as Homework 3 on Gradescope. When you submit, gradescope conducts a series of automatic tests. These do basic checks, e.g. to check that you submitted the right files. If you see error messages (in red), address them and resubmit. You may re-submit any number of times prior to the deadline; only your latest submission will be graded. Review the course syllabus for late submission policies (grace period and late days), and remember that ",Object(r.b)("strong",{parentName:"p"},"if your final submitted code does not compile, you will likely earn a zero score for the assignment.")),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Remember that if your final submitted code does not compile, you will earn a zero score for the assignment."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Two notes regarding automatic checks for programming assignments:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Passing an automatic check is not itself worth points. (There might be a nominal, low point value like 0.01 associated with a check, but that won\u2019t count in the end.) The checks exist to help you and the graders find obvious errors."),Object(r.b)("li",{parentName:"ul"},"The automatic checks cover some of the requirements set out in the assignment, but not all. It is up to you to test your own work and ensure your programs satisfy all stated requirements. Passing all the automatic checks does not mean you have earned all the points.")))))}b.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=b(n),d=a,u=m["".concat(o,".").concat(d)]||m[d]||p[d]||r;return n?i.a.createElement(u,l(l({ref:t},s),{},{components:n})):i.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);