import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ProductCreateNestedManyWithoutFacturesInput } from "./ProductCreateNestedManyWithoutFacturesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FactureCreateInput = {
  companies?: CompanyWhereUniqueInput | null;
  discount?: number | null;
  product?: ProductCreateNestedManyWithoutFacturesInput;
  quantity?: number | null;
  totalPrice?: number | null;
  tva?: string | null;
  users?: UserWhereUniqueInput | null;
};
