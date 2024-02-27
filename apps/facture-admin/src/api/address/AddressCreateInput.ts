import { CompanyCreateNestedManyWithoutAddressesInput } from "./CompanyCreateNestedManyWithoutAddressesInput";
import { CustomerCreateNestedManyWithoutAddressesInput } from "./CustomerCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  companies?: CompanyCreateNestedManyWithoutAddressesInput;
  customers?: CustomerCreateNestedManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
