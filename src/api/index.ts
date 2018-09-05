import { ILocationResponse, ITeammateScheduleResponse } from "../model";
const baseURL = "http://www.scadevjobs.com/api";

const fetchLocationsAsync = (): Promise<ILocationResponse> => {
  const locationsURL = `${baseURL}/Locations`;
  return fetch(locationsURL)
    .then(response => response.json())
    .then(res => res);
};
const fetchSchedulesAsync = (
  facilityId: string,
  day: string
): Promise<ITeammateScheduleResponse> => {
  const locationsURL = `${baseURL}/Schedules/${facilityId}/${day}`;
  return fetch(locationsURL)
    .then(response => response.json())
    .then(res => res);
};

export const api = {
  fetchLocationsAsync,
  fetchSchedulesAsync
};
