import * as React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import { ITeammateSchedule } from "./model";

export interface IProps {
  schedules: ITeammateSchedule[];
}
export default class ScheduleTable extends React.Component<IProps, any> {
  public render() {
    const products = [
      {
        id: 1,
        name: "Product1",
        price: 120
      },
      {
        id: 2,
        name: "Product2",
        price: 80
      }
    ];
    const options = {
      exportCSVText: "Export"
    };
    return (
      <BootstrapTable
        data={products}
        options={options}
        striped={true}
        hover={true}
        exportCSV={true}
      >
        <TableHeaderColumn isKey={true} dataField="id">
          Product ID
        </TableHeaderColumn>
        <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
