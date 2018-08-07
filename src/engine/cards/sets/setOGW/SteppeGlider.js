"use strict";
const Constants = require ("../../../Constants");
const SteppeGliderBase = require("../setBBD/SteppeGlider");

class SteppeGlider extends SteppeGliderBase {
  constructor (game) {
    super(game, "Steppe Glider", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SteppeGlider;
