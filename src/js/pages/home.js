// HOMEPAGE VIEW RENDERER WITH HERO VIDEO BACKGROUND & OFFICIAL LOGO
import { initCarousel } from '../carousel.js';

export function renderHome() {
  setTimeout(() => {
    initCarousel();
  }, 100);

  return `
    <!-- HERO SECTION WITH CINEMATIC VIDEO BACKGROUND -->
    <section class="hero-section">
      <div class="hero-bg-container">
        <video autoplay loop muted playsinline class="hero-bg-video">
          <source src="/assets/hero-bg.mp4" type="video/mp4">
          <img src="/assets/hero_solar_farm.png" alt="SOLV Energy Solar Farm" class="hero-bg-image">
        </video>
        <div class="hero-overlay"></div>
      </div>

      <div class="container hero-content-wrapper">
        <div class="hero-text-block reveal-on-scroll">
          <h1 class="hero-title">
            Powering Progress<br>
            with Proven <span class="highlight-blue">Execution</span>
          </h1>
          <p class="hero-subtitle">
            We build, operate and optimize solar, storage and critical energy infrastructure.
          </p>
          <div class="hero-buttons">
            <a href="#/projects" class="btn btn-blue">
              <span>Explore Our Work</span>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4.166 10h11.668M10 4.166L15.833 10 10 15.833" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </a>
            <button class="btn btn-outline-light" data-open-video="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1">
              <span>Watch Video</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/></svg>
            </button>
          </div>
        </div>

        <div class="hero-graphic-block reveal-scale">
          <!-- Solar Energy Rotating Sunburst SVG Graphic -->
          <svg class="rotating-energy-ring" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="70" stroke="rgba(255,255,255,0.15)" stroke-width="2" stroke-dasharray="8 8" />
            <circle cx="100" cy="100" r="85" stroke="rgba(196,240,0,0.3)" stroke-width="1.5" />
            <g stroke="#C4F000" stroke-width="3" stroke-linecap="round">
              <line x1="100" y1="10" x2="100" y2="25" />
              <line x1="100" y1="175" x2="100" y2="190" />
              <line x1="10" y1="100" x2="25" y2="100" />
              <line x1="175" y1="100" x2="190" y2="100" />
              <line x1="36" y1="36" x2="47" y2="47" />
              <line x1="153" y1="153" x2="164" y2="164" />
              <line x1="164" y1="36" x2="153" y2="47" />
              <line x1="47" y1="153" x2="36" y2="164" />
            </g>
          </svg>
        </div>
      </div>

    </section>

    <!-- INTRODUCTION / WHO WE ARE PREVIEW SECTION -->
    <section class="intro-section">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-text-col reveal-on-scroll">
            <span class="eyebrow">BUILDING BIG. SCALING FAST.</span>
            <h2>Delivering the Power Behind New Growth</h2>
            <p>
              As demand for electricity accelerates, SOLV Energy delivers the large-scale solar and battery storage projects that power the U.S. — on time and at massive scale. With proven expertise, deep resources and full-lifecycle capabilities, we build power plants that deliver long-term performance and value for customers and communities.
            </p>
            <a href="#/who-we-are" class="btn btn-outline-dark">
              <span>Learn More About Us</span>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4.166 10h11.668M10 4.166L15.833 10 10 15.833" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </a>
          </div>

          <div class="intro-image-card reveal-slide-right">
            <img src="/assets/intro_solar_project.png" alt="SOLV Energy Project Execution">
            <div class="intro-stats-overlay">
              <div class="stat-item">
                <div class="stat-number" data-counter="500" data-suffix="+">0</div>
                <div class="stat-label">Power Plants Constructed</div>
              </div>
              <div class="stat-item">
                <div class="stat-number" data-counter="21" data-suffix=" GW">0</div>
                <div class="stat-label">Installed Generating Capacity</div>
              </div>
              <div class="stat-item">
                <div class="stat-number" data-counter="150" data-suffix="">0</div>
                <div class="stat-label">Power Plants Under Management</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- OUR FOCUS SECTION (SERVICE CARDS) -->
    <section class="focus-section">
      <div class="container">
        <div class="focus-header reveal-on-scroll">
          <span class="eyebrow eyebrow-lime">OUR FOCUS</span>
          <h2>End-to-end solutions for utility-scale energy assets.</h2>
        </div>

        <div class="services-grid">
          <!-- Card 1: Solar -->
          <div class="service-card" data-service-index="0">
            <div class="service-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            </div>
            <h3 class="service-title">SOLAR</h3>
            <p class="service-desc">Full-scope EPC for large scale solar, from civil to structure to electrical.</p>
            <a href="#/what-we-do" class="service-btn">
              <span>Learn More</span>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4.166 10h11.668M10 4.166L15.833 10 10 15.833" stroke="currentColor" stroke-width="2"/></svg>
            </a>
          </div>

          <!-- Card 2: High Voltage -->
          <div class="service-card" data-service-index="1">
            <div class="service-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3 class="service-title">HIGH VOLTAGE</h3>
            <p class="service-desc">Design and build substations and interconnection facilities up to 500 kV.</p>
            <a href="#/what-we-do" class="service-btn">
              <span>Learn More</span>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4.166 10h11.668M10 4.166L15.833 10 10 15.833" stroke="currentColor" stroke-width="2"/></svg>
            </a>
          </div>

          <!-- Card 3: Energy Storage -->
          <div class="service-card" data-service-index="2">
            <div class="service-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="12" height="18" rx="2"/><line x1="9" y1="1" x2="15" y2="1"/><line x1="12" y1="9" x2="12" y2="15"/><line x1="9" y1="12" x2="15" y2="12"/></svg>
            </div>
            <h3 class="service-title">ENERGY STORAGE (BESS)</h3>
            <p class="service-desc">Advanced PV + storage solutions and standalone microgrids.</p>
            <a href="#/what-we-do" class="service-btn">
              <span>Learn More</span>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4.166 10h11.668M10 4.166L15.833 10 10 15.833" stroke="currentColor" stroke-width="2"/></svg>
            </a>
          </div>

          <!-- Card 4: Services & O&M -->
          <div class="service-card" data-service-index="3">
            <div class="service-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <h3 class="service-title">SERVICES & O&M</h3>
            <p class="service-desc">Operations, maintenance, performance engineering, remote monitoring, testing and more.</p>
            <a href="#/what-we-do" class="service-btn">
              <span>Learn More</span>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4.166 10h11.668M10 4.166L15.833 10 10 15.833" stroke="currentColor" stroke-width="2"/></svg>
            </a>
          </div>

          <!-- Card 5: SCADA/OTS -->
          <div class="service-card" data-service-index="4">
            <div class="service-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><polyline points="6 9 10 13 14 8 18 12"/></svg>
            </div>
            <h3 class="service-title">SCADA/OTS</h3>
            <p class="service-desc">End-to-end SCADA and network infrastructure for grid operations.</p>
            <a href="#/what-we-do" class="service-btn">
              <span>Learn More</span>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4.166 10h11.668M10 4.166L15.833 10 10 15.833" stroke="currentColor" stroke-width="2"/></svg>
            </a>
          </div>
        </div>

        <!-- Wide Banner -->
        <a href="#/contact" class="focus-banner reveal-on-scroll">
          <span>✔ Clean. Reliable. Sustainable. Always.</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4.166 10h11.668M10 4.166L15.833 10 10 15.833" stroke="currentColor" stroke-width="2.5"/></svg>
        </a>
      </div>

    </section>

    <!-- FEATURED PROJECT SECTION (EIFFEL) -->
    <section class="featured-project-section">
      <img src="/assets/eiffel_project.png" alt="Eiffel Solar Farm Project" class="project-bg-img">
      <div class="project-overlay"></div>

      <div class="container project-content-grid">
        <div class="project-info reveal-on-scroll">
          <span class="eyebrow eyebrow-lime">FEATURED PROJECT</span>
          <h2>Eiffel</h2>
          <p>
            A utility-scale solar farm delivering clean energy to power communities and drive sustainability.
          </p>
          <a href="#/projects" class="btn btn-lime">
            <span>View Project Showcase</span>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4.166 10h11.668M10 4.166L15.833 10 10 15.833" stroke="currentColor" stroke-width="2"/></svg>
          </a>
        </div>

        <div class="project-stats-card reveal-slide-right">
          <div class="meta-row">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            <span class="meta-label">Project Type</span>
            <span class="meta-val">Solar PV</span>
          </div>

          <div class="meta-row">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span class="meta-label">Location</span>
            <span class="meta-val">Paris, TX</span>
          </div>

          <div class="meta-row">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            <span class="meta-label">Project Size</span>
            <span class="meta-val">300 MWp</span>
          </div>

          <div class="carousel-pagination-box">
            <span id="carousel-prev" class="page-arrow">&larr;</span>
            <span>01 / 04</span>
            <span id="carousel-next" class="page-arrow">&rarr;</span>
          </div>
        </div>
      </div>
    </section>

    <!-- HORIZONTAL PROJECT CAROUSEL SECTION -->
    <section class="project-carousel-section">
      <div class="container">
        <div class="project-carousel-header reveal-on-scroll">
          <div>
            <span class="eyebrow eyebrow-lime">MORE FEATURED PROJECTS</span>
            <h3 style="font-size: 1.8rem; color: #FFF;">Explore Our Utility Infrastructure Portfolio</h3>
          </div>
        </div>

        <div class="project-carousel-track reveal-on-scroll">
          <div class="carousel-card">
            <img src="/assets/bess_storage.png" alt="Gemini Storage Facility">
            <div class="carousel-card-body">
              <span class="eyebrow eyebrow-blue">CLARK COUNTY, NV</span>
              <h4 style="font-size: 1.2rem; margin-bottom: 0.35rem;">Gemini Storage Facility</h4>
              <p style="font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-bottom: 0.85rem;">380 MW / 1,400 MWh Standalone BESS</p>
              <a href="#/projects" style="font-size: 0.8rem; font-weight: 700; color: var(--color-lime);">View Details &rarr;</a>
            </div>
          </div>

          <div class="carousel-card">
            <img src="/assets/high_voltage_substation.png" alt="Desert Sunlight Solar">
            <div class="carousel-card-body">
              <span class="eyebrow eyebrow-blue">DESERT CENTER, CA</span>
              <h4 style="font-size: 1.2rem; margin-bottom: 0.35rem;">Desert Sunlight</h4>
              <p style="font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-bottom: 0.85rem;">550 MWp Utility-Scale Solar PV</p>
              <a href="#/projects" style="font-size: 0.8rem; font-weight: 700; color: var(--color-lime);">View Details &rarr;</a>
            </div>
          </div>

          <div class="carousel-card">
            <img src="/assets/intro_solar_project.png" alt="Topaz Solar Station">
            <div class="carousel-card-body">
              <span class="eyebrow eyebrow-blue">SAN LUIS OBISPO, CA</span>
              <h4 style="font-size: 1.2rem; margin-bottom: 0.35rem;">Topaz Solar Station</h4>
              <p style="font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-bottom: 0.85rem;">550 MWp Solar Farm & Interconnect</p>
              <a href="#/projects" style="font-size: 0.8rem; font-weight: 700; color: var(--color-lime);">View Details &rarr;</a>
            </div>
          </div>

          <div class="carousel-card">
            <img src="/assets/hero_solar_farm.png" alt="Copper Mountain Infrastructure">
            <div class="carousel-card-body">
              <span class="eyebrow eyebrow-blue">BOULDER CITY, NV</span>
              <h4 style="font-size: 1.2rem; margin-bottom: 0.35rem;">Copper Mountain</h4>
              <p style="font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-bottom: 0.85rem;">458 MWp Hybrid PV + BESS Facility</p>
              <a href="#/projects" style="font-size: 0.8rem; font-weight: 700; color: var(--color-lime);">View Details &rarr;</a>
            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- TESTIMONIAL SECTION -->
    <section class="testimonial-section">
      <div class="container reveal-scale">
        <span class="quote-mark">&ldquo;</span>
        <blockquote class="testimonial-text">
          "SOLV Energy's commissioning planning and teams are top tier. They provided exceptional service in challenging conditions and played a vital role in bringing our large PV solar and BESS projects online within an impressive timeline."
        </blockquote>
        <div class="testimonial-author">Chris Fox</div>
        <div class="testimonial-company">Clearway Energy</div>

        <div class="testimonial-dots">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>

    </section>

    <!-- CONTACT CTA SECTION -->
    <section class="contact-cta-section">
      <div class="container contact-box">
        <h2 class="contact-title reveal-on-scroll">Discuss your project scope and schedule.</h2>
        
        <form class="contact-form-grid reveal-on-scroll" onsubmit="event.preventDefault(); alert('Thank you for reaching out! A SOLV Energy representative will contact you shortly.');">
          <div class="form-group">
            <label class="form-label" for="full-name">Full Name *</label>
            <input type="text" id="full-name" class="form-input" placeholder="Enter your name" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="interest">I'm interested in...</label>
            <select id="interest" class="form-select">
              <option value="">Select an option</option>
              <option value="Solar EPC">Solar EPC</option>
              <option value="High Voltage">High Voltage & Substations</option>
              <option value="BESS">Energy Storage (BESS)</option>
              <option value="O&M">Services & O&M</option>
              <option value="SCADA">SCADA/OTS</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="email">Email *</label>
            <input type="email" id="email" class="form-input" placeholder="Enter your email" required>
          </div>

          <div class="form-group full-width">
            <label class="form-label" for="message">Message *</label>
            <textarea id="message" class="form-textarea" rows="4" placeholder="Tell us about your project" required></textarea>
          </div>

          <div class="form-group full-width form-submit-row">
            <button type="submit" class="btn btn-lime">
              <span>Get In Touch</span>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4.166 10h11.668M10 4.166L15.833 10 10 15.833" stroke="currentColor" stroke-width="2"/></svg>
            </button>
          </div>
        </form>
      </div>

    </section>

    <!-- FOOTER -->
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="site-logo" style="margin-bottom: 1rem;">
              <img src="/assets/logo.svg" alt="SOLV Energy Logo" class="brand-logo-img" style="filter: brightness(0) invert(1);">
            </div>
            <p>16680 West Bernardo Drive<br>San Diego, CA, 92127</p>
            <p style="margin-top: 0.6rem;">Contact Us: 858.251.4888</p>
          </div>

          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#/who-we-are">Who We Are</a></li>
              <li><a href="#/what-we-do">What We Do</a></li>
              <li><a href="#/projects">Projects</a></li>
              <li><a href="#/impact">Impact</a></li>
              <li><a href="#/investors">Investors</a></li>
              <li><a href="#/careers">Careers</a></li>
              <li><a href="#/news">News</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Our Solutions</h4>
            <ul class="footer-links">
              <li><a href="#/what-we-do">Solar</a></li>
              <li><a href="#/what-we-do">High Voltage</a></li>
              <li><a href="#/what-we-do">Energy Storage (BESS)</a></li>
              <li><a href="#/what-we-do">Services & O&M</a></li>
              <li><a href="#/what-we-do">SCADA/OTS</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Stay Updated</h4>
            <p>Sign up for our newsletter</p>
            <div class="newsletter-box">
              <input type="email" class="newsletter-input" placeholder="Enter your email">
              <button class="newsletter-btn">Subscribe &rarr;</button>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div>&copy; 2026 SOLV Energy. All rights reserved.</div>
          <div style="display: flex; gap: 1.5rem;">
            <a href="#/contact">Privacy Policy</a>
            <a href="#/contact">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
