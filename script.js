// ── YEAR ──
document.getElementById('yr').textContent = new Date().getFullYear();

// ── CURSOR ──
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animCursor() {
  cur.style.left = mx + 'px'; cur.style.top = my + 'px';
  rx += (mx - rx) * .12; ry += (my - ry) * .12;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(animCursor);
}
animCursor();

// ── NAV SCROLL ──
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
  navEl.classList.toggle('scrolled', window.scrollY > 20);
});

// ── REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => obs.observe(r));

// ── FILTER ──
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.proj-card').forEach(card => {
      card.classList.toggle('hidden', f !== 'all' && card.dataset.category !== f);
    });
  });
});

// ── TYPING HERO ──
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

if (line1 && line2 && line3) {
  const lines = [
    { el: line1, text: "HI," },
    { el: line2, text: "i'm" },
    { el: line3, text: "BUI DA LY" }
  ];
  const typingSpeed = 180, lineDelay = 220, loopDelay = 900;
  let lineIndex = 0, charIndex = 0;
  function resetLines() { lines.forEach(l => { l.el.textContent = ""; }); lineIndex = 0; charIndex = 0; }
  function typeLoop() {
    if (lineIndex >= lines.length) { setTimeout(() => { resetLines(); typeLoop(); }, loopDelay); return; }
    const cur = lines[lineIndex];
    cur.el.textContent = cur.text.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex < cur.text.length) setTimeout(typeLoop, typingSpeed);
    else { lineIndex++; charIndex = 0; setTimeout(typeLoop, lineDelay); }
  }
  resetLines(); setTimeout(typeLoop, 500);
}

// ── PROJECT DATA ──
// Each project maps to its card via data-project-id attribute
// Images array: primary + additional screenshots (add more paths as needed)
const PROJECT_DATA = {
  "sales-dashboard": {
    title: "Sales Performance Dashboard",
    kicker: "Power BI · Dashboard",
    desc: "Executive dashboard analyzing revenue, margin, and product-channel performance. Built with DAX measures and a star schema data model to enable fast, consistent aggregations across multiple dimensions.",
    highlights: [
      "Star schema data modeling for performance",
      "DAX measures: YTD, MoM, margin %, channel mix",
      "Drill-through from exec summary to product detail",
      "Slicers by region, category, time period"
    ],
    chips: ["Power BI", "DAX", "Star Schema", "Data Modeling"],
    links: [
      { label: "Live Dashboard", icon: "fa-solid fa-up-right-from-square", href: "https://app.powerbi.com/view?r=eyJrIjoiZGEzZDg1ZGEtZTI1ZC00OTdiLTg2NjYtYTExODBjYjhhYWJhIiwidCI6ImJlODMyOWE3LTcyMTgtNDlhMy05YWMxLWQ3Yjk1NDU2M2YzOSIsImMiOjEwfQ%3D%3D", primary: true }
    ],
    images: [
      "assets/img/Ly Da Bui - sale performance.jpg",
      "assets/img/supply chain_page-0001.jpg",
      "assets/img/supply chain_page-0002.jpg",
      "assets/img/supply chain_page-0003.jpg",
      "assets/img/supply chain_page-0004.jpg",
      "assets/img/supply chain_page-0005.jpg",
      "assets/img/supply chain_page-0006.jpg"
    ]
  },
  "supply-chain": {
    title: "Supply Chain Analytics Dashboard",
    kicker: "Power BI · Logistics",
    desc: "Operational dashboard surfacing delivery performance, return rates, and loss drivers across a logistics network. Designed to help ops managers quickly identify bottlenecks and take corrective action.",
    highlights: [
      "On-time delivery rate tracking by region & carrier",
      "Return and damage loss driver breakdown",
      "Trend analysis: weekly and monthly comparisons",
      "Alert-style KPI cards for threshold breaches"
    ],
    chips: ["Power BI", "DAX", "Logistics", "KPI Design"],
    links: [
      { label: "Live Dashboard", icon: "fa-solid fa-up-right-from-square", href: "https://app.powerbi.com/view?r=eyJrIjoiOTMzMWEwN2UtOWZkNC00NzY5LTgxZjQtNTEzMmI3ZmIyYmM3IiwidCI6ImJlODMyOWE3LTcyMTgtNDlhMy05YWMxLWQ3Yjk1NDU2M2YzOSIsImMiOjEwfQ%3D%3D", primary: true }
    ],
    images: [
      "assets/img/Logistics.jpg", "assets/img/supply chain_page-0001.jpg",
      "assets/img/supply chain_page-0002.jpg",
      "assets/img/supply chain_page-0003.jpg",
      "assets/img/supply chain_page-0004.jpg",
      "assets/img/supply chain_page-0005.jpg",
      "assets/img/supply chain_page-0006.jpg"
    ]
  },
  "movie-rec": {
    title: "Movie Recommendation System",
    kicker: "Python · Recommendation",
    desc: "Built and evaluated multiple recommendation models on the MovieLens dataset. Compared user-based and item-based collaborative filtering approaches using RMSE as the primary evaluation metric.",
    highlights: [
      "User-based & item-based collaborative filtering",
      "RMSE comparison across model variants",
      "Cosine similarity and Pearson correlation",
      "Cold-start problem analysis and mitigation strategies"
    ],
    chips: ["Python", "Pandas", "Collaborative Filtering", "RMSE", "MovieLens"],
    links: [
      { label: "GitHub Repo", icon: "fa-brands fa-github", href: "https://github.com/lybuida/Movie_Recommendation_System", primary: false },
      { label: "Report", icon: "fa-regular fa-file-lines", href: "assets/docs/Movie_Recommendation_System.pdf", primary: false },
      { label: "Slides", icon: "fa-regular fa-file-lines", href: "assets/docs/Movie_Recommendation_System_slide.pdf", primary: false }
    ],
    images: [
      "assets/img/movie recommendation system.jpg"
    ]
  },
  "saco": {
    title: "Information System for SACO",
    kicker: "MIS · CRM / ERP Assessment",
    desc: "Analyzed SACO's existing information systems, compared enterprise CRM/ERP solutions, identified operational gaps, and proposed a phased digital transformation roadmap aligned to business priorities.",
    highlights: [
      "AS-IS / TO-BE process analysis",
      "Vendor comparison: SAP, Salesforce, Oracle",
      "Gap analysis mapped to business requirements",
      "Phased implementation roadmap with ROI framing"
    ],
    chips: ["Business Analysis", "ERP", "CRM", "Roadmap", "Gap Analysis"],
    links: [
      { label: "Report", icon: "fa-regular fa-file-lines", href: "assets/docs/LyBui_SACO.pdf", primary: false }
    ],
    images: [
      "assets/img/saco_crm.jpg"
    ]
  },
  "classified-ads": {
    title: "Classified Ads Management System",
    kicker: "Systems Design & Analysis",
    desc: "Full system analysis and design for a classified advertising management platform. Covered requirements gathering, process modeling, and complete database architecture.",
    highlights: [
      "Use case modeling: 6 actors, 20+ use cases",
      "DFD Level 0 → Level 2 decomposition",
      "Normalized ERD with 12 entities",
      "Sequence and activity diagrams"
    ],
    chips: ["Use Case", "DFD", "ERD", "UML", "System Design"],
    links: [
      { label: "Report", icon: "fa-regular fa-file-lines", href: "assets/docs/LyBui_PTTKHT.pdf", primary: false }
    ],
    images: [
      "assets/img/Management AD.jpg"
    ]
  },
  "food-ordering": {
    title: "Ordering Food Web",
    kicker: "Software & Database",
    desc: "Full-stack web application for food ordering with customer-facing browsing, cart, and checkout flow, plus a complete admin panel for restaurant and order management.",
    highlights: [
      "Role-based access: customer, restaurant, admin",
      "Cart, payment flow, and order tracking",
      "Admin dashboard: menu, orders, analytics",
      "Deployed live on PythonAnywhere"
    ],
    chips: ["Flask", "MySQL", "Python", "Jira", "Full-Stack"],
    links: [
      { label: "GitHub Repo", icon: "fa-brands fa-github", href: "https://github.com/chivtn/Ordering_Food_App", primary: false },
      { label: "Live Site", icon: "fa-solid fa-globe", href: "https://huyvotan.pythonanywhere.com", primary: true }
    ],
    images: [
      "assets/img/ordering food web.jpg"
    ]
  },
  "dormitory": {
    title: "Dormitory Management System",
    kicker: "Software & Database",
    desc: "Analyzed dormitory business processes and designed a 3-tier architecture prototype covering room assignment, student registration, and automated billing workflows.",
    highlights: [
      "3-tier architecture: presentation, logic, data",
      "Room assignment algorithm and availability logic",
      "Billing cycle automation design",
      "Full DFD and ERD documentation"
    ],
    chips: ["MySQL", "DFD", "ERD", "3-Tier Architecture"],
    links: [
      { label: "GitHub Repo", icon: "fa-brands fa-github", href: "https://github.com/lybuida/Dormitory_Management_System", primary: false },
      { label: "Report", icon: "fa-regular fa-file-lines", href: "assets/docs/Báo cáo QuanLyKyTucXa.pdf", primary: false }
    ],
    images: [
      "assets/img/dormitory_management_system.jpg"
    ]
  },
  "student-mgmt": {
    title: "Student Management System",
    kicker: "Software & Database",
    desc: "Multi-role academic management system with full UML modeling, relational database schema, and structured workflows for students, faculty, and administrators.",
    highlights: [
      "4 user roles: student, lecturer, admin, registrar",
      "UML: class, sequence, activity, use case diagrams",
      "Normalized relational schema (3NF)",
      "Grade management and transcript generation"
    ],
    chips: ["UML", "MySQL", "Flask", "System Design"],
    links: [
      { label: "GitHub Repo", icon: "fa-brands fa-github", href: "https://github.com/lybuida/Student_Management_System", primary: false },
      { label: "Report", icon: "fa-regular fa-file-lines", href: "assets/docs/Bao-cao-CNPM.pdf", primary: false }
    ],
    images: [
      "assets/img/Student Management System.jpg"
    ]
  },
  "product-rec": {
    title: "Product Recommendation (E-commerce)",
    kicker: "Python · Big Data",
    desc: "Built a product recommendation pipeline for e-commerce using similarity-based filtering. Designed evaluation metrics and outlined an A/B testing framework for production deployment.",
    highlights: [
      "Item-item similarity with cosine distance",
      "Precision@K and NDCG evaluation metrics",
      "A/B testing framework design",
      "Big Data course project — Samsung Innovation Campus"
    ],
    chips: ["Python", "Similarity Metrics", "NDCG", "A/B Testing", "Big Data"],
    links: [
      { label: "GitHub Repo", icon: "fa-brands fa-github", href: "https://github.com/lybuida/Product_Recommendation_E-commerce", primary: false },
      { label: "Slides", icon: "fa-regular fa-file-lines", href: "assets/docs/OU_DB2_Group 3_Presentation-Slide.pdf", primary: false },
      { label: "Report", icon: "fa-regular fa-file-lines", href: "assets/docs/OU_DB2_Group 3_Final Report.pdf", primary: false }
    ],
    images: [
      "assets/img/Product Recommendation.jpg"
    ]
  },
  "sap-crm": {
    title: "SAP CRM System Analysis",
    kicker: "Business Analysis · CRM",
    desc: "In-depth study of SAP CRM module capabilities across sales, service, and marketing. Compared with Salesforce and Microsoft Dynamics, and proposed configuration improvements aligned to business process needs.",
    highlights: [
      "SAP CRM module deep-dive: Sales, Service, Marketing",
      "Competitive comparison: SAP vs Salesforce vs MS Dynamics",
      "Business process gap identification",
      "Improvement recommendations with priority matrix"
    ],
    chips: ["Business Analysis", "SAP", "CRM", "Competitive Analysis"],
    links: [
      { label: "Report", icon: "fa-regular fa-file-lines", href: "assets/docs/HTTTQL_CRM_SAP.pdf", primary: false }
    ],
    images: [
      "assets/img/SAP CRM System Analysis.jpg"
    ]
  }
};

// ── BUILD & INJECT MODAL HTML ──
function buildModal() {
  const modal = document.createElement('div');
  modal.id = 'proj-modal';
  modal.className = 'pmodal-overlay';
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('role', 'dialog');
  modal.innerHTML = `
    <div class="pmodal-box">
      <button class="pmodal-close" id="pmodalClose" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>

      <div class="pmodal-inner">
        <!-- LEFT: Gallery -->
        <div class="pmodal-gallery">
          <div class="pgallery-main">
            <img id="pgalleryImg" src="" alt="" />
            <button class="pgallery-nav prev" id="pgalleryPrev" aria-label="Previous image">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button class="pgallery-nav next" id="pgalleryNext" aria-label="Next image">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
            <div class="pgallery-counter" id="pgalleryCounter">1 / 1</div>
          </div>
          <div class="pgallery-thumbs" id="pgalleryThumbs"></div>
        </div>

        <!-- RIGHT: Info -->
        <div class="pmodal-info">
          <div class="pmodal-kicker" id="pmodalKicker"></div>
          <h2 class="pmodal-title" id="pmodalTitle"></h2>
          <p class="pmodal-desc" id="pmodalDesc"></p>

          <div class="pmodal-highlights" id="pmodalHighlights">
            <div class="pmodal-highlights-label">Highlights</div>
            <ul id="pmodalHighlightList"></ul>
          </div>

          <div class="pmodal-chips" id="pmodalChips"></div>

          <div class="pmodal-links" id="pmodalLinks"></div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}

// ── MODAL STATE ──
let currentImages = [];
let currentImgIdx = 0;

function setGalleryImage(idx) {
  const img = document.getElementById('pgalleryImg');
  const counter = document.getElementById('pgalleryCounter');
  const thumbs = document.getElementById('pgalleryThumbs').querySelectorAll('.pgallery-thumb');

  img.style.opacity = '0';
  setTimeout(() => {
    img.src = currentImages[idx];
    img.alt = `Project image ${idx + 1}`;
    img.style.opacity = '1';
  }, 150);

  counter.textContent = `${idx + 1} / ${currentImages.length}`;

  thumbs.forEach((t, i) => t.classList.toggle('active', i === idx));

  const prevBtn = document.getElementById('pgalleryPrev');
  const nextBtn = document.getElementById('pgalleryNext');
  prevBtn.style.display = currentImages.length > 1 ? 'flex' : 'none';
  nextBtn.style.display = currentImages.length > 1 ? 'flex' : 'none';
  document.getElementById('pgalleryCounter').style.display = currentImages.length > 1 ? 'block' : 'none';
}

function openModal(projectId) {
  const data = PROJECT_DATA[projectId];
  if (!data) return;

  const modal = document.getElementById('proj-modal');

  // Populate text
  document.getElementById('pmodalKicker').textContent = data.kicker;
  document.getElementById('pmodalTitle').textContent = data.title;
  document.getElementById('pmodalDesc').textContent = data.desc;

  // Highlights
  const ul = document.getElementById('pmodalHighlightList');
  ul.innerHTML = data.highlights.map(h => `<li>${h}</li>`).join('');

  // Chips
  const chipsEl = document.getElementById('pmodalChips');
  chipsEl.innerHTML = data.chips.map(c => `<span class="chip">${c}</span>`).join('');

  // Links
  const linksEl = document.getElementById('pmodalLinks');
  linksEl.innerHTML = data.links.map(l =>
    `<a class="link-btn ${l.primary ? 'prim' : 'ghost-btn'}" href="${l.href}" target="_blank" rel="noopener">
      <i class="${l.icon}"></i> ${l.label}
    </a>`
  ).join('');

  // Gallery
  currentImages = data.images;
  currentImgIdx = 0;

  const thumbsEl = document.getElementById('pgalleryThumbs');
  thumbsEl.innerHTML = currentImages.length > 1
    ? currentImages.map((src, i) =>
        `<img class="pgallery-thumb${i === 0 ? ' active' : ''}" src="${src}" data-idx="${i}" alt="thumb ${i+1}" />`
      ).join('')
    : '';

  thumbsEl.querySelectorAll('.pgallery-thumb').forEach(t => {
    t.addEventListener('click', () => {
      currentImgIdx = parseInt(t.dataset.idx);
      setGalleryImage(currentImgIdx);
    });
  });

  setGalleryImage(0);

  // Show
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('proj-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ── INIT MODAL ──
buildModal();

document.getElementById('pmodalClose').addEventListener('click', closeModal);
document.getElementById('proj-modal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') { currentImgIdx = (currentImgIdx - 1 + currentImages.length) % currentImages.length; setGalleryImage(currentImgIdx); }
  if (e.key === 'ArrowRight') { currentImgIdx = (currentImgIdx + 1) % currentImages.length; setGalleryImage(currentImgIdx); }
});

document.getElementById('pgalleryPrev').addEventListener('click', () => {
  currentImgIdx = (currentImgIdx - 1 + currentImages.length) % currentImages.length;
  setGalleryImage(currentImgIdx);
});
document.getElementById('pgalleryNext').addEventListener('click', () => {
  currentImgIdx = (currentImgIdx + 1) % currentImages.length;
  setGalleryImage(currentImgIdx);
});

// ── ATTACH CLICK TO PROJECT CARDS ──
const cardProjectMap = {
  0: 'sales-dashboard',
  1: 'supply-chain',
  2: 'movie-rec',
  3: 'saco',
  4: 'classified-ads',
  5: 'food-ordering',
  6: 'dormitory',
  7: 'student-mgmt',
  8: 'product-rec',
  9: 'sap-crm'
};

document.querySelectorAll('.proj-card').forEach((card, idx) => {
  card.style.cursor = 'none';
  card.addEventListener('click', e => {
    // Don't open modal if clicking a link directly
    if (e.target.closest('.link-btn')) return;
    const pid = card.dataset.projectId || cardProjectMap[idx];
    if (pid) openModal(pid);
  });
});