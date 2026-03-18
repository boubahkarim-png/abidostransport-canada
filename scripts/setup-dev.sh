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