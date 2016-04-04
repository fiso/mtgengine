"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AerialManeuver extends Card {
  constructor(game) {
    super(game, "Aerial Maneuver", "Gatecrash", "GTC");
  }
}

module.exports = AerialManeuver;
