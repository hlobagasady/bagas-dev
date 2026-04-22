const portfolioData = [
    {
        title: 'Employee Performance Management System',
        desc: 'A web-based employee evaluation system designed to streamline KPI assessment, scoring, and performance reporting.',
        tags: ['PHP', 'Laravel', 'PostgreSQL'],
        category: 'Business System',
        url: null,
        github: null,
        image: 'foto/portfolios/penilaian.jpeg',
    },
    {
        title: 'POS & Financial System',
        desc: 'A business transaction and financial management system built to support sales recording, reporting, and operational control.',
        tags: ['PHP', 'CodeIgniter', 'MySQL'],
        category: 'Business System',
        url: null,
        github: null,
        image: 'foto/portfolios/payment.png',
    },
    {
        title: 'Boarding House Landing Page',
        desc: 'A responsive landing page created to promote rental property listings and increase customer inquiries.',
        tags: ['WordPress', 'HTML', 'CSS'],
        category: 'Web Project',
        url: null,
        github: null,
        image: 'foto/portfolios/kost.png',
    },
    {
        title: 'Coffee Shop Promotional Website',
        desc: 'A modern branding website built to showcase products, location, and customer engagement for a coffee business.',
        tags: ['WordPress', 'JavaScript', 'CSS'],
        category: 'Web Project',
        url: null,
        github: null,
        image: 'foto/portfolios/coffeeshop.png',
    },
    {
        title: 'Learning Management System (LMS)',
        desc: 'A digital learning platform for managing courses, attendance, assignments, and user progress tracking.',
        tags: ['PHP', 'Laravel', 'MySQL'],
        category: 'Business System',
        url: null,
        github: null,
        image: 'foto/portfolios/academy.png',
    },
    {
        title: 'E-Commerce Platform',
        desc: 'An online store platform with product catalog, shopping cart, and order management workflow.',
        tags: ['WordPress', 'PHP', 'MySQL'],
        category: 'Web Project',
        url: null,
        github: null,
        image: 'foto/portfolios/ecommerce.jpg',
    },
    {
        title: 'Corporate Website – PT Traspac Makmur Sejahtera',
        desc: 'A company profile website developed to strengthen digital branding and present business information professionally.',
        tags: ['WordPress', 'HTML', 'CSS'],
        category: 'Corporate Site',
        url: null,
        github: null,
        image: 'foto/portfolios/webprofile.png',
    },
];

const blogData = [
    {
        title: 'Designing Internal Systems That Scale With the Business',
        excerpt: 'A practical view on building internal tools that stay usable as teams and workflows grow.',
        category: 'Software Engineering',
        date: '22 Feb 2026',
        url: 'https://medium.com/@bagasadynotes',
        image: null,
    },
    {
        title: 'Why Requirements Gathering Matters in Web Projects',
        excerpt: 'Good delivery starts with clear scope, realistic workflows, and the right questions upfront.',
        category: 'Product Thinking',
        date: '15 Feb 2026',
        url: 'https://medium.com/@bagasadynotes',
        image: null,
    },
    {
        title: 'Laravel, CodeIgniter, and the Value of Maintainable Legacy Support',
        excerpt: 'A developer perspective on balancing new features, system stability, and long-term maintainability.',
        category: 'Backend Development',
        date: '08 Feb 2026',
        url: 'https://medium.com/@bagasadynotes',
        image: null,
    },
];

function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    portfolioData.forEach((p) => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';

        const imgHtml = p.image
            ? `<img src="${p.image}" class="portfolio-img" alt="${p.title}">`
            : `<div class="portfolio-img-placeholder"><span>◈</span></div>`;

        const overlayBtns = p.url
            ? `<a href="${p.url}" class="overlay-btn overlay-btn-primary" target="_blank">↗ Live Demo</a>`
            : '';
        const overlayGhost = p.github
            ? `<a href="${p.github}" class="overlay-btn overlay-btn-ghost" target="_blank">GitHub</a>`
            : '';
        const overlayPrivate = (!p.url && !p.github)
            ? `<span class="overlay-btn overlay-btn-ghost" style="cursor:default">Case Study</span>`
            : '';

        const tagsHtml = p.tags
            ? p.tags.slice(0, 4).map(t => `<span class="portfolio-tag">${t}</span>`).join('')
            : '';

        const footerLinks = [
            p.url ? `<a href="${p.url}" class="portfolio-link" target="_blank">↗ Demo</a>` : '',
            p.github ? `<a href="${p.github}" class="portfolio-link" target="_blank">GitHub</a>` : '',
        ].join('');

        card.innerHTML = `
            <div class="portfolio-img-wrap">
                ${imgHtml}
                <div class="portfolio-overlay">
                    ${overlayBtns}${overlayGhost}${overlayPrivate}
                </div>
            </div>
            <div class="portfolio-body">
                ${tagsHtml ? `<div class="portfolio-tags">${tagsHtml}</div>` : ''}
                <h3 class="portfolio-title">${p.title}</h3>
                <p class="portfolio-desc">${p.desc}</p>
                <div class="portfolio-footer">
                    <div class="portfolio-links">${footerLinks}</div>
                    ${p.category ? `<span class="portfolio-category">${p.category}</span>` : ''}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderBlog() {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;

    blogData.forEach((b) => {
        const card = document.createElement('a');
        card.href = b.url || '#';
        card.className = 'post-card';
        if (b.url && b.url !== '#') card.target = '_blank';

        const imgHtml = b.image
            ? `<img src="${b.image}" class="post-img" alt="${b.title}">`
            : `<div class="post-img-placeholder">No Image</div>`;

        card.innerHTML = `
            <div class="post-img-wrap">${imgHtml}</div>
            <div class="post-body">
                ${b.category ? `<div class="post-category">${b.category}</div>` : ''}
                <h3 class="post-title">${b.title}</h3>
                ${b.excerpt ? `<p class="post-excerpt">${b.excerpt}</p>` : ''}
                <div class="post-footer">
                    <span>${b.date}</span>
                    <span class="post-arrow">→</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function initNav() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            toggle.classList.remove('open');
            links.classList.remove('open');
        });
    });
}

function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 120) current = s.id;
        });
        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === '#' + current) a.classList.add('active');
        });
    }, { passive: true });
}

function initYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
    renderBlog();
    initNav();
    initReveal();
    initActiveNav();
    initYear();
});
