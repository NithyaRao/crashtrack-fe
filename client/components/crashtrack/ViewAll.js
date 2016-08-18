/* eslint-disable max-len, arrow-body-style, no-underscore-dangle
, react/no-string-refs*/

import React from 'react';
import axios from 'axios';

export default class ViewAll extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    axios.get('//localhost:9001/api/people')
    .then((rsp) => {
      this.setState({ people: rsp.data.content });
    });
  }


  render() {
    return (
      <div>
        <h1>My Clients</h1>

          <div className="row">
            <div className="col-xs-3">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Monthly Payment</th>
                  </tr>
                </thead>
                <tbody>

                  {this.state.people.map(p => (
                    <tr key={p.id}>
                      <td>{p.name}</td>
                      <td>{p.age}</td>
                      <td>{p.gender}</td>
                      <td>$50</td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
    );
  }
}
