import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { getSwaggerUiAsset } from "../utils";

export const GET = async (_req: MedusaRequest, res: MedusaResponse) => {
  try {
    res
      .type("application/javascript")
      .send(await getSwaggerUiAsset("swagger-ui-bundle.js"));
  } catch {
    res.redirect(
      "https://unpkg.com/swagger-ui-dist@5.33.1/swagger-ui-bundle.js",
    );
  }
};
