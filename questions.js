/* Questions for both games. Edit text here; keep the structure. */
window.GAMES = {
 "warmup": {
  "badge": "Unit 4 · Week 7 · Session 1 · Warm-up",
  "titleHTML": "<span class=\"c1\">S</span><span class=\"c2\">o</span><span class=\"c3\">r</span><span class=\"c4\">t</span> <span class=\"c1\">I</span><span class=\"c2\">t</span> <span class=\"c4\">O</span><span class=\"c5\">u</span><span class=\"c1\">t</span><span class=\"c2\">!</span>",
  "intro": "Real-life puzzles hide today’s mystery topic. Every correct answer flips two letters. Answer fast for bonus points and crack the topic for +200!",
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
   "3",
   "7",
   "9",
   "A",
   "K",
   "850",
   "5",
   "Z"
  ],
  "mystery": {
   "label": "Today’s mystery topic",
   "phrase": "INSERTION SORT",
   "order": [
    13,
    4,
    10,
    7,
    1,
    12,
    5,
    2,
    11,
    8,
    0,
    6,
    3
   ],
   "perCorrect": 2,
   "bonus": 200,
   "accept": [
    "insertion sort",
    "insertionsort",
    "insertion sorting",
    "insertion"
   ],
   "finalQ": "Put all the clues together. What is today’s topic?",
   "finalOptions": [
    "Bubble Sort",
    "Insertion Sort",
    "Binary Search",
    "Selection Sort"
   ],
   "finalAnswer": 1,
   "finalWhy": "Insertion sort keeps a sorted part and inserts each new item into its place by shifting bigger items to the right, exactly like the cards, the shelf and the leaderboard."
  },
  "questions": [
   {
    "type": "mc",
    "ctx": "Card games",
    "skill": "Analyze",
    "q": "Your hand is already in order. You draw a 5. What is the smartest way to add it?",
    "scene": "<span class=\"chip\" style=\"background:#FF4F8B\">3</span><span class=\"chip\" style=\"background:#3A86FF\">7</span><span class=\"chip\" style=\"background:#FF9F1C\">9</span><span class=\"arrow\">+</span><span class=\"chip new\">5</span>",
    "options": [
     "Throw the cards down and sort the whole hand again",
     "Slide 7 and 9 one place right, then drop the 5 after the 3",
     "Put the 5 at the end. Order doesn’t matter",
     "Swap the 5 with the 9"
    ],
    "answer": 1,
    "why": "The hand is already sorted, so you only make room: the bigger cards (7 and 9) slide one place right and the 5 slips into the gap."
   },
   {
    "type": "mc",
    "ctx": "School library",
    "skill": "Analyze",
    "q": "This shelf is sorted A–Z by author. A librarian adds a book by Laila. Which books have to move?",
    "scene": "<span class=\"chip\" style=\"background:#FF4F8B\">Ahmed</span><span class=\"chip\" style=\"background:#3A86FF\">Fatima</span><span class=\"chip\" style=\"background:#FF9F1C\">Noura</span><span class=\"chip\" style=\"background:#14C3A2\">Sami</span><span class=\"chip\" style=\"background:#8F4DFF\">Yousef</span><span class=\"arrow\">+</span><span class=\"chip new\">Laila</span>",
    "options": [
     "All five books",
     "Only Noura, Sami and Yousef",
     "Only Ahmed and Fatima",
     "None. Put Laila at the end"
    ],
    "answer": 1,
    "why": "Only the books after “L” slide one space right to open a gap. Ahmed and Fatima stay exactly where they are."
   },
   {
    "type": "mc",
    "ctx": "Class photo",
    "skill": "Predict",
    "q": "The photo line is sorted by height (cm). A latecomer is shorter than everyone. How many students must step one place back?",
    "scene": "<span class=\"chip\" style=\"background:#FF4F8B\">150</span><span class=\"chip\" style=\"background:#3A86FF\">155</span><span class=\"chip\" style=\"background:#FF9F1C\">162</span><span class=\"chip\" style=\"background:#14C3A2\">168</span><span class=\"chip\" style=\"background:#8F4DFF\">175</span><span class=\"arrow\">+</span><span class=\"chip new\">148</span>",
    "options": [
     "None",
     "Just one",
     "All five",
     "Only the tallest"
    ],
    "answer": 2,
    "why": "Everyone is taller, so every student shifts back one place and the latecomer goes to the very front. That is the most work this method can need."
   },
   {
    "type": "mc",
    "ctx": "Game leaderboard",
    "skill": "Apply",
    "q": "Your new score of 850 joins this leaderboard (highest first). Which place do you take?",
    "scene": "<span class=\"chip\" style=\"background:#FF4F8B\">990</span><span class=\"chip\" style=\"background:#3A86FF\">920</span><span class=\"chip\" style=\"background:#FF9F1C\">870</span><span class=\"chip\" style=\"background:#14C3A2\">800</span><span class=\"chip\" style=\"background:#8F4DFF\">760</span><span class=\"arrow\">+</span><span class=\"chip new\">850</span>",
    "options": [
     "2nd",
     "3rd",
     "4th",
     "Last"
    ],
    "answer": 2,
    "why": "850 is lower than 990, 920 and 870 but higher than 800. So 800 and 760 move down one place and 850 takes 4th. (This list is sorted biggest first: that’s called descending order.)"
   },
   {
    "type": "mc",
    "ctx": "Phone contacts",
    "skill": "Evaluate",
    "q": "Your 500 contacts are already in A–Z order. You save ONE new contact. Which plan is faster?",
    "options": [
     "Shuffle everything and sort all 500 from scratch",
     "Start at the end and slide names along until the new one fits",
     "Delete them all and type them again in order",
     "Both plans take exactly the same time"
    ],
    "answer": 1,
    "why": "When a list is already sorted (or nearly sorted), slotting one new item in is far faster than sorting everything again."
   },
   {
    "type": "mc",
    "ctx": "Kitchen shelf",
    "skill": "Infer",
    "q": "Spice jars stand in a tight A–Z row with no empty space. Why can’t you just drop “Cumin” between “Cinnamon” and “Garlic”?",
    "scene": "<span class=\"chip\" style=\"background:#FF4F8B\">Basil</span><span class=\"chip\" style=\"background:#3A86FF\">Cinnamon</span><span class=\"chip\" style=\"background:#FF9F1C\">Garlic</span><span class=\"chip\" style=\"background:#14C3A2\">Mint</span><span class=\"chip\" style=\"background:#8F4DFF\">Thyme</span><span class=\"arrow\">+</span><span class=\"chip new\">Cumin</span>",
    "options": [
     "Spice racks must always be sorted from scratch",
     "There’s no gap yet. Garlic, Mint and Thyme must slide over first",
     "Cumin belongs at the very end",
     "You can only add jars at the front"
    ],
    "answer": 1,
    "why": "In a full row, just like a list in a computer’s memory, a gap only appears when items shift. Shift first, then insert."
   },
   {
    "type": "mc",
    "ctx": "Spot the pattern",
    "skill": "Synthesize",
    "q": "What do the cards, the bookshelf, the photo line and the leaderboard all have in common?",
    "options": [
     "Split the list in half again and again",
     "Keep a sorted part and insert each new item into its place by shifting bigger ones aside",
     "Find the biggest item and swap it to the end",
     "Mix everything randomly until it happens to be sorted"
    ],
    "answer": 1,
    "why": "Every time, part of the list was already sorted and a new item was slotted in by shifting. That idea is today’s topic!"
   }
  ],
  "endHTML": "<div class=\"reveal\"><span class=\"pill\">Today's topic</span><div class=\"big\">Insertion Sort</div><p class=\"lede\">A shift-based algorithm: keep a sorted part, pick the next item (the key), shift bigger items right, and insert the key into the gap.</p></div>\n    <div class=\"recap\"><div><b>Shift-based logic</b>Move elements to make space</div><div><b>Two parts</b>Sorted vs unsorted sections</div><div><b>Python coding</b>Sort numbers and strings</div></div>",
  "name": "Sort It Out!"
 },
 "wrapup": {
  "badge": "Unit 4 · Week 7 · Session 1 · Wrap-up",
  "titleHTML": "<span class=\"c1\">I</span><span class=\"c2\">n</span><span class=\"c3\">s</span><span class=\"c4\">e</span><span class=\"c5\">r</span><span class=\"c1\">t</span><span class=\"c2\">i</span><span class=\"c3\">o</span><span class=\"c4\">n</span><br><span class=\"c3\">S</span><span class=\"c4\">h</span><span class=\"c5\">o</span><span class=\"c1\">w</span><span class=\"c2\">d</span><span class=\"c3\">o</span><span class=\"c4\">w</span><span class=\"c5\">n</span>",
  "intro": "Ten challenges on today’s lesson: trace it, debug it, bend it. Prove you and your partner really get insertion sort.",
  "rules": [
   "Play with your partner on one device",
   "Faster correct answers earn bonus points",
   "Tap tiles to build lists",
   "Tap a code line to answer",
   "Your score appears live on the smart board"
  ],
  "seconds": 60,
  "points": 100,
  "floaters": [
   "20",
   "43",
   "28",
   "15",
   "31",
   "4",
   "key",
   "j"
  ],
  "questions": [
   {
    "type": "order",
    "ctx": "Trace it",
    "skill": "Apply",
    "q": "Build the list after Pass 2 (key = 28).",
    "sub": "Start: [20, 43, 28, 15, 31, 4]. Tap the numbers in order to fill index [0] to [5].",
    "tiles": [
     20,
     43,
     28,
     15,
     31,
     4
    ],
    "answer": [
     20,
     28,
     43,
     15,
     31,
     4
    ],
    "why": "Pass 1: 43 > 20, so it stays. Pass 2: 28 < 43, so 43 shifts right and 28 drops in after 20. 15, 31 and 4 are still unsorted."
   },
   {
    "type": "mc",
    "ctx": "Count the shifts",
    "skill": "Analyze",
    "q": "Pass 3: the key is 15 and the sorted part is [20, 28, 43]. How many shifts happen?",
    "scene": "<span class=\"chip\" style=\"background:#FF4F8B\">20</span><span class=\"chip\" style=\"background:#3A86FF\">28</span><span class=\"chip\" style=\"background:#FF9F1C\">43</span><span class=\"arrow\">key →</span><span class=\"chip new\">15</span>",
    "options": [
     "1",
     "2",
     "3",
     "4"
    ],
    "answer": 2,
    "why": "15 is smaller than 43, 28 and 20, so all three shift one place right and 15 lands at index 0."
   },
   {
    "type": "line",
    "ctx": "Change the code",
    "skill": "Create",
    "q": "Tap the ONE line you would change to sort in descending order (biggest first).",
    "code": [
     "myList = [20, 43, 28, 15, 31, 4]",
     "N = len(myList)",
     "for i in range(1, N):",
     "    key = myList[i]",
     "    j = i - 1",
     "    while j >= 0 and key < myList[j]:",
     "        myList[j + 1] = myList[j]",
     "        j = j - 1",
     "    myList[j + 1] = key",
     "print(\"Sorted list:\", myList)"
    ],
    "answer": 5,
    "why": "Change key < myList[j] to key > myList[j]. Now smaller items shift right, so the biggest values end up at the front."
   },
   {
    "type": "mc",
    "ctx": "Read the code",
    "skill": "Infer",
    "q": "Why does the code copy myList[i] into key BEFORE the while loop starts?",
    "options": [
     "To make the program shorter",
     "Because the first shift overwrites myList[i], so its value would be lost",
     "Because Python needs a variable called key",
     "To count how many passes are left"
    ],
    "answer": 1,
    "why": "The first shift copies myList[j] into position j + 1, which is exactly where the key was sitting. Saving it first keeps it safe."
   },
   {
    "type": "mc",
    "ctx": "Debug it",
    "skill": "Evaluate",
    "q": "A student writes myList[j] = key instead of myList[j + 1] = key after the while loop. What happens?",
    "options": [
     "Nothing. Both lines do the same job",
     "The key lands one place too far left and overwrites a value",
     "The list is sorted in descending order",
     "Python stops with a syntax error"
    ],
    "answer": 1,
    "why": "When the loop stops, j points at an item that is NOT bigger than the key. The gap is at j + 1. Writing to j overwrites a real value, so a number disappears."
   },
   {
    "type": "mc",
    "ctx": "Read the code",
    "skill": "Analyze",
    "q": "What is the job of j >= 0 in the while condition?",
    "options": [
     "It makes the loop run faster",
     "It stops j going past the front of the list when the key is the smallest",
     "It checks that the list is not empty",
     "It lets the list hold negative numbers"
    ],
    "answer": 1,
    "why": "When the key is the smallest (like 4), j keeps moving left. Without j >= 0, Python would compare with myList[-1], which is the LAST item, and the sort would go wrong."
   },
   {
    "type": "order",
    "ctx": "Strings too",
    "skill": "Apply",
    "q": "Letters work too! Build the list after Pass 2.",
    "sub": "Start: ['x', 'f', 'g', 'a', 'b']. Tap the letters in order.",
    "tiles": [
     "x",
     "f",
     "g",
     "a",
     "b"
    ],
    "answer": [
     "f",
     "g",
     "x",
     "a",
     "b"
    ],
    "why": "Pass 1: 'f' < 'x', so 'x' shifts and 'f' goes first. Pass 2: 'g' < 'x' but 'g' > 'f', so only 'x' shifts. Letters compare alphabetically, just like numbers."
   },
   {
    "type": "mc",
    "ctx": "Descending states",
    "skill": "Analyze",
    "q": "Sorting ['Ohio', 'Maine', 'Alabama', 'Idaho'] Z–A with key > myList[j]. In the LAST pass the key is 'Idaho'. Which states shift right?",
    "options": [
     "Ohio, Maine and Alabama",
     "Only Alabama",
     "Maine and Alabama",
     "None of them"
    ],
    "answer": 1,
    "why": "Before the last pass the list is still ['Ohio', 'Maine', 'Alabama', 'Idaho']. 'Idaho' > 'Alabama', so Alabama shifts. 'Idaho' > 'Maine'? No, I comes before M, so the loop stops. Result: ['Ohio', 'Maine', 'Idaho', 'Alabama']."
   },
   {
    "type": "mc",
    "ctx": "Best case",
    "skill": "Evaluate",
    "q": "Which starting list makes insertion sort do the FEWEST shifts?",
    "options": [
     "[9, 7, 5, 3, 1]",
     "[1, 3, 5, 7, 9]",
     "[5, 1, 9, 3, 7]",
     "They all need the same number"
    ],
    "answer": 1,
    "why": "An already-sorted list needs zero shifts: every key is already bigger than the item before it. A reversed list is the worst, because every key shifts all the way to the front."
   },
   {
    "type": "mc",
    "ctx": "Real world",
    "skill": "Evaluate",
    "q": "Which job is insertion sort the BEST fit for?",
    "options": [
     "Adding today’s new score to an already-sorted class leaderboard",
     "Sorting 10 million random online orders",
     "Finding one name in a phone book",
     "Shuffling a playlist"
    ],
    "answer": 0,
    "why": "Insertion sort shines on small or nearly-sorted lists: one new item just slides into place. Huge random lists need faster algorithms, and finding a name is searching, not sorting."
   }
  ],
  "endHTML": "<div class=\"exit\">\n      <span class=\"pill\">Exit ticket</span>\n      <h2 style=\"font-size:clamp(24px,3vw,32px)\">Define sorting in your own words.</h2>\n      <textarea id=\"exitTicket\" placeholder=\"Sorting is...\"></textarea>\n      <button class=\"btn small go\" id=\"showModel\" type=\"button\" style=\"justify-self:start\">Show a model answer</button>\n      <div class=\"model\" id=\"model\" hidden><b>Model answer:</b> Sorting means arranging items in a meaningful order, such as smallest to largest or A to Z, so they are easier to find and use. Insertion sort does it by building a sorted part one item at a time: it shifts larger items right and inserts each key into the gap.</div>\n    </div>\n    <div class=\"recap\"><div><b>Key</b>The item being placed in this pass</div><div><b>Shift</b>Bigger items move one place right</div><div><b>Insert</b>The key drops into the gap at j + 1</div></div>",
  "name": "Insertion Showdown"
 }
};
