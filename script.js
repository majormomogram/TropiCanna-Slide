/* ============================================================
   TropiCanna Water — Sliding Panel Navigation
   ============================================================ */

var currentPanel = 'home';

function slideTo(panelId) {
  if (panelId === currentPanel) return;

  var fromEl = document.getElementById('panel-' + currentPanel);
  var toEl   = document.getElementById('panel-' + panelId);

  fromEl.classList.remove('active');
  fromEl.classList.add('exit-left');

  toEl.classList.remove('exit-left');
  toEl.classList.add('active');

  currentPanel = panelId;
}

function slideBack() {
  if (currentPanel === 'home') return;

  var fromEl = document.getElementById('panel-' + currentPanel);
  var homeEl = document.getElementById('panel-home');

  fromEl.classList.remove('active');
  fromEl.classList.add('exit-left');

  homeEl.classList.remove('exit-left');
  homeEl.classList.add('active');

  /* Reset panel off to the right after transition completes */
  fromEl.addEventListener('transitionend', function reset() {
    fromEl.classList.remove('exit-left');
    fromEl.removeEventListener('transitionend', reset);
  });

  currentPanel = 'home';
}

/* ============================================================
   Contact Form — Formspree AJAX submission
   ============================================================ */

async function handleSubmit(event) {
  event.preventDefault();

  var form   = event.target;
  var btn    = document.getElementById('submit-btn');
  var errEl  = document.getElementById('form-error');
  var sucEl  = document.getElementById('form-success');

  errEl.style.display = 'none';
  btn.disabled = true;
  btn.textContent = 'Sending…';

  try {
    var res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });

    var data = await res.json();

    if (data.success) {
      form.style.display = 'none';
      sucEl.style.display = 'block';
    } else {
      throw new Error(data.message || 'Server error');
    }
  } catch (e) {
    errEl.style.display = 'block';
    btn.disabled = false;
    btn.textContent = 'Send Message';
  }
}

function resetForm() {
  var form  = document.getElementById('contact-form');
  var sucEl = document.getElementById('form-success');
  var btn   = document.getElementById('submit-btn');

  form.reset();
  form.style.display = '';
  sucEl.style.display = 'none';
  btn.disabled = false;
  btn.textContent = 'Send Message';
}

/* ============================================================
   Product Modal
   ============================================================ */

function openModal(imgSrc, label, desc) {
  document.getElementById('prod-modal-img').src = imgSrc;
  document.getElementById('prod-modal-img').alt = label;
  document.getElementById('prod-modal-label').textContent = label;
  document.getElementById('prod-modal-desc').textContent = desc;
  document.getElementById('prod-modal').classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal(event) {
  if (event && event.target !== document.getElementById('prod-modal')) return;
  document.getElementById('prod-modal').classList.remove('is-open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

/* ============================================================
   Initial state — ensure home panel is visible
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  var home = document.getElementById('panel-home');
  home.classList.add('active');
});
