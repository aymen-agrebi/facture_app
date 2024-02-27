import { CompanyUpdateManyWithoutAddressesInput } from "./CompanyUpdateManyWithoutAddressesInput";
import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  companies?: CompanyUpdateManyWithoutAddressesInput;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
