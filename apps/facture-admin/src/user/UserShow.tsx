import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Company"
          target="usersId"
          label="Companies"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Address"
              source="address.id"
              reference="Address"
            >
              <TextField source={ADDRESS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Logo" source="logo" />
            <TextField label="Name" source="name" />
            <TextField label="RaisonSociale" source="raisonSociale" />
            <TextField label="RIB" source="rib" />
            <TextField label="Stamp" source="stamp" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Facture"
          target="usersId"
          label="Factures"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Companies"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Discount" source="discount" />
            <TextField label="ID" source="id" />
            <TextField label="Quantity" source="quantity" />
            <TextField label="Total Price" source="totalPrice" />
            <TextField label="TVA" source="tva" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
