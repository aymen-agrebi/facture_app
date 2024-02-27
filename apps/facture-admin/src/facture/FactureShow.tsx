import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FactureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
