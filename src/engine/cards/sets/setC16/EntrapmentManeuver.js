"use strict";
const Constants = require ("../../../Constants");
const EntrapmentManeuverBase = require("../setPZ2/EntrapmentManeuver");

class EntrapmentManeuver extends EntrapmentManeuverBase {
  constructor (game) {
    super(game, "Entrapment Maneuver", "Commander 2016", "C16");
  }
}

module.exports = EntrapmentManeuver;
