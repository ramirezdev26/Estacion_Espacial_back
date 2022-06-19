const Spacecraft = require('./spacecraft');

class UnmannedShip extends Spacecraft {
  constructor({
    name, type, activity, origin, tripulation, combustible, state, weight,
    objectOfStudy = 'undefined',
    }) {
    super({name, type, activity, origin, tripulation, combustible, state, weight});
    this.objectOfStudy = objectOfStudy;
  }

  send() {
    const unmannedShip = {
      name: this.name,
      type: this.type,
      activity: this.activity,
      origin: this.origin,
      tripulation: this.tripulation,
      combustible: this.combustible,
      state: this.state,
      weight: this.weight,
      objectOfStudy: this.objectOfStudy,
      type: this.type
    }
    return unmannedShip;
  }

  message () {
    console.log('Esta nave es de tipo no-tripulada');
  }
}

module.exports = UnmannedShip;
