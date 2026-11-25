# Full Stack Development with AI — Study Lessons

A multi-page study-lessons website: **127 lessons across 12 modules**, from true-beginner basics (HTML, CSS, JS, Python, Git, VS Code) through Node.js, Firebase, Gemini AI and Android — plus a full **DSA module** (Striver A2Z + LeetCode) and an **Industry Add-Ons module** (React hooks, TypeScript, SQL deep, testing, system design, AWS, Next.js) — built from the real Skillzify v2 stack.

- **Basics** Start From Zero — HTML, CSS, JavaScript, Python, Git & VS Code (10 lessons)
- **Module D** DSA — Data Structures & Algorithms (17 lessons): complexity, arrays, strings, recursion, linked lists, stacks/queues, sorting & binary search, trees, heaps, graphs, DP, interview simulation, sliding window, two pointers deep, greedy, bit manipulation, tries
- **Module 0** Foundations — How the Web Actually Works (11 lessons)
- **Module 1** JavaScript Deep + Modern Frontend (10 lessons)
- **Module 2** Python Fluency — The Language Skillzify Teaches & Uses (11 lessons)
- **Module 3** Backend — Node.js & Express, Properly (10 lessons)
- **Module 4** Data & Auth — Firebase, plus SQL (9 lessons)
- **Module 5** AI Engineering — From Gemini Calls to RAG Systems ★ (11 lessons)
- **Module 6** Product Tools — Editor, In-Browser Runtime & Diagrams (9 lessons)
- **Module 7** Android — Kotlin & Jetpack Compose (10 lessons)
- **Module 8** DevOps, Cloud & Shipping Like a Professional (9 lessons)
- **Module 9** Industry Add-Ons — React hooks, TypeScript, SQL deep, Vitest/Jest, system design, AWS, Docker Compose, Next.js, WebSockets, web performance (10 lessons)

Every lesson has its own page: Watch (YouTube), Read (collapsible), Flashcards (click to flip, shuffle), Code (syntax-highlighted, with a "Try it" runner for JavaScript snippets — Python/HTML/CSS are read-only), Practice (DSA lessons include an in-browser coding challenge with expected-output checking), Check (scored quiz with instant feedback + retry, plus a bonus flashcard round), Interview, Notes — plus a ☆ Mark for review star that adds the lesson to the dashboard Review list. The dashboard also has a **Daily challenge** card (rotates by date, +5 XP), and a dedicated **Practice page** runs mixed per-module quizzes drawn from every lesson's checks and flashcards, with a results breakdown. A light/dark theme toggle sits in the top bar (dark is the default). Progress, XP (+20/lesson, +5/quiz, +5/challenge, +5/daily), notes and mastery checks save in the browser on the device you study on (localStorage only — no account, no backend).

## Timeline

**31 weeks, 27 Nov 2026 – 30 Jun 2027** — full-stack + DSA together: full-stack lessons plus a daily 45–60 min DSA block, LeetCode Weekly Contest every Sunday, Saturday for re-solving the week's mistakes from the mistake log (re-solve after 3 and 7 days), one rest day a week. Wk 1–2 Basics + DSA Phase 1 (light — December events), Wk 3–4 M0 + DSA (Hacktopia 18–20 Dec), Wk 5–6 M1 + DSA Phase 2, Wk 7–8 M2, Wk 9–11 M3 + DSA Phase 3, Wk 12–13 M4 + DSA Phase 4 (interview simulation), Wk 14–17 M5 (the core AI month) + DSA patterns (D.13–D.17), Wk 18 M6, Wk 19–21 M7, Wk 22–25 M8, Wk 26–28 M9 Industry Add-Ons, Wk 29–31 capstone (Skillzify Mini rebuild) + applications. React, SQL and AWS are honestly flagged as industry add-ons — they are not in Skillzify itself.

## Structure

```
index.html                  Dashboard home (progress ring, XP + level bar, DSA progress + "DSA today" card,
                            Daily challenge card, Review list, search, track filters + mobile filter dropdown,
                            collapsible module cards, timeline)
practice.html               Mixed per-module practice quizzes with results breakdown
modules/b.html … m9.html    Module overviews (12) with lesson lists, progress + 3-point mastery self-check, Jump-to-lesson dropdown
modules/d.html              DSA module overview
lessons/b-1.html … 9-10.html One page per lesson (127 total), prev/next flows Basics → DSA → M0 → … → M9
assets/css/style.css        Dark Skillzify-style theme + light theme (original palette + YouTube buttons, quiz, toast,
                            compact layout, accordions, flashcards, dropdowns, runner, syntax highlighting)
assets/js/data.js           Generated: window.FSAI — all 127 lessons (title, subtopics, track, video, checks, flashcards)
assets/js/app.js            Shared progress engine (localStorage keys fsai_progress_v2 / fsai_notes_v2 / fsai_theme)
data/                       Source data: original MODULES+EXTRA, new-lesson batches (A/B/C), DSA lessons, YouTube link JSONs
build.js                    Generator — reads data/, writes every page
verify.js                   Verification — HTTP 200 sweep, YouTube button check, prev/next chain, stale counts,
                            accordions/flashcards/quiz/review-star/theme/practice/challenge checks
original-index-backup.html  Verbatim copy of the original single-page site (180 KB, 37 lessons)
```

All links are relative, so the site works under `/full-stack-development-with-ai-roadmap/` on GitHub Pages.

## Rebuild

```bash
node build.js    # regenerates index.html, practice.html, modules/*.html, lessons/*.html, assets/js/data.js, assets/css/style.css
node verify.js   # checks all pages return 200, all 127 Watch buttons carry the right YouTube URL,
                 # the prev/next chain, data.js contents, and that no stale counts remain
```

Do not hand-edit generated pages — change the data in `data/` or the templates in `build.js` and rebuild.

## Run locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

## Live site

Deployed with GitHub Pages from `main`.
