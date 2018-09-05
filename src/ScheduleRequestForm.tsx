import * as moment from "moment";
import * as React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ILocation } from "./model";

export interface IProps {
  facilities: ILocation[];
  onScheduleRequest: (facilityId: string, date: string) => void;
}
export interface IState {
  selectedDate: string;
  hasTriggeredFetch: boolean;
  selectedFacility: string;
}

export default class Form extends React.Component<IProps, IState> {
  public state = {
    hasTriggeredFetch: false,
    selectedDate: moment().format(),
    selectedFacility: "000001"
  };
  public handleDateChange = (date: moment.Moment) => {
    this.setState({
      hasTriggeredFetch: false,
      selectedDate: date.toString()
    });
  };
  public handleFacilityChange = (selected: any) => {
    this.setState({
      hasTriggeredFetch: false,
      selectedFacility: selected.target.value
    });
  };
  public handleSubmit = () => {
    this.setState({
      hasTriggeredFetch: true
    });
    this.props.onScheduleRequest(
      this.state.selectedFacility,
      moment(this.state.selectedDate).format("DD-MM-YY")
    );
  };
  public render() {
    return (
      <div className="search-form">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupFileAddon01">
              Select Facility
            </span>
          </div>
          <select
            onChange={this.handleFacilityChange}
            className="custom-select"
            id="inputGroupSelect01"
          >
            {this.props.facilities.map(item => (
              <option key={item.facilityId} value={item.facilityId}>{`${
                item.facilityName
              } (${item.facilityId})`}</option>
            ))}
          </select>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupFileAddon01">
              Week Start Date
            </span>
          </div>
          <ReactDatePicker
            selected={moment(this.state.selectedDate)}
            onChange={this.handleDateChange}
            className="form-control"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={this.handleSubmit}
            className="btn btn-primary pull-right"
          >
            {this.state.hasTriggeredFetch ? "Refresh" : "View Schedule"}
          </button>
        </div>
      </div>
    );
  }
}
