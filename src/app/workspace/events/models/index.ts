import { EEventStatus } from "../../../enums"

export interface IEvent {
  id: string
  closingDate: Date | string | null
  name: string
  matrixLiveStatus: EEventStatus
  changeMatrixLiveStatusDate: Date | string | null
  image: string
}
