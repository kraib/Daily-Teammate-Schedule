import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import { connect } from "react-redux";
import { fetchLocationsAction, fetchSchedulesAction } from "./actions";
import "./App.css";
import Header from "./Header";
import { IMainReducer } from "./reducer";
import ScheduleRequestForm from "./ScheduleRequestForm";
import ScheduleTable from "./ScheduleTable";
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
    this.props.fetchLocations();
    this.props.fetchSchedules("000001", "12-12-2018");
  }
  public onScheduleRequest = (facilityId: string, day: string) => {
    this.props.fetchSchedules(facilityId, day);
  };
  public render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="col-4 form-container">
            <ScheduleRequestForm
              facilities={this.props.appState.locations}
              onScheduleRequest={this.onScheduleRequest}
            />
          </div>
          <div className="col-12 form-container">
            {this.props.appState.schedules.length && (
              <ScheduleTable schedules={this.props.appState.schedules} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
