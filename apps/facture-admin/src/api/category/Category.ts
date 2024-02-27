import { Product } from "../product/Product";
import { User } from "../user/User";

export type Category = {
  createdAt: Date;
  id: string;
  name: string | null;
  product?: Array<Product>;
  updatedAt: Date;
  users?: Array<User>;
};
