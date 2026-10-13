#!/bin/sh
set -e

cd /server/apps/backend/.medusa/server

test -f public/admin/index.html

echo "Running database migrations..."
pnpm medusa db:migrate

echo "Starting backend server..."
exec pnpm start
