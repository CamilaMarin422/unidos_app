/* ══════════════════════════════
   SINGLE SOURCE OF TRUTH
   Agregar, editar o quitar un animal
   aquí se refleja en toda la app.
══════════════════════════════ */
const animals = [
  {
    id: 1,
    name: 'Toby',
    img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=450&fit=crop&auto=format',
    imgThumb: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=120&h=120&fit=crop&auto=format',
    type: 'Dog', sex: 'Male', size: 'Medium', color: 'Brown and white',
    marks: 'Friendly, responds to "Toby"',
    loc: 'San Pelayo, Córdoba', locStreet: 'Boulevard Libertadores',
    date: 'Feb 19',
    searchTags: 'dog male san pelayo córdoba brown labrador',
    age: '2 yrs',
    adoptTags: ['Friendly', 'Good with kids', 'Vaccinated', 'Healthy'],
    shelter: 'Albergue Montería 2 · 2.3 km',
    stamp: 'approved',
    status: 'available',   // available | match | adopt
  },
  {
    id: 2,
    name: 'Luna',
    img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=450&fit=crop&auto=format',
    imgThumb: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=120&h=120&fit=crop&auto=format',
    type: 'Cat', sex: 'Female', size: 'Small', color: 'White with brown spots',
    marks: 'Blue eyes, very calm',
    loc: 'Lorica, Córdoba', locStreet: 'Parque Central',
    date: 'Feb 18',
    searchTags: 'cat female lorica córdoba white',
    age: '1 yr',
    adoptTags: ['Playful', 'Indoor', 'Sterilized'],
    shelter: 'Albergue Central · 5.1 km',
    stamp: 'approved',
    status: 'match',
  },
  {
    id: 3,
    name: 'Biscuit',
    img: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/40/labrador-retriever.jpg?crop=1.00xw:0.668xh;0,0.244xh',
    imgThumb: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/40/labrador-retriever.jpg?crop=1.00xw:0.668xh;0,0.244xh',
    type: 'Dog', sex: 'Male', size: 'Small', color: 'White',
    marks: 'Long hair, scar on right paw',
    loc: 'San Pelayo, Córdoba', locStreet: 'Boulevard Libertadores',
    date: 'Feb 17',
    searchTags: 'dog male san pelayo poodle white small',
    age: '4 yrs',
    adoptTags: ['Trained', 'Good with kids', 'Healthy'],
    shelter: 'Albergue Sur · 8.4 km',
    stamp: 'pass',
    status: 'adopt',
  },
  {
    id: 4,
    name: 'Sombra',
    img: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=600&h=450&fit=crop&auto=format',
    imgThumb: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=120&h=120&fit=crop&auto=format',
    type: 'Dog', sex: 'Female', size: 'Large', color: 'Black',
    marks: 'No collar, slight limp left leg',
    loc: 'Tierra Alta, Córdoba', locStreet: '',
    date: 'Feb 15',
    searchTags: 'dog female tierra alta córdoba black',
    age: '3 yrs',
    adoptTags: ['Calm', 'Vaccinated'],
    shelter: 'Albergue Norte · 3.7 km',
    stamp: 'approved',
    status: 'available',
  },
  {
    id: 5,
    name: 'Tinto',
    img: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&h=450&fit=crop&auto=format',
    imgThumb: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=120&h=120&fit=crop&auto=format',
    type: 'Cat', sex: 'Male', size: 'Small', color: 'Black',
    marks: 'Young kitten, approx. 2 months',
    loc: 'Lorica, Córdoba', locStreet: '',
    date: 'Feb 14',
    searchTags: 'cat male lorica córdoba black',
    age: '2 mo',
    adoptTags: ['Playful', 'Indoor'],
    shelter: 'Albergue Central · 5.1 km',
    stamp: 'pass',
    status: 'match',
  },
  {
    id: 6,
    name: 'Goldie',
    img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=450&fit=crop&auto=format',
    imgThumb: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=120&h=120&fit=crop&auto=format',
    type: 'Dog', sex: 'Female', size: 'Medium', color: 'Golden',
    marks: 'Very friendly, no collar',
    loc: 'Montería, Córdoba', locStreet: '',
    date: 'Feb 12',
    searchTags: 'dog female montería córdoba golden retriever',
    age: '3 yrs',
    adoptTags: ['Active', 'Vaccinated', 'Trained'],
    shelter: 'Albergue Norte · 3.7 km',
    stamp: 'approved',
    status: 'available',
  },
  // {
  //   id: 7,
  //   name: 'Rex',
  //   img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=450&fit=crop&auto=format',
  //   imgThumb: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=120&h=120&fit=crop&auto=format',
  //   type: 'Dog', sex: 'Male', size: 'Large', color: 'Brown',
  //   marks: 'Calm, older dog, responds well to commands',
  //   loc: 'Montería, Córdoba', locStreet: '',
  //   date: 'Feb 10',
  //   searchTags: 'dog male montería córdoba brown large',
  //   age: '5 yrs',
  //   adoptTags: ['Calm', 'Vaccinated'],
  //   shelter: 'Albergue Montería 1 · 1.8 km',
  //   stamp: 'approved',
  //   status: 'adopt',
  // },
];

/* ── Helpers ─────────────────── */
const statusPill = {
  available: { cls: 'o', label: 'Available', recentLabel: 'New' },
  match:     { cls: 'b', label: 'Match',     recentLabel: 'Match' },
  adopt:     { cls: 'g', label: 'Adopting',  recentLabel: 'Adopt' },
};

function animalLabel(a) {
  return `${a.sex} ${a.type.toLowerCase()} · ${a.size.toLowerCase()}`;
}

/* ══════════════════════════════
   RENDER FUNCTIONS
══════════════════════════════ */

function renderPetsGrid() {
  const grid = document.getElementById('petsGrid');
  grid.innerHTML = animals.map((a, i) => `
    <div class="pet-card" onclick="showDetail(${i})"
         data-tags="${a.searchTags}">
      <div class="pet-photo">
        <img src="${a.imgThumb}" alt="${a.type}"/>
      </div>
      <div class="pet-info">
        <div class="ptr">
          <span class="pt">${a.type}</span>
          <span class="sp">${a.sex}</span>
        </div>
        <div class="ploc">${a.loc}</div>
      </div>
    </div>`
  ).join('');
}

function renderShelterAnimals(filter = 'all') {
  const list = document.getElementById('animalsList');
  const filtered = filter === 'all' ? animals : animals.filter(a => a.status === filter);
  const pill = a => statusPill[a.status];
  list.innerHTML = filtered.map(a => `
    <div class="animal-card" data-status="${a.status}">
      <div class="ac-thumb"><img src="${a.imgThumb}" alt="${a.type}"/></div>
      <div style="flex:1">
        <div style="font-size:13px;font-weight:900;color:var(--text);margin-bottom:2px">
          ${a.type} · ${a.sex} · ${a.size}
        </div>
        <div style="font-size:11px;font-weight:600;color:var(--gray)">
          ${a.color} · ${a.loc.split(',')[0]} · ${a.date}
        </div>
      </div>
      <span class="pill ${pill(a).cls}" style="flex-shrink:0">${pill(a).label}</span>
    </div>`
  ).join('');
}

function renderRecentArrivals() {
  const container = document.getElementById('recentArrivals');
  const recent = [...animals]
    .sort((a, b) => b.id - a.id)  // más reciente primero (id más alto = más nuevo)
    .slice(0, 3);
  const pill = a => statusPill[a.status];
  container.innerHTML = recent.map(a => `
    <div class="recent-row">
      <div class="rthumb"><img src="${a.imgThumb}" alt="${a.type}"/></div>
      <div style="flex:1">
        <div style="font-size:13px;font-weight:800;color:var(--text)">
          ${a.type} · ${a.sex} · ${a.size}
        </div>
        <div style="font-size:11px;font-weight:600;color:var(--gray)">
          ${a.loc.split(',')[0]} · ${a.date}
        </div>
      </div>
      <span class="pill ${pill(a).cls}">${pill(a).recentLabel}</span>
    </div>`
  ).join('');
}

function renderMetrics() {
  const total     = animals.length;
  const matches   = animals.filter(a => a.status === 'match').length;
  const adopting  = animals.filter(a => a.status === 'adopt').length;

  document.getElementById('metricCustody').textContent = total;
  document.getElementById('metricMatches').textContent = matches;

  // Actualizar labels de los filtros
  const available = animals.filter(a => a.status === 'available').length;
  document.getElementById('ftabAll').textContent       = `All (${total})`;
  document.getElementById('ftabAvailable').textContent = `Available (${available})`;
  document.getElementById('ftabMatch').textContent     = `Matches (${matches})`;
  document.getElementById('ftabAdopt').textContent     = `Adopting (${adopting})`;
}

/* ══════════════════════════════
   NAVIGATION
══════════════════════════════ */
function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById(id);
  screen.classList.add('active');
  screen.scrollTop = 0;
}

function switchRole(r) {
  ['op1', 'op2'].forEach(id => {
    const e = document.getElementById(id);
    if (e) e.className = 'role-pill' + (r === 'owner' ? ' ao' : '');
  });
  ['sp1', 'sp2'].forEach(id => {
    const e = document.getElementById(id);
    if (e) e.className = 'role-pill' + (r === 'shelter' ? ' as' : '');
  });
}

/* ══════════════════════════════
   OWNER – DETAIL
══════════════════════════════ */
function showDetail(i) {
  const a = animals[i];
  document.getElementById('detailImg').src              = a.img;
  document.getElementById('dType').textContent          = a.type;
  document.getElementById('dSex').textContent           = a.sex;
  document.getElementById('dSize').textContent          = a.size;
  document.getElementById('dColor').textContent         = a.color;
  document.getElementById('dMarks').textContent         = a.marks;
  document.getElementById('dLoc').innerHTML             = a.locStreet
    ? `${a.loc}<br>${a.locStreet}`
    : a.loc;
  document.getElementById('dDate').textContent          = a.date;
  document.getElementById('foundThumb').src             = a.imgThumb;
  document.getElementById('foundLabel').textContent     = animalLabel(a);
  goTo('ownerDetail');
}

/* ══════════════════════════════
   ADOPT (SWIPE)
══════════════════════════════ */
let adoptIdx = 0;

function loadAdopt() {
  const a = animals[adoptIdx];
  document.getElementById('adoptImg').src             = a.img;
  document.getElementById('adoptName').textContent    = a.name;
  document.getElementById('adoptAge').textContent     = '· ' + a.age;
  document.getElementById('adoptSub').textContent     = `${a.type} · ${a.sex} · ${a.size}`;
  document.getElementById('adoptShelter').textContent = '🏠 ' + a.shelter;
  document.getElementById('adoptTags').innerHTML = a.adoptTags.map((t, i) =>
    `<span style="padding:4px 11px;border-radius:50px;font-size:11px;font-weight:700;background:${i % 2 === 0 ? 'var(--orange-pale)' : 'var(--gray-light)'};color:${i % 2 === 0 ? 'var(--orange)' : 'var(--gray-mid)'}">${t}</span>`
  ).join('');
  const s = document.getElementById('adoptStamp');
  s.style.borderColor = a.stamp === 'approved' ? 'var(--red)' : '#43A047';
  s.style.color       = a.stamp === 'approved' ? 'var(--red)' : '#43A047';
  s.innerHTML         = a.stamp === 'approved' ? '✓ Approved<br>PASS' : '✓ PASS';
  document.getElementById('adoptDots').innerHTML = animals.map((_, i) =>
    `<div class="adopt-dot ${i === adoptIdx ? 'active' : ''}"></div>`
  ).join('');
}

function swipe(action) {
  const w = document.getElementById('adoptPhotoWrap');
  const dir = action === 'pass' ? -1 : 1;
  w.style.transition = 'transform .35s ease,opacity .35s';
  w.style.transform  = `translateX(${dir * 320}px) rotate(${dir * 10}deg)`;
  w.style.opacity    = '0';
  setTimeout(() => {
    adoptIdx = (adoptIdx + 1) % animals.length;
    loadAdopt();
    w.style.transition = 'none';
    w.style.transform  = 'translateX(0) rotate(0)';
    w.style.opacity    = '1';
    setTimeout(() => { w.style.transition = 'transform .35s ease,opacity .35s'; }, 20);
    if (action === 'super') {
      showSuccess('ownerAdopt', 'ob', 'ot', '⭐🐾', "It's a match!", "The shelter has been notified. They'll contact you within 24 hours.", () => {});
    }
  }, 350);
}

/* ══════════════════════════════
   REPORT STEPS
══════════════════════════════ */
let rStep = 1;

function rNext() {
  if (rStep < 4) { rStep++; updateR(); }
  else           { showWellnessSuccess('ownerReport'); }
}
function rPrev() {
  if (rStep > 1) { rStep--; updateR(); }
}
function updateR() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById('rs' + i).classList.toggle('active', i === rStep);
    document.getElementById('rpl' + i).classList.toggle('active', i <= rStep);
  }
  document.getElementById('rpf').style.width = (rStep * 25) + '%';
  document.getElementById('rBack').disabled  = rStep === 1;
  document.getElementById('rNext').textContent = rStep === 4 ? 'Post report ✓' : 'Next →';
}

/* ══════════════════════════════
   SHELTER REGISTER STEPS
══════════════════════════════ */
let sStep = 1;

function sNext() {
  if (sStep < 4) { sStep++; updateS(); }
  else {
    showSuccess('shelterRegister', 'gb', 'gt', '🐾', 'Animal registered!', 'The animal is now in the system.', () => {
      sStep = 1; updateS(); goTo('shelterAnimals');
    });
  }
}
function sPrev() {
  if (sStep > 1) { sStep--; updateS(); }
}
function updateS() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById('ss' + i).classList.toggle('active', i === sStep);
    document.getElementById('spl' + i).classList.toggle('active', i <= sStep);
  }
  document.getElementById('spf').style.width = (sStep * 25) + '%';
  document.getElementById('sBack').disabled  = sStep === 1;
  document.getElementById('sNext').textContent = sStep === 4 ? 'Publish animal ✓' : 'Next →';
}

/* ══════════════════════════════
   SEARCH
══════════════════════════════ */
function filterPets() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  document.getElementById('clearSearch').style.display = q ? 'block' : 'none';
  let visible = 0;
  document.querySelectorAll('#petsGrid .pet-card').forEach(c => {
    const match = !q || c.dataset.tags.includes(q);
    c.style.display = match ? '' : 'none';
    if (match) visible++;
  });
  document.getElementById('emptyState').style.display = visible === 0 ? 'flex' : 'none';
  document.getElementById('sectionTitle').textContent = q ? `Results for "${q}"` : 'Recently rescued';
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  filterPets();
}

/* ══════════════════════════════
   SHELTER FILTER TABS
══════════════════════════════ */
function fa(status, tab) {
  document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  renderShelterAnimals(status);
}

/* ══════════════════════════════
   UI HELPERS
══════════════════════════════ */
function sc(el, g) {
  document.querySelectorAll('#' + g + ' .chip').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
}
function st(el, g) {
  document.querySelectorAll('#' + g + ' .tb').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
}
function sn(el, g) {
  document.querySelectorAll('#' + g + ' .notify-btn').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
}

function prevPhoto(e, pi, ti) {
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = ev => {
    document.getElementById(pi).innerHTML = `<img src="${ev.target.result}" style="width:100%;height:120px;object-fit:cover;border-radius:10px">`;
    document.getElementById(ti).textContent = 'Photo uploaded ✓';
  };
  r.readAsDataURL(f);
}

function showSuccess(sid, bgc, tc, icon, title, sub, cb) {
  const s  = document.getElementById(sid);
  const ov = document.createElement('div');
  ov.className = `sov ${bgc}`;
  ov.innerHTML = `
    <div style="font-size:72px;margin-bottom:18px">${icon}</div>
    <div style="font-size:24px;font-weight:900;color:white;margin-bottom:10px">${title}</div>
    <div style="font-size:14px;font-weight:600;color:rgba(255,255,255,.85);line-height:1.65;margin-bottom:28px">${sub}</div>
    <button class="sov-btn ${tc}" onclick="this.closest('.sov').remove();(${cb.toString()})()">Done</button>`;
  s.appendChild(ov);
}

function approveReq(btn) {
  const c = btn.closest('.req-card');
  c.style.opacity       = '.5';
  c.style.pointerEvents = 'none';
  btn.textContent       = '✓ Approved';
  btn.style.background  = 'var(--green)';
}

function declineReq(btn) {
  const c = btn.closest('.req-card');
  c.style.transition = 'opacity .3s';
  c.style.opacity    = '0';
  setTimeout(() => c.remove(), 300);
}

/* ══════════════════════════════
   WELLNESS SYSTEM
══════════════════════════════ */
let sessionStart   = Date.now();
let toastShown     = {};
let wellnessActive = false;

function checkSessionTime() {
  const mins = (Date.now() - sessionStart) / 1000 / 60;
  if (mins >= 1 && !toastShown['1hr']) {
    toastShown['1hr'] = true;
    showWellnessToast(
      '☁️',
      "You've been searching for a while",
      'Your dedication is pure love. Take a breath?',
      () => showWellness('long-search')
    );
  }
}
setInterval(checkSessionTime, 15000);

const wellnessContent = {
  'long-search': {
    moon: '☁️',
    eyebrow: "You've been searching for a while",
    title: 'Your love has no limits. Your body needs rest.',
    body: "Searching for someone we love activates our mind intensely. It's normal to feel anxiety, exhaustion, or hopelessness. All of that is valid.",
    affirmation: 'Every time you search, you tell your pet they matter. That is never wasted time.',
    tool: 'breath',
    breathLabel: '4-7-8 Breathing',
    breathPhases: [
      { label: 'Inhale', duration: 4000 },
      { label: 'Hold',   duration: 7000 },
      { label: 'Exhale', duration: 8000 },
    ],
    cycles: 3,
    closeCta: 'Continue searching',
    closeNote: 'Skip for now',
  },
  'no-results': {
    moon: '🌙',
    eyebrow: 'No matches right now',
    title: 'Not finding today does not mean\nnot finding tomorrow.',
    body: 'Records are updated constantly. Many owners find their pets days or even weeks after starting their search.',
    affirmation: 'Hope is not naivety — it is the fuel that keeps you searching.',
    tool: 'breath',
    breathLabel: 'Box Breathing',
    breathPhases: [
      { label: 'Inhale', duration: 4000 },
      { label: 'Hold',   duration: 4000 },
      { label: 'Exhale', duration: 4000 },
      { label: 'Hold',   duration: 4000 },
    ],
    cycles: 4,
    closeCta: 'Keep searching',
    closeNote: 'Go back',
  },
  'this-is-my-pet': {
    moon: '✨',
    eyebrow: 'An important moment',
    title: 'Trust what your\nheart recognizes.',
    body: "A pet owner's instinct is powerful. If something inside you says \"that's them\", breathe first. Let stillness be with you in this moment.",
    affirmation: 'No matter how much time has passed — the bond between you and your pet does not disappear.',
    tool: 'breath',
    breathLabel: 'Breathe before continuing',
    breathPhases: [
      { label: 'Inhale', duration: 4000 },
      { label: 'Hold',   duration: 4000 },
      { label: 'Exhale', duration: 6000 },
    ],
    cycles: 2,
    closeCta: 'I am ready',
    closeNote: 'Continue without breathing',
  },
  'report-published': {
    moon: '🕯️',
    eyebrow: 'Report published',
    title: 'You did everything\nyou could today.',
    body: 'The uncertainty of waiting is one of the hardest kinds of waiting. It is okay for it to hurt. Let that pain exist without judging it.',
    affirmation: 'Your pet now has thousands of eyes looking for them. You are not alone in this.',
    tool: 'affirmations',
    affirmations: [
      'I did everything I could today.',
      'The waiting is also part of love.',
      'I am not alone — people are searching alongside me.',
      'I allow myself to rest without guilt.',
    ],
    closeCta: 'Go to home',
    closeNote: 'Close',
  },
  'reunion': {
    moon: '🌅',
    eyebrow: "The moment you've been waiting for",
    title: 'You did it.\nYou deserve this relief.',
    body: 'After so much worry, the body needs time to process relief. You might feel like crying, laughing, or both — all of it is valid.',
    affirmation: 'The love you poured into this search is a gift. For your pet and for yourself.',
    tool: 'affirmations',
    affirmations: [
      'I allow myself to feel everything that comes now.',
      'The waiting is over. I deserve to rest.',
      'My love was stronger than the distance.',
      'This too shall pass — into joy.',
    ],
    closeCta: 'Go pick up my pet',
    closeNote: 'Cerrar',
  },
};

function showWellness(type) {
  const c = wellnessContent[type];
  if (!c) return;
  wellnessActive = true;

  const activeScreen = document.querySelector('.screen.active');
  if (!activeScreen) return;

  const ov = document.createElement('div');
  ov.className = 'wov';
  ov.id = 'wellnessOverlay';

  const isBreath = c.tool === 'breath';
  const isAffirm = c.tool === 'affirmations';

  let toolHTML = '';
  if (isBreath) {
    toolHTML = `
      <div class="wov-breath-wrap">
        <div class="breath-circle-outer">
          <div class="breath-ring" id="breathRing"></div>
          <div class="breath-inner" id="breathInner">🫁</div>
        </div>
        <div class="breath-label">${c.breathLabel}</div>
        <div class="breath-phase" id="breathPhase">Get ready…</div>
        <div class="breath-count" id="breathCount"></div>
      </div>`;
  } else if (isAffirm) {
    const affirmItems = c.affirmations.map((a, i) =>
      `<div style="padding:12px 16px;background:rgba(255,255,255,${i === 0 ? '.12' : '.06'});border-radius:14px;margin-bottom:8px;font-size:14px;font-weight:700;color:rgba(255,255,255,${i === 0 ? '.95' : '.65'});text-align:left;border:1px solid rgba(255,255,255,${i === 0 ? '.2' : '.08'})">${i === 0 ? '🌟 ' : ''}${a}</div>`
    ).join('');
    toolHTML = `<div style="width:100%;margin-bottom:20px">${affirmItems}</div>`;
  }

  ov.innerHTML = `
    <div class="wov-stars"></div>
    <button class="wov-close" onclick="closeWellness()">✕</button>
    <div class="wov-body">
      <div class="wov-moon">${c.moon}</div>
      <div class="wov-eyebrow">${c.eyebrow}</div>
      <div class="wov-title">${c.title.split('\\n').join('<br>')}</div>
      <div class="wov-body-text">${c.body}</div>
      ${c.affirmation ? `<div class="wov-affirmation">${c.affirmation}</div>` : ''}
      ${toolHTML}
      <div class="wov-actions">
        <button class="wov-btn-primary" id="wovMainCta" onclick="closeWellness()">${c.closeCta}</button>
        ${c.closeNote ? `<button class="wov-btn-secondary" onclick="closeWellness()">${c.closeNote}</button>` : ''}
      </div>
    </div>`;

  activeScreen.appendChild(ov);
  if (isBreath) startBreathing(c.breathPhases, c.cycles);
}

/* ══════════════════════════════
   BREATHING ENGINE
══════════════════════════════ */
let breathTimer = null;

function startBreathing(phases, totalCycles) {
  let cycle    = 0;
  let phaseIdx = 0;
  const ring    = document.getElementById('breathRing');
  const inner   = document.getElementById('breathInner');
  const phaseEl = document.getElementById('breathPhase');
  const countEl = document.getElementById('breathCount');
  if (!ring) return;

  setTimeout(() => {
    ring.classList.add('breathing');
    inner.classList.add('breathing');
    runPhase();
  }, 800);

  function runPhase() {
    if (!document.getElementById('breathRing')) return;
    const p = phases[phaseIdx];
    if (phaseEl) {
      phaseEl.style.animation = 'none';
      phaseEl.offsetHeight;
      phaseEl.style.animation = 'fadePhase .4s ease';
      phaseEl.textContent = p.label;
    }
    if (countEl) countEl.textContent = `Ciclo ${cycle + 1} de ${totalCycles}`;

    breathTimer = setTimeout(() => {
      phaseIdx++;
      if (phaseIdx >= phases.length) {
        phaseIdx = 0;
        cycle++;
        if (cycle >= totalCycles) {
          if (phaseEl)  phaseEl.textContent  = '✓ Done';
          if (countEl)  countEl.textContent  = '';
          const cta = document.getElementById('wovMainCta');
          if (cta) {
            cta.textContent       = 'I feel better';
            cta.style.background  = 'rgba(100,255,180,.2)';
            cta.style.borderColor = 'rgba(100,255,180,.4)';
          }
          if (ring)  ring.classList.remove('breathing');
          if (inner) inner.classList.remove('breathing');
          return;
        }
      }
      runPhase();
    }, p.duration);
  }
}

function closeWellness() {
  if (breathTimer) clearTimeout(breathTimer);
  wellnessActive = false;
  const ov = document.getElementById('wellnessOverlay');
  if (ov) {
    ov.style.animation = 'wFadeIn .3s ease reverse';
    setTimeout(() => ov.remove(), 280);
  }
}

/* ══════════════════════════════
   WELLNESS TOAST
══════════════════════════════ */
function showWellnessToast(icon, title, sub, onTap) {
  const activeScreen = document.querySelector('.screen.active');
  if (!activeScreen) return;

  const t = document.createElement('div');
  t.className = 'wellness-toast';
  t.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-sub">${sub}</div>
    </div>
    <div class="toast-action">Respirar</div>
    <div class="toast-dismiss" onclick="dismissToast(event,this.closest('.wellness-toast'))">✕</div>`;

  t.addEventListener('click', e => {
    if (e.target.classList.contains('toast-dismiss')) return;
    dismissToast(e, t);
    if (onTap) onTap();
  });

  activeScreen.appendChild(t);
  setTimeout(() => { if (t.parentNode) dismissToast(null, t); }, 8000);
}

function dismissToast(e, el) {
  if (e) e.stopPropagation();
  el.classList.add('hiding');
  setTimeout(() => el.remove(), 300);
}

function showWellnessSuccess(screenId) {
  const s  = document.getElementById(screenId);
  const ov = document.createElement('div');
  ov.className = 'sov ob';
  ov.innerHTML = `
    <div style="font-size:72px;margin-bottom:18px">🎉</div>
    <div style="font-size:24px;font-weight:900;color:white;margin-bottom:10px">Report published</div>
    <div style="font-size:14px;font-weight:600;color:rgba(255,255,255,.85);line-height:1.65;margin-bottom:28px">Your pet is now visible to thousands of people. You did everything you could today.</div>
    <button class="sov-btn ot" style="margin-bottom:14px" onclick="this.closest('.sov').remove();rStep=1;updateR();goTo('ownerSearch');setTimeout(()=>showWellness('report-published'),600)">Go home</button>`;
  s.appendChild(ov);
}

/* ══════════════════════════════
   INIT — renderizar todo al cargar
══════════════════════════════ */
renderPetsGrid();
renderShelterAnimals();
renderRecentArrivals();
renderMetrics();
loadAdopt();
