import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

export const GET = async (_req: MedusaRequest, res: MedusaResponse) => {
  res.type("html").send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Storefront API documentation</title>
    <link rel="stylesheet" href="/docs/styles" />
  </head>
  <body>
    <div id="swagger-ui"></div>
    <script src="/docs/bundle"></script>
    <script>
      SwaggerUIBundle({
        url: "/docs/openapi",
        dom_id: "#swagger-ui",
        presets: [SwaggerUIBundle.presets.apis],
        layout: "BaseLayout",
      })
    </script>
  </body>
</html>`);
};
