/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Company } from "./Company";
import { CompanyCountArgs } from "./CompanyCountArgs";
import { CompanyFindManyArgs } from "./CompanyFindManyArgs";
import { CompanyFindUniqueArgs } from "./CompanyFindUniqueArgs";
import { CreateCompanyArgs } from "./CreateCompanyArgs";
import { UpdateCompanyArgs } from "./UpdateCompanyArgs";
import { DeleteCompanyArgs } from "./DeleteCompanyArgs";
import { FactureFindManyArgs } from "../../facture/base/FactureFindManyArgs";
import { Facture } from "../../facture/base/Facture";
import { Address } from "../../address/base/Address";
import { User } from "../../user/base/User";
import { CompanyService } from "../company.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Company)
export class CompanyResolverBase {
  constructor(
    protected readonly service: CompanyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "read",
    possession: "any",
  })
  async _companiesMeta(
    @graphql.Args() args: CompanyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Company])
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "read",
    possession: "any",
  })
  async companies(
    @graphql.Args() args: CompanyFindManyArgs
  ): Promise<Company[]> {
    return this.service.companies(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Company, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "read",
    possession: "own",
  })
  async company(
    @graphql.Args() args: CompanyFindUniqueArgs
  ): Promise<Company | null> {
    const result = await this.service.company(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Company)
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "create",
    possession: "any",
  })
  async createCompany(
    @graphql.Args() args: CreateCompanyArgs
  ): Promise<Company> {
    return await this.service.createCompany({
      ...args,
      data: {
        ...args.data,

        address: args.data.address
          ? {
              connect: args.data.address,
            }
          : undefined,

        users: args.data.users
          ? {
              connect: args.data.users,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Company)
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "update",
    possession: "any",
  })
  async updateCompany(
    @graphql.Args() args: UpdateCompanyArgs
  ): Promise<Company | null> {
    try {
      return await this.service.updateCompany({
        ...args,
        data: {
          ...args.data,

          address: args.data.address
            ? {
                connect: args.data.address,
              }
            : undefined,

          users: args.data.users
            ? {
                connect: args.data.users,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Company)
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "delete",
    possession: "any",
  })
  async deleteCompany(
    @graphql.Args() args: DeleteCompanyArgs
  ): Promise<Company | null> {
    try {
      return await this.service.deleteCompany(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Facture], { name: "facture" })
  @nestAccessControl.UseRoles({
    resource: "Facture",
    action: "read",
    possession: "any",
  })
  async findFacture(
    @graphql.Parent() parent: Company,
    @graphql.Args() args: FactureFindManyArgs
  ): Promise<Facture[]> {
    const results = await this.service.findFacture(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Address, {
    nullable: true,
    name: "address",
  })
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "read",
    possession: "any",
  })
  async getAddress(@graphql.Parent() parent: Company): Promise<Address | null> {
    const result = await this.service.getAddress(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "users",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUsers(@graphql.Parent() parent: Company): Promise<User | null> {
    const result = await this.service.getUsers(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
