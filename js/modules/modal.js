/* ==========================================================================
   Vibe Color — Modal Module
   Handles modal dialogs (Hero studio preview video, etc.)
   ========================================================================== */

(function () {
    'use strict';

    function initVideoModal() {
        const openBtn = document.getElementById('openHeroModal');
        const closeBtn = document.getElementById('closeHeroModal');
        const modal = document.getElementById('videoModal');

        if (!openBtn || !closeBtn || !modal) return;

        const openModal = () => {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.classList.add('overflow-hidden');
        };

        const closeModal = () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.classList.remove('overflow-hidden');
        };

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

    // Export to global scope
    window.initVideoModal = initVideoModal;
})();

