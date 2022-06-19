const Spacecraft = require('./spacecraft');

class ShuttleVehicle extends Spacecraft {
  constructor({
    name, type, activity, origin, tripulation, combustible, state, weight,
    burden = 'undefined',
    thrust = 'undefined',
    height = 'undefined',
    power = 'undefined'
    }) {
    super({name, type, activity, origin, tripulation, combustible, state, weight});
    this.burden = burden;
    this.thrust = thrust;
    this.height = height;
    this.power = power;
  }

  send() {
    const shuttleVehicle = {
      name: this.name,
      type: this.type,
      activity: this.activity,
      origin: this.origin,
      tripulation: this.tripulation,
      combustible: this.combustible,
      state: this.state,
      weight: this.weight,
      burden: this.burden,
      thrust: this.thrust,
      height: this.height,
      power: this.power,
      type: this.type
    }
    return shuttleVehicle;
  }

  message () {
    console.log('Esta nave es de tipo lanzadera');
  }
}

module.exports = ShuttleVehicle;
