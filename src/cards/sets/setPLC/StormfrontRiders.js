"use strict";
const Constants = require ("../../../Constants");
const StormfrontRidersBase = require("../setDDF/StormfrontRiders");

class StormfrontRiders extends StormfrontRidersBase {
  constructor (game) {
    super(game, "Stormfront Riders", "Planar Chaos", "PLC");
  }
}

module.exports = StormfrontRiders;
