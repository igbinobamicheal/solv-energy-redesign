// CONTACT PAGE VIEW RENDERER
export function renderContact() {
  return `
    <section class="hero-section" style="min-height: 50vh;">
      <div class="hero-bg-container">
        <img src="/assets/high_voltage_substation.png" alt="Contact SOLV Energy" class="hero-bg-image">
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content-wrapper" style="padding-top: 6rem;">
        <div class="hero-text-block">
          <span class="eyebrow eyebrow-lime">GET IN TOUCH</span>
          <h1 class="hero-title">Let's Build <span class="highlight-blue">What's Next</span></h1>
          <p class="hero-subtitle">Connect with our EPC, High Voltage, and O&M project experts to discuss scope, timeline, and interconnection requirements.</p>
        </div>
      </div>
    </section>



    <!-- CONTACT FORM & DETAILS SECTION -->
    <section class="contact-cta-section" style="padding-top: 2rem;">
      <div class="container contact-box">
        <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 4rem; margin-bottom: 4rem;">
          <div>
            <h3 style="font-size: 2rem; margin-bottom: 1.5rem;">Corporate Headquarters</h3>
            <p style="line-height: 1.8; color: rgba(255,255,255,0.85); font-size: 1.05rem;">
              <strong>SOLV Energy</strong><br>
              16680 West Bernardo Drive<br>
              San Diego, CA 92127<br><br>
              <strong>Phone:</strong> 858.251.4888<br>
              <strong>Inquiries:</strong> info@solvenergy.com
            </p>
          </div>

          <form class="contact-form-grid" onsubmit="event.preventDefault(); alert('Thank you for reaching out! A SOLV Energy representative will contact you shortly.');">
            <div class="form-group">
              <label class="form-label" for="c-fullname">Full Name *</label>
              <input type="text" id="c-fullname" class="form-input" placeholder="Your name" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="c-email">Email *</label>
              <input type="email" id="c-email" class="form-input" placeholder="Your email" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="c-interest">I'm Interested In</label>
              <select id="c-interest" class="form-select">
                <option value="Solar EPC">Solar EPC</option>
                <option value="High Voltage">High Voltage & Substations</option>
                <option value="BESS">Energy Storage (BESS)</option>
                <option value="O&M">Services & O&M</option>
                <option value="SCADA">SCADA/OTS</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="c-company">Company / Organization</label>
              <input type="text" id="c-company" class="form-input" placeholder="Company name">
            </div>

            <div class="form-group full-width">
              <label class="form-label" for="c-message">Project Scope / Details *</label>
              <textarea id="c-message" class="form-textarea" rows="4" placeholder="Describe project location, MW size, and schedule" required></textarea>
            </div>

            <div class="form-group full-width form-submit-row">
              <button type="submit" class="btn btn-lime">
                <span>Submit Inquiry</span>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M4.166 10h11.668M10 4.166L15.833 10 10 15.833" stroke="currentColor" stroke-width="2"/></svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <footer class="site-footer">
      <div class="container footer-bottom">
        <div>&copy; 2026 SOLV Energy. All rights reserved.</div>
      </div>
    </footer>
  `;
}
