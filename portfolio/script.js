/**
 * Portfolio Main Script — Multi-Page Architecture
 * Handles all interactivity, data rendering, and animations
 */

// ==========================================
// DATA
// ==========================================
const projects = [
  {
    id: "synthwave",
    title: "SynthWave Studio",
    desc: "A real-time collaborative music production platform with AI-powered beat generation and multi-track editing.",
    category: "Web App",
    tech: ["React", "Web Audio API", "Node.js"],
    img: "assets/images/project-synthwave.png",
    demo: "#",
    github: "#"
  },
  {
    id: "nebula",
    title: "Nebula Analytics",
    desc: "Enterprise-grade analytics dashboard with real-time data visualization and predictive insights.",
    category: "Dashboard",
    tech: ["Next.js", "D3.js", "Python"],
    img: "assets/images/project-nebula.png",
    demo: "#",
    github: "#"
  },
  {
    id: "verdant",
    title: "Verdant Marketplace",
    desc: "Sustainable e-commerce platform connecting eco-conscious consumers with verified green brands.",
    category: "E-Commerce",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    img: "assets/images/project-verdant.png",
    demo: "#",
    github: "#"
  },
  {
    id: "pulse",
    title: "Pulse Health",
    desc: "Health & fitness tracking app with wearable device integration and personalized wellness plans.",
    category: "Mobile App",
    tech: ["React Native", "Firebase", "HealthKit"],
    img: "assets/images/project-pulse.png",
    demo: "#",
    github: "#"
  },
  {
    id: "arcflow",
    title: "ArcFlow Design System",
    desc: "Open-source component library and design system used by 500+ developers worldwide.",
    category: "Open Source",
    tech: ["React", "TypeScript", "Storybook"],
    img: "assets/images/project-arcflow.png",
    demo: "#",
    github: "#"
  }
];

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "HTML5 / CSS3 / SASS", level: 96 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vue.js / Nuxt", level: 82 },
      { name: "Redux / Zustand", level: 88 }
    ],
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js / Express", level: 93 },
      { name: "Python / Django / Flask", level: 88 },
      { name: "Java / Spring Boot", level: 80 },
      { name: "REST & GraphQL APIs", level: 92 },
      { name: "C / C++", level: 85 },
      { name: "Go (Golang)", level: 72 }
    ],
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1"/><circle cx="6" cy="18" r="1"/></svg>'
  },
  {
    category: "Database & Storage",
    items: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Firebase / Supabase", level: 86 },
      { name: "Prisma / Sequelize ORM", level: 84 }
    ],
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>'
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker / Kubernetes", level: 82 },
      { name: "AWS (EC2, S3, Lambda)", level: 84 },
      { name: "CI/CD (GitHub Actions)", level: 88 },
      { name: "Linux / Bash", level: 90 },
      { name: "Nginx / Caddy", level: 78 },
      { name: "Git / GitHub / GitLab", level: 95 }
    ],
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>'
  },
  {
    category: "Mobile Development",
    items: [
      { name: "React Native", level: 88 },
      { name: "Flutter / Dart", level: 78 },
      { name: "iOS (Swift basics)", level: 65 },
      { name: "Android (Kotlin basics)", level: 68 },
      { name: "Expo", level: 85 },
      { name: "App Store Deployment", level: 80 }
    ],
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>'
  },
  {
    category: "Embedded Systems & IoT",
    items: [
      { name: "Arduino / ESP32", level: 88 },
      { name: "Raspberry Pi", level: 85 },
      { name: "MQTT / IoT Protocols", level: 80 },
      { name: "Embedded C / C++", level: 84 },
      { name: "Sensor Integration", level: 82 },
      { name: "PCB Design (KiCad)", level: 70 }
    ],
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>'
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "TensorFlow / Keras", level: 75 },
      { name: "Python (NumPy, Pandas)", level: 88 },
      { name: "Natural Language Processing", level: 72 },
      { name: "OpenAI / LLM Integration", level: 80 },
      { name: "Computer Vision (OpenCV)", level: 68 },
      { name: "Data Visualization (Matplotlib)", level: 82 }
    ],
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93"/><path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93"/><path d="M12 18a4 4 0 0 1-4-4c0-1.95 1.4-3.58 3.25-3.93"/><path d="M12 18a4 4 0 0 0 4-4c0-1.95-1.4-3.58-3.25-3.93"/><circle cx="12" cy="12" r="2"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/></svg>'
  },
  {
    category: "Design & Creative Tools",
    items: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 82 },
      { name: "Adobe Photoshop", level: 78 },
      { name: "Blender (3D basics)", level: 60 },
      { name: "UI/UX Design Principles", level: 88 },
      { name: "Wireframing & Prototyping", level: 92 }
    ],
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>'
  }
];

const experience = [
  {
    role: "Senior Full-Stack Software Engineer",
    company: "TechNova Labs",
    date: "Jan 2023 - Present",
    desc: "Leading architecture and development of enterprise SaaS products serving 100K+ users. Designing microservices, optimizing database performance, and mentoring a team of 6 developers. Reduced API latency by 40% and implemented CI/CD pipelines for zero-downtime deployments.",
    tech: ["Next.js", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL"]
  },
  {
    role: "AI & Full-Stack Developer",
    company: "InnovateTech Rwanda",
    date: "Jul 2022 - Dec 2022",
    desc: "Built AI-powered web applications integrating OpenAI APIs and custom ML models. Developed a smart customer support chatbot that reduced response times by 60%. Created dashboards for real-time analytics and trained models for sentiment analysis on local language datasets.",
    tech: ["Python", "TensorFlow", "React", "FastAPI", "OpenAI API", "MongoDB"]
  },
  {
    role: "Embedded Systems & IoT Engineer",
    company: "SmartEdge Technologies",
    date: "Jun 2022 - Dec 2022",
    desc: "Designed and developed firmware for IoT devices using ESP32 and ARM-based microcontrollers. Built real-time sensor data pipelines, integrated MQTT communication protocols, and developed a cloud dashboard for remote device monitoring and OTA updates.",
    tech: ["C/C++", "ESP32", "MQTT", "Raspberry Pi", "Python", "KiCad"]
  },
  {
    role: "Full-Stack Developer",
    company: "Pixel & Code Agency",
    date: "Mar 2021 - May 2022",
    desc: "Built custom web applications, e-commerce platforms, and RESTful APIs for high-profile clients across healthcare, fintech, and retail sectors. Delivered 15+ projects on time with a focus on performance, accessibility, and scalable architecture.",
    tech: ["React", "Vue.js", "Python", "Django", "MongoDB", "Shopify"]
  },
  {
    role: "UI/UX Designer & Frontend Developer",
    company: "CreativeFlow Studio",
    date: "Jan 2021 - Feb 2021",
    desc: "Designed user interfaces and interactive prototypes for mobile and web applications. Conducted user research, created design systems in Figma, and implemented pixel-perfect responsive frontends. Improved client conversion rates by 35% through UX-driven redesigns.",
    tech: ["Figma", "Adobe XD", "HTML/CSS", "JavaScript", "SASS", "GSAP"]
  },
  {
    role: "Software Developer & Hardware Prototyper",
    company: "KLab Rwanda",
    date: "Aug 2020 - Feb 2021",
    desc: "Developed innovative solutions combining software and hardware prototyping. Built smart home automation systems, automated irrigation controllers, and contributed to open-source embedded projects. Collaborated with cross-functional teams on rapid prototyping.",
    tech: ["Arduino", "React Native", "Firebase", "Embedded C", "3D Printing"]
  },
  {
    role: "Junior Frontend Developer",
    company: "StartupGrid",
    date: "Jun 2019 - Jul 2020",
    desc: "Core frontend developer for a fast-growing B2B SaaS startup. Implemented real-time features using WebSockets, built responsive dashboards, and improved Lighthouse performance scores from 45 to 92 across all product pages.",
    tech: ["React", "Redux", "WebSocket", "SASS", "Figma"]
  }
];

const blog = [
  { id: "blog1", title: "Building Scalable Design Systems with React & TypeScript", category: "Engineering", date: "Dec 15, 2025", read: "8 min read", excerpt: "A comprehensive guide to creating maintainable, accessible, and performant component libraries that scale with your team." },
  { id: "blog2", title: "Next.js Performance: From 40 to 98 Lighthouse Score", category: "Performance", date: "Oct 22, 2025", read: "6 min read", excerpt: "Practical strategies I used to dramatically improve the performance of a production Next.js application." },
  { id: "blog3", title: "How AI is Reshaping Modern Web Development", category: "AI & ML", date: "Aug 30, 2025", read: "5 min read", excerpt: "Exploring the practical applications of AI in web development — from code generation to intelligent user experiences." }
];

const testimonials = [
  { quote: "Joshua is one of the most talented developers I've worked with. Their ability to translate complex requirements into elegant solutions is remarkable.", author: "Sarah Mitchell", role: "VP of Engineering, TechNova", img: "assets/images/avatar.jpeg" },
  { quote: "Hiring Joshua was a game-changer for our startup. They built our entire frontend from scratch and it scaled beautifully to 50K+ users.", author: "Marcus Rivera", role: "CEO, StartupGrid", img: "assets/images/avatar.jpeg" },
  { quote: "Working with Joshua is a designer's dream. They have an incredible eye for detail and consistently deliver pixel-perfect implementations.", author: "Emily Zhang", role: "Product Designer", img: "assets/images/avatar.jpeg" }
];

// ==========================================
// DOM ELEMENTS & INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavbar();
  initScrollAnimations();

  // Page enter animation
  document.body.classList.add("page-enter");

  // Conditional initialization based on which page we're on
  if (document.getElementById("heroTyping")) {
    initTyping();
  }
  if (document.getElementById("heroParticles")) {
    setTimeout(startCounters, 1000);
  }
  if (document.getElementById("projectsGrid")) {
    renderProjects("all");
  }
  if (document.getElementById("skillsGrid")) {
    renderSkills();
  }
  if (document.getElementById("timeline")) {
    renderExperience();
  }
  if (document.getElementById("blogGrid")) {
    renderBlog("all");
  }
  if (document.getElementById("testimonialsTrack")) {
    renderTestimonials();
  }
  if (document.getElementById("projectModal")) {
    initModalListeners();
  }
  if (document.getElementById("chatWidget")) {
    initChatWidget();
  }
  if (document.getElementById("contactForm")) {
    initContactForm();
  }
});

// ==========================================
// THEME MANAGEMENT
// ==========================================
function initTheme() {
  const toggleBtn = document.getElementById("themeToggle");
  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    htmlEl.setAttribute("data-theme", savedTheme);
  } else {
    htmlEl.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = htmlEl.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      htmlEl.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }
}

// ==========================================
// TYPING EFFECT
// ==========================================
function initTyping() {
  const words = ["Engineer.", "Designer.", "Problem Solver."];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const element = document.getElementById("heroTyping");

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    element.textContent = currentWord.substring(0, charIndex);

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// ==========================================
// NAVIGATION & ACTIVE LINK
// ==========================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobileToggle");

  // Sticky Navbar style on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "var(--shadow-sm)";
      navbar.style.background = "var(--glass-bg)";
    } else {
      navbar.style.boxShadow = "none";
      navbar.style.background = "transparent";
    }
  });

  // Mobile Menu Toggle
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      navbar.classList.toggle("menu-open");
    });
  }

  // Set active nav link based on current page
  setActiveNavLink();
}

function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  const pageMap = {
    "index.html": "home",
    "": "home",
    "about.html": "about",
    "projects.html": "projects",
    "skills.html": "skills",
    "experience.html": "experience",
    "blog.html": "blog",
    "testimonials.html": "testimonials",
    "contact.html": "contact"
  };

  const activeSection = pageMap[currentPage] || "home";

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("data-section") === activeSection) {
      link.classList.add("active");
    }
  });
}

// ==========================================
// SCROLL ANIMATIONS & COUNTERS
// ==========================================
// Global observer instance
let scrollObserver = null;

function initScrollAnimations() {
  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Trigger skill bars if visible
        if (entry.target.classList.contains("skill-category")) {
          setTimeout(() => {
            entry.target.querySelectorAll(".skill-progress").forEach(bar => {
              bar.style.width = bar.getAttribute("data-width") + "%";
            });
          }, 300);
        }
      }
    });
  }, { threshold: 0.05, rootMargin: "0px 0px 50px 0px" });

  observeNewElements();
}

// Re-observe all .animate-on-scroll elements (including dynamically injected ones)
function observeNewElements() {
  if (!scrollObserver) return;
  document.querySelectorAll(".animate-on-scroll:not(.observed)").forEach(el => {
    el.classList.add("observed");
    scrollObserver.observe(el);
  });
}

function startCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200;

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-count');
    const updateCount = () => {
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

// ==========================================
// RENDER DATA
// ==========================================
function renderProjects(filterValue) {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const filtered = filterValue === "all"
    ? projects
    : projects.filter(p => p.category === filterValue);

  grid.innerHTML = filtered.map(p => `
    <div class="project-card animate-on-scroll visible">
      <div class="project-image-wrap">
        <span class="project-category">${p.category}</span>
        <img src="${p.img}" alt="${p.title}" class="project-image" loading="lazy" />
      </div>
      <div class="project-content">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-description">${p.desc}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="#" class="project-link" onclick="openProjectModal('${p.id}'); return false;">
            View Details <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  `).join('');

  // Setup filters
  const buttons = document.querySelectorAll("#projectFilters .filter-btn");
  buttons.forEach(btn => {
    btn.onclick = () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.getAttribute("data-filter"));
    };
  });
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  grid.innerHTML = skills.map(cat => `
    <div class="skill-category animate-on-scroll">
      <div class="skill-category-header">
        <div class="skill-icon">${cat.icon}</div>
        <h3 class="skill-category-title">${cat.category}</h3>
      </div>
      <div class="skill-list">
        ${cat.items.map(skill => `
          <div class="skill-item">
            <div class="skill-item-info">
              <span>${skill.name}</span>
              <span>${skill.level}%</span>
            </div>
            <div class="skill-progress-bar">
              <div class="skill-progress" data-width="${skill.level}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Re-observe dynamically added elements
  observeNewElements();
}

function renderExperience() {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  timeline.innerHTML = experience.map(exp => `
    <div class="timeline-item animate-on-scroll">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${exp.role}</h3>
            <span class="timeline-company">${exp.company}</span>
          </div>
          <span class="timeline-date">${exp.date}</span>
        </div>
        <p class="timeline-desc">${exp.desc}</p>
        <div class="timeline-tech">
          ${exp.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe dynamically added elements
  observeNewElements();
}

function renderBlog(filterValue) {
  const grid = document.getElementById("blogGrid");
  if (!grid) return;

  const filtered = filterValue === "all"
    ? blog
    : blog.filter(b => b.category === filterValue);

  grid.innerHTML = filtered.map(b => `
    <div class="blog-card animate-on-scroll visible">
      <div class="blog-image" style="background: var(--gradient-hero)">&nbsp;</div>
      <div class="blog-content">
        <div class="blog-meta">
          <span>${b.category}</span>
          <span>${b.read}</span>
        </div>
        <h3 class="blog-title">${b.title}</h3>
        <p class="blog-excerpt">${b.excerpt}</p>
        <a href="#" class="blog-read-more" onclick="openBlogModal('${b.id}'); return false;">Read Article →</a>
      </div>
    </div>
  `).join('');

  // Setup filters
  const buttons = document.querySelectorAll("#blogFilters .filter-btn");
  buttons.forEach(btn => {
    btn.onclick = () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderBlog(btn.getAttribute("data-filter"));
    };
  });
}

function renderTestimonials() {
  const track = document.getElementById("testimonialsTrack");
  const dots = document.getElementById("carouselDots");
  if (!track || !dots) return;

  track.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-content">
        <div class="testimonial-quote-icon">"</div>
        <p class="testimonial-text">${t.quote}</p>
        <div class="testimonial-author">
          <img src="${t.img}" alt="${t.author}" class="testimonial-avatar" />
          <div class="testimonial-info">
            <h4>${t.author}</h4>
            <span>${t.role}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  dots.innerHTML = testimonials.map((_, i) => `
    <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to slide ${i}"></button>
  `).join('');

  initCarousel();
}

// ==========================================
// CAROUSEL
// ==========================================
function initCarousel() {
  const track = document.getElementById("testimonialsTrack");
  const dots = document.querySelectorAll(".carousel-dot");
  const prevBtn = document.getElementById("prevTestimonial");
  const nextBtn = document.getElementById("nextTestimonial");

  if (!track || !prevBtn || !nextBtn) return;

  let currentIdx = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIdx * 100}%)`;
    dots.forEach((d, i) => {
      d.classList.toggle("active", i === currentIdx);
    });
  }

  nextBtn.onclick = () => {
    currentIdx = (currentIdx + 1) % testimonials.length;
    updateCarousel();
  };

  prevBtn.onclick = () => {
    currentIdx = (currentIdx - 1 + testimonials.length) % testimonials.length;
    updateCarousel();
  };

  dots.forEach((dot, i) => {
    dot.onclick = () => {
      currentIdx = i;
      updateCarousel();
    };
  });

  // Auto-play
  setInterval(() => {
    currentIdx = (currentIdx + 1) % testimonials.length;
    updateCarousel();
  }, 5000);
}

// ==========================================
// MODALS
// ==========================================
function initModalListeners() {
  const projectClose = document.getElementById("modalClose");
  const blogClose = document.getElementById("blogModalClose");

  if (projectClose) projectClose.onclick = closeModals;
  if (blogClose) blogClose.onclick = closeModals;

  window.onclick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModals();
    }
  };

  window.onkeydown = (e) => {
    if (e.key === "Escape") closeModals();
  };
}

function closeModals() {
  const projectModal = document.getElementById("projectModal");
  const blogModal = document.getElementById("blogModal");
  if (projectModal) projectModal.classList.remove("active");
  if (blogModal) blogModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

window.openProjectModal = function (id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;

  const body = document.getElementById("modalBody");
  body.innerHTML = `
    <div class="project-modal-header">
      <span class="section-tag">${p.category}</span>
      <h2 class="section-title" style="margin-bottom:0.5rem">${p.title}</h2>
      <div class="project-tech" style="margin-top:1rem">
        ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
    <img src="${p.img}" alt="${p.title}" class="project-modal-img" />
    <p class="text-muted" style="font-size:1.1rem">${p.desc} This is an extended description showcasing the detailed case study, the challenges faced, the solutions implemented, and the final outcomes. Built for performance, scalability, and an excellent user experience.</p>
    <div class="project-modal-actions">
      <a href="${p.demo}" class="btn btn-primary">Live Demo</a>
      <a href="${p.github}" class="btn btn-outline">Source Code</a>
    </div>
  `;
  document.getElementById("projectModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

window.openBlogModal = function (id) {
  const b = blog.find(x => x.id === id);
  if (!b) return;

  const body = document.getElementById("blogModalBody");
  body.innerHTML = `
    <div class="blog-content-modal">
      <div class="blog-meta">
        <span class="section-tag">${b.category}</span>
        <span class="text-muted">${b.date} • ${b.read}</span>
      </div>
      <h1>${b.title}</h1>
      <p class="text-balance" style="font-size:1.2rem; color:var(--foreground)">${b.excerpt}</p>
      <div style="width:100%; height:300px; background:var(--gradient-hero); border-radius:var(--radius-lg); margin: 2rem 0;"></div>
      
      <h2>Introduction</h2>
      <p>This is a simulated blog post content area. In a real-world scenario, this would be populated with rich markdown or HTML representing the full length article.</p>
      
      <h2>Technical Details</h2>
      <p>We implemented a robust architecture using modern patterns:</p>
      <pre><code>function initArchitecture() {
  console.log("Building scalable systems...");
  return new Architecture({
    scalable: true,
    performant: true,
    accessible: true
  });
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>By following these best practices, we achieved a significant improvement in both developer experience and product quality. Always keep learning and iterating on your process.</p>
    </div>
  `;
  document.getElementById("blogModal").classList.add("active");
  document.body.style.overflow = "hidden";
}


// ==========================================
// AI CHAT WIDGET
// ==========================================
function initChatWidget() {
  const toggleBtn = document.getElementById("chatToggle");
  const closeBtn = document.getElementById("chatClose");
  const panel = document.getElementById("chatPanel");
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");
  const messagesContainer = document.getElementById("chatMessages");
  const iconOpen = document.querySelector(".chat-icon-open");
  const iconClose = document.querySelector(".chat-icon-close");
  const suggestionChips = document.querySelectorAll(".suggestion-chip");

  if (!toggleBtn || !panel) return;

  let isChatOpen = false;

  function toggleChat() {
    isChatOpen = !isChatOpen;
    if (isChatOpen) {
      panel.classList.add("active");
      iconOpen.style.display = "none";
      iconClose.style.display = "block";
      setTimeout(() => input.focus(), 300);
    } else {
      panel.classList.remove("active");
      iconOpen.style.display = "block";
      iconClose.style.display = "none";
    }
  }

  toggleBtn.onclick = toggleChat;
  if (closeBtn) closeBtn.onclick = toggleChat;

  function addMessage(text, sender) {
    const el = document.createElement("div");
    el.className = `chat-message ${sender}`;
    el.innerHTML = `<div class="chat-bubble">${text}</div>`;
    messagesContainer.appendChild(el);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function simulateAIResponse(query) {
    const q = query.toLowerCase();
    let response = "I'm Joshua's AI assistant. I can answer questions about his skills, projects, or contact info.";

    if (q.includes("skill") || q.includes("tech") || q.includes("stack")) {
      response = "Joshua's main skills include React, Next.js, Node.js, TypeScript, Python, and Embedded Systems. He's a Full-Stack developer with IoT expertise. Check out the <a href='skills.html'>Skills page</a>!";
    } else if (q.includes("project") || q.includes("work") || q.includes("portfolio")) {
      response = "Joshua has built things like SynthWave Studio (a DAW in the browser) and Nebula Analytics. Check out the <a href='projects.html'>Projects page</a>!";
    } else if (q.includes("hire") || q.includes("available") || q.includes("freelance") || q.includes("contact")) {
      response = "Yes, Joshua is currently open to opportunities! You can reach him at joshuaishimwe88@gmail.com or visit the <a href='contact.html'>Contact page</a>.";
    } else if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      response = "Hello! 👋 How can I help you today?";
    } else if (q.includes("experience") || q.includes("career") || q.includes("job")) {
      response = "Joshua has 4+ years of experience across full-stack development, embedded systems, and AI. Check out the <a href='experience.html'>Experience page</a>!";
    }

    addMessage(`<svg class="spinner" width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="31.4 31.4" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="1s" repeatCount="indefinite"/></circle></svg> Typing...`, "assistant");

    setTimeout(() => {
      messagesContainer.lastChild.remove();
      addMessage(response, "assistant");
    }, 800);
  }

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const txt = input.value.trim();
      if (!txt) return;
      addMessage(txt, "user");
      input.value = "";
      simulateAIResponse(txt);
    };
  }

  suggestionChips.forEach(chip => {
    chip.onclick = () => {
      const q = chip.getAttribute("data-question");
      addMessage(q, "user");
      simulateAIResponse(q);
    };
  });
}

// ==========================================
// CONTACT FORM
// ==========================================
function initContactForm() {
  const form = document.getElementById("contactForm");
  const btn = document.getElementById("submitBtn");
  const text = btn ? btn.querySelector(".btn-text") : null;
  const loading = btn ? btn.querySelector(".btn-loading") : null;
  const success = btn ? btn.querySelector(".btn-success") : null;

  if (!form || !btn) return;

  form.onsubmit = (e) => {
    e.preventDefault();

    text.style.display = "none";
    loading.style.display = "flex";
    btn.disabled = true;

    setTimeout(() => {
      loading.style.display = "none";
      success.style.display = "block";
      form.reset();

      setTimeout(() => {
        success.style.display = "none";
        text.style.display = "block";
        btn.disabled = false;
      }, 3000);
    }, 1500);
  };
}
