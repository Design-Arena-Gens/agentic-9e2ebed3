## Agentic Operations Companion

This project showcases what an autonomous agent can deliver across research, creative, and operational workflows. The experience is built with Next.js (App Router), React Server Components, and Tailwind CSS v4.

### Features

- Hero narrative that explains the agent’s mandate and value metrics.
- Core capability cards outlining how research, creation, and automation are executed.
- Transparent workflow timeline describing how briefs move from discovery to deployment.
- Interactive scenario explorer demonstrating mission-specific playbooks.
- Toolbelt overview highlighting safety, observability, and collaboration guardrails.

### Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the experience locally. Lint with `npm run lint` and build with `npm run build` before deploying.

### Deployment

The app is optimized for Vercel. After installing dependencies and generating a production build, deploy with:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-9e2ebed3
```

Once the deployment is live, verify using:

```bash
curl https://agentic-9e2ebed3.vercel.app
```
