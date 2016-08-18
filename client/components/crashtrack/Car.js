/* eslint-disable react/no-string-refs, react/prop-types, max-len, no-useless-constructor*/

import React from 'react';

export default class Car extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Add a Car</h2>
        <div className="row">
          <div className="col-xs-3">
            <form>
              <div className="form-group">
                <label htmlFor="make">Make</label>
                <input ref="make" type="text" className="form-control" id="make" />
              </div>

              <div className="form-group">
                <label htmlFor="model">Model</label>
                <input ref="model" type="text" className="form-control" id="model" />
              </div>

              <div className="form-group">
                <label htmlFor="year">Year</label>
                <input ref="year" type="text" className="form-control" id="year" />
              </div>
              <div className="form-group">
                <label htmlFor="owner">Owner</label>
                <select className="form-control" ref="owner">
                    { (this.props.people || this.props.people.length > 0) ? this.props.people.map((p, i) => <option key={i} data-id={p.id}>{p.name}</option>) : <option>Please make a person</option>}
                </select>
              </div>
              <button onClick={this.props.carCreate} type="submit" className="btn btn-success">Add a Car</button>
            </form>
          </div>
          <div className="col-xs-9" />
        </div>

      </div>
    );
  }
}
