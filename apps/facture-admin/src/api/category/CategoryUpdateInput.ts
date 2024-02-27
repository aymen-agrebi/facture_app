import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";
import { UserUpdateManyWithoutCategoriesInput } from "./UserUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  product?: ProductUpdateManyWithoutCategoriesInput;
  users?: UserUpdateManyWithoutCategoriesInput;
};
