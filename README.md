# Full Stack Development with AI — Study Lessons

A multi-page study-lessons website: **93 lessons across 10 modules**, from true-beginner basics (HTML, CSS, JS, Python, Git, VS Code) through Node.js, Firebase, Gemini AI and Android — built from the real Skillzify v2 stack.

- **Basics** Start From Zero — HTML, CSS, JavaScript, Python, Git & VS Code (10 lessons)
- **Module 0** Foundations — How the Web Actually Works (10 lessons)
- **Module 1** JavaScript Deep + Modern Frontend (9 lessons)
- **Module 2** Python Fluency — The Language Skillzify Teaches & Uses (10 lessons)
- **Module 3** Backend — Node.js & Express, Properly (9 lessons)
- **Module 4** Data & Auth — Firebase, plus SQL (9 lessons)
- **Module 5** AI Engineering — From Gemini Calls to RAG Systems ★ (10 lessons)
- **Module 6** Product Tools — Editor, In-Browser Runtime & Diagrams (8 lessons)
- **Module 7** Android — Kotlin & Jetpack Compose (9 lessons)
- **Module 8** DevOps, Cloud & Shipping Like a Professional (9 lessons)

Every lesson has its own page with a YouTube video to watch, the concept explained in plain language with real code from Skillzify v2, common mistakes, interview questions with model answers, a build task, and an interactive self-check quiz. Progress, XP (+20/lesson, +5/quiz), notes and mastery checks save in the browser on the device you study on (localStorage only — no account, no backend).

## Timeline

~25 weeks starting **27 Nov 2026** (after exams), with DSA running in parallel throughout: Wk 1–2 Basics, Wk 3–4 M0 (light — December events + Hacktopia 18–20 Dec), Wk 5–6 M1, Wk 7–8 M2, Wk 9–11 M3, Wk 12–13 M4, Wk 14–17 M5 (the core AI month), Wk 18 M6, Wk 19–21 M7, Wk 22–25 M8 — timed for Summer 2027 internship applications. React, SQL and AWS are honestly flagged as industry add-ons — they are not in Skillzify itself.

## Structure

```
index.html                  Dashboard home (progress ring, search, track filters, module cards, timeline)
modules/b.html … m8.html    Module overviews with lesson lists, progress + 3-point mastery self-check
lessons/b-1.html … 8-9.html One page per lesson (93 total), prev/next flows Basics → M0 → … → M8
assets/css/style.css        Dark Skillzify-style theme (original palette + YouTube buttons, quiz, toast)
assets/js/data.js           Generated: window.FSAI — all 93 lessons (title, subtopics, track, video)
assets/js/app.js            Shared progress engine (localStorage keys fsai_progress_v2 / fsai_notes_v2)
data/                       Source data: original MODULES+EXTRA, new-lesson batches, YouTube link JSONs
build.js                    Generator — reads data/, writes every page
verify.js                   Verification — HTTP 200 sweep, YouTube button check, prev/next chain, stale counts
original-index-backup.html  Verbatim copy of the original single-page site (180 KB, 37 lessons)
```

All links are relative, so the site works under `/full-stack-development-with-ai-roadmap/` on GitHub Pages.

## Rebuild

```bash
node build.js    # regenerates index.html, modules/*.html, lessons/*.html, assets/js/data.js, assets/css/style.css
node verify.js   # checks all pages return 200, all 93 Watch buttons carry the right YouTube URL,
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
