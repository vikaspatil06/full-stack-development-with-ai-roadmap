/* Verify the built site. Run: node verify.js [port]
   Checks: all pages exist + HTTP 200, every lesson page's red Watch button
   carries exactly its resolved YouTube URL, prev/next chain covers all 105
   in order with no dead links/dups, data.js has 105 lessons with
   titles/subtopics, no stale counts, required element IDs present. */
'use strict';
const fs = require('fs');
const path = require('path');
const http = require('http');
const vm = require('vm');
const ROOT = __dirname;
const PORT = parseInt(process.argv[2] || '8123', 10);

let failures = 0;
function check(ok, msg) {
  console.log((ok ? 'PASS' : 'FAIL') + ' ' + msg);
  if (!ok) failures++;
}

const orig = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'original-modules.json'), 'utf8'));
const batchA = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'new-lessons-batch-a.json'), 'utf8'));
const batchB = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'new-lessons-batch-b.json'), 'utf8'));

/* expected resolved URLs: re-derive from build inputs independently */
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
const ytByNew = {};
function addYt(map) { for (const v of map) ytByNew[v.id] = v.youtube_url; }
addYt(JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'youtube-links-part1-0-2.json'), 'utf8')));
addYt(JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'youtube-links-part2-3-5.json'), 'utf8')));
addYt(JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'youtube-links-part3-6-8.json'), 'utf8')));
const ytOrigNew = {};
for (const oldId of Object.keys(RENUMBER)) ytOrigNew[RENUMBER[oldId]] = ytByNew[oldId];
const expected = Object.assign({}, ytOrigNew);
const ytDsa = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'youtube-links-dsa.json'), 'utf8'));
for (const v of ytDsa) expected[v.id] = v.youtube_url;
for (const L of batchA.lessons.concat(batchB.lessons)) {
  if (['4.9', '5.10', '8.8'].indexOf(L.id) !== -1) continue;
  if (L.youtube_url) expected[L.id] = L.youtube_url;
}
function resolveShared(id, target) {
  let cur = target, guard = 0;
  while (expected[cur] === undefined || (cur !== target && false)) { if (++guard > 10) throw new Error('cycle'); break; }
  /* shared targets point at lessons whose URL is already in expected (originals/directs) */
  return expected[cur];
}
for (const L of batchA.lessons.concat(batchB.lessons)) {
  if (['4.9', '5.10', '8.8'].indexOf(L.id) !== -1) continue;
  if (!L.youtube_url) {
    const target = L.id === '4.6' ? '4.9' : L.yt_shared_with;
    expected[L.id] = resolveShared(L.id, target);
  }
}

const ORDER = ['B', 'D', 'M0', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8'];
const lessonIds = Object.keys(expected).sort(function (a, b) {
  const ka = ORDER.indexOf(a.indexOf('B.') === 0 ? 'B' : a.indexOf('D.') === 0 ? 'D' : 'M' + a.split('.')[0]);
  const kb = ORDER.indexOf(b.indexOf('B.') === 0 ? 'B' : b.indexOf('D.') === 0 ? 'D' : 'M' + b.split('.')[0]);
  if (ka !== kb) return ka - kb;
  return parseInt(a.split('.')[1], 10) - parseInt(b.split('.')[1], 10);
});
check(lessonIds.length === 105, 'expected URL map has 105 lessons (got ' + lessonIds.length + ')');
function fileFor(id) { return id.replace('.', '-').toLowerCase() + '.html'; }

/* ---- file-level checks (no server needed) ---- */
const files = ['index.html'].concat(
  ORDER.map(function (k) { return 'modules/' + k.toLowerCase() + '.html'; }),
  lessonIds.map(function (id) { return 'lessons/' + fileFor(id); }),
  ['assets/css/style.css', 'assets/js/data.js', 'assets/js/app.js', 'README.md']
);
let missing = [];
for (const f of files) if (!fs.existsSync(path.join(ROOT, f))) missing.push(f);
check(missing.length === 0, 'all ' + files.length + ' expected files exist' + (missing.length ? ' (missing: ' + missing.join(', ') + ')' : ''));

/* YouTube button check on all 93 lesson pages */
let ytOk = 0, ytBad = [];
for (const id of lessonIds) {
  const html = fs.readFileSync(path.join(ROOT, 'lessons', fileFor(id)), 'utf8');
  const m = html.match(/<a class="yt-btn" href="([^"]+)"/);
  if (!m) { ytBad.push(id + ': no yt-btn found'); continue; }
  if (m[1] === expected[id]) ytOk++;
  else ytBad.push(id + ': button=' + m[1] + ' expected=' + expected[id]);
}
check(ytOk === 105, 'red Watch button URL matches resolved URL for ' + ytOk + '/105' + (ytBad.length ? ' — ' + ytBad.slice(0, 5).join(' | ') : ''));

/* prev/next chain */
let chainOk = true, chainIssues = [];
const chainFiles = [];
for (let i = 0; i < lessonIds.length; i++) {
  const id = lessonIds[i];
  const html = fs.readFileSync(path.join(ROOT, 'lessons', fileFor(id)), 'utf8');
  const prevM = html.match(/<a class="nav-btn prev" href="([^"]+)"/);
  const nextM = html.match(/<a class="nav-btn next" href="([^"]+)"/);
  const prevId = i > 0 ? lessonIds[i - 1] : null;
  const nextId = i < lessonIds.length - 1 ? lessonIds[i + 1] : null;
  if (prevId && (!prevM || prevM[1] !== fileFor(prevId))) { chainOk = false; chainIssues.push(id + ' prev should be ' + prevId); }
  if (!prevId && prevM) { chainOk = false; chainIssues.push(id + ' should have no prev link'); }
  if (nextId && (!nextM || nextM[1] !== fileFor(nextId))) { chainOk = false; chainIssues.push(id + ' next should be ' + nextId); }
  if (!nextId && nextM) { chainOk = false; chainIssues.push(id + ' should have no next link'); }
  chainFiles.push(fileFor(id));
}
check(chainOk, 'prev/next chain covers all 105 in order, no dead links, no duplicates' + (chainIssues.length ? ' — ' + chainIssues.slice(0, 5).join(' | ') : ''));
check(new Set(chainFiles).size === 105, '105 unique lesson files in chain');

/* data.js validation */
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets', 'js', 'data.js'), 'utf8'), sandbox);
const FSAI = sandbox.window.FSAI;
check(FSAI && FSAI.total === 105, 'data.js total is 105');
check(FSAI.lessons.length === 105, 'data.js has 105 lessons');
check(FSAI.modules.length === 11, 'data.js has 11 modules');
let dataBad = [];
for (const L of FSAI.lessons) {
  if (!L.title || !L.sub || !L.url || !L.yt || !L.yt.url) dataBad.push(L.id + ': missing fields');
  if (!L.subtopics || L.subtopics.length < 3) dataBad.push(L.id + ': subtopics < 3');
  if (expected[L.id] && L.yt.url !== expected[L.id]) dataBad.push(L.id + ': data.js yt mismatch');
  if (L.module === 'D' && (!L.cards || L.cards.length < 4 || !L.striver || !L.leetcode || L.leetcode.length < 3)) dataBad.push(L.id + ': DSA cards/striver/leetcode missing');
}
check(dataBad.length === 0, 'data.js lessons all have title/sub/url/yt/subtopics(>=3)' + (dataBad.length ? ' — ' + dataBad.slice(0, 5).join(' | ') : ''));
const dataOrder = FSAI.lessons.map(function (l) { return l.id; });
check(JSON.stringify(dataOrder) === JSON.stringify(lessonIds), 'data.js lesson order matches B -> D -> M8 chain');

/* stale counts */
const stalePats = ['37 lessons', '47 lessons', '93 lessons', '9 modules', '10 modules', '~20 weeks', '20 weeks', '25 weeks', 'mid-Apr 2027', '20 May 2027'];
let staleHits = [];
for (const f of files) {
  if (f === 'README.md') continue;
  const txt = fs.readFileSync(path.join(ROOT, f), 'utf8');
  for (const p of stalePats) if (txt.indexOf(p) !== -1) staleHits.push(f + ': "' + p + '"');
}
check(staleHits.length === 0, 'no stale counts (37/47/93 lessons, 9/10 modules, ~20/20/25 weeks) in built pages' + (staleHits.length ? ' — ' + staleHits.join(' | ') : ''));

/* required IDs per app.js */
const home = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
for (const id of ['ringFg', 'ringPct', 'statLessons', 'statXp', 'statStreak', 'statQuiz', 'progText', 'progFill', 'nextUp', 'searchInput', 'searchResults', 'noResults', 'dsaProgFill', 'dsaProgText', 'dsaToday', 'reviewList', 'filterSelect', 'xpLevelName', 'xpLevelText', 'xpLevelFill']) {
  check(home.indexOf('id="' + id + '"') !== -1, 'home has #' + id);
}
check(home.indexOf('data-page="home"') !== -1, 'home body[data-page=home]');
check((home.match(/data-module-progress/g) || []).length === 11, 'home has 11 module progress blocks');
check(home.indexOf('data-filter="dsa"') !== -1, 'home has DSA filter');
check(home.indexOf('id="modDropBtn"') !== -1, 'home has Modules dropdown button');
let modOk = true;
for (const k of ORDER) {
  const t = fs.readFileSync(path.join(ROOT, 'modules', k.toLowerCase() + '.html'), 'utf8');
  for (const id of ['modProgFill', 'modProgText', 'startNextBtn', 'masteryCount', 'jumpSelect']) {
    if (t.indexOf('id="' + id + '"') === -1) { modOk = false; console.log('FAIL module ' + k + ' missing #' + id); }
  }
  if (t.indexOf('data-module="' + k + '"') === -1) { modOk = false; console.log('FAIL module ' + k + ' missing data-module'); }
  if ((t.match(/class="mastery-check"/g) || []).length !== 3) { modOk = false; console.log('FAIL module ' + k + ' mastery-check count != 3'); }
}
check(modOk, 'all 11 module pages have modProgFill/modProgText/startNextBtn/masteryCount/jumpSelect + 3 mastery checks');
let lesOk = true, lesIssues = [];
for (const id of lessonIds) {
  const t = fs.readFileSync(path.join(ROOT, 'lessons', fileFor(id)), 'utf8');
  for (const need of ['id="completeBtn"', 'id="lessonNotes"', 'id="notesSaved"', 'data-page="lesson"', 'id="watch"', 'id="read"', 'id="code"', 'id="practice"', 'id="check"', 'id="interview"', 'id="notes"', 'id="flashcards"', 'id="quizScore"', 'id="quizRetry"', 'id="reviewStar"', 'id="flashcards-sec"']) {
    if (t.indexOf(need) === -1) { lesOk = false; lesIssues.push(id + ' missing ' + need); }
  }
  const quiz = (t.match(/class="quiz-reveal qbtn"/g) || []).length;
  const knew = (t.match(/class="quiz-knew qbtn"/g) || []).length;
  const missed = (t.match(/class="quiz-missed qbtn"/g) || []).length;
  const ans = (t.match(/class="quiz-answer"/g) || []).length;
  const iv = (t.match(/class="interview-reveal qbtn"/g) || []).length;
  if (quiz !== 2 || knew !== 2 || missed !== 2 || ans !== 2 || iv !== 2) { lesOk = false; lesIssues.push(id + ' quiz/interview counts: reveal=' + quiz + ' knew=' + knew + ' missed=' + missed + ' ans=' + ans + ' iv=' + iv); }
  if ((t.match(/class="sub-yt"/g) || []).length < 3) { lesOk = false; lesIssues.push(id + ' subtopic yt-ref links < 3'); }
  if ((t.match(/data-acc="/g) || []).length !== 8) { lesOk = false; lesIssues.push(id + ' accordion sections != 8'); }
  if (id.indexOf('D.') === 0 && t.indexOf('dsa-practice') === -1) { lesOk = false; lesIssues.push(id + ' missing DSA practice box'); }
}
check(lesOk, 'all 105 lesson pages have required IDs + 2 quiz (knew+missed) + 2 interview + flashcards + review star + 8 accordions' + (lesIssues.length ? ' — ' + lesIssues.slice(0, 5).join(' | ') : ''));

/* original content preservation: every original goal/task/check text appears in its new page */
let presOk = true, presIssues = [];
const REN = RENUMBER;
for (const m of orig.MODULES) {
  for (const l of m.lessons) {
    const newId = REN[l.id];
    const t = fs.readFileSync(path.join(ROOT, 'lessons', fileFor(newId)), 'utf8');
    const tText = t.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ');
    const strip = function (s) { return s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); };
    const bodyText = strip(l.body);
    /* check a fingerprint: first 60 chars of stripped body text, goal, task, first check Q */
    const probes = [
      ['goal', strip(l.goal).slice(0, 60)],
      ['task', strip(l.task).slice(0, 60)],
      ['checkQ', l.checks[0][0].slice(0, 50)],
      ['h4First', (l.body.match(/<h4>([\s\S]*?)<\/h4>/) || [null, ''])[1].replace(/<[^>]+>/g, '').trim().slice(0, 50)],
      ['bodyPara', ((l.body.match(/<\/h4>\s*<p>([\s\S]*?)<\/p>/) || [null, ''])[1] || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 40)]
    ];
    for (const pr of probes) {
      if (!pr[1]) continue;
      const frag = pr[1].replace(/\s+/g, ' ').trim();
      if (tText.indexOf(frag.slice(0, 40)) === -1) { presOk = false; presIssues.push(newId + ' missing ' + pr[0] + ': ' + JSON.stringify(pr[1].slice(0, 50))); }
    }
    /* all <pre> blocks preserved */
    const pres = l.body.match(/<pre>([\s\S]*?)<\/pre>/g) || [];
    for (const pre of pres) {
      const inner = pre.replace(/^<pre>/, '').replace(/<\/pre>$/, '');
      if (t.indexOf(inner.slice(0, 60)) === -1) { presOk = false; presIssues.push(newId + ' missing a <pre> block'); }
    }
  }
}
check(presOk, 'all 37 original lessons: goal/task/check/body/code preserved in new pages' + (presIssues.length ? ' — ' + presIssues.slice(0, 5).join(' | ') : ''));

/* EXTRA mistakes + interview on the 12 original M0-M2 pages */
let extraOk = true, extraIssues = [];
for (const oldId of Object.keys(orig.EXTRA)) {
  const newId = REN[oldId];
  const t = fs.readFileSync(path.join(ROOT, 'lessons', fileFor(newId)), 'utf8');
  for (const mst of orig.EXTRA[oldId].m) {
    if (t.indexOf(mst.slice(0, 40).replace(/&/g, '&amp;')) === -1) { extraOk = false; extraIssues.push(newId + ' missing mistake: ' + mst.slice(0, 40)); }
  }
  for (const pair of orig.EXTRA[oldId].i) {
    if (t.indexOf(pair[0].slice(0, 40)) === -1) { extraOk = false; extraIssues.push(newId + ' missing interview Q: ' + pair[0].slice(0, 40)); }
  }
  if (t.indexOf('common mistakes') === -1) { extraOk = false; extraIssues.push(newId + ' missing mistakes section'); }
}
check(extraOk, '12 original M0–M2 pages carry EXTRA mistakes + interview' + (extraIssues.length ? ' — ' + extraIssues.slice(0, 5).join(' | ') : ''));

/* no absolute paths (ignore <pre> code examples, which may show sample hrefs as text) */
let absOk = true;
for (const f of files) {
  const txt = fs.readFileSync(path.join(ROOT, f), 'utf8').replace(/<pre>[\s\S]*?<\/pre>/g, '');
  if (/ (href|src)="\/[^"]/.test(txt)) { absOk = false; console.log('FAIL absolute path in ' + f); }
}
check(absOk, 'no leading-/ absolute href/src paths in built files');

/* ---- Navbar fix (Nov 2026): cache-busting, slim nav, collapsed-by-default ---- */
const cssTxt = fs.readFileSync(path.join(ROOT, 'assets/css/style.css'), 'utf8');
/* CSS must be parseable: balanced comments + braces, or whole rule blocks
   silently vanish (Nov 2026: 10 unclosed /* headers ate the navbar, XP
   badge, dropdown and filter rules — the exact bug Vikas screenshotted). */
let cssOk = true, cssIssues = [];
const opens = (cssTxt.match(/\/\*/g) || []).length, closes = (cssTxt.match(/\*\//g) || []).length;
if (opens !== closes) { cssOk = false; cssIssues.push('comment imbalance: ' + opens + ' /* vs ' + closes + ' */'); }
let depth = 0;
for (const ch of cssTxt) { if (ch === '{') depth++; else if (ch === '}') depth--; }
if (depth !== 0) { cssOk = false; cssIssues.push('brace imbalance: depth ' + depth); }
for (const rule of ['.xp-badge{', '.nav-toggle{display:none', '.nav-drop-menu{display:none', '.filter-select-wrap{display:none', '@media(max-width:1100px)']) {
  if (cssTxt.indexOf(rule) === -1) { cssOk = false; cssIssues.push('missing rule: ' + rule); }
}
check(cssOk, 'style.css parses: balanced comments/braces, navbar/XP/dropdown/filter rules present' + (cssIssues.length ? ' — ' + cssIssues.join(' | ') : ''));
const appTxt = fs.readFileSync(path.join(ROOT, 'assets/js/app.js'), 'utf8');
let navOk = true, navIssues = [];
const samplePages = ['index.html', 'modules/d.html', 'lessons/d-1.html', 'lessons/8-4.html'];
for (const f of samplePages) {
  const t = fs.readFileSync(path.join(ROOT, f), 'utf8');
  if (t.indexOf('assets/css/style.css?v=3') === -1 && t.indexOf('../assets/css/style.css?v=3') === -1) { navOk = false; navIssues.push(f + ' missing ?v=2 on style.css'); }
  if (t.indexOf('assets/js/data.js?v=3') === -1 && t.indexOf('../assets/js/data.js?v=3') === -1) { navOk = false; navIssues.push(f + ' missing ?v=2 on data.js'); }
  if (t.indexOf('assets/js/app.js?v=3') === -1 && t.indexOf('../assets/js/app.js?v=3') === -1) { navOk = false; navIssues.push(f + ' missing ?v=2 on app.js'); }
  if (t.indexOf('>How to study</a>') !== -1 || t.indexOf('>Schedule</a>') !== -1 || t.indexOf('>Mastery check</a>') !== -1) { navOk = false; navIssues.push(f + ' still has a removed nav link'); }
  if (t.indexOf('aria-expanded="false">Show lessons') === -1 && f === 'index.html') { navOk = false; navIssues.push('index module cards not collapsed by default'); }
}
if (cssTxt.indexOf('max-width:860px') !== -1) { navOk = false; navIssues.push('style.css still has an 860px breakpoint'); }
if (cssTxt.indexOf('max-width:1100px') === -1) { navOk = false; navIssues.push('style.css missing 1100px breakpoint'); }
if (cssTxt.indexOf('.nav{flex-wrap:nowrap}') === -1 || cssTxt.indexOf('.brand{white-space:nowrap') === -1) { navOk = false; navIssues.push('style.css missing no-wrap navbar hardening'); }
if (appTxt.indexOf('isModCollapsed(mod, true)') === -1) { navOk = false; navIssues.push('app.js module cards do not default collapsed'); }
if (appTxt.indexOf('innerWidth > 1100') === -1) { navOk = false; navIssues.push('app.js resize handler still uses 860'); }
check(navOk, 'navbar fix: ?v=3 on all assets, slim nav, 1100px breakpoint, cards collapsed by default' + (navIssues.length ? ' — ' + navIssues.join(' | ') : ''));

/* ---- Anchor offset: sections must land below the sticky topbar ---- */
check(cssTxt.indexOf('scroll-padding-top:78px') !== -1 && cssTxt.indexOf('#dashboard,#lessons,#how,#mastery,#review,#timeline{scroll-margin-top:78px}') !== -1, 'anchor offset: scroll-padding + scroll-margin 78px on all home sections');

/* ---- HTTP 200 sweep ---- */
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };
const server = http.createServer(function (req, res) {
  const p = decodeURIComponent(req.url.split('?')[0]);
  let fp = path.join(ROOT, p === '/' ? 'index.html' : p);
  if (!fs.existsSync(fp) || fs.statSync(fp).isDirectory()) { res.writeHead(404); res.end('nf'); return; }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream' });
  fs.createReadStream(fp).pipe(res);
});
server.listen(PORT, function () {
  const urls = ['/'].concat(
    ORDER.map(function (k) { return '/modules/' + k.toLowerCase() + '.html'; }),
    lessonIds.map(function (id) { return '/lessons/' + fileFor(id); }),
    ['/assets/css/style.css', '/assets/js/data.js', '/assets/js/app.js']
  );
  let done = 0, bad = [];
  for (const u of urls) {
    http.get({ host: '127.0.0.1', port: PORT, path: u }, function (res) {
      if (res.statusCode !== 200) bad.push(u + ' -> ' + res.statusCode);
      res.resume();
      res.on('end', function () {
        if (++done === urls.length) {
          check(bad.length === 0, 'HTTP 200 for ' + urls.length + ' URLs (index + 11 modules + 105 lessons + 3 assets)' + (bad.length ? ' — ' + bad.join(', ') : ''));
          server.close();
          console.log(failures === 0 ? '\nALL CHECKS PASSED' : '\n' + failures + ' CHECK(S) FAILED');
          process.exit(failures === 0 ? 0 : 1);
        }
      });
    }).on('error', function (e) {
      bad.push(u + ' -> error ' + e.message);
      if (++done === urls.length) {
        check(false, 'HTTP sweep error: ' + bad.join(', '));
        server.close();
        process.exit(1);
      }
    });
  }
});
