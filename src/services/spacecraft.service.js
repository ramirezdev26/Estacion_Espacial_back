const MongoLib = require('../lib/database');
const ShuttleVehicle = require('./shuttleVehicle');
const UnmannedShip = require('./unmannedShip');
const UnmannedEarthShip = require('./unmannedEarthShip');
const MannedShip = require('./mannedShip');

class SpacecraftService {

  constructor(){
    this.collection = 'spacecraft';
    this.mongoDB = new MongoLib;
  };


  async findAll() {
    const spacecraft = await this.mongoDB.getAll(this.collection);
    return spacecraft || [];
  };

  async find({ spacecraftId } = {}) {
    const spacecraft = await this.mongoDB.get( this.collection, spacecraftId );
    if(spacecraft.hasOwnProperty('burden')) {
      const shuttleVehicle = new ShuttleVehicle(spacecraft);
      shuttleVehicle.message();
      const shipProperies = shuttleVehicle.send()
      return shipProperies
    } else if(spacecraft.hasOwnProperty('objectOfStudy')) {
        const unmannedShip = new UnmannedShip(spacecraft);
        unmannedShip.message();
        const shipProperies = unmannedShip.send();
        return shipProperies
      } else if(spacecraft.hasOwnProperty('inOrbit')) {
        const unmannedEarthShip = new UnmannedEarthShip;
        unmannedEarthShip.message();
        const shipProperies = unmannedEarthShip.send();
        return shipProperies;
      } else if(spacecraft.hasOwnProperty('mission')) {
        const mannedShip = new MannedShip(spacecraft);
        mannedShip.message();
        const shipProperies = mannedShip.send();
        return shipProperies;
      } else {
      return spacecraft;
    }
  }

  async createSpacecraft(data) {
    const addSpacecraft = await this.mongoDB.create(this.collection, data);
    return addSpacecraft;
  };

  async updateSpacecraft({ spacecraftId, message } = {}) {
    const updateSpacecraft = await this.mongoDB.update( this.collection, spacecraftId, message );
    return updateSpacecraft
  };

  async deleteSpacecraft({ spacecraftId } = {}) {
    const deletedSpacecraft = await this.mongoDB.delete( this.collection, spacecraftId );
    return deletedSpacecraft;
  };

};

module.exports = SpacecraftService;
