#!/bin/sh
cd /server/apps/storefront

echo "Starting Storefront production server..."
exec pnpm start
