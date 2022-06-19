const joi = require('@hapi/joi');

const spacecraftIdSchema = joi.string().regex(/^[0-9-a-fA-F]{24}$/);
const spacecraftNameSchema = joi.string();
const spacecraftActivitySchema = joi.string();
const spacecraftOriginSchema = joi.string();
const spacecraftTripulationSchema = joi.number();
const spacecraftCombustibleSchema = joi.string();
const spacecraftStateSchema = joi.string();
const spacecraftWeightSchema = joi.string();
const spacecraftTypeSchema = joi.string();
const shuttleVehicleBurdenSchema = joi.string();
const shuttleVehicleThrustSchema = joi.string();
const shuttleVehicleHeightSchema = joi.string();
const shuttleVehiclePowerSchema = joi.string();
const unmannedShipObjectOfStudySchema = joi.string();
const unmannedEarthShipInOrbitSchema = joi.string();
const unmannedEarthShipSpeedSchema = joi.string();
const mannedShipMissionSchema = joi.string();


const createSpacecraftSchema = {
  name: spacecraftNameSchema.required(),
  type: spacecraftTypeSchema.required(),
  activity: spacecraftActivitySchema.required(),
  origin: spacecraftOriginSchema.required(),
  tripulation: spacecraftTripulationSchema.required(),
  combustible: spacecraftCombustibleSchema.required(),
  state: spacecraftStateSchema.required(),
  weight: spacecraftWeightSchema.required(),
  burden: shuttleVehicleBurdenSchema,
  thrust: shuttleVehicleThrustSchema,
  height: shuttleVehicleHeightSchema,
  power: shuttleVehiclePowerSchema,
  objectOfStudy: unmannedShipObjectOfStudySchema,
  inOrbit: unmannedEarthShipInOrbitSchema,
  speed: unmannedEarthShipSpeedSchema,
  mission: mannedShipMissionSchema
};

const updateSpacecraftSchema = {
  name: spacecraftNameSchema,
  type: spacecraftTypeSchema,
  activity: spacecraftActivitySchema,
  origin: spacecraftOriginSchema,
  tripulation: spacecraftTripulationSchema,
  combustible: spacecraftCombustibleSchema,
  state: spacecraftStateSchema,
  weight: spacecraftWeightSchema,
  burden: shuttleVehicleBurdenSchema,
  thrust: shuttleVehicleThrustSchema,
  height: shuttleVehicleHeightSchema,
  power: shuttleVehiclePowerSchema,
  objectOfStudy: unmannedShipObjectOfStudySchema,
  inOrbit: unmannedEarthShipInOrbitSchema,
  speed: unmannedEarthShipSpeedSchema,
  mission: mannedShipMissionSchema
};

module.exports = {
  spacecraftIdSchema,
  createSpacecraftSchema,
  updateSpacecraftSchema
}
