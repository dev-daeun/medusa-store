import {
  createInstantSearchAdapter,
  type MedusaSdkLike,
} from "@medusajs/instantsearch-adapter"

import { sdk } from "@lib/config"

export const PRODUCT_INDEX_NAME = "product"

/**
 * The currencies the product index holds prices in, one field set each. Keep
 * in sync with `PRICE_CURRENCIES` in the backend's `src/search/helpers/pricing.ts`.
 */
export const SEARCH_PRICE_CURRENCIES = ["eur", "usd", "krw"]

export type PriceField =
  | "min_price"
  | "max_price"
  | "original_price"
  | "on_sale"

/**
 * Read the region's currency without substituting another currency's prices.
 */
export const indexedCurrency = (currencyCode: string) => {
  return currencyCode.toLowerCase()
}

export const priceAttribute = (field: PriceField, currencyCode: string) =>
  `${field}_${indexedCurrency(currencyCode)}`

/**
 * Shared by the navbar search drawer and the store listing. An empty query
 * searches rather than short-circuiting, which is what the listing needs to
 * show every product before anything is refined.
 */
export const { searchClient } = createInstantSearchAdapter({
  sdk: sdk as unknown as MedusaSdkLike,
  path: "/store/search",
  additionalSearchParameters: {
    search_options: {
      match_strategy: "last",
    },
  },
  // Range widgets read `facets_stats`, which the adapter only produces for
  // fields listed here. The price fields are declared with a `stats` facet on
  // the index, which is what makes the stats available at all.
  numericAttributes: SEARCH_PRICE_CURRENCIES.flatMap((currency) => [
    `min_price_${currency}`,
    `max_price_${currency}`,
  ]),
})
