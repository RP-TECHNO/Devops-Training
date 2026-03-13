// ─── MATRIX RAIN ───────────────────────────────
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const cols = Math.floor(canvas.width / 20);
const drops = Array(cols).fill(1);
const chars = '01アイウエオカキクケコABCDEF</>{}[]terraform kubectl docker aws';
function drawMatrix() {
  ctx.fillStyle = 'rgba(5,10,14,0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00f5d4';
  ctx.font = '14px Share Tech Mono';
  drops.forEach((y, i) => {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, i * 20, y * 20);
    if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  });
}
setInterval(drawMatrix, 50);
window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });

// ─── TYPEWRITER ─────────────────────────────────
const roles = ['DevOps Engineer', 'Cloud Architect', 'SRE Specialist', 'Kubernetes Admin', 'Terraform Expert'];
let roleIdx = 0, charIdx = 0, deleting = false;
const typeEl = document.getElementById('typewriter');
function typewrite() {
  const current = roles[roleIdx];
  typeEl.textContent = deleting ? current.substring(0, charIdx--) : current.substring(0, charIdx++);
  if (!deleting && charIdx === current.length + 1) { setTimeout(() => deleting = true, 2000); }
  else if (deleting && charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; }
  setTimeout(typewrite, deleting ? 60 : 100);
}
typewrite();

// ─── NAV SCROLL ─────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 50);
});

// ─── SMOOTH SCROLL ──────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});

// ─── INTERSECTION OBSERVER (Fade-in & Skill bars) ─
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.skill-bar').forEach(b => b.classList.add('animated'));
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section, .skill-card, .project-card, .timeline-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ─── FORM ───────────────────────────────────────
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.innerHTML = '<span>✓ MESSAGE SENT!</span>';
  btn.style.background = '#28ca41';
  setTimeout(() => {
    btn.innerHTML = '<span>SEND MESSAGE</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

// ─── HAMBURGER ──────────────────────────────────
document.getElementById('hamburger').addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '70px'; links.style.left = '0'; links.style.right = '0';
  links.style.background = 'rgba(5,10,14,0.98)';
  links.style.padding = '2rem'; links.style.gap = '1.5rem';
  links.style.borderBottom = '1px solid rgba(0,245,212,0.15)';
});
