/* Full Stack + AI — Study Lessons. Shared progress engine.
   All progress lives in localStorage under fsai_progress_v2 (notes: fsai_notes_v2).
   No backend, no account. XP: +20 per completed lesson, +5 per self-check marked "I knew it". */
(function () {
  'use strict';
  var KEY = 'fsai_progress_v2', NOTES_KEY = 'fsai_notes_v2';
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }
  var S = load();
  S.done = S.done || {}; S.doneOn = S.doneOn || {}; S.quiz = S.quiz || {};
  S.mastery = S.mastery || {}; S.last = S.last || null;

  function pad(n) { return String(n).padStart(2, '0'); }
  function dayStr(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function today() { return dayStr(new Date()); }
  function doneCount() { return Object.keys(S.done).length; }
  function quizCount() { return Object.keys(S.quiz).length; }
  function xp() { return doneCount() * 20 + quizCount() * 5; }
  function streak() {
    var dates = {}; Object.keys(S.doneOn).forEach(function (id) { dates[S.doneOn[id]] = 1; });
    var d = new Date(); if (!dates[today()]) d.setDate(d.getDate() - 1);
    var n = 0;
    while (dates[dayStr(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function toast(msg) {
    var t = document.getElementById('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, 2400);
  }
  function updateXpBadges() {
    document.querySelectorAll('[data-xp-badge]').forEach(function (el) { el.textContent = xp() + ' XP'; });
  }

  var PROG = {
    S: S, save: function () { save(S); }, xp: xp, doneCount: doneCount,
    quizCount: quizCount, streak: streak, today: today, toast: toast,
    markDone: function (id) { if (S.done[id]) return false; S.done[id] = true; S.doneOn[id] = today(); save(S); return true; },
    unmark: function (id) { delete S.done[id]; delete S.doneOn[id]; save(S); },
    isDone: function (id) { return !!S.done[id]; },
    markQuiz: function (lessonId, qi) { var k = lessonId + ':' + qi; if (S.quiz[k]) return false; S.quiz[k] = true; save(S); return true; },
    quizKnown: function (lessonId, qi) { return !!S.quiz[lessonId + ':' + qi]; },
    setLast: function (id) { S.last = id; save(S); },
    toggleMastery: function (mod, idx, checked) {
      S.mastery[mod] = S.mastery[mod] || [false, false, false];
      S.mastery[mod][idx] = !!checked; save(S);
    }
  };
  window.FSAI_PROG = PROG;

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  /* ---------- Dashboard ---------- */
  function initHome() {
    var total = (window.FSAI && FSAI.total) || 93;
    var done = doneCount(), pct = total ? Math.round(done / total * 100) : 0;
    var ring = document.getElementById('ringFg');
    if (ring) ring.style.strokeDashoffset = (464.96 * (1 - pct / 100)).toFixed(2);
    var set = function (id, v) { var el = document.getElementById(id); if (el) el.textContent = v; };
    set('ringPct', pct + '%');
    set('statLessons', done + ' / ' + total);
    set('statXp', xp() + ' XP');
    set('statStreak', streak() + (streak() === 1 ? ' day' : ' days'));
    set('statQuiz', quizCount() + ' passed');
    set('progText', done + ' / ' + total);
    var fill = document.getElementById('progFill'); if (fill) fill.style.width = pct + '%';

    /* module progress bars */
    document.querySelectorAll('[data-module-progress]').forEach(function (el) {
      var mod = el.getAttribute('data-module-progress');
      var lessons = (window.FSAI ? FSAI.lessons.filter(function (l) { return l.module === mod; }) : []);
      var d = lessons.filter(function (l) { return PROG.isDone(l.id); }).length;
      var bar = el.querySelector('.progress-fill'); if (bar) bar.style.width = (lessons.length ? Math.round(d / lessons.length * 100) : 0) + '%';
      var txt = el.querySelector('[data-module-count]'); if (txt) txt.textContent = d + ' / ' + lessons.length + ' done';
    });

    /* continue where you left off */
    var next = document.getElementById('nextUp');
    if (next && window.FSAI) {
      var target = null;
      if (S.last && !PROG.isDone(S.last)) target = FSAI.lessons.find(function (l) { return l.id === S.last; });
      if (!target) target = FSAI.lessons.find(function (l) { return !PROG.isDone(l.id); });
      if (target) {
        next.innerHTML = '<b>Continue where you left off</b><span>Next up: <a href="' + target.url + '">Lesson ' + esc(target.id) + ' — ' + esc(target.title) + '</a> (' + target.mins + ' min) · ' + esc(target.moduleTitle) + '</span>';
      } else {
        next.innerHTML = '<b>🎉 All ' + total + ' lessons complete!</b><span>You finished the whole course. Revisit any lesson, or run the mastery checks on the module pages.</span>';
      }
    }
    initSearch();
    initFilters();
    updateXpBadges();
  }

  /* ---------- Search (dashboard) ---------- */
  var currentFilter = 'all';
  function lessonMatchesTrack(l, f) { return f === 'all' || l.track === f; }
  function renderSearch(q) {
    var box = document.getElementById('searchResults'); if (!box || !window.FSAI) return;
    q = (q || '').trim().toLowerCase();
    if (!q) { box.innerHTML = ''; return; }
    var hits = FSAI.lessons.filter(function (l) {
      if (!lessonMatchesTrack(l, currentFilter)) return false;
      var hay = (l.id + ' ' + l.title + ' ' + l.sub + ' ' + (l.subtopics || []).join(' ') + ' ' + l.moduleTitle).toLowerCase();
      return q.split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
    }).slice(0, 12);
    if (!hits.length) { box.innerHTML = '<p class="search-empty">No lessons match “' + esc(q) + '”. Try “RAG”, “Flexbox”, “merge rules”, “Pyodide”…</p>'; return; }
    box.innerHTML = hits.map(function (l) {
      return '<a class="search-hit" href="' + l.url + '"><span class="hit-main"><b>Lesson ' + esc(l.id) + ' — ' + esc(l.title) + '</b><span>' + esc(l.moduleTitle) + ' · ' + l.mins + ' min' + (PROG.isDone(l.id) ? ' · ✓ done' : '') + '</span></span>' +
        '<span class="yt-btn yt-btn-sm" data-yt="' + esc(l.yt.url) + '" role="button" tabindex="0"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>Watch</span></a>';
    }).join('');
  }
  function initSearch() {
    var input = document.getElementById('searchInput'); if (!input) return;
    input.addEventListener('input', function () { renderSearch(input.value); });
  }
  function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter') || 'all';
        document.querySelectorAll('[data-cat]').forEach(function (card) {
          var cat = card.getAttribute('data-cat');
          card.style.display = (currentFilter === 'all' || cat === currentFilter) ? '' : 'none';
        });
        var no = document.getElementById('noResults');
        var visible = Array.prototype.filter.call(document.querySelectorAll('[data-cat]'), function (c) { return c.style.display !== 'none'; }).length;
        if (no) no.classList.toggle('hidden', visible !== 0);
        var input = document.getElementById('searchInput');
        if (input && input.value) renderSearch(input.value);
      });
    });
  }

  /* ---------- Module page ---------- */
  function initModule() {
    var mod = document.body.getAttribute('data-module'); if (!mod || !window.FSAI) return;
    var lessons = FSAI.lessons.filter(function (l) { return l.module === mod; });
    var d = lessons.filter(function (l) { return PROG.isDone(l.id); }).length;
    var fill = document.getElementById('modProgFill'); if (fill) fill.style.width = (lessons.length ? Math.round(d / lessons.length * 100) : 0) + '%';
    var txt = document.getElementById('modProgText'); if (txt) txt.textContent = d + ' / ' + lessons.length + ' lessons done';
    document.querySelectorAll('[data-lesson-status]').forEach(function (el) {
      var id = el.getAttribute('data-lesson-status');
      el.textContent = PROG.isDone(id) ? '✓ Done' : 'Not started';
      el.classList.toggle('done', PROG.isDone(id));
    });
    var next = lessons.find(function (l) { return !PROG.isDone(l.id); }) || lessons[0];
    var startBtn = document.getElementById('startNextBtn');
    if (startBtn && next) { startBtn.setAttribute('href', '../' + next.url); startBtn.textContent = d === 0 ? 'Start Lesson ' + next.id + ' →' : 'Continue: Lesson ' + next.id + ' →'; }
    document.querySelectorAll('.mastery-check').forEach(function (cb) {
      var idx = +cb.getAttribute('data-idx');
      var arr = S.mastery[mod] || [false, false, false];
      cb.checked = !!arr[idx];
      cb.addEventListener('change', function () {
        PROG.toggleMastery(mod, idx, cb.checked);
        updateMasteryCount(mod);
        toast(cb.checked ? 'Mastery point ticked ✓' : 'Mastery point unticked');
      });
    });
    updateMasteryCount(mod);
    updateXpBadges();
  }
  function updateMasteryCount(mod) {
    var arr = S.mastery[mod] || [false, false, false];
    var n = arr.filter(Boolean).length;
    var el = document.getElementById('masteryCount'); if (el) el.textContent = n + ' / 3 ticked';
  }

  /* ---------- Lesson page ---------- */
  function initLesson() {
    var id = document.body.getAttribute('data-lesson'); if (!id) return;
    PROG.setLast(id);
    var btn = document.getElementById('completeBtn');
    function paintBtn() {
      if (!btn) return;
      btn.textContent = PROG.isDone(id) ? '✓ Completed — +20 XP earned' : 'Mark lesson complete (+20 XP)';
      btn.classList.toggle('done', PROG.isDone(id));
    }
    if (btn) btn.addEventListener('click', function () {
      if (PROG.isDone(id)) { PROG.unmark(id); toast('Lesson marked incomplete'); }
      else { PROG.markDone(id); toast('Lesson complete! +20 XP 🎉'); }
      paintBtn(); updateXpBadges();
    });
    paintBtn();
    document.querySelectorAll('.quiz-reveal').forEach(function (b) {
      b.addEventListener('click', function () {
        var ans = b.parentElement.querySelector('.quiz-answer');
        if (ans) { ans.classList.toggle('open'); b.textContent = ans.classList.contains('open') ? 'Hide answer' : 'Reveal answer'; }
      });
    });
    document.querySelectorAll('.quiz-knew').forEach(function (b) {
      var qi = b.getAttribute('data-qi');
      if (PROG.quizKnown(id, qi)) { b.disabled = true; b.textContent = '✓ +5 XP earned'; b.classList.add('earned'); }
      b.addEventListener('click', function () {
        if (PROG.markQuiz(id, qi)) { b.disabled = true; b.textContent = '✓ +5 XP earned'; b.classList.add('earned'); updateXpBadges(); toast('+5 XP — nice, you knew it!'); }
      });
    });
    document.querySelectorAll('.interview-reveal').forEach(function (b) {
      b.addEventListener('click', function () {
        var ans = b.parentElement.querySelector('.interview-answer');
        if (ans) { ans.classList.toggle('open'); b.textContent = ans.classList.contains('open') ? 'Hide model answer' : 'Reveal model answer'; }
      });
    });
    var notes = document.getElementById('lessonNotes');
    if (notes) {
      var all = {}; try { all = JSON.parse(localStorage.getItem(NOTES_KEY)) || {}; } catch (e) {}
      notes.value = all[id] || '';
      var h = null;
      notes.addEventListener('input', function () {
        clearTimeout(h);
        h = setTimeout(function () {
          var cur = {}; try { cur = JSON.parse(localStorage.getItem(NOTES_KEY)) || {}; } catch (e) {}
          cur[id] = notes.value;
          try { localStorage.setItem(NOTES_KEY, JSON.stringify(cur)); } catch (e) {}
          var s = document.getElementById('notesSaved'); if (s) s.textContent = 'Saved ✓';
        }, 400);
      });
    }
    updateXpBadges();
  }

  /* ---------- Global: copy buttons + small YT buttons ---------- */
  document.addEventListener('click', function (e) {
    var copy = e.target.closest ? e.target.closest('[data-copy]') : null;
    if (copy) {
      var pre = copy.closest('.code-block') ? copy.closest('.code-block').querySelector('pre code, pre') : null;
      var text = pre ? pre.innerText : '';
      var done = function () { var old = copy.textContent; copy.textContent = 'Copied ✓'; setTimeout(function () { copy.textContent = old; }, 1600); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () { toast('Copy failed — select the code manually'); });
      else toast('Copy not supported in this browser');
      return;
    }
    var yt = e.target.closest ? e.target.closest('[data-yt]') : null;
    if (yt) { window.open(yt.getAttribute('data-yt'), '_blank', 'noopener'); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      var yt = e.target.closest ? e.target.closest('[data-yt]') : null;
      if (yt) { e.preventDefault(); window.open(yt.getAttribute('data-yt'), '_blank', 'noopener'); }
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.getAttribute('data-page');
    updateXpBadges();
    if (page === 'home') initHome();
    else if (page === 'module') initModule();
    else if (page === 'lesson') initLesson();
  });
})();
