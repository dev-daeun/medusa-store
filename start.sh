#!/bin/sh
set -e

cd /server/apps/backend

echo "Running database migrations..."
pnpm medusa db:migrate

echo "Starting backend server..."
exec pnpm start
