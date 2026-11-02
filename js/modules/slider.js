/* ==========================================================================
   Vibe Color — Draping Slider Module
   Handles split-view comparison between Warm and Cool palettes
   ========================================================================== */

(function () {
    'use strict';

    function initDrapingSlider() {
        const container = document.getElementById('drapeContainer');
        const warmLayer = document.getElementById('warmLayer');
        const sliderHandle = document.getElementById('sliderHandle');

        if (!container || !warmLayer || !sliderHandle) return;

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
            warmLayer.style.clipPath = `polygon(0 0, ${pct}% 0, ${pct}% 100%, 0 100%)`;
            sliderHandle.style.left = `${pct}%`;
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

    // Export to global scope
    window.initDrapingSlider = initDrapingSlider;
})();

