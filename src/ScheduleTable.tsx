import * as React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import { ITeammateSchedule } from "./model";

export interface IProps {
  schedules: ITeammateSchedule[];
}
export default class ScheduleTable extends React.Component<IProps, any> {
  public render() {
    const options = {
      exportCSVText: "Export"
    };

    return (
      <BootstrapTable
        data={this.props.schedules}
        options={options}
        striped={true}
        hover={true}
        exportCSV={true}
      >
        <TableHeaderColumn isKey={true} dataField="teammateName">
          Teammate
        </TableHeaderColumn>
        <TableHeaderColumn dataField="teammateType">
          Employee Type
        </TableHeaderColumn>
        <TableHeaderColumn dataField="monday">Monday 2/12</TableHeaderColumn>
        <TableHeaderColumn dataField="tuesday">Tuesday 2/13</TableHeaderColumn>
        <TableHeaderColumn dataField="wednesday">
          Wednesday 2/14
        </TableHeaderColumn>
        <TableHeaderColumn dataField="thursday">
          Thursday 2/15
        </TableHeaderColumn>
        <TableHeaderColumn dataField="friday">Friday 2/16</TableHeaderColumn>
        <TableHeaderColumn dataField="saturday">
          Saturday 2/18
        </TableHeaderColumn>
        <TableHeaderColumn dataField="sunday">Sunday 2/17</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
