import { api } from "../api";
import { actionTypes } from "../constants";
import { ILocation, ITeammateSchedule } from "../model";

export const fetchLocationsAction = () => (dispatch: any) => {
  return api.fetchLocationsAsync().then(res => {
    dispatch(fetchLocationsCompleted(res.data));
  });
};
export const fetchSchedulesAction = (facilityId: string, day: string) => (
  dispatch: any
) => {
  return api.fetchSchedulesAsync(facilityId, day).then(res => {
    dispatch(fetchSchedulesCompleted(res.data));
  });
};

const fetchLocationsCompleted = (locations: ILocation[]) => ({
  payload: locations,
  type: actionTypes.FETCH_LOCATIONS_COMPLETED
});

const fetchSchedulesCompleted = (schedules: ITeammateSchedule[]) => ({
  payload: schedules,
  type: actionTypes.FETCH_SCHEDULES_COMPLETED
});
