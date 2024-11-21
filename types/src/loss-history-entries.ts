export interface ILossHistoryEntry {
  id: string;
  carrier: string;
  startDate: string;
  endDate: string;
}

export interface IListLossHistoryEntriesArgs {
  transactionId: string;
}

export interface ICreateLossHistoryEntry
  extends Omit<ILossHistoryEntry, "id"> {}

export interface IUpdateLossHistoryEntriesInput {
  transactionId: string;
  delete: Array<ILossHistoryEntry["id"]>;
  update: Array<ILossHistoryEntry>;
  create: Array<ICreateLossHistoryEntry>;
}
