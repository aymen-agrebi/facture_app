import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { FactureTitle } from "../facture/FactureTitle";
import { UserTitle } from "../user/UserTitle";

export const CompanyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="address.id" reference="Address" label="Address">
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="facture"
          reference="Facture"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FactureTitle} />
        </ReferenceArrayInput>
        <TextInput label="Logo" source="logo" />
        <TextInput label="Name" source="name" />
        <TextInput label="RaisonSociale" source="raisonSociale" />
        <TextInput label="RIB" source="rib" />
        <TextInput label="Stamp" source="stamp" />
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
