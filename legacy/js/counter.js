/* ============================================
   LAXMANA AI — Animated Counter
   IntersectionObserver-based count-up animation
   ============================================ */

(function () {
    'use strict';

    /**
     * Animate a number from 0 to target
     * @param {HTMLElement} el - Element to animate
     * @param {number} target - Target number
     * @param {number} duration - Animation duration in ms
     * @param {string} suffix - Suffix to append (e.g. "+", "k", "%")
     * @param {string} prefix - Prefix to prepend (e.g. "$")
     */
    function animateCounter(el, target, duration = 2000, suffix = '', prefix = '') {
        const start = 0;
        const startTime = performance.now();

        // Easing function — ease-out cubic
        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            const current = Math.floor(start + (target - start) * easedProgress);

            el.textContent = prefix + current.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = prefix + target.toLocaleString() + suffix;
            }
        }

        requestAnimationFrame(update);
    }

    // Observe [data-counter] elements
    function initCounters() {
        const counters = document.querySelectorAll('[data-counter]');
        if (counters.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const target = parseInt(el.getAttribute('data-counter'), 10);
                        const suffix = el.getAttribute('data-suffix') || '';
                        const prefix = el.getAttribute('data-prefix') || '';
                        const duration = parseInt(el.getAttribute('data-duration') || '2000', 10);

                        animateCounter(el, target, duration, suffix, prefix);
                        observer.unobserve(el); // Animate only once
                    }
                });
            },
            { threshold: 0.3 }
        );

        counters.forEach((counter) => observer.observe(counter));
    }

    // Observe speed comparison bars  [data-bar-width]
    function initBars() {
        const bars = document.querySelectorAll('[data-bar-width]');
        if (bars.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const bar = entry.target;
                        const targetWidth = bar.getAttribute('data-bar-width');
                        // Slight delay for stagger effect
                        const delay = parseInt(bar.getAttribute('data-delay') || '0', 10);
                        setTimeout(() => {
                            bar.style.width = targetWidth;
                        }, delay);
                        observer.unobserve(bar);
                    }
                });
            },
            { threshold: 0.2 }
        );

        bars.forEach((bar) => observer.observe(bar));
    }

    // Init on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initCounters();
            initBars();
        });
    } else {
        initCounters();
        initBars();
    }
})();
