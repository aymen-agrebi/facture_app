import { CategoryCreateNestedManyWithoutProductsInput } from "./CategoryCreateNestedManyWithoutProductsInput";
import { FactureCreateNestedManyWithoutProductsInput } from "./FactureCreateNestedManyWithoutProductsInput";
import { UserCreateNestedManyWithoutProductsInput } from "./UserCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  categories?: CategoryCreateNestedManyWithoutProductsInput;
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: FactureCreateNestedManyWithoutProductsInput;
  users?: UserCreateNestedManyWithoutProductsInput;
};
