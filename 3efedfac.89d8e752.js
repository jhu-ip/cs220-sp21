(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=i,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?a.a.createElement(h,s(s({ref:t},c),{},{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},183:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/example-trie-5282e71f93d4eee576cdcd717fbc5526.png"},184:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/GamePigeon-Word-Hunt-febf46ef4e88f45439c1c7d64d08e7ad.jpeg"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(2),a=n(6),r=(n(0),n(138)),o={id:"hw7",title:"Homework 7"},s={unversionedId:"assignments/hw7",id:"assignments/hw7",isDocsHomePage:!1,title:"Homework 7",description:"* You are expected to work individually.",source:"@site/docs/assignments/hw7.md",slug:"/assignments/hw7",permalink:"/cs220-sp21/docs/assignments/hw7",version:"current"},l=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Trees",id:"trees",children:[]},{value:"Tries",id:"tries",children:[]},{value:"The CTrie class",id:"the-ctrie-class",children:[{value:"Implementation hints",id:"implementation-hints",children:[]},{value:"Testing CTrie",id:"testing-ctrie",children:[]},{value:"The <code>wordHunt</code> program",id:"the-wordhunt-program",children:[]}]},{value:"The TTrie class",id:"the-ttrie-class",children:[{value:"Testing TTrie",id:"testing-ttrie",children:[]}]},{value:"Files, Submitting",id:"files-submitting",children:[{value:"Provided files",id:"provided-files",children:[]},{value:"Gitlog",id:"gitlog",children:[]},{value:"README",id:"readme",children:[]}]},{value:"Compiling",id:"compiling",children:[]},{value:"Submission",id:"submission",children:[]}],c={rightToc:l};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"You are expected to work individually."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Due: Thursday ",Object(r.b)("strong",{parentName:"strong"},"April 15th")," at 11pm ET (Baltimore time).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"This assignment is worth 60 points."))))),Object(r.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(r.b)("div",{className:"admonition admonition-success alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Objectives")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"To practice with:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Classes and objects"),Object(r.b)("li",{parentName:"ul"},"Constructors, destructors, assignment operators, and the rule of 3"),Object(r.b)("li",{parentName:"ul"},"Templates"),Object(r.b)("li",{parentName:"ul"},"Operator overloading"),Object(r.b)("li",{parentName:"ul"},"Trees (dynamic linked structures)"),Object(r.b)("li",{parentName:"ul"},"Recursion")))),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"In this homework assignment, you will implement a data structure called\na ",Object(r.b)("em",{parentName:"p"},"Trie"),' (rhymes with "try"), which is a compact and convenient way to\nrepresent a set of sequences where many of the sequences will share\na common prefix.  One important application of tries is representing\na dictionary of words in a human language.'),Object(r.b)("p",null,"You will have two main tasks.  The first is to implement the\n",Object(r.b)("a",{parentName:"p",href:"#the-ctrie-class"},"CTrie")," class, which is a trie representing sequences\nof characters.  The second is to implement the ",Object(r.b)("a",{parentName:"p",href:"#the-ttrie-class"},"TTrie")," class,\nwhich is a generic (template) version of a trie, capable of representing\nsequences of any kind of data value."),Object(r.b)("h2",{id:"trees"},"Trees"),Object(r.b)("p",null,"Before we introduce tries, here is a brief introduction to trees.\nYou can read more about trees at the Wikipedia page:\n",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tree_(data_structure)"},"https://en.wikipedia.org/wiki/Tree_(data_structure)"),"."),Object(r.b)("p",null,"Trees are similar to linked lists, but rather than each node having\na pointer to a single successor, a tree node can contain pointers to\nsome number of \u2014 possibly more than one \u2014 ",Object(r.b)("em",{parentName:"p"},"child")," nodes.  All nodes\nin a tree are reachable from a ",Object(r.b)("em",{parentName:"p"},"root node"),", which is analogous to the\nhead node in a linked list.  (In fact, a linked list can be considered a\nspecial case of a tree, where each tree node has at most one child node.)\nAs with a linked list, it is ",Object(r.b)("em",{parentName:"p"},"usually")," the case that connections from one\nnode to another are in one direction only. ",Object(r.b)("em",{parentName:"p"},"Leaf nodes")," in a tree are\nthe nodes which have no children.  In a tree, there is a unique ",Object(r.b)("em",{parentName:"p"},"path"),"\n(sequence of nodes) from the root to each leaf.  A data structure in\nwhich a ",Object(r.b)("em",{parentName:"p"},"cycle")," (looping path) exists or where there are multiple paths\nfrom the root to any node is not a tree."),Object(r.b)("p",null,"Trees can be considered a recursive data structure because each node\nin a tree can be considered to be a root.  This idea is often stated\nexplicitly by considering the child nodes of a parent node as being\nthe roots of ",Object(r.b)("em",{parentName:"p"},"subtrees"),".  Because of the recursive nature of trees,\nit tends to be very natural to implement tree operations, such as\nsearches, using a recursive computation."),Object(r.b)("h2",{id:"tries"},"Tries"),Object(r.b)("p",null,"For a full description of tries, you can read the Wikipedia page:\n",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Trie"},"https://en.wikipedia.org/wiki/Trie"),"."),Object(r.b)("p",null,'A trie is a tree where each path from root to leaf represents a\nsequence.  The root represents the empty sequence.  Each "hop" from a\nparent node to a child represents one value in the sequence.  This\nmeans that a path from root to an arbitrary trie node represents a\nsequence of values.  Certain nodes in the trie are marked as\n"endpoints".  A path from the root to an end point node represents a\nsequence that is a member of the set of sequences that the trie\nembodies.'),Object(r.b)("p",null,'Here is an example of a trie where the "hops" (links) represent letters:'),Object(r.b)("p",null,Object(r.b)("img",{alt:"Example trie",src:n(183).default})),Object(r.b)("p",null,"A word is a sequence of letters, and the endpoint nodes in this\ntrie (shaded blue) represent words.  So, the trie represents the set\nof words ",Object(r.b)("strong",{parentName:"p"},"cap"),", ",Object(r.b)("strong",{parentName:"p"},"cat"),", ",Object(r.b)("strong",{parentName:"p"},"cater"),", ",Object(r.b)("strong",{parentName:"p"},"send"),", and ",Object(r.b)("strong",{parentName:"p"},"set"),"."),Object(r.b)("p",null,"Tries are a useful way to represent a set of words for two reasons:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"all sequences with a common prefix (",Object(r.b)("strong",{parentName:"li"},"cat"),", ",Object(r.b)("strong",{parentName:"li"},"cat"),"er, ",Object(r.b)("strong",{parentName:"li"},"cat"),"astrophe,\n",Object(r.b)("strong",{parentName:"li"},"cat"),"alog, etc.) share the nodes for that prefix; this makes\nthe trie space-efficient for storing sets of sequences with common\nprefixes (which is very common for words in human languages)"),Object(r.b)("li",{parentName:"ul"},"determining whether a specific word is in the set is easily\ndone by starting at the root and attempting to navigate a path\ncorresponding to the letters in the word being checked: if it\nis possible to follow the path to an endpoint node, the word\nis in the set")),Object(r.b)("h2",{id:"the-ctrie-class"},"The CTrie class"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie")," class represents a node in a trie where the paths\ncorrespond to strings (sequences of character values.)"),Object(r.b)("p",null,"You will need to implement the following member functions and\nfriend functions."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"CTrie()"),": Default constructor.  Creates a ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie")," object with no children."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"CTrie(const CTrie& rhs)"),": Copy constructor. Makes a deep copy of the\n",Object(r.b)("inlineCode",{parentName:"p"},"CTrie")," object passed as the parameter."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"~CTrie()"),": Destructor.  Deletes the ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie")," object, first recursively\ndeleting all of its children."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"CTrie& operator=(const CTrie &rhs)"),": Assignment operator. Recursively\ndeletes all child nodes, and then recursively copies all child nodes\nof ",Object(r.b)("inlineCode",{parentName:"p"},"rhs"),", so that the ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie")," object being assigned becomes an exact\nduplicate of ",Object(r.b)("inlineCode",{parentName:"p"},"rhs"),".  (I.e., after the assignment, it should contain\nexactly the same set of strings as ",Object(r.b)("inlineCode",{parentName:"p"},"rhs"),".)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"CTrie& operator+=(const std::string& word)"),": Addition/assignment operator to\ninsert the sequence of characters specified by ",Object(r.b)("inlineCode",{parentName:"p"},"word")," into the trie.\nIt should return a reference to the ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie")," object so that these\noperations can be chained."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bool operator^(const std::string &word) const"),": Sequence membership test.\nReturns true if ",Object(r.b)("inlineCode",{parentName:"p"},"word")," is a sequence of characters represented within\nthe trie."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bool operator==(const CTrie& rhs) const"),": Equality comparison operator.\nReturns true if the trie for which ",Object(r.b)("inlineCode",{parentName:"p"},"rhs"),' is the root, represents exactly the\nsame set of character sequences as the one on the left hand side of the\ncomparison (i.e., the "receiver object" or "implicit parameter" pointed to by ',Object(r.b)("inlineCode",{parentName:"p"},"this"),".)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"friend std::ostream& operator<<(std::ostream& os, const CTrie& ct)"),":\nOutput stream insertion operator.  Outputs each sequence of characters\ninserted into the trie to ",Object(r.b)("inlineCode",{parentName:"p"},"os"),", in lexicographical order, returning the updated ",Object(r.b)("inlineCode",{parentName:"p"},"ostream"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"unsigned numChildren() const"),": Returns a count of how many children\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie")," object (root) has."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bool hasChild() const"),": Returns true if the ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie")," object has\nat least one child, ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bool hasChild(char character) const"),": Returns ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if the ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie"),"\nobject has a link to a child node labeled with the specified ",Object(r.b)("inlineCode",{parentName:"p"},"char")," value."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"const CTrie* getChild(char character) const"),": Returns a pointer to\nthe child node reachable by the link labeled with the specified ",Object(r.b)("inlineCode",{parentName:"p"},"char"),"\nvalue, or ",Object(r.b)("inlineCode",{parentName:"p"},"nullptr")," if there is no such child node."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bool isEndpoint() const"),": Returns ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if the ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie")," node represents\nan endpoint, ",Object(r.b)("inlineCode",{parentName:"p"},"false")," if not.  The endpoint nodes are the ones representing\na sequence that is a member of the set the trie represents.  In a trie\nrepresented by ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie")," nodes, each endpoint node represents a ",Object(r.b)("inlineCode",{parentName:"p"},"string")," value\nthat is stored within the trie."),Object(r.b)("h3",{id:"implementation-hints"},"Implementation hints"),Object(r.b)("p",null,"A good way of storing the links to the child nodes is to use a ",Object(r.b)("inlineCode",{parentName:"p"},"map")," where\nthe keys are ",Object(r.b)("inlineCode",{parentName:"p"},"char")," values and the values are ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie *")," values.\nThis representation associates each child node memory address (value) with the\nspecific character associated with that link (key)."),Object(r.b)("p",null,"You will also want to have a way of marking which nodes are endpoints.\nA ",Object(r.b)("inlineCode",{parentName:"p"},"bool")," field is a good way to do this."),Object(r.b)("p",null,"You will almost certainly want to use recursion in your implementation\nof the ",Object(r.b)("inlineCode",{parentName:"p"},"+=")," operator, the ",Object(r.b)("inlineCode",{parentName:"p"},"^")," operator and the ",Object(r.b)("inlineCode",{parentName:"p"},"<<")," operator.  "),Object(r.b)("p",null,"The basic idea with the ",Object(r.b)("inlineCode",{parentName:"p"},"^")," operator is that it is being given a ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ncontaining a sequence of characters.  If the ",Object(r.b)("inlineCode",{parentName:"p"},"^")," operator can use each character\nin the string, in order, to find links from the root to an endpoint node,\nthen the word is a member of the trie. (Otherwise, it isn't a member.)"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"+=")," operator to insert a new word into the trie will work in a way\nthat is somewhat similar to the ",Object(r.b)("inlineCode",{parentName:"p"},"^")," operator, except that"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"It may need to add new nodes, and"),Object(r.b)("li",{parentName:"ol"},"It will need to mark the node representing the end of the word\nas an endpoint")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"<<")," operator to output the entire trie to an ",Object(r.b)("inlineCode",{parentName:"p"},"ostream")," should\ndo a recursive (depth-first) traversal similar to the following pseudo-code:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"// os is an ostream, n is a node, s is a string (sequence of characters)\noutput_trie(os, n, s) {\n  if (n is an endpoint) {\n    output s\n  }\n\n  for each child node of n, in order {\n    updated_s = updated string combining s and the character linking\n                to the child\n    output_trie(os, child, updated_s)\n  }\n}\n")),Object(r.b)("p",null,"The idea is that the ",Object(r.b)("inlineCode",{parentName:"p"},"s")," parameter keeps track of the prefix represented by\nthe current node (",Object(r.b)("inlineCode",{parentName:"p"},"n"),")."),Object(r.b)("h3",{id:"testing-ctrie"},"Testing CTrie"),Object(r.b)("p",null,"You can compile and run the ",Object(r.b)("inlineCode",{parentName:"p"},"cTrieTest")," program (source code in ",Object(r.b)("inlineCode",{parentName:"p"},"CTrieTest.cpp"),")\nto test your implementation of the ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie")," class.  Because this program tests\nmost of the member functions of ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie"),', you will probably want to start out by\nadding "stub" versions of each member function.  A stub member function\nimplementation might look something like this:'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"// addition/assignment operator\nCTrie& CTrie::operator+=(const std::string& word) {\n  // TODO: implement\n  assert(false);\n  return *this;\n}\n")),Object(r.b)("p",null,"Note that the ",Object(r.b)("inlineCode",{parentName:"p"},"cTrieTest")," program is somewhat minimal.  We encourage you to\nadd additional tests to make sure that all of your member functions work\ncorrectly."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Important"),": Be sure to run the ",Object(r.b)("inlineCode",{parentName:"p"},"cTrieTest")," program using ",Object(r.b)("inlineCode",{parentName:"p"},"valgrind"),".\nIt should run without any memory errors or memory leaks."),Object(r.b)("h3",{id:"the-wordhunt-program"},"The ",Object(r.b)("inlineCode",{parentName:"h3"},"wordHunt")," program"),Object(r.b)("p",null,"To see a real use case of CTrie and test its functionality, we have provided\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"wordHunt")," program. This is inspired by the Word Hunt game by GamePigeon\nfound in iOS devices. "),Object(r.b)("p",null,"You are given a 4x4 grid of letters, and the aim of the game is to form words\non the grid. Unlike a word search grid, you are able to form words by adjoining\nany adjacent letter, though you cannot use the same letter twice. Below is a\na screenshot of the game."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Word Hunt Game Screenshot",src:n(184).default})),Object(r.b)("p",null,"You can test your ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie")," implementation by building this ",Object(r.b)("inlineCode",{parentName:"p"},"wordHunt")," program.\nThe program uses the word bank ",Object(r.b)("inlineCode",{parentName:"p"},"words.txt")," which is prefilled with over 170k english words."),Object(r.b)("p",null,"This program should incorporate the ",Object(r.b)("inlineCode",{parentName:"p"},"wordHuntMain.o"),", ",Object(r.b)("inlineCode",{parentName:"p"},"WordSearch.o"),", and\n",Object(r.b)("inlineCode",{parentName:"p"},"CTrie.o")," object files.  I.e., the ",Object(r.b)("inlineCode",{parentName:"p"},"Makefile")," rule for this program could look something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"wordHunt: wordHuntMain.o CTrie.o WordHunt.o\n    $(CXX) -o wordHunt wordHuntMain.o CTrie.o WordHunt.o\n")),Object(r.b)("p",null,"You should add additional ",Object(r.b)("inlineCode",{parentName:"p"},"Makefile")," rules to compile each of these ",Object(r.b)("inlineCode",{parentName:"p"},".o")," files\nfrom the appropriate C++ source files."),Object(r.b)("p",null,"When you run this program, it will load a dictionary of English words\ninto a trie using your ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie")," implementation, and then solve word search\npuzzles by finding paths through the letters in each puzzle that correspond\nto dictionary words.  The output for the above board should look something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"( 0, 1 ) : ane and \n( 0, 2 ) : nae nah nan \n( 0, 3 ) : end enrol \n( 1, 0 ) : ort orts \n( 1, 1 ) : hand hao holt horn horned \n( 1, 2 ) : nod nor north not nos \n( 1, 3 ) : den don dona dot doth dots dos \n( 2, 0 ) : loan loaned lorn \n( 2, 1 ) : roe roan rhea \n( 2, 2 ) : rho rod rode rot rots \n( 2, 3 ) : one ode ors \n( 3, 0 ) : thro throne throned \n( 3, 2 ) : trona trone trod trode ton tonne tone toned tod \n( 3, 3 ) : son sone sod sot soth \nTotal Time: 0.95307 seconds\nTime taken to form Trie: 0.952531 seconds\nTime taken to search Board: 0.000538 seconds\n")),Object(r.b)("p",null,"The left side indicates the row and column location of the starting letter.\nAs you can see by the times, using a Trie is incredibly fast!"),Object(r.b)("h2",{id:"the-ttrie-class"},"The TTrie class"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie")," class can only represent a set of sequences of ",Object(r.b)("inlineCode",{parentName:"p"},"char")," values.\nHowever, tries are useful for other kinds of sequences as well.\nFor example, many academic libraries use the\n",Object(r.b)("a",{parentName:"p",href:"https://www.loc.gov/catdir/cpso/lcco/"},"Library of Congress Classification"),"\nsystem to classify books, so that similar books can be placed together\non the shelves.  For example,\n",Object(r.b)("a",{parentName:"p",href:"https://id.loc.gov/resources/instances/17655157.html"},"The C++ Programming Language, 4th Edition"),"\nhas the classification ",Object(r.b)("inlineCode",{parentName:"p"},"QA76.73.C153 S77 2013"),".  Each component of the classification\nhas a distinct meaning: for example ",Object(r.b)("inlineCode",{parentName:"p"},"Q")," is the top-level classification for Science,\nand ",Object(r.b)("inlineCode",{parentName:"p"},"A")," is the sub-category of ",Object(r.b)("inlineCode",{parentName:"p"},"Q")," for Mathematics.  If we break up the components\nof the classification according to their meaning, we might come up with\nsomething like ",Object(r.b)("inlineCode",{parentName:"p"},"Q-A-76-73-C-153-S-77-2013"),", with ",Object(r.b)("inlineCode",{parentName:"p"},"-")," separating each component.\nSince each value in the sequence can have multiple characters, a trie containing\nsequences of ",Object(r.b)("inlineCode",{parentName:"p"},"string")," values would be a useful way to represent a collection\nof classifications.  A ",Object(r.b)("em",{parentName:"p"},"generic")," version of a trie data structure would be useful\nfor not only this example (storing sequences of strings), but other kinds of\nsequences (such as sequences of integers.)"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"TTrie")," class is a generic (templated) version of a trie, which is identical\nto ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie")," except that"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The type of value in the sequences the trie contains is a type parameter\n(",Object(r.b)("inlineCode",{parentName:"li"},"DataType"),")"),Object(r.b)("li",{parentName:"ol"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"std::vector")," of ",Object(r.b)("inlineCode",{parentName:"li"},"DataType")," values is used to represent the member\nsequences (for the ",Object(r.b)("inlineCode",{parentName:"li"},"+=")," insertion operator and the ",Object(r.b)("inlineCode",{parentName:"li"},"^")," membership test operator)"),Object(r.b)("li",{parentName:"ol"},"When converting sequences to sequences of characters in the ",Object(r.b)("inlineCode",{parentName:"li"},"<<")," operator\nto output to an ",Object(r.b)("inlineCode",{parentName:"li"},"ostream"),", a hyphen (",Object(r.b)("inlineCode",{parentName:"li"},"-"),") should be used to separate the\nvalues in each sequence")),Object(r.b)("p",null,"You should complete the implementation of the ",Object(r.b)("inlineCode",{parentName:"p"},"TTrie")," class by implementing each\nmember function and friend function in the ",Object(r.b)("inlineCode",{parentName:"p"},"TTrie.inc")," source file."),Object(r.b)("h3",{id:"testing-ttrie"},"Testing TTrie"),Object(r.b)("p",null,"As with ",Object(r.b)("inlineCode",{parentName:"p"},"CTrie"),", ",Object(r.b)("inlineCode",{parentName:"p"},"TTrie")," has an associated test program, ",Object(r.b)("inlineCode",{parentName:"p"},"tTrieTest")," (source code\nin ",Object(r.b)("inlineCode",{parentName:"p"},"TTrieTest.cpp"),".)  Make sure that the tests in this test program pass.\nImplementing stub versions of member functions will help in allowing the program\nto compile successfully before you have every function fully implemented,\nand as with ",Object(r.b)("inlineCode",{parentName:"p"},"cTrieTest"),", adding your own tests is a good idea."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Important"),": As with ",Object(r.b)("inlineCode",{parentName:"p"},"cTrieTest"),", don't forget to run ",Object(r.b)("inlineCode",{parentName:"p"},"tTrieTest")," using\n",Object(r.b)("inlineCode",{parentName:"p"},"valgrind"),"."),Object(r.b)("h2",{id:"files-submitting"},"Files, Submitting"),Object(r.b)("h3",{id:"provided-files"},"Provided files"),Object(r.b)("p",null,"Begin by copying the starter source files, header files, and text (",Object(r.b)("inlineCode",{parentName:"p"},".txt"),") files\navailable in the public repo: ",Object(r.b)("inlineCode",{parentName:"p"},"cs220-sp21-public/homework/hw7/"),"."),Object(r.b)("p",null,"You will need to create a ",Object(r.b)("inlineCode",{parentName:"p"},"Makefile")," as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All C++ source files must be compiled with the\n",Object(r.b)("inlineCode",{parentName:"li"},"-Wall -Wextra -std=c++-11 -pedantic")," compiler options\n(and your code should not produce any warnings or errors when\ncompiled with these options)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"make cTrieTest")," should build a ",Object(r.b)("inlineCode",{parentName:"li"},"cTrieTest")," executable from ",Object(r.b)("inlineCode",{parentName:"li"},"CTrieTest.o")," and\n",Object(r.b)("inlineCode",{parentName:"li"},"CTrie.o")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"make tTrieTest")," should build a ",Object(r.b)("inlineCode",{parentName:"li"},"tTrieTest")," executable from ",Object(r.b)("inlineCode",{parentName:"li"},"TTrieTest.o"),"\n(",Object(r.b)("inlineCode",{parentName:"li"},"TTrie")," is a template class, so there will be no ",Object(r.b)("inlineCode",{parentName:"li"},"TTrie.o")," object file)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"make wordHunt")," should build a ",Object(r.b)("inlineCode",{parentName:"li"},"wordHunt")," executable from\n",Object(r.b)("inlineCode",{parentName:"li"},"wordHuntMain.o"),", ",Object(r.b)("inlineCode",{parentName:"li"},"CTrie.o"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"WordHunt.o")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"make all")," should build all three executables (",Object(r.b)("inlineCode",{parentName:"li"},"cTrieTest"),", ",Object(r.b)("inlineCode",{parentName:"li"},"tTrieTest"),", and\n",Object(r.b)("inlineCode",{parentName:"li"},"wordHunt"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"make clean")," should delete all ",Object(r.b)("inlineCode",{parentName:"li"},".o")," files and executable files")),Object(r.b)("h3",{id:"gitlog"},"Gitlog"),Object(r.b)("p",null,"You must include with your submission a copy of the output of ",Object(r.b)("inlineCode",{parentName:"p"},"git log"),"\nshowing at least five commits to the repository. Save the ",Object(r.b)("inlineCode",{parentName:"p"},"git log")," output\ninto a file called ",Object(r.b)("inlineCode",{parentName:"p"},"gitlog.txt")," (e.g. by doing ",Object(r.b)("inlineCode",{parentName:"p"},"git log > gitlog.txt)"),"."),Object(r.b)("h3",{id:"readme"},"README"),Object(r.b)("p",null,"Please submit a file called ",Object(r.b)("inlineCode",{parentName:"p"},"README")," (not ",Object(r.b)("inlineCode",{parentName:"p"},"README.txt")," or ",Object(r.b)("inlineCode",{parentName:"p"},"README.md"),",\netc -- just ",Object(r.b)("inlineCode",{parentName:"p"},"README"),") including information about what design choices you\nmade and anything the graders should know about your submission. In your\n",Object(r.b)("inlineCode",{parentName:"p"},"README")," you should:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Write your name and JHED ID at the top of the file."),Object(r.b)("li",{parentName:"ul"},"Briefly justify the structure of your program; why you defined the functions you did, etc."),Object(r.b)("li",{parentName:"ul"},"If applicable: Highlight anything you did that was particularly clever."),Object(r.b)("li",{parentName:"ul"},"If applicable: Tell the graders if you couldn\u2019t do everything. Where\ndid you stop? What did you get stuck on? What are the parts you already\nknow do not work according to the requirements?")),Object(r.b)("h2",{id:"compiling"},"Compiling"),Object(r.b)("p",null,"Your code should compile with no errors or warnings with the typical\ncommand: ",Object(r.b)("inlineCode",{parentName:"p"},"g++ <source> -Wall -Wextra -std=c++-11 -pedantic"),"."),Object(r.b)("h2",{id:"submission"},"Submission"),Object(r.b)("p",null,"Create a ",Object(r.b)("inlineCode",{parentName:"p"},".zip")," file named ",Object(r.b)("inlineCode",{parentName:"p"},"hw7.zip")," containing:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All ",Object(r.b)("inlineCode",{parentName:"li"},".cpp")," files"),Object(r.b)("li",{parentName:"ul"},"All ",Object(r.b)("inlineCode",{parentName:"li"},".h")," files"),Object(r.b)("li",{parentName:"ul"},"All ",Object(r.b)("inlineCode",{parentName:"li"},".inc")," files"),Object(r.b)("li",{parentName:"ul"},"README"),Object(r.b)("li",{parentName:"ul"},"Makefile"),Object(r.b)("li",{parentName:"ul"},"gitlog.txt")),Object(r.b)("p",null,"Copy ",Object(r.b)("inlineCode",{parentName:"p"},"hw7.zip")," file to your local machine (using ",Object(r.b)("inlineCode",{parentName:"p"},"scp")," or ",Object(r.b)("inlineCode",{parentName:"p"},"pscp"),"),\nand submit it as ",Object(r.b)("strong",{parentName:"p"},"Homework 7")," on Gradescope. When you submit, gradescope\nconducts a series of automatic tests. These do basic checks, e.g. to\ncheck that you submitted the right files. If you see error messages (in\nred), address them and resubmit. You may re-submit any number of times\nprior to the deadline; only your latest submission will be graded. Review\nthe course syllabus for late submission policies (grace period and late\ndays), and remember that ",Object(r.b)("strong",{parentName:"p"},"if your final submitted code does not compile,\nyou will likely earn a zero score for the assignment.")),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Remember that if your final submitted code does not compile, you will earn a zero score for the assignment."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Two notes regarding automatic checks for programming assignments:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Passing an automatic check is not itself worth points. (There might be\na nominal, low point value like 0.01 associated with a check, but that\nwon\u2019t count in the end.) The checks exist to help you and the graders\nfind obvious errors."),Object(r.b)("li",{parentName:"ul"},"The automatic checks cover some of the requirements set out in the\nassignment, but not all. It is up to you to test your own work and ensure\nyour programs satisfy all stated requirements. Passing all the automatic\nchecks does not mean you have earned all the points.")))))}b.isMDXComponent=!0}}]);