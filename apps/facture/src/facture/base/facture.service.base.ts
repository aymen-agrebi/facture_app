/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Facture, // @ts-ignore
  Product, // @ts-ignore
  Company, // @ts-ignore
  User,
} from "@prisma/client";

export class FactureServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FactureCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.FactureCountArgs>
  ): Promise<number> {
    return this.prisma.facture.count(args);
  }

  async factures<T extends Prisma.FactureFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FactureFindManyArgs>
  ): Promise<Facture[]> {
    return this.prisma.facture.findMany(args);
  }
  async facture<T extends Prisma.FactureFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FactureFindUniqueArgs>
  ): Promise<Facture | null> {
    return this.prisma.facture.findUnique(args);
  }
  async createFacture<T extends Prisma.FactureCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FactureCreateArgs>
  ): Promise<Facture> {
    return this.prisma.facture.create<T>(args);
  }
  async updateFacture<T extends Prisma.FactureUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FactureUpdateArgs>
  ): Promise<Facture> {
    return this.prisma.facture.update<T>(args);
  }
  async deleteFacture<T extends Prisma.FactureDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FactureDeleteArgs>
  ): Promise<Facture> {
    return this.prisma.facture.delete(args);
  }

  async findProduct(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<Product[]> {
    return this.prisma.facture
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .product(args);
  }

  async getCompanies(parentId: string): Promise<Company | null> {
    return this.prisma.facture
      .findUnique({
        where: { id: parentId },
      })
      .companies();
  }

  async getUsers(parentId: string): Promise<User | null> {
    return this.prisma.facture
      .findUnique({
        where: { id: parentId },
      })
      .users();
  }
}
