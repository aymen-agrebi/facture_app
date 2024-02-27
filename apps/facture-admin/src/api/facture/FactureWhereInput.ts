import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FactureWhereInput = {
  companies?: CompanyWhereUniqueInput;
  discount?: FloatNullableFilter;
  id?: StringFilter;
  product?: ProductListRelationFilter;
  quantity?: IntNullableFilter;
  totalPrice?: IntNullableFilter;
  users?: UserWhereUniqueInput;
};
