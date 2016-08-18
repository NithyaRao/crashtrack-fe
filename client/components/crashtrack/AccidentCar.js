/* eslint-disable react/no-string-refs, react/prop-types, max-len, no-useless-constructor*/

import React from 'react';

export default class AccidentCar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.props in AccidentCar!!!!!!!!', this.props.ownerCars);
    // console.log('Inside AccidentCar ***', this.props.ownerCars[0].make + this.props.ownerCars[0].model + this.props.ownerCars[0].year);
    return (
      <div>
        <h2>Accident Car</h2>
        <div className="row">
          <form>
            <div className="form-group">
              <label htmlFor="owner">Owner</label>
              <select className="form-control" ref="owner" onChange={this.props.getOwnerCars}>
                  { (this.props.people || this.props.people.length > 0) ? this.props.people.map((p, i) => <option key={i} data-id={p.id}>{p.name}</option>) : <option>Please make a person</option>}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="ownerCars">Owner Cars</label>
              <select className="form-control" ref="ownerCars">
                  { (this.props.ownerCars || this.props.ownerCars.length > 0) ? this.props.ownerCars.map((c, i) => <option key={Math.random()} data-id={i}>{c.year} {c.make} {c.model}</option>) : <option>Owner has no cars</option>}
              </select>
            </div>
          </form>
          <div className="col-xs-9" />
        </div>

      </div>
    );
  }
}
