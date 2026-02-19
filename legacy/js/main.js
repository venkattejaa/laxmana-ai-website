/* ============================================
   LAXMANA AI — Main JavaScript
   Core interactivity & animations
   ============================================ */

(function () {
    'use strict';

    // ---- Navbar scroll effect ----
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    function handleNavScroll() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });

    // ---- Hamburger toggle ----
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach((link) => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // ---- Smooth scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                const offset = navbar.offsetHeight + 20;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ---- Active nav link on scroll ----
    const sections = document.querySelectorAll('section[id]');
    function updateActiveNav() {
        const scrollPos = window.scrollY + 200;
        sections.forEach((section) => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (link) {
                if (scrollPos >= top && scrollPos < bottom) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    }
    window.addEventListener('scroll', updateActiveNav, { passive: true });

    // ---- Scroll reveal ----
    function initScrollReveal() {
        const reveals = document.querySelectorAll('.reveal');
        if (reveals.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );

        reveals.forEach((el) => observer.observe(el));
    }

    // ---- Download platform tabs ----
    function initPlatformTabs() {
        const tabs = document.querySelectorAll('.platform-tab');
        const infos = document.querySelectorAll('.platform-info');

        if (tabs.length === 0) return;

        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const platform = tab.getAttribute('data-platform');

                // Update tabs
                tabs.forEach((t) => t.classList.remove('active'));
                tab.classList.add('active');

                // Update content
                infos.forEach((info) => {
                    info.classList.remove('active');
                    if (info.id === `${platform}-info`) {
                        info.classList.add('active');
                    }
                });
            });
        });
    }

    // ---- Hero typing animation ----
    function initTypingAnimation() {
        const codeBody = document.querySelector('.code-body');
        if (!codeBody) return;

        const lines = [
            { text: '// 🚀 Clawbud — Generate apps instantly', class: 'comment' },
            { text: '' },
            {
                text: 'const ', class: 'keyword', rest: [
                    { text: 'app', class: 'function' },
                    { text: ' = ', class: 'operator' },
                    { text: 'await ', class: 'keyword' },
                    { text: 'clawbud', class: 'function' },
                    { text: '.', class: 'operator' },
                    { text: 'generate', class: 'function' },
                    { text: '({', class: 'operator' },
                ]
            },
            {
                text: '  prompt: ', class: 'keyword', rest: [
                    { text: '"Build a task manager app"', class: 'string' },
                    { text: ',', class: 'operator' },
                ]
            },
            {
                text: '  framework: ', class: 'keyword', rest: [
                    { text: '"react"', class: 'string' },
                    { text: ',', class: 'operator' },
                ]
            },
            {
                text: '  style: ', class: 'keyword', rest: [
                    { text: '"modern-dark"', class: 'string' },
                ]
            },
            { text: '});', class: 'operator' },
            { text: '' },
            { text: '// ✅ App generated in 3.2 seconds', class: 'comment' },
            {
                text: 'console', class: 'function', rest: [
                    { text: '.', class: 'operator' },
                    { text: 'log', class: 'function' },
                    { text: '(app.', class: 'operator' },
                    { text: 'url', class: 'function' },
                    { text: ');', class: 'operator' },
                ]
            },
            {
                text: '// → ', class: 'comment', rest: [
                    { text: 'https://my-task-app.clawbud.app', class: 'string' },
                ]
            },
        ];

        let lineIndex = 0;
        let charIndex = 0;
        let currentLineEl = null;
        let currentParts = [];
        let partIndex = 0;

        function getLineParts(line) {
            const parts = [];
            if (line.text) {
                parts.push({ text: line.text, class: line.class || '' });
            }
            if (line.rest) {
                line.rest.forEach(r => parts.push(r));
            }
            return parts;
        }

        function flattenLine(line) {
            let full = '';
            const parts = getLineParts(line);
            parts.forEach(p => { full += p.text; });
            return { full, parts };
        }

        function buildLineHTML(parts, upToChar) {
            let html = '';
            let count = 0;
            for (const part of parts) {
                if (count >= upToChar) break;
                const remaining = upToChar - count;
                const visibleText = part.text.substring(0, remaining);
                if (part.class) {
                    html += `<span class="${part.class}">${escapeHtml(visibleText)}</span>`;
                } else {
                    html += escapeHtml(visibleText);
                }
                count += part.text.length;
            }
            return html;
        }

        function escapeHtml(text) {
            return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }

        function typeLine() {
            if (lineIndex >= lines.length) {
                // Add cursor at end
                const lastLine = codeBody.lastElementChild;
                if (lastLine) lastLine.innerHTML += '<span class="cursor"></span>';
                return;
            }

            const line = lines[lineIndex];
            const { full, parts } = flattenLine(line);

            if (!currentLineEl) {
                currentLineEl = document.createElement('span');
                currentLineEl.className = 'line';
                codeBody.appendChild(currentLineEl);
                charIndex = 0;
            }

            if (full.length === 0) {
                currentLineEl.innerHTML = '&nbsp;';
                lineIndex++;
                currentLineEl = null;
                setTimeout(typeLine, 100);
                return;
            }

            if (charIndex <= full.length) {
                currentLineEl.innerHTML = buildLineHTML(parts, charIndex) + '<span class="cursor"></span>';
                charIndex++;
                const speed = 25 + Math.random() * 20;
                setTimeout(typeLine, speed);
            } else {
                // Remove cursor from this line
                currentLineEl.innerHTML = buildLineHTML(parts, full.length);
                lineIndex++;
                currentLineEl = null;
                setTimeout(typeLine, 150);
            }
        }

        // Start after a delay
        setTimeout(() => {
            codeBody.innerHTML = '';
            typeLine();
        }, 1200);
    }

    // ---- Init all ----
    function init() {
        initScrollReveal();
        initPlatformTabs();
        initTypingAnimation();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
