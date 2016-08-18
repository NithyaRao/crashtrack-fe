/* eslint-disable react/no-string-refs, no-unused-vars, no-console, max-len, no-trailing-spaces*/

import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Person from './Person';
import Car from './Car';
import Claim from './Claim';

let countClicks = 0;

export default class CrashTrack extends React.Component {
  constructor(props) {
    super(props);
    this.personCreate = this.personCreate.bind(this);
    this.carCreate = this.carCreate.bind(this);
    this.claimCreate = this.claimCreate.bind(this);
    this.carAdd = this.carAdd.bind(this);
    this.getOwnerCars = this.getOwnerCars.bind(this);
    this.state = { people: [{ name: 'Mary', age: '21', gender: 'F', address: '123', id: '1' },
  { name: 'Bob', age: '24', gender: 'M', address: '45667', id: '2' }],
     cars: [{ make: 'Honda', model: 'civic', year: '1989', ownerId: '1' },
            { make: 'Toyota', model: 'pruis', year: '2008', ownerId: '2' }],
     claims: [],
     accidentCars: [],
     ownerCars: [] };
  }

  componentWillMount() {
    axios.get('//localhost:9001/api/people')
    .then((rsp) => {
      this.setState({ people: [this.state.people, rsp.data.content] });
    });
  }


  personCreate(e) {
    e.preventDefault();
    const name = this.refs.person.refs.name.value;
    const age = this.refs.person.refs.age.value;
    const gender = this.refs.person.refs.gender.value;
    const address = this.refs.person.refs.address.value;
    const id = age; // TODO: take out ID
    this.setState({ people: [...this.state.people, { name, age, gender, address, id }] });
  }
  carCreate(e) {
    e.preventDefault();
    const make = this.refs.car.refs.make.value;
    const model = this.refs.car.refs.model.value;
    const year = this.refs.car.refs.year.value;
    const owner = this.refs.car.refs.owner.value;
    const o = this.state.people.filter(p => (p.name === owner));
    const ownerId = o[0].id;
    // const owner = this.refs.car.refs.owner.currentTarget.getAttribute('data-id');
    console.log('e', e.currentTarget);
    this.setState({ cars: [...this.state.cars, { make, model, year, ownerId }] });
  }
  claimCreate(e) {
    e.preventDefault();
    const date = this.refs.claim.refs.date.value;
    const time = this.refs.claim.refs.time.value;
    const url = this.refs.claim.refs.url.value;
    const location = this.refs.claim.refs.location.value;
    // const carsWrecked =
    // const o = this.state.people.filter(p => (p.name === owner));
    // const ownerId = o[0].id;
    // // const owner = this.refs.car.refs.owner.currentTarget.getAttribute('data-id');
    // console.log('e', e.currentTarget);
    this.setState({ claims: [...this.state.claims, { date, time, url, location }] });
  }

  getOwnerCars(e) {
    console.log('GetOwner cars', this.refs.claim.refs.accidentCar.refs.owner.value);
    const ownerName = this.refs.claim.refs.accidentCar.refs.owner.value;
    const ownerId = this.state.people.filter(o => (o.name === ownerName))[0].id;
    const myCars = this.state.cars.filter(c => (c.ownerId === ownerId));
    console.log('IngetOwners ****', myCars);
    this.setState({ ownerCars: myCars });
  }

  carAdd(e) {
    e.preventDefault();
    countClicks += 1;
    console.log('Inside CarAdd****', this.state.accidentCars);
    this.setState({ accidentCars: [...this.state.accidentCars, { car: '1' }] });
  }
  render() {
    console.log('in render of CrashTrack', this.state);
    return (
      <div>
        <h1>Welcome to claim tracker app!</h1>
        <Person ref="person" personCreate={this.personCreate} />
        <Car ref="car" carCreate={this.carCreate} people={this.state.people} />
        <Claim ref="claim" getOwnerCars={this.getOwnerCars} ownerCars={this.state.ownerCars} people={this.state.people} claimCreate={this.claimCreate} accidentCars={this.state.accidentCars} carAdd={this.carAdd} />

        <h2>My Clients</h2>
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
      </div>
    );
  }


}
