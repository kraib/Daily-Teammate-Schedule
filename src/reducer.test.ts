import { actionTypes } from "./constants";
import { mainReducer } from "./reducer";

describe("/reducers/reducer tests", () => {
  it("when fetch action is dispatched reducer state should be loading", () => {
    const state = undefined;
    const action = { type: actionTypes.FETCHING };
    const nextState = mainReducer(state, action);
    expect(nextState.loading).toBeTruthy();
  });
  it("when fetch schedules is completed schedules are updated", () => {
    const state = undefined;
    const action = {
      payload: [1],
      type: actionTypes.FETCH_SCHEDULES_COMPLETED
    };
    const nextState = mainReducer(state, action);
    expect(nextState.loading).toBeFalsy();
    expect(nextState.schedules.length).toBe(1);
  });
  it("when fetch locations is completed locations are updated", () => {
    const state = undefined;
    const action = {
      payload: [1],
      type: actionTypes.FETCH_LOCATIONS_COMPLETED
    };
    const nextState = mainReducer(state, action);
    expect(nextState.loading).toBeFalsy();
    expect(nextState.locations.length).toBe(1);
  });
});
