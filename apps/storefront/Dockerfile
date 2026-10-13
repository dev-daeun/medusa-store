# syntax=docker/dockerfile:1
FROM node:22-alpine

WORKDIR /server

RUN npm install pnpm@10.11.1 -g

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY apps/storefront/package.json ./apps/storefront/

RUN pnpm install --frozen-lockfile --filter @dtc/storefront...

COPY apps/storefront/next.config.js apps/storefront/check-env-variables.js apps/storefront/tsconfig.json apps/storefront/next-env.d.ts apps/storefront/postcss.config.js apps/storefront/tailwind.config.js ./apps/storefront/
COPY apps/storefront/src ./apps/storefront/src
COPY apps/storefront/public ./apps/storefront/public
COPY --chmod=755 start-storefront.sh /usr/local/bin/start-storefront

WORKDIR /server/apps/storefront

RUN --mount=type=secret,id=storefront_env,target=/server/apps/storefront/.env,required=true \
    pnpm build

EXPOSE 8000

ENTRYPOINT ["/usr/local/bin/start-storefront"]
