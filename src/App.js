import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Number</th>
              <th>Monthy Price</th>
              <th>Setup Price</th>
              <th>Currenty</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <th></th>
              <th><Button variant="success" responsive>sell</Button></th>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <th></th>
              <th><Button variant="success" responsive>sell</Button></th>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <th></th>
              <th></th>
              <th><Button variant="success" responsive>sell</Button></th>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
