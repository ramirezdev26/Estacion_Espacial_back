const Spacecraft = require('./spacecraft');

class MannedShip extends Spacecraft {
  constructor({
    name, activity, type, origin, tripulation, combustible, state, weight,
    mission = 'undefined',
    }) {
    super({name, activity, type, origin, tripulation, combustible, state, weight});
    this.mission = mission;
  }

  send() {
    const mannedShip = {
      name: this.name,
      type: this.type,
      activity: this.activity,
      origin: this.origin,
      tripulation: this.tripulation,
      combustible: this.combustible,
      state: this.state,
      weight: this.weight,
      mission: this.mission,
    }
    return mannedShip;
  }

  message () {
    console.log('Esta nave es de tipo tripulada');
  }
}

module.exports = MannedShip;
