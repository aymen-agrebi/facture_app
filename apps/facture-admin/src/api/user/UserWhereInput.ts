import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { FactureListRelationFilter } from "../facture/FactureListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type UserWhereInput = {
  category?: CategoryListRelationFilter;
  company?: CompanyListRelationFilter;
  factures?: FactureListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  product?: ProductListRelationFilter;
  username?: StringFilter;
};
