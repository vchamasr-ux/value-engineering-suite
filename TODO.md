# TODO.md — Landing Page Checklist (Standalone + Email Notifications)

## Inputs (15 minutes)
- [ ] Confirm URLs:
  - [ ] Deal Engine URL
  - [ ] Value Benchmark URL
- [ ] Confirm landing site brand label: "Value Engineering Suite"
- [ ] Choose email provider (Resend/SendGrid/Mailgun)
- [ ] Set env vars in Vercel for email provider API key

## Repo + Deploy (30–60 minutes)
- [ ] Create new repo: marketing site
- [ ] Deploy to Vercel
- [ ] Add env vars in Vercel project settings

## Build v0 Page (2–4 hours)
- [ ] Header (brand + nav anchors)
- [ ] Hero with CTAs:
  - [ ] Launch Deal Engine
  - [ ] Run Value Benchmark
  - [ ] Request evaluation access (scroll)
- [ ] Credibility strip (general)
- [ ] Outcomes strip (3–5)
- [ ] Module cards (Deal Engine + Value Benchmark)
- [ ] Proof screenshots section
- [ ] How it works (3 steps)
- [ ] Outputs section (only what’s true today)
- [ ] Engagement options (Self-serve / Pilot / Evaluation)
- [ ] FAQ
- [ ] Footer (email + LinkedIn)

## Lead Form + Email Notify (1–2 hours)
- [ ] Lead form (email required)
- [ ] Intent dropdown: self-serve / pilot / evaluation
- [ ] Module interest captured (deal_engine/value_benchmark/both)
- [ ] /api/leads endpoint:
  - [ ] validates inputs (fail loudly if missing)
  - [ ] sends email to vchamasr@gmail.com
  - [ ] returns success
- [ ] Verify: you receive the email

## Analytics + SEO (1 hour)
- [ ] Track CTA clicks + lead_submit (include source_cta + intent + module_interest)
- [ ] Title/meta description + OG tags + OG image

## QA Gate (must pass)
- [ ] 390/768/1024/1280/1440 look great
- [ ] No horizontal scroll
- [ ] All CTAs route correctly
- [ ] Lead form sends email notification reliably
- [ ] No mention of "v1/v2" on landing page

## Launch
- [ ] Deploy
- [ ] Submit 2 test leads and confirm emails received
- [ ] Share link with 3 people for feedback
