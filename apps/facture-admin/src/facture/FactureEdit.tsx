import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { ProductTitle } from "../product/ProductTitle";
import { UserTitle } from "../user/UserTitle";

export const FactureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="companies.id"
          reference="Company"
          label="Companies"
        >
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <NumberInput label="Discount" source="discount" />
        <ReferenceArrayInput
          source="product"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput step={1} label="Total Price" source="totalPrice" />
        <TextInput label="TVA" source="tva" />
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
