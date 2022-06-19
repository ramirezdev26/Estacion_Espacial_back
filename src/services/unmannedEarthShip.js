const Spacecraft = require('./spacecraft');

class UnmannedEarthShip extends Spacecraft {
  constructor({
    name, type, activity, origin, tripulation, combustible, state, weight,
    inOrbit = 'yes',
    speed = 'undefined'
    }) {
    super({name, type, activity, origin, tripulation, combustible, state, weight});
    this.inOrbit = inOrbit;
    this.speed = speed;
  }

  send() {
    const unmannedEarthShip = {
      name: this.name,
      type: this.type,
      activity: this.activity,
      origin: this.origin,
      tripulation: this.tripulation,
      combustible: this.combustible,
      state: this.state,
      weight: this.weight,
      inOrbit: this.inOrbit,
      speed: this.speed,
      type: this.type
    }
    return unmannedEarthShip;
  }

  message () {
    console.log('Esta nave es de tipo no-tripulada que esta en orbita terrestre');
  }
}

module.exports = UnmannedEarthShip;
