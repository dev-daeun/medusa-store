import { access, readFile } from "fs/promises";
import { resolve } from "path";
import { MedusaError } from "@medusajs/framework/utils";

const openApiSpecCandidates = [
  process.env.OPENAPI_SPEC_PATH,
  resolve(process.cwd(), "openapi.yaml"),
  resolve(process.cwd(), "../../openapi.yaml"),
].filter((path): path is string => Boolean(path));

export const getOpenApiSpec = async () => {
  for (const path of openApiSpecCandidates) {
    try {
      await access(path);
      return readFile(path, "utf8");
    } catch {
      // Try the next supported location.
    }
  }

  throw new MedusaError(
    MedusaError.Types.NOT_FOUND,
    "OpenAPI specification not found. Add openapi.yaml to the repository root or set OPENAPI_SPEC_PATH.",
  );
};

export const getSwaggerUiAsset = (
  asset: "swagger-ui.css" | "swagger-ui-bundle.js",
) => readFile(resolve(process.cwd(), "node_modules/swagger-ui-dist", asset));
