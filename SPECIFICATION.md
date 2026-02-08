# SPECIFICATION.md — Landing Page (Value Engineering Suite)

## 1) Objective
Create a premium single-page marketing site (deployed on Vercel) that:
- Presents a cohesive "Value Engineering Suite" with two modules:
  - Deal Engine (Business Case Builder)
  - Value Benchmark (Benchmarking app)
- Captures leads via an email form and notifies you directly at vchamasr@gmail.com.
- Keeps positioning broad across Strategy / Transformation / Value Advisory.
- Avoids internal naming like "v1/v2" on the landing page.

## 2) Public Naming (No versioning)
Umbrella:
- Value Engineering Suite

Modules:
- Deal Engine — Business Case Builder (multi-year cashflows + exports, only claim what's true)
- Value Benchmark — Benchmarking & peer context app

## 3) Primary CTAs
- Primary: Launch Deal Engine
- Secondary: Run Value Benchmark
- Tertiary: Request evaluation access (goes to lead form)

## 4) Lead Capture Requirements (Email Notification)
When a visitor submits the lead form:
- The system MUST send an email notification to: vchamasr@gmail.com
- The email MUST include:
  - Visitor email
  - Intent: self-serve / pilot / evaluation
  - Module interest: deal_engine / value_benchmark / both
  - Source CTA: which CTA initiated the form
  - Timestamp + page URL + referrer

Implementation note:
- Use an email delivery provider/API (e.g., Resend/SendGrid/Mailgun). Do not rely on client-side mailto.

## 5) Target Audiences
Primary:
- GTM / Sales / Product / Strategy leaders in fintech/banking tech selling into banks
Secondary:
- Hiring managers / execs building Strategy / Transformation / Value Engineering capabilities

## 6) Page Structure (Single Page)
1. Header
2. Hero (headline + subhead + 2 module CTAs)
3. Credibility strip (general, non-specific)
4. Outcomes strip (3–5 outcomes)
5. Module cards (Deal Engine + Value Benchmark)
6. Proof (screenshots)
7. How it works (3 steps)
8. Outputs (only what’s true today)
9. Engagement options (Self-serve / Pilot / Evaluation)
10. FAQ
11. Footer (email + LinkedIn)

## 7) Analytics (Minimal)
Track:
- cta_launch_deal_engine_click
- cta_run_value_benchmark_click
- cta_request_eval_click
- lead_submit (intent + module_interest + source_cta)

## 8) Non-functional Requirements
- Responsive: 390 / 768 / 1024 / 1280 / 1440
- No horizontal scroll
- Fast load (optimized images)
- SEO: title/description + OG tags

## 9) Acceptance Criteria (DoD)
- Landing page is deployed on Vercel as its own site.
- CTAs route correctly to both modules.
- Lead form submits successfully AND sends an email to vchamasr@gmail.com containing required metadata.
- Looks premium on laptop widths (1280×720 / 1366×768).
- No "v1/v2" language appears anywhere on the landing page.
