window.FSAI = {
  "total": 127,
  "modules": [
    {
      "id": "B",
      "badge": "B",
      "title": "Basics — Start From Zero",
      "desc": "True-beginner foundations: HTML, CSS and JavaScript from a blank file, Python from zero, Git and VS Code. No prior knowledge assumed — if you have never written a line of code, start here.",
      "meta": [
        "Weeks 1–2 • 27 Nov – 10 Dec",
        "Skills: HTML • CSS • JS • Python • Git • VS Code"
      ],
      "track": "basics",
      "count": 10
    },
    {
      "id": "D",
      "badge": "D",
      "title": "DSA — Data Structures & Algorithms",
      "desc": "The interview filter. Patterns, not memorization: complexity, arrays, strings, recursion, linked lists, stacks, trees, heaps, graphs and DP — on Striver’s A2Z sheet with LeetCode practice, a mistake log, spaced re-solves and a Sunday contest. Runs daily alongside the full-stack track.",
      "meta": [
        "Weeks 1–12 • 27 Nov – 18 Feb",
        "Spine: Striver A2Z • Practice: LeetCode"
      ],
      "track": "dsa",
      "count": 17
    },
    {
      "id": "M0",
      "badge": "M0",
      "title": "Foundations — How the Web Actually Works",
      "desc": "HTTP, the browser rendering path, semantic HTML, the CSS box model, and JavaScript as behaviour. The base everything else stands on.",
      "meta": [
        "Weeks 3–4 • 11 – 24 Dec",
        "Files: index.html • style.css • app.js"
      ],
      "track": "frontend",
      "count": 11
    },
    {
      "id": "M1",
      "badge": "M1",
      "title": "JavaScript Deep + Modern Frontend",
      "desc": "From JS that works to JS you can reason about — ES6+, async, state — then React, because that is what full-stack roles actually ask for.",
      "meta": [
        "Weeks 5–6 • 25 Dec – 7 Jan",
        "Files: learn.js • sync.js • mastery.js"
      ],
      "track": "frontend",
      "count": 10
    },
    {
      "id": "M2",
      "badge": "M2",
      "title": "Python Fluency — The Language Skillzify Teaches & Uses",
      "desc": "Python is both the subject and a tool: it generates Skillzify's flowcharts and it's the language of AI. Learn it to advanced level, in PyCharm.",
      "meta": [
        "Weeks 7–8 • 8 – 21 Jan",
        "Files: flowchart-gen.py • flowchart-algo.py"
      ],
      "track": "backend",
      "count": 11
    },
    {
      "id": "M3",
      "badge": "M3",
      "title": "Backend — Node.js & Express, Properly",
      "desc": "Skillzify's entire backend is one 41KB server.js. By the end of this module you should be able to write it — and explain every protection inside it.",
      "meta": [
        "Weeks 9–11 • 22 Jan – 11 Feb",
        "Files: server.js • package.json • .env"
      ],
      "track": "backend",
      "count": 10
    },
    {
      "id": "M4",
      "badge": "M4",
      "title": "Data & Auth — Firebase, plus SQL",
      "desc": "Firestore's merge rules are the cleverest part of Skillzify. Learn them deeply — then learn relational data, because most companies do not run on Firestore.",
      "meta": [
        "Weeks 12–13 • 12 – 25 Feb",
        "Files: auth.js • sync.js • firestore.rules"
      ],
      "track": "database",
      "count": 9
    },
    {
      "id": "M5",
      "badge": "M5",
      "title": "AI Engineering — From Gemini Calls to RAG Systems ★",
      "desc": "The longest module, on purpose. Skillzify already does real AI engineering — failover, rotation, caps. This module teaches the concepts underneath, plus the RAG stack sold elsewhere as 'AI full stack'.",
      "meta": [
        "Weeks 14–17 • 26 Feb – 25 Mar",
        "Files: ai.js • server.js AI routes • 15 modes"
      ],
      "track": "ai",
      "count": 11
    },
    {
      "id": "M6",
      "badge": "M6",
      "title": "Product Tools — Editor, In-Browser Runtime & Diagrams",
      "desc": "The 'how does the compiler run Python with no server?' module. Short, fascinating, and what makes Skillzify different from a tutorial site.",
      "meta": [
        "Week 18 • 26 Mar – 1 Apr",
        "Files: compiler.html • Pyodide • CodeMirror • Mermaid"
      ],
      "track": "frontend",
      "count": 9
    },
    {
      "id": "M7",
      "badge": "M7",
      "title": "Android — Kotlin & Jetpack Compose",
      "desc": "Same product, second platform, same Firebase backend. Learn it screen by screen in Android Studio, saving Chaquopy for last.",
      "meta": [
        "Weeks 19–21 • 2 – 22 Apr",
        "Files: android/ • Gradle 8.10.2 • JDK 17"
      ],
      "track": "android",
      "count": 10
    },
    {
      "id": "M8",
      "badge": "M8",
      "title": "DevOps, Cloud & Shipping Like a Professional",
      "desc": "You already use GitHub Actions, Render and GA4 — now understand them line by line, and add the AWS/Docker literacy internships expect.",
      "meta": [
        "Weeks 22–25 • 23 Apr – 20 May",
        "Files: build-apk.yml • render.yaml • SECURITY.md"
      ],
      "track": "devops",
      "count": 9
    },
    {
      "id": "M9",
      "badge": "9",
      "title": "M9 — Industry Add-Ons",
      "desc": "The industry layer on top of the Skillzify stack: React hooks, TypeScript, SQL deep, Vitest/Jest testing, system design for interviews, AWS basics, Docker Compose, Next.js, WebSockets and web performance. The tools job descriptions ask for, sequenced after the core stack.",
      "meta": [
        "Weeks 26–28 • 21 May – 9 Jun",
        "Skills: React • TypeScript • SQL • AWS • Next.js • Testing"
      ],
      "track": "industry",
      "count": 10
    }
  ],
  "lessons": [
    {
      "id": "B.1",
      "module": "B",
      "moduleTitle": "Basics — Start From Zero",
      "title": "HTML Base — Tags, Headings, Links, Images, Lists",
      "sub": "The skeleton of every web page",
      "mins": 25,
      "track": "frontend",
      "url": "lessons/b-1.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=7umKNqO0-mc",
        "title": "HTML Explained: How Web Pages Are Built",
        "channel": "Create WP Site"
      },
      "subtopics": [
        "1. HTML is structure, not looks",
        "2. The essential tags",
        "3. Nesting and attributes",
        "4. Why this matters for Skillzify"
      ],
      "checks": [
        [
          "Why should a page have exactly one h1?",
          "The h1 is the page title. Screen readers and search engines use it to understand the page topic; multiple h1s blur that meaning."
        ],
        [
          "What is alt text on an image actually for?",
          "It describes the image for screen readers and shows when the image fails to load. It is accessibility, not decoration."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "B.2",
      "module": "B",
      "moduleTitle": "Basics — Start From Zero",
      "title": "HTML Base 2 — Tables, Forms, Inputs, Semantic Layout",
      "sub": "Data on a page and data from the user",
      "mins": 30,
      "track": "frontend",
      "url": "lessons/b-2.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=mJgBOIoGihA",
        "title": "HTML Full Course for Beginners",
        "channel": "Dave Gray"
      },
      "subtopics": [
        "1. Tables for tabular data",
        "2. Forms collect user input",
        "3. Semantic layout",
        "4. Built-in validation"
      ],
      "checks": [
        [
          "Why link a label to its input with for and id?",
          "Clicking the label focuses the field, and screen readers announce the label when the field is focused — without it, the field is unnamed to assistive tech."
        ],
        [
          "Why is browser form validation not enough on its own?",
          "Anyone can bypass the browser with curl or DevTools, so the server must validate every field again. Browser validation is only a convenience."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "B.3",
      "module": "B",
      "moduleTitle": "Basics — Start From Zero",
      "title": "CSS Base — Selectors, Colours, Fonts, Box Model",
      "sub": "Making the skeleton look like a product",
      "mins": 30,
      "track": "frontend",
      "url": "lessons/b-3.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
        "title": "CSS Tutorial - Zero to Hero (Complete Course)",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Selectors target elements",
        "2. Colours and fonts",
        "3. The box model",
        "4. Specificity and the cascade"
      ],
      "checks": [
        [
          "A box is width 200px with 20px padding on each side. How wide is it under content-box, and under border-box?",
          "Content-box: 240px, because padding adds outside the width. Border-box: 200px, because padding is included inside the declared width."
        ],
        [
          "Why prefer classes over ids for styling?",
          "Classes are reusable and combinable, so one rule can style many elements; an id styles exactly one element and has very high specificity."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "B.4",
      "module": "B",
      "moduleTitle": "Basics — Start From Zero",
      "title": "CSS Base 2 — Flexbox, Grid, Positioning, Responsive Basics",
      "sub": "Layout that adapts to any screen",
      "mins": 35,
      "track": "frontend",
      "url": "lessons/b-4.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=zkpqLDRUWac",
        "title": "Build a Responsive Portfolio Website | CSS Flexbox, Grid & Responsive Design (Part 3)",
        "channel": "Paul Adamu"
      },
      "subtopics": [
        "1. Flexbox: layout along one axis",
        "2. Grid: layout in two dimensions",
        "3. Positioning",
        "4. Responsive basics"
      ],
      "checks": [
        [
          "When do you reach for Grid instead of Flexbox?",
          "When the layout needs rows and columns at once, like a card grid. Flexbox is for a single row or column."
        ],
        [
          "What does position: sticky do that fixed does not?",
          "Sticky scrolls with the page until it reaches its threshold, then sticks; fixed is pinned to the viewport from the start and never scrolls."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "B.5",
      "module": "B",
      "moduleTitle": "Basics — Start From Zero",
      "title": "JavaScript Base — Variables, Data Types, Operators, Console",
      "sub": "Your first real programming language",
      "mins": 25,
      "track": "frontend",
      "url": "lessons/b-5.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=SajRjc9KKUE",
        "title": "JavaScript Tutorial for Beginners: Quick Start",
        "channel": "Dave Gray"
      },
      "subtopics": [
        "1. Variables: const first, let when it changes",
        "2. Data types",
        "3. Operators",
        "4. The console is your lab"
      ],
      "checks": [
        [
          "When do you use const, and when let?",
          "const by default, for anything never reassigned; let only when the value genuinely changes, like a counter or a running total."
        ],
        [
          "Why is === safer than ==?",
          "=== compares value and type with no coercion; == converts types first, so \"5\" == 5 is true and hides bugs."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "B.6",
      "module": "B",
      "moduleTitle": "Basics — Start From Zero",
      "title": "JavaScript Base 2 — Conditions, Loops, Functions, Arrays, Objects",
      "sub": "The building blocks of every program",
      "mins": 35,
      "track": "frontend",
      "url": "lessons/b-6.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=PkZNo7MFNFg",
        "title": "Learn JavaScript - Full Course for Beginners",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Conditions choose a path",
        "2. Loops repeat work",
        "3. Functions package behaviour",
        "4. Arrays and objects"
      ],
      "checks": [
        [
          "Why prefer for...of over a C-style index loop when you only need values?",
          "It removes index bookkeeping, so there is no off-by-one error possible and the intent — visit each item — is obvious."
        ],
        [
          "What is the difference between an array and an object?",
          "An array is an ordered list accessed by index; an object is a record accessed by named keys."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "B.7",
      "module": "B",
      "moduleTitle": "Basics — Start From Zero",
      "title": "Python Base — Setup, Print/Input, Variables, Data Types",
      "sub": "Python from zero, the way Skillzify uses it",
      "mins": 25,
      "track": "backend",
      "url": "lessons/b-7.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=g-he9ZbTZ1s",
        "title": "How to Install VS Code and Python- (Video.1)",
        "channel": "CodeWithMushtaq"
      },
      "subtopics": [
        "1. Setup: Python and VS Code",
        "2. Print and input",
        "3. Variables and types",
        "4. Dynamic typing, with discipline"
      ],
      "checks": [
        [
          "Why does input() need int() around it before maths?",
          "input() always returns a string. Adding two strings concatenates them, and comparing a string to a number raises a TypeError."
        ],
        [
          "What does 10 // 3 return, and how is it different from 10 / 3?",
          "10 // 3 is 3, floor division that drops the remainder; 10 / 3 is 3.333..., true division."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "B.8",
      "module": "B",
      "moduleTitle": "Basics — Start From Zero",
      "title": "Python Base 2 — Conditions, Loops, Functions, Lists & Dicts",
      "sub": "Python that does real work",
      "mins": 35,
      "track": "backend",
      "url": "lessons/b-8.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=oDOw5tB3Udw",
        "title": "Python for Beginners with Hands-On Projects",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Conditions and loops",
        "2. Functions",
        "3. Lists",
        "4. Dicts"
      ],
      "checks": [
        [
          "Why iterate a list directly instead of by index in Python?",
          "Direct iteration is shorter, cannot go out of bounds, and reads as intent. Indexes are only needed when the position itself matters."
        ],
        [
          "When do you pick a dict over a list?",
          "When you look things up by a key, like a lesson id. A dict lookup is O(1); scanning a list for an id is O(n)."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "B.9",
      "module": "B",
      "moduleTitle": "Basics — Start From Zero",
      "title": "Git Base — Init, Add, Commit, Push, GitHub Basics",
      "sub": "Version control from your first commit",
      "mins": 25,
      "track": "devops",
      "url": "lessons/b-9.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=tRZGeaHPoaw",
        "title": "Git and GitHub Tutorial for Beginners",
        "channel": "Kevin Stratvert"
      },
      "subtopics": [
        "1. Git tracks snapshots, not files",
        "2. The core workflow",
        "3. Commit messages are documentation",
        "4. Never commit secrets"
      ],
      "checks": [
        [
          "What is the difference between git add and git commit?",
          "add stages changes into the next snapshot; commit records that staged snapshot into history. Nothing is saved until you commit."
        ],
        [
          "Why does a .env file belong in .gitignore?",
          "It holds secrets like API keys. Once pushed to GitHub, a secret is public forever — even deleting it later leaves it in history."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "B.10",
      "module": "B",
      "moduleTitle": "Basics — Start From Zero",
      "title": "VS Code & Tools Base — Editor, Terminal, Extensions, Running Code Locally",
      "sub": "Your workshop, set up once and used daily",
      "mins": 20,
      "track": "devops",
      "url": "lessons/b-10.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=QkmPe68UePg",
        "title": "VS Code Tutorial For Beginners (Free Copilot AI 2026)",
        "channel": "LearnWebCode"
      },
      "subtopics": [
        "1. The editor is the workshop",
        "2. The integrated terminal",
        "3. Extensions that earn their place",
        "4. Running code locally, the habit"
      ],
      "checks": [
        [
          "Why serve a static site over HTTP instead of opening the file directly?",
          "File URLs block fetch, modules and some APIs for security; a local server behaves like production and avoids those restrictions."
        ],
        [
          "What is the fastest way to open a file you know the name of?",
          "Ctrl+P quick-open, then type a few letters of the filename — far faster than clicking through the folder tree."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "D.1",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Time & Space Complexity + Big-O",
      "sub": "Count operations before you write code",
      "mins": 45,
      "track": "dsa",
      "url": "lessons/d-1.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=FPu9Uld7W-E",
        "title": "Time and Space Complexity - Strivers A2Z DSA Course",
        "channel": "takeUforward"
      },
      "subtopics": [
        "1. Big-O is about growth, not stopwatches",
        "2. The classes you must recognise instantly",
        "3. Counting loops and recursion",
        "4. Space, trade-offs, and the interview habit"
      ],
      "checks": [
        [
          "Why is an O(n²) solution unacceptable when n = 10⁵?",
          "It needs about 10¹⁰ operations, far beyond the roughly 10⁸ operations a typical 1–2 second limit allows. You need O(n log n) or better."
        ],
        [
          "A loop runs n times and inside it you slice a list of length n. What is the total complexity?",
          "O(n²): each slice copies n elements, so n iterations times O(n) work per iteration."
        ]
      ],
      "cards": [
        [
          "Big-O",
          "An upper bound on how a solution's cost grows with input size n, ignoring constants and lower-order terms."
        ],
        [
          "O(log n)",
          "Cost grows with the number of times you can halve n — the signature of binary search and balanced-tree operations."
        ],
        [
          "O(n log n)",
          "The cost of efficient comparison sorting, and the target complexity for most problems with n around 10⁵."
        ],
        [
          "Amortised O(1)",
          "Average cost per operation over many operations, even if single operations occasionally cost more — like appending to a dynamic array."
        ],
        [
          "Recursion depth",
          "The maximum number of nested calls on the stack; it sets the space cost of a recursive solution."
        ],
        [
          "Time-space trade-off",
          "Using extra memory, like a hash map, to buy faster time — or the reverse. Naming the trade is half the interview answer."
        ]
      ],
      "striver": {
        "section": "Learn the basics",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Two Sum",
          "url": "https://leetcode.com/problems/two-sum/"
        },
        {
          "title": "Valid Anagram",
          "url": "https://leetcode.com/problems/valid-anagram/"
        },
        {
          "title": "Maximum Subarray",
          "url": "https://leetcode.com/problems/maximum-subarray/"
        },
        {
          "title": "Best Time to Buy and Sell Stock",
          "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
        },
        {
          "title": "Contains Duplicate",
          "url": "https://leetcode.com/problems/contains-duplicate/"
        }
      ]
    },
    {
      "id": "D.2",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Arrays & Two Pointers",
      "sub": "One pass, two indices, zero extra space",
      "mins": 50,
      "track": "dsa",
      "url": "lessons/d-2.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=Fu7LD_mIo00",
        "title": "Episode 3 –Master DSA Patterns with 2 Pointers Technique",
        "channel": "takeUforward"
      },
      "subtopics": [
        "1. Arrays are contiguous memory",
        "2. The two-pointer pattern",
        "3. Prefix sums and the one-pass mindset",
        "4. Off-by-one errors and bounds"
      ],
      "checks": [
        [
          "When does the opposite-ends two-pointer pattern apply?",
          "When the input is sorted and you need a pair satisfying a condition — the pointers move inward based on whether the current pair is too small or too large."
        ],
        [
          "Why is Kadane's algorithm O(n) instead of O(n²)?",
          "It carries the best subarray sum ending at the current index forward, resetting when negative, so each element is processed once instead of restarting a scan at every index."
        ]
      ],
      "cards": [
        [
          "Two pointers",
          "Using two indices that move through an array by a rule, turning pair and partition problems from O(n²) into O(n)."
        ],
        [
          "Opposite ends",
          "One pointer at each end of a sorted array, moving inward — the classic pair-sum pattern."
        ],
        [
          "Prefix sum",
          "A running total that answers any range sum in O(1) after one O(n) preprocessing pass."
        ],
        [
          "Kadane's algorithm",
          "Maximum subarray in O(n): keep the best sum ending here, reset to zero when it goes negative."
        ],
        [
          "In-place",
          "Solving without extra arrays, usually with two pointers — O(1) extra space, but it mutates the input."
        ],
        [
          "Off-by-one",
          "A boundary error where a loop runs one step too many or too few; the most common array bug in interviews."
        ]
      ],
      "striver": {
        "section": "Solve Problems on Arrays",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Two Sum II - Input Array Is Sorted",
          "url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
        },
        {
          "title": "Container With Most Water",
          "url": "https://leetcode.com/problems/container-with-most-water/"
        },
        {
          "title": "3Sum",
          "url": "https://leetcode.com/problems/3sum/"
        },
        {
          "title": "Trapping Rain Water",
          "url": "https://leetcode.com/problems/trapping-rain-water/"
        },
        {
          "title": "Remove Duplicates from Sorted Array",
          "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
        }
      ]
    },
    {
      "id": "D.3",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Strings & Hashing",
      "sub": "Hash maps turn O(n²) into O(n)",
      "mins": 50,
      "track": "dsa",
      "url": "lessons/d-3.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=KEs5UyBJ39g",
        "title": "Hashing | Maps | Time Complexity | Collisions | Division Rule of Hashing | Strivers A2Z DSA Course",
        "channel": "takeUforward"
      },
      "subtopics": [
        "1. Strings are immutable arrays of characters",
        "2. Hashing: the frequency-map habit",
        "3. Anagrams, grouping, and the two-sum trick",
        "4. Sliding window on strings"
      ],
      "checks": [
        [
          "Why is building a string with += in a loop O(n²)?",
          "Strings are immutable, so each += copies the whole string built so far. Collect pieces in a list and join once for O(n)."
        ],
        [
          "In the sliding-window template, why does the left pointer never move backwards?",
          "The window only grows or slides forward, so each character enters and leaves the window once — that is what makes the scan O(n)."
        ]
      ],
      "cards": [
        [
          "Frequency map",
          "A hash map counting how often each key appears — the core tool for anagram, duplicate and complement problems."
        ],
        [
          "Hash map",
          "A key-value store with average O(1) insert and lookup; collisions can degrade it to O(n) in the worst case."
        ],
        [
          "Sliding window",
          "Two pointers marking a substring that grows and shrinks in one pass, giving O(n) solutions for substring problems."
        ],
        [
          "Anagram signature",
          "A canonical key for a string — sorted letters or a 26-count tuple — shared by all its anagrams."
        ],
        [
          "String immutability",
          "Strings cannot be changed in place; every edit creates a new string, so repeated concatenation is O(n²)."
        ],
        [
          "Complement trick",
          "For each value x, look up target − x in a map instead of scanning for a partner — the heart of Two Sum."
        ]
      ],
      "striver": {
        "section": "Strings",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Valid Anagram",
          "url": "https://leetcode.com/problems/valid-anagram/"
        },
        {
          "title": "Group Anagrams",
          "url": "https://leetcode.com/problems/group-anagrams/"
        },
        {
          "title": "Longest Substring Without Repeating Characters",
          "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
        },
        {
          "title": "Longest Repeating Character Replacement",
          "url": "https://leetcode.com/problems/longest-repeating-character-replacement/"
        },
        {
          "title": "Minimum Window Substring",
          "url": "https://leetcode.com/problems/minimum-window-substring/"
        }
      ]
    },
    {
      "id": "D.4",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Recursion & Backtracking",
      "sub": "Trust the recursion — define the base case, then the choice",
      "mins": 50,
      "track": "dsa",
      "url": "lessons/d-4.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=yVdKa8dnKiE",
        "title": "Re 1. Introduction to Recursion | Recursion Tree | Stack Space | Strivers A2Z DSA Course",
        "channel": "takeUforward"
      },
      "subtopics": [
        "1. Recursion is a call stack, not magic",
        "2. Backtracking: choose, explore, undo",
        "3. The decision-tree mental model",
        "4. Pruning and the complexity check"
      ],
      "checks": [
        [
          "What are the two things a recursive function must get right?",
          "A base case that stops the recursion, and a progress step that shrinks the input toward the base case on every call."
        ],
        [
          "Why is the undo step essential in backtracking?",
          "Each branch must start from the same state. Without undoing the choice, later branches inherit earlier picks and produce wrong answers."
        ]
      ],
      "cards": [
        [
          "Base case",
          "The smallest input a recursive function answers directly, without another recursive call — it stops the recursion."
        ],
        [
          "Call stack",
          "The stack of active function calls; recursion depth equals stack depth, and each frame costs memory."
        ],
        [
          "Backtracking",
          "Depth-first search over choices with an undo step: choose, explore, then remove the choice before the next branch."
        ],
        [
          "Decision tree",
          "A tree where each level is one choice and each root-to-leaf path is one candidate answer; its leaf count is the complexity."
        ],
        [
          "Pruning",
          "Skipping branches that cannot lead to a valid answer, checked before recursing deeper."
        ],
        [
          "Stack overflow",
          "Exhausting the call stack, usually from a missing base case or recursion deeper than the stack allows."
        ]
      ],
      "striver": {
        "section": "Recursion",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Subsets",
          "url": "https://leetcode.com/problems/subsets/"
        },
        {
          "title": "Permutations",
          "url": "https://leetcode.com/problems/permutations/"
        },
        {
          "title": "Combination Sum",
          "url": "https://leetcode.com/problems/combination-sum/"
        },
        {
          "title": "Generate Parentheses",
          "url": "https://leetcode.com/problems/generate-parentheses/"
        },
        {
          "title": "Word Search",
          "url": "https://leetcode.com/problems/word-search/"
        }
      ]
    },
    {
      "id": "D.5",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Linked Lists",
      "sub": "Pointers, not indexes — draw the arrows first",
      "mins": 50,
      "track": "dsa",
      "url": "lessons/d-5.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=Nq7ok-OyEpg",
        "title": "L1. Introduction to LinkedList | Traversal | Length | Search an Element",
        "channel": "takeUforward"
      },
      "subtopics": [
        "1. Nodes and pointers: why lists exist",
        "2. The dummy node trick",
        "3. Fast and slow pointers",
        "4. Reversal: the interview rite of passage"
      ],
      "checks": [
        [
          "Why does a dummy node simplify linked-list code?",
          "It guarantees a previous node always exists, so head deletion, empty-list merges and building a new list need no special case — the answer is dummy.next."
        ],
        [
          "How do fast and slow pointers detect a cycle?",
          "The fast pointer moves two steps per slow step, so if there is a cycle it must eventually lap the slow pointer and meet it; on an acyclic list it reaches the end."
        ]
      ],
      "cards": [
        [
          "Node",
          "One element of a linked list: a value plus a pointer to the next node (and prev, in a doubly linked list)."
        ],
        [
          "Dummy node",
          "A throwaway node placed before the head so edge cases at the head disappear; the answer is dummy.next."
        ],
        [
          "Fast and slow pointers",
          "Two pointers moving at different speeds — used to find cycles, middles, and the nth node from the end."
        ],
        [
          "Pointer surgery",
          "Rewiring next pointers to insert, delete or reverse nodes without copying values."
        ],
        [
          "Cycle detection",
          "Floyd's algorithm: fast laps slow inside a cycle, so a meeting proves a cycle exists in O(n) time, O(1) space."
        ],
        [
          "In-place reversal",
          "Flipping next pointers one node at a time with three pointers, using O(1) extra space."
        ]
      ],
      "striver": {
        "section": "Learn LinkedList",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Reverse Linked List",
          "url": "https://leetcode.com/problems/reverse-linked-list/"
        },
        {
          "title": "Merge Two Sorted Lists",
          "url": "https://leetcode.com/problems/merge-two-sorted-lists/"
        },
        {
          "title": "Linked List Cycle",
          "url": "https://leetcode.com/problems/linked-list-cycle/"
        },
        {
          "title": "Remove Nth Node From End of List",
          "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
        },
        {
          "title": "Reorder List",
          "url": "https://leetcode.com/problems/reorder-list/"
        }
      ]
    },
    {
      "id": "D.6",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Stacks & Queues",
      "sub": "LIFO and FIFO — the order is the algorithm",
      "mins": 45,
      "track": "dsa",
      "url": "lessons/d-6.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=tqQ5fTamIN4",
        "title": "L1. Introduction to Stack and Queue | Implementation using Data Structures",
        "channel": "takeUforward"
      },
      "subtopics": [
        "1. Stack: undo, matching, and nesting",
        "2. The monotonic stack pattern",
        "3. Queues and breadth-first thinking",
        "4. Designing with stacks and queues"
      ],
      "checks": [
        [
          "Why does Valid Parentheses need a stack rather than just counting brackets?",
          "Counting cannot check order or type — '([)]' has balanced counts but wrong nesting. A stack matches each closer with the most recent opener."
        ],
        [
          "In a monotonic stack, why is each element pushed and popped at most once?",
          "Once popped, an element never returns, so total pushes and pops across the whole run are O(n) — that is why the algorithm is linear."
        ]
      ],
      "cards": [
        [
          "Stack (LIFO)",
          "Last-in-first-out: push and pop happen at the same end — the top. Used for nesting, undo and reversal."
        ],
        [
          "Queue (FIFO)",
          "First-in-first-out: enqueue at the back, dequeue from the front. Used for fair ordering and breadth-first search."
        ],
        [
          "Monotonic stack",
          "A stack kept in increasing or decreasing order by popping violators — solves next-greater-element problems in O(n)."
        ],
        [
          "Deque",
          "Double-ended queue: insert and remove at both ends in O(1). Powers sliding-window maximum."
        ],
        [
          "Amortised O(1)",
          "Average cost per operation over a sequence, even when single operations occasionally cost more — like transferring between two stacks."
        ],
        [
          "Min Stack",
          "A stack that also tracks the minimum so far, giving getMin in O(1) by storing the running minimum with each push."
        ]
      ],
      "striver": {
        "section": "Stack and Queues",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Valid Parentheses",
          "url": "https://leetcode.com/problems/valid-parentheses/"
        },
        {
          "title": "Min Stack",
          "url": "https://leetcode.com/problems/min-stack/"
        },
        {
          "title": "Evaluate Reverse Polish Notation",
          "url": "https://leetcode.com/problems/evaluate-reverse-polish-notation/"
        },
        {
          "title": "Daily Temperatures",
          "url": "https://leetcode.com/problems/daily-temperatures/"
        },
        {
          "title": "Implement Queue using Stacks",
          "url": "https://leetcode.com/problems/implement-queue-using-stacks/"
        }
      ]
    },
    {
      "id": "D.7",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Sorting & Searching (Binary Search)",
      "sub": "Sorted input is a superpower — halve the search space",
      "mins": 50,
      "track": "dsa",
      "url": "lessons/d-7.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=MHf6awe89xw",
        "title": "BS-1. Binary Search Introduction | Real Life Example | Iterative | Recursive | Overflow Cases",
        "channel": "takeUforward"
      },
      "subtopics": [
        "1. Sorting first is often the whole solution",
        "2. The binary search invariant",
        "3. Binary search on the answer",
        "4. Rotated arrays and edge cases"
      ],
      "checks": [
        [
          "What is the loop invariant of binary search, and why does it prevent infinite loops?",
          "The target, if present, is always within [lo, hi]. Each step shrinks that range by at least half, so the loop must terminate."
        ],
        [
          "When can you binary-search an answer that is not in any array?",
          "When the question asks for a minimum or maximum value and the feasibility check is monotonic — feasible answers stay feasible as the value grows, so the boundary is searchable."
        ]
      ],
      "cards": [
        [
          "Binary search",
          "Repeatedly halving a sorted range using the invariant that the target, if present, lies inside [lo, hi] — O(log n)."
        ],
        [
          "Loop invariant",
          "A statement that stays true before every iteration; the anchor that makes binary search correct and its loop terminate."
        ],
        [
          "Binary search on answer",
          "Searching a range of candidate answers with a monotonic feasibility check, instead of searching an array."
        ],
        [
          "Stable sort",
          "A sort that keeps equal elements in their original relative order — merge sort is stable, quicksort is not."
        ],
        [
          "Counting sort",
          "Sorting by counting frequencies when values are bounded: O(n + k) time, but needs O(k) extra space."
        ],
        [
          "Rotated sorted array",
          "A sorted array cut and swapped; one half is always sorted, which keeps binary search at O(log n)."
        ]
      ],
      "striver": {
        "section": "Binary Search",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Binary Search",
          "url": "https://leetcode.com/problems/binary-search/"
        },
        {
          "title": "Search in Rotated Sorted Array",
          "url": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
        },
        {
          "title": "Find Minimum in Rotated Sorted Array",
          "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
        },
        {
          "title": "Find First and Last Position of Element in Sorted Array",
          "url": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"
        },
        {
          "title": "Koko Eating Bananas",
          "url": "https://leetcode.com/problems/koko-eating-bananas/"
        }
      ]
    },
    {
      "id": "D.8",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Trees & BST",
      "sub": "Recursion on a branching structure",
      "mins": 50,
      "track": "dsa",
      "url": "lessons/d-8.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=_ANrF3FJm7I",
        "title": "L1. Introduction to Trees | Types of Trees",
        "channel": "takeUforward"
      },
      "subtopics": [
        "1. Trees are recursive data",
        "2. Traversals: four orders, one idea",
        "3. The BST property is a search superpower",
        "4. Depth, diameter, and lowest common ancestors"
      ],
      "checks": [
        [
          "Why does inorder traversal of a BST give sorted values?",
          "Inorder visits left subtree, then node, then right subtree — and the BST property guarantees left values are smaller and right values larger, so the visit order is ascending."
        ],
        [
          "How is tree diameter different from tree height?",
          "Height is the longest downward path from a node; diameter is the longest path between any two nodes, which may pass through a node via both its children."
        ]
      ],
      "cards": [
        [
          "Binary tree",
          "A tree where each node has at most a left and a right child; every subtree is itself a tree."
        ],
        [
          "BST property",
          "Left descendants are smaller and right descendants larger than the node — this makes search O(h)."
        ],
        [
          "Inorder traversal",
          "Left, node, right — visits a BST's values in ascending sorted order."
        ],
        [
          "Height vs depth",
          "Height is the longest downward path from a node; depth is the distance from the root to the node."
        ],
        [
          "Diameter",
          "The longest path between any two nodes in a tree, which may pass through a node via both children."
        ],
        [
          "Lowest common ancestor",
          "The deepest node that is an ancestor of both targets — in a BST it is the first node where the targets split."
        ]
      ],
      "striver": {
        "section": "Binary Trees",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Invert Binary Tree",
          "url": "https://leetcode.com/problems/invert-binary-tree/"
        },
        {
          "title": "Maximum Depth of Binary Tree",
          "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
        },
        {
          "title": "Diameter of Binary Tree",
          "url": "https://leetcode.com/problems/diameter-of-binary-tree/"
        },
        {
          "title": "Lowest Common Ancestor of a Binary Search Tree",
          "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
        },
        {
          "title": "Validate Binary Search Tree",
          "url": "https://leetcode.com/problems/validate-binary-search-tree/"
        }
      ]
    },
    {
      "id": "D.9",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Heaps & Priority Queues",
      "sub": "The top-k pattern — keep only what matters",
      "mins": 45,
      "track": "dsa",
      "url": "lessons/d-9.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=Qf-TDPr0nYw",
        "title": "Introduction to Heap Data Structure, Priority Queue, and Heapsort",
        "channel": "Kunal Kushwaha"
      },
      "subtopics": [
        "1. A heap is a partial order, not a sorted list",
        "2. The top-k pattern",
        "3. Merging and scheduling with heaps",
        "4. Heap versus sort: choosing the tool"
      ],
      "checks": [
        [
          "Why is building a heap O(n) instead of O(n log n)?",
          "Most nodes sit near the leaves with tiny sift-down distances; summing the work over all levels gives O(n), not n times log n."
        ],
        [
          "Why does the top-k pattern use a min-heap to find the k largest?",
          "A min-heap of size k keeps the smallest of the k largest on top, so each new element is compared against exactly the threshold it must beat."
        ]
      ],
      "cards": [
        [
          "Min-heap",
          "A heap where every parent is smaller than its children, so the minimum is always on top; insert and pop cost O(log n)."
        ],
        [
          "Max-heap",
          "A heap where every parent is larger than its children, so the maximum is always on top."
        ],
        [
          "Top-k pattern",
          "Keep a heap of size k while scanning: push each element, pop the extreme when the heap overflows — O(n log k)."
        ],
        [
          "Heapify",
          "Building a heap from an array in O(n) by sifting down from the last parent upward."
        ],
        [
          "Two-heap median",
          "A max-heap for the lower half plus a min-heap for the upper half, kept balanced, yields the running median in O(log n) per insert."
        ],
        [
          "Priority queue",
          "A queue that always dequeues the highest-priority element first, usually implemented with a heap."
        ]
      ],
      "striver": {
        "section": "Heaps",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Kth Largest Element in an Array",
          "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/"
        },
        {
          "title": "Top K Frequent Elements",
          "url": "https://leetcode.com/problems/top-k-frequent-elements/"
        },
        {
          "title": "Last Stone Weight",
          "url": "https://leetcode.com/problems/last-stone-weight/"
        },
        {
          "title": "K Closest Points to Origin",
          "url": "https://leetcode.com/problems/k-closest-points-to-origin/"
        },
        {
          "title": "Find Median from Data Stream",
          "url": "https://leetcode.com/problems/find-median-from-data-stream/"
        }
      ]
    },
    {
      "id": "D.10",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Graphs (BFS/DFS)",
      "sub": "Nodes, edges, visited set — every graph problem is a traversal",
      "mins": 50,
      "track": "dsa",
      "url": "lessons/d-10.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=M3_pLsDdeuU",
        "title": "G-1. Introduction to Graph | Types | Different Conventions Used",
        "channel": "takeUforward"
      },
      "subtopics": [
        "1. Modelling: everything is a graph if you look right",
        "2. DFS versus BFS: depth or breadth",
        "3. The visited set: the one bug that loops forever",
        "4. Classic patterns: islands, topo sort, multi-source BFS"
      ],
      "checks": [
        [
          "Why mark a node visited when you enqueue it, not when you dequeue it?",
          "Marking late lets the same node be enqueued many times by different neighbours, blowing up the queue and the work; marking at enqueue time guarantees one entry per node."
        ],
        [
          "Why does BFS find the shortest path in an unweighted graph?",
          "It visits nodes in order of increasing distance from the source, so the first time a node is reached is via the shortest possible path."
        ]
      ],
      "cards": [
        [
          "Adjacency list",
          "A map from each node to its neighbours — the standard graph representation, O(V + E) in space."
        ],
        [
          "BFS",
          "Breadth-first search with a queue: visits level by level, finds shortest paths in unweighted graphs."
        ],
        [
          "DFS",
          "Depth-first search with a stack or recursion: dives down one path first; natural for cycles and topo sort."
        ],
        [
          "Visited set",
          "The record of nodes already processed; without it, cycles make a traversal loop forever."
        ],
        [
          "Topological sort",
          "An ordering of nodes so every prerequisite comes before its dependent; impossible when the graph has a cycle."
        ],
        [
          "Multi-source BFS",
          "Starting BFS from all sources at once, so the level number measures distance from the nearest source."
        ]
      ],
      "striver": {
        "section": "Graphs",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Number of Islands",
          "url": "https://leetcode.com/problems/number-of-islands/"
        },
        {
          "title": "Clone Graph",
          "url": "https://leetcode.com/problems/clone-graph/"
        },
        {
          "title": "Course Schedule",
          "url": "https://leetcode.com/problems/course-schedule/"
        },
        {
          "title": "Pacific Atlantic Water Flow",
          "url": "https://leetcode.com/problems/pacific-atlantic-water-flow/"
        },
        {
          "title": "Rotting Oranges",
          "url": "https://leetcode.com/problems/rotting-oranges/"
        }
      ]
    },
    {
      "id": "D.11",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Dynamic Programming",
      "sub": "States, choices, recurrence — DP is recursion with memory",
      "mins": 55,
      "track": "dsa",
      "url": "lessons/d-11.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=oBt53YbR9Kk",
        "title": "Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Recognising DP: overlapping subproblems, optimal substructure",
        "2. The five-step method",
        "3. Memoisation versus tabulation",
        "4. The classic pattern families"
      ],
      "checks": [
        [
          "What two properties must a problem have for DP to apply?",
          "Overlapping subproblems — the same subproblem recurs — and optimal substructure — the optimal answer is built from optimal answers to subproblems."
        ],
        [
          "Why can Climbing Stairs run in O(1) space?",
          "Each state depends only on the previous two, so the full table is unnecessary — two variables carry everything forward."
        ]
      ],
      "cards": [
        [
          "State",
          "The parameters that fully describe a subproblem, e.g. dp[i] = ways to reach step i — the heart of any DP solution."
        ],
        [
          "Recurrence",
          "The formula expressing a state in terms of smaller states, e.g. dp[i] = dp[i−1] + dp[i−2]."
        ],
        [
          "Memoisation",
          "Top-down DP: cache recursive results so each subproblem is computed once."
        ],
        [
          "Tabulation",
          "Bottom-up DP: fill a table in increasing order, usually with less space and no recursion."
        ],
        [
          "Optimal substructure",
          "The property that an optimal solution is built from optimal solutions to its subproblems."
        ],
        [
          "Space compression",
          "Shrinking a DP table to the few previous values the recurrence actually reads, e.g. two variables instead of an array."
        ]
      ],
      "striver": {
        "section": "Dynamic Programming",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Climbing Stairs",
          "url": "https://leetcode.com/problems/climbing-stairs/"
        },
        {
          "title": "House Robber",
          "url": "https://leetcode.com/problems/house-robber/"
        },
        {
          "title": "Coin Change",
          "url": "https://leetcode.com/problems/coin-change/"
        },
        {
          "title": "Longest Increasing Subsequence",
          "url": "https://leetcode.com/problems/longest-increasing-subsequence/"
        },
        {
          "title": "Word Break",
          "url": "https://leetcode.com/problems/word-break/"
        }
      ]
    },
    {
      "id": "D.12",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Interview Simulation — Patterns, Mock Rounds & Mistake Log",
      "sub": "Talk, code, test — under the clock",
      "mins": 55,
      "track": "dsa",
      "url": "lessons/d-12.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=q0k0pz7dXDQ",
        "title": "DSA Patterns That Crack 90% of Coding Interviews (2026)",
        "channel": "@sans_aura"
      },
      "subtopics": [
        "1. The 45-minute anatomy of an interview round",
        "2. Thinking aloud and the pattern-first reflex",
        "3. The mistake log and spaced re-solve",
        "4. Contests, mocks, and the final two weeks"
      ],
      "checks": [
        [
          "What is the five-part structure of a 45-minute interview round?",
          "Clarify (5 min), brute force with complexity (10), optimise to the pattern (15), code cleanly (10), test with edge cases (5)."
        ],
        [
          "How does the spaced re-solve rule work?",
          "Re-solve a failed problem after 3 days, then after 7 days, without looking at the old solution. If you cannot reproduce it, the cycle repeats."
        ]
      ],
      "cards": [
        [
          "Mock round",
          "A timed 45-minute practice interview, talking aloud, with the same structure as the real thing."
        ],
        [
          "Pattern-first reflex",
          "Naming the pattern — two pointers, sliding window, BFS, DP — before writing any code."
        ],
        [
          "Mistake log",
          "A record of every failed or slow problem: pattern, what went wrong, and a re-solve date."
        ],
        [
          "Spaced re-solve",
          "Re-solving a failed problem after 3 days and again after 7 days, without peeking at the old solution."
        ],
        [
          "Brute force first",
          "Stating and coding the naive solution with its complexity before optimising — it anchors the discussion and banks partial credit."
        ],
        [
          "Weekly Contest",
          "LeetCode's Sunday timed contest: four problems under real pressure, the closest simulation of interview conditions."
        ]
      ],
      "striver": {
        "section": "Learn the basics",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Longest Substring Without Repeating Characters",
          "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
        },
        {
          "title": "Container With Most Water",
          "url": "https://leetcode.com/problems/container-with-most-water/"
        },
        {
          "title": "Number of Islands",
          "url": "https://leetcode.com/problems/number-of-islands/"
        },
        {
          "title": "Coin Change",
          "url": "https://leetcode.com/problems/coin-change/"
        },
        {
          "title": "LRU Cache",
          "url": "https://leetcode.com/problems/lru-cache/"
        }
      ]
    },
    {
      "id": "D.13",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Sliding Window Pattern",
      "sub": "Expand, shrink, never look back",
      "mins": 40,
      "track": "dsa",
      "url": "lessons/d-13.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=9kdHxplyl5I",
        "title": "L1. Introduction to Sliding Window and 2 Pointers | Templates | Patterns",
        "channel": "take U forward"
      },
      "subtopics": [
        "1. What a window is",
        "2. Fixed windows: size k never changes",
        "3. Variable windows: grow until it breaks, then shrink",
        "4. The template and its limits"
      ],
      "checks": [
        [
          "Why is the sliding window O(n) rather than O(n²)?",
          "Each element enters the window once and leaves once, because both pointers only move forward. Total pointer movement is 2n, not n²."
        ],
        [
          "How do fixed and variable windows differ in structure?",
          "A fixed window has a given size k and slides by adding one element and removing one. A variable window grows and shrinks by a condition, and its size is part of the answer."
        ],
        [
          "In a longest-window problem, when do you record the answer?",
          "After shrinking, when the window is valid again — recording while invalid would count windows that break the condition."
        ],
        [
          "Why does the window fail for subarray-sum problems with negative numbers?",
          "Shrinking no longer reliably restores validity, because removing a negative element increases the sum. The monotonicity the pattern needs is gone; use prefix sums with a map."
        ]
      ],
      "cards": [
        [
          "Sliding window",
          "Two forward-only pointers defining a contiguous segment, maintained with running state so each element is processed once — O(n)."
        ],
        [
          "Fixed window",
          "A window of given size k that slides by adding the entering element and removing the leaving one."
        ],
        [
          "Variable window",
          "A window that expands and shrinks by a validity condition; its size is part of the answer."
        ],
        [
          "Window invariant",
          "A statement of what the window contains and when the answer is recorded — the key to writing the shrink loop correctly."
        ],
        [
          "Monotonic condition",
          "A condition where shrinking always moves toward validity; required for the window pattern to work."
        ],
        [
          "Frequency map state",
          "A count map of what is inside the window, the usual state for distinct-count and anagram window problems."
        ]
      ],
      "striver": {
        "section": "Sliding Window & Two Pointer Combined Problems",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Maximum Average Subarray I",
          "url": "https://leetcode.com/problems/maximum-average-subarray-i/"
        },
        {
          "title": "Longest Substring Without Repeating Characters",
          "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
        },
        {
          "title": "Minimum Size Subarray Sum",
          "url": "https://leetcode.com/problems/minimum-size-subarray-sum/"
        },
        {
          "title": "Longest Repeating Character Replacement",
          "url": "https://leetcode.com/problems/longest-repeating-character-replacement/"
        },
        {
          "title": "Sliding Window Maximum",
          "url": "https://leetcode.com/problems/sliding-window-maximum/"
        }
      ]
    },
    {
      "id": "D.14",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Two Pointers Deep — Fast & Slow, Three Sum",
      "sub": "Opposite ends, different speeds, triplets without duplicates",
      "mins": 40,
      "track": "dsa",
      "url": "lessons/d-14.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=1DEtCQqVM68",
        "title": "3Sum (LeetCode 15) — Sort + Two Pointers in C++ | Most Asked Interview Question",
        "channel": "DSA Animated"
      },
      "subtopics": [
        "1. Opposite ends: the sorted-array workhorse",
        "2. Fast and slow: cycles and middles",
        "3. 3Sum: sort, fix one, two-pointer the rest",
        "4. Deduplication: where 3Sum solutions actually fail"
      ],
      "checks": [
        [
          "In Container With Most Water, why always move the shorter wall?",
          "The area is limited by the shorter wall and the width only shrinks as pointers move in, so keeping the shorter wall can never beat the current area. Moving it is the only chance to improve."
        ],
        [
          "How do fast and slow pointers find the middle of a list in one pass?",
          "Fast moves two steps per slow step, so when fast reaches the end, slow has covered half the distance and sits at the middle."
        ],
        [
          "After fast and slow meet inside a cycle, how do you find the cycle entrance?",
          "Restart one pointer at the head and move both one step at a time; they meet at the entrance, because the distance from head to entrance equals the distance from the meeting point to entrance."
        ],
        [
          "What are the three duplicate-skip rules in 3Sum?",
          "Skip a fixed element equal to the previous one, and after recording a triplet skip repeated values at both the left and right pointers."
        ]
      ],
      "cards": [
        [
          "Opposite ends",
          "Pointers starting at both ends of a sorted array, moving inward by a comparison rule — the classic pair pattern."
        ],
        [
          "Fast and slow pointers",
          "Two pointers at different speeds, usually 2:1, used for cycle detection, middles and cycle entrances."
        ],
        [
          "Floyd's cycle detection",
          "Fast laps slow inside a cycle, proving one exists in O(n) time and O(1) space."
        ],
        [
          "3Sum pattern",
          "Sort, fix one element, then two-pointer the remainder for pairs summing to its negation — O(n²)."
        ],
        [
          "Deduplication",
          "Skipping equal values after sorting so each unique answer is produced exactly once."
        ],
        [
          "Cycle entrance",
          "Found by restarting one pointer at the head after a meeting and advancing both one step at a time."
        ]
      ],
      "striver": {
        "section": "Sliding Window & Two Pointer Combined Problems",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Two Sum II - Input Array Is Sorted",
          "url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
        },
        {
          "title": "Container With Most Water",
          "url": "https://leetcode.com/problems/container-with-most-water/"
        },
        {
          "title": "3Sum",
          "url": "https://leetcode.com/problems/3sum/"
        },
        {
          "title": "3Sum Closest",
          "url": "https://leetcode.com/problems/3sum-closest/"
        },
        {
          "title": "Linked List Cycle II",
          "url": "https://leetcode.com/problems/linked-list-cycle-ii/"
        }
      ]
    },
    {
      "id": "D.15",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Greedy Algorithms",
      "sub": "Take the best now — when now is enough",
      "mins": 35,
      "track": "dsa",
      "url": "lessons/d-15.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=ElKTUb-aQVA",
        "title": "Greedy Algorithms Explained: When the Best Choice Now Fails (Coin Change + Real Speed Test)",
        "channel": "Tech Unboxed Lab"
      },
      "subtopics": [
        "1. The greedy idea: local best, global best",
        "2. The exchange argument: how greedy is proven",
        "3. Interval scheduling and its family",
        "4. When greedy fails: the coin-change counterexample"
      ],
      "checks": [
        [
          "Why does earliest-end-first work for interval scheduling?",
          "The interval ending earliest leaves at least as much room for all later intervals as any other first choice, so swapping it into an optimal solution never makes that solution worse."
        ],
        [
          "What is an exchange argument?",
          "A proof that an optimal solution can be transformed into the greedy one, choice by choice, without getting worse — establishing that greedy is optimal."
        ],
        [
          "Give a counterexample where greedy coin change fails.",
          "Denominations 1, 3, 4 with target 6: greedy uses 4+1+1 (three coins) while 3+3 uses two. Arbitrary coin systems need dynamic programming instead."
        ],
        [
          "How does Jump Game use a greedy invariant?",
          "It tracks the farthest index reachable so far; if the scan ever reaches an index beyond that, the end is unreachable, otherwise it is reachable."
        ]
      ],
      "cards": [
        [
          "Greedy algorithm",
          "An algorithm that makes the locally best choice at each step and never revisits it — optimal only when the choice is provably safe."
        ],
        [
          "Exchange argument",
          "The standard greedy proof: swap the greedy choice into an optimal solution without making it worse, repeatedly, until they match."
        ],
        [
          "Interval scheduling",
          "Selecting the maximum set of non-overlapping intervals by always taking the one that ends earliest."
        ],
        [
          "Greedy choice property",
          "The property that a locally optimal choice belongs to some globally optimal solution — the precondition for greedy to work."
        ],
        [
          "Counterexample",
          "A small input that breaks an algorithm; hunting for one is how you test a greedy idea before trusting it."
        ],
        [
          "Farthest-reach invariant",
          "The Jump Game greedy state: the maximum index reachable so far, updated in one pass."
        ]
      ],
      "striver": {
        "section": "Greedy Algorithms",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Assign Cookies",
          "url": "https://leetcode.com/problems/assign-cookies/"
        },
        {
          "title": "Jump Game",
          "url": "https://leetcode.com/problems/jump-game/"
        },
        {
          "title": "Jump Game II",
          "url": "https://leetcode.com/problems/jump-game-ii/"
        },
        {
          "title": "Non-overlapping Intervals",
          "url": "https://leetcode.com/problems/non-overlapping-intervals/"
        },
        {
          "title": "Gas Station",
          "url": "https://leetcode.com/problems/gas-station/"
        }
      ]
    },
    {
      "id": "D.16",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Bit Manipulation",
      "sub": "Think in ones and zeros",
      "mins": 35,
      "track": "dsa",
      "url": "lessons/d-16.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=oPhzudyI3p4",
        "title": "Part 16: Bit Manipulation: Complete One-Shot Mega Class | DSA with Java",
        "channel": "EDUCATA"
      },
      "subtopics": [
        "1. The four operations and what they mean",
        "2. XOR cancellation: pairs disappear",
        "3. n & (n-1): erasing the lowest set bit",
        "4. Counting bits and building intuition"
      ],
      "checks": [
        [
          "Why does XORing the whole array find the single unpaired element?",
          "Pairs cancel because x ^ x = 0, and x ^ 0 = x, so after all cancellations only the unpaired element remains. Order does not matter because XOR is commutative and associative."
        ],
        [
          "What does n & (n-1) do, exactly?",
          "It clears the lowest set bit of n and leaves all higher bits unchanged, because subtracting 1 flips that bit off and turns the bits below it on."
        ],
        [
          "How do you test whether n is a power of two in one expression?",
          "n &gt; 0 and n &amp; (n - 1) == 0: a power of two has exactly one set bit, and clearing it leaves zero."
        ],
        [
          "What is the DP relation for counting bits up to n?",
          "bits[i] = bits[i &gt;&gt; 1] + (i &amp; 1): the popcount of i is the popcount of i halved plus its lowest bit."
        ]
      ],
      "cards": [
        [
          "XOR",
          "Bitwise exclusive-or: 1 where bits differ. x ^ x = 0 and x ^ 0 = x, so pairs cancel — the basis of Single Number."
        ],
        [
          "Mask",
          "A bit pattern used with AND to isolate specific bits, like n &amp; 1 to test oddness."
        ],
        [
          "n & (n-1)",
          "Clears the lowest set bit of n; the engine behind fast bit counting and the power-of-two test."
        ],
        [
          "Popcount",
          "The number of set bits in a number, computed by clearing bits one at a time or with a DP relation."
        ],
        [
          "Shift",
          "Moving bits left or right: left shift by 1 doubles, right shift by 1 halves (for non-negative numbers)."
        ],
        [
          "Set / clear / toggle bit k",
          "OR with (1 &lt;&lt; k) sets it, AND with the complement clears it, XOR with (1 &lt;&lt; k) toggles it."
        ]
      ],
      "striver": {
        "section": "Bit Manipulation",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Single Number",
          "url": "https://leetcode.com/problems/single-number/"
        },
        {
          "title": "Single Number II",
          "url": "https://leetcode.com/problems/single-number-ii/"
        },
        {
          "title": "Number of 1 Bits",
          "url": "https://leetcode.com/problems/number-of-1-bits/"
        },
        {
          "title": "Counting Bits",
          "url": "https://leetcode.com/problems/counting-bits/"
        },
        {
          "title": "Missing Number",
          "url": "https://leetcode.com/problems/missing-number/"
        }
      ]
    },
    {
      "id": "D.17",
      "module": "D",
      "moduleTitle": "DSA — Data Structures & Algorithms",
      "title": "Tries & Prefix Trees",
      "sub": "A tree where the path is the word",
      "mins": 35,
      "track": "dsa",
      "url": "lessons/d-17.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=kltxIaPb4H0",
        "title": "Trie from Zero | Easiest Explanation From Scratch",
        "channel": "Code Like Lily"
      },
      "subtopics": [
        "1. The node structure: characters on edges, words on paths",
        "2. Insert, search and prefix: three walks",
        "3. Autocomplete: the killer application",
        "4. Trie versus hash map: the honest trade-off"
      ],
      "checks": [
        [
          "Why does search need the end-of-word flag if the path exists?",
          "A path can exist as a prefix of longer words without being a word itself. The flag distinguishes a stored word from a mere prefix."
        ],
        [
          "What is the time complexity of trie search, and what does it depend on?",
          "O(L) where L is the length of the word — it depends only on the word, not on how many words the trie contains."
        ],
        [
          "How does autocomplete work on a trie?",
          "Walk to the node for the typed prefix, then depth-first collect every complete word in that subtree, using the end-of-word flags."
        ],
        [
          "When is a hash set better than a trie?",
          "For exact membership only: it uses less memory and hashes the whole string in one step. A trie earns its cost when prefixes, ordering or prefix counts matter."
        ]
      ],
      "cards": [
        [
          "Trie",
          "A tree storing strings as character paths, where words sharing a prefix share nodes — built for prefix queries."
        ],
        [
          "Trie node",
          "A node holding a map from character to child node plus an end-of-word flag."
        ],
        [
          "End-of-word flag",
          "Marks that a complete stored word ends at this node, distinguishing words from mere prefixes."
        ],
        [
          "Prefix query",
          "Checking whether any stored word starts with a given string — a single walk down the trie."
        ],
        [
          "Autocomplete",
          "Walking to a prefix node and collecting all complete words in its subtree."
        ],
        [
          "Trie vs hash set",
          "Hash sets win exact lookup on memory; tries win anything involving prefixes, ordering or prefix counts."
        ]
      ],
      "striver": {
        "section": "Tries",
        "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      "leetcode": [
        {
          "title": "Implement Trie (Prefix Tree)",
          "url": "https://leetcode.com/problems/implement-trie-prefix-tree/"
        },
        {
          "title": "Design Add and Search Words Data Structure",
          "url": "https://leetcode.com/problems/design-add-and-search-words-data-structure/"
        },
        {
          "title": "Replace Words",
          "url": "https://leetcode.com/problems/replace-words/"
        },
        {
          "title": "Longest Word in Dictionary",
          "url": "https://leetcode.com/problems/longest-word-in-dictionary/"
        },
        {
          "title": "Word Search II",
          "url": "https://leetcode.com/problems/word-search-ii/"
        }
      ]
    },
    {
      "id": "0.1",
      "module": "M0",
      "moduleTitle": "Foundations — How the Web Actually Works",
      "title": "How a Web Page Loads",
      "sub": "From typing a URL to pixels on screen",
      "mins": 25,
      "track": "frontend",
      "url": "lessons/0-1.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=zHqEIUjxtRA",
        "title": "What Happens When You Type a URL? (DNS, TCP, TLS, HTTP Explained)",
        "channel": "BrightShell"
      },
      "subtopics": [
        "1. The journey of one page load",
        "2. Why scripts go at the bottom",
        "3. Cache-busting: the ?v=29 trick"
      ],
      "checks": [
        [
          "Why do Skillzify's scripts sit at the bottom of the page?",
          "Classic scripts block HTML parsing while they download and run. At the bottom, the page content paints first and behaviour loads after."
        ],
        [
          "What does style.css?v=29 do, and why does the number change?",
          "It is cache-busting. The changed query string makes the URL new, so browsers download the fresh CSS instead of reusing a cached copy."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "0.2",
      "module": "M0",
      "moduleTitle": "Foundations — How the Web Actually Works",
      "title": "HTTP & DNS Deep — Requests, Responses, Status Codes",
      "sub": "What actually travels across the wire",
      "mins": 30,
      "track": "frontend",
      "url": "lessons/0-2.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=R-OKYBDu6_E",
        "title": "Backend Development #1 — What REALLY Happens When You Open a Website?",
        "channel": "Assets Weber Academy"
      },
      "subtopics": [
        "1. DNS: names to numbers",
        "2. HTTP requests and responses",
        "3. Status codes are a language",
        "4. Debugging in the Network tab"
      ],
      "checks": [
        [
          "What is the difference between a 401 and a 403?",
          "401 means unauthenticated — no valid credentials were presented. 403 means authenticated but forbidden — the identity is known and still not allowed."
        ],
        [
          "Why does fetch not reject on a 500 response?",
          "fetch only rejects on network-level failures. An HTTP error status still resolves, so code must check res.ok or res.status itself."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "0.3",
      "module": "M0",
      "moduleTitle": "Foundations — How the Web Actually Works",
      "title": "Browser Rendering & the Critical Rendering Path",
      "sub": "From HTML text to painted pixels",
      "mins": 30,
      "track": "frontend",
      "url": "lessons/0-3.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=NBAjlYb6jIs",
        "title": "How Browsers Render Websites (The Step-by-Step Process)",
        "channel": "YouTube"
      },
      "subtopics": [
        "1. The critical rendering path",
        "2. What blocks rendering",
        "3. Layout thrashing and repaints",
        "4. Measuring, not guessing"
      ],
      "checks": [
        [
          "Why does CSS block rendering but images do not?",
          "The browser needs the full CSSOM before it can compute styles for the render tree; images are just boxes with a size until they arrive, so painting can start without them."
        ],
        [
          "Why are transform and opacity the cheapest properties to animate?",
          "They run on the compositor thread and skip layout and paint — the browser just moves an already-painted layer."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "0.4",
      "module": "M0",
      "moduleTitle": "Foundations — How the Web Actually Works",
      "title": "Semantic HTML & Page Structure",
      "sub": "Tags that mean something, not just divs",
      "mins": 30,
      "track": "frontend",
      "url": "lessons/0-4.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=WNVDCHQGnfA",
        "title": "Semantic HTML Explained | Header, Nav, Main, Section, Article, Aside & Footer | CodiXo #13",
        "channel": "CodiXo"
      },
      "subtopics": [
        "1. Structure vs presentation",
        "2. Semantic tags",
        "3. The head: two lines that matter most",
        "4. Empty divs that JavaScript fills"
      ],
      "checks": [
        [
          "What breaks on phones if the viewport meta tag is missing?",
          "Mobile browsers assume a ~980px layout width and scale the page down, so text is tiny and responsive media queries keyed to device width never apply correctly."
        ],
        [
          "Why is #site-nav empty in the HTML?",
          "nav.js injects the shared navigation into it at runtime, so the nav is written once and reused across all 17 pages."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "0.5",
      "module": "M0",
      "moduleTitle": "Foundations — How the Web Actually Works",
      "title": "CSS: Box Model, Variables & Themes",
      "sub": "The system behind Skillzify's dark/light modes",
      "mins": 40,
      "track": "frontend",
      "url": "lessons/0-5.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=OXGznpKZ_sA",
        "title": "CSS Tutorial – Full Course for Beginners",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Every element is a box",
        "2. Layout: Flexbox and Grid",
        "3. CSS variables: theming without duplication"
      ],
      "checks": [
        [
          "With box-sizing: content-box, why is a width:200px box with 20px padding actually 240px wide?",
          "Because content-box sets width on the content only; padding (20px each side) and border are added outside it. border-box includes them in the declared width."
        ],
        [
          "How does Skillzify's dark/light toggle change the whole site by changing so little?",
          "All components use CSS variables like var(--bg). The toggle only changes the data-theme attribute on the html element; the [data-theme] block redefines the variables and everything repainting from them follows."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "0.6",
      "module": "M0",
      "moduleTitle": "Foundations — How the Web Actually Works",
      "title": "Responsive Design — One Page, Every Screen",
      "sub": "From a phone to a monitor without a second site",
      "mins": 30,
      "track": "frontend",
      "url": "lessons/0-6.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=x4u1yp3Msao",
        "title": "A practical guide to responsive web design",
        "channel": "Kevin Powell"
      },
      "subtopics": [
        "1. Mobile-first thinking",
        "2. Fluid foundations",
        "3. Breakpoints are content decisions",
        "4. Touch and testing"
      ],
      "checks": [
        [
          "What does width: min(1140px, 92%) do on a 400px phone and on a 2000px monitor?",
          "On the phone it is 92 percent of 400px; on the monitor it caps at 1140px instead of stretching the full width."
        ],
        [
          "Why design mobile-first instead of desktop-first?",
          "The phone layout is the constrained, most-used case; adding layout as space grows is simpler than removing it, and the base CSS stays lean."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "0.7",
      "module": "M0",
      "moduleTitle": "Foundations — How the Web Actually Works",
      "title": "Forms & Validation — Trust Nothing the Browser Sends",
      "sub": "Client convenience, server authority",
      "mins": 30,
      "track": "frontend",
      "url": "lessons/0-7.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=iVTduJt4Szg",
        "title": "21 - Learn Form Validation with HTML, CSS and JavaScript | Beginner Friendly",
        "channel": "Wilson Chiwetalu"
      },
      "subtopics": [
        "1. Forms are a contract",
        "2. Client-side validation is UX, not security",
        "3. Server-side validation is the gate",
        "4. Accessible errors"
      ],
      "checks": [
        [
          "Why must the server validate a field the browser already validated?",
          "Browser validation can be bypassed entirely with curl or DevTools. The server is the only code you control, so it is the only trustworthy gate."
        ],
        [
          "What should a server return when validation fails, and what must it never return?",
          "A 400 with a specific, user-safe message per field. Never a stack trace or internal detail that leaks how the server works."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "0.8",
      "module": "M0",
      "moduleTitle": "Foundations — How the Web Actually Works",
      "title": "CSS Animations & Transitions — Motion with Purpose",
      "sub": "Small movements that teach, not distract",
      "mins": 25,
      "track": "frontend",
      "url": "lessons/0-8.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=PN5OC1mZlfY",
        "title": "CSS Animated Responsive Navbar | CSS Animations for Beginners",
        "channel": "Dave Gray"
      },
      "subtopics": [
        "1. Transitions: between two states",
        "2. Keyframes: full choreography",
        "3. Animate the cheap properties",
        "4. Respect reduced motion"
      ],
      "checks": [
        [
          "Why animate transform instead of top or margin?",
          "Transform runs on the compositor and skips layout and paint; top and margin force layout recalculation every frame, which stutters."
        ],
        [
          "What does prefers-reduced-motion do, and why use it?",
          "It detects the user's OS setting asking for less animation. Honouring it prevents motion sickness and distraction for users who need it."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "0.9",
      "module": "M0",
      "moduleTitle": "Foundations — How the Web Actually Works",
      "title": "Accessibility — Building for Everyone",
      "sub": "a11y is a feature, not a favour",
      "mins": 30,
      "track": "frontend",
      "url": "lessons/0-9.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=e2nkq3h1P68",
        "title": "Learn Accessibility - Full a11y Tutorial",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Who accessibility is for",
        "2. Semantic HTML does most of the work",
        "3. ARIA fills the gaps",
        "4. Contrast, focus and testing"
      ],
      "checks": [
        [
          "Why is a real button better than a clickable div?",
          "A button is focusable, works with Enter and Space, announces itself to screen readers, and shows a focus ring — a div does none of that without manual work."
        ],
        [
          "When should you use ARIA, and when should you avoid it?",
          "Use ARIA only when no native HTML element expresses the meaning; prefer native elements first, because a wrong ARIA attribute is worse than none."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "0.10",
      "module": "M0",
      "moduleTitle": "Foundations — How the Web Actually Works",
      "title": "JavaScript Basics & the DOM",
      "sub": "Variables, events, and app.js — the shared brain",
      "mins": 40,
      "track": "frontend",
      "url": "lessons/0-10.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=EfAl9bwzVZk",
        "title": "JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours",
        "channel": "Dave Gray"
      },
      "subtopics": [
        "1. The core language, fast",
        "2. The DOM is JavaScript's handle on the page",
        "3. localStorage: the browser's tiny notebook",
        "4. app.js: four jobs, wrapped safely"
      ],
      "checks": [
        [
          "Why does app.js wrap everything in an IIFE?",
          "To keep its variables and helper functions out of the global scope, avoiding name collisions with the ~30 other JS files; it exposes only the intended API via window.Skillzify."
        ],
        [
          "localStorage can only store strings — how does Skillzify store a progress object?",
          "JSON.stringify when saving and JSON.parse when loading, wrapped in try/catch so bad data can't crash the page."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "0.11",
      "module": "M0",
      "moduleTitle": "Foundations — How the Web Actually Works",
      "title": "CSS Grid & Flexbox Deep — Layout Like a Professional",
      "sub": "Two layout systems, one decision",
      "mins": 35,
      "track": "frontend",
      "url": "lessons/0-11.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=gT6rHhOZEO0",
        "title": "Learn CSS Flexbox & CSS Grid Building This Dashboard - html and css (CSS Full course 2026)",
        "channel": "Code With Divine"
      },
      "subtopics": [
        "1. Grid areas: draw the layout in text",
        "2. fr units, auto-fit and minmax: grids that size themselves",
        "3. Flexbox alignment, properly understood",
        "4. Grid or Flexbox: the decision rule"
      ],
      "checks": [
        [
          "What does 1fr 2fr mean in grid-template-columns?",
          "After fixed sizes and gaps are subtracted, the leftover space is split into three parts: the first column gets one part, the second gets two."
        ],
        [
          "How does repeat(auto-fit, minmax(240px, 1fr)) make a grid responsive without media queries?",
          "The browser fits as many columns of at least 240px as the container allows and stretches them equally to fill the row, adding or removing columns as the width changes."
        ],
        [
          "Why do justify-content and align-items seem to swap in a column flex container?",
          "They are defined relative to the main and cross axes, and flex-direction: column makes the main axis vertical — so justify works vertically and align horizontally."
        ],
        [
          "When must a layout be Grid rather than Flexbox?",
          "When items must align across both rows and columns — page skeletons and card grids. Flexbox flows items in one dimension without cross-row alignment."
        ]
      ],
      "cards": [
        [
          "grid-template-areas",
          "A way to define a grid layout as named text rows, so the page skeleton reads like a sketch and rearranges by rewriting the sketch."
        ],
        [
          "fr unit",
          "A fraction of the leftover space in a grid container, after fixed tracks and gaps are subtracted."
        ],
        [
          "auto-fit + minmax",
          "A responsive grid recipe: fit as many columns of at least a minimum size as possible, stretching them to fill."
        ],
        [
          "Main axis",
          "The direction Flexbox lays items out — horizontal for row, vertical for column; justify-content works along it."
        ],
        [
          "flex-grow / shrink / basis",
          "How a flex item claims leftover space, gives space back under pressure, and its starting size before either happens."
        ],
        [
          "Grid vs Flexbox rule",
          "Two dimensions with cross-row alignment: Grid. One dimension with flowing items: Flexbox."
        ]
      ],
      "striver": null,
      "leetcode": null
    },
    {
      "id": "1.1",
      "module": "M1",
      "moduleTitle": "JavaScript Deep + Modern Frontend",
      "title": "ES6+ Essentials",
      "sub": "The modern syntax Skillzify (and every codebase) assumes",
      "mins": 35,
      "track": "frontend",
      "url": "lessons/1-1.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=NCwa_xi0Uuc",
        "title": "ES6 Tutorial: Learn Modern JavaScript in 1 Hour",
        "channel": "Programming with Mosh"
      },
      "subtopics": [
        "1. Destructuring: unpack in one line",
        "2. Spread and rest: copy and merge without mutation",
        "3. Template literals and array methods"
      ],
      "checks": [
        [
          "Why prefer creating a new array with spread over push()-ing into the old one?",
          "Mutation makes old references change silently, which breaks change detection and reasoning about state; a new array makes the update explicit and traceable."
        ],
        [
          "Which array method turns a list of results into a single total XP number?",
          "reduce — it folds the array into one accumulated value."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "1.2",
      "module": "M1",
      "moduleTitle": "JavaScript Deep + Modern Frontend",
      "title": "Closures & Scope — Functions That Remember",
      "sub": "Where variables live and how long they last",
      "mins": 30,
      "track": "frontend",
      "url": "lessons/1-2.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=PkZNo7MFNFg",
        "title": "Learn JavaScript - Full Course for Beginners",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Scope is where a name is visible",
        "2. A closure is a function plus its birthplace",
        "3. Private state without classes",
        "4. The classic closure trap"
      ],
      "checks": [
        [
          "What is a closure, in one sentence?",
          "A function that retains access to the variables of the scope where it was created, even after that scope has finished executing."
        ],
        [
          "Why does let fix the classic loop-closure bug but var does not?",
          "let creates a fresh binding per loop iteration, so each callback captures its own value; var has one function-scoped binding shared by all callbacks."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "1.3",
      "module": "M1",
      "moduleTitle": "JavaScript Deep + Modern Frontend",
      "title": "this & Prototypes — How JavaScript Objects Really Work",
      "sub": "The prototype chain, demystified",
      "mins": 30,
      "track": "frontend",
      "url": "lessons/1-3.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=PkZNo7MFNFg",
        "title": "Learn JavaScript - Full Course for Beginners",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. this depends on the call, not the definition",
        "2. Prototypes: shared behaviour",
        "3. Classes are sugar",
        "4. When this goes wrong"
      ],
      "checks": [
        [
          "What decides the value of this inside a function?",
          "How the function is called: as a method it is the object before the dot; plainly it is undefined in strict mode; with new it is the new object; arrows inherit it."
        ],
        [
          "Where do methods live when you use a constructor function?",
          "On the constructor's prototype object, shared by all instances. hasOwnProperty on an instance returns false for them."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "1.4",
      "module": "M1",
      "moduleTitle": "JavaScript Deep + Modern Frontend",
      "title": "Async JavaScript & Fetch",
      "sub": "Promises, async/await, and talking to servers",
      "mins": 45,
      "track": "frontend",
      "url": "lessons/1-4.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=OFpqvaJ3QYg",
        "title": "Asynchronous JavaScript Course – Async/Await, Promises, Callbacks, Fetch API",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. JavaScript waits without freezing",
        "2. async/await: promises that read like normal code",
        "3. Race conditions"
      ],
      "checks": [
        [
          "fetch() resolves even when the server returns HTTP 500 — so what must you check?",
          "res.ok (or res.status). fetch only rejects on network-level failures, not HTTP error statuses."
        ],
        [
          "What is a race condition in async UI code?",
          "Two overlapping async operations complete out of order, so a stale earlier result overwrites a newer one; fixed by disabling triggers, request IDs, or cancellation."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "1.5",
      "module": "M1",
      "moduleTitle": "JavaScript Deep + Modern Frontend",
      "title": "Event Loop Deep — How JavaScript Never Blocks",
      "sub": "Call stack, queues, and the single thread",
      "mins": 35,
      "track": "frontend",
      "url": "lessons/1-5.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=Llkra_968o4",
        "title": "Node.js Explained | V8 Engine, Event Loop & Asynchronous Programming",
        "channel": "Backend Development"
      },
      "subtopics": [
        "1. One thread, three structures",
        "2. Microtasks beat macrotasks",
        "3. Blocking is a choice",
        "4. Async/await is syntax, not magic"
      ],
      "checks": [
        [
          "Why does a resolved promise's then run before a zero-delay setTimeout?",
          "Promise callbacks use the microtask queue, which the event loop drains fully before taking the next task from the timer queue."
        ],
        [
          "Why does a long synchronous loop freeze the whole page?",
          "The single thread is busy, so the call stack never empties and the event loop cannot run renders, timers or event handlers."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "1.6",
      "module": "M1",
      "moduleTitle": "JavaScript Deep + Modern Frontend",
      "title": "DOM Events & Delegation — Listening Smart",
      "sub": "Bubbling, capturing, and one listener for a thousand elements",
      "mins": 30,
      "track": "frontend",
      "url": "lessons/1-6.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=PkZNo7MFNFg",
        "title": "Learn JavaScript - Full Course for Beginners",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Events travel in three phases",
        "2. Delegation: one listener, endless children",
        "3. Controlling the flow",
        "4. Listeners and memory"
      ],
      "checks": [
        [
          "Why does event delegation work for elements added after the listener was attached?",
          "The listener lives on the parent, and events from new children still bubble up to it — the parent never needed to know the children existed."
        ],
        [
          "What does e.target.closest do, and why is it useful here?",
          "It walks up from the clicked element to the nearest ancestor matching the selector, so clicks on a card's inner text or icon still resolve to the card."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "1.7",
      "module": "M1",
      "moduleTitle": "JavaScript Deep + Modern Frontend",
      "title": "State & Data-Driven Rendering",
      "sub": "How Skillzify renders lessons from data files",
      "mins": 40,
      "track": "frontend",
      "url": "lessons/1-7.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=hQAHSlTtcmY",
        "title": "Learn React In 30 Minutes",
        "channel": "Web Dev Simplified"
      },
      "subtopics": [
        "1. The core idea: render from data, never hand-write DOM",
        "2. Content as code",
        "3. Derived state: mastery and review scheduling"
      ],
      "checks": [
        [
          "Why store raw facts and compute mastery instead of storing the mastery score?",
          "Computed values are always consistent with the underlying facts; stored derived values can drift when facts change through another path (like sync from Android)."
        ],
        [
          "How does Skillzify add a new lesson without changing rendering code?",
          "Lessons are data files; learn.js renders whatever objects exist in the arrays. A new lesson is a new data object."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "1.8",
      "module": "M1",
      "moduleTitle": "JavaScript Deep + Modern Frontend",
      "title": "Error Handling & Debugging — Finding Bugs Like a Professional",
      "sub": "Try/catch, stack traces, and DevTools as a lab",
      "mins": 30,
      "track": "frontend",
      "url": "lessons/1-8.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=PkZNo7MFNFg",
        "title": "Learn JavaScript - Full Course for Beginners",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Errors are values with a story",
        "2. try/catch/finally",
        "3. Debugging with breakpoints",
        "4. A debugging method"
      ],
      "checks": [
        [
          "Why wrap localStorage reads in try/catch?",
          "Stored data can be corrupted, the quota can be exceeded, or storage can be disabled — any of which throws, and one throw must not crash the page."
        ],
        [
          "When should you rethrow an error instead of handling it?",
          "When the local code cannot meaningfully recover — log context, then let the caller or a top-level handler decide."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "1.9",
      "module": "M1",
      "moduleTitle": "JavaScript Deep + Modern Frontend",
      "title": "React Fundamentals",
      "sub": "The industry add-on: components, props, hooks",
      "mins": 50,
      "track": "frontend",
      "url": "lessons/1-9.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=u6gSSpfsoOQ",
        "title": "React JavaScript Framework for Beginners – Project-Based Course",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Components: UI as functions",
        "2. State with useState, effects with useEffect",
        "3. What React removes — and what it costs",
        "4. Next.js, at concept level"
      ],
      "checks": [
        [
          "What does calling setXp actually do in React?",
          "It schedules a re-render with the new state value; React updates the DOM to match. You never manipulate DOM nodes yourself."
        ],
        [
          "Give one honest reason Skillzify uses vanilla JS instead of React.",
          "No build step and instant page loads, with simple embedding of heavy libraries like Pyodide; the site's interactivity doesn't need a framework's machinery."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "1.10",
      "module": "M1",
      "moduleTitle": "JavaScript Deep + Modern Frontend",
      "title": "DOM Deep — Building & Updating UI Without a Framework",
      "sub": "The manual rendering React automates",
      "mins": 35,
      "track": "frontend",
      "url": "lessons/1-10.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=5fb2aPlgoys",
        "title": "JavaScript DOM Manipulation – Full Course for Beginners",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Building elements: createElement versus innerHTML",
        "2. Templates and fragments: build once, insert once",
        "3. Event delegation: one listener, whole list",
        "4. Re-rendering without destroying state"
      ],
      "checks": [
        [
          "Why is textContent safer than innerHTML for user data?",
          "textContent inserts the value as pure text that is never parsed as markup, so injected tags cannot execute. innerHTML parses the string as HTML, which is the XSS hole."
        ],
        [
          "What does a DocumentFragment buy you?",
          "You build many nodes off-screen and insert them in one append, so the browser runs one layout pass instead of one per element."
        ],
        [
          "Why does delegation keep working for items added later?",
          "The listener is on the parent, and clicks bubble up from any child — including children created after the listener was attached."
        ],
        [
          "What does a full wipe-and-rebuild re-render destroy?",
          "Scroll position, focus, text typed into inputs, and any transient element state — which is why surgical updates are preferred."
        ]
      ],
      "cards": [
        [
          "createElement",
          "Building a DOM node programmatically, with textContent for safe text — the XSS-proof way to render user data."
        ],
        [
          "DocumentFragment",
          "An off-screen container for building many nodes before a single insertion, avoiding repeated layout work."
        ],
        [
          "template element",
          "Inert markup in the page that you clone per item, fill in, and append — a reusable node blueprint."
        ],
        [
          "Event delegation",
          "One listener on a parent handling events from all children via bubbling and closest()."
        ],
        [
          "dataset",
          "The data-* attributes on an element, readable and writable in JavaScript — a place to carry ids and state on the node itself."
        ],
        [
          "Surgical update",
          "Changing only the nodes whose data changed, preserving scroll, focus and input state instead of rebuilding the whole list."
        ]
      ],
      "striver": null,
      "leetcode": null
    },
    {
      "id": "2.1",
      "module": "M2",
      "moduleTitle": "Python Fluency — The Language Skillzify Teaches & Uses",
      "title": "Python Core, Written Properly",
      "sub": "Data structures, comprehensions, functions",
      "mins": 40,
      "track": "backend",
      "url": "lessons/2-1.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=rfscVS0vtbw",
        "title": "Learn Python - Full Course for Beginners [Tutorial]",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Pick the container by the question you ask",
        "2. Comprehensions: loops that read as sentences",
        "3. Functions as pipelines"
      ],
      "checks": [
        [
          "When is a set the right container instead of a list?",
          "When the questions are uniqueness and membership ('have I seen this?') — set lookup is O(1) versus O(n) scanning a list."
        ],
        [
          "Why keep functions pure (data in, data out) in the flowchart scripts?",
          "Each stage can be tested and debugged independently in PyCharm; hidden global state makes failures non-local and hard to reproduce."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "2.2",
      "module": "M2",
      "moduleTitle": "Python Fluency — The Language Skillzify Teaches & Uses",
      "title": "Data Structures Deep — Lists, Dicts, Sets, Tuples",
      "sub": "Choosing the right container changes everything",
      "mins": 35,
      "track": "backend",
      "url": "lessons/2-2.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=zUg2sl1FMbI",
        "title": "Python Full Course for Beginners | Complete Python Course",
        "channel": "YouTube"
      },
      "subtopics": [
        "1. Lists: ordered and mutable",
        "2. Dicts: lookup by key",
        "3. Sets: uniqueness and membership",
        "4. Tuples: fixed records"
      ],
      "checks": [
        [
          "Why is checking membership in a set faster than in a list?",
          "A set is a hash table, so lookup is average O(1); a list must scan each element, O(n)."
        ],
        [
          "When would you choose a tuple over a list?",
          "When the record is fixed and should never change — immutability documents intent and lets it be used as a dict key or set member."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "2.3",
      "module": "M2",
      "moduleTitle": "Python Fluency — The Language Skillzify Teaches & Uses",
      "title": "OOP in Python",
      "sub": "Classes, objects, and when not to use them",
      "mins": 40,
      "track": "backend",
      "url": "lessons/2-3.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=ZDa-Z5JzLYM",
        "title": "Python OOP Tutorial 1: Classes and Instances",
        "channel": "Corey Schafer"
      },
      "subtopics": [
        "1. A class bundles data with the behaviour that owns it",
        "2. The honest rules of OOP",
        "3. When NOT to use a class"
      ],
      "checks": [
        [
          "Composition vs inheritance — which do you reach for first, and why?",
          "Composition: objects holding other objects stay flexible and loosely coupled; deep inheritance hierarchies are rigid and hard to change."
        ],
        [
          "When is a dict better than a class?",
          "For read-only or pass-through data (e.g. parsed JSON) with no rules or behaviour to protect — a class adds ceremony without buying safety."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "2.4",
      "module": "M2",
      "moduleTitle": "Python Fluency — The Language Skillzify Teaches & Uses",
      "title": "OOP Inheritance & Polymorphism — Sharing Behaviour Safely",
      "sub": "Is-a relationships without the spaghetti",
      "mins": 35,
      "track": "backend",
      "url": "lessons/2-4.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=zUg2sl1FMbI",
        "title": "Python Full Course for Beginners | Complete Python Course",
        "channel": "YouTube"
      },
      "subtopics": [
        "1. Inheritance shares behaviour",
        "2. Polymorphism: one call, many behaviours",
        "3. super and method resolution",
        "4. Composition over inheritance"
      ],
      "checks": [
        [
          "What is polymorphism, in the context of the code above?",
          "Calling render on different exercise objects produces each class's own output through one shared interface — the caller never checks the type."
        ],
        [
          "Why is composition often preferred over deep inheritance?",
          "Inheritance couples subclasses tightly to parents, so changes ripple; composition assembles behaviour from parts that can be swapped independently."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "2.5",
      "module": "M2",
      "moduleTitle": "Python Fluency — The Language Skillzify Teaches & Uses",
      "title": "Comprehensions & Decorators — Pythonic Power Tools",
      "sub": "Shorter code that says more",
      "mins": 30,
      "track": "backend",
      "url": "lessons/2-5.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=zUg2sl1FMbI",
        "title": "Python Full Course for Beginners | Complete Python Course",
        "channel": "YouTube"
      },
      "subtopics": [
        "1. Comprehensions: collections in one line",
        "2. When not to use them",
        "3. Decorators wrap functions",
        "4. Where you will meet them"
      ],
      "checks": [
        [
          "When is a comprehension the wrong tool?",
          "When the logic needs multiple statements, side effects, or error handling — then a plain loop is clearer and correct."
        ],
        [
          "What must a decorator wrapper do to preserve the wrapped function's behaviour?",
          "Accept *args and **kwargs, call the original, and return its result — otherwise arguments or return values are lost."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "2.6",
      "module": "M2",
      "moduleTitle": "Python Fluency — The Language Skillzify Teaches & Uses",
      "title": "Generators, JSON & File Pipelines",
      "sub": "The exact skills inside flowchart-gen.py",
      "mins": 45,
      "track": "backend",
      "url": "lessons/2-6.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=bD05uGo_sVI",
        "title": "Python Tutorial: Generators - How to use them and the benefits you receive",
        "channel": "Corey Schafer"
      },
      "subtopics": [
        "1. Generators: values on demand",
        "2. JSON and files: Python's border with every other system",
        "3. Trace the real pipeline: code → flowchart"
      ],
      "checks": [
        [
          "Why use yield instead of returning a list when scanning a large file?",
          "The generator produces items one at a time, so memory stays flat regardless of input size; a returned list materialises everything at once."
        ],
        [
          "What does the with statement guarantee for file work?",
          "The file is closed when the block exits — including when an exception is raised inside it."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "2.7",
      "module": "M2",
      "moduleTitle": "Python Fluency — The Language Skillzify Teaches & Uses",
      "title": "File Handling — Reading, Writing, and JSON Pipelines",
      "sub": "Programs that remember things",
      "mins": 30,
      "track": "backend",
      "url": "lessons/2-7.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=rfscVS0vtbw",
        "title": "Learn Python - Full Course for Beginners [Tutorial]",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Open, use, close — automatically",
        "2. Text, lines and structured data",
        "3. Paths with pathlib",
        "4. Large files stream, small files load"
      ],
      "checks": [
        [
          "Why is with open(...) better than open() followed by close()?",
          "with guarantees the file closes even if an exception is raised in between; a manual close is skipped when an error jumps out of the block."
        ],
        [
          "Why specify encoding=utf-8 explicitly?",
          "The default encoding varies by platform, so a file written on Windows can fail to read on Linux. Explicit utf-8 makes behaviour identical everywhere."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "2.8",
      "module": "M2",
      "moduleTitle": "Python Fluency — The Language Skillzify Teaches & Uses",
      "title": "Error Handling — Exceptions, EAFP, and Clean Failures",
      "sub": "Code that fails gracefully instead of crashing",
      "mins": 25,
      "track": "backend",
      "url": "lessons/2-8.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=rfscVS0vtbw",
        "title": "Learn Python - Full Course for Beginners [Tutorial]",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Exceptions are the error system",
        "2. try/except/else/finally",
        "3. EAFP: easier to ask forgiveness",
        "4. Raising useful errors"
      ],
      "checks": [
        [
          "Why catch FileNotFoundError instead of a bare except?",
          "A bare except catches everything, including typos and interrupts, hiding real bugs. Catching the specific error keeps other failures visible."
        ],
        [
          "What is EAFP and why does Python prefer it?",
          "Easier to ask forgiveness than permission: try the operation and handle the failure. It avoids check-then-act races and reads more directly."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "2.9",
      "module": "M2",
      "moduleTitle": "Python Fluency — The Language Skillzify Teaches & Uses",
      "title": "Testing Basics — Pytest and the Habit of Proof",
      "sub": "Prove it works, then change it fearlessly",
      "mins": 30,
      "track": "backend",
      "url": "lessons/2-9.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=cHYq1MRoyI0",
        "title": "Pytest Tutorial – How to Test Python Code",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Why test at all",
        "2. Pytest in five minutes",
        "3. Parametrize the cases",
        "4. What to test, and what not to"
      ],
      "checks": [
        [
          "Why test boundary values like 49 and 50 specifically?",
          "Off-by-one errors live at boundaries. A test that only checks 85 can pass while the boundary logic is wrong."
        ],
        [
          "What does pytest.mark.parametrize buy you?",
          "It runs one test function over many inputs, so edge cases get coverage without duplicating test code."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "2.10",
      "module": "M2",
      "moduleTitle": "Python Fluency — The Language Skillzify Teaches & Uses",
      "title": "NumPy & Pandas Basics",
      "sub": "Just enough data tooling for the AI module",
      "mins": 40,
      "track": "backend",
      "url": "lessons/2-10.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=r-uOLxNrNk8",
        "title": "Data Analysis with Python - Full Course for Beginners (Numpy, Pandas, Matplotlib, Seaborn)",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. NumPy: lists with superpowers",
        "2. Embeddings are just arrays",
        "3. Pandas: tables with labels"
      ],
      "checks": [
        [
          "Why is scores.mean() preferred over a hand-written loop?",
          "It's vectorised: the operation runs over the whole array in compiled code — faster, shorter, and less error-prone than manual accumulation."
        ],
        [
          "What is an embedding, in array terms?",
          "A vector — a fixed-length NumPy-style array of numbers representing a text's meaning, so similarity becomes array arithmetic."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "2.11",
      "module": "M2",
      "moduleTitle": "Python Fluency — The Language Skillzify Teaches & Uses",
      "title": "Python OOP Deep — Dunder Methods, Dataclasses & Protocols",
      "sub": "Classes that behave like built-ins",
      "mins": 35,
      "track": "backend",
      "url": "lessons/2-11.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=QzA7TrsX_Ao",
        "title": "The Dataclass Hack That Saves Hours of Coding - Advanced OOPS",
        "channel": "SP Learning Labs"
      },
      "subtopics": [
        "1. Dunder methods: the protocol behind the syntax",
        "2. Dataclasses: kill the boilerplate",
        "3. Protocols: duck typing, checked",
        "4. Properties: attributes with a gatekeeper"
      ],
      "checks": [
        [
          "What happens when you define __eq__ but not __hash__?",
          "Instances become unhashable, so they cannot be used in sets or as dict keys. Defining __eq__ sets __hash__ to None unless you also define it (or use a frozen dataclass)."
        ],
        [
          "Why must mutable dataclass defaults use default_factory?",
          "A bare list default would be shared by every instance, so appending to one object's list would change them all. default_factory creates a fresh value per instance."
        ],
        [
          "How does a Protocol differ from an abstract base class?",
          "A protocol is structural: any class with the right methods satisfies it without inheriting anything. An ABC requires explicit subclassing. Protocols formalise duck typing."
        ],
        [
          "When is a property worth adding over a plain attribute?",
          "When an invariant must hold — validation, clamping, or a computed value — or when you need to add that logic later without changing callers."
        ]
      ],
      "cards": [
        [
          "Dunder method",
          "A double-underscore method like __len__ or __eq__ that Python calls for operators and built-ins, letting classes behave like built-in types."
        ],
        [
          "__repr__",
          "The unambiguous developer representation of an object, ideally valid Python that recreates it."
        ],
        [
          "Dataclass",
          "A class decorated with @dataclass that generates __init__, __repr__ and __eq__ from annotated fields."
        ],
        [
          "frozen dataclass",
          "An immutable dataclass whose instances are hashable and cannot be modified after creation."
        ],
        [
          "Protocol",
          "A structural interface from typing: any class with the declared methods satisfies it, with no inheritance required."
        ],
        [
          "Property",
          "An attribute that runs getter and setter code on access, enforcing invariants behind plain attribute syntax."
        ]
      ],
      "striver": null,
      "leetcode": null
    },
    {
      "id": "3.1",
      "module": "M3",
      "moduleTitle": "Backend — Node.js & Express, Properly",
      "title": "Node.js & the Event Loop",
      "sub": "Server-side JavaScript and how it stays fast",
      "mins": 40,
      "track": "backend",
      "url": "lessons/3-1.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=Llkra_968o4",
        "title": "Node.js Explained | V8 Engine, Event Loop & Asynchronous Programming",
        "channel": "Backend Development"
      },
      "subtopics": [
        "1. Node: JavaScript outside the browser",
        "2. The event loop: one thread, no waiting around",
        "3. npm and package.json: the project's contract"
      ],
      "checks": [
        [
          "Why can one Node process serve many users if it is single-threaded?",
          "Because request handling is mostly waiting on I/O. Async operations register callbacks and free the thread; the event loop runs each callback when its result arrives."
        ],
        [
          "What kind of code is dangerous in a Node handler, and why?",
          "Long synchronous CPU work — it occupies the single thread and blocks every other request until it finishes."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "3.2",
      "module": "M3",
      "moduleTitle": "Backend — Node.js & Express, Properly",
      "title": "Express: Routing & Middleware",
      "sub": "How server.js turns URLs into responses",
      "mins": 45,
      "track": "backend",
      "url": "lessons/3-2.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=z0AmQRibsVk",
        "title": "Express.js & Middleware Architecture Masterclass (From Raw HTTP to Scalable APIs)",
        "channel": "Express.js Masterclass"
      },
      "subtopics": [
        "1. The request/response cycle",
        "2. Middleware: the chain every request walks",
        "3. Static + API in one server"
      ],
      "checks": [
        [
          "What happens if a middleware never calls next() and never sends a response?",
          "The request hangs until timeout — the chain stops and no handler runs."
        ],
        [
          "Why does express.json() need to be registered before the routes that read req.body?",
          "Middleware runs in registration order; the body must be parsed before any handler tries to use it."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "3.3",
      "module": "M3",
      "moduleTitle": "Backend — Node.js & Express, Properly",
      "title": "Middleware Deep — The Pipeline Between Request and Handler",
      "sub": "Every request passes through a chain",
      "mins": 35,
      "track": "backend",
      "url": "lessons/3-3.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=z0AmQRibsVk",
        "title": "Express.js & Middleware Architecture Masterclass (From Raw HTTP to Scalable APIs)",
        "channel": "Express.js Masterclass"
      },
      "subtopics": [
        "1. Middleware is a chain of functions",
        "2. Built-in and third-party middleware",
        "3. Order is the whole game",
        "4. Error middleware has four arguments"
      ],
      "checks": [
        [
          "What happens if a middleware never calls next() and never sends a response?",
          "The request hangs until the client times out. Every middleware must either respond or call next()."
        ],
        [
          "Why does middleware order matter?",
          "Middleware runs in registration order, so a parser registered after a route never runs for it, and an auth check after a route leaves that route unprotected."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "3.4",
      "module": "M3",
      "moduleTitle": "Backend — Node.js & Express, Properly",
      "title": "REST API Design & Validation",
      "sub": "Designing endpoints other code can rely on",
      "mins": 40,
      "track": "backend",
      "url": "lessons/3-4.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=BzpcPezUFQw",
        "title": "REST API Design: Everything You Need to Build APIs Clients Can Trust",
        "channel": "Sokurenko"
      },
      "subtopics": [
        "1. REST in practice",
        "2. One error shape, everywhere",
        "3. Validation: the server trusts nobody"
      ],
      "checks": [
        [
          "Why is client-side validation never sufficient?",
          "Clients are bypassable — anyone can call the API directly with curl or a script. Only server-side checks form a real boundary."
        ],
        [
          "Why keep one error shape across all routes?",
          "So client code handles every failure with a single code path instead of per-route special cases."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "3.5",
      "module": "M3",
      "moduleTitle": "Backend — Node.js & Express, Properly",
      "title": "Auth & JWT — Sessions, Tokens, and Protected Routes",
      "sub": "Proving who you are, statelessly",
      "mins": 35,
      "track": "backend",
      "url": "lessons/3-5.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=zbCu-Hm3LEc",
        "title": "JWT Authentication in Express.js | Login & Protected Route",
        "channel": "YouTube"
      },
      "subtopics": [
        "1. Authentication vs authorisation",
        "2. How a JWT works",
        "3. Passwords and tokens, done right",
        "4. Why Skillzify uses Firebase Auth"
      ],
      "checks": [
        [
          "Why must a JWT payload never contain a password or secret?",
          "The payload is only base64-encoded, not encrypted — anyone holding the token can read it. Only the signature is secret-protected."
        ],
        [
          "What does jwt.verify do that simply decoding the token does not?",
          "It checks the signature against the server secret and the expiry, proving the token was issued by the server and is still valid."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "3.6",
      "module": "M3",
      "moduleTitle": "Backend — Node.js & Express, Properly",
      "title": "Protecting Your API: Rate Limits, Caps & Secrets",
      "sub": "The defensive layer inside Skillzify's server.js",
      "mins": 45,
      "track": "backend",
      "url": "lessons/3-6.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=KmpLRfzBGrE",
        "title": "9. How to Secure a Public REST API | Best Practices & System Design Interview",
        "channel": "Coding Vibes"
      },
      "subtopics": [
        "1. Two different problems, two different tools",
        "2. Secrets live on the server. Full stop.",
        "3. Know the honest limits"
      ],
      "checks": [
        [
          "Rate limit vs daily cap — what different abuse does each stop?",
          "Rate limits stop bursts and scripts in short windows; daily caps stop slow, sustained cost drain across a day per user."
        ],
        [
          "A teammate suggests putting the Gemini key in the frontend 'just for the demo'. Your answer?",
          "No — anything in browser code is public. The key goes in server env vars; the browser calls your API, the server calls Gemini."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "3.7",
      "module": "M3",
      "moduleTitle": "Backend — Node.js & Express, Properly",
      "title": "Error Handling & Logging — When Things Go Wrong in Production",
      "sub": "Fail loudly to yourself, kindly to the user",
      "mins": 30,
      "track": "backend",
      "url": "lessons/3-7.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=BzpcPezUFQw",
        "title": "REST API Design: Everything You Need to Build APIs Clients Can Trust",
        "channel": "Sokurenko"
      },
      "subtopics": [
        "1. Errors need a shape",
        "2. One error handler, everywhere",
        "3. Logging that helps at 2am",
        "4. Graceful degradation"
      ],
      "checks": [
        [
          "Why must a 500 response never include err.stack?",
          "A stack trace reveals file paths, library versions and internals that help an attacker. The client needs a generic message; the detail belongs in server logs."
        ],
        [
          "What makes a log line useful when debugging production?",
          "Timestamp, level, request id, route and user id — enough context to find the failing request and reconstruct what happened."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "3.8",
      "module": "M3",
      "moduleTitle": "Backend — Node.js & Express, Properly",
      "title": "Testing APIs — Postman, curl, and Automated Checks",
      "sub": "Prove the endpoint before the frontend exists",
      "mins": 30,
      "track": "backend",
      "url": "lessons/3-8.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=wEOLZq-7DYs",
        "title": "Learn Postman for API Testing (Step-by-Step Tutorial)",
        "channel": "YouTube"
      },
      "subtopics": [
        "1. Test the API before the UI",
        "2. A request is method, URL, headers, body",
        "3. What to check on every endpoint",
        "4. From manual to automated"
      ],
      "checks": [
        [
          "Why test an API directly instead of only through the frontend?",
          "It isolates the fault: if the endpoint works in Postman but not in the UI, the bug is in the frontend; if it fails in Postman too, it is the server."
        ],
        [
          "What four things define an API request?",
          "Method, URL, headers, and body. Getting any one wrong is the most common cause of a failing call."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "3.9",
      "module": "M3",
      "moduleTitle": "Backend — Node.js & Express, Properly",
      "title": "REST vs GraphQL — Choosing How Clients Ask for Data",
      "sub": "One endpoint per resource, or one endpoint for everything",
      "mins": 30,
      "track": "backend",
      "url": "lessons/3-9.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=QhWmL7mbKbY",
        "title": "GraphQL vs Rest API - why graphql?",
        "channel": "YouTube"
      },
      "subtopics": [
        "1. REST: resources and verbs",
        "2. GraphQL: the client asks for exactly what it needs",
        "3. The real trade-offs",
        "4. The interview answer"
      ],
      "checks": [
        [
          "What problem does GraphQL solve that REST does not?",
          "Over-fetching and under-fetching: the client requests exactly the fields it needs, nested, in a single request instead of several round trips."
        ],
        [
          "What does GraphQL lose compared to REST?",
          "Free HTTP caching, simple status codes, and simplicity — it needs a schema, resolvers, and query-depth protection against abuse."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "3.10",
      "module": "M3",
      "moduleTitle": "Backend — Node.js & Express, Properly",
      "title": "Node Testing Deep — node:test, Supertest & Coverage",
      "sub": "Test the API without a browser",
      "mins": 35,
      "track": "backend",
      "url": "lessons/3-10.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=IvO0fJ_Iff8",
        "title": "Testing APIs with Vitest & Supertest | Node.js Backend #9",
        "channel": "RKTech Learn"
      },
      "subtopics": [
        "1. node:test: the runner you already have",
        "2. Supertest: HTTP calls without a network",
        "3. Mocking the outside world",
        "4. Coverage: finding the untested branches"
      ],
      "checks": [
        [
          "Why must the app be exported separately from listen for Supertest?",
          "Supertest imports the app and drives it in-process without binding a port. If importing the file also starts a server, tests collide on ports and cannot run in parallel."
        ],
        [
          "What does node:test give you that needs no installation?",
          "A built-in runner with test(), describe() and mocking, discovered by node --test — part of the runtime since Node 18, so CI needs no extra dependencies."
        ],
        [
          "Why mock the Gemini call in route tests?",
          "The real call is slow, costs quota and returns varying text, making tests flaky. A stub returns a fixed reply so the test checks your route's behaviour deterministically."
        ],
        [
          "How should a coverage report be read?",
          "As a map of blind spots — untested error branches and edge cases — not as a score to maximise. The goal is tests that fail when risky behaviour breaks."
        ]
      ],
      "cards": [
        [
          "node:test",
          "Node's built-in test runner (since Node 18): test(), describe() and mocking with no dependencies, run via node --test."
        ],
        [
          "Supertest",
          "A library that drives an Express app in-process with fake HTTP requests, asserting on status and body without a real server."
        ],
        [
          "App/listen split",
          "Exporting the Express app separately from the listen call so tests can import it without binding a port."
        ],
        [
          "Stub",
          "A fake implementation of an external dependency returning fixed results, used to keep tests deterministic."
        ],
        [
          "mock.fn()",
          "node:test's built-in mock function for replacing dependencies and asserting how they were called."
        ],
        [
          "Coverage report",
          "A listing of which lines and branches tests executed — used to find untested risky code, not as a target."
        ]
      ],
      "striver": null,
      "leetcode": null
    },
    {
      "id": "4.1",
      "module": "M4",
      "moduleTitle": "Data & Auth — Firebase, plus SQL",
      "title": "Firebase Authentication",
      "sub": "Email/password auth across web and Android",
      "mins": 40,
      "track": "database",
      "url": "lessons/4-1.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=6kgitEWTxac",
        "title": "React Firebase Authentication Crash Course With Context API and Protected Routes For Beginners",
        "channel": "React Firebase Authentication"
      },
      "subtopics": [
        "1. What Firebase Auth actually does",
        "2. Auth state is a stream, not a snapshot",
        "3. The public API key paradox"
      ],
      "checks": [
        [
          "Why is checking firebase.auth().currentUser once on page load unreliable?",
          "Session restoration is asynchronous; currentUser can be null at load even for a signed-in user. onAuthStateChanged reports the state once it is actually known."
        ],
        [
          "If the Firebase web API key is public, what actually secures the data?",
          "Firestore security rules (per-user access control) plus authorised domains in the console. The key identifies the project; rules enforce access."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "4.2",
      "module": "M4",
      "moduleTitle": "Data & Auth — Firebase, plus SQL",
      "title": "Firestore Data Modelling",
      "sub": "Documents, collections, and the users/{uid} design",
      "mins": 45,
      "track": "database",
      "url": "lessons/4-2.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=lW7DWV2jST0",
        "title": "Cloud Firestore Data Modeling (Google I/O'19)",
        "channel": "Firebase"
      },
      "subtopics": [
        "1. The mental model: documents in collections",
        "2. One document per user: Skillzify's core decision",
        "3. Design rules of thumb"
      ],
      "checks": [
        [
          "Why does Skillzify store all of a user's progress in a single document?",
          "The app always loads the whole user state at sign-in — one read, no queries — and web/Android sync the identical document."
        ],
        [
          "Name one workload where the one-document design fails.",
          "Anything unbounded or globally shared: ever-growing arrays hit the 1 MiB doc limit, and many writers on one doc (like a global counter) hit write contention."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "4.3",
      "module": "M4",
      "moduleTitle": "Data & Auth — Firebase, plus SQL",
      "title": "Firestore Queries & Indexes",
      "sub": "Where, order, paginate — and the index error that teaches you the rules",
      "mins": 30,
      "track": "database",
      "url": "lessons/4-3.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=lW7DWV2jST0",
        "title": "Cloud Firestore Data Modeling (Google I/O'19)",
        "channel": "Firebase"
      },
      "subtopics": [
        "1. Queries are built from filters, order and limits",
        "2. The composite index rule",
        "3. What queries cannot do"
      ],
      "checks": [
        [
          "Why does Firestore refuse a query that combines a filter on one field with an order on another?",
          "No index exists for that field combination. Single-field indexes are automatic, but compound combinations need a composite index, which the error message links you to create."
        ],
        [
          "Why is startAfter better than offset for pagination?",
          "startAfter resumes from a cursor document, while offset still reads and bills for every document it skips."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "4.4",
      "module": "M4",
      "moduleTitle": "Data & Auth — Firebase, plus SQL",
      "title": "Sync & Merge Rules",
      "sub": "How web and Android share one truth without losing XP",
      "mins": 50,
      "track": "database",
      "url": "lessons/4-4.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=1Fg7cwkmj_c",
        "title": "Getting started with Cloud Firestore on Apple platforms",
        "channel": "Firebase"
      },
      "subtopics": [
        "1. The problem: two devices, one document, offline gaps",
        "2. The fix: merge per field, by meaning",
        "3. The general method"
      ],
      "checks": [
        [
          "Why not use last-write-wins for the whole progress document?",
          "Because devices diverge offline; whole-document last-write destroys the losing device's accumulated progress. Per-field merges preserve both sides' facts."
        ],
        [
          "Why must merge rules be identical in the web and Android code?",
          "Sync is a two-party protocol — if each side merges differently, repeated syncs can oscillate or silently drop data depending on which device syncs last."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "4.5",
      "module": "M4",
      "moduleTitle": "Data & Auth — Firebase, plus SQL",
      "title": "Offline Persistence",
      "sub": "Your app keeps working when the network does not",
      "mins": 25,
      "track": "database",
      "url": "lessons/4-5.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=lW7DWV2jST0",
        "title": "Cloud Firestore Data Modeling (Google I/O'19)",
        "channel": "Firebase"
      },
      "subtopics": [
        "1. Turning the cache on",
        "2. Writes queue, they do not fail",
        "3. Knowing what is cached and what is confirmed"
      ],
      "checks": [
        [
          "What happens to a Firestore write made while the device is offline?",
          "It is queued locally, applied to the cache immediately so the UI updates, and sent to the server in order when the connection returns."
        ],
        [
          "How can your UI tell cached data apart from server-confirmed data?",
          "Snapshot metadata: fromCache says the data came from the local cache, and hasPendingWrites says local writes have not reached the server yet."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "4.6",
      "module": "M4",
      "moduleTitle": "Data & Auth — Firebase, plus SQL",
      "title": "Security Rules Deep",
      "sub": "Rules are your backend — write them like code, test them like code",
      "mins": 35,
      "track": "database",
      "url": "lessons/4-6.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=sw1Uy3zwsLs",
        "title": "Secure your Firebase app in 100 Seconds!",
        "channel": "Fireship"
      },
      "subtopics": [
        "1. Rules decide every request, allow or deny",
        "2. Validate the shape, not just the identity",
        "3. Rules are not filters"
      ],
      "checks": [
        [
          "Why does a query fail entirely instead of returning only the allowed documents?",
          "Rules are not filters. If a query could match a denied document, Firestore rejects the whole query — queries must be scoped to documents the requester may read."
        ],
        [
          "What is the difference between resource.data and request.resource.data?",
          "resource.data is the document already stored; request.resource.data is the document as it would look after the write being checked."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "4.7",
      "module": "M4",
      "moduleTitle": "Data & Auth — Firebase, plus SQL",
      "title": "Data Modelling Patterns",
      "sub": "Denormalise on purpose, fan out on write, and know when to stop",
      "mins": 30,
      "track": "database",
      "url": "lessons/4-7.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=o7d5Zeic63s",
        "title": "Maps, Arrays and Subcollections, Oh My! | Get to know Cloud Firestore #4",
        "channel": "Firebase"
      },
      "subtopics": [
        "1. Embed or subcollection: the one question",
        "2. Denormalise on purpose",
        "3. Counters and hot documents"
      ],
      "checks": [
        [
          "When should data go in a subcollection instead of inside the parent document?",
          "When it grows without bound or needs independent querying and pagination — embedding it would eventually hit the 1 MiB document limit."
        ],
        [
          "Why do high-traffic counters use shards instead of one document?",
          "One document accepts roughly one write per second. Shards spread concurrent writes across many documents, and the total is summed on read."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "4.8",
      "module": "M4",
      "moduleTitle": "Data & Auth — Firebase, plus SQL",
      "title": "SQL Joins & Aggregates",
      "sub": "The two ideas that make relational databases worth learning",
      "mins": 30,
      "track": "database",
      "url": "lessons/4-8.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=Hl4NZB1XR9c",
        "title": "SQL Basics Tutorial for Beginners",
        "channel": "TechTFQ"
      },
      "subtopics": [
        "1. Joins stitch tables at read time",
        "2. Aggregates answer questions about groups",
        "3. The same schema, two shapes"
      ],
      "checks": [
        [
          "What is the difference between INNER JOIN and LEFT JOIN?",
          "INNER JOIN keeps only rows with a match on both sides; LEFT JOIN keeps every row from the left table and fills unmatched columns with null."
        ],
        [
          "WHERE vs HAVING — which filters groups, and why does the order matter?",
          "HAVING filters groups after GROUP BY and aggregation; WHERE filters individual rows before grouping, so it cannot use aggregate results."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "4.9",
      "module": "M4",
      "moduleTitle": "Data & Auth — Firebase, plus SQL",
      "title": "Security Rules + the SQL Contrast",
      "sub": "firestore.rules, and the same schema in PostgreSQL",
      "mins": 50,
      "track": "database",
      "url": "lessons/4-9.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=C999kVz96_w",
        "title": "Security Rules for Firestore - Firebase Firestore",
        "channel": "Philipp Lackner"
      },
      "subtopics": [
        "1. Rules are the real backend security",
        "2. The same world in SQL",
        "3. Choosing, honestly"
      ],
      "checks": [
        [
          "Trace it: user A (uid 'a') requests users/b while signed in. Allowed?",
          "Denied. request.auth.uid ('a') != uid in path ('b'), so the allow condition fails."
        ],
        [
          "Where does access control live in a SQL stack vs Firestore?",
          "SQL: in your server code — every query must scope to the session user. Firestore: in declarative rules evaluated server-side by Google on every request."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "5.1",
      "module": "M5",
      "moduleTitle": "AI Engineering — From Gemini Calls to RAG Systems ★",
      "title": "How LLMs Actually Work",
      "sub": "Tokens, context, temperature — no magic",
      "mins": 40,
      "track": "ai",
      "url": "lessons/5-1.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=xFFHlcbNHuc",
        "title": "How LLMs Actually Work (It's Not What You Think)",
        "channel": "Codex Diary"
      },
      "subtopics": [
        "1. A model predicts the next token. That's the whole trick.",
        "2. The context window",
        "3. Temperature and friends"
      ],
      "checks": [
        [
          "Why does an LLM hallucinate, in one honest sentence?",
          "It generates statistically plausible text, not retrieved facts — when knowledge runs out, plausible-sounding invention is the natural continuation."
        ],
        [
          "Your chat app 'remembers' yesterday's conversation. What's really happening?",
          "The app stores the history and re-sends it (or a summary) inside the context window on each new call; the model itself is stateless."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "5.2",
      "module": "M5",
      "moduleTitle": "AI Engineering — From Gemini Calls to RAG Systems ★",
      "title": "Tokens & Context Windows",
      "sub": "The unit everything in LLM pricing and prompting is measured in",
      "mins": 25,
      "track": "ai",
      "url": "lessons/5-2.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=KXY9zHtpU6o",
        "title": "How LLMs Work: I Traced One Prompt, Token by Token!",
        "channel": "DIY Smart Code"
      },
      "subtopics": [
        "1. What a token actually is",
        "2. The context window is a hard wall",
        "3. Counting before you send"
      ],
      "checks": [
        [
          "Why is character count a bad way to estimate token cost?",
          "Tokenizers split by frequency: common words are one token, rare words and code splinter into several, so identical lengths can cost very different token counts."
        ],
        [
          "What happens when prompt plus reply exceed the context window?",
          "The request fails. There is no graceful overflow, so you must count and trim before sending."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "5.3",
      "module": "M5",
      "moduleTitle": "AI Engineering — From Gemini Calls to RAG Systems ★",
      "title": "Calling the Gemini API",
      "sub": "REST from server.js — requests, streaming, structured output",
      "mins": 50,
      "track": "ai",
      "url": "lessons/5-3.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=nk_rP3Y2_r8",
        "title": "Build an AI Chatbot Using Gemini API with HTML, CSS & JavaScript | Step-by-Step Tutorial",
        "channel": "NextGenCoder"
      },
      "subtopics": [
        "1. The shape of a call",
        "2. Streaming: answer as it's written",
        "3. Structured output: JSON you can trust (mostly)"
      ],
      "checks": [
        [
          "Where does the Gemini API key appear in a correct Skillzify-style call, and where never?",
          "Server-side only — concatenated into the request in server.js from env vars. Never in browser code, where view-source would expose it."
        ],
        [
          "Why parse model JSON defensively even when you requested JSON output?",
          "Models occasionally return malformed, truncated or prose-wrapped output; unguarded JSON.parse turns a model hiccup into a server crash."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "5.4",
      "module": "M5",
      "moduleTitle": "AI Engineering — From Gemini Calls to RAG Systems ★",
      "title": "Structured Output & Streaming",
      "sub": "Make the model return JSON you can trust, and show it arriving live",
      "mins": 30,
      "track": "ai",
      "url": "lessons/5-4.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=8buYgH3T8XA",
        "title": "Stop Gambling with AI Responses: How to Get Exactly What You Need Every Time",
        "channel": "Dan Vega"
      },
      "subtopics": [
        "1. Structured output: a contract, not a hope",
        "2. Streaming: show work as it arrives",
        "3. The partial-JSON problem"
      ],
      "checks": [
        [
          "Why is a response schema better than asking for JSON in the prompt text?",
          "The schema constrains generation itself, so the output is guaranteed valid JSON in the declared shape. A prompt instruction is a suggestion the model can ignore or decorate."
        ],
        [
          "Why can you not parse streamed JSON until the stream finishes?",
          "Mid-stream the JSON is incomplete and invalid. You stream raw text for display and parse only the completed string."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "5.5",
      "module": "M5",
      "moduleTitle": "AI Engineering — From Gemini Calls to RAG Systems ★",
      "title": "Prompt Engineering Patterns",
      "sub": "Few-shot, roles, and Skillzify's 15 modes as case studies",
      "mins": 45,
      "track": "ai",
      "url": "lessons/5-5.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=U6nxdHQkhzI",
        "title": "Master Prompt Engineering in 9 Minutes | AI Builder Series EP 02",
        "channel": "AI Builder"
      },
      "subtopics": [
        "1. The anatomy of a prompt that works",
        "2. Patterns hiding in Skillzify's 15 modes",
        "3. Chain-of-thought, used carefully"
      ],
      "checks": [
        [
          "What is few-shot prompting and why is it so effective for format consistency?",
          "Including a few input→output examples in the prompt; the model pattern-matches the demonstrated format far more reliably than it follows format descriptions."
        ],
        [
          "Why does Skillzify's Ask AI mode forbid giving the final answer?",
          "Because the product is learning, not answers — the restraint is the feature. The rule lives in the prompt because the model would otherwise helpfully solve it."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "5.6",
      "module": "M5",
      "moduleTitle": "AI Engineering — From Gemini Calls to RAG Systems ★",
      "title": "Function & Tool Calling",
      "sub": "Give the model hands: declare tools, run them, return the result",
      "mins": 30,
      "track": "ai",
      "url": "lessons/5-6.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=ttcX0UeCiTY",
        "title": "Tool Calling Explained | Tool calling without LangChain | Practical production ready demo | 2026",
        "channel": "CodeWithAbby"
      },
      "subtopics": [
        "1. The model does not run code — it asks you to",
        "2. The loop, step by step",
        "3. Trust boundaries matter"
      ],
      "checks": [
        [
          "Who actually executes a function the model calls?",
          "Your server code. The model only returns a structured call request; you run the function and send the result back for the final answer."
        ],
        [
          "Why do write tools need server-side validation even though the model chose the arguments?",
          "Arguments can be influenced by prompt injection in user input, so every call must be validated and authorised like any untrusted API request."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "5.7",
      "module": "M5",
      "moduleTitle": "AI Engineering — From Gemini Calls to RAG Systems ★",
      "title": "Embeddings & RAG",
      "sub": "Grounding answers in your own content",
      "mins": 55,
      "track": "ai",
      "url": "lessons/5-7.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=dR__vjduUbU",
        "title": "RAG Explained for Beginners: Build a Support Bot That Answers From Your Docs (Real Python)",
        "channel": "RAG Explained"
      },
      "subtopics": [
        "1. Embeddings: meaning as numbers",
        "2. The RAG pipeline",
        "3. RAG vs fine-tuning vs long prompt — the decision"
      ],
      "checks": [
        [
          "Why chunk documents before embedding them?",
          "Retrieval must return specific, relevant passages; embedding whole documents averages their meaning away and wastes context window on irrelevant text."
        ],
        [
          "A client wants the model to 'learn our 500-page manual'. RAG or fine-tune?",
          "RAG — the need is factual, changing, citable knowledge. Fine-tuning teaches behaviour/style, not updatable facts."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "5.8",
      "module": "M5",
      "moduleTitle": "AI Engineering — From Gemini Calls to RAG Systems ★",
      "title": "Vector DBs & Prompt Caching",
      "sub": "Retrieval that scales, and caching that cuts the bill",
      "mins": 30,
      "track": "ai",
      "url": "lessons/5-8.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=GnHYoBKX0aY",
        "title": "Vector Databases and Embeddings Explained (2026 Tutorial)",
        "channel": "@are_agi"
      },
      "subtopics": [
        "1. Embeddings turn meaning into geometry",
        "2. Chunking decides retrieval quality",
        "3. Prompt caching: pay once for repeated context"
      ],
      "checks": [
        [
          "What does cosine similarity measure between two embedding vectors?",
          "The angle between them: near 1 means the texts are semantically close, near 0 means unrelated — it is the ranking signal for retrieval."
        ],
        [
          "Why chunk documents instead of embedding whole lessons?",
          "A focused chunk matches a query precisely; a whole lesson dilutes the match and returns vague context. Chunks also keep retrieved context small and cheap."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "5.9",
      "module": "M5",
      "moduleTitle": "AI Engineering — From Gemini Calls to RAG Systems ★",
      "title": "Reliability: Failover, Key Rotation & Cost",
      "sub": "The engineering that keeps a free-tier AI product alive",
      "mins": 45,
      "track": "ai",
      "url": "lessons/5-9.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=yFokwfBrklg",
        "title": "What Happens When Your API Has No Rate Limit?",
        "channel": "API Rate Limiting"
      },
      "subtopics": [
        "1. Everything fails; design the order of falling back",
        "2. Key rotation: quota as a pool",
        "3. Cost estimation: arithmetic before architecture"
      ],
      "checks": [
        [
          "Why is a weaker model's answer usually better than an error?",
          "The feature's value is the answer; a slightly lower-quality successful response preserves the user experience, and you can log and tune quality separately from availability."
        ],
        [
          "Caps and key rotation solve different problems — which is which?",
          "Caps bound demand per user (cost/abuse control). Rotation expands supply (pooled quota across keys). You need both: pooled supply is still finite."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "5.10",
      "module": "M5",
      "moduleTitle": "AI Engineering — From Gemini Calls to RAG Systems ★",
      "title": "Guardrails & Evals",
      "sub": "Testing AI like you mean it",
      "mins": 45,
      "track": "ai",
      "url": "lessons/5-10.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=qP5tBuRBnhM",
        "title": "Databricks GenAI Course #16: LLM Guardrails: Hallucination, Toxicity, PII, and Prompt Injection",
        "channel": "StackLessons"
      },
      "subtopics": [
        "1. Guardrails: fences at the borders",
        "2. Evals: a test suite for behaviour",
        "3. The loop that makes AI products good"
      ],
      "checks": [
        [
          "Why can't prompts alone be your guardrails?",
          "Prompts are advisory to the model — injection and edge cases leak through. Enforce at the borders: input validation, output validation, and behavioural tests."
        ],
        [
          "What makes an eval set trustworthy over time?",
          "It's fixed (so scores are comparable across changes) and grows from real logged failures (so it stays representative of actual usage)."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "5.11",
      "module": "M5",
      "moduleTitle": "AI Engineering — From Gemini Calls to RAG Systems ★",
      "title": "AI Agents & Tool Use — Beyond Single Prompts",
      "sub": "From answering to doing",
      "mins": 40,
      "track": "ai",
      "url": "lessons/5-11.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=8C4CpTa3rEw",
        "title": "Build Your Own AI Agent in Python with the Claude API (Tool Use, Agent Loop, MCP) | AI Explained #11",
        "channel": "MyWebUniversity"
      },
      "subtopics": [
        "1. From single prompt to agent loop",
        "2. Tools: giving the model hands",
        "3. Guardrails: the loop needs a fence",
        "4. Multi-step reliability: errors compound"
      ],
      "checks": [
        [
          "What are the three phases of the agent loop?",
          "Plan: the model decides the next step. Act: it requests a tool call, which your code executes. Observe: the result returns to the model, which plans again until the goal is met or a limit stops it."
        ],
        [
          "Who actually executes a tool the model requests?",
          "Your code does. The model only emits a structured request; your server validates the arguments, runs the function, and returns the result as an observation."
        ],
        [
          "Why does reliability drop so fast in long agent loops?",
          "Step failures compound multiplicatively: even at 95 percent per step, a 20-step run succeeds only about a third of the time. Small verifiable steps and retries are the countermeasure."
        ],
        [
          "Name three guardrails every production agent needs.",
          "A step and token budget per run, an allowlist of tools per task, and human approval before irreversible actions — plus server-side validation of every tool argument."
        ]
      ],
      "cards": [
        [
          "Agent loop",
          "The plan-act-observe cycle a model repeats — deciding a step, calling a tool, reading the result — until the goal is met or a limit stops it."
        ],
        [
          "Tool schema",
          "The name, description and typed parameters describing a function the model may request; your code executes it."
        ],
        [
          "Observation",
          "A tool's result fed back into the conversation for the model to plan its next step from."
        ],
        [
          "Guardrail",
          "A bound on agent behaviour: step and token budgets, tool allowlists, approval gates and argument validation."
        ],
        [
          "Step limit",
          "A hard cap on loop iterations per run, preventing runaway agents from looping or spending forever."
        ],
        [
          "Trace",
          "The logged record of every plan, tool call and observation in a run — the primary debugging tool for agents."
        ]
      ],
      "striver": null,
      "leetcode": null
    },
    {
      "id": "6.1",
      "module": "M6",
      "moduleTitle": "Product Tools — Editor, In-Browser Runtime & Diagrams",
      "title": "WebAssembly & Pyodide",
      "sub": "Real Python 3.11 running in a browser tab",
      "mins": 45,
      "track": "frontend",
      "url": "lessons/6-1.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=eYekV2Do0YU",
        "title": "Master WebAssembly: The Complete Course from Beginner to Advanced",
        "channel": "KubeSimplify"
      },
      "subtopics": [
        "1. WebAssembly: a second language for the web",
        "2. Pyodide: CPython compiled to WASM",
        "3. The honest comparison: browser vs server execution"
      ],
      "checks": [
        [
          "What exactly is Pyodide?",
          "The CPython interpreter compiled to WebAssembly, plus packaging to load it in a browser — real Python running client-side."
        ],
        [
          "Why doesn't Skillzify put Pyodide on every page?",
          "Its runtime is megabytes of download; only the compiler page needs it. Loading it everywhere would tax every visit for one page's feature."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "6.2",
      "module": "M6",
      "moduleTitle": "Product Tools — Editor, In-Browser Runtime & Diagrams",
      "title": "Pyodide Deep",
      "sub": "Real Python in the browser: workers, packages, and the JS bridge",
      "mins": 35,
      "track": "frontend",
      "url": "lessons/6-2.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=vxqBm6_0vyk",
        "title": "Python In The Browser! PyScript First Look",
        "channel": "Traversy Media"
      },
      "subtopics": [
        "1. Pyodide is CPython compiled to WebAssembly",
        "2. Run it in a Worker, never on the main thread",
        "3. The bridge: stdout, packages, and data"
      ],
      "checks": [
        [
          "Why must Pyodide run in a Web Worker instead of the main thread?",
          "Python code can loop forever; on the main thread that freezes the page. A worker keeps the UI responsive and can be terminated on timeout."
        ],
        [
          "How do you get print output out of Pyodide and into your page?",
          "Redirect Python stdout with setStdout and forward each batch to the main thread as a message, which appends it to the output pane."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "6.3",
      "module": "M6",
      "moduleTitle": "Product Tools — Editor, In-Browser Runtime & Diagrams",
      "title": "CodeMirror: Building a Real Code Editor",
      "sub": "Tokenising, highlighting and editor state",
      "mins": 35,
      "track": "frontend",
      "url": "lessons/6-3.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=Xf9rHPNBMyQ",
        "title": "Build a Cursor Clone from Scratch (AI IDE) | Next.js 16 & Convex",
        "channel": "Code With Antonio"
      },
      "subtopics": [
        "1. A textarea is not an editor",
        "2. Editor state as a feature surface",
        "3. Version honesty: CM5 vs CM6"
      ],
      "checks": [
        [
          "How does syntax highlighting actually work in CodeMirror?",
          "A language mode tokenises the text — labelling keywords, strings, comments — and the theme maps token types to colours. It's analysis, not stored formatting."
        ],
        [
          "Why is editor.getValue() such an important API for the product?",
          "It turns the learner's code into data any feature can consume: the Pyodide runner, exercise checks, and the AI Stuck? hint flow."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "6.4",
      "module": "M6",
      "moduleTitle": "Product Tools — Editor, In-Browser Runtime & Diagrams",
      "title": "CodeMirror Extensions",
      "sub": "Beyond a textarea: highlighting, completion, lint and themes",
      "mins": 30,
      "track": "frontend",
      "url": "lessons/6-4.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=Rt7xwb1SOcY",
        "title": "How to build a self-typing editor demo with Waku + CodeMirror",
        "channel": "craftzdog"
      },
      "subtopics": [
        "1. CodeMirror 6 is a box of composable extensions",
        "2. Language support is a data package",
        "3. Linting: your own diagnostics, live"
      ],
      "checks": [
        [
          "Why does CodeMirror 6 use extensions instead of configuration flags?",
          "Extensions compose: each adds one capability, so editors share most of a list and differ in one piece, instead of inheriting a fixed feature set."
        ],
        [
          "What does a lint source receive and return?",
          "It receives the editor view and document, and returns diagnostics — each with a position, severity and message — which the editor renders as squiggles."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "6.5",
      "module": "M6",
      "moduleTitle": "Product Tools — Editor, In-Browser Runtime & Diagrams",
      "title": "Mermaid: Diagrams as Data",
      "sub": "Flowcharts from text — and the JSON in between",
      "mins": 35,
      "track": "frontend",
      "url": "lessons/6-5.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=nLqfCN0KoXw",
        "title": "How Do Robots Make Decisions? Programming 101 with Mermaid",
        "channel": "GriebZ"
      },
      "subtopics": [
        "1. Diagrams you can diff",
        "2. Skillzify's three-stage pipeline",
        "3. When text-diagrams are the wrong tool"
      ],
      "checks": [
        [
          "Why is generating Mermaid text better than generating a flowchart image directly?",
          "Text is generatable, storable, diffable and renderer-independent; an image pipeline locks you into one drawing implementation and opaque output."
        ],
        [
          "Name the three stages of Skillzify's flowchart pipeline and each stage's job.",
          "Python generators decide structure → JSON carries nodes/edges → Mermaid renders the diagram."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "6.6",
      "module": "M6",
      "moduleTitle": "Product Tools — Editor, In-Browser Runtime & Diagrams",
      "title": "Mermaid Advanced",
      "sub": "Subgraphs, styling, interaction — diagrams that behave like UI",
      "mins": 25,
      "track": "frontend",
      "url": "lessons/6-6.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=Wi1DBSJmRB4",
        "title": "Mermaid: Turn Words into Beautiful Diagrams Instantly + Bonus (Inkscape)",
        "channel": "Augmented Scholars"
      },
      "subtopics": [
        "1. Subgraphs group ideas, styles direct the eye",
        "2. Diagrams can be interactive",
        "3. Render failures are a product problem"
      ],
      "checks": [
        [
          "When should you use subgraphs instead of adding more nodes to a flat diagram?",
          "When nodes form natural groups — input, processing, output — so the reader sees structure before detail and the diagram stays readable at twenty-plus nodes."
        ],
        [
          "Why must Mermaid render errors be caught and shown, not left blank?",
          "A blank page hides the problem. Showing the error and the source lets the user fix the one broken line instead of guessing."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "6.7",
      "module": "M6",
      "moduleTitle": "Product Tools — Editor, In-Browser Runtime & Diagrams",
      "title": "Debugging in the Browser",
      "sub": "DevTools is the debugger — breakpoints, scopes, and the network tab",
      "mins": 30,
      "track": "frontend",
      "url": "lessons/6-7.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=Y3u2groOG-A",
        "title": "Chrome DevTools Complete Course - Learn to debug your frontend code",
        "channel": "YouTube"
      },
      "subtopics": [
        "1. Breakpoints beat console.log",
        "2. The call stack tells you how you got here",
        "3. The Network tab debugs the backend you cannot see"
      ],
      "checks": [
        [
          "Why is a conditional breakpoint better than a plain one in a loop that runs a thousand times?",
          "It pauses only when the condition matches — the one broken iteration — instead of forcing you to step through 999 correct ones."
        ],
        [
          "A fetch returns nothing useful. Which DevTools tab diagnoses it first, and what do you look for?",
          "The Network tab: the request's status, payload and response body show whether the endpoint, headers or server reply is wrong."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "6.8",
      "module": "M6",
      "moduleTitle": "Product Tools — Editor, In-Browser Runtime & Diagrams",
      "title": "Performance Profiling",
      "sub": "Measure first: long tasks, layout thrash, and the bundle that ate the page",
      "mins": 30,
      "track": "frontend",
      "url": "lessons/6-8.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=5fLW5Q5ODiE",
        "title": "Improving Load Performance - Chrome DevTools 101",
        "channel": "Chrome for Developers"
      },
      "subtopics": [
        "1. Measure, then optimise — never the reverse",
        "2. The usual suspects",
        "3. Lighthouse and real-user metrics"
      ],
      "checks": [
        [
          "What is a long task, and why does 50ms matter?",
          "A JavaScript block over 50ms on the main thread; beyond that, taps and scrolls visibly stall because the browser cannot respond while the task runs."
        ],
        [
          "What is INP in one sentence?",
          "How quickly the page visibly responds after a user interaction — the responsiveness number users actually feel."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "6.9",
      "module": "M6",
      "moduleTitle": "Product Tools — Editor, In-Browser Runtime & Diagrams",
      "title": "Monaco Editor — The VS Code Engine in the Browser",
      "sub": "A full IDE, embedded in a web page",
      "mins": 30,
      "track": "frontend",
      "url": "lessons/6-9.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=OZ0rioZ4yl4",
        "title": "JavaScript - 3 Ways to Build Your Own Code Editor",
        "channel": "Azul Coding"
      },
      "subtopics": [
        "1. Monaco versus CodeMirror: IDE versus component",
        "2. Language services: where the intelligence lives",
        "3. Themes, models and the editor API",
        "4. Workers, loading cost and the honest verdict"
      ],
      "checks": [
        [
          "Where does Monaco's IntelliSense actually run?",
          "In web workers hosting language services, separate from the rendering thread — so analysis never blocks typing. Built-in services cover TypeScript and JavaScript; other languages need custom providers."
        ],
        [
          "What is the difference between a Monaco model and an editor?",
          "The model is the text document; the editor is the view onto it. One model can show in several editors, and many models can sit behind one editor as tabs."
        ],
        [
          "Why does Skillzify use CodeMirror instead of Monaco?",
          "It is far lighter, loads fast on modest phones, embeds simply, and the lessons are the product — Monaco's IDE weight would tax every page for features learners do not need."
        ],
        [
          "What silently breaks if Monaco's workers are misconfigured?",
          "Language features degrade — highlighting, validation and completions stop working while basic editing continues, which makes the failure easy to miss."
        ]
      ],
      "cards": [
        [
          "Monaco",
          "The VS Code editor engine running in the browser: full IDE features, themes and IntelliSense, at the cost of a large bundle."
        ],
        [
          "Language service",
          "A worker-hosted analyser providing highlighting, validation, completions and hover info for a language."
        ],
        [
          "Web worker",
          "A background thread running JavaScript off the main thread; Monaco runs its language services there."
        ],
        [
          "Editor model",
          "Monaco's text document object, separate from the editor view — one model, many views, or many models behind tabs."
        ],
        [
          "Theme",
          "A JSON rule set mapping token types to colours; Monaco's built-ins match VS Code's dark and light themes."
        ],
        [
          "CodeMirror",
          "A lightweight, modular embeddable editor — the choice when load time and simplicity beat IDE depth."
        ]
      ],
      "striver": null,
      "leetcode": null
    },
    {
      "id": "7.1",
      "module": "M7",
      "moduleTitle": "Android — Kotlin & Jetpack Compose",
      "title": "Kotlin for JS/Python Developers",
      "sub": "Null safety, data classes, lambdas — mapped to what you know",
      "mins": 40,
      "track": "android",
      "url": "lessons/7-1.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=wuiT4T_LJQo",
        "title": "Kotlin Tutorial for Beginners: The Kotlin Programming Language Full 9-hour Kotlin Course",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. The familiar 80%",
        "2. Null safety: the type system refuses the classic crash",
        "3. Where Kotlin differs in spirit"
      ],
      "checks": [
        [
          "What problem does Kotlin's String? vs String distinction solve?",
          "Nullability is explicit in the type and checked by the compiler, so missing-value crashes (Java's NPE epidemic) become compile-time obligations instead of production surprises."
        ],
        [
          "What does the Elvis operator ?: do?",
          "It supplies a default value when the left side is null: nickname?.length ?: 0 means 'length, or 0 if nickname is null'."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "7.2",
      "module": "M7",
      "moduleTitle": "Android — Kotlin & Jetpack Compose",
      "title": "Kotlin Coroutines Deep",
      "sub": "Structured concurrency: the reason your app never freezes or leaks",
      "mins": 30,
      "track": "android",
      "url": "lessons/7-2.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=a_pL0asAP3U",
        "title": "Kotlin Coroutines: Getting Started in Intellij & Android Studio (Tutorial)",
        "channel": "Philipp Lackner"
      },
      "subtopics": [
        "1. A coroutine is a lightweight thread you can pause",
        "2. Dispatchers decide where work runs",
        "3. Structured concurrency: children cannot outlive their parent"
      ],
      "checks": [
        [
          "What does structured concurrency guarantee that raw threads do not?",
          "Child coroutines are tied to their parent scope: cancelling the scope cancels all children, so work cannot outlive the screen or ViewModel that started it."
        ],
        [
          "Why should you never swallow CancellationException in a generic catch?",
          "It is how cancellation propagates. Catching it as an ordinary error breaks structured cancellation and leaves work running after its scope died."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "7.3",
      "module": "M7",
      "moduleTitle": "Android — Kotlin & Jetpack Compose",
      "title": "Jetpack Compose UI",
      "sub": "Declarative UI — React's idea, native on Android",
      "mins": 45,
      "track": "android",
      "url": "lessons/7-3.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=l7hGtIzGRRM",
        "title": "Jetpack Compose Crash Course for Beginners | Simplify Android UI Development",
        "channel": "Papaya Coders"
      },
      "subtopics": [
        "1. Composables: functions that describe UI",
        "2. State and recomposition",
        "3. Material 3 theming"
      ],
      "checks": [
        [
          "What triggers recomposition, and what does it do?",
          "A state change; Compose re-runs the composables that read that state with the new value and updates only the differing UI."
        ],
        [
          "Name the exact React concept that matches a @Composable function.",
          "A function component: data/props in, UI description out, re-rendered when its state inputs change."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "7.4",
      "module": "M7",
      "moduleTitle": "Android — Kotlin & Jetpack Compose",
      "title": "Compose State & Lists",
      "sub": "State hoisting, recomposition, and lists that scroll at 60fps",
      "mins": 30,
      "track": "android",
      "url": "lessons/7-4.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=SCigM4vYmC4",
        "title": "Jetpack Compose State & Recomposition 🔥 | State Hoisting & rememberSaveable | Android30 Day 5",
        "channel": "@siddhubhaiya2881"
      },
      "subtopics": [
        "1. State is a value plus a change notification",
        "2. State hoisting: state lives above the composable that uses it",
        "3. Lists: LazyColumn, keys, and recomposition scope"
      ],
      "checks": [
        [
          "What is state hoisting, and why does it make a composable reusable?",
          "Moving state to the caller and passing value plus callback down. The composable becomes stateless, so any screen can drive it with its own state."
        ],
        [
          "Why does LazyColumn need a stable key per item?",
          "So Compose tracks each row's identity across filtering and reordering; without keys it can attach the wrong state to the wrong row."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "7.5",
      "module": "M7",
      "moduleTitle": "Android — Kotlin & Jetpack Compose",
      "title": "ViewModel, Navigation & Coroutines",
      "sub": "Architecture that survives rotation and scale",
      "mins": 45,
      "track": "android",
      "url": "lessons/7-5.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=LFlobqW8Sy8",
        "title": "Building a Complete Android App : Jetpack Compose, MVVM, Coroutines & Dependency Injection",
        "channel": "Native Mobile Bits"
      },
      "subtopics": [
        "1. ViewModel: state with a longer life than the screen",
        "2. Navigation Compose: routes for screens",
        "3. Coroutines: async without callback pyramids"
      ],
      "checks": [
        [
          "Why does state belong in a ViewModel instead of the composable?",
          "ViewModels survive configuration changes (like rotation) that recreate the UI, and they keep logic testable and out of rendering code."
        ],
        [
          "What does 'suspend' mean for a coroutine function?",
          "It can pause at await points without blocking its thread, resuming when the async work completes — with cancellation tied to its scope."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "7.6",
      "module": "M7",
      "moduleTitle": "Android — Kotlin & Jetpack Compose",
      "title": "Navigation Deep",
      "sub": "Routes, arguments, deep links, and a back stack that behaves",
      "mins": 25,
      "track": "android",
      "url": "lessons/7-6.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=glyqjzkc4fk",
        "title": "Navigation Basics in Jetpack Compose",
        "channel": "Stevdza-San"
      },
      "subtopics": [
        "1. Navigation is a graph of routes",
        "2. Deep links: the outside world enters at any screen",
        "3. The back stack is a user promise"
      ],
      "checks": [
        [
          "Why should a screen opened by a deep link load its data from the route argument alone?",
          "Because no previous screen ran to set up state. The route argument is the only guaranteed input, so the screen must be independently loadable."
        ],
        [
          "What do popUpTo and launchSingleTop prevent?",
          "popUpTo clears destinations so Back never returns to a completed flow like login; launchSingleTop stops duplicate copies of the same screen stacking up."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "7.7",
      "module": "M7",
      "moduleTitle": "Android — Kotlin & Jetpack Compose",
      "title": "Room Basics",
      "sub": "SQLite with a compiler watching your back",
      "mins": 30,
      "track": "android",
      "url": "lessons/7-7.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=-LNg-K7SncM",
        "title": "Room Database Android Studio Kotlin Example Tutorial",
        "channel": "codeWithCal"
      },
      "subtopics": [
        "1. Three pieces: entity, DAO, database",
        "2. Coroutines and Flow are the API",
        "3. Migrations: never wipe user data"
      ],
      "checks": [
        [
          "What does Room check at compile time that raw SQLite cannot?",
          "Your SQL against the schema — a wrong column or table name fails the build instead of crashing at runtime."
        ],
        [
          "Why is a destructive migration unacceptable for a learning app?",
          "It deletes the database, wiping every learner's cached progress and offline data. A real migration preserves it."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "7.8",
      "module": "M7",
      "moduleTitle": "Android — Kotlin & Jetpack Compose",
      "title": "Firebase on Android & Chaquopy",
      "sub": "Same backend, native app — plus Python inside the APK",
      "mins": 45,
      "track": "android",
      "url": "lessons/7-8.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=Lg-2Q1mYMsM",
        "title": "(643) The Complete Android Course - Firebase Storage | Kotlin",
        "channel": "CodeCraft"
      },
      "subtopics": [
        "1. One project, two platforms",
        "2. The merge rules are a protocol, not a preference",
        "3. Chaquopy: Python inside Android",
        "4. The build system, without fear"
      ],
      "checks": [
        [
          "What is the Firebase BoM and what problem does it solve?",
          "A bill of materials pinning compatible versions of all Firebase libraries, so adding Auth + Firestore can't produce a mismatched-version build failure."
        ],
        [
          "How does Android run Python without a browser?",
          "Chaquopy embeds the CPython interpreter inside the APK; Kotlin calls Python modules natively, fully offline."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "7.9",
      "module": "M7",
      "moduleTitle": "Android — Kotlin & Jetpack Compose",
      "title": "Publishing Basics",
      "sub": "From a debug APK to a Play Store listing real users can install",
      "mins": 25,
      "track": "android",
      "url": "lessons/7-9.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=N1bpUYy_vgI",
        "title": "Google Play Console Tutorial 2026 | Publish Your Android App Successfully",
        "channel": "YouTube"
      },
      "subtopics": [
        "1. Release builds are a different artefact",
        "2. The listing is a product page",
        "3. Test tracks before production"
      ],
      "checks": [
        [
          "Why is the signing key the most important file in a release?",
          "Without it you cannot publish updates under the same listing. Lose it and the app is effectively orphaned."
        ],
        [
          "Why ship to a closed test track before production?",
          "Real users on real devices find crashes and policy issues you cannot, and a staged rollout limits the damage if something still slips through."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "7.10",
      "module": "M7",
      "moduleTitle": "Android — Kotlin & Jetpack Compose",
      "title": "Room Deep — Migrations, Relations & Offline-First Android",
      "sub": "Local data that survives upgrades and no signal",
      "mins": 40,
      "track": "android",
      "url": "lessons/7-10.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=hrJZIF7qSSw",
        "title": "The Ultimate Guide to Room Migration in Android",
        "channel": "Philipp Lackner"
      },
      "subtopics": [
        "1. Relations: modelling joined data without SQL strings",
        "2. Migrations: upgrading without wiping the user",
        "3. Flow from Room: the UI that updates itself",
        "4. Offline-first: local truth, synced when possible"
      ],
      "checks": [
        [
          "What does @Relation do, and why does its DAO method need @Transaction?",
          "@Relation fetches a parent entity together with its children, generating the join. @Transaction ensures the parent and child queries run atomically, so the pair is consistent."
        ],
        [
          "What happens if you ship a schema change without a migration?",
          "Room throws an IllegalStateException when opening the database — or, with destructive fallback, silently deletes all user data. Both are production failures."
        ],
        [
          "How does returning Flow from a DAO change the UI's job?",
          "Room re-emits the query result whenever the table changes, so the UI just collects and renders. No manual refresh or polling is needed."
        ],
        [
          "What is an outbox table in offline-first sync?",
          "A local table recording pending write operations made offline, which the sync layer drains to the server when connectivity returns."
        ]
      ],
      "cards": [
        [
          "@Relation",
          "A Room annotation fetching a parent entity with its children in one generated join query."
        ],
        [
          "Migration",
          "A Migration(from, to) object with the SQL transforming one schema version into the next, preserving user data across upgrades."
        ],
        [
          "Destructive fallback",
          "Room's option to delete and recreate the database on schema mismatch — fine for prototypes, data loss in production."
        ],
        [
          "Flow from Room",
          "A DAO returning Flow re-emits results automatically when the table changes, making the UI reactive."
        ],
        [
          "Offline-first",
          "Architecture where the local database is the source of truth and the server is reconciled later, so the app works without connectivity."
        ],
        [
          "Outbox pattern",
          "Queueing offline writes in a local table for later sync, with tombstones propagating deletions."
        ]
      ],
      "striver": null,
      "leetcode": null
    },
    {
      "id": "8.1",
      "module": "M8",
      "moduleTitle": "DevOps, Cloud & Shipping Like a Professional",
      "title": "Git Workflows",
      "sub": "Branches, merges, and commits that tell a story",
      "mins": 40,
      "track": "devops",
      "url": "lessons/8-1.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=DVRQoVRzMIY",
        "title": "Git Tutorial for Beginners - Git & GitHub Fundamentals In Depth",
        "channel": "Tech With Tim"
      },
      "subtopics": [
        "1. Git is a graph, not a folder backup",
        "2. The daily workflow",
        "3. Merge vs rebase"
      ],
      "checks": [
        [
          "Why never rebase a branch teammates have already pulled?",
          "Rebase rewrites commit hashes; teammates' clones then disagree with the remote history, producing duplicated commits and painful recovery."
        ],
        [
          "What makes a commit message professional?",
          "It states what changed and why in one searchable line — 'Passport: make privacy flag per-user' — not 'fix' or 'updates'."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "8.2",
      "module": "M8",
      "moduleTitle": "DevOps, Cloud & Shipping Like a Professional",
      "title": "Git Branching Strategies",
      "sub": "GitHub Flow, Git Flow, trunk-based — and how to pick without a meeting",
      "mins": 25,
      "track": "devops",
      "url": "lessons/8-2.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=C1hVNnYhCgA",
        "title": "Git Tutorial for DevOps: Branches Merges and Pull Requests",
        "channel": "Zero to Builder"
      },
      "subtopics": [
        "1. The three strategies, honestly compared",
        "2. The pull request is the unit of review",
        "3. Merge conflicts are normal, not emergencies"
      ],
      "checks": [
        [
          "When is GitHub Flow a better fit than Git Flow?",
          "For continuously deployed apps with a small team, where main is always deployable and releases are frequent — Git Flow's release branches add process with no benefit."
        ],
        [
          "Why must you never rebase a shared branch?",
          "Rebase rewrites commit history. Others who based work on the old commits end up with duplicated, conflicting history."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "8.3",
      "module": "M8",
      "moduleTitle": "DevOps, Cloud & Shipping Like a Professional",
      "title": "GitHub Actions CI",
      "sub": "Reading build-apk.yml line by line",
      "mins": 45,
      "track": "devops",
      "url": "lessons/8-3.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=K4FKwdNMDyI",
        "title": "CI/CD With GitHub Actions Tutorial: Build, Test and Deploy Automatically",
        "channel": "CodeFlow Daily"
      },
      "subtopics": [
        "1. Anatomy of a workflow",
        "2. The supporting cast",
        "3. Reading failures like a professional"
      ],
      "checks": [
        [
          "What do on, jobs and steps mean in a workflow file?",
          "on = the triggering event; jobs = isolated runner machines that execute work; steps = the ordered commands/actions inside a job."
        ],
        [
          "Your CI fails but the code works locally. First three suspects?",
          "Environment differences (versions, OS), missing env vars/secrets, and config/DSl mistakes — in that order, before suspecting feature code."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "8.4",
      "module": "M8",
      "moduleTitle": "DevOps, Cloud & Shipping Like a Professional",
      "title": "CI/CD Deep",
      "sub": "Workflows, caching, matrices, and the deploy gate that saves you",
      "mins": 30,
      "track": "devops",
      "url": "lessons/8-4.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=FbV57lDXEbY",
        "title": "GitHub Actions Part 1 — CI/CD, YAML, Triggers & Runners | GitHub Actions for Beginners 2026",
        "channel": "Learn With Mithran"
      },
      "subtopics": [
        "1. A workflow is a recipe that runs on every push",
        "2. Caching and matrices: speed and coverage",
        "3. Secrets, artefacts, and the deploy gate"
      ],
      "checks": [
        [
          "Why key a dependency cache on the lockfile?",
          "So a dependency change automatically busts the cache — the key changes, the old cache is ignored, and the install is fresh. A stale cache would test old dependencies."
        ],
        [
          "What does needs: test do in a deploy job?",
          "It makes deployment depend on the test job succeeding, so a red build can never reach production."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "8.5",
      "module": "M8",
      "moduleTitle": "DevOps, Cloud & Shipping Like a Professional",
      "title": "Docker Intro",
      "sub": "Images, containers, volumes — the same app, everywhere",
      "mins": 30,
      "track": "devops",
      "url": "lessons/8-5.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=bgjw_UWfTws",
        "title": "Docker Tutorial for Beginners: Images, Containers and Volumes Explained",
        "channel": "YouTube"
      },
      "subtopics": [
        "1. Image versus container: the recipe and the meal",
        "2. The Dockerfile: layer by layer",
        "3. Volumes and Compose: data that outlives the container"
      ],
      "checks": [
        [
          "What is the difference between an image and a container?",
          "An image is the frozen template; a container is a running instance of it. Many containers can run from one image, and deleting a container leaves the image unchanged."
        ],
        [
          "Why copy package.json and install before copying code in a Dockerfile?",
          "Layer caching: dependencies install once and are reused until the manifest changes, so code edits only rebuild the final layer."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "8.6",
      "module": "M8",
      "moduleTitle": "DevOps, Cloud & Shipping Like a Professional",
      "title": "Hosting Models: Render, Pages & AWS Concepts",
      "sub": "Where code lives, what it costs, and how deploys really happen",
      "mins": 45,
      "track": "devops",
      "url": "lessons/8-6.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=E4pG_SicfUo",
        "title": "Deploying Django + React on Render in 2026: Complete Tutorial (Free & Easy)",
        "channel": "Code Live Cam"
      },
      "subtopics": [
        "1. Three models, three bargains",
        "2. Skillzify's real topology",
        "3. Environments and configuration"
      ],
      "checks": [
        [
          "Why doesn't Skillzify's staging update when code is pushed?",
          "It was connected via public repo URL without the GitHub App integration, so no deploy webhook fires — redeploys are triggered manually from the Render dashboard."
        ],
        [
          "Staging and production must run identical what, and differ in what?",
          "Identical code; different configuration via environment variables (keys, caps, endpoints)."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "8.7",
      "module": "M8",
      "moduleTitle": "DevOps, Cloud & Shipping Like a Professional",
      "title": "Render Deep",
      "sub": "Services, health checks, env vars, and surviving the free tier",
      "mins": 25,
      "track": "devops",
      "url": "lessons/8-7.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=E4pG_SicfUo",
        "title": "Deploying Django + React on Render in 2026: Complete Tutorial (Free & Easy)",
        "channel": "Code Live Cam"
      },
      "subtopics": [
        "1. What Render actually runs",
        "2. Health checks and logs are your eyes",
        "3. The free tier's honest limits"
      ],
      "checks": [
        [
          "Why must your server listen on process.env.PORT instead of a fixed port?",
          "Render assigns the port at runtime. A hardcoded port means Render cannot route traffic to your service."
        ],
        [
          "What does a failing health check cause Render to do?",
          "Restart the service, and keep the previous working version live instead of deploying the broken one."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "8.8",
      "module": "M8",
      "moduleTitle": "DevOps, Cloud & Shipping Like a Professional",
      "title": "Secrets, Security Posture & Analytics",
      "sub": "SECURITY.md, responsible disclosure, and reading GA4",
      "mins": 40,
      "track": "devops",
      "url": "lessons/8-8.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=hQfojGT_Cis",
        "title": "Why You NEED .env Files (And How to Use Them)",
        "channel": "Learn In Minutes"
      },
      "subtopics": [
        "1. Secrets hygiene, the full doctrine",
        "2. SECURITY.md and private reporting",
        "3. Analytics without self-deception"
      ],
      "checks": [
        [
          "A Gemini key was committed to git last month but the file was later deleted. Safe?",
          "No — git history retains it. The key must be rotated/revoked; deletion from the working tree does not purge history."
        ],
        [
          "What three layers make up a small project's security posture?",
          "Prevention (validation, rules, secrets hygiene), detection (CodeQL, Dependabot alerts), and response (SECURITY.md with private reporting channel)."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "8.9",
      "module": "M8",
      "moduleTitle": "DevOps, Cloud & Shipping Like a Professional",
      "title": "Monitoring & Analytics Deep",
      "sub": "Uptime, alerts, funnels — knowing before your users tell you",
      "mins": 25,
      "track": "devops",
      "url": "lessons/8-9.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=-Y-RQtYLpHM",
        "title": "Google Analytics 4 tutorial for beginners (2026 update) || GA4 tutorial for beginners || GA4 course",
        "channel": "Analytics Mania"
      },
      "subtopics": [
        "1. Monitoring answers: is it up, and is it healthy?",
        "2. Analytics funnels find the broken step",
        "3. The incident runbook"
      ],
      "checks": [
        [
          "Why is an uptime check alone not enough monitoring?",
          "A service can be up and still broken — returning errors on every request. You also need error-rate alerts and health checks that verify real behaviour."
        ],
        [
          "What makes a funnel useful, and what makes it noise?",
          "Useful when each step is a real user action and the sample is large; noise when numbers are tiny or steps are pageviews instead of meaningful events."
        ]
      ],
      "cards": null,
      "striver": null,
      "leetcode": null
    },
    {
      "id": "9.1",
      "module": "M9",
      "moduleTitle": "M9 — Industry Add-Ons",
      "title": "React Hooks Deep — useEffect, useContext & Custom Hooks",
      "sub": "State, effects and reuse without classes",
      "mins": 40,
      "track": "industry",
      "url": "lessons/9-1.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=ZIvdUkCb4Sg",
        "title": "Essential React Hooks Explained (With Code Examples) in 7 minutes",
        "channel": "Rusiru Gunaratne"
      },
      "subtopics": [
        "1. Why hooks exist: the class lifecycle problem",
        "2. useEffect: dependencies and cleanup",
        "3. useContext and useRef",
        "4. Custom hooks: reuse the logic, not the markup"
      ],
      "checks": [
        [
          "What does the cleanup function returned from useEffect do?",
          "React calls it before re-running the effect and when the component unmounts. It is where you cancel subscriptions, clear timers and ignore in-flight fetches so nothing leaks."
        ],
        [
          "Why must hooks be called unconditionally at the top level?",
          "React tracks hooks by call order between renders. A conditional hook would shift that order, so state would be matched to the wrong hook."
        ],
        [
          "When is useContext the wrong choice for state?",
          "When the value changes frequently, because every consumer re-renders on each change. Fast-changing state belongs in local state or a store with selective subscriptions."
        ],
        [
          "What is the difference between useState and useRef?",
          "useState triggers a re-render when it changes and is for values the UI displays. useRef persists a mutable value across renders without re-rendering, for DOM nodes, timers and previous values."
        ]
      ],
      "cards": [
        [
          "useEffect",
          "A hook that runs side effects after render, re-running when its dependency array values change, with an optional cleanup function."
        ],
        [
          "Dependency array",
          "The list of reactive values an effect depends on; React re-runs the effect when any of them changes."
        ],
        [
          "Cleanup function",
          "The function returned from useEffect, called before re-running the effect and on unmount — where timers and subscriptions are torn down."
        ],
        [
          "useContext",
          "A hook that reads a value from the nearest context provider, avoiding prop drilling for global, slowly-changing data."
        ],
        [
          "useRef",
          "A hook holding a mutable value that persists across renders without causing one — used for DOM nodes, timers and previous values."
        ],
        [
          "Custom hook",
          "A function starting with use that calls other hooks to package reusable stateful logic, like useFetch or useLocalStorage."
        ]
      ],
      "striver": null,
      "leetcode": null
    },
    {
      "id": "9.2",
      "module": "M9",
      "moduleTitle": "M9 — Industry Add-Ons",
      "title": "TypeScript Intro — Types for JavaScript Developers",
      "sub": "Catch the bug before it runs",
      "mins": 35,
      "track": "industry",
      "url": "lessons/9-2.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=30LWjhZzg50",
        "title": "Learn TypeScript – Full Tutorial",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Why TypeScript: errors at write time, not run time",
        "2. The basic types and annotations",
        "3. Interfaces, type aliases and generics",
        "4. tsconfig and migrating a file"
      ],
      "checks": [
        [
          "What does TypeScript compile to, and when are types checked?",
          "It compiles to plain JavaScript with all types erased. Types are checked at build time by the compiler, never at run time — there is no type information left in the output."
        ],
        [
          "Why is any dangerous?",
          "any disables type checking for that value, so errors pass silently and spread to everything the value touches. It removes the benefit of TypeScript while keeping its cost."
        ],
        [
          "When do you choose an interface over a type alias?",
          "For object shapes you expect to extend or merge, like component props or API models. Type aliases are better for unions, tuples and naming primitive combinations."
        ],
        [
          "What does a generic type parameter buy you over any?",
          "It preserves the relationship between input and output types: first of a string array returns a string, checked by the compiler, instead of an unchecked any."
        ]
      ],
      "cards": [
        [
          "Type annotation",
          "A declared type on a variable, parameter or return value, checked by the compiler and erased from the output JavaScript."
        ],
        [
          "Type inference",
          "TypeScript deducing a type from the initial value, so most variables need no explicit annotation."
        ],
        [
          "Union type",
          "A type that allows one of several types, written with a pipe, like string | number."
        ],
        [
          "Interface",
          "A named object shape that can be extended and declaration-merged; the standard way to type objects and props."
        ],
        [
          "Generic",
          "A type parameter that lets code work over many types while keeping them checked, like a first&lt;T&gt; function."
        ],
        [
          "strict mode",
          "The tsconfig flag that enables the full set of safety checks, including strict null checking."
        ]
      ],
      "striver": null,
      "leetcode": null
    },
    {
      "id": "9.3",
      "module": "M9",
      "moduleTitle": "M9 — Industry Add-Ons",
      "title": "SQL Deep — Indexes, Transactions & Window Functions",
      "sub": "Make queries fast and writes safe",
      "mins": 40,
      "track": "industry",
      "url": "lessons/9-3.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=dUzivpyLK1s",
        "title": "SQL Window Functions Explained: ROW_NUMBER, RANK, LAG, LEAD",
        "channel": "DataBite"
      },
      "subtopics": [
        "1. Indexes: the sorted shortcut",
        "2. EXPLAIN: read the plan before you guess",
        "3. Transactions and ACID",
        "4. Window functions: rankings without self-joins"
      ],
      "checks": [
        [
          "Why does adding an index slow down writes?",
          "Every insert, update and delete must also maintain each index on the table, so more indexes mean more work per write and more disk used."
        ],
        [
          "What does EXPLAIN tell you that timing the query does not?",
          "It shows the plan — which index was used, whether a full scan happened, and estimated rows — so you can fix the cause instead of just observing the symptom."
        ],
        [
          "What does the A in ACID guarantee in practice?",
          "Atomicity: all writes in the transaction commit together or none do, so a crash midway cannot leave half-updated data behind."
        ],
        [
          "How do RANK and DENSE_RANK differ on ties?",
          "Both give tied rows the same rank. RANK then skips numbers (1, 1, 3), while DENSE_RANK does not (1, 1, 2)."
        ]
      ],
      "cards": [
        [
          "B-tree index",
          "A balanced sorted tree over one or more columns that turns full-table scans into logarithmic lookups, at the cost of slower writes."
        ],
        [
          "EXPLAIN",
          "A command that shows the query plan the database chose — indexes used, scan types and row estimates — so you optimise from evidence."
        ],
        [
          "ACID",
          "Atomicity, Consistency, Isolation and Durability: the guarantees a transaction makes about grouped writes."
        ],
        [
          "Isolation level",
          "How much concurrent transactions can see of each other, from read committed up to serializable."
        ],
        [
          "Window function",
          "A function computing over a set of rows related to the current row without collapsing them, like ROW_NUMBER or RANK."
        ],
        [
          "PARTITION BY",
          "The clause that splits rows into groups inside a window function, restarting the calculation per group."
        ]
      ],
      "striver": null,
      "leetcode": null
    },
    {
      "id": "9.4",
      "module": "M9",
      "moduleTitle": "M9 — Industry Add-Ons",
      "title": "Testing with Vitest & Jest — Unit and Integration Tests",
      "sub": "Proof the code works, not hope",
      "mins": 35,
      "track": "industry",
      "url": "lessons/9-4.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=cchqeWY0Nak",
        "title": "Setting up vite, React, TypeScript, eslint, prettier, vitest, testing-library and react-router",
        "channel": "Coding Garden"
      },
      "subtopics": [
        "1. The test pyramid: many small, few big",
        "2. describe, it, expect: the shape of a test",
        "3. Mocking and testing async code",
        "4. Coverage: a map, not a target"
      ],
      "checks": [
        [
          "Why should most tests be unit tests rather than end-to-end tests?",
          "Unit tests are fast, deterministic and pinpoint failures to one function. End-to-end tests are slow and brittle, so the pyramid keeps them few."
        ],
        [
          "What is the danger of mocking too much?",
          "You end up testing your mocks instead of the real behaviour, so tests pass while the integrated code is broken. Mock only external boundaries like network and time."
        ],
        [
          "Why can an async test pass without testing anything?",
          "If the test does not await the promise, the assertion runs after the test has already finished, so it never actually executes."
        ],
        [
          "What does 100 percent coverage actually prove?",
          "Only that every line ran during the tests — not that the assertions were meaningful. Coverage finds blind spots; it does not measure correctness."
        ]
      ],
      "cards": [
        [
          "Test pyramid",
          "Many unit tests, fewer integration tests, very few end-to-end tests — a shape that keeps suites fast and failures localised."
        ],
        [
          "Unit test",
          "A test of one function or module in isolation, with dependencies replaced by fakes."
        ],
        [
          "Integration test",
          "A test of several real pieces working together, like a route handler with its validation and database layer."
        ],
        [
          "Mock",
          "A controlled fake replacing a real dependency, used to keep tests fast, deterministic and offline."
        ],
        [
          "Matcher",
          "An assertion helper on expect, like toBe, toEqual or rejects, that states the expected outcome."
        ],
        [
          "Coverage",
          "A report of which lines and branches tests executed — a map of blind spots, not a quality score."
        ]
      ],
      "striver": null,
      "leetcode": null
    },
    {
      "id": "9.5",
      "module": "M9",
      "moduleTitle": "M9 — Industry Add-Ons",
      "title": "System Design Basics for Interviews",
      "sub": "Requirements first, boxes second",
      "mins": 40,
      "track": "industry",
      "url": "lessons/9-5.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=F2FmTdLtb_4",
        "title": "System Design Concepts Course and Interview Prep",
        "channel": "freeCodeCamp.org"
      },
      "subtopics": [
        "1. Start with requirements, not boxes",
        "2. Estimate the scale, then design the API and data",
        "3. Caching, queues and the scaling levers",
        "4. Talking through trade-offs"
      ],
      "checks": [
        [
          "Why clarify requirements before drawing any architecture?",
          "Scale and feature decisions depend on them. Designing before knowing the read/write ratio or latency needs means optimising for a system nobody asked for."
        ],
        [
          "Why is base-62 encoding of an id a good short-code strategy?",
          "Ids are unique by construction, so encoding them gives unique codes with no collision checks, and base-62 keeps the codes short using letters and digits."
        ],
        [
          "What does a cache cost you, in one word?",
          "Freshness: cached data can be stale after the underlying value changes, so you trade correctness-at-this-instant for speed."
        ],
        [
          "Why must servers be stateless to scale horizontally?",
          "A load balancer can send any request to any server, so no server can hold session data another server would need. State moves to the database or cache."
        ]
      ],
      "cards": [
        [
          "Functional requirements",
          "What the system must do: the features and behaviours users can observe."
        ],
        [
          "Non-functional requirements",
          "How well it must do it: scale, latency, availability and consistency targets."
        ],
        [
          "Scale estimate",
          "Rough arithmetic — users, requests per second, storage — that decides which design levers are needed."
        ],
        [
          "Cache",
          "A fast store for hot data, like Redis, that trades freshness for latency on read-heavy paths."
        ],
        [
          "Queue",
          "A buffer that moves slow work off the request path for asynchronous processing, trading simplicity for responsiveness."
        ],
        [
          "Horizontal scaling",
          "Adding more stateless servers behind a load balancer instead of making one server bigger."
        ]
      ],
      "striver": null,
      "leetcode": null
    },
    {
      "id": "9.6",
      "module": "M9",
      "moduleTitle": "M9 — Industry Add-Ons",
      "title": "AWS Basics — EC2, S3, Lambda & IAM",
      "sub": "The four services everything else stands on",
      "mins": 35,
      "track": "industry",
      "url": "lessons/9-6.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=adZ5wd6qKg0",
        "title": "AWS Full Course for Beginners: Stop Memorising Services, See How It Works [Free]",
        "channel": "ChalkBrain"
      },
      "subtopics": [
        "1. IAM: who can do what",
        "2. S3: object storage for files",
        "3. EC2: rented virtual servers",
        "4. Lambda: functions without servers"
      ],
      "checks": [
        [
          "What is the difference between an IAM user and an IAM role?",
          "A user is a permanent identity with credentials. A role is a temporary identity that a person or service assumes, with credentials that expire — the safer choice for applications."
        ],
        [
          "Why is S3 called object storage rather than a filesystem?",
          "You store and retrieve whole objects by key; there are no folders, no partial edits and no file locking like a real filesystem."
        ],
        [
          "When does Lambda beat EC2, and when does it lose?",
          "Lambda wins for event-driven, spiky work with no idle cost. It loses for long-running processes, steady high load, and anything needing local state between calls."
        ],
        [
          "What does least privilege mean in an IAM policy?",
          "Grant only the specific actions on the specific resources that are needed, and nothing else — so a leaked credential can do minimal damage."
        ]
      ],
      "cards": [
        [
          "IAM",
          "AWS Identity and Access Management: users, roles and policies controlling who can do what to which resources."
        ],
        [
          "Least privilege",
          "Granting only the actions and resources actually needed, so compromised credentials can do minimal damage."
        ],
        [
          "S3 bucket",
          "A container for objects (files plus metadata) addressed by key, private by default, built for durability at any scale."
        ],
        [
          "EC2 instance",
          "A rented virtual machine whose size, image and firewall you choose and whose software you maintain."
        ],
        [
          "Lambda",
          "Serverless functions that run on events and bill per millisecond of execution, with no server to manage."
        ],
        [
          "Security group",
          "A virtual firewall attached to an instance, controlling which traffic may reach it."
        ]
      ],
      "striver": null,
      "leetcode": null
    },
    {
      "id": "9.7",
      "module": "M9",
      "moduleTitle": "M9 — Industry Add-Ons",
      "title": "Docker Compose & Production Containers",
      "sub": "One command, the whole stack",
      "mins": 35,
      "track": "industry",
      "url": "lessons/9-7.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=SXwC9fSwct8",
        "title": "Ultimate Docker Compose Tutorial",
        "channel": "TechWorld with Nana"
      },
      "subtopics": [
        "1. Compose: many containers, one file",
        "2. Volumes: data that outlives containers",
        "3. Environment variables and configuration",
        "4. Multi-stage builds and image size"
      ],
      "checks": [
        [
          "Why do services in Compose reach each other by name?",
          "Compose creates a shared network where each service name resolves as a hostname, so the app connects to db:5432 without hardcoding addresses."
        ],
        [
          "What happens to data written inside a container without a volume?",
          "It disappears when the container is removed. Volumes keep data outside the container lifecycle so it survives rebuilds."
        ],
        [
          "Why keep secrets in environment variables instead of the image?",
          "Images get shared and cached; a secret baked in leaks to anyone with the image. Environment variables let the same image run everywhere with different secrets."
        ],
        [
          "What does a multi-stage build achieve?",
          "It builds with full tooling in one stage and copies only the artifact into a slim runtime image, shrinking size and attack surface."
        ]
      ],
      "cards": [
        [
          "Docker Compose",
          "A tool that defines and runs multi-container apps from one YAML file: services, networks, ports and volumes."
        ],
        [
          "Service",
          "One container definition in Compose — an image or build, plus its ports, environment and dependencies."
        ],
        [
          "Named volume",
          "Docker-managed persistent storage mounted into a container, surviving container deletion — where database data belongs."
        ],
        [
          "Bind mount",
          "A host folder mapped into a container; ideal for live development, a liability in production."
        ],
        [
          "Multi-stage build",
          "A Dockerfile with a build stage and a slim runtime stage, copying only the finished artifact across."
        ],
        [
          ".dockerignore",
          "A file listing paths excluded from the build context, keeping node_modules and secrets out of images."
        ]
      ],
      "striver": null,
      "leetcode": null
    },
    {
      "id": "9.8",
      "module": "M9",
      "moduleTitle": "M9 — Industry Add-Ons",
      "title": "Next.js Intro — Full-Stack React",
      "sub": "Frontend and backend in one project",
      "mins": 35,
      "track": "industry",
      "url": "lessons/9-8.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=Zq5fmkH0T78",
        "title": "Next.js 15 Crash Course | Build and Deploy a Production-Ready Full Stack App",
        "channel": "JavaScript Mastery"
      },
      "subtopics": [
        "1. File-based routing: folders are URLs",
        "2. Server components versus client components",
        "3. Route handlers and data fetching",
        "4. When Next beats a separate Express backend"
      ],
      "checks": [
        [
          "How does file-based routing map folders to URLs?",
          "Each folder under app is a path segment and a page file inside it renders that route; a [id] folder matches any value as a dynamic parameter."
        ],
        [
          "What can a server component do that a client component cannot?",
          "It can access databases, files and secrets directly on the server and ships no JavaScript to the browser. Client components are for interactivity and browser APIs."
        ],
        [
          "Why keep client components small and leaf-like?",
          "Every client component adds JavaScript to the bundle. Small leaves keep pages fast while still allowing interaction where it is needed."
        ],
        [
          "When is a separate Express backend still the better choice?",
          "When the API serves multiple clients, needs long-running or WebSocket workloads, or must scale independently of the frontend."
        ]
      ],
      "cards": [
        [
          "File-based routing",
          "Routes defined by folders and page files under app, instead of a central route configuration."
        ],
        [
          "Dynamic segment",
          "A folder like [id] that matches any value in that position and exposes it as a parameter."
        ],
        [
          "Server component",
          "A component rendered on the server that can access data and secrets directly and ships no client JavaScript."
        ],
        [
          "Client component",
          "A component marked use client that renders in the browser and can use state, effects and browser APIs."
        ],
        [
          "Route handler",
          "A route.ts file exporting GET, POST and similar functions — a backend endpoint inside the Next.js project."
        ],
        [
          "Layout",
          "A component wrapping a route segment and its children, so shared chrome like navigation is written once."
        ]
      ],
      "striver": null,
      "leetcode": null
    },
    {
      "id": "9.9",
      "module": "M9",
      "moduleTitle": "M9 — Industry Add-Ons",
      "title": "WebSockets & Real-Time Apps",
      "sub": "When the server needs to speak first",
      "mins": 35,
      "track": "industry",
      "url": "lessons/9-9.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=7U9SHQLMuqY",
        "title": "How to Build a Real-Time Chat App with Socket.io & Node.js — Step by Step (2026)",
        "channel": "1MxTushar"
      },
      "subtopics": [
        "1. HTTP asks, WebSockets converse",
        "2. Socket.io: events and rooms",
        "3. Heartbeat, reconnection and honest failure",
        "4. Scaling real-time: the sticky problem"
      ],
      "checks": [
        [
          "When do WebSockets beat HTTP polling?",
          "When the server must push updates promptly or messages are frequent and small. Polling wastes requests and still lags; a WebSocket keeps one open channel for instant two-way messages."
        ],
        [
          "What is a Socket.io room for?",
          "It groups connections so an event reaches only the relevant audience — everyone viewing one lesson, for example — instead of broadcasting to all clients."
        ],
        [
          "Why use exponential backoff on reconnect?",
          "It spaces retries out so thousands of clients do not hammer a recovering server at the same instant, while still reconnecting quickly after brief drops."
        ],
        [
          "Why is scaling WebSockets harder than scaling HTTP?",
          "Connections are stateful and long-lived, so messages must be routed to the specific server holding each client, usually via a pub/sub backbone like Redis and sticky sessions."
        ]
      ],
      "cards": [
        [
          "WebSocket",
          "A persistent two-way connection upgraded from HTTP, letting either side send messages at any time with low overhead."
        ],
        [
          "Polling",
          "Repeatedly asking the server for updates over HTTP — simple, but wasteful and laggy compared with a push channel."
        ],
        [
          "Socket.io event",
          "A named message with a payload, sent with emit and received with on, forming the vocabulary of a real-time app."
        ],
        [
          "Room",
          "A named group of connections that receive events together, like everyone viewing one lesson."
        ],
        [
          "Heartbeat",
          "Periodic ping/pong messages that detect dead connections quickly so they can be cleaned up and reconnected."
        ],
        [
          "Pub/sub backbone",
          "A shared message bus like Redis that relays events between multiple WebSocket servers so any client can be reached."
        ]
      ],
      "striver": null,
      "leetcode": null
    },
    {
      "id": "9.10",
      "module": "M9",
      "moduleTitle": "M9 — Industry Add-Ons",
      "title": "Web Performance & Core Web Vitals",
      "sub": "Fast is a feature users can feel",
      "mins": 35,
      "track": "industry",
      "url": "lessons/9-10.html",
      "yt": {
        "url": "https://www.youtube.com/watch?v=qnpWUFPD7TM",
        "title": "How to Improve Core Web Vitals: PageSpeed Insights and Search Console, Step by Step (2026)",
        "channel": "DigitalTreed"
      },
      "subtopics": [
        "1. Core Web Vitals: three numbers that describe feel",
        "2. Images: usually the biggest win",
        "3. JavaScript: split it, defer it, shrink it",
        "4. Caching headers and measuring with Lighthouse"
      ],
      "checks": [
        [
          "What do LCP, CLS and INP each measure?",
          "LCP measures when the main content appears, CLS measures how much the layout shifts while loading, and INP measures how quickly the page responds to interactions."
        ],
        [
          "Why declare width and height on images?",
          "The browser reserves the right space before the image loads, so content does not jump when it arrives — keeping CLS near zero."
        ],
        [
          "Why can a versioned asset be cached for a year?",
          "Its URL changes whenever the file changes, so the old cached copy is simply never requested again. HTML pointing at it must revalidate quickly instead."
        ],
        [
          "Why does JavaScript hurt INP more than its download size suggests?",
          "It also costs parse and execution time on the main thread, and while it runs the page cannot respond to taps or clicks."
        ]
      ],
      "cards": [
        [
          "LCP",
          "Largest Contentful Paint: when the main content renders. Good is under 2.5 seconds."
        ],
        [
          "CLS",
          "Cumulative Layout Shift: how much visible content jumps during load. Good is under 0.1."
        ],
        [
          "INP",
          "Interaction to Next Paint: how quickly the page visibly responds to a tap or click. Good is under 200ms."
        ],
        [
          "Code splitting",
          "Dividing JavaScript so each page loads only the code it needs, instead of one bundle for the whole site."
        ],
        [
          "Lazy loading",
          "Deferring off-screen resources like images until they are near the viewport, saving initial load time."
        ],
        [
          "Immutable cache",
          "A Cache-Control setting telling browsers a versioned file will never change at that URL, so it can be cached for a year."
        ]
      ],
      "striver": null,
      "leetcode": null
    }
  ]
};
