"use strict";
const Constants = require ("../../../Constants");
const FoulFamiliarBase = require("../setME2/FoulFamiliar");

class FoulFamiliar extends FoulFamiliarBase {
  constructor (game) {
    super(game, "Foul Familiar", "Ice Age", "ICE");
  }
}

module.exports = FoulFamiliar;
