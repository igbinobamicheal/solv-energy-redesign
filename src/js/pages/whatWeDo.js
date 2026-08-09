// WHAT WE DO PAGE VIEW RENDERER WITH EXPANDABLE CAPABILITIES ACCORDION & CONTEXTUAL CTA
export function renderWhatWeDo() {
  setTimeout(() => {
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }, 100);

  return `
    <section class="hero-section" style="min-height: 55vh;">
      <div class="hero-bg-container">
        <img src="/assets/high_voltage_substation.png" alt="SOLV Energy Capabilities" class="hero-bg-image">
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content-wrapper" style="padding-top: 6rem;">
        <div class="hero-text-block reveal-on-scroll">
          <span class="eyebrow eyebrow-lime">WHAT WE DO</span>
          <h1 class="hero-title">End-to-End <span class="highlight-blue">Infrastructure</span> Excellence</h1>
          <p class="hero-subtitle">From engineering and high-voltage interconnects to battery storage and 24/7 remote monitoring, we deliver complete lifecycle solutions.</p>
        </div>
      </div>

    </section>

    <!-- CAPABILITIES EXPANDABLE ACCORDION SECTION -->
    <section style="background: #FFF; padding: 6rem 0 8rem; position: relative;">
      <div class="container" style="max-width: 900px;">
        <div style="text-align: center; margin-bottom: 4rem;" class="reveal-on-scroll">
          <span class="eyebrow">CAPABILITIES</span>
          <h2 style="font-size: 2.8rem; color: var(--color-navy-deep);">Full-Lifecycle Execution</h2>
        </div>

        <div class="accordion-list reveal-on-scroll">
          <div class="accordion-item active">
            <div class="accordion-header">
              <div><span class="acc-num">01</span> Engineering & Design</div>
              <span class="accordion-icon">+</span>
            </div>
            <div class="accordion-content">
              Complete civil, structural, mechanical, and high-voltage electrical engineering tailored for site-specific conditions, grid compliance, and optimal energy yields.
            </div>
          </div>

          <div class="accordion-item">
            <div class="accordion-header">
              <div><span class="acc-num">02</span> Utility-Scale Construction</div>
              <span class="accordion-icon">+</span>
            </div>
            <div class="accordion-content">
              Self-perform EPC capabilities with dedicated field crews, heavy equipment fleets, module installation systems, and stringent quality assurance.
            </div>
          </div>

          <div class="accordion-item">
            <div class="accordion-header">
              <div><span class="acc-num">03</span> Commissioning & Testing</div>
              <span class="accordion-icon">+</span>
            </div>
            <div class="accordion-content">
              Rigorous high-voltage testing, inverter calibration, NERC/FERC compliance verification, and grid interconnection energization services.
            </div>
          </div>

          <div class="accordion-item">
            <div class="accordion-header">
              <div><span class="acc-num">04</span> Operations & Remote SCADA</div>
              <span class="accordion-icon">+</span>
            </div>
            <div class="accordion-content">
              24/7/365 active monitoring from our state-of-the-art Operations Control Center (OCC), predictive dispatch, and automated curtailment management.
            </div>
          </div>

          <div class="accordion-item">
            <div class="accordion-header">
              <div><span class="acc-num">05</span> Preventive & Corrective Maintenance</div>
              <span class="accordion-icon">+</span>
            </div>
            <div class="accordion-content">
              Nationwide technician dispatch, rapid spare parts logistics, thermal drone imaging, vegetation management, and high-voltage transformer repair.
            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- CONTEXTUAL CTA BANNER (SPEC SECTION 27) -->
    <section style="background: linear-gradient(180deg, #0054A6 0%, #003B75 100%); color: #FFF; padding: 7rem 0 8rem; text-align: center; position: relative;">
      <div class="container reveal-scale">
        <span class="eyebrow eyebrow-lime">PARTNER WITH US</span>
        <h2 style="font-size: 2.8rem; margin-bottom: 1.5rem;">Have an energy project in mind?</h2>
        <a href="#/contact" class="btn btn-lime">Discuss Your Project &rarr;</a>
      </div>

    </section>

    <footer class="site-footer">
      <div class="container footer-bottom">
        <div>&copy; 2026 SOLV Energy. All rights reserved.</div>
      </div>
    </footer>
  `;
}
