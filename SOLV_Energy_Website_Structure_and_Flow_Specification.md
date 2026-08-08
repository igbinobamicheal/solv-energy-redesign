# SOLV ENERGY — COMPLETE WEBSITE STRUCTURE, FLOW & INTERACTION SPECIFICATION

## 1. Core Experience Direction

Redesign the existing SOLV Energy website as a premium, modern, immersive energy/infrastructure website while preserving the existing SOLV Energy visual identity.

The website should feel:
- Premium
- Technical
- Trustworthy
- Modern
- Clean
- Energetic
- Enterprise-grade
- Cinematic without becoming distracting
- Highly interactive
- Extremely responsive
- Fast and snappy

The central design principle:

> The entire website should feel like one connected story about energy, infrastructure, execution, impact and future growth.

Do not make each page feel like an isolated template. Every page should have a clear beginning, middle and end, and the ending of one page should visually/structurally lead into the next.

Use smooth transitions, shared visual elements, curved section boundaries, subtle parallax, progressive image reveals and directional page transitions to create continuity.

---

## 2. Global Visual Language

Maintain the existing SOLV Energy identity.

### Primary colors

Use the existing palette prominently:
- SOLV blue
- Deep navy
- White
- Very light blue
- Bright lime/green accent
- Dark charcoal for footer
- Subtle cyan/blue gradients

Do not introduce random colors.

Use the lime accent primarily for:
- CTA buttons
- Active states
- Important statistics
- Small highlights
- Progress indicators
- Interactive elements

Blue should remain the dominant brand color.

---

## 3. Global Header

Create a persistent desktop navigation:

```text
SOLV ENERGY LOGO

Who We Are
What We Do
Projects
Impact
Investors
Careers
News

[Let's Connect →]
```

### Header behavior

At the top:
- Transparent
- White text where appropriate
- Logo remains visible

After scrolling:
- Header becomes fixed
- Background transitions into a semi-transparent white/blue glass surface
- Text changes to dark navy
- Slight blur
- Very subtle shadow
- Height decreases slightly

The transition should be smooth. Do not make the header jump.

---

## 4. Page Transition System

When navigating between pages, do not simply reload the page abruptly.

Use a short branded transition:
1. Current page content subtly fades/slides away.
2. A SOLV-blue transition layer expands across the screen.
3. A subtle SOLV logo/energy-ring animation appears.
4. New page enters with a vertical reveal.
5. User lands at the top of the new page.

Target duration:

```text
250–500ms
```

It should feel premium, not like a loading screen.

---

# 5. Homepage Flow

The homepage should be the primary storytelling experience.

```text
HEADER
↓
HERO
↓
INTRODUCTION
↓
OUR FOCUS
↓
IMPACT / SCALE
↓
FEATURED PROJECT
↓
TESTIMONIAL
↓
CONTACT CTA
↓
FOOTER
```

---

## 6. Hero Section

Use a full viewport solar-energy landscape image/video.

Prefer:
- Utility-scale solar farm
- Drone footage
- Sunrise/sunset
- Subtle atmospheric movement

### Layout

Left side:

```text
Powering Progress
with Proven Execution
```

Highlight "Execution" with SOLV blue/lime accent.

Below:

> We build, operate and optimize solar, storage and critical energy infrastructure.

Buttons:

```text
[Explore Our Work →]
[Watch Video ○]
```

Add a small scroll indicator:

```text
↓
SCROLL TO EXPLORE
```

### Hero interaction

The background should have extremely subtle parallax.

As the user scrolls:
- Image moves slightly slower than content
- Headline moves upward
- Energy-ring graphic rotates very slowly
- Text fades out gradually
- Bottom curved edge expands into the next section

Do not overdo parallax.

---

## 7. Hero → Introduction Transition

Instead of a hard rectangular section boundary, create a large curved/wave transition.

The curve should animate subtly as the user enters the next section.

This establishes the visual language for the entire site.

---

## 8. Introduction / Who We Are Preview

Create a two-column layout.

### Left

Eyebrow:

```text
BUILDING BIG. SCALING FAST.
```

Heading:

```text
Delivering the Power
Behind New Growth
```

Add a paragraph explaining SOLV Energy.

CTA:

```text
Learn More About Us →
```

### Right

Large solar/project image.

Overlay a floating statistics card:

```text
500+
Power Plants Constructed

21 GW
Installed Generating Capacity

150
Power Plants Under Management
```

### Interaction

When this section enters the viewport:
- Heading slides upward
- Paragraph fades in
- Image reveals using a masked expansion
- Statistics card slides upward from behind the image
- Numbers count upward

Example:

```text
0 → 500+
0 → 21 GW
0 → 150
```

---

# 9. Our Focus Section

Transition into a blue/solar-image section.

Heading:

```text
Our Focus
```

Subheading:

> End-to-end solutions for utility-scale energy assets.

Create five interactive service cards:

1. Solar
2. High Voltage
3. Energy Storage
4. Services & O&M
5. SCADA/OTS

Each card should contain:
- Icon
- Category
- Short description
- Learn More →
- Small lime accent

### Desktop behavior

Cards sit horizontally.

On hover:
- Card rises 8–12px
- Shadow increases
- Background slightly brightens
- Icon scales slightly
- Lime CTA becomes more prominent
- Background image subtly shifts

Only one card should be visually emphasized at a time.

### Scroll interaction

As the user scrolls into this section, cards should enter sequentially with approximately 70–100ms stagger.

---

# 10. Services Detail Flow

Clicking a service card should navigate to the relevant service page.

```text
Our Focus
   ↓
Solar
   ↓
Solar Service Detail
```

---

# 11. Service Detail Page Structure

Every service page should follow a consistent storytelling structure:

```text
Hero
↓
Service Introduction
↓
Capabilities
↓
Process
↓
Technology / Expertise
↓
Relevant Projects
↓
Results / Statistics
↓
CTA
↓
Next Service
```

The final section should include a contextual next destination such as:

```text
Next:
High Voltage →
```

This makes the services feel connected.

---

# 12. Capabilities Interaction

Instead of displaying long blocks of text, use expandable panels:

```text
01  Engineering & Design       +
02  Construction               +
03  Commissioning              +
04  Operations                 +
05  Maintenance                +
```

Clicking a row expands it.

Animation:
- Height expansion
- Text fade
- Icon rotation
- Small lime progress indicator

Only one or two items should be expanded at once.

---

# 13. Impact / Scale Section

Use a bold SOLV blue background.

Heading:

```text
Proven Scale.
Unmatched Experience.
```

Large numbers:

```text
500+
Power Plants Constructed

21 GW
Installed Generating Capacity

150
Power Plants Under Management
```

Use subtle technical line graphics in the background.

### Animation

Numbers should animate only when they become visible:

```text
0 → 500+
0 → 21 GW
0 → 150
```

Add subtle horizontal movement to background technical lines.

---

# 14. Projects Section

The Projects page should feel more immersive.

Hero:

```text
Projects
Where Proven Execution
Becomes Real-World Impact
```

Then introduce a large featured project.

---

# 15. Featured Project — Eiffel

Use the Eiffel project as the main showcase.

Large full-width image.

Overlay:

```text
FEATURED PROJECT

Eiffel

A utility-scale solar farm delivering clean energy
to power communities and drive sustainability.
```

CTA:

```text
View Project →
```

Floating information panel:

```text
PROJECT TYPE
Solar PV

LOCATION
Paris, TX

PROJECT SIZE
300 MWp
```

---

# 16. Project Carousel

Below Eiffel, create horizontally scrollable project cards.

Desktop:

```text
← Project 01 | Project 02 | Project 03 | Project 04 →
```

Mobile:
- Swipe horizontally
- Cards snap into position
- Show a small progress indicator such as 01 / 05

Cards should have:
- Image
- Project name
- Location
- Capacity
- Type
- Arrow

Dragging should have inertia. Do not make it feel like a basic Bootstrap carousel.

---

# 17. Project Detail Page

Project detail should follow:

```text
Project Hero
↓
Project Overview
↓
Project Statistics
↓
Gallery
↓
Challenge
↓
Solution
↓
Execution
↓
Impact
↓
Related Projects
↓
Contact CTA
```

### Gallery

Use a horizontal image gallery with:
- Drag
- Swipe
- Arrow controls
- Keyboard support

Images should transition smoothly.

---

# 18. Testimonial Section

Use a clean white section.

Large quotation marks in SOLV blue.

Centered testimonial:

> “SOLV Energy's commissioning planning and teams are top tier…”

Then:

```text
Chris Fox
Clearway Energy
```

Add small navigation indicators:

```text
● ○ ○
```

Users can switch testimonials.

Transition between testimonials using:
- Crossfade
- Slight horizontal movement

No aggressive carousel movement.

---

# 19. Who We Are Page

Structure:

```text
Hero
↓
Our Story
↓
Who We Are
↓
Leadership
↓
Our Values
↓
How We Work
↓
Impact
↓
CTA
```

Use alternating image/text layouts:

```text
IMAGE | TEXT

TEXT | IMAGE

IMAGE | TEXT
```

This prevents the page from feeling repetitive.

---

# 20. Leadership Section

Use a clean grid.

Each profile card:
- Photo
- Name
- Position
- LinkedIn/arrow

Hover:
- Image slightly zooms
- Information slides upward
- Blue overlay appears subtly

Click opens a profile drawer/modal rather than navigating unnecessarily.

---

# 21. Values Section

Create large horizontal panels:

```text
01
Safety

02
Integrity

03
Innovation

04
Performance
```

As the user scrolls, each value becomes active.

The background image/graphic changes subtly according to the selected value.

---

# 22. Impact Page

This page should feel data-driven.

Hero:

```text
Measuring Impact.
Building What Lasts.
```

Then:

```text
Energy Generated
Projects Completed
Capacity Delivered
Communities Served
Years of Experience
```

Use animated counters and interactive charts where meaningful.

Do not overload the page with charts.

The data should feel premium and editorial rather than like a dashboard.

---

# 23. Investors Page

Keep this page more corporate and structured.

Structure:

```text
Hero
↓
Investment Overview
↓
Key Metrics
↓
Company Performance
↓
Reports & Documents
↓
Investor Resources
↓
Contact
```

Use clean tables/cards.

Documents should appear as:

```text
Annual Report 2026       PDF →
Investor Presentation    PDF →
Financial Results        PDF →
```

Hover interaction should be subtle.

---

# 24. Careers Page

Hero:

```text
Build What Powers Tomorrow.
```

Then:

```text
Why SOLV
↓
Life at SOLV
↓
Teams
↓
Open Positions
↓
Employee Experience
↓
CTA
```

Job listings should be interactive.

Example:

```text
Senior Electrical Engineer
Texas
Engineering

VIEW ROLE →
```

Clicking opens an expandable job detail rather than immediately navigating away.

---

# 25. News Page

Create editorial cards.

Featured article:
- Large image
- Headline

Then:

```text
Latest News
```

Grid:

```text
[Article] [Article] [Article]
[Article] [Article] [Article]
```

Filters:

```text
All
Company
Projects
Industry
Insights
```

Filter transitions should animate rather than abruptly replace cards.

---

# 26. Contact Page

The contact page should feel like the culmination of the entire website.

Hero:

```text
Let's Build What's Next.
```

### Form layout

Desktop:

```text
Full Name             Email

I'm interested in     Company

Message

[Get In Touch →]
```

Use floating labels or clean animated labels.

### Input interactions

When focused:
- Border changes to SOLV blue
- Small lime indicator appears
- Label moves upward
- Subtle glow

Validation should happen inline rather than only on submission.

---

# 27. Contact CTA Between Pages

Every major page should end with a contextual CTA.

### Who We Are

```text
Ready to see what we can build?
Explore Our Projects →
```

### What We Do

```text
Have an energy project in mind?
Discuss Your Project →
```

### Projects

```text
Let's build the next one.
Start a Conversation →
```

### Careers

```text
Build the future with us.
View Open Positions →
```

This keeps the website flowing.

---

# 28. Footer

Use a dark charcoal/navy footer.

Structure:

```text
SOLV ENERGY

Address
Contact

Quick Links
Who We Are
What We Do
Projects
Impact
Investors
Careers
News

Solutions
Solar
High Voltage
Energy Storage
Services & O&M
SCADA/OTS

Stay Updated
[Email]
[Subscribe →]
```

Bottom:

```text
© 2026 SOLV Energy

Privacy Policy
Terms
Cookies
```

Social icons should be small and restrained.

---

# 29. Continuous Page Flow

This is one of the most important requirements.

Every page should have:

```text
HEADER
↓
PAGE HERO
↓
INTRODUCTION
↓
PRIMARY CONTENT
↓
INTERACTIVE CONTENT
↓
RELATED CONTENT
↓
NEXT STEP
↓
CTA
↓
FOOTER
```

The visual language of the final section should connect to the beginning of the next page.

For example:

```text
PROJECTS
       ↓
Featured Project
       ↓
Related Projects
       ↓
"Want to build something similar?"
       ↓
CONTACT
```

And:

```text
WHAT WE DO
       ↓
Solar
       ↓
High Voltage
       ↓
Storage
       ↓
O&M
       ↓
SCADA
       ↓
Projects using these capabilities
```

The user should constantly have a logical next destination.

---

# 30. Scroll Animation System

Use scroll animations carefully.

Elements should animate when entering the viewport.

Use:
- Fade-up
- Fade-in
- Mask reveal
- Horizontal slide
- Scale reveal
- Number counter
- Image parallax
- Text splitting
- Line drawing

Avoid:
- Excessive bouncing
- Huge rotations
- Constant zooming
- Long delays
- Animations that slow navigation

### Timing

Standard:
```text
400–700ms
```

Micro interactions:
```text
150–250ms
```

Page transitions:
```text
300–500ms
```

Stagger:
```text
50–120ms
```

---

# 31. Scroll-Based Storytelling

Some major sections should use scroll progression.

For example, the Services section:

```text
Scroll
 ↓
Solar becomes active
 ↓
High Voltage becomes active
 ↓
Storage becomes active
 ↓
O&M becomes active
 ↓
SCADA becomes active
```

The background can subtly shift while the content changes.

This should create the feeling that the user is moving through the SOLV energy ecosystem.

---

# 32. Micro-Interactions

Buttons should never feel static.

Default:

```text
[ Explore Our Work → ]
```

Hover:
- Arrow moves slightly right
- Lime buttons can have a subtle light sweep
- Cards lift slightly
- Links use animated underlines
- Images use extremely subtle zoom effects

---

# 33. Custom Cursor — Desktop Only

Optional but recommended.

Use a subtle custom cursor.

Normal:
- Small circle

Hovering over:
- CTA → circle expands
- Image → shows "View"
- Project → shows "Explore"
- Drag gallery → shows "Drag"

Do not use this on mobile.

---

# 34. Mobile Experience

Mobile must not simply be a shrunk desktop website. It needs its own layout logic.

### Mobile header

```text
SOLV LOGO                       ☰
```

Menu opens full-screen or large overlay.

Menu items:

```text
Who We Are
What We Do
Projects
Impact
Investors
Careers
News

[Let's Connect →]
```

Menu items should stagger into view.

---

# 35. Mobile Hero

Use approximately 75–90vh.

Large responsive headline:

```text
Powering Progress
with Proven
Execution
```

Buttons stack:

```text
[Explore Our Work]
[Watch Video]
```

The hero image should remain readable and text should not overlap important parts of the image.

---

# 36. Mobile Service Cards

Do not force five cards into one row.

Preferred:
- Horizontal swipe carousel
- Snap-to-card behavior
- Progress indicator such as `01 / 05`

Cards should feel native to touch devices.

---

# 37. Mobile Projects

Project images should become full-width.

Information should sit below the image rather than being crammed over it.

```text
IMAGE

Eiffel
Paris, TX
300 MWp

[View Project →]
```

---

# 38. Mobile Forms

All form fields should become one column:

```text
Name

Email

Interest

Company

Message

[Get In Touch →]
```

Touch targets should be at least approximately 44px.

---

# 39. Responsive Breakpoints

Design intentionally for:

```text
320px
375px
390px
414px
768px
1024px
1280px
1440px
1920px+
```

Do not rely only on standard desktop/mobile breakpoints. Test intermediate widths.

---

# 40. Performance

The site must remain extremely responsive despite animations.

Prioritize:
- Lazy-loaded images
- Optimized WebP/AVIF
- Responsive image sizes
- Lazy-loaded videos
- GPU-friendly transforms
- `transform` and `opacity` animations
- Avoid expensive layout animations
- Avoid excessive blur
- Avoid huge DOM-heavy animation systems

Animations should not cause scrolling to become janky.

Target:

```text
60fps
```

where possible.

---

# 41. Reduced Motion

Respect:

```text
prefers-reduced-motion
```

If enabled:
- Disable parallax
- Disable elaborate page transitions
- Remove large movement
- Keep simple fades
- Preserve functionality

---

# 42. Accessibility

Include:
- Keyboard navigation
- Visible focus states
- Proper semantic headings
- Alt text
- ARIA labels where necessary
- Accessible forms
- Keyboard-accessible carousels
- Proper contrast
- Reduced-motion support

Do not sacrifice accessibility for aesthetics.

---

# 43. Navigation Experience

The navigation should always tell the user where they are.

Example:

```text
Who We Are
     ↓
Our Story
     ↓
Leadership
     ↓
Values
```

Use subtle active-state indicators.

On desktop, use a small lime/blue active indicator. On mobile, highlight the current page.

---

# 44. Loading Experience

Initial load may use a very short branded loader:

```text
SOLV ENERGY
      ◉
```

The energy-ring icon can draw itself.

Only show a loader if necessary. Never create a fake 3–5 second loading screen.

If the site loads immediately, skip the loader.

---

# 45. Image Interactions

Images should feel alive without being gimmicky.

### Image reveal

Images begin slightly masked and reveal as they enter the viewport.

### Hover

Use a very subtle scale:

```text
1.00 → 1.03
```

### Parallax

Keep movement extremely subtle, around:

```text
-10px to +10px
```

---

# 46. Curved Section Design

Use the curved/wave transitions from the existing visual language consistently.

These can be created with:
- SVG
- CSS border radius
- Clip-path
- Masking

Prefer performant approaches.

Do not use random curves everywhere. They should appear at major narrative transitions.

---

# 47. Overall Story

The user journey should tell this story:

```text
WE POWER PROGRESS
        ↓
HERE'S WHO WE ARE
        ↓
HERE'S WHAT WE DO
        ↓
HERE'S HOW WE EXECUTE
        ↓
HERE'S THE SCALE WE'VE ACHIEVED
        ↓
HERE'S THE WORK WE'VE DELIVERED
        ↓
HERE'S THE IMPACT
        ↓
HERE'S WHAT OUR CLIENTS SAY
        ↓
NOW LET'S BUILD SOMETHING TOGETHER
```

This is the central UX philosophy.

---

# 48. Final Implementation Principle

Do not build this as a collection of generic corporate website sections.

Build it as an interactive visual narrative.

Every scroll should reveal something.

Every animation should have a purpose.

Every page should naturally lead somewhere.

Every CTA should have a logical next action.

Every image should reinforce the energy/infrastructure story.

Every transition should feel like the user is moving deeper into the SOLV ecosystem.

The experience should feel like:

> A premium energy company telling one continuous story from vision → capability → execution → impact → partnership.

## Final Priority

### FAST FIRST. BEAUTIFUL SECOND.

Animations must complement the experience, never delay it.

The website should feel instant, fluid and responsive on desktop, tablet and mobile while retaining the sophisticated SOLV Energy identity throughout.
