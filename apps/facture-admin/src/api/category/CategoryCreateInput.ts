import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";
import { UserCreateNestedManyWithoutCategoriesInput } from "./UserCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  product?: ProductCreateNestedManyWithoutCategoriesInput;
  users?: UserCreateNestedManyWithoutCategoriesInput;
};
