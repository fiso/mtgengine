"use strict";
const Constants = require ("../../../Constants");
const FoulFamiliarBase = require("../setDKM/FoulFamiliar");

class FoulFamiliar extends FoulFamiliarBase {
  constructor(game) {
    super(game, "Foul Familiar", "Masters Edition II", "ME2");
  }
}

module.exports = FoulFamiliar;
