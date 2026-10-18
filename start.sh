#!/bin/sh
set -e

cd /server/apps/backend/.medusa/server

test -f public/admin/index.html

echo "Starting backend server..."
exec pnpm start --host 0.0.0.0 --port "${PORT:-9000}"
