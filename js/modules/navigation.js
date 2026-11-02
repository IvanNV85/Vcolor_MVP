/* ==========================================================================
   Vibe Color — Navigation Module
   Handles active navigation states, section jumps, and smooth scrolling
   ========================================================================== */

(function () {
    'use strict';

    function initNavigation() {
        const navContainer = document.querySelector('nav[data-active-classes]');
        const navLinks = document.querySelectorAll('nav[data-active-classes] a[data-path]');
        const activeClasses = navContainer?.dataset.activeClasses.split(' ') ?? [];

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

        // Wire up all anchor[data-path] elements (nav + CTAs)
        document.querySelectorAll('a[data-path]').forEach((link) => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                const path = link.dataset.path;

                // If anchor points to # or empty, update active state without page refresh
                if (!href || href === '#' || href.startsWith('javascript:')) {
                    e.preventDefault();
                    setActiveNav(path);
                }
            });
        });
    }

    // Export to global scope
    window.initNavigation = initNavigation;
})();

