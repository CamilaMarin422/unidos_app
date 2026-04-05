/* ══════════════════════════════
   SINGLE SOURCE OF TRUTH
   Agregar, editar o quitar un animal
   aquí se refleja en toda la app.
══════════════════════════════ */
const animals = [
  {
    id: 1,
    name: 'Toby',
    img: 'images/pets/6.png',
    imgThumb: 'images/pets/6.png',
    type: 'Dog', sex: 'Male', size: 'Small', color: 'Brown and white',
    marks: 'Friendly and white snout markings',
    loc: 'San Pelayo, Córdoba', locStreet: 'Boulevard Libertadores',
    date: 'Feb 19, 2026', channel: 'WhatsApp', vol: 'Juan M.',
    searchTags: 'dog male san pelayo córdoba brown white jack russell terrier',
    age: '2 yrs',
    adoptTags: ['Friendly', 'Good with kids', 'Vaccinated', 'Healthy'],
    shelter: 'Albergue Montería 2 · 2.3 km',
    stamp: 'approved',
    status: 'available',   // available | match | adopt
  },
  {
    id: 2,
    name: 'Luna',
    img: 'images/pets/1.png',
    imgThumb: 'images/pets/1.png',
    type: 'Cat', sex: 'Female', size: 'Small', color: 'White with chocolate markings',
    marks: 'Blue eyes, very calm, siamese-type coat',
    loc: 'Lorica, Córdoba', locStreet: 'Parque Central',
    date: 'Feb 18, 2026', channel: 'App', vol: 'María R.',
    searchTags: 'cat female lorica córdoba white siamese chocolate',
    age: '1 yr',
    adoptTags: ['Playful', 'Indoor', 'Sterilized'],
    shelter: 'Albergue Central · 5.1 km',
    stamp: 'approved',
    status: 'match',
  },
  {
    id: 3,
    name: 'Biscuit',
    img: 'images/pets/3.png',
    imgThumb: 'images/pets/3.png',
    type: 'Dog', sex: 'Male', size: 'Small', color: 'Beige and white',
    marks: 'Fluffy coat, scruffy terrier mix',
    loc: 'San Pelayo, Córdoba', locStreet: 'Boulevard Libertadores',
    date: 'Feb 17, 2026', channel: 'WhatsApp', vol: 'Juan M.',
    searchTags: 'dog male san pelayo terrier beige white small fluffy',
    age: '4 yrs',
    adoptTags: ['Trained', 'Good with kids', 'Healthy'],
    shelter: 'Albergue Sur · 8.4 km',
    stamp: 'pass',
    status: 'adopt',
  },
  {
    id: 4,
    name: 'Sombra',
    img: 'images/pets/2.png',
    imgThumb: 'images/pets/2.png',
    type: 'Dog', sex: 'Female', size: 'Medium', color: 'Black',
    marks: 'Worn collar, calm demeanor',
    loc: 'Tierra Alta, Córdoba', locStreet: '',
    date: 'Feb 15, 2026', channel: 'App', vol: 'Carlos V.',
    searchTags: 'dog female tierra alta córdoba black labrador mix',
    age: '3 yrs',
    adoptTags: ['Calm', 'Vaccinated'],
    shelter: 'Albergue Norte · 3.7 km',
    stamp: 'approved',
    status: 'available',
  },
  {
    id: 5,
    name: 'Tinto',
    img: 'images/pets/5.png',
    imgThumb: 'images/pets/5.png',
    type: 'Cat', sex: 'Male', size: 'Small', color: 'Black',
    marks: 'Young kitten, approx. 2 months, blue eyes',
    loc: 'Lorica, Córdoba', locStreet: '',
    date: 'Feb 14, 2026', channel: 'App', vol: 'María R.',
    searchTags: 'cat male lorica córdoba black kitten',
    age: '2 mo',
    adoptTags: ['Playful', 'Indoor'],
    shelter: 'Albergue Central · 5.1 km',
    stamp: 'pass',
    status: 'match',
  },
  {
    id: 6,
    name: 'Nieve',
    img: 'images/pets/4.png',
    imgThumb: 'images/pets/4.png',
    type: 'Rabbit', sex: 'Female', size: 'Small', color: 'White',
    marks: 'Red eyes, wearing a red harness',
    loc: 'Montería, Córdoba', locStreet: '',
    date: 'Feb 12, 2026', channel: 'Direct', vol: 'Staff',
    searchTags: 'rabbit female montería córdoba white albino',
    age: '1 yr',
    adoptTags: ['Calm', 'Gentle', 'Vaccinated'],
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

/* ══════════════════════════════
   REPORT PETS (lost pets shown on map)
══════════════════════════════ */
const reportPets = [
  {
    id: 'r1',
    name: 'Nena',
    img: 'images/pets_report/1.png',
    type: 'Dog', sex: 'Female', size: 'Medium',
    desc: 'Medium. Black coat with red collar, calm and gentle.',
    address: 'Cra. 14 con calle 32',
    loc: 'Tierra Alta, Córdoba',
    lat: 8.176, lng: -76.058,
    date: 'Mar 28',
    comments: 3,
  },
  {
    id: 'r2',
    name: 'Peluso',
    img: 'images/pets_report/2.png',
    type: 'Dog', sex: 'Male', size: 'Medium',
    desc: 'Medium. Long dark curly hair, very friendly.',
    address: 'Parque Central',
    loc: 'Lorica, Córdoba',
    lat: 9.237, lng: -75.820,
    date: 'Mar 29',
    comments: 5,
  },
  {
    id: 'r3',
    name: 'Cacao',
    img: 'images/pets_report/3.png',
    type: 'Dog', sex: 'Female', size: 'Large',
    desc: 'Large. Brown and white pointer mix, wears a floral bandana.',
    address: 'Calle 12 # 5-40',
    loc: 'Montería, Córdoba',
    lat: 8.748, lng: -75.881,
    date: 'Mar 30',
    comments: 1,
  },
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
  list.innerHTML = filtered.map(a => {
    const animalId = `#A-${2844 + a.id}`;
    const street = a.locStreet ? `${a.loc.split(',')[0]}, ${a.locStreet}` : a.loc.split(',')[0];
    return `
    <div class="animal-card" data-status="${a.status}">
      <div class="ac-thumb"><img src="${a.imgThumb}" alt="${a.type}"/></div>
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:3px">
          <div style="font-size:12px;font-weight:800;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
            ${animalId} · via ${a.channel} · ${a.vol}
          </div>
          <span class="pill ${pill(a).cls}" style="flex-shrink:0">${pill(a).label}</span>
        </div>
        <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:3px">
          ${a.type} · ${a.sex} · ${a.size} · ${a.color}
        </div>
        <div style="font-size:11px;font-weight:600;color:var(--gray)">
          📍 ${street} · ${a.date}
        </div>
      </div>
    </div>`;
  }).join('');
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
  if (id === 'ownerReport') {
    setTimeout(initReportMap, 50);
    renderReportPets();
  }
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
const adoptAnimals = [
  {
    name: 'Michi',
    img: 'images/pets_adopt/11.png',
    desc: 'Cat. Female. Mixed. Love to play and cuddle.',
    subline: 'Female cat · small',
    shelter: 'Montería shelter',
  },
  {
    name: 'Leo',
    img: 'images/pets_adopt/12.png',
    desc: 'Dog. Male. Mixed. Full of energy and love.',
    subline: 'Male dog · medium',
    shelter: 'Albergue Central',
  },
  {
    name: 'Nala',
    img: 'images/pets_adopt/13.png',
    desc: 'Cat. Female. Mixed. Calm and very affectionate.',
    subline: 'Female cat · small',
    shelter: 'Albergue Norte',
  },
];

let adoptIdx = 0;

function loadAdopt() {
  const a = adoptAnimals[adoptIdx];
  document.getElementById('adoptImg').src             = a.img;
  document.getElementById('adoptName').textContent    = a.name;
  document.getElementById('adoptSub').textContent     = a.desc;
  document.getElementById('adoptShelterText').textContent = a.shelter;
  document.getElementById('adoptDots').innerHTML = adoptAnimals.map((_, i) =>
    `<div class="adopt-dot ${i === adoptIdx ? 'active' : ''}"></div>`
  ).join('');
}

function openAdoptForm() {
  const a = adoptAnimals[adoptIdx];
  document.getElementById('formPetName').textContent   = a.name;
  document.getElementById('formPetName2').textContent  = a.name;
  document.getElementById('formPetName3').textContent  = a.name;
  document.getElementById('formPetThumb').src          = a.img;
  document.getElementById('formPetSubline').textContent = a.subline;
  document.getElementById('formPetDesc').textContent   = a.desc;
  goTo('ownerAdoptForm');
}

function selectNotify(btn) {
  btn.closest('div').querySelectorAll('button').forEach(b => {
    b.style.background = 'white';
    b.style.color = 'var(--gray-mid)';
    b.style.borderColor = 'var(--orange-border)';
  });
  btn.style.background = 'var(--orange)';
  btn.style.color = 'white';
  btn.style.borderColor = 'var(--orange)';
}

function showAdoptSnack() {
  const s = document.getElementById('adoptSnack');
  s.classList.add('show');
  setTimeout(() => s.classList.remove('show'), 2600);
}

function sendAdoptRequest() {
  goTo('ownerAdopt');
  const s = document.getElementById('requestSnack');
  s.style.bottom = '90px';
  setTimeout(() => { s.style.bottom = '-90px'; }, 3000);
}

function swipe(action) {
  const w = document.getElementById('adoptCardWrap');
  const dir = action === 'pass' ? -1 : 1;
  w.style.transition = 'transform .35s ease,opacity .35s';
  w.style.transform  = `translateX(${dir * 320}px) rotate(${dir * 8}deg)`;
  w.style.opacity    = '0';
  setTimeout(() => {
    adoptIdx = (adoptIdx + 1) % adoptAnimals.length;
    loadAdopt();
    w.style.transition = 'none';
    w.style.transform  = 'translateX(0) rotate(0)';
    w.style.opacity    = '1';
    setTimeout(() => { w.style.transition = 'transform .35s ease,opacity .35s'; }, 20);
    if (action === 'super') showAdoptSnack();
  }, 350);
}

/* ══════════════════════════════
   REPORT MAP & LIST
══════════════════════════════ */
let reportMap = null;
let currentReportFilter = 'all';

function initReportMap() {
  if (reportMap) {
    reportMap.invalidateSize();
    return;
  }
  reportMap = L.map('reportMap', { zoomControl: false, attributionControl: false })
    .setView([8.9, -75.95], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
  }).addTo(reportMap);

  reportPets.forEach((p, i) => {
    L.circleMarker([p.lat, p.lng], {
      radius: 13,
      fillColor: '#F07020',
      color: 'white',
      weight: 2.5,
      fillOpacity: 1,
    }).addTo(reportMap).on('click', () => showReportDetail(i));
  });
}

function renderReportPets(filter) {
  if (filter !== undefined) currentReportFilter = filter;
  const f = currentReportFilter;
  const list = document.getElementById('reportPetsList');
  if (!list) return;
  const filtered = f === 'all' ? reportPets : reportPets.filter(p => p.type === f);
  list.innerHTML = filtered.map(p => {
    const idx = reportPets.indexOf(p);
    const c = p.comments || 0;
    return `
    <div onclick="showReportDetail(${idx})" style="display:flex;align-items:center;gap:12px;background:white;border-radius:14px;padding:10px 12px;box-shadow:var(--sh);cursor:pointer">
      <img src="${p.img}" style="width:64px;height:64px;border-radius:10px;object-fit:cover;flex-shrink:0"/>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;color:var(--text);margin-bottom:2px">${p.name} · ${p.type}</div>
        <div style="font-size:12px;font-weight:600;color:var(--gray-mid)">${p.address}</div>
        <div style="font-size:11px;font-weight:600;color:var(--gray)">${p.loc} · ${p.date}</div>
      </div>
      <div style="display:flex;align-items:center;gap:4px;flex-shrink:0;color:${c > 0 ? 'var(--orange)' : 'var(--gray)'}">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span style="font-size:12px;font-weight:800">${c}</span>
      </div>
    </div>`;
  }).join('');
}

function filterReport(el, type) {
  document.querySelectorAll('.rpill').forEach(p => p.classList.remove('sel'));
  el.classList.add('sel');
  renderReportPets(type);
}

function showReportDetail(i) {
  const p = reportPets[i];
  document.getElementById('rdImg').src = p.img;
  document.getElementById('rdAddress').textContent = p.address;
  document.getElementById('rdSex').textContent = p.sex;
  document.getElementById('rdDesc').textContent = p.desc;
  const c = p.comments || 0;
  document.getElementById('rdCommentCount').textContent = c;
  document.getElementById('rdCommentSection').style.display = c > 0 ? 'flex' : 'none';
  document.getElementById('rdNoComments').style.display = c === 0 ? 'block' : 'none';
  goTo('reportDetail');
}

function startBreathAnim() {
  const btn   = document.getElementById('rsBreathBtn');
  const txt   = document.getElementById('rsBreathTxt');
  const phase = document.getElementById('rsBreathPhase');
  btn.onclick = null;

  const steps = [
    { label: 'Breath in',  phaseText: 'Breath in…',   scale: 1.35, duration: 4000 },
    { label: 'Hold',       phaseText: 'Hold…',         scale: 1.35, duration: 4000 },
    { label: 'Breath out', phaseText: 'Breath out…',   scale: 1,    duration: 6000 },
  ];
  let cycle = 0;
  const totalCycles = 3;

  function runStep(si) {
    if (cycle >= totalCycles) {
      txt.innerHTML = 'Done';
      phase.textContent = 'Well done. Take your time.';
      btn.style.transform = 'scale(1)';
      btn.onclick = startBreathAnim;
      return;
    }
    const s = steps[si];
    txt.innerHTML = s.label;
    phase.textContent = s.phaseText;
    btn.style.transition = `transform ${s.duration}ms ease`;
    btn.style.transform  = `scale(${s.scale})`;
    setTimeout(() => {
      const next = (si + 1) % steps.length;
      if (next === 0) cycle++;
      runStep(next);
    }, s.duration);
  }
  runStep(0);
}

function postReportUpdate() {
  alert('Thanks for your update! The pet owner will be notified.');
}

function loadDemoCatPhoto() {
  const wrap = document.getElementById('rfPhotoWrap');
  wrap.innerHTML = `<img src="images/pets_report/new_pet.png" style="width:100%;height:100%;object-fit:cover"/>`;
  wrap.onclick = null;
}

function publishReport() {
  const name    = document.getElementById('rfName').value.trim()    || 'Manchas';
  const address = document.getElementById('rfAddress').value.trim() || 'Cra. 8 # 24-15';
  const city    = document.getElementById('rfCity').value.trim()    || 'Montería, Córdoba';
  const marks   = document.getElementById('rfMarks').value.trim()   || '';
  const color   = document.getElementById('rfColor').value.trim()   || 'Black and white';
  const typeEl  = document.querySelector('#rfType .chip.sel');
  const sexEl   = document.querySelector('#rfSex .chip.sel');
  const sizeEl  = document.querySelector('#rfSize .chip.sel');

  const newPet = {
    id:       'r' + (reportPets.length + 1),
    name,
    img:      'images/pets_report/new_pet.png',
    type:     typeEl  ? typeEl.textContent  : 'Cat',
    sex:      sexEl   ? sexEl.textContent   : 'Male',
    size:     sizeEl  ? sizeEl.textContent  : 'Small',
    desc:     `${sizeEl ? sizeEl.textContent : 'Small'}. ${marks || color + ' coat.'}`,
    address,
    loc:      city,
    lat:      8.752 + (Math.random() - 0.5) * 0.02,
    lng:     -75.876 + (Math.random() - 0.5) * 0.02,
    date:    'Today',
    comments: 0,
  };

  reportPets.push(newPet);

  // Populate success screen
  document.getElementById('rsImg').src  = newPet.img;
  document.getElementById('rsName').textContent = newPet.name;
  document.getElementById('rsType').textContent = newPet.type;
  document.getElementById('rsSex').textContent  = newPet.sex;
  document.getElementById('rsLoc').textContent  = newPet.address + ' · ' + newPet.loc;
  document.getElementById('rsDate').textContent = newPet.date;
  // Reset breath button
  const btn = document.getElementById('rsBreathBtn');
  btn.style.transform = 'scale(1)';
  document.getElementById('rsBreathTxt').textContent = '';
  document.getElementById('rsBreathTxt').innerHTML = 'Tap to<br>start';
  document.getElementById('rsBreathPhase').textContent = 'Breath in · hold · breath out';

  // Populate postcard screen
  document.getElementById('pcImg').src  = newPet.img;
  document.getElementById('pcName').textContent = newPet.name;
  document.getElementById('pcType').textContent = newPet.type + ' · ' + newPet.sex;
  document.getElementById('pcDesc').textContent = newPet.desc;
  document.getElementById('pcLoc').textContent  = newPet.address + ', ' + newPet.loc;

  goTo('reportSuccess');

  // Add map marker after returning to report screen later
  setTimeout(() => {
    if (reportMap) {
      const idx = reportPets.length - 1;
      L.circleMarker([newPet.lat, newPet.lng], {
        radius: 13, fillColor: '#F07020', color: 'white', weight: 2.5, fillOpacity: 1,
      }).addTo(reportMap).on('click', () => showReportDetail(idx));
    }
  }, 300);
}

/* ══════════════════════════════
   REPORT STEPS
══════════════════════════════ */
let rStep = 1;

function rNext() {
  if (rStep < 4) { rStep++; updateR(); }
  else           { showWellnessSuccess('ownerReportForm'); }
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
   SEARCH + FILTER PILLS
══════════════════════════════ */
const activeFilters = { type: 'all-type', size: 'all-size', loc: 'all-loc', date: 'all-date' };

function showFilters() {
  const fs = document.getElementById('filterSection');
  fs.style.display = 'block';
}

function hideFilters() {
  document.getElementById('filterSection').style.display = 'none';
}

function selectFilter(el, groupId, value) {
  document.querySelectorAll('#' + groupId + ' .fpill').forEach(p => p.classList.remove('sel'));
  el.classList.add('sel');
  const key = groupId.replace('fg-', '');
  activeFilters[key] = value;
  filterPets();
}

function filterPets() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  document.getElementById('clearSearch').style.display = q ? 'block' : 'none';

  let visible = 0;
  document.querySelectorAll('#petsGrid .pet-card').forEach((c, i) => {
    const a = animals[i];
    const matchQ    = !q || c.dataset.tags.includes(q);
    const matchType = activeFilters.type === 'all-type' || a.type === activeFilters.type;
    const matchSize = activeFilters.size === 'all-size' || a.size === activeFilters.size;
    const matchLoc  = activeFilters.loc  === 'all-loc'  || a.loc.toLowerCase().includes(activeFilters.loc.toLowerCase());
    const matchDate = activeFilters.date === 'all-date' || true; // date is mock data
    const show = matchQ && matchType && matchSize && matchLoc && matchDate;
    c.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  document.getElementById('emptyState').style.display = visible === 0 ? 'flex' : 'none';
  const countEl = document.getElementById('resultsCount');
  if (countEl) countEl.textContent = visible + ' result' + (visible !== 1 ? 's' : '');
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  // reset all pills
  ['fg-type','fg-size','fg-loc','fg-date'].forEach(gid => {
    const pills = document.querySelectorAll('#' + gid + ' .fpill');
    pills.forEach((p, i) => p.classList.toggle('sel', i === 0));
  });
  activeFilters.type = 'all-type';
  activeFilters.size = 'all-size';
  activeFilters.loc  = 'all-loc';
  activeFilters.date = 'all-date';
  filterPets();
}

/* ══════════════════════════════
   PHOTO SEARCH
══════════════════════════════ */
function openPhotoSearch() {
  document.getElementById('photoSearchModal').style.display = 'flex';
  document.getElementById('photoUploadArea').style.display = 'flex';
  document.getElementById('photoSearchStatus').style.display = 'none';
  document.getElementById('photoProgressFill').style.width = '0%';
  document.getElementById('photoProgressFill').style.background = 'var(--orange)';
  document.getElementById('photoResults').style.display = 'none';
}

function closePhotoSearch(e) {
  if (e && e.target !== document.getElementById('photoSearchModal')) return;
  document.getElementById('photoSearchModal').style.display = 'none';
}

function startPhotoSearch() {
  document.getElementById('photoUploadArea').style.display = 'none';
  document.getElementById('photoSearchStatus').style.display = 'block';
  document.getElementById('photoAnalyzing').style.display = 'block';
  document.getElementById('photoResults').style.display = 'none';

  const fill   = document.getElementById('photoProgressFill');
  const label  = document.getElementById('photoProgressLabel');
  const labels = [
    'Analyzing coat color and markings…',
    'Comparing with database…',
    'Cross-referencing location data…',
    'Match found!',
  ];
  let pct = 0;
  let step = 0;
  fill.style.width = '0%';

  const interval = setInterval(() => {
    pct += 2;
    fill.style.width = pct + '%';
    if (pct === 25)  { step = 1; label.textContent = labels[1]; }
    if (pct === 55)  { step = 2; label.textContent = labels[2]; }
    if (pct === 85)  { step = 3; label.textContent = labels[3]; fill.style.background = 'var(--green)'; }
    if (pct >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        document.getElementById('photoAnalyzing').style.display = 'none';
        document.getElementById('photoResults').style.display = 'block';
      }, 300);
    }
  }, 40);
}

function closePhotoSearchAndShowDetail(idx) {
  document.getElementById('photoSearchModal').style.display = 'none';
  showDetail(idx);
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
filterPets();
renderShelterAnimals();
renderRecentArrivals();
renderMetrics();
loadAdopt();
renderReportPets();
