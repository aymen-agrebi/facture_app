import { Category } from "../category/Category";
import { Company } from "../company/Company";
import { Facture } from "../facture/Facture";
import { Product } from "../product/Product";
import { JsonValue } from "type-fest";

export type User = {
  category?: Array<Category>;
  company?: Array<Company>;
  createdAt: Date;
  factures?: Array<Facture>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  product?: Array<Product>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
