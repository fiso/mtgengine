"use strict";
const Constants = require ("../../../Constants");
const FoulFamiliarBase = require("../setME2/FoulFamiliar");

class FoulFamiliar extends FoulFamiliarBase {
  constructor (game) {
    super(game, "Foul Familiar", "Deckmasters", "DKM");
  }
}

module.exports = FoulFamiliar;
