/* Questions for both games. Edit text here; keep the structure. */
window.GAMES = {
 "warmup": {
  "badge": "Grade 10 · Unit 2 · Session 1 · Warm-up",
  "titleHTML": "<span class=\"c1\">S</span><span class=\"c2\">p</span><span class=\"c3\">o</span><span class=\"c4\">t</span> <span class=\"c1\">t</span><span class=\"c2\">h</span><span class=\"c3\">e</span> <span class=\"c5\">B</span><span class=\"c1\">l</span><span class=\"c2\">u</span><span class=\"c3\">e</span><span class=\"c4\">p</span><span class=\"c5\">r</span><span class=\"c1\">i</span><span class=\"c2\">n</span><span class=\"c3\">t</span><span class=\"c4\">!</span>",
  "intro": "Everyday puzzles hide today’s mystery topic. Every correct answer flips two letters. Answer fast for bonus points and crack the topic for +200!",
  "rules": [
   "Play with your partner on one device",
   "Faster correct answers earn bonus points",
   "Each correct answer flips 2 letters",
   "Guess the topic early: +200",
   "Your score appears live on the smart board"
  ],
  "seconds": 40,
  "points": 100,
  "floaters": [
   "house1",
   "house2",
   "{ }",
   "self",
   "( )",
   ".name",
   "Ali",
   "Sara"
  ],
  "mystery": {
   "label": "Today’s mystery topic",
   "phrase": "CLASSES AND OBJECTS",
   "order": [
    13,
    4,
    9,
    16,
    1,
    6,
    14,
    2,
    18,
    8,
    5,
    12,
    0,
    17,
    3,
    10,
    15
   ],
   "perCorrect": 2,
   "bonus": 200,
   "accept": [
    "classes and objects",
    "classes & objects",
    "class and object",
    "classes objects",
    "objects and classes",
    "oop",
    "object oriented programming"
   ],
   "finalQ": "Put all the clues together. What is today’s topic?",
   "finalOptions": [
    "Loops and Lists",
    "Classes and Objects",
    "Sorting Algorithms",
    "If Statements"
   ],
   "finalAnswer": 1,
   "finalWhy": "A class is a blueprint, like the house plan, the cookie cutter or the ID card design. Objects are the real things made from it, each with its own data. This is the heart of Object-Oriented Programming (OOP)."
  },
  "questions": [
   {
    "type": "mc",
    "ctx": "Building houses",
    "skill": "Analyze",
    "q": "An architect draws ONE house plan. A builder uses it to build 3 houses: a yellow one for Ali, a blue one for Sara and a green one for Omar. What is true?",
    "scene": "<span class=\"chip\" style=\"background:#FF4F8B\">1 plan</span><span class=\"arrow\">→</span><span class=\"chip\" style=\"background:#FF4F8B\">house 1 · yellow</span><span class=\"chip\" style=\"background:#3A86FF\">house 2 · blue</span><span class=\"chip\" style=\"background:#FF9F1C\">house 3 · green</span>",
    "options": [
     "All 3 houses are identical in every way",
     "They share the same structure but each has its own colour and owner",
     "The 3 houses have nothing in common",
     "The plan must be redrawn for every house"
    ],
    "answer": 1,
    "why": "One plan gives every house the same parts (walls, roof, door, windows). Each house still keeps its own details, like colour and owner."
   },
   {
    "type": "mc",
    "ctx": "Kitchen",
    "skill": "Infer",
    "q": "One star-shaped cookie cutter makes 20 cookies. Some get chocolate, some get sprinkles. Which statement is TRUE?",
    "options": [
     "The cutter itself is a cookie you can eat",
     "Each cookie has the same shape but can have its own topping",
     "Changing one cookie’s topping changes all 20 cookies",
     "You need a new cutter for every cookie"
    ],
    "answer": 1,
    "why": "The cutter is the pattern, not a cookie. Every cookie comes from the same pattern, but each one is separate and can be decorated differently."
   },
   {
    "type": "mc",
    "ctx": "Grouping things",
    "skill": "Classify",
    "q": "You find a tissue box, a Toblerone box, a soda can, a brick, a camping tent and a battery. Which grouping is the MOST useful?",
    "scene": "<span class=\"chip\" style=\"background:#FF4F8B\">tissue box</span><span class=\"chip\" style=\"background:#3A86FF\">Toblerone box</span><span class=\"chip\" style=\"background:#FF9F1C\">soda can</span><span class=\"chip\" style=\"background:#14C3A2\">brick</span><span class=\"chip\" style=\"background:#8F4DFF\">tent</span><span class=\"chip\" style=\"background:#FFC233\">battery</span>",
    "options": [
     "By colour",
     "By shape: rectangular prisms, triangular prisms and cylinders",
     "By how heavy they are",
     "In alphabetical order"
    ],
    "answer": 1,
    "why": "Grouping by shape puts things with the same characteristics together: tissue box and brick, Toblerone and tent, can and battery. Each group shares a description."
   },
   {
    "type": "mc",
    "ctx": "School ID cards",
    "skill": "Compare",
    "q": "Every student gets an ID card printed from the same design. What changes from one card to the next?",
    "options": [
     "The layout and the school logo",
     "The name, grade and photo",
     "Nothing at all",
     "The size and shape of the card"
    ],
    "answer": 1,
    "why": "The design (layout, logo, boxes) is shared. Only the data inside the boxes changes: each card has its own name, grade and photo."
   },
   {
    "type": "mc",
    "ctx": "Cars",
    "skill": "Analyze",
    "q": "Think about a car. Which list shows what a car HAS, not what it DOES?",
    "options": [
     "drive, brake, honk",
     "colour, brand, speed",
     "colour, drive, honk",
     "brake, brand, battery"
    ],
    "answer": 1,
    "why": "Colour, brand and speed describe the car: things it has. Drive, brake and honk are actions: things it does. Programmers keep these two kinds of information apart."
   },
   {
    "type": "mc",
    "ctx": "Video games",
    "skill": "Evaluate",
    "q": "A game needs 50 monsters. Each one has health and speed, and each one can attack. What is the SMARTEST way to program them?",
    "options": [
     "Write separate code for each monster, 50 times",
     "Describe a monster ONCE, then create 50 monsters from that description",
     "Make one monster and copy its picture 50 times",
     "Give every monster exactly the same health forever"
    ],
    "answer": 1,
    "why": "Describing it once saves time and avoids mistakes. Every monster gets the same abilities but keeps its own health and speed. Fix the description once and all 50 get the fix."
   },
   {
    "type": "mc",
    "ctx": "Forms",
    "skill": "Infer",
    "q": "A blank registration form is printed and filled in by 30 students. How is the BLANK form related to each filled-in copy?",
    "options": [
     "They are exactly the same thing",
     "The blank form is the template; each filled-in copy is one example made from it",
     "The filled-in copies create the blank form",
     "There is no connection between them"
    ],
    "answer": 1,
    "why": "Same boxes, different answers. The blank form sets the structure; every filled-in copy has its own data."
   },
   {
    "type": "mc",
    "ctx": "Spot the pattern",
    "skill": "Synthesize",
    "q": "What links the house plan, the cookie cutter, the ID card design and the blank form?",
    "options": [
     "They are all types of computer",
     "Each is a blueprint used to make many separate things with the same structure",
     "Each can only be used once",
     "They all store numbers"
    ],
    "answer": 1,
    "why": "Every one is a blueprint, and the things made from it are separate copies with their own details. In programming, the blueprint is a CLASS and each copy is an OBJECT."
   }
  ],
  "name": "Spot the Blueprint!",
  "topic": "Classes & Objects",
  "recap": [
   [
    "Explain OOP",
    "Organize code into classes and objects"
   ],
   [
    "Identify the parts",
    "Class, object, attributes, methods"
   ],
   [
    "Create classes",
    "Write a Python class and make objects"
   ]
  ]
 },
 "wrapup": {
  "badge": "Grade 10 · Unit 2 · Session 1 · Wrap-up",
  "titleHTML": "<span class=\"c1\">C</span><span class=\"c2\">l</span><span class=\"c3\">a</span><span class=\"c4\">s</span><span class=\"c5\">s</span> <span class=\"c2\">C</span><span class=\"c3\">l</span><span class=\"c4\">a</span><span class=\"c5\">s</span><span class=\"c1\">h</span>",
  "intro": "Ten challenges on today’s lesson: classes, objects, attributes, methods and __init__(). Prove you and your partner can read and build Python classes.",
  "rules": [
   "Play with your partner on one device",
   "Faster correct answers earn bonus points",
   "Tap tiles to put steps in order",
   "Tap a code line to answer",
   "Your score appears live on the smart board"
  ],
  "seconds": 60,
  "points": 100,
  "floaters": [
   "class",
   "self",
   "__init__",
   "obj",
   ".name",
   "( )",
   "r1",
   "s1"
  ],
  "questions": [
   {
    "type": "mc",
    "ctx": "Shapes activity",
    "skill": "Classify",
    "q": "In the shapes activity, <code>Cylinder</code> is a ____ and the soda can is an ____.",
    "options": [
     "class · object",
     "object · class",
     "attribute · method",
     "method · attribute"
    ],
    "answer": 0,
    "why": "Cylinder is the category (the class). The soda can is one specific thing in that category (an object, or instance)."
   },
   {
    "type": "mc",
    "ctx": "Phone class",
    "skill": "Analyze",
    "q": "For a <code>Phone</code> class, which split into attributes and methods is correct?",
    "options": [
     "Attributes: <code>call()</code>, <code>charge()</code> · Methods: brand, battery",
     "Attributes: brand, battery, storage · Methods: <code>call()</code>, <code>take_photo()</code>",
     "Attributes: Ali’s phone · Methods: Sara’s phone",
     "Attributes: Phone · Methods: storage"
    ],
    "answer": 1,
    "why": "Attributes are data the object stores (brand, battery, storage). Methods are actions it can do (call, take a photo, charge). Ali’s and Sara’s phones are objects."
   },
   {
    "type": "line",
    "ctx": "Read the code",
    "skill": "Analyze",
    "q": "Tap the line that runs AUTOMATICALLY every time you create a new prism object.",
    "code": [
     "# create RectangularPrism class",
     "class RectangularPrism:",
     "    def __init__(self, length, width, height):",
     "        self.length = length",
     "        self.width = width",
     "        self.height = height"
    ],
    "answer": 2,
    "why": "<code>__init__()</code> is the constructor. Python calls it automatically whenever an object is created, so each prism gets its own length, width and height."
   },
   {
    "type": "mc",
    "ctx": "Create an object",
    "skill": "Apply",
    "q": "Which line creates a 10 × 5 × 20 prism called <code>p1</code>?",
    "options": [
     "<code>p1 = RectangularPrism(10, 5, 20)</code>",
     "<code>RectangularPrism = p1(10, 5, 20)</code>",
     "<code>p1 = __init__(10, 5, 20)</code>",
     "<code>class p1(10, 5, 20):</code>"
    ],
    "answer": 0,
    "why": "Write the class name like a function call with the values, and store the result in a variable. You never call <code>__init__</code> directly; Python does it for you."
   },
   {
    "type": "order",
    "ctx": "Behind the scenes",
    "skill": "Sequence",
    "wide": true,
    "q": "Put the steps in order: what happens when Python runs <code>r1 = RectangularPrism(10, 5, 15)</code>?",
    "sub": "Tap the steps in the order they happen.",
    "tiles": [
     "Store it in r1",
     "Find the class",
     "Run __init__()",
     "Make a new object"
    ],
    "answer": [
     "Find the class",
     "Make a new object",
     "Run __init__()",
     "Store it in r1"
    ],
    "why": "Python finds the RectangularPrism blueprint, makes an empty object, runs <code>__init__()</code> to set length 10, width 5 and height 15, then stores the finished object in r1."
   },
   {
    "type": "mc",
    "ctx": "Debug it",
    "skill": "Evaluate",
    "q": "This code crashes when you create a student. What is missing?",
    "scene": "<pre class=\"mini\">class Student:\n    def __init__(name):\n        self.name = name</pre>",
    "options": [
     "<code>self</code> as the first parameter of <code>__init__</code>",
     "A <code>return</code> statement",
     "A <code>print()</code> line",
     "A <code>for</code> loop"
    ],
    "answer": 0,
    "why": "Every method needs <code>self</code> first. Without it, <code>self</code> is not defined inside <code>__init__</code>, so <code>self.name = name</code> fails."
   },
   {
    "type": "mc",
    "ctx": "Predict the output",
    "skill": "Predict",
    "q": "What does this program print?",
    "scene": "<pre class=\"mini\">student1 = Student(\"Ali\", 85)\nstudent2 = Student(\"Sara\", 92)\nprint(student2.grade)</pre>",
    "options": [
     "85",
     "92",
     "Sara",
     "An error"
    ],
    "answer": 1,
    "why": "Each object keeps its own data. student2 was created with grade 92, so <code>student2.grade</code> is 92. Same class, different data."
   },
   {
    "type": "mc",
    "ctx": "Constructor parts",
    "skill": "Analyze",
    "q": "Which part of <code>def __init__(self, var_1, ..., var_n):</code> is OPTIONAL?",
    "options": [
     "<code>def</code>",
     "<code>self</code>",
     "the extra attributes <code>var_1 … var_n</code>",
     "the colon <code>:</code>"
    ],
    "answer": 2,
    "why": "<code>def</code>, <code>__init__</code>, <code>self</code>, the colon and the indented block are always needed. The extra attributes depend on what your class must store."
   },
   {
    "type": "line",
    "ctx": "Find the bug",
    "skill": "Evaluate",
    "q": "This class has ONE bug. Tap the line that will cause an error.",
    "code": [
     "class Student:",
     "    def __init__(self, name, grade):",
     "        self.name = name",
     "        self.grade = grade",
     "",
     "    def display_info(self):",
     "        print(\"Student Name:\", self.name)",
     "        print(\"Grade:\", grade)"
    ],
    "answer": 7,
    "why": "Inside a method, the object’s data is reached through <code>self</code>. It must be <code>self.grade</code>; plain <code>grade</code> is not defined there, so Python raises a NameError."
   },
   {
    "type": "mc",
    "ctx": "Real world",
    "skill": "Evaluate",
    "q": "A school app stores 900 students. Why is a <code>Student</code> class better than 900 separate sets of variables?",
    "options": [
     "It lets the program run without Python",
     "You write the structure once, then create as many student objects as you need: organized and reusable",
     "A class can only store one student",
     "Variables cannot store names"
    ],
    "answer": 1,
    "why": "One class describes every student; each object holds one student’s data. The code stays organized, and a fix in the class helps all 900 students at once."
   }
  ],
  "name": "Class Clash",
  "topic": "Classes & Objects",
  "exitQ": "What is the difference between a class and an object? Give one real-life example.",
  "exitPlaceholder": "A class is... An object is... For example...",
  "exitModel": "A class is a blueprint that describes what a group of things has (attributes) and does (methods). An object is one real thing made from that class, with its own data. For example, the house plan is the class, and Ali’s yellow house and Sara’s blue house are objects."
 }
};
