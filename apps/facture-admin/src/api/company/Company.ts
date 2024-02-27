import { Address } from "../address/Address";
import { Facture } from "../facture/Facture";
import { User } from "../user/User";

export type Company = {
  address?: Address | null;
  createdAt: Date;
  facture?: Array<Facture>;
  id: string;
  logo: string | null;
  name: string | null;
  raisonSociale: string | null;
  rib: string | null;
  stamp: string | null;
  updatedAt: Date;
  users?: User | null;
};
