import { CategoryUpdateManyWithoutProductsInput } from "./CategoryUpdateManyWithoutProductsInput";
import { FactureUpdateManyWithoutProductsInput } from "./FactureUpdateManyWithoutProductsInput";
import { UserUpdateManyWithoutProductsInput } from "./UserUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  categories?: CategoryUpdateManyWithoutProductsInput;
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: FactureUpdateManyWithoutProductsInput;
  users?: UserUpdateManyWithoutProductsInput;
};
