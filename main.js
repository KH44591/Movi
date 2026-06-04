// MOVI — main.js

// ── Burger menu ──
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
}

// ── Nav scroll ──
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 60 ? '#bbb' : '';
  });
}

// ── Scroll animations ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });

const styleEl = document.createElement('style');
styleEl.textContent = `.anim { opacity:0; transform:translateY(22px); transition:opacity 0.5s ease, transform 0.5s ease; } .anim.visible { opacity:1; transform:none; }`;
document.head.appendChild(styleEl);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.step, .shoe-card, .archive-item, .value-item, .variant-card, .drop-section').forEach((el, i) => {
    el.classList.add('anim');
    el.style.transitionDelay = `${(i % 5) * 0.07}s`;
    observer.observe(el);
  });
});

// ════════════════════════════════════════════
// VIEW SWITCHER — shoe er multiple angles
// ════════════════════════════════════════════

// Global state: কোন shoe এর কোন view active
window.MOVI_VIEW_STATE = {};

// একটা shoe card এর জন্য view switcher HTML বানাও
function buildViewSwitcher(shoe, stageId, imgId, containerClass) {
  if (!shoe.views || shoe.views.length <= 1) return '';

  const bg = shoe.stage === 'custom'
    ? shoe.bg_color
    : (typeof STAGE_BACKGROUNDS !== 'undefined' ? STAGE_BACKGROUNDS[shoe.stage] : '#111') || '#111';

  return `
    <div class="view-switcher ${containerClass || ''}">
      ${shoe.views.map((v, i) => `
        <button
          class="view-btn ${i === 0 ? 'view-active' : ''}"
          onclick="switchView('${stageId}','${imgId}','${v.image}','${bg}',this)"
          title="${v.label}"
        >${v.label}</button>
      `).join('')}
    </div>`;
}

// View switch করো
window.switchView = function(stageId, imgId, imageSrc, bg, btn) {
  const img = document.getElementById(imgId);
  const stage = document.getElementById(stageId);
  if (!img || !stage) return;

  // Fade out → swap → fade in
  img.style.opacity = '0';
  img.style.transform = 'rotate(-5deg) translateY(8px) scale(0.97)';
  setTimeout(() => {
    img.src = imageSrc;
    img.style.opacity = '1';
    img.style.transform = 'rotate(-5deg) translateY(0) scale(1)';
  }, 180);

  stage.style.background = bg;

  // Active button
  btn.closest('.view-switcher').querySelectorAll('.view-btn').forEach(b => b.classList.remove('view-active'));
  btn.classList.add('view-active');
};

// Preorder page: color thumbnail click করলে view switcher ও update হয়
window.switchShoeWithViews = function(idx, drop) {
  const shoe = drop.shoes[idx];
  if (!shoe) return;

  const bg = shoe.stage === 'custom'
    ? shoe.bg_color
    : (STAGE_BACKGROUNDS[shoe.stage] || STAGE_BACKGROUNDS.dark);

  const firstView = shoe.views && shoe.views[0] ? shoe.views[0].image : shoe.views?.[0]?.image || '';

  // Update main stage image
  const img = document.getElementById('preorderShoeImg');
  const stage = document.getElementById('preorderStage');
  if (img) { img.style.opacity='0'; setTimeout(()=>{ img.src=firstView; img.style.opacity='1'; },180); }
  if (stage) stage.style.background = bg;

  // Update color select
  const colorSel = document.getElementById('color');
  if (colorSel) colorSel.value = shoe.color;

  // Update thumbnail active
  document.querySelectorAll('.color-thumb').forEach((t,i) => t.classList.toggle('thumb-active', i===idx));

  // Rebuild view switcher
  const vs = document.getElementById('preorderViewSwitcher');
  if (vs) {
    vs.innerHTML = buildViewSwitcher(shoe, 'preorderStage', 'preorderShoeImg', '').replace(/<div class="view-switcher.*?>|<\/div>$/g, '');
    // Re-render inside existing container
    vs.innerHTML = shoe.views && shoe.views.length > 1
      ? shoe.views.map((v,i) => `<button class="view-btn ${i===0?'view-active':''}" onclick="switchView('preorderStage','preorderShoeImg','${v.image}','${bg}',this)" title="${v.label}">${v.label}</button>`).join('')
      : '';
  }
};
