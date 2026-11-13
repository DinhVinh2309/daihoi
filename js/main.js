/* ====================================================================
   TRANG WEB ĐẠI HỘI ĐOÀN TNCS HỒ CHÍ MINH - JAVASCRIPT
   ==================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initRecapFilter();
  initModal();
  initGuestbook();
  initConfetti();
  initStatCounters();
  initDocumentTabs();
  initScrollSpy();
  initYouthSongAudio();
});

/* --------------------------------------------------
 * 1. Mobile Menu Toggle
 * -------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('nav-toggle-btn');
  const navMenu = document.getElementById('nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }
}

/* --------------------------------------------------
 * 2. Activity Recap Filter (Tab Filtering)
 * -------------------------------------------------- */
function initRecapFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.polaroid-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'flex';
          card.style.animation = 'popIn 0.3s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------
 * 3. Activity Modal / Lightbox
 * -------------------------------------------------- */
function initModal() {
  const modalOverlay = document.getElementById('activity-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalMeta = document.getElementById('modal-meta');
  const modalImage = document.getElementById('modal-img');
  const modalDesc = document.getElementById('modal-desc');
  const modalStats = document.getElementById('modal-stats');

  if (!modalOverlay || !closeBtn || !modalTitle || !modalMeta || !modalImage || !modalDesc || !modalStats) return;

  // Open modal on click
  document.querySelectorAll('[data-open-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const card = trigger.closest('.polaroid-card');
      if (!card) return;

      const title = card.querySelector('.card-title');
      const image = card.querySelector('.card-img-wrap img');
      const category = card.querySelector('.card-category-badge');
      const description = card.querySelector('.card-desc');
      const metadata = [...card.querySelectorAll('.card-meta > span')]
        .map(item => item.textContent.trim())
        .filter(Boolean);

      if (!title || !image || !description) return;

      modalTitle.textContent = title.textContent.trim();
      modalMeta.textContent = metadata.join(' • ');
      modalImage.src = image.currentSrc || image.src;
      modalImage.alt = image.alt || title.textContent.trim();

      modalDesc.replaceChildren();
      if (category) {
        const categoryPill = document.createElement('span');
        categoryPill.className = 'card-pill modal-category';
        categoryPill.textContent = category.textContent.trim();
        modalDesc.append(categoryPill);
      }

      const detailHeading = document.createElement('h3');
      detailHeading.className = 'modal-section-title';
      detailHeading.textContent = 'Nội dung hoạt động';

      const detailText = document.createElement('p');
      detailText.className = 'modal-activity-detail';
      detailText.textContent = description.textContent.trim().replace(/\s+/g, ' ');
      modalDesc.append(detailHeading, detailText);

      const highlights = [...card.querySelectorAll('.card-highlights .card-pill')];
      modalStats.replaceChildren();
      modalStats.style.display = highlights.length ? 'flex' : 'none';
      highlights.forEach(highlight => {
        const pill = document.createElement('span');
        pill.className = 'card-pill';
        pill.textContent = `★ ${highlight.textContent.trim()}`;
        modalStats.append(pill);
      });

      modalOverlay.setAttribute('aria-hidden', 'false');
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  function closeModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Quick reaction buttons
  document.querySelectorAll('.reaction-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const countSpan = this.querySelector('.react-count');
      if (countSpan) {
        let current = parseInt(countSpan.textContent) || 0;
        countSpan.textContent = current + 1;
        this.style.transform = 'scale(1.25)';
        setTimeout(() => { this.style.transform = ''; }, 200);
      }
    });
  });
}

/* --------------------------------------------------
 * 4. Guestbook (Lưu bút đại hội)
 * -------------------------------------------------- */
function initGuestbook() {
  const form = document.getElementById('wish-form');
  const corkboard = document.getElementById('corkboard-grid');
  if (!form || !corkboard) return;

  const defaultWishes = [
    {
      author: 'Phương Mai',
      msg: 'Chúc Đại hội thành công rực rỡ! Tuổi trẻ chi đoàn vững bước tiên phong, sáng tạo!',
      color: 'sticky-yellow'
    },
    {
      author: 'Võ Ngọc Phuơng Thy',
      msg: 'Nhiệm kỳ mới, thắng lợi mới! Khát vọng cống hiến vì cộng đồng và quê hương thân yêu!',
      color: 'sticky-blue'
    },
    {
      author: 'Cẩm Tú',
      msg: 'Tự hào là người Đoàn viên TNCS Hồ Chí Minh. Chúc Đại hội bầu ra BCH nhiệm kỳ mới tài năng!',
      color: 'sticky-pink'
    },
  ];

  // Load from localStorage or defaults
  let storedWishes = [];
  try {
    const raw = localStorage.getItem('daihoi_wishes');
    if (raw) storedWishes = JSON.parse(raw);
  } catch (err) {}

  const allWishes = storedWishes.length ? storedWishes : defaultWishes;
  renderWishes(allWishes, corkboard);

  // Form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('wish-name');
    const msgInput = document.getElementById('wish-msg');

    if (!nameInput.value.trim() || !msgInput.value.trim()) return;

    const colors = ['sticky-yellow', 'sticky-blue', 'sticky-pink', 'sticky-green'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newWish = {
      author: nameInput.value.trim(),
      msg: msgInput.value.trim(),
      color: randomColor
    };

    allWishes.unshift(newWish);
    try {
      localStorage.setItem('daihoi_wishes', JSON.stringify(allWishes));
    } catch (err) {}

    renderWishes(allWishes, corkboard);
    nameInput.value = '';
    msgInput.value = '';

    // Trigger celebratory confetti
    triggerCheerConfetti();
  });
}

function renderWishes(wishes, container) {
  const rotations = [-2, 1.5, -1, 2, -1.8, 1.2];
  container.innerHTML = wishes.map((w, index) => {
    const rot = rotations[index % rotations.length];
    return `
      <div class="sticky-note ${w.color}" style="transform: rotate(${rot}deg);">
        <div class="push-pin"></div>
        <p class="sticky-msg">"${escapeHtml(w.msg)}"</p>
        <p class="sticky-author">— ${escapeHtml(w.author)}</p>
      </div>
    `;
  }).join('');
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[m]);
}

/* --------------------------------------------------
 * 5. Number Counter Animation for Statistics
 * -------------------------------------------------- */
function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-num');
  if (!statNumbers.length) return;

  let hasAnimated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(el => {
          const target = parseInt(el.getAttribute('data-target')) || 0;
          const suffix = el.getAttribute('data-suffix') || '';
          let current = 0;
          const increment = Math.ceil(target / 40);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = current + suffix;
          }, 35);
        });
      }
    });
  }, { threshold: 0.3 });

  const statSection = document.querySelector('.stats-section');
  if (statSection) observer.observe(statSection);
}

/* --------------------------------------------------
 * 6. Document Tabs for Congress Papers (vankien.html)
 * -------------------------------------------------- */
function initDocumentTabs() {
  const tabs = document.querySelectorAll('.summary-tab-btn');
  const panels = document.querySelectorAll('.summary-tab-content');

  if (!tabs.length || !panels.length) return;

  function activateTab(targetId) {
    tabs.forEach(t => {
      if (t.getAttribute('data-target') === targetId) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });
    panels.forEach(p => {
      if (p.id === targetId) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      activateTab(targetId);
    });
  });

  // Support quick links from overview cards
  document.querySelectorAll('[data-switch-tab]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = link.getAttribute('data-switch-tab');
      activateTab(targetTab);
      const summaryBox = document.getElementById('doc-summary');
      if (summaryBox) {
        summaryBox.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* --------------------------------------------------
 * 7. Confetti Effect (Lightweight Canvas Confetti)
 * -------------------------------------------------- */
let confettiCanvas = null;
let confettiCtx = null;
let confettiParticles = [];
let confettiAnimationId = null;

function initConfetti() {
  const celebrateBtns = document.querySelectorAll('.btn-celebrate');
  celebrateBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      triggerCheerConfetti();
    });
  });
}

function triggerCheerConfetti() {
  if (!confettiCanvas) {
    confettiCanvas = document.createElement('canvas');
    confettiCanvas.style.position = 'fixed';
    confettiCanvas.style.top = '0';
    confettiCanvas.style.left = '0';
    confettiCanvas.style.width = '100vw';
    confettiCanvas.style.height = '100vh';
    confettiCanvas.style.pointerEvents = 'none';
    confettiCanvas.style.zIndex = '99999';
    document.body.appendChild(confettiCanvas);
    confettiCtx = confettiCanvas.getContext('2d');
  }

  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const colors = ['#e63946', '#0066cc', '#ffd100', '#2a9d8f', '#ff5d8f', '#48a9fe'];

  // Add 120 particles
  for (let i = 0; i < 120; i++) {
    confettiParticles.push({
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
      y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 1.2) * 18,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      gravity: 0.35,
      opacity: 1
    });
  }

  if (!confettiAnimationId) {
    animateConfetti();
  }
}

function animateConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const p = confettiParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += p.gravity;
    p.rotation += p.vRot;
    p.opacity -= 0.008;

    if (p.opacity <= 0 || p.y > confettiCanvas.height) {
      confettiParticles.splice(i, 1);
      continue;
    }

    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate((p.rotation * Math.PI) / 180);
    confettiCtx.globalAlpha = p.opacity;
    confettiCtx.fillStyle = p.color;
    confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
    confettiCtx.restore();
  }

  if (confettiParticles.length > 0) {
    confettiAnimationId = requestAnimationFrame(animateConfetti);
  } else {
    cancelAnimationFrame(confettiAnimationId);
    confettiAnimationId = null;
    if (confettiCanvas && confettiCanvas.parentNode) {
      confettiCanvas.parentNode.removeChild(confettiCanvas);
      confettiCanvas = null;
    }
  }
}

/* --------------------------------------------------
 * 8. Scroll Spy for Active Navigation
 * -------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    if (current) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }
  }, { passive: true });
}

/* --------------------------------------------------
 * 9. Web Audio Synthesizer: Melody of Đoàn Ca
 * -------------------------------------------------- */
function initYouthSongAudio() {
  const songBtn = document.getElementById('play-song-btn');
  if (!songBtn) return;

  // Notes for opening of "Thanh niên làm theo lời Bác"
  // "Kết liên lại thanh niên chúng ta cùng nhau đi lên..."
  const notes = [
    { freq: 392.00, dur: 0.35 }, // G4 - Kết
    { freq: 392.00, dur: 0.35 }, // G4 - liên
    { freq: 329.63, dur: 0.35 }, // E4 - lại
    { freq: 392.00, dur: 0.35 }, // G4 - thanh
    { freq: 440.00, dur: 0.45 }, // A4 - niên
    { freq: 523.25, dur: 0.50 }, // C5 - chúng
    { freq: 440.00, dur: 0.40 }, // A4 - ta
    { freq: 392.00, dur: 0.65 }, // G4 - cùng nhau đi lên!
    { freq: 440.00, dur: 0.35 }, // A4 - Giơ
    { freq: 392.00, dur: 0.35 }, // G4 - nắm
    { freq: 329.63, dur: 0.35 }, // E4 - tay
    { freq: 293.66, dur: 0.45 }, // D4 - thề
    { freq: 329.63, dur: 0.40 }, // E4 - gìn giữ
    { freq: 392.00, dur: 0.40 }, // G4 - hòa
    { freq: 440.00, dur: 0.70 }  // A4 - bình!
  ];

  let audioCtx = null;
  let isPlaying = false;

  songBtn.addEventListener('click', () => {
    triggerCheerConfetti();

    if (isPlaying) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      isPlaying = true;
      const originalText = songBtn.innerHTML;
      songBtn.innerHTML = '🎵 Đang Hát Vang...';

      let currentTime = audioCtx.currentTime + 0.05;

      notes.forEach((n, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        // Warm chime / xylophone / brass tone
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.freq, currentTime);

        gain.gain.setValueAtTime(0.001, currentTime);
        gain.gain.exponentialRampToValueAtTime(0.28, currentTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, currentTime + n.dur);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(currentTime);
        osc.stop(currentTime + n.dur);

        currentTime += n.dur + 0.08;
      });

      const totalDur = (currentTime - audioCtx.currentTime) * 1000;
      setTimeout(() => {
        isPlaying = false;
        songBtn.innerHTML = originalText;
      }, totalDur);

    } catch (err) {
      console.warn('AudioContext not allowed or supported', err);
    }
  });
}
