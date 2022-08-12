
export interface ICandidateListModel {
  Payee?: string,
  Child?: string,
  ThreeWeeks?: string,
  TwoWeeks?: string,
  OneWeeks?: number,
  Current?: number,
  PendingAmount?: number,
  OverPayment?: number,
  PendingCredinote?: number,
  TotalPendingAmount?: number,
}

export interface IPayeeListModel {
  Payee: string,
}

export interface IChildListModel {
  Child: string,
}
