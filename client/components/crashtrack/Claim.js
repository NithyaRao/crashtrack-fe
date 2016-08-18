/* eslint-disable react/no-string-refs, react/prop-types, max-len, no-useless-constructor*/

import React from 'react';
import AccidentCar from './AccidentCar';

export default class claim extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Add a Claim</h2>
        <div className="row">
          <div className="col-xs-3">
            <form>
              <div className="form-group">
                <label htmlFor="date">Date of Accident</label>
                <input ref="date" type="text" className="form-control" id="date" />
              </div>

              <div className="form-group">
                <label htmlFor="time">Time of Accident</label>
                <input ref="time" type="text" className="form-control" id="time" />
              </div>

              <div className="form-group">
                <label htmlFor="url">Photo</label>
                <input ref="url" type="text" className="form-control" id="url" />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input ref="location" type="text" className="form-control" id="location" />
              </div>
              <button onClick={this.props.carAdd} type="submit" className="btn btn-success">Add Car to Claim</button>
                {this.props.accidentCars.map((v, i) => <AccidentCar key={i} ref="accidentCar" ownerCars={this.props.ownerCars} getOwnerCars={this.props.getOwnerCars} people={this.props.people} />)}
              <button onClick={this.props.claimCreate} type="submit" className="btn btn-success">Add a Claim</button>
            </form>
          </div>
          <div className="col-xs-9" />
        </div>

      </div>
    );
  }
}
