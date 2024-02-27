import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  product?: ProductListRelationFilter;
  users?: UserListRelationFilter;
};
