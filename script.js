document.getElementById('yr').textContent = new Date().getFullYear();
const menuToggle=document.getElementById('menuToggle'), navLinks=document.getElementById('navLinks');
menuToggle.addEventListener('click',()=>{let open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const themeButton=document.getElementById('themeButton');
themeButton.addEventListener('click',()=>{document.body.classList.toggle('night');themeButton.innerHTML=document.body.classList.contains('night')?'<i class="fa-regular fa-moon"></i>':'<i class="fa-regular fa-sun"></i>';});
const navItems=[...navLinks.querySelectorAll('a')]; const sections=[...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll',()=>{const y=scrollY+160;let current='home';for(const section of sections)if(section.offsetTop<=y)current=section.id;navItems.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));},{passive:true});
const PROJECT_DATA = {
  "saco": {
    title: "Information System for SACO",
    kicker: "MIS · CRM / ERP Assessment",
    desc: "Analyzed SACO's existing information systems, compared enterprise CRM/ERP solutions, identified operational gaps, and proposed a phased digital transformation roadmap aligned to business priorities.",
    highlights: [
      "AS-IS / TO-BE process analysis",
      "Compared packaged business-software alternatives and implementation options",
      "Gap analysis mapped to business requirements",
      "Reviewed phased implementation choices and operational fit"
    ],
    chips: ["Business Analysis", "ERP", "CRM", "Roadmap", "Gap Analysis"],
    links: [
      { label: "Report", icon: "fa-regular fa-file-lines", href: "assets/docs/LyBui_SACO.pdf", primary: true }
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
      { label: "Report", icon: "fa-regular fa-file-lines", href: "assets/docs/LyBui_PTTKHT.pdf", primary: true }
    ],
    images: [
      "assets/img/Management AD.jpg"
    ]
  },
  "sap-crm": {
    title: "SAP CRM System Analysis",
    kicker: "Business Analysis · CRM",
    desc: "In-depth study of SAP CRM module capabilities across sales, service, and marketing. Compared with Salesforce and Microsoft Dynamics, and proposed configuration improvements aligned to business process needs.",
    highlights: [
      "SAP CRM module deep-dive: Sales, Service, Marketing",
      "Compared SAP CRM with Oracle CRM",
      "Business process gap identification",
      "Reviewed implementation considerations and potential applications"
    ],
    chips: ["Business Analysis", "SAP", "CRM", "Competitive Analysis"],
    links: [
      { label: "Report", icon: "fa-regular fa-file-lines", href: "assets/docs/HTTTQL_CRM_SAP.pdf", primary: true }
    ],
    images: [
      "assets/img/SAP CRM System Analysis.jpg"
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
      "Documented application deployment and delivery activities"
    ],
    chips: ["Flask", "MySQL", "Python", "Jira", "Full-Stack"],
    links: [
      { label: "GitHub Repo", icon: "fa-brands fa-github", href: "https://github.com/chivtn/Ordering_Food_App", primary: true },
      { label: "Report", icon: "fa-regular fa-file-lines", href: "assets/docs/Ordering Food Web - Report.pdf", primary: false },
      // { label: "Live Site", icon: "fa-solid fa-globe", href: "https://huyvotan.pythonanywhere.com", primary: true }
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
      { label: "GitHub Repo", icon: "fa-brands fa-github", href: "https://github.com/lybuida/Dormitory_Management_System", primary: true },
      { label: "Report", icon: "fa-regular fa-file-lines", href: "assets/docs/Báo cáo QuanLyKyTucXa.pdf", primary: false }
    ],
    images: [
      "assets/img/dormitory_management_system.jpg",
      "assets/img/QLKTX 1-Cong_nghe.png",
      "assets/img/QLKTX 2-ERD.png",
      "assets/img/QLKTX 3-Phan_he_chinh_cua_he_thong.png",
      "assets/img/QLKTX 4-sql.png"
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
      { label: "GitHub Repo", icon: "fa-brands fa-github", href: "https://github.com/lybuida/Student_Management_System", primary: true },
      { label: "Report", icon: "fa-regular fa-file-lines", href: "assets/docs/Bao-cao-CNPM.pdf", primary: false }
    ],
    images: [
      "assets/img/Student Management System.jpg",
      "assets/img/QLKTX 1- Công nghệ.png",
      "assets/img/QLKTX 2-ERD.png",
      "assets/img/QLKTX 3-Phân hệ chính của hệ thống.png",
      "assets/img/QLKTX 4-sql.png"
    ]
  },
  "supply-chain": {
    title: "Supply Chain Analytics Dashboard",
    kicker: "Power BI · Logistics",
    desc: "Operational dashboard surfacing delivery performance, return rates, and loss drivers across a logistics network. Designed to help ops managers quickly identify bottlenecks and take corrective action.",
    highlights: [
      "On-time delivery rate by geography and shipping mode",
      "Returns, late deliveries, and profitability breakdowns",
      "Trend analysis: weekly and monthly comparisons",
      "Operational KPI cards and regional comparisons"
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
    ]
  },
  "product-analytics": {
  title: "Product Analytics",
  kicker: "SQL · Power BI · E-Wallet",
  desc: "End-to-end product analysis investigating the drop in bill payment success rate for an e-wallet platform. Combined funnel analysis, error mapping, and user segmentation to identify root causes and propose product improvements.",
  highlights: [
    "Success rate KPI tracking across payment flows",
    "Funnel analysis to detect drop-off points in authentication & confirmation steps",
    "Error root cause analysis using categorized transaction failures",
    "User and device segmentation (platform, app version, loyalty tier)"
  ],
  chips: ["DAX", "Power BI", "Product Analytics", "Funnel Analysis"],
  links: [
    {
      label: "Report",
      icon: "fa-solid fa-up-right-from-square",
      href: "assets/docs/Capstone 2_BuiDaLy.pdf",
      primary: true
    }
  ],
  images: [
    "assets/img/Capstone 2_BuiDaLy_page-0001.jpg",
    "assets/img/Capstone 2_BuiDaLy_page-0002.jpg",
    "assets/img/Capstone 2_BuiDaLy_page-0003.jpg",
    "assets/img/Capstone 2_BuiDaLy_page-0004.jpg",
    "assets/img/Capstone 2_BuiDaLy_page-0005.jpg",
    "assets/img/Capstone 2_BuiDaLy_page-0006.jpg",
    "assets/img/Capstone 2_BuiDaLy_page-0007.jpg",
    "assets/img/Capstone 2_BuiDaLy_page-0008.jpg",
    "assets/img/Capstone 2_BuiDaLy_page-0009.jpg",
    "assets/img/Capstone 2_BuiDaLy_page-0010.jpg",
    "assets/img/Capstone 2_BuiDaLy_page-0011.jpg",
    "assets/img/Capstone 2_BuiDaLy_page-0012.jpg",
    "assets/img/Capstone 2_BuiDaLy_page-0013.jpg"
  ]
},
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
      "assets/img/sales electronic_page-0001.jpg",
      "assets/img/sales electronic_page-0002.jpg",
      "assets/img/sales electronic_page-0003.jpg",
      "assets/img/sales electronic_page-0004.jpg",
      "assets/img/sales electronic_page-0005.jpg"
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
      { label: "GitHub Repo", icon: "fa-brands fa-github", href: "https://github.com/lybuida/Movie_Recommendation_System", primary: true },
      { label: "Report", icon: "fa-regular fa-file-lines", href: "assets/docs/Movie_Recommendation_System.pdf", primary: false },
      { label: "Slides", icon: "fa-regular fa-file-lines", href: "assets/docs/Movie_Recommendation_System_slide.pdf", primary: false }
    ],
    images: [
      "assets/img/movie recommendation system.jpg"
    ]
  },
  "product-rec": {
    title: "AI-Powered Product Recommendation",
    kicker: "Samsung Innovation Campus · AI / ML",
    desc: "Team project evaluating machine-learning approaches for e-commerce product recommendations, using a public product dataset and a Flask-based demonstration interface. My documented role focused on model evaluation and testing.",
    highlights: ["Evaluated classification and recommendation models", "Worked on testing and evaluation within a cross-functional project team", "Explored KNN, Random Forest and similarity-based recommendations", "Prepared project documentation and presentation"],
    chips: ["Machine Learning", "Model Evaluation", "Python", "Flask"],
    links: [
      { label: "GitHub Repo", icon: "fa-brands fa-github", href: "https://github.com/lybuida/Product_Recommendation_E-commerce", primary: true },
      { label: "Report", icon: "fa-regular fa-file-lines", href: "assets/docs/OU_DB2_Group 3_Final Report.pdf", primary: false },
      { label: "Slides", icon: "fa-regular fa-file-lines", href: "assets/docs/OU_DB2_Group 3_Presentation-Slide.pdf", primary: false }
    ],
    images: ["assets/img/Product Recommendation.jpg"]

  }
};


const cards = [
 {id:'product-analytics',category:'bi',label:'Data',title:'E-Wallet Product Analytics',desc:'Investigated a drop in bill-payment success rates through funnel, error, and user-segment analysis.',img:'assets/img/Capstone 2_BuiDaLy_page-0001.jpg'},
 {id:'food-ordering',category:'software',label:'Web / PM',title:'Online Food Ordering System',desc:'A full-stack system with project charter, WBS, schedules, risk tracking, and sprint delivery.',img:'assets/img/ordering food web.jpg'},
 {id:'product-rec',category:'ai recsys',label:'AI',title:'AI Product Recommendation',desc:'Machine-learning recommendation project with model evaluation and Flask integration.',img:'assets/img/Product Recommendation.jpg'},
 {id:'classified-ads',category:'ba',label:'Business',title:'Classified Ads System',desc:'Requirements analysis and structured system design with workflows, UML, and database models.',img:'assets/img/Management AD.jpg'},
 {id:'sap-crm',category:'ba',label:'Business',title:'SAP CRM Analysis',desc:'Analyzed CRM capabilities and compared business software alternatives.',img:'assets/img/SAP CRM System Analysis.jpg'},
 {id:'saco',category:'ba',label:'Business',title:'SACO Information Systems',desc:'Analyzed business systems and explored options for digital transformation.',img:'assets/img/saco_crm.jpg'},
 {id:'supply-chain',category:'bi',label:'Data',title:'Supply Chain Dashboard',desc:'Power BI reporting for delivery performance, returns, and profitability.',img:'assets/img/Logistics.jpg'},
 {id:'sales-dashboard',category:'bi',label:'Data',title:'Sales Performance Dashboard',desc:'Sales, product, and customer performance analysis with Power BI.',img:'assets/img/Ly Da Bui - sale performance.jpg'},
 {id:'movie-rec',category:'recsys ai',label:'AI',title:'Movie Recommendation System',desc:'Compared content-based and collaborative recommendation approaches on MovieLens.',img:'assets/img/movie recommendation system.jpg'},
 {id:'student-mgmt',category:'software',label:'System',title:'Student Management System',desc:'Academic workflows, role-based features, and UML system modeling.',img:'assets/img/Student Management System.jpg'},
 {id:'dormitory',category:'software',label:'System',title:'Dormitory Management System',desc:'Room management, billing workflows, and database architecture.',img:'assets/img/dormitory_management_system.jpg'}
];
const grid=document.getElementById('project-results');
function renderProjects(filter='all'){
 const visible=cards.filter(c=>filter==='all'||c.category.split(' ').includes(filter));
 grid.innerHTML=visible.map(c=>`<article class="project-card" data-project-id="${c.id}" tabindex="0" role="button" aria-label="View ${c.title} project details"><div class="project-image"><img src="${c.img}" alt="${c.title}" loading="lazy" onerror="this.classList.add('broken-img')"><span>${c.label}</span></div><div class="project-info"><h3>${c.title}</h3><p>${c.desc}</p><span class="project-open"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Project <i class="fa-solid fa-arrow-right"></i></span></div></article>`).join('');
 grid.querySelectorAll('.project-card').forEach(c=>{c.addEventListener('click',()=>openModal(c.dataset.projectId));c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openModal(c.dataset.projectId);}});});
}
renderProjects();
document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProjects(b.dataset.filter);}));
document.getElementById('gridView').onclick=()=>{grid.classList.remove('list-mode');document.getElementById('gridView').classList.add('active');document.getElementById('listView').classList.remove('active');};
document.getElementById('listView').onclick=()=>{grid.classList.add('list-mode');document.getElementById('listView').classList.add('active');document.getElementById('gridView').classList.remove('active');};
document.getElementById('viewAll')?.addEventListener('click', () => {
  document.querySelector('[data-filter="all"]')?.click();
});
const modal=document.createElement('div');modal.className='pmodal-overlay';modal.id='proj-modal';modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');modal.setAttribute('aria-label','Project details');
modal.innerHTML=`<div class="pmodal-box"><button class="pmodal-close" aria-label="Close project details"><i class="fa-solid fa-xmark"></i></button><div class="pmodal-inner"><div class="pmodal-gallery"><div class="pgallery-main"><img id="pgalleryImg" alt="Project preview"><button class="pgallery-nav prev" aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></button><button class="pgallery-nav next" aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></button><span class="pgallery-counter"></span></div></div><div class="pmodal-info"><span class="pmodal-kicker"></span><h2 class="pmodal-title"></h2><p class="pmodal-desc"></p><div class="pmodal-highlights"><span class="pmodal-highlights-label">PROJECT HIGHLIGHTS</span><ul></ul></div><div class="pmodal-chips"></div><div class="pmodal-links"></div></div></div></div>`;
document.body.appendChild(modal);
let gallery=[],galleryIdx=0, lastFocus;
function showImage(i){if(!gallery.length)return;galleryIdx=(i+gallery.length)%gallery.length;modal.querySelector('#pgalleryImg').src=gallery[galleryIdx];modal.querySelector('.pgallery-counter').textContent=`${galleryIdx+1} / ${gallery.length}`;modal.querySelectorAll('.pgallery-nav').forEach(b=>b.hidden=gallery.length<2);}
function openModal(id){const d=PROJECT_DATA[id];if(!d)return;lastFocus=document.activeElement;modal.querySelector('.pmodal-kicker').textContent=d.kicker;modal.querySelector('.pmodal-title').textContent=d.title;modal.querySelector('.pmodal-desc').textContent=d.desc;modal.querySelector('.pmodal-highlights ul').replaceChildren(...d.highlights.map(t=>{const li=document.createElement('li');li.textContent=t;return li;}));modal.querySelector('.pmodal-chips').replaceChildren(...d.chips.map(t=>{const el=document.createElement('span');el.className='chip';el.textContent=t;return el;}));const links=modal.querySelector('.pmodal-links');links.replaceChildren(...d.links.map(l=>{const a=document.createElement('a');a.className='modal-link '+(l.primary?'primary':'');a.href=l.href;a.target='_blank';a.rel='noopener';const i=document.createElement('i');i.className=l.icon;a.append(i,document.createTextNode(' '+l.label));return a;}));gallery=d.images?.length?d.images:[];showImage(0);modal.classList.add('open');document.body.classList.add('modal-open');modal.querySelector('.pmodal-close').focus();}
function closeModal(){modal.classList.remove('open');document.body.classList.remove('modal-open');lastFocus?.focus();}
modal.querySelector('.pmodal-close').onclick=closeModal;modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});modal.querySelector('.pgallery-nav.prev').onclick=()=>showImage(galleryIdx-1);modal.querySelector('.pgallery-nav.next').onclick=()=>showImage(galleryIdx+1);
document.addEventListener('keydown',e=>{if(!modal.classList.contains('open'))return;if(e.key==='Escape')closeModal();if(e.key==='ArrowLeft')showImage(galleryIdx-1);if(e.key==='ArrowRight')showImage(galleryIdx+1);});
