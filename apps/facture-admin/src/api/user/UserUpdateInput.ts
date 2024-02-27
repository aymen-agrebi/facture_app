import { CategoryUpdateManyWithoutUsersInput } from "./CategoryUpdateManyWithoutUsersInput";
import { CompanyUpdateManyWithoutUsersInput } from "./CompanyUpdateManyWithoutUsersInput";
import { FactureUpdateManyWithoutUsersInput } from "./FactureUpdateManyWithoutUsersInput";
import { ProductUpdateManyWithoutUsersInput } from "./ProductUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  category?: CategoryUpdateManyWithoutUsersInput;
  company?: CompanyUpdateManyWithoutUsersInput;
  factures?: FactureUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  product?: ProductUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
