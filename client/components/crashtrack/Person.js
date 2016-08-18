/* eslint-disable react/no-string-refs, react/prop-types, max-len */

import React from 'react';

export default class Person extends React.Component {
  render() {
    return (
      <div>
        <h2>Add a Person</h2>
        <div className="row">
          <div className="col-xs-3">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input ref="name" type="text" className="form-control" id="name" />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input ref="age" type="number" className="form-control" id="age" />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <input ref="gender" type="text" className="form-control" id="gender" />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input ref="address" type="text" className="form-control" id="address" />
              </div>
              <div className="form-group">
                <label htmlFor="payment">Monthly Payment</label>
                <input ref="payment" type="text" className="form-control" id="payment" value="50" readOnly />
              </div>
              <button onClick={this.props.personCreate} type="submit" className="btn btn-success">Create a Person</button>
            </form>
          </div>
          <div className="col-xs-9" />
        </div>

      </div>
    );
  }
}
