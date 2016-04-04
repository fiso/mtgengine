"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FoulFamiliarBase = require("../setDKM/FoulFamiliar.js");

class FoulFamiliar extends FoulFamiliarBase {
  constructor(game) {
    super(game, "Foul Familiar", "Ice Age", "ICE");
  }
}

module.exports = FoulFamiliar;
