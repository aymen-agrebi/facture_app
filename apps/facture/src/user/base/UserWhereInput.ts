/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryListRelationFilter } from "../../category/base/CategoryListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CompanyListRelationFilter } from "../../company/base/CompanyListRelationFilter";
import { FactureListRelationFilter } from "../../facture/base/FactureListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../../product/base/ProductListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => CategoryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CategoryListRelationFilter)
  @IsOptional()
  @Field(() => CategoryListRelationFilter, {
    nullable: true,
  })
  category?: CategoryListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CompanyListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CompanyListRelationFilter)
  @IsOptional()
  @Field(() => CompanyListRelationFilter, {
    nullable: true,
  })
  company?: CompanyListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => FactureListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FactureListRelationFilter)
  @IsOptional()
  @Field(() => FactureListRelationFilter, {
    nullable: true,
  })
  factures?: FactureListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ProductListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductListRelationFilter)
  @IsOptional()
  @Field(() => ProductListRelationFilter, {
    nullable: true,
  })
  product?: ProductListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;
}

export { UserWhereInput as UserWhereInput };
