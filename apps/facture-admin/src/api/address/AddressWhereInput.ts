import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AddressWhereInput = {
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  city?: StringNullableFilter;
  companies?: CompanyListRelationFilter;
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  state?: StringNullableFilter;
  zip?: IntNullableFilter;
};
