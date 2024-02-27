import { CategoryCreateNestedManyWithoutUsersInput } from "./CategoryCreateNestedManyWithoutUsersInput";
import { CompanyCreateNestedManyWithoutUsersInput } from "./CompanyCreateNestedManyWithoutUsersInput";
import { FactureCreateNestedManyWithoutUsersInput } from "./FactureCreateNestedManyWithoutUsersInput";
import { ProductCreateNestedManyWithoutUsersInput } from "./ProductCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  category?: CategoryCreateNestedManyWithoutUsersInput;
  company?: CompanyCreateNestedManyWithoutUsersInput;
  factures?: FactureCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  product?: ProductCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
