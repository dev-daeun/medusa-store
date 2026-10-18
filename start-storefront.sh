#!/bin/sh
cd /server/apps/storefront

echo "Starting Storefront production server..."
exec pnpm start --hostname 0.0.0.0 --port "${PORT:-8000}"
