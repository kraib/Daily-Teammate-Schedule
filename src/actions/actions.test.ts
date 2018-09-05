import configureStore from "redux-mock-store";
import reduxThunk from "redux-thunk";
import * as api from "../api";
import { fetchLocationsAction, fetchSchedulesAction } from "./";

const middlewares = [reduxThunk];
const getMockStore = configureStore(middlewares);

describe("action tests", () => {
  it("should call to api.fetchLocations", done => {
    const fetchLocationsStub = jest.spyOn(api.api, "fetchLocationsAsync");
    const store = getMockStore();
    store.dispatch<any>(fetchLocationsAction()).then(() => {
      expect(fetchLocationsStub).toHaveBeenCalled();
      done();
    });
  });
  it("should call to api.fetchSchedules", done => {
    const fetchSchedulesStub = jest.spyOn(api.api, "fetchSchedulesAsync");
    const store = getMockStore();
    store
      .dispatch<any>(fetchSchedulesAction("000001", "1-12-2018"))
      .then(() => {
        expect(fetchSchedulesStub).toHaveBeenCalled();
        done();
      });
  });
});
