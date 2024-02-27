import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { FactureListRelationFilter } from "../facture/FactureListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyWhereInput = {
  address?: AddressWhereUniqueInput;
  facture?: FactureListRelationFilter;
  id?: StringFilter;
  logo?: StringNullableFilter;
  name?: StringNullableFilter;
  raisonSociale?: StringNullableFilter;
  rib?: StringNullableFilter;
  stamp?: StringNullableFilter;
  users?: UserWhereUniqueInput;
};
