import { Company } from "../company/Company";
import { Product } from "../product/Product";
import { User } from "../user/User";

export type Facture = {
  companies?: Company | null;
  createdAt: Date;
  discount: number | null;
  id: string;
  product?: Array<Product>;
  quantity: number | null;
  totalPrice: number | null;
  tva: string | null;
  updatedAt: Date;
  users?: User | null;
};
