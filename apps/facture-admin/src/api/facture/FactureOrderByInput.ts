import { SortOrder } from "../../util/SortOrder";

export type FactureOrderByInput = {
  companiesId?: SortOrder;
  createdAt?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  totalPrice?: SortOrder;
  tva?: SortOrder;
  updatedAt?: SortOrder;
  usersId?: SortOrder;
};
