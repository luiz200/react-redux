import React, { Component } from "react";
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

class Paginat extends Component {
  render() {
    return (
      <div className="Paginat -warning">
        <Pagination className="justify-content-center" id="Paginat">
          <Pagination.Prev/>
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Ellipsis/>
          <Pagination.Item>58</Pagination.Item>
          <Pagination.Next/>
        </Pagination>
      </div>
    );
  }
}

export default Paginat;
