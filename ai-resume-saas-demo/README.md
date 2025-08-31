
# CareerCraft AI — Demo (Next.js 14 + OpenAI)

A sleek, Stripe-free demo you can deploy in minutes. Users get **5 free generations** (stored client-side) to try a tailored **resume section + cover letter** generator.

## Features
- ⚡ Next.js 14 App Router + TypeScript
- 🧠 OpenAI-powered `/api/generate` (Edge runtime)
- 🧪 5 free runs per browser session (client-side counter)
- 🎨 Clean dark UI with simple marketing page

## Quickstart
```bash
cp .env.example .env.local   # add OPENAI_API_KEY
npm i
npm run dev
```

Open `http://localhost:3000` → Click **Try Free Demo** → Generate.

## Deploy (Vercel)
- Import this repo into Vercel
- Add environment variable: `OPENAI_API_KEY`
- Deploy

## Upgrade Path (when you're ready)
- Replace client-side counter with server-side rate limit (Upstash Redis)
- Add Stripe Checkout + webhooks + DB entitlements (Prisma + Postgres)
- Gate `/app` by auth (Clerk/NextAuth) + subscription
- PDF export & ATS score (great upsell)

## License
MIT
