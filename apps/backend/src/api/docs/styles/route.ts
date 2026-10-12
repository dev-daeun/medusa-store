import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { getSwaggerUiAsset } from "../utils";

export const GET = async (_req: MedusaRequest, res: MedusaResponse) => {
  try {
    res.type("text/css").send(await getSwaggerUiAsset("swagger-ui.css"));
  } catch {
    res.redirect("https://unpkg.com/swagger-ui-dist@5.33.1/swagger-ui.css");
  }
};
