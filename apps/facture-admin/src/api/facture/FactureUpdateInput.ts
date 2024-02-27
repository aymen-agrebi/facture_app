import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ProductUpdateManyWithoutFacturesInput } from "./ProductUpdateManyWithoutFacturesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FactureUpdateInput = {
  companies?: CompanyWhereUniqueInput | null;
  discount?: number | null;
  product?: ProductUpdateManyWithoutFacturesInput;
  quantity?: number | null;
  totalPrice?: number | null;
  tva?: string | null;
  users?: UserWhereUniqueInput | null;
};
