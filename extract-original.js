// Extract MODULES + EXTRA from the original index.html and save verbatim JSON.
const fs = require('fs');
const vm = require('vm');
const html = fs.readFileSync('index.html', 'utf8');

function extractVar(src, name) {
  const start = src.indexOf('var ' + name);
  const eq = src.indexOf('=', start);
  const ib = src.indexOf('[', eq), ic = src.indexOf('{', eq);
  let i = ib === -1 ? ic : ic === -1 ? ib : Math.min(ib, ic);
  const open = src[i], close = open === '{' ? '}' : ']';
  let depth = 0, inStr = null, esc = false;
  for (let j = i; j < src.length; j++) {
    const c = src[j];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === inStr) inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
    if (c === open) depth++;
    else if (c === close) { depth--; if (depth === 0) return src.slice(start, j + 1); }
  }
  throw new Error('unbalanced ' + name);
}

const mCode = extractVar(html, 'MODULES');
const eCode = extractVar(html, 'EXTRA');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(mCode + ';\n' + eCode, sandbox);
const MODULES = sandbox.MODULES, EXTRA = sandbox.EXTRA;
console.log('modules:', MODULES.length);
let total = 0;
for (const m of MODULES) {
  console.log('M' + m.id, JSON.stringify({ badge: m.badge, cat: m.cat, title: m.title, meta: m.meta }), 'lessons:', m.lessons.length, m.lessons.map(l => l.id).join(','));
  total += m.lessons.length;
}
console.log('TOTAL original lessons:', total);
console.log('EXTRA keys:', Object.keys(EXTRA).join(','));
fs.writeFileSync('data/original-modules.json', JSON.stringify({ MODULES, EXTRA }, null, 2));
console.log('wrote data/original-modules.json', fs.statSync('data/original-modules.json').size, 'bytes');
for (const m of MODULES) for (const l of m.lessons) {
  const pre = (l.body.match(/<pre>/g) || []).length;
  const h4 = (l.body.match(/<h4>/g) || []).length;
  console.log(m.id + '.' + l.id, JSON.stringify(l.t), 'mins', l.mins, 'pre', pre, 'h4', h4, 'hasInterview', !!l.interview, 'checks', (l.checks || []).length, 'interviewLen', l.interview ? l.interview.length : 0);
}
for (const k of Object.keys(EXTRA)) {
  console.log('EXTRA', k, 'm:', EXTRA[k].m.length, 'i:', EXTRA[k].i.length);
}
