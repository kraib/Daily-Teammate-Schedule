import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import { connect } from "react-redux";
import { fetchLocationsAction, fetchSchedulesAction } from "./actions";
import "./App.css";
import Header from "./Header";
import { IMainReducer } from "./reducer";
// Props passed from mapStateToProps
interface IPropsFromState {
  appState: IMainReducer;
}

// Props passed from mapDispatchToProps
interface IPropsFromDispatch {
  fetchLocations: typeof fetchLocationsAction;
  fetchSchedules: typeof fetchSchedulesAction;
}

type AppContainerProps = IPropsFromState & IPropsFromDispatch;
const mapStateToProps = (appState: IMainReducer) => ({
  appState
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchLocations: () => dispatch(fetchLocationsAction()),
  fetchSchedules: (facilityId: string, day: string) =>
    dispatch(fetchSchedulesAction(facilityId, day))
});
class App extends React.Component<AppContainerProps> {
  public componentDidMount() {
    this.props.fetchSchedules("000001", "12-12-2018");
  }
  public render() {
    console.log(this.props.appState);
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
