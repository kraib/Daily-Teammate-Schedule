import { Reducer } from "redux";
import { actionTypes } from "./constants";
import { ILocation, ITeammateSchedule } from "./model";

export interface IMainReducer {
  locations: ILocation[];
  schedules: ITeammateSchedule[];
  loading: boolean;
}
const initialState: IMainReducer = {
  loading: false,
  locations: [],
  schedules: []
};

export const mainReducer: Reducer<IMainReducer> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.FETCHING:
      return { ...state, loading: true };
    case actionTypes.FETCH_LOCATIONS_COMPLETED:
      return { ...state, locations: action.payload };
    case actionTypes.FETCH_SCHEDULES_COMPLETED:
      return { ...state, schedules: action.payload };
  }

  return state;
};
