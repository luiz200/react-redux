import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Alerts from "../Button/Alert_Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Tab = ({ numbers }) => (
  <aside>
    <div className="Tab">
      <Table striped bordered hover responsive size="sm" variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Number</th>
            <th>Monthy Price</th>
            <th>Setup Price</th>
            <th>Currenty</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
            {numbers.map((number) => (
              <tr>
                <td>{number.id}</td>
                <td>{number.value}</td>
                <td>{number.monthyPrice}</td>
                <td>{number.setupPrice}</td>
                <td>{number.currency}</td>
                <td>
                  <Alerts />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <br></br>
    </div>
  </aside>
);

export default connect((state) => ({ numbers: state }))(Tab);
