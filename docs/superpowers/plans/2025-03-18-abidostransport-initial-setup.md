# Abidostransport Canada Initial Setup Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Set up monorepo structure and initialize core packages for abidostransport Canada vehicle transport website.

**Architecture:** Turborepo-based monorepo with Next.js frontends, Node.js API backend, and shared packages. Multi-developer friendly with clear package boundaries.

**Tech Stack:** Turborepo, Next.js 14, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Docker

---

## Chunk 1: Monorepo Foundation

### Task 1: Initialize Turborepo Monorepo

**Files:**
- Create: `package.json`
- Create: `turbo.json`
- Create: `.gitignore`
- Create: `README.md`

- [ ] **Step 1: Create root package.json**

```json
{
  "name": "abidostransport-canada",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "start": "turbo start",
    "lint": "turbo lint",
    "type-check": "turbo type-check",
    "test": "turbo test",
    "clean": "turbo clean"
  },
  "devDependencies": {
    "turbo": "^2.0.0",
    "typescript": "^5.0.0"
  },
  "packageManager": "npm@10.0.0"
}
```

- [ ] **Step 2: Create turbo.json configuration**

```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env*"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^build"]
    },
    "type-check": {
      "dependsOn": ["^build"]
    },
    "test": {
      "dependsOn": ["^build"]
    }
  }
}
```

- [ ] **Step 3: Create .gitignore file**

```gitignore
# Dependencies
node_modules/
.pnpm-debug.log*

# Build outputs
.next/
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Coverage
coverage/
.nyc_output

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Docker
docker-compose.override.yml
```

- [ ] **Step 4: Create README.md**

```markdown
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
```

### Task 2: Create Package Structure

**Files:**
- Create: `packages/web/package.json`
- Create: `packages/admin/package.json`
- Create: `packages/api/package.json`
- Create: `packages/shared/package.json`

- [ ] **Step 1: Create web package.json**

```json
{
  "name": "@abidostransport/web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@abidostransport/shared": "*",
    "next": "14.x",
    "react": "^18",
    "react-dom": "^18",
    "tailwindcss": "^3.0.0",
    "typescript": "^5.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0"
  }
}
```

- [ ] **Step 2: Create admin package.json**

```json
{
  "name": "@abidostransport/admin",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@abidostransport/shared": "*",
    "next": "14.x",
    "react": "^18",
    "react-dom": "^18",
    "tailwindcss": "^3.0.0",
    "typescript": "^5.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0"
  }
}
```

- [ ] **Step 3: Create api package.json**

```json
{
  "name": "@abidostransport/api",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "lint": "eslint src --ext .ts",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@abidostransport/shared": "*",
    "@prisma/client": "^5.0.0",
    "express": "^4.18.0",
    "cors": "^2.8.5",
    "helmet": "^7.0.0",
    "zod": "^3.0.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.0",
    "@types/cors": "^2.8.0",
    "@types/node": "^20.0.0",
    "tsx": "^4.0.0",
    "typescript": "^5.0.0",
    "prisma": "^5.0.0"
  }
}
```

- [ ] **Step 4: Create shared package.json**

```json
{
  "name": "@abidostransport/shared",
  "version": "0.1.0",
  "private": true,
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "lint": "eslint src --ext .ts"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0"
  }
}
```

### Task 3: Initialize Next.js Configurations

**Files:**
- Create: `packages/web/next.config.js`
- Create: `packages/web/tailwind.config.js`
- Create: `packages/web/postcss.config.js`
- Create: `packages/web/tsconfig.json`
- Create: `packages/admin/next.config.js`
- Create: `packages/admin/tailwind.config.js`
- Create: `packages/admin/postcss.config.js`
- Create: `packages/admin/tsconfig.json`

- [ ] **Step 1: Create web Next.js config**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@abidostransport/shared'],
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
```

- [ ] **Step 2: Create web Tailwind config**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 3: Create web PostCSS config**

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 4: Create web TypeScript config**

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"],
      "@abidostransport/shared": ["../shared/src"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 5: Repeat Steps 1-4 for admin package**

Create identical configurations in `packages/admin/` directory.

---

## Chunk 2: Development Environment

### Task 4: Set up Docker Development Environment

**Files:**
- Create: `docker-compose.yml`
- Create: `.env.example`
- Create: `scripts/setup-dev.sh`

- [ ] **Step 1: Create docker-compose.yml**

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: abidostransport
      POSTGRES_PASSWORD: abidostransport123
      POSTGRES_DB: abidostransport
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U abidostransport"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  postgres_data:
```

- [ ] **Step 2: Create .env.example file**

```env
# Database
DATABASE_URL="postgresql://abidostransport:abidostransport123@localhost:5432/abidostransport?schema=public"

# Web
NEXT_PUBLIC_API_URL="http://localhost:3001"
NEXT_PUBLIC_SITE_NAME="Abidostransport Canada"

# API
API_PORT=3001
API_HOST="0.0.0.0"
JWT_SECRET="change-this-in-production"
```

- [ ] **Step 3: Create development setup script**

```bash
#!/bin/bash
# scripts/setup-dev.sh

echo "Setting up Abidostransport Canada development environment..."

# Copy environment file
if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env file from .env.example"
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Start Docker services
echo "Starting Docker services..."
docker-compose up -d

# Wait for PostgreSQL to be ready
echo "Waiting for PostgreSQL to be ready..."
sleep 5

# Initialize database
echo "Initializing database..."
cd packages/api
npx prisma db push
cd ../..

echo "Development environment setup complete!"
echo ""
echo "To start development servers:"
echo "  npm run dev"
echo ""
echo "Access services:"
echo "  Web: http://localhost:3000"
echo "  Admin: http://localhost:3002"
echo "  API: http://localhost:3001"
echo "  PostgreSQL: localhost:5432"
```

Make executable:
```bash
chmod +x scripts/setup-dev.sh
```

### Task 5: Set up API Backend Foundation

**Files:**
- Create: `packages/api/src/index.ts`
- Create: `packages/api/src/middleware/errorHandler.ts`
- Create: `packages/api/src/middleware/validation.ts`
- Create: `packages/api/prisma/schema.prisma`

- [ ] **Step 1: Create API entry point**

```typescript
// packages/api/src/index.ts
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { errorHandler } from './middleware/errorHandler'

const app = express()
const PORT = process.env.API_PORT || 3001

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json())

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// API routes will be added here
// app.use('/api/v1/bookings', bookingRoutes)

// Error handling
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`)
})
```

- [ ] **Step 2: Create error handler middleware**

```typescript
// packages/api/src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express'

export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational = true
  ) {
    super(message)
    Object.setPrototypeOf(this, AppError.prototype)
  }
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  }

  console.error('Unhandled error:', err)
  
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
}
```

- [ ] **Step 3: Create validation middleware**

```typescript
// packages/api/src/middleware/validation.ts
import { Request, Response, NextFunction } from 'express'
import { AnyZodObject, ZodError } from 'zod'
import { AppError } from './errorHandler'

export const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        next(new AppError(400, 'Validation error', true))
      } else {
        next(error)
      }
    }
  }
```

- [ ] **Step 4: Create Prisma schema**

```prisma
// packages/api/prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  phone     String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  bookings Booking[]
}

model Vehicle {
  id           String   @id @default(cuid())
  make         String
  model        String
  year         Int
  vin          String?
  licensePlate String?
  color        String?
  createdAt    DateTime @default(now())
  
  bookings Booking[]
}

model Booking {
  id               String   @id @default(cuid())
  userId           String
  vehicleId        String
  pickupAddress    String
  deliveryAddress  String
  pickupDate       DateTime
  deliveryDate     DateTime?
  status           BookingStatus @default(PENDING)
  quoteAmount      Decimal
  finalAmount      Decimal?
  notes            String?
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
  
  user   User   @relation(fields: [userId], references: [id])
  vehicle Vehicle @relation(fields: [vehicleId], references: [id])
  
  @@index([userId])
  @@index([status])
}

enum BookingStatus {
  PENDING
  CONFIRMED
  IN_TRANSIT
  DELIVERED
  CANCELLED
}
```

---

## Chunk 3: Shared Package Setup

### Task 6: Initialize Shared Package

**Files:**
- Create: `packages/shared/src/index.ts`
- Create: `packages/shared/src/types/index.ts`
- Create: `packages/shared/src/utils/index.ts`
- Create: `packages/shared/tsconfig.json`

- [ ] **Step 1: Create shared types**

```typescript
// packages/shared/src/types/index.ts
export interface User {
  id: string
  email: string
  name?: string
  phone?: string
  createdAt: Date
}

export interface Vehicle {
  id: string
  make: string
  model: string
  year: number
  vin?: string
  licensePlate?: string
  color?: string
  createdAt: Date
}

export type BookingStatus = 
  | 'PENDING'
  | 'CONFIRMED'
  | 'IN_TRANSIT'
  | 'DELIVERED'
  | 'CANCELLED'

export interface Booking {
  id: string
  userId: string
  vehicleId: string
  pickupAddress: string
  deliveryAddress: string
  pickupDate: Date
  deliveryDate?: Date
  status: BookingStatus
  quoteAmount: number
  finalAmount?: number
  notes?: string
  createdAt: Date
  updatedAt: Date
  user?: User
  vehicle?: Vehicle
}

export interface QuoteRequest {
  vehicleMake: string
  vehicleModel: string
  vehicleYear: number
  pickupPostalCode: string
  deliveryPostalCode: string
  pickupDate: Date
}

export interface QuoteResponse {
  quoteId: string
  amount: number
  estimatedDeliveryDate: Date
  breakdown: {
    baseRate: number
    distanceFee: number
    vehicleTypeFee: number
    serviceFee: number
  }
}
```

- [ ] **Step 2: Create shared utilities**

```typescript
// packages/shared/src/utils/index.ts
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format(amount)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    dateStyle: 'medium',
  }).format(date)
}

export function calculateDistance(
  pickupPostalCode: string,
  deliveryPostalCode: string
): number {
  // Simplified distance calculation
  // In production, integrate with Google Maps API or postal code database
  return Math.abs(
    parseInt(pickupPostalCode.substring(0, 3)) -
    parseInt(deliveryPostalCode.substring(0, 3))
  ) * 10
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/
  return phoneRegex.test(phone)
}
```

- [ ] **Step 3: Create shared package entry point**

```typescript
// packages/shared/src/index.ts
export * from './types'
export * from './utils'
```

- [ ] **Step 4: Create shared TypeScript config**

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Task 7: Create Basic Web Pages Structure

**Files:**
- Create: `packages/web/app/page.tsx`
- Create: `packages/web/app/layout.tsx`
- Create: `packages/web/app/globals.css`
- Create: `packages/admin/app/page.tsx`
- Create: `packages/admin/app/layout.tsx`
- Create: `packages/admin/app/globals.css`

- [ ] **Step 1: Create web homepage**

```tsx
// packages/web/app/page.tsx
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Abidostransport Canada
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Professional vehicle transport services across Quebec and Ontario
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Get a Quote</h2>
            <p className="text-gray-600 mb-4">
              Instant online quotes for vehicle transport
            </p>
            <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700">
              Get Started
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Our Services</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Car transport across Quebec & Ontario</li>
              <li>• Snowbirds seasonal service</li>
              <li>• Dealer and auction transport</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-2">Phone: 1-800-ABIDOS</p>
            <p className="text-gray-600">Email: info@abidostransport.ca</p>
          </div>
        </div>
      </main>
    </div>
  )
}
```

- [ ] **Step 2: Create web layout**

```tsx
// packages/web/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abidostransport Canada - Vehicle Transport Services',
  description: 'Professional vehicle transport services across Quebec and Ontario',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold text-primary-700">
                Abidostransport
              </div>
              <div className="space-x-4">
                <a href="/" className="text-gray-700 hover:text-primary-600">
                  Home
                </a>
                <a href="/services" className="text-gray-700 hover:text-primary-600">
                  Services
                </a>
                <a href="/quote" className="text-gray-700 hover:text-primary-600">
                  Get Quote
                </a>
                <a href="/contact" className="text-gray-700 hover:text-primary-600">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <p className="text-center">
              © 2024 Abidostransport Canada. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
```

- [ ] **Step 3: Create web global styles**

```css
/* packages/web/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --foreground-rgb: 0, 0, 0;
    --background-rgb: 255, 255, 255;
  }

  body {
    color: rgb(var(--foreground-rgb));
    background: rgb(var(--background-rgb));
  }
}
```

- [ ] **Step 4: Repeat Steps 1-3 for admin package**

Create similar structure in `packages/admin/` with admin-specific content.

---

## Chunk 4: Testing and Quality Setup

### Task 8: Set up Testing Framework

**Files:**
- Create: `packages/api/jest.config.js`
- Create: `packages/api/tests/health.test.ts`
- Create: `packages/web/jest.config.js`
- Create: `packages/web/tests/homepage.test.tsx`

- [ ] **Step 1: Create API Jest config**

```javascript
// packages/api/jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/tests/**/*.test.ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/index.ts',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
}
```

- [ ] **Step 2: Create API health test**

```typescript
// packages/api/tests/health.test.ts
import request from 'supertest'
import { app } from '../src/index'

describe('Health Check', () => {
  it('should return health status', async () => {
    const response = await request(app).get('/health')
    
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('status', 'ok')
    expect(response.body).toHaveProperty('timestamp')
  })
})
```

- [ ] **Step 3: Create web Jest config**

```javascript
// packages/web/jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/tests/**/*.test.tsx'],
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    '!**/*.d.ts',
  ],
}

module.exports = createJestConfig(customJestConfig)
```

- [ ] **Step 4: Create web homepage test**

```tsx
// packages/web/tests/homepage.test.tsx
import { render, screen } from '@testing-library/react'
import HomePage from '../app/page'

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />)
    
    expect(screen.getByText('Abidostransport Canada')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<HomePage />)
    
    expect(screen.getByText('Get a Quote')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })
})
```

### Task 9: Set up ESLint and Prettier

**Files:**
- Create: `.eslintrc.js`
- Create: `.prettierrc`
- Create: `.eslintignore`
- Create: `.prettierignore`

- [ ] **Step 1: Create ESLint configuration**

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
```

- [ ] **Step 2: Create Prettier configuration**

```json
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

- [ ] **Step 3: Create ESLint ignore file**

```gitignore
node_modules/
dist/
.next/
coverage/
*.log
```

- [ ] **Step 4: Create Prettier ignore file**

```gitignore
node_modules/
dist/
.next/
coverage/
package-lock.json
yarn.lock
```

---

## Chunk 5: GitHub Setup and Documentation

### Task 10: Set up GitHub Repository and Workflows

**Files:**
- Create: `.github/workflows/ci.yml`
- Create: `.github/workflows/cd.yml`
- Create: `.github/PULL_REQUEST_TEMPLATE.md`
- Create: `CONTRIBUTING.md`

- [ ] **Step 1: Create CI workflow**

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:16-alpine
        env:
          POSTGRES_USER: abidostransport
          POSTGRES_PASSWORD: abidostransport123
          POSTGRES_DB: abidostransport
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432

    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Type check
      run: npm run type-check
    
    - name: Lint
      run: npm run lint
    
    - name: Build
      run: npm run build
    
    - name: Test
      run: npm run test
      env:
        DATABASE_URL: postgresql://abidostransport:abidostransport123@localhost:5432/abidostransport?schema=public
```

- [ ] **Step 2: Create CD workflow**

```yaml
# .github/workflows/cd.yml
name: CD

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to production
      run: echo "Deployment would happen here"
      # Add actual deployment steps based on hosting platform
```

- [ ] **Step 3: Create pull request template**

```markdown
## Description
<!-- Describe your changes in detail -->

## Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing performed

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code where necessary
- [ ] I have made corresponding changes to documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective
- [ ] New and existing unit tests pass locally

## Screenshots (if applicable)
<!-- Add screenshots to help explain your changes -->

## Related Issues
<!-- Link to any related issues -->

Closes #
```

- [ ] **Step 4: Create contributing guidelines**

```markdown
# Contributing to Abidostransport Canada

Thank you for your interest in contributing!

## Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run test
   npm run lint
   npm run type-check
   ```
5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: description of your changes"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

## Code Style

- Use TypeScript with strict mode
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Add tests for new functionality
- Update documentation as needed

## Branch Naming Convention

- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Urgent production fixes
- `docs/*` - Documentation updates
- `chore/*` - Maintenance tasks

## Testing

- Write unit tests for new functionality
- Ensure all tests pass before submitting PR
- Test edge cases and error conditions

## Pull Request Process

1. Ensure your PR description clearly describes the changes
2. Link any related issues
3. Request reviews from team members
4. Address all review comments
5. Wait for CI checks to pass
6. Merge when approved

## Questions?

Feel free to open an issue for any questions or concerns.
```

---

**Plan complete and saved to `docs/superpowers/plans/2025-03-18-abidostransport-initial-setup.md`. Ready to execute?**