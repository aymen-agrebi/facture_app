import { Facture as TFacture } from "../api/facture/Facture";

export const FACTURE_TITLE_FIELD = "tva";

export const FactureTitle = (record: TFacture): string => {
  return record.tva?.toString() || String(record.id);
};
