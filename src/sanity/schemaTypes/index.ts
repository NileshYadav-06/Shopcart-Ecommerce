import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryType";
import { blockContentType } from "./blockContentType";
import { blogCategoryType } from "./blogCategoryType";
import { addressType } from "./addressType";
import { orderType } from "./orderType";
import { brandType } from "./brandType";
import { authorType } from "./authorType";
import { productType } from "./productType";
import { blogType } from "./blogType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    blockContentType,
    blogCategoryType,
    productType,
    orderType,
    brandType,
    blogType,
    authorType,
    addressType,
  ],
};
