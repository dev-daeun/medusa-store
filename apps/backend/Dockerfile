# syntax=docker/dockerfile:1
FROM node:22-alpine

WORKDIR /server

RUN npm install pnpm@10.11.1 -g

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY apps/backend/package.json ./apps/backend/

RUN pnpm install --frozen-lockfile --filter @dtc/backend...

COPY apps/backend/medusa-config.ts apps/backend/tsconfig.json apps/backend/instrumentation.ts ./apps/backend/
COPY apps/backend/src ./apps/backend/src
COPY --chmod=755 start.sh /usr/local/bin/start-medusa

WORKDIR /server/apps/backend

RUN --mount=type=secret,id=backend_env,target=/server/apps/backend/.env,required=false \
    pnpm build

WORKDIR /server/apps/backend/.medusa/server

RUN ln -s ../../node_modules node_modules \
    && test -x node_modules/.bin/medusa

EXPOSE 9000

ENTRYPOINT ["/usr/local/bin/start-medusa"]
