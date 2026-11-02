/* ==========================================================================
   Vibe Color — Main Application Entry Point
   Orchestrates feature modules upon DOMContentLoaded
   ========================================================================== */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        // 1. Initialize Draping Slider (split-view comparison)
        if (typeof window.initDrapingSlider === 'function') {
            window.initDrapingSlider();
        }

        // 2. Initialize Video / Dialog Modals
        if (typeof window.initVideoModal === 'function') {
            window.initVideoModal();
        }

        // 3. Initialize Navigation & Active link highlights
        if (typeof window.initNavigation === 'function') {
            window.initNavigation();
        }
    });
})();
