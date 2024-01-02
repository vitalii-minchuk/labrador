import { EEventStatus } from "../../../enums"

export interface ICommonMatrixEvent {
  id: string
  closingDate: Date | string | null
  name: string
  matrixLiveStatus: EEventStatus
  changeMatrixLiveStatusDate: Date | string | null
  image: string
}

export interface IImage {
  id: string
  url: string
}

export interface ISingleMatrixEventSubCategory {
  id: string
  name: string
  indexSort: number
}

export interface ISingleMatrixEventLabel {
  name: string
}

export interface ISingleMatrixEventTag {
  name: string
  shortName: string
}

export interface ISingleMatrixEventLocation {
  id: string
  name: string
  suggestedByMatrix: string
}

export interface ISingleMatrixEventInfo {
  mainConfirmText: string
  mainConfirmLink: string
  secondaryConfirmLink: string
}

export interface ISingleMatrixEventStatistic {
 totalPredictionOnVariant: number
 public: number
 private: number
 percent: number
 variantId: string
 variantName:string,
 variantDescription:string,
 variantState: number
}

export interface ISingleMatrixEventVariant {
  id: string
  name: string
  description: string,
  image: IImage
  isWinner: boolean
  position: number
}

export interface ISingleMatrixEvent {
  id: string
  closingDate: Date | string | null
  name: string,
  description: string,
  matrixLiveStatus: number
  changeMatrixLiveStatusDate: Date | string | null
  subCategories: ISingleMatrixEventSubCategory[]
  variants: ISingleMatrixEventVariant[]
  labels: ISingleMatrixEventLabel[]
  tag: ISingleMatrixEventTag
  country: ISingleMatrixEventLocation
  region: ISingleMatrixEventLocation
  city: ISingleMatrixEventLocation
  image: IImage
  matrixInfo: ISingleMatrixEventInfo
  totalPredictionValue: number
  matrixStatistic: ISingleMatrixEventStatistic[]
}

export interface ICreateMatrixEventInput {
  name: string
  description: string
  countryFilterId: string
  closingDate: Date | string | null
  region: ISingleMatrixEventLocation | null
  city: ISingleMatrixEventLocation | null
  country: ISingleMatrixEventLocation | null
  variants: ISingleMatrixEventVariant[]
  subCategories: ISingleMatrixEventSubCategory[]
  labels: ISingleMatrixEventLabel[]
  tag: ISingleMatrixEventTag
  matrixInfo: ISingleMatrixEventInfo
}
