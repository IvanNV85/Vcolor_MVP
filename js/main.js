/* ==========================================================================
   Vibe Color — Main JavaScript
   Handles: Draping Slider, Video Modal, Nav Active State
   ========================================================================== */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Draping Slider (Split-View Warm vs Cool palette comparison)
     -------------------------------------------------------------------------- */
  const container    = document.getElementById('drapeContainer');
  const warmLayer    = document.getElementById('warmLayer');
  const sliderHandle = document.getElementById('sliderHandle');

  if (container && warmLayer && sliderHandle) {
    let isDragging = false;

    /**
     * Move the divider to the given clientX position.
     * @param {number} clientX
     */
    const updatePosition = (clientX) => {
      const rect = container.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      offsetX = Math.max(0, Math.min(offsetX, rect.width));
      const pct = (offsetX / rect.width) * 100;
      warmLayer.style.clipPath    = `polygon(0 0, ${pct}% 0, ${pct}% 100%, 0 100%)`;
      sliderHandle.style.left     = `${pct}%`;
    };

    // Mouse events
    sliderHandle.addEventListener('mousedown', (e) => {
      isDragging = true;
      e.preventDefault();
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    });

    // Touch events
    sliderHandle.addEventListener('touchstart', () => {
      isDragging = true;
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || !e.touches[0]) return;
      updatePosition(e.touches[0].clientX);
    }, { passive: true });
  }

  /* --------------------------------------------------------------------------
     2. Video Modal (Hero section "Xem Video" button)
     -------------------------------------------------------------------------- */
  const openBtn = document.getElementById('openHeroModal');
  const closeBtn = document.getElementById('closeHeroModal');
  const modal    = document.getElementById('videoModal');

  const openModal  = () => { modal.classList.remove('hidden'); modal.classList.add('flex'); };
  const closeModal = () => { modal.classList.add('hidden');    modal.classList.remove('flex'); };

  if (openBtn && closeBtn && modal) {
    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    // Close when clicking the backdrop
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });
  }

  /* --------------------------------------------------------------------------
     3. Navigation — Active State Highlight
     -------------------------------------------------------------------------- */
  const navLinks = document.querySelectorAll('nav[data-active-classes] a[data-path]');
  const activeClasses = document
    .querySelector('nav[data-active-classes]')
    ?.dataset.activeClasses.split(' ') ?? [];

  /**
   * Mark the nav link whose data-path matches the provided slug as active.
   * @param {string} slug
   */
  const setActiveNav = (slug) => {
    navLinks.forEach((link) => {
      const isActive = link.dataset.path === slug;
      if (isActive) {
        link.classList.add(...activeClasses);
      } else {
        link.classList.remove(...activeClasses);
      }
    });
  };

  // Wire up all anchor[data-path] elements (nav + CTAs) to update active state on click
  document.querySelectorAll('a[data-path]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      setActiveNav(link.dataset.path);
    });
  });
})();
