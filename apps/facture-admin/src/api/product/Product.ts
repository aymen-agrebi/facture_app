import { Category } from "../category/Category";
import { Facture } from "../facture/Facture";
import { User } from "../user/User";

export type Product = {
  categories?: Array<Category>;
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Facture>;
  updatedAt: Date;
  users?: Array<User>;
};
