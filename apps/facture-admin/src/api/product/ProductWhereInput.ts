import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { FactureListRelationFilter } from "../facture/FactureListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ProductWhereInput = {
  categories?: CategoryListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  itemPrice?: FloatNullableFilter;
  name?: StringNullableFilter;
  orders?: FactureListRelationFilter;
  users?: UserListRelationFilter;
};
