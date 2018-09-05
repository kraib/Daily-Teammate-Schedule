export interface ITeammateSchedule {
  teammateName: string;
  teammateType: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}
export interface ITeammateScheduleResponse {
  data: ITeammateSchedule[];
}
