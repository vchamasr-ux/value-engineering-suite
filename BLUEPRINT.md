# BLUEPRINT.md — Landing Page Build Plan (Standalone Vercel Site)

## Phase 0 — Repo + Deployment
1. Create a new repo for the marketing site (separate from product repos).
2. Deploy it as a standalone Vercel project.
3. Configure environment variables for email provider API keys.

## Phase 1 — Page Skeleton
1. Build `/` page sections:
   - Header / Hero / Credibility / Outcomes / Module Cards / Proof / How It Works / Outputs / Engagement Options / FAQ / Footer
2. Add CTA buttons:
   - Launch Deal Engine (external link)
   - Run Value Benchmark (external link)
   - Request evaluation access (scroll to lead form)

## Phase 2 — CTA Routing
- Launch Deal Engine -> Deal Engine URL
- Run Value Benchmark -> Value Benchmark URL
- Request evaluation access -> #evaluation anchor

## Phase 3 — Lead Form + Email Notification (required)
1. LeadForm fields:
   - email (required)
   - intent (self-serve / pilot / evaluation)
   - module_interest (default inferred from CTA click; allow "both")
2. Server endpoint:
   - POST /api/leads
   - Validates required fields
   - Sends email to vchamasr@gmail.com with payload
   - Returns success response
3. Success state:
   - Self-serve: show links to both modules
   - Pilot/Eval: show "Thanks—Vincent will reply by email."

## Phase 4 — Proof Assets
1. Add optimized screenshots:
   - Deal Engine screenshot
   - Value Benchmark screenshot(s)
2. Optional: short GIF/video later

## Phase 5 — Analytics + SEO
1. Add ONE analytics provider.
2. Track CTA clicks + lead_submit.
3. Add SEO metadata + OG image.

## Phase 6 — QA Gate + Deploy
1. Responsive QA at all widths.
2. Confirm:
   - CTA routes
   - Lead form submission
   - Email received at vchamasr@gmail.com
   - Analytics events visible in production
