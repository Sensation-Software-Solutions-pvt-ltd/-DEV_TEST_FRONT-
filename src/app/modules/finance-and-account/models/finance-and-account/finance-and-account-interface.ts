
export interface IDropDownModel {
  id?: string,
  name?: string,
}

export interface ICandidateListModel {
  candidateId?: string,
  candidateName?: string,
  candidateSourceId?: number,
  candidateStatus?: number,
  companyId?: string,
  createdDate?: string,
  description?: string,
  emailAddress?: string,
  isEmailSent?: boolean
  isFavorite?: boolean
  jobOpeningId?: string,
  jobTitle?: string,
  labelIds?: IDropDownModel[]
  linkedInProfileLink?: string,
  phoneNumber?: string,
  relevanceRating?: number,
  stageId?: string,
  stageName?: string,
  submittedDate?: string,
  totalRocord?: number,
  uploadResume?: string,
  isSelectRow?: boolean,
  candidatePageLink?: string,
}
