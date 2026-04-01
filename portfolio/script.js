/**
 * Portfolio Main Script
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
  { category: "Frontend", items: [{ name: "React/Next.js", level: 95 }, { name: "TypeScript", level: 92 }, { name: "HTML/CSS", level: 95 }, { name: "Tailwind", level: 90 }], icon: "🎨" },
  { category: "Backend", items: [{ name: "Node.js", level: 90 }, { name: "Python", level: 85 }, { name: "PostgreSQL", level: 88 }, { name: "REST APIs", level: 92 }], icon: "⚙️" },
  { category: "Tools", items: [{ name: "Git/GitHub", level: 95 }, { name: "Figma", level: 85 }, { name: "Docker", level: 78 }, { name: "AWS", level: 82 }], icon: "🛠️" }
];

const experience = [
  { role: "Senior Full-Stack Developer", company: "TechNova Labs", date: "Jan 2023 - Present", desc: "Leading development of enterprise SaaS products serving 100K+ users.", tech: ["Next.js", "TypeScript", "Node.js", "AWS"] },
  { role: "Full-Stack Developer", company: "Pixel & Code Agency", date: "Mar 2021 - Dec 2022", desc: "Built custom web applications and e-commerce platforms for high-profile clients.", tech: ["React", "Vue.js", "Python", "Shopify"] },
  { role: "Frontend Developer", company: "StartupGrid", date: "Jun 2019 - Feb 2021", desc: "Core frontend developer for a fast-growing B2B SaaS startup.", tech: ["React", "Redux", "WebSocket"] }
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
  initTyping();
  initNavbar();
  initScrollAnimations();
  renderProjects("all");
  renderSkills();
  renderExperience();
  renderBlog("all");
  renderTestimonials();
  initModalListeners();
  initChatWidget();
  initContactForm();

  // Number counters
  setTimeout(startCounters, 1000);
});

// ==========================================
// THEME MANAGEMENT
// ==========================================
function initTheme() {
  const toggleBtn = document.getElementById("themeToggle");
  const htmlEl = document.documentElement;

  // Retrieve theme from local storage or set based on preferences
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    htmlEl.setAttribute("data-theme", savedTheme);
  } else {
    htmlEl.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }

  toggleBtn.addEventListener("click", () => {
    const currentTheme = htmlEl.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    htmlEl.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
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
// NAVIGATION & SCROLL
// ==========================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky Navbar style on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "var(--shadow-sm)";
      navbar.style.background = "var(--glass-bg)";
    } else {
      navbar.style.boxShadow = "none";
      navbar.style.background = "transparent";
    }
    updateActiveLink();
  });

  // Mobile Menu Toggle
  mobileToggle.addEventListener("click", () => {
    navbar.classList.toggle("menu-open");
  });

  // Smooth Scroll
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navbar.classList.remove("menu-open");
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: "smooth"
        });
      }
    });
  });
}

function updateActiveLink() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("data-section") === current) {
      link.classList.add("active");
    }
  });
}

// ==========================================
// SCROLL ANIMATIONS & COUNTERS
// ==========================================
function initScrollAnimations() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Trigger skill bars if in it
        if (entry.target.classList.contains("section-header") && entry.target.closest("#skills")) {
          setTimeout(() => {
            document.querySelectorAll(".skill-progress").forEach(bar => {
              bar.style.width = bar.getAttribute("data-width") + "%";
            });
          }, 300);
        }

      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
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
}

function renderExperience() {
  const timeline = document.getElementById("timeline");
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
}

function renderBlog(filterValue) {
  const grid = document.getElementById("blogGrid");

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
  document.getElementById("modalClose").onclick = closeModals;
  document.getElementById("blogModalClose").onclick = closeModals;

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
  document.getElementById("projectModal").classList.remove("active");
  document.getElementById("blogModal").classList.remove("active");
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
  closeBtn.onclick = toggleChat;

  function addMessage(text, sender) {
    const el = document.createElement("div");
    el.className = `chat-message ${sender}`;
    el.innerHTML = `<div class="chat-bubble">${text}</div>`;
    messagesContainer.appendChild(el);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function simulateAIResponse(query) {
    const q = query.toLowerCase();
    let response = "I'm a simple AI assistant for this portfolio. I can answer questions about Alex's skills, projects, or contact info.";

    if (q.includes("skill") || q.includes("tech") || q.includes("stack")) {
      response = "Alex's main skills include React, Next.js, Node.js, TypeScript, and Python. He's a Full-Stack developer.";
    } else if (q.includes("project") || q.includes("work") || q.includes("portfolio")) {
      response = "Alex has built things like SynthWave Studio (a DAW in the browser) and Nebula Analytics. Check out the Projects section!";
    } else if (q.includes("hire") || q.includes("available") || q.includes("freelance") || q.includes("contact")) {
      response = "Yes, Alex is currently open to opportunities! You can email him at hello@alexchen.dev or use the contact form at the bottom.";
    } else if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      response = "Hello! 👋 How can I help you today?";
    }

    addMessage(`<svg class="spinner" width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="31.4 31.4" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="1s" repeatCount="indefinite"/></circle></svg> Typing...`, "assistant");

    setTimeout(() => {
      messagesContainer.lastChild.remove();
      addMessage(response, "assistant");
    }, 800);
  }

  form.onsubmit = (e) => {
    e.preventDefault();
    const txt = input.value.trim();
    if (!txt) return;

    addMessage(txt, "user");
    input.value = "";

    simulateAIResponse(txt);
  };

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
  const text = document.querySelector(".btn-text");
  const loading = document.querySelector(".btn-loading");
  const success = document.querySelector(".btn-success");

  form.onsubmit = (e) => {
    e.preventDefault();

    // Simulate API Call
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
