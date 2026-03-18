# Abidostransport Canada

Vehicle transport website for Quebec and Ontario markets.

## Project Structure

Monorepo using Turborepo:

```
packages/
├── web/           # Customer-facing website (Next.js)
├── admin/         # Admin dashboard (Next.js)
├── api/           # Backend API services
└── shared/        # Shared components and types
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development servers:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Start production:
```bash
npm start
```

## Environment Setup

Copy `.env.example` to `.env` and configure:
- Database connection
- API keys
- Environment variables

## Team Collaboration

- Use feature branches
- Create pull requests for review
- Follow commit message conventions