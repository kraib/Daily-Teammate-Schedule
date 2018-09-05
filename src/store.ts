import { applyMiddleware, compose, createStore, Store } from "redux";
import reduxThunk from "redux-thunk";
import { IMainReducer, mainReducer } from "./reducer";

export const store: Store<IMainReducer> = createStore(
  mainReducer,
  compose(applyMiddleware(reduxThunk))
);
