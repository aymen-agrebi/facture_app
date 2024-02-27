import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { FactureCreateNestedManyWithoutCompaniesInput } from "./FactureCreateNestedManyWithoutCompaniesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyCreateInput = {
  address?: AddressWhereUniqueInput | null;
  facture?: FactureCreateNestedManyWithoutCompaniesInput;
  logo?: string | null;
  name?: string | null;
  raisonSociale?: string | null;
  rib?: string | null;
  stamp?: string | null;
  users?: UserWhereUniqueInput | null;
};
