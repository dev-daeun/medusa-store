import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { getOpenApiSpec } from "../utils";

export const GET = async (_req: MedusaRequest, res: MedusaResponse) => {
  try {
    const spec = await getOpenApiSpec();

    res.type("application/yaml").send(spec);
  } catch (error) {
    res.status(500).json({
      message:
        error instanceof Error
          ? error.message
          : "Unable to load the OpenAPI specification.",
    });
  }
};
