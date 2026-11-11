/* Build script for the multi-page Full Stack + AI study site.
   Reads data/ (original MODULES+EXTRA, new lesson batches, YouTube link JSONs),
   merges + renumbers to 93 lessons across 10 modules, and writes:
   index.html, modules/*.html, lessons/*.html, assets/js/data.js, assets/css/style.css.
   Run: node build.js   (from ~/workspace/full-stack-ai-roadmap/)
   Node only: exec file writes are blocked for python/bash in this sandbox, Node fs works. */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const DATA = path.join(ROOT, 'data');

function load(name) { return JSON.parse(fs.readFileSync(path.join(DATA, name), 'utf8')); }
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function fail(msg) { console.error('BUILD FAIL: ' + msg); process.exit(1); }

/* ---------------- inputs ---------------- */
const orig = load('original-modules.json');
const MODULES0 = orig.MODULES, EXTRA = orig.EXTRA;
const batchA = load('new-lessons-batch-a.json');
const batchB = load('new-lessons-batch-b.json');
const ytP1 = load('youtube-links-part1-0-2.json');
const ytP2 = load('youtube-links-part2-3-5.json');
const ytP3 = load('youtube-links-part3-6-8.json');
const ytBas = load('youtube-links-basics.json');
const ytDeep = load('youtube-links-new-deep.json');

/* ---------------- renumbering (original id -> new id, verified by title) ---------------- */
const RENUMBER = {
  '0.1': '0.1', '0.2': '0.4', '0.3': '0.5', '0.4': '0.10',
  '1.1': '1.1', '1.2': '1.4', '1.3': '1.7', '1.4': '1.9',
  '2.1': '2.1', '2.2': '2.3', '2.3': '2.6', '2.4': '2.10',
  '3.1': '3.1', '3.2': '3.2', '3.3': '3.4', '3.4': '3.6',
  '4.1': '4.1', '4.2': '4.2', '4.3': '4.4', '4.4': '4.9',
  '5.1': '5.1', '5.2': '5.3', '5.3': '5.5', '5.4': '5.9', '5.5': '5.7', '5.6': '5.10',
  '6.1': '6.1', '6.2': '6.3', '6.3': '6.5',
  '7.1': '7.1', '7.2': '7.3', '7.3': '7.5', '7.4': '7.8',
  '8.1': '8.1', '8.2': '8.3', '8.3': '8.6', '8.4': '8.8'
};
const EXPECTED_TITLE = {
  '0.1': 'How a Web Page Loads', '0.2': 'Semantic HTML & Page Structure',
  '0.3': 'CSS: Box Model, Variables & Themes', '0.4': 'JavaScript Basics & the DOM',
  '1.1': 'ES6+ Essentials', '1.2': 'Async JavaScript & Fetch',
  '1.3': 'State & Data-Driven Rendering', '1.4': 'React Fundamentals',
  '2.1': 'Python Core, Written Properly', '2.2': 'OOP in Python',
  '2.3': 'Generators, JSON & File Pipelines', '2.4': 'NumPy & Pandas Basics',
  '3.1': 'Node.js & the Event Loop', '3.2': 'Express: Routing & Middleware',
  '3.3': 'REST API Design & Validation', '3.4': 'Protecting Your API: Rate Limits, Caps & Secrets',
  '4.1': 'Firebase Authentication', '4.2': 'Firestore Data Modelling',
  '4.3': 'Sync & Merge Rules', '4.4': 'Security Rules + the SQL Contrast',
  '5.1': 'How LLMs Actually Work', '5.2': 'Calling the Gemini API',
  '5.3': 'Prompt Engineering Patterns', '5.4': 'Reliability: Failover, Key Rotation & Cost',
  '5.5': 'Embeddings & RAG', '5.6': 'Guardrails & Evals',
  '6.1': 'WebAssembly & Pyodide', '6.2': 'CodeMirror: Building a Real Code Editor',
  '6.3': 'Mermaid: Diagrams as Data',
  '7.1': 'Kotlin for JS/Python Developers', '7.2': 'Jetpack Compose UI',
  '7.3': 'ViewModel, Navigation & Coroutines', '7.4': 'Firebase on Android & Chaquopy',
  '8.1': 'Git Workflows', '8.2': 'GitHub Actions CI',
  '8.3': 'Hosting Models: Render, Pages & AWS Concepts', '8.4': 'Secrets, Security Posture & Analytics'
};

/* ---------------- module definitions ---------------- */
const WEEKS = {
  B: 'Weeks 1–2 • 27 Nov – 10 Dec', M0: 'Weeks 3–4 • 11 – 24 Dec',
  M1: 'Weeks 5–6 • 25 Dec – 7 Jan', M2: 'Weeks 7–8 • 8 – 21 Jan',
  M3: 'Weeks 9–11 • 22 Jan – 11 Feb', M4: 'Weeks 12–13 • 12 – 25 Feb',
  M5: 'Weeks 14–17 • 26 Feb – 25 Mar', M6: 'Week 18 • 26 Mar – 1 Apr',
  M7: 'Weeks 19–21 • 2 – 22 Apr', M8: 'Weeks 22–25 • 23 Apr – 20 May'
};
const MODULE_ORDER = ['B', 'M0', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8'];
const MODULES = [];
MODULES.push({
  key: 'B', id: 'B', badge: 'B', cat: 'basics', track: 'basics',
  title: 'Basics — Start From Zero',
  desc: 'True-beginner foundations: HTML, CSS and JavaScript from a blank file, Python from zero, Git and VS Code. No prior knowledge assumed — if you have never written a line of code, start here.',
  meta: [WEEKS.B, 'Skills: HTML • CSS • JS • Python • Git • VS Code']
});
for (const m of MODULES0) {
  const key = 'M' + m.id;
  MODULES.push({
    key: key, id: key, badge: m.badge, cat: m.cat,
    track: key === 'M4' ? 'database' : key === 'M7' ? 'android' : key === 'M5' ? 'ai' : key === 'M8' ? 'devops' : m.cat,
    title: m.title, desc: m.desc,
    meta: [WEEKS[key], m.meta[1]]
  });
}
const MODULE_BY_KEY = {};
for (const m of MODULES) MODULE_BY_KEY[m.key] = m;

/* track per lesson id prefix (task spec) */
function trackFor(id) {
  if (id.indexOf('B.') === 0) {
    const n = parseInt(id.slice(2), 10);
    if (n <= 6) return 'frontend';
    if (n <= 8) return 'backend';
    return 'devops';
  }
  const mod = id.split('.')[0];
  if (mod === '0' || mod === '1' || mod === '6') return 'frontend';
  if (mod === '2' || mod === '3') return 'backend';
  if (mod === '4') return 'database';
  if (mod === '5') return 'ai';
  if (mod === '7') return 'android';
  return 'devops';
}
function moduleKeyFor(id) {
  if (id.indexOf('B.') === 0) return 'B';
  return 'M' + id.split('.')[0];
}
function fileFor(id) { return id.replace('.', '-').toLowerCase() + '.html'; }

/* ---------------- YouTube maps ---------------- */
/* original videos by OLD id */
const ytByOld = {};
for (const v of [].concat(ytP1, ytP2, ytP3)) ytByOld[v.id] = { url: v.youtube_url, title: v.video_title, channel: v.channel };
const ytBasicsById = {};
for (const v of ytBas) ytBasicsById[v.id] = { url: v.youtube_url, title: v.video_title, channel: v.channel };

/* resolved video by NEW lesson id: {url, title, channel, sharedWith|null} */
const ytByNew = {};
/* originals: old id -> new id */
for (const m of MODULES0) {
  for (const l of m.lessons) {
    const oldId = l.id;
    if (l.t !== EXPECTED_TITLE[oldId]) fail('original title mismatch for ' + oldId + ': got ' + JSON.stringify(l.t));
    const v = ytByOld[oldId];
    if (!v) fail('no original YouTube video for old id ' + oldId);
    ytByNew[RENUMBER[oldId]] = { url: v.url, title: v.title, channel: v.channel, sharedWith: null };
  }
}
/* new lessons: direct url first, else shared resolution */
const DROP = { '4.9': true, '5.10': true, '8.8': true }; /* batch-B duplicates of originals */
const newLessons = [];
for (const L of batchA.lessons.concat(batchB.lessons)) {
  if (DROP[L.id]) { console.log('DROP duplicate batch lesson ' + L.id + ' ' + JSON.stringify(L.t)); continue; }
  newLessons.push(L);
}
/* direct videos from batches (incl. Basics) */
for (const L of newLessons) {
  if (L.youtube_url) {
    ytByNew[L.id] = { url: L.youtube_url, title: L.video_title || '', channel: L.channel || '', sharedWith: null };
  }
}
/* cross-check Basics against the basics JSON */
for (const L of newLessons) {
  if (L.id.indexOf('B.') === 0) {
    const b = ytBasicsById[L.id];
    if (!b) fail('no basics video for ' + L.id);
    if (b.url !== L.youtube_url) fail('basics URL mismatch for ' + L.id);
  }
}
/* shared resolution. NOTE: batch 4.6 says yt_shared_with "4.4", but the deep-links JSON
   explicitly documents the target as the ORIGINAL 4.4 video (Philipp Lackner security
   rules), renumbered to 4.9 in the new scheme. "4.4" in the batch is old numbering.
   Resolving 4.6 -> 4.9 (new) is the documented intent; every other shared_with agrees
   between batch and deep JSON in new numbering. */
const SHARED_OVERRIDE = { '4.6': '4.9' };
function resolveShared(id, target) {
  const seen = [id];
  let cur = target;
  while (true) {
    if (seen.indexOf(cur) !== -1) fail('shared-video cycle at ' + id + ' -> ' + cur);
    seen.push(cur);
    const v = ytByNew[cur];
    if (!v) fail('shared target ' + cur + ' has no video (for lesson ' + id + ')');
    if (!v.sharedWith) return { url: v.url, title: v.title, channel: v.channel, sharedWith: cur };
    cur = v.sharedWith;
  }
}
for (const L of newLessons) {
  if (!L.youtube_url) {
    if (!L.yt_shared_with) fail('new lesson ' + L.id + ' has neither youtube_url nor yt_shared_with');
    const target = SHARED_OVERRIDE[L.id] || L.yt_shared_with;
    if (SHARED_OVERRIDE[L.id]) console.log('SHARED OVERRIDE ' + L.id + ': batch says ' + L.yt_shared_with + ', deep JSON says ' + target + ' — using ' + target);
    ytByNew[L.id] = resolveShared(L.id, target);
  }
}

/* ---------------- mastery ---------------- */
const MASTERY = {};
for (const src of [batchA.mastery, batchB.mastery]) {
  for (const k of Object.keys(src)) MASTERY[k] = src[k];
}
for (const key of MODULE_ORDER) {
  if (!MASTERY[key] || MASTERY[key].length !== 3) fail('mastery missing/not 3 points for ' + key);
}

/* ---------------- assemble the 93 lessons ---------------- */
function splitBody(body) {
  /* returns {readHtml, pres:[inner html of each <pre>...</pre>]} */
  const pres = [];
  const readHtml = body.replace(/<pre>([\s\S]*?)<\/pre>/g, function (m, inner) {
    pres.push(inner);
    return '<p class="code-ref">▸ Code example — see the <a href="#code">Code section</a> below.</p>';
  });
  return { readHtml: readHtml, pres: pres };
}
function subtopicsFrom(html) {
  const out = [];
  const re = /<h4>([\s\S]*?)<\/h4>/g;
  let m;
  while ((m = re.exec(html)) !== null) out.push(m[1].replace(/<[^>]+>/g, '').trim());
  return out;
}
function readWithIdsAndRefs(readHtml, ytUrl) {
  /* add id="sub-N" to each <h4> and a small YouTube-reference link after it */
  let n = 0;
  return readHtml.replace(/<h4>([\s\S]*?)<\/h4>/g, function (m, inner) {
    n++;
    return '<h4 id="sub-' + n + '">' + inner + '</h4>' +
      '<p class="sub-yt"><a href="' + esc(ytUrl) + '" target="_blank" rel="noopener">▶ YouTube reference — the video for this lesson</a></p>';
  });
}

const LESSONS = [];
/* originals (renumbered) */
for (const m of MODULES0) {
  for (const l of m.lessons) {
    const oldId = l.id;
    const newId = RENUMBER[oldId];
    const extra = EXTRA[oldId] || null;
    const isM0M2 = (m.id === 0 || m.id === 1 || m.id === 2);
    LESSONS.push({
      id: newId, oldId: oldId, source: 'original',
      title: l.t, sub: l.sub, mins: l.mins, goal: l.goal, body: l.body,
      task: l.task, checks: l.checks,
      interview: isM0M2 ? (extra ? extra.i : null) : (l.interview || null),
      mistakes: isM0M2 ? (extra ? extra.m : null) : null
    });
  }
}
/* new lessons (after drops) */
for (const L of newLessons) {
  if (moduleKeyFor(L.id) !== L.module) fail('new lesson ' + L.id + ' module field is ' + L.module);
  LESSONS.push({
    id: L.id, oldId: null, source: 'new',
    title: L.t, sub: L.sub, mins: L.mins, goal: L.goal, body: L.body,
    task: L.task, checks: L.checks, interview: L.interview || null, mistakes: null
  });
}
/* order: B, M0..M8, numeric within module */
LESSONS.sort(function (a, b) {
  const ka = MODULE_ORDER.indexOf(moduleKeyFor(a.id));
  const kb = MODULE_ORDER.indexOf(moduleKeyFor(b.id));
  if (ka !== kb) return ka - kb;
  return parseInt(a.id.split('.')[1], 10) - parseInt(b.id.split('.')[1], 10);
});
if (LESSONS.length !== 93) fail('expected 93 lessons, got ' + LESSONS.length);
const seenIds = {};
for (const L of LESSONS) {
  if (seenIds[L.id]) fail('duplicate lesson id ' + L.id);
  seenIds[L.id] = true;
  const yt = ytByNew[L.id];
  if (!yt || !yt.url) fail('no YouTube URL resolved for ' + L.id);
  L.yt = yt;
  L.module = moduleKeyFor(L.id);
  L.moduleTitle = MODULE_BY_KEY[L.module].title;
  L.track = trackFor(L.id);
  L.url = 'lessons/' + fileFor(L.id);
  const split = splitBody(L.body);
  L.readHtml = readWithIdsAndRefs(split.readHtml, yt.url);
  L.pres = split.pres;
  L.subtopics = subtopicsFrom(L.body);
  if (L.subtopics.length < 3 || L.subtopics.length > 4) console.log('WARN subtopics ' + L.id + ': ' + L.subtopics.length);
  if (!L.checks || L.checks.length !== 2) fail('checks != 2 for ' + L.id);
  if (!L.interview || L.interview.length !== 2) console.log('WARN interview missing/short for ' + L.id);
  if (L.goal.indexOf('<') !== -1 || L.task.indexOf('<') !== -1) console.log('WARN goal/task contains < for ' + L.id);
}
const perModule = {};
for (const L of LESSONS) perModule[L.module] = (perModule[L.module] || 0) + 1;
console.log('per-module counts:', JSON.stringify(perModule));
const EXPECTED_COUNTS = { B: 10, M0: 10, M1: 9, M2: 10, M3: 9, M4: 9, M5: 10, M6: 8, M7: 9, M8: 9 };
for (const k of MODULE_ORDER) {
  if (perModule[k] !== EXPECTED_COUNTS[k]) fail('module ' + k + ' count ' + perModule[k] + ', expected ' + EXPECTED_COUNTS[k]);
}

/* ---------------- data.js ---------------- */
const fsai = {
  total: 93,
  modules: MODULES.map(function (m) {
    return { id: m.key, badge: m.badge, title: m.title, desc: m.desc, meta: m.meta, track: m.track, count: perModule[m.key] };
  }),
  lessons: LESSONS.map(function (L) {
    return {
      id: L.id, module: L.module, moduleTitle: L.moduleTitle, title: L.title, sub: L.sub,
      mins: L.mins, track: L.track, url: L.url,
      yt: { url: L.yt.url, title: L.yt.title, channel: L.yt.channel },
      subtopics: L.subtopics
    };
  })
};
let dataJs = 'window.FSAI = ' + JSON.stringify(fsai, null, 2) + ';\n';
dataJs = dataJs.replace(/<\/script/gi, '<\\/script');
fs.mkdirSync(path.join(ROOT, 'assets', 'js'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'assets', 'js', 'data.js'), dataJs);
console.log('wrote assets/js/data.js (' + fsai.lessons.length + ' lessons)');

/* ---------------- HTML generation ---------------- */
const PLAY_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>';
function head(title, cssPath) {
  return '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8"/>\n' +
    '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>\n' +
    '<meta name="color-scheme" content="dark"/>\n<link rel="icon" href="data:,"/>\n' +
    '<title>' + esc(title) + '</title>\n' +
    '<link rel="preconnect" href="https://fonts.googleapis.com">\n' +
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
    '<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet">\n' +
    '<link rel="stylesheet" href="' + cssPath + '"/>\n</head>\n';
}
function topbar(homePrefix) {
  const h = homePrefix;
  return '<header class="topbar"><div class="topbar-inner">\n' +
    '<a class="brand" href="' + h + 'index.html"><span class="brand-dot">&lt;/&gt;</span> Full Stack + AI — Study Lessons</a>\n' +
    '<nav class="nav" aria-label="Site sections">\n' +
    '<a href="' + h + 'index.html#dashboard">Dashboard</a><a href="' + h + 'index.html#lessons">Lessons</a>' +
    '<a href="' + h + 'index.html#how">How to study</a><a href="' + h + 'index.html#timeline">Schedule</a>' +
    '<a href="' + h + 'index.html#mastery">Mastery check</a>\n' +
    '<span class="xp-badge" data-xp-badge>0 XP</span></nav></div></header>\n';
}
function footer() {
  return '<footer><div class="wrap">Study lessons for Vikas Patil • Skillzify v2 stack verified against the codebase (Nov 2026) • ' +
    '93 lessons • 10 modules • Starts 27 Nov 2026, after exams end 26 Nov • 25-week plan to 20 May 2027 • ' +
    'DSA track runs in parallel throughout — this site covers the full-stack + AI lessons.</div></footer>\n';
}
function scripts(prefix) {
  return '<script src="' + prefix + 'assets/js/data.js"></script>\n<script src="' + prefix + 'assets/js/app.js"></script>\n</body>\n</html>\n';
}
function ytBtnSmall(yt) {
  return '<a class="yt-btn yt-btn-sm" href="' + esc(yt.url) + '" target="_blank" rel="noopener" title="' + esc(yt.title) + ' — ' + esc(yt.channel) + '">' + PLAY_SVG + 'Watch</a>';
}
function lessonRow(L, prefix, withStatus) {
  /* div row (not a nested-anchor): title links to the lesson, Watch is a real
     link opening YouTube in a new tab — no double navigation, works without JS. */
  let s = '<div class="lesson-row">\n' +
    '<span class="lnum">' + esc(L.id) + '</span>\n' +
    '<a class="ltitle" href="' + prefix + L.url + '">' + esc(L.title) + '<span class="lsub">' + esc(L.sub) + '</span></a>\n' +
    ytBtnSmall(L.yt) + '\n' +
    '<span class="lmins">' + L.mins + ' min</span>\n';
  if (withStatus) s += '<span class="lstatus" data-lesson-status="' + esc(L.id) + '">Not started</span>\n';
  s += '</div>\n';
  return s;
}
function moduleCard(m, prefix) {
  const lessons = LESSONS.filter(function (L) { return L.module === m.key; });
  let s = '<article class="module" data-cat="' + m.track + '" data-module-progress="' + m.key + '">\n' +
    '<div class="module-head"><span class="phase-badge">' + esc(m.badge) + '</span><div>\n' +
    '<h3><a href="' + prefix + 'modules/' + m.key.toLowerCase() + '.html">' + esc(m.title) + '</a></h3>\n' +
    '<p>' + esc(m.desc) + '</p>\n' +
    '<div class="meta"><span>' + esc(m.meta[0]) + '</span><span>' + esc(m.meta[1]) + '</span><span>' + lessons.length + ' lessons</span></div>\n' +
    '</div></div>\n' +
    '<div class="mod-progress"><div class="progress-bar"><div class="progress-fill"></div></div><span data-module-count>0 / ' + lessons.length + ' done</span></div>\n' +
    '<div class="lesson-list">\n';
  for (const L of lessons) s += lessonRow(L, prefix, false);
  s += '</div></article>\n';
  return s;
}

/* ---------------- index.html (dashboard home) ---------------- */
const TIMELINE = [
  ['Wk 1–2', '27 Nov – 10 Dec', 'Basics — Start From Zero (Lessons B.1–B.10)', 'HTML, CSS, JavaScript and Python from zero, plus Git and VS Code. No prior knowledge assumed.', '10 lessons'],
  ['Wk 3–4', '11 – 24 Dec', 'Module 0 — Foundations (Lessons 0.1–0.10)', 'How pages load, HTTP & DNS, rendering, semantic HTML, CSS, forms, animation, accessibility, JS & the DOM. Light weeks — December events & Hacktopia 18–20 Dec.', '10 lessons'],
  ['Wk 5–6', '25 Dec – 7 Jan', 'Module 1 — JS Deep + React (Lessons 1.1–1.9)', 'Closures, this & prototypes, async & fetch, the event loop, DOM events, state, error handling, then React fundamentals.', '9 lessons'],
  ['Wk 7–8', '8 – 21 Jan', 'Module 2 — Python Fluency (Lessons 2.1–2.10)', 'Core Python, data structures, OOP, comprehensions, files & JSON pipelines, NumPy/Pandas, testing with pytest.', '10 lessons'],
  ['Wk 9–11', '22 Jan – 11 Feb', 'Module 3 — Node & Express (Lessons 3.1–3.9)', 'Event loop, routing & middleware, REST design, auth & JWT, rate limits, testing, GraphQL. Take the full 3 weeks.', '9 lessons'],
  ['Wk 12–13', '12 – 25 Feb', 'Module 4 — Firebase + SQL (Lessons 4.1–4.9)', 'Auth, Firestore modelling & queries, merge rules, security rules, offline persistence, and the SQL contrast.', '9 lessons'],
  ['Wk 14–17', '26 Feb – 25 Mar', 'Module 5 — AI Engineering ★ (Lessons 5.1–5.10)', 'LLM concepts → Gemini API → prompt patterns → structured output → embeddings & RAG → failover & guardrails. The core month.', '10 lessons'],
  ['Wk 18', '26 Mar – 1 Apr', 'Module 6 — Editor & Runtime (Lessons 6.1–6.8)', 'WASM/Pyodide, CodeMirror, Mermaid, DevTools debugging and performance profiling. A palate cleanser after the AI month.', '8 lessons'],
  ['Wk 19–21', '2 – 22 Apr', 'Module 7 — Android (Lessons 7.1–7.9)', 'Kotlin → Compose → coroutines → navigation → Room → Firebase Android → publishing to the Play Store.', '9 lessons'],
  ['Wk 22–25', '23 Apr – 20 May', 'Module 8 — DevOps & Shipping (Lessons 8.1–8.9)', 'Git strategies, Actions CI/CD, Docker, Render, secrets & monitoring. Timed for Summer 2027 internship applications.', '9 lessons']
];
function buildHome() {
  let h = head('Full Stack Development with AI — Study Lessons', 'assets/css/style.css');
  h += '<body data-page="home">\n' + topbar('');
  h += '<main class="wrap">\n';
  /* hero */
  h += '<section class="hero"><div class="hero-grid"><div>\n' +
    '<div class="eyebrow">For Vikas • Starts 27 Nov 2026 • After exams end 26 Nov</div>\n' +
    '<h1>Full study lessons for the whole Skillzify stack — with AI.</h1>\n' +
    '<p class="lead">This is no longer just a roadmap. Every module is now a set of <b>complete written lessons</b>: watch the video, read the concept explained in plain language, see the real code, how that exact idea works inside Skillzify v2, a hands-on practice task, and self-check questions with answers. Read a lesson, do the task, check yourself — then move on.</p>\n' +
    '<div class="chips"><span class="chip">10 modules • 93 lessons</span><span class="chip">~25 weeks • 27 Nov 2026 – 20 May 2027</span><span class="chip">Video + reading + practice in every lesson</span><span class="chip">DSA in parallel, daily</span></div>\n' +
    '<div class="ctas"><a class="btn btn-primary" href="lessons/b-1.html">Open Lesson B.1 — HTML Base</a><a class="btn btn-secondary" href="#timeline">See the week-by-week schedule ↓</a></div>\n' +
    '<p style="font-size:13.5px;color:var(--faint);margin-top:14px;max-width:560px">The rule for every lesson: <b style="color:var(--text)">Watch → read it → say it back in your own words → do the practice task → answer the self-checks.</b> If you can’t explain it, you haven’t learned it yet.</p>\n' +
    '</div>\n' +
    '<aside class="stack-card" aria-label="Course overview">\n' +
    '<h3>What you’re studying</h3><p>93 lessons across the 7 layers of Skillzify, plus the industry add-ons (React, SQL, RAG, AWS concepts). Progress, XP, notes and quiz results save in this browser, on this device.</p>\n' +
    '<div class="layer"><b>Browser</b><span>HTML • CSS • Vanilla JS</span></div>\n' +
    '<div class="layer"><b>In-browser Python</b><span>Pyodide • CodeMirror • Mermaid</span></div>\n' +
    '<div class="layer"><b>Backend</b><span>Node 20 • Express 4</span></div>\n' +
    '<div class="layer"><b>Data &amp; Auth</b><span>Firebase Auth • Firestore</span></div>\n' +
    '<div class="layer"><b>AI</b><span>Gemini API • RAG • Evals</span></div>\n' +
    '<div class="layer"><b>Mobile</b><span>Kotlin • Jetpack Compose</span></div>\n' +
    '<div class="layer"><b>Shipping</b><span>GitHub Actions • Render • GA4</span></div>\n' +
    '<div class="progress-box"><div style="display:flex;justify-content:space-between;font-size:13px;font-weight:800"><span>Lessons completed</span><span id="progText">0 / 93</span></div><div class="progress-bar"><div class="progress-fill" id="progFill"></div></div></div>\n' +
    '</aside></div></section>\n';
  /* dashboard */
  h += '<section class="section" id="dashboard">\n<h2>Your study dashboard</h2><p class="sub">Progress, XP and quiz results are saved in this browser on this device, so you can close the tab and pick up where you left off.</p>\n' +
    '<div class="dash">\n' +
    '<div class="ring-wrap" role="img" aria-label="Overall course progress ring">\n' +
    '<svg width="170" height="170" viewBox="0 0 170 170"><circle class="ring-bg" cx="85" cy="85" r="74"></circle><circle class="ring-fg" id="ringFg" cx="85" cy="85" r="74" stroke-dasharray="464.96" stroke-dashoffset="464.96"></circle></svg>\n' +
    '<div class="ring-center"><div><b id="ringPct">0%</b><span>Complete</span></div></div></div>\n' +
    '<div style="width:100%">\n<div class="dash-stats">\n' +
    '<div class="stat"><b id="statLessons">0 / 93</b><span>Lessons done</span></div>\n' +
    '<div class="stat"><b id="statXp">0 XP</b><span>XP earned</span></div>\n' +
    '<div class="stat"><b id="statStreak">0 days</b><span>Study streak</span></div>\n' +
    '<div class="stat"><b id="statQuiz">0 passed</b><span>Self-checks passed</span></div>\n' +
    '</div>\n<div class="next-up" id="nextUp"></div>\n</div>\n' +
    '<p class="dash-note">How XP works: <b>+20 XP</b> per completed lesson, <b>+5 XP</b> per self-check you mark “I knew it”. Streak counts consecutive days with at least one completed lesson. Finishing all 10 module mastery checks is the real graduation — the XP is just the scoreboard.</p>\n' +
    '</div></section>\n';
  /* how to study (verbatim from original) */
  h += '<section class="section" id="how">\n<h2>How to study each lesson</h2><p class="sub">You already shipped this stack once — with help. These lessons exist so every file in Skillzify becomes a file you could write from a blank page.</p>\n' +
    '<div class="grid3">\n' +
    '<div class="card"><span class="num">01 — READ ACTIVELY</span><h3>Concept before syntax</h3><p>Each lesson opens with the problem the technology solves and what breaks without it. Don’t skip to the code — the explanation is the lesson; the code is the proof.</p></div>\n' +
    '<div class="card"><span class="num">02 — DO THE TASK</span><h3>Every lesson ends in a build</h3><p>Each lesson has a practice task that recreates a piece of Skillzify in miniature — a theme toggle, a capped API route, a two-user sync test. No task done, no next lesson.</p></div>\n' +
    '<div class="card"><span class="num">03 — CHECK YOURSELF</span><h3>Self-checks with answers</h3><p>Tap a self-check question to reveal the answer only after you’ve said yours out loud. Then keep your daily 30–45 min of Striver DSA running in parallel — it’s a separate track.</p></div>\n' +
    '</div></section>\n';
  /* lessons */
  h += '<section class="section" id="lessons">\n<h2>Lessons — 10 modules, 93 lessons</h2><p class="sub">Work through them in order; each module builds on the last. Tap any lesson to open its own page — video, explanation, code, Skillzify connection, practice task and self-checks.</p>\n';
  h += '<div class="journey" aria-label="Module journey path">\n';
  const journeyLabels = { B: 'Basics', M0: 'Foundations', M1: 'JS Deep', M2: 'Python', M3: 'Node', M4: 'Firebase', M5: 'AI ★', M6: 'Tools', M7: 'Android', M8: 'DevOps' };
  for (const m of MODULES) {
    h += '<a class="jnode" href="modules/' + m.key.toLowerCase() + '.html"><span class="jdot">' + esc(m.badge) + '</span><small>' + esc(journeyLabels[m.key]) + '</small><span class="jbar"><i style="width:0%"></i></span></a>\n';
  }
  h += '</div>\n';
  h += '<div class="search-row">\n<input class="search-input" id="searchInput" type="search" placeholder="Search all 93 lessons — try “merge rules”, “RAG”, “Pyodide”, “coroutines”…" aria-label="Search lessons">\n<span class="search-count">Search covers titles and subtopics</span>\n</div>\n<div id="searchResults"></div>\n';
  h += '<div class="filters" role="group" aria-label="Filter modules">\n' +
    '<button class="filter-btn active" data-filter="all">All modules</button>\n' +
    '<button class="filter-btn" data-filter="basics">Basics</button>\n' +
    '<button class="filter-btn" data-filter="frontend">Frontend</button>\n' +
    '<button class="filter-btn" data-filter="backend">Backend</button>\n' +
    '<button class="filter-btn" data-filter="database">Database</button>\n' +
    '<button class="filter-btn" data-filter="ai">AI</button>\n' +
    '<button class="filter-btn" data-filter="android">Android</button>\n' +
    '<button class="filter-btn" data-filter="devops">DevOps &amp; Cloud</button>\n</div>\n';
  h += '<div id="moduleList">\n';
  for (const m of MODULES) h += moduleCard(m, '');
  h += '</div>\n<p id="noResults" class="hidden" style="color:var(--muted);font-size:14px">No modules in this filter.</p>\n</section>\n';
  /* timeline */
  h += '<section class="section" id="timeline">\n<h2>Week-by-week study schedule</h2><p class="sub">Assumes ~2 focused hours on study days plus your daily DSA block. Hacktopia (18–20 Dec) and the December events sit inside Weeks 3–4 — those weeks are deliberately lighter: use them for short lesson sessions. DSA runs in parallel throughout.</p>\n<div class="timeline">\n';
  for (const w of TIMELINE) {
    h += '<div class="week"><b>' + esc(w[0]) + '<br>' + esc(w[1]) + '</b><div><strong>' + esc(w[2]) + '</strong><p>' + esc(w[3]) + '</p></div><span>' + esc(w[4]) + '</span></div>\n';
  }
  h += '</div></section>\n';
  /* mastery: one item per module, first mastery point of each */
  h += '<section class="section" id="mastery">\n<h2>Mastery check — the finish line</h2><p class="sub">You’re done when you can honestly say all of these — out loud, without notes. One per module; the full 3-point check lives on each module page. This is a self-check list, not a form: nothing here is saved or submitted.</p>\n<ul class="checklist">\n';
  for (const m of MODULES) {
    h += '<li><span class="dot">✓</span><span><b>' + esc(m.badge) + ' — ' + esc(m.title) + ':</b> ' + esc(MASTERY[m.key][0]) + '</span></li>\n';
  }
  h += '</ul>\n<div class="note" style="margin-top:16px"><p><b style="color:var(--text)">A note on courses:</b> these lessons cover the same ground as an all-in-one course (DSA + MERN + AI) but sequenced around <i>your</i> codebase, with Striver (free) carrying the parallel DSA track. If you later add a paid course, slot it into the matching module instead of restarting from zero — Alpha-style DSA into the daily block, Delta-style MERN into Modules 1, 3 and 4, SigmaX-style AI into Module 5.</p></div>\n</section>\n';
  h += '</main>\n' + footer() + scripts('');
  return h;
}

/* ---------------- module pages ---------------- */
function buildModule(m) {
  const lessons = LESSONS.filter(function (L) { return L.module === m.key; });
  const first = lessons[0];
  let h = head(m.title + ' — Full Stack + AI Study Lessons', '../assets/css/style.css');
  h += '<body data-page="module" data-module="' + m.key + '">\n' + topbar('../');
  h += '<main class="wrap">\n';
  h += '<p class="crumb"><a href="../index.html">Home</a> &nbsp;›&nbsp; ' + esc(m.title) + '</p>\n';
  h += '<section class="section"><div class="module module-page">\n' +
    '<div class="module-head"><span class="phase-badge">' + esc(m.badge) + '</span><div>\n' +
    '<h2>' + esc(m.title) + '</h2>\n<p>' + esc(m.desc) + '</p>\n' +
    '<div class="meta"><span>' + esc(m.meta[0]) + '</span><span>' + esc(m.meta[1]) + '</span><span>' + lessons.length + ' lessons</span></div>\n' +
    '</div></div>\n' +
    '<div class="mod-progress"><div class="progress-bar"><div class="progress-fill" id="modProgFill"></div></div><span id="modProgText">0 / ' + lessons.length + ' lessons done</span></div>\n' +
    '<div style="padding:0 20px 18px"><a class="btn btn-primary" id="startNextBtn" href="../' + first.url + '">Start Lesson ' + esc(first.id) + ' →</a></div>\n' +
    '<div class="lesson-list">\n';
  for (const L of lessons) h += lessonRow(L, '../', true);
  h += '</div>\n';
  h += '<div class="mastery-box"><h4>Mastery self-check — <span id="masteryCount">0 / 3 ticked</span></h4>\n' +
    '<p>Tick each one you can honestly do without notes. Ticks save in this browser.</p>\n';
  for (let i = 0; i < 3; i++) {
    h += '<label class="mitem"><input type="checkbox" class="mastery-check" data-idx="' + i + '"><span class="mtxt">' + esc(MASTERY[m.key][i]) + '</span></label>\n';
  }
  h += '</div></div>\n<p style="margin-top:16px"><a href="../index.html">← Back to dashboard</a></p>\n</section>\n</main>\n' + footer() + scripts('../');
  return h;
}

/* ---------------- lesson pages ---------------- */
function buildLesson(L, idx) {
  const prev = idx > 0 ? LESSONS[idx - 1] : null;
  const next = idx < LESSONS.length - 1 ? LESSONS[idx + 1] : null;
  const mod = MODULE_BY_KEY[L.module];
  let h = head('Lesson ' + L.id + ' — ' + L.title + ' — Full Stack + AI', '../assets/css/style.css');
  h += '<body data-page="lesson" data-lesson="' + esc(L.id) + '">\n' + topbar('../');
  h += '<main class="wrap">\n';
  h += '<p class="crumb"><a href="../index.html">Home</a> &nbsp;›&nbsp; <a href="../modules/' + mod.key.toLowerCase() + '.html">' + esc(mod.title) + '</a> &nbsp;›&nbsp; Lesson ' + esc(L.id) + '</p>\n';
  h += '<article class="reader lesson-page">\n';
  h += '<div class="reader-top"><span class="reader-crumb">Lesson ' + esc(L.id) + ' • ' + esc(mod.title) + ' • ' + L.mins + ' min</span></div>\n';
  h += '<div class="reader-body">\n<h2>' + esc(L.title) + '</h2>\n<p class="goal">' + esc(L.sub) + '</p>\n';
  /* 1. Watch */
  h += '<h3 class="lesson-sec" id="watch">1 · Watch</h3>\n<div class="watch-box">\n' +
    '<a class="yt-btn" href="' + esc(L.yt.url) + '" target="_blank" rel="noopener">' + PLAY_SVG + 'Watch on YouTube</a>\n' +
    '<p class="watch-meta"><b>' + esc(L.yt.title) + '</b><span>' + esc(L.yt.channel) + '</span></p>\n';
  if (L.yt.sharedWith) {
    h += '<p class="shared-note">Shared with Lesson ' + esc(L.yt.sharedWith) + ' — no dedicated video exists for this exact subtopic, so this is the closest video for this lesson.</p>\n';
  }
  h += '</div>\n';
  /* 2. Read */
  h += '<h3 class="lesson-sec" id="read">2 · Read</h3>\n';
  h += '<ol class="sub-index">\n';
  for (let i = 0; i < L.subtopics.length; i++) {
    h += '<li><a href="#sub-' + (i + 1) + '">' + esc(L.subtopics[i]) + '</a></li>\n';
  }
  h += '</ol>\n';
  h += '<div class="callout why"><b>Goal — by the end of this lesson</b>' + esc(L.goal) + '</div>\n';
  h += L.readHtml + '\n';
  /* common mistakes (original M0–M2 lessons only, from EXTRA) */
  if (L.mistakes) {
    h += '<div class="callout build"><b>Watch out — common mistakes</b><ul>\n';
    for (const mst of L.mistakes) h += '<li>' + esc(mst) + '</li>\n';
    h += '</ul></div>\n';
  }
  /* 3. Code */
  h += '<h3 class="lesson-sec" id="code">3 · Code</h3>\n';
  if (L.pres.length) {
    for (const pre of L.pres) {
      h += '<div class="code-block"><button class="copy-btn" data-copy>Copy</button><pre>' + pre + '</pre></div>\n';
    }
  } else {
    h += '<p class="muted-note">Concepts only — no code snippet in this lesson.</p>\n';
  }
  /* 4. Practice */
  h += '<h3 class="lesson-sec" id="practice">4 · Practice</h3>\n<div class="callout build"><b>Your task</b>' + esc(L.task) + '</div>\n';
  /* 5. Check */
  h += '<h3 class="lesson-sec" id="check">5 · Check</h3>\n<p class="muted-note">Say your answer out loud first, then reveal. Mark “I knew it” for +5 XP each.</p>\n';
  for (let i = 0; i < L.checks.length; i++) {
    /* buttons + answer must share a parent: app.js finds .quiz-answer via b.parentElement */
    h += '<div class="quiz-q"><p class="qq">' + esc(L.checks[i][0]) + '</p>\n' +
      '<button class="quiz-reveal qbtn">Reveal answer</button>' +
      '<button class="quiz-knew qbtn" data-qi="' + i + '">I knew it (+5 XP)</button>\n' +
      '<p class="quiz-answer">' + esc(L.checks[i][1]) + '</p></div>\n';
  }
  /* 6. Interview */
  h += '<h3 class="lesson-sec" id="interview">6 · Interview</h3>\n';
  if (L.interview) {
    for (const pair of L.interview) {
      /* buttons + answer must share a parent: app.js finds .interview-answer via b.parentElement */
      h += '<div class="interview-q"><p class="iq">' + esc(pair[0]) + '</p>\n' +
        '<button class="interview-reveal qbtn">Reveal model answer</button>\n' +
        '<p class="interview-answer">' + esc(pair[1]) + '</p></div>\n';
    }
  } else {
    h += '<p class="muted-note">No interview questions were written for this lesson.</p>\n';
  }
  /* 7. Notes */
  h += '<h3 class="lesson-sec" id="notes">7 · Notes</h3>\n' +
    '<textarea class="notes-area" id="lessonNotes" placeholder="Your own words: what did this lesson teach you? What will you try next?"></textarea>\n' +
    '<p><span class="saved-note" id="notesSaved"></span></p>\n';
  h += '</div>\n'; /* reader-body */
  /* footer: complete + prev/next */
  h += '<div class="reader-foot">\n<button class="mark-btn" id="completeBtn">Mark lesson complete (+20 XP)</button>\n';
  if (prev) h += '<a class="nav-btn prev" href="' + fileFor(prev.id) + '">← Lesson ' + esc(prev.id) + '</a>\n';
  else h += '<button class="nav-btn prev" disabled>← Start</button>\n';
  if (next) h += '<a class="nav-btn next" href="' + fileFor(next.id) + '">Lesson ' + esc(next.id) + ' →</a>\n';
  else h += '<button class="nav-btn next" disabled>Course complete 🎉</button>\n';
  h += '</div>\n</article>\n</main>\n' + footer() + scripts('../');
  return h;
}

/* ---------------- CSS: original <style> + additions ---------------- */
const origHtml = fs.readFileSync(path.join(ROOT, 'original-index-backup.html'), 'utf8');
const styleMatch = origHtml.match(/<style>([\s\S]*?)<\/style>/);
if (!styleMatch) fail('no <style> block in original');
let css = styleMatch[1];
css = css.replace(/^\s*\n/, '');
const CSS_ADD = [
'',
'/* ---- Multi-page additions (93-lesson build, Nov 2026) ----',
'.brand{color:var(--text)}',
'.xp-badge{font-size:12.5px;font-weight:800;padding:7px 11px;border:1px solid var(--line);border-radius:999px;background:var(--bg2);color:var(--teal);white-space:nowrap}',
'.crumb{font-size:13.5px;font-weight:700;color:var(--faint);margin:22px 0 0}',
'.crumb a{color:var(--teal)}',
'.module-page{margin-top:14px}',
'.module-page h2{font-size:26px;letter-spacing:-.03em;margin:0;line-height:1.15}',
'.module-page .module-head p{color:var(--muted)}',
'',
'/* YouTube buttons — YouTube red, white text, play icon */',
'.yt-btn{display:inline-flex;align-items:center;gap:9px;background:#FF0000;color:#fff!important;font-weight:800;font-size:15px;padding:12px 18px;border-radius:12px;border:none;min-height:46px;text-decoration:none}',
'.yt-btn:hover{background:#cc0000}',
'.yt-btn svg{width:20px;height:20px;fill:#fff;flex:0 0 auto}',
'.yt-btn-sm{font-size:12px;padding:7px 11px;min-height:34px;border-radius:9px;gap:6px}',
'.yt-btn-sm svg{width:14px;height:14px}',
'.watch-box{background:var(--bg2);border:1px solid var(--line);border-radius:16px;padding:18px;margin:10px 0 4px}',
'.watch-meta{margin:12px 0 0;font-size:14px;color:var(--muted)}',
'.watch-meta b{display:block;color:var(--text);font-size:15px}',
'.watch-meta span{font-size:13px;color:var(--faint)}',
'.shared-note{margin:10px 0 0;font-size:13px;color:var(--amber)}',
'.sub-yt{margin:-2px 0 4px!important;font-size:13px}',
'.sub-yt a{color:var(--faint);font-weight:700}',
'.sub-yt a:hover{color:var(--teal)}',
'',
'/* Lesson page sections */',
'.lesson-page{margin-top:14px}',
'.lesson-sec{font-size:19px;margin:30px 0 8px!important;letter-spacing:-.01em;color:var(--text)}',
'.sub-index{margin:8px 0 4px;padding-left:22px;color:var(--muted);font-size:15px}',
'.sub-index li{margin:5px 0}',
'.code-ref{font-size:13.5px;color:var(--faint);font-style:italic}',
'.muted-note{color:var(--faint);font-size:14px}',
'.code-block{position:relative;margin:12px 0}',
'.code-block pre{margin:0}',
'.lesson-page .reader-body h4{scroll-margin-top:80px}',
'.sub-index a{scroll-margin-top:80px}',
'',
'/* Quiz + interview (wired to assets/js/app.js: .quiz-answer/.interview-answer + .open) */',
'.quiz-answer,.interview-answer{display:none;font-size:14.5px;color:var(--muted);margin:10px 0 2px}',
'.quiz-answer.open,.interview-answer.open{display:block}',
'.quiz-q>.qbtn,.interview-q>.qbtn{display:inline-block;margin:8px 8px 0 0}',
'.interview-q{border:1px solid var(--line);border-radius:14px;padding:16px 18px;margin:12px 0;background:var(--bg2)}',
'.interview-q .iq{font-weight:800;font-size:15px;margin:0 0 6px;color:var(--text)}',
'.qbtn:disabled{opacity:.65;cursor:default}',
'.qbtn.earned{background:var(--teal);border-color:var(--teal);color:#fff}',
'',
'/* Notes */',
'.notes{margin-top:8px}',
'',
'/* Mastery checkboxes on module pages */',
'.mastery-check{flex:0 0 auto;width:22px;height:22px;accent-color:#2dd4bf;margin-top:1px;cursor:pointer}',
'.mitem{cursor:pointer}',
'',
'/* Search hits (dashboard, rendered by app.js) */',
'#searchResults{display:grid;gap:8px;margin:10px 0 4px}',
'#searchResults:empty{display:none}',
'.search-hit{display:flex;align-items:center;gap:14px;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:12px 16px;color:var(--text)}',
'.search-hit:hover{background:var(--bg2)}',
'.search-hit .hit-main{display:flex;flex-direction:column;gap:1px;flex:1;min-width:0}',
'.search-hit .hit-main b{font-size:14.5px}',
'.search-hit .hit-main span{font-size:12.5px;color:var(--faint);font-weight:700}',
'.search-empty{color:var(--muted);font-size:14px}',
'',
'/* Toast (created by app.js) */',
'#toast{position:fixed;left:50%;bottom:26px;transform:translate(-50%,20px);background:#14b8a6;color:#04211d;font-weight:800;font-size:14px;padding:12px 18px;border-radius:12px;box-shadow:var(--shadow);opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:99;max-width:90vw;text-align:center}',
'#toast.show{opacity:1;transform:translate(-50%,0)}',
'',
'/* Lesson rows: div row, title links to lesson, Watch is a real link */',
'a.lesson-row{text-decoration:none}',
'.lesson-row .ltitle{flex:1;min-width:0;color:var(--text)}',
'.lesson-row a.ltitle:hover{color:var(--teal)}',
'.lesson-row .lstatus{flex:0 0 auto;font-size:12px;font-weight:800;color:var(--faint);min-width:86px;text-align:right}',
'.lesson-row .lstatus.done{color:var(--teal)}',
'.lesson-row .yt-btn{flex:0 0 auto}',
'.module-head h3 a{color:var(--text)}',
'.module-head h3 a:hover{color:var(--teal)}',
'.reader-foot .nav-btn.prev{margin-left:0}',
'.reader-foot .mark-btn{margin-right:4px}',
''
].join('\n');
css = css.replace(/\s+$/, '') + '\n' + CSS_ADD;

/* ---------------- write everything ---------------- */
fs.mkdirSync(path.join(ROOT, 'modules'), { recursive: true });
fs.mkdirSync(path.join(ROOT, 'lessons'), { recursive: true });
fs.mkdirSync(path.join(ROOT, 'assets', 'css'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'assets', 'css', 'style.css'), css);
console.log('wrote assets/css/style.css (' + css.length + ' chars)');
fs.writeFileSync(path.join(ROOT, 'index.html'), buildHome());
console.log('wrote index.html');
for (const m of MODULES) {
  fs.writeFileSync(path.join(ROOT, 'modules', m.key.toLowerCase() + '.html'), buildModule(m));
}
console.log('wrote ' + MODULES.length + ' module pages');
for (let i = 0; i < LESSONS.length; i++) {
  const L = LESSONS[i];
  fs.writeFileSync(path.join(ROOT, 'lessons', fileFor(L.id)), buildLesson(L, i));
}
console.log('wrote ' + LESSONS.length + ' lesson pages');

/* ---------------- summary ---------------- */
const shared = LESSONS.filter(function (L) { return L.yt.sharedWith; });
console.log('\nSHARED videos (' + shared.length + '):');
for (const L of shared) console.log('  ' + L.id + ' ' + L.title + '  -> shares ' + L.yt.sharedWith + ' (' + L.yt.url + ')');
const WEAK = [
  ['4.4', 'original 4.3 video is an Apple-platforms Firestore video — off-topic for Sync & Merge Rules'],
  ['6.3', 'original 6.2 video is a craftzdog demo project, not a CodeMirror tutorial'],
  ['2.6', 'original 2.3 video is a Task Manager build, not a generators tutorial'],
  ['1.7', 'original 1.3 video is "How React Thinks" — a documentary, loose fit for State & Data-Driven Rendering'],
  ['7.8', 'original 7.4 video title is "(643) The Complete Android Course..." — odd/weak title'],
  ['8.6', 'original 8.3 video is Django+React on Render, not a general hosting-models video'],
  ['5.9', 'original 5.4 video is about API rate limiting, loose fit for Reliability/Failover/Key Rotation'],
  ['4.5', 'shares 4.2 — no dedicated offline-persistence video found'],
  ['B.10', 'channel shown as "YouTube" — channel unverified']
];
console.log('\nWEAK / off-topic links (kept as-is, flagged only):');
for (const w of WEAK) console.log('  ' + w[0] + ': ' + w[1]);
console.log('\nBUILD DONE: 93 lessons, 10 modules.');
