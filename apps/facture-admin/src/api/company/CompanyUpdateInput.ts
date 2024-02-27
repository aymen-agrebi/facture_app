import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { FactureUpdateManyWithoutCompaniesInput } from "./FactureUpdateManyWithoutCompaniesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  facture?: FactureUpdateManyWithoutCompaniesInput;
  logo?: string | null;
  name?: string | null;
  raisonSociale?: string | null;
  rib?: string | null;
  stamp?: string | null;
  users?: UserWhereUniqueInput | null;
};
