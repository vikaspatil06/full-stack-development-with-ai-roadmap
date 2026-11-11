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
  S.review = S.review || {}; S.acc = S.acc || {}; S.modCollapsed = S.modCollapsed || {};
  S.quizScore = S.quizScore || {};

  function pad(n) { return String(n).padStart(2, '0'); }
  function dayStr(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function today() { return dayStr(new Date()); }
  function doneCount() { return Object.keys(S.done).length; }
  function quizCount() { return Object.keys(S.quiz).length; }
  function xp() { return doneCount() * 20 + quizCount() * 5; }
  var LEVELS = [[0, 'Novice'], [100, 'Explorer'], [250, 'Coder'], [500, 'Builder'], [800, 'Pythonista'], [1200, 'Full-Stack'], [1800, 'Master']];
  function levelFor(v) { var cur = LEVELS[0], nxt = null; for (var i = 0; i < LEVELS.length; i++) { if (v >= LEVELS[i][0]) cur = LEVELS[i]; else { nxt = LEVELS[i]; break; } } return { idx: LEVELS.indexOf(cur) + 1, name: cur[1], floor: cur[0], next: nxt }; }
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
    var v = xp(), lv = levelFor(v);
    document.querySelectorAll('[data-xp-badge]').forEach(function (el) { el.innerHTML = '<span class="xp-ico">⚡</span> ' + v + ' XP <span class="xp-lvl">· ' + lv.name + '</span>'; });
    var ln = document.getElementById('xpLevelName'); if (ln) ln.textContent = 'Level ' + lv.idx + ' · ' + lv.name;
    var lt = document.getElementById('xpLevelText'); if (lt) lt.textContent = lv.next ? (v + ' / ' + lv.next[0] + ' XP to ' + lv.next[1]) : (v + ' XP · Max level reached');
    var lf = document.getElementById('xpLevelFill'); if (lf) lf.style.width = (lv.next ? Math.round((v - lv.floor) / (lv.next[0] - lv.floor) * 100) : 100) + '%';
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
    },
    toggleReview: function (id) { if (S.review[id]) delete S.review[id]; else S.review[id] = true; save(S); return !!S.review[id]; },
    isReview: function (id) { return !!S.review[id]; },
    reviewList: function () { return Object.keys(S.review); },
    isAccOpen: function (id, sec, defOpen) { if (S.acc[id] && typeof S.acc[id][sec] !== 'undefined') return !!S.acc[id][sec]; return !!defOpen; },
    setAcc: function (id, sec, open) { S.acc[id] = S.acc[id] || {}; S.acc[id][sec] = !!open; save(S); },
    isModCollapsed: function (mod, defCollapsed) { if (typeof S.modCollapsed[mod] !== 'undefined') return !!S.modCollapsed[mod]; return !!defCollapsed; },
    setModCollapsed: function (mod, collapsed) { S.modCollapsed[mod] = !!collapsed; save(S); },
    quizResult: function (lessonId, qi) { return S.quizScore[lessonId + ':' + qi] || null; },
    setQuizResult: function (lessonId, qi, known) { S.quizScore[lessonId + ':' + qi] = known ? 'knew' : 'missed'; save(S); },
    resetQuiz: function (lessonId) {
      var changed = false;
      Object.keys(S.quizScore).forEach(function (k) { if (k.indexOf(lessonId + ':') === 0) { delete S.quizScore[k]; changed = true; } });
      Object.keys(S.quiz).forEach(function (k) { if (k.indexOf(lessonId + ':') === 0) { delete S.quiz[k]; changed = true; } });
      save(S); return changed;
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
    initModuleCards();
    renderDsaHome();
    renderReviewList();
    updateXpBadges();
  }

  /* ---------- DSA on the dashboard ---------- */
  function renderDsaHome() {
    if (!window.FSAI) return;
    var dsa = FSAI.lessons.filter(function (l) { return l.module === 'D'; });
    var done = dsa.filter(function (l) { return PROG.isDone(l.id); }).length;
    var fill = document.getElementById('dsaProgFill'); if (fill) fill.style.width = (dsa.length ? Math.round(done / dsa.length * 100) : 0) + '%';
    var txt = document.getElementById('dsaProgText'); if (txt) txt.textContent = done + ' / ' + dsa.length + ' DSA lessons done';
    var today = document.getElementById('dsaToday');
    if (today) {
      var next = dsa.find(function (l) { return !PROG.isDone(l.id); });
      var mins = 45;
      today.innerHTML = next
        ? '<b>DSA today — 45–60 min</b><span>Next: <a href="' + next.url + '">Lesson ' + esc(next.id) + ' — ' + esc(next.title) + '</a> (' + next.mins + ' min) · then 2–3 LeetCode problems on that pattern. Sunday: weekly contest + review.</span>'
        : '<b>DSA today — 45–60 min</b><span>All 12 DSA lessons done — re-solve your mistake log from memory, or run a timed set (2 problems, 60 min).</span>';
    }
  }

  /* ---------- Review list (starred lessons) ---------- */
  function renderReviewList() {
    var box = document.getElementById('reviewList'); if (!box || !window.FSAI) return;
    var ids = PROG.reviewList();
    if (!ids.length) { box.innerHTML = '<p class="search-empty">No lessons marked for review yet — tap the ☆ star on any lesson to add it here.</p>'; return; }
    box.innerHTML = ids.map(function (id) {
      var l = FSAI.lessons.find(function (x) { return x.id === id; });
      if (!l) return '';
      return '<a class="search-hit" href="' + l.url + '"><span class="hit-main"><b>Lesson ' + esc(l.id) + ' — ' + esc(l.title) + '</b><span>' + esc(l.moduleTitle) + ' · ' + l.mins + ' min' + (PROG.isDone(l.id) ? ' · ✓ done' : '') + '</span></span><span class="review-star on" aria-hidden="true">★</span></a>';
    }).join('');
  }

  /* ---------- Dashboard module cards: collapse/expand ---------- */
  function initModuleCards() {
    document.querySelectorAll('[data-cat]').forEach(function (card) {
      var mod = card.getAttribute('data-module-progress'); if (!mod) return;
      var toggle = card.querySelector('.mod-toggle'); if (!toggle) return;
      var list = card.querySelector('.lesson-list');
      var lessons = (window.FSAI ? FSAI.lessons.filter(function (l) { return l.module === mod; }) : []);
      var allDone = lessons.length > 0 && lessons.every(function (l) { return PROG.isDone(l.id); });
      var collapsed = PROG.isModCollapsed(mod, allDone);
      var apply = function () {
        if (list) list.style.display = collapsed ? 'none' : '';
        var prog = card.querySelector('.mod-progress'); if (prog) prog.style.display = collapsed ? 'none' : '';
        toggle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
        toggle.textContent = collapsed ? 'Show lessons ▸' : 'Hide lessons ▾';
      };
      toggle.addEventListener('click', function () { collapsed = !collapsed; PROG.setModCollapsed(mod, collapsed); apply(); });
      apply();
    });
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
  function setFilter(f) {
    currentFilter = f;
    document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.toggle('active', (b.getAttribute('data-filter') || 'all') === f); });
    var sel = document.getElementById('filterSelect'); if (sel) sel.value = f;
    document.querySelectorAll('[data-cat]').forEach(function (card) {
      var cat = card.getAttribute('data-cat');
      card.style.display = (f === 'all' || cat === f) ? '' : 'none';
    });
    var no = document.getElementById('noResults');
    var visible = Array.prototype.filter.call(document.querySelectorAll('[data-cat]'), function (c) { return c.style.display !== 'none'; }).length;
    if (no) no.classList.toggle('hidden', visible !== 0);
    var input = document.getElementById('searchInput');
    if (input && input.value) renderSearch(input.value);
  }
  function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { setFilter(btn.getAttribute('data-filter') || 'all'); });
    });
    var sel = document.getElementById('filterSelect');
    if (sel) sel.addEventListener('change', function () { setFilter(sel.value); });
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
    var jump = document.getElementById('jumpSelect');
    if (jump) jump.addEventListener('change', function () { if (jump.value) window.location.href = jump.value; });
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
    /* --- richer quiz: instant feedback + score + retry --- */
    var scoreEl = document.getElementById('quizScore');
    var retryBtn = document.getElementById('quizRetry');
    function paintScore() {
      var total = document.querySelectorAll('.quiz-q').length;
      var answered = 0, known = 0;
      document.querySelectorAll('.quiz-q').forEach(function (q) {
        var qi = q.querySelector('.quiz-knew').getAttribute('data-qi');
        var r = PROG.quizResult(id, qi);
        if (r) { answered++; if (r === 'knew') known++; }
      });
      if (scoreEl) {
        if (answered === total && total > 0) {
          scoreEl.textContent = known === total ? 'Score: ' + known + ' / ' + total + ' — perfect, you know this cold 🎉' : 'Score: ' + known + ' / ' + total + ' — review the ones you missed, then retry.';
          scoreEl.classList.add('show');
        } else {
          scoreEl.textContent = 'Score: ' + known + ' / ' + total + ' so far — answer both questions to finish.';
          scoreEl.classList.add('show');
        }
      }
      if (retryBtn) retryBtn.style.display = (answered === total && total > 0) ? '' : 'none';
    }
    function answerQuiz(b, known) {
      var qi = b.getAttribute('data-qi');
      var q = b.closest('.quiz-q');
      if (PROG.quizResult(id, qi)) return;
      PROG.setQuizResult(id, qi, known);
      if (known) {
        if (PROG.markQuiz(id, qi)) { updateXpBadges(); toast('+5 XP — nice, you knew it!'); }
      } else {
        toast('Noted — re-read the section above, then retry.');
      }
      q.querySelectorAll('.quiz-knew, .quiz-missed').forEach(function (x) { x.disabled = true; });
      if (known) { b.textContent = '✓ I knew it (+5 XP)'; b.classList.add('earned'); }
      else { b.textContent = '✗ Didn\'t know it'; b.classList.add('missed'); }
      paintScore();
    }
    document.querySelectorAll('.quiz-knew').forEach(function (b) {
      var qi = b.getAttribute('data-qi');
      var r = PROG.quizResult(id, qi);
      if (r) {
        b.disabled = true;
        var m = b.parentElement.querySelector('.quiz-missed'); if (m) m.disabled = true;
        if (r === 'knew') { b.textContent = '✓ +5 XP earned'; b.classList.add('earned'); }
        else { b.textContent = 'I knew it (+5 XP)'; var mm = b.parentElement.querySelector('.quiz-missed'); if (mm) { mm.textContent = '✗ Didn\'t know it'; mm.classList.add('missed'); } }
      }
      b.addEventListener('click', function () { answerQuiz(b, true); });
    });
    document.querySelectorAll('.quiz-missed').forEach(function (b) {
      b.addEventListener('click', function () { answerQuiz(b, false); });
    });
    if (retryBtn) retryBtn.addEventListener('click', function () {
      PROG.resetQuiz(id);
      document.querySelectorAll('.quiz-q').forEach(function (q) {
        q.querySelectorAll('.quiz-knew, .quiz-missed').forEach(function (x) {
          x.disabled = false; x.classList.remove('earned', 'missed');
        });
        var k = q.querySelector('.quiz-knew'); if (k) k.textContent = 'I knew it (+5 XP)';
        var m = q.querySelector('.quiz-missed'); if (m) m.textContent = 'Didn\'t know it';
        var ans = q.querySelector('.quiz-answer'); if (ans) ans.classList.remove('open');
        var rev = q.querySelector('.quiz-reveal'); if (rev) rev.textContent = 'Reveal answer';
      });
      updateXpBadges(); paintScore(); toast('Quiz reset — try again from scratch.');
    });
    paintScore();
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
    initAccordions(id);
    initFlashcards(id);
    initRunner();
    initReviewStar(id);
    updateXpBadges();
  }

  /* ---------- Lesson accordions (state remembered per lesson) ---------- */
  function initAccordions(id) {
    document.querySelectorAll('.lesson-sec').forEach(function (head) {
      var sec = head.getAttribute('data-acc'); if (!sec) return;
      var body = head.nextElementSibling;
      while (body && !body.classList.contains('acc-body')) body = body.nextElementSibling;
      if (!body) return;
      var defOpen = sec === 'read';
      var open = PROG.isAccOpen(id, sec, defOpen);
      var apply = function () {
        body.style.display = open ? '' : 'none';
        head.setAttribute('aria-expanded', open ? 'true' : 'false');
        head.classList.toggle('closed', !open);
      };
      head.setAttribute('role', 'button');
      head.setAttribute('tabindex', '0');
      head.addEventListener('click', function () { open = !open; PROG.setAcc(id, sec, open); apply(); });
      head.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open = !open; PROG.setAcc(id, sec, open); apply(); }
      });
      apply();
    });
  }

  /* ---------- Flashcards (from lesson cards data, else derived from subtopics) ---------- */
  function initFlashcards(id) {
    var box = document.getElementById('flashcards'); if (!box || !window.FSAI) return;
    var lesson = FSAI.lessons.find(function (l) { return l.id === id; });
    var cards = (lesson && lesson.cards && lesson.cards.length) ? lesson.cards : null;
    if (!cards) {
      cards = (lesson ? lesson.subtopics : []).map(function (t) { return [t, 'See the "' + t + '" section in Read above — say it back in your own words before flipping.']; });
    }
    if (!cards.length) { box.innerHTML = '<p class="search-empty">No flashcards for this lesson yet.</p>'; return; }
    var order = cards.map(function (_, i) { return i; });
    var flipped = {};
    var render = function () {
      box.innerHTML = '<div class="fc-grid">' + order.map(function (ci) {
        var c = cards[ci];
        return '<div class="flashcard' + (flipped[ci] ? ' flipped' : '') + '" data-ci="' + ci + '" role="button" tabindex="0" aria-label="Flashcard: ' + esc(c[0]) + ' — activate to flip">' +
          '<div class="fc-inner"><div class="fc-face fc-front"><span class="fc-tag">TERM</span><b>' + esc(c[0]) + '</b><span class="fc-hint">Tap to flip</span></div>' +
          '<div class="fc-face fc-back"><span class="fc-tag">MEANING</span><span>' + esc(c[1]) + '</span></div></div></div>';
      }).join('') + '</div>' +
      '<button class="qbtn fc-shuffle" id="fcShuffle" type="button">🔀 Shuffle cards</button>';
      box.querySelectorAll('.flashcard').forEach(function (el) {
        var flip = function () { var ci = +el.getAttribute('data-ci'); flipped[ci] = !flipped[ci]; el.classList.toggle('flipped', !!flipped[ci]); };
        el.addEventListener('click', flip);
        el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });
      });
      var sh = document.getElementById('fcShuffle');
      if (sh) sh.addEventListener('click', function () {
        for (var i = order.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = order[i]; order[i] = order[j]; order[j] = t; }
        render();
      });
    };
    render();
  }

  /* ---------- "Try it" runner for JavaScript snippets (sandboxed worker, 2s timeout) ---------- */
  function looksLikeJS(code) {
    var t = code.trim();
    if (!t) return false;
    if (t.indexOf('<') !== -1) return false; /* HTML markup */
    if (/^\s*(def |import |from |print\(|class \w+\s*:|#)/m.test(t)) return false; /* Python */
    return /console\.log|^(const|let|var|function|class)\b|=>/.test(t);
  }
  function initRunner() {
    document.querySelectorAll('.code-block').forEach(function (block) {
      var pre = block.querySelector('pre'); if (!pre) return;
      var code = pre.textContent || '';
      if (!looksLikeJS(code)) return;
      var btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'run-btn'; btn.textContent = '▶ Run this JavaScript';
      var out = document.createElement('div');
      out.className = 'run-output'; out.setAttribute('aria-live', 'polite');
      block.appendChild(btn); block.appendChild(out);
      btn.addEventListener('click', function () {
        out.textContent = 'Running…'; out.classList.add('show');
        var src = 'onmessage=function(e){var logs=[];var c={log:function(){logs.push(Array.prototype.slice.call(arguments).map(String).join(" "));},error:function(){logs.push("Error: "+Array.prototype.slice.call(arguments).map(String).join(" "));}};try{var fn=new Function("console",e.data);fn(c);postMessage({ok:true,logs:logs});}catch(err){postMessage({ok:false,logs:logs,error:String(err)});}};';
        var worker;
        try { worker = new Worker(URL.createObjectURL(new Blob([src], { type: 'text/javascript' }))); }
        catch (e) { out.textContent = 'Run is not supported in this browser.'; return; }
        var done = false;
        var finish = function (msg) {
          if (done) return; done = true; worker.terminate();
          out.textContent = msg || '(no output — the code ran without logging anything)';
        };
        var timer = setTimeout(function () { finish('⏱ Timed out after 2s — check for an infinite loop.'); }, 2000);
        worker.onmessage = function (e) {
          clearTimeout(timer);
          var d = e.data;
          finish((d.error ? '❌ ' + d.error + '\n' : '') + (d.logs.length ? d.logs.join('\n') : '(no output — the code ran without logging anything)'));
        };
        worker.onerror = function () { clearTimeout(timer); finish('❌ Could not run this snippet.'); };
        worker.postMessage(code);
      });
    });
  }

  /* ---------- Mark for review (star) ---------- */
  function initReviewStar(id) {
    var star = document.getElementById('reviewStar'); if (!star) return;
    var paint = function () {
      var on = PROG.isReview(id);
      star.textContent = on ? '★ Marked for review' : '☆ Mark for review';
      star.classList.toggle('on', on);
      star.setAttribute('aria-pressed', on ? 'true' : 'false');
    };
    star.addEventListener('click', function () {
      var on = PROG.toggleReview(id);
      paint();
      toast(on ? 'Added to your Review list on the dashboard ★' : 'Removed from your Review list');
    });
    paint();
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

  /* ---------- Responsive navbar (hamburger, <=860px) + Modules dropdown ---------- */
  function initNav() {
    var btn = document.getElementById('navToggle'), bar = document.querySelector('.topbar'), nav = document.getElementById('siteNav');
    if (!btn || !bar || !nav) return;
    var setOpen = function (open) { bar.classList.toggle('nav-open', open); btn.setAttribute('aria-expanded', open ? 'true' : 'false'); btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
    btn.addEventListener('click', function (e) { e.stopPropagation(); setOpen(!bar.classList.contains('nav-open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a') && !e.target.closest('.nav-drop-btn')) setOpen(false); });
    document.addEventListener('click', function (e) { if (bar.classList.contains('nav-open') && !bar.contains(e.target)) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setOpen(false); setDrop(false); } });
    window.addEventListener('resize', function () { if (window.innerWidth > 860) setOpen(false); });
    /* Modules dropdown: click/Enter/Space toggles, Esc closes, outside click closes */
    var dropBtn = document.getElementById('modDropBtn'), drop = document.querySelector('.nav-drop');
    var setDrop = function (open) {
      if (!dropBtn || !drop) return;
      drop.classList.toggle('open', open);
      dropBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    if (dropBtn && drop) {
      dropBtn.addEventListener('click', function (e) { e.stopPropagation(); setDrop(!drop.classList.contains('open')); });
      dropBtn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setDrop(!drop.classList.contains('open')); }
        if (e.key === 'ArrowDown') { e.preventDefault(); setDrop(true); var first = drop.querySelector('.nav-drop-menu a'); if (first) first.focus(); }
      });
      drop.querySelectorAll('.nav-drop-menu a').forEach(function (a) { a.addEventListener('click', function () { setDrop(false); setOpen(false); }); });
      document.addEventListener('click', function (e) { if (drop.classList.contains('open') && !drop.contains(e.target)) setDrop(false); });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.getAttribute('data-page');
    initNav();
    updateXpBadges();
    if (page === 'home') initHome();
    else if (page === 'module') initModule();
    else if (page === 'lesson') initLesson();
  });
})();
