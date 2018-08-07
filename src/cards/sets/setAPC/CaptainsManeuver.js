"use strict";
const Constants = require ("../../../Constants");
const CaptainsManeuverBase = require("../setHOP/CaptainsManeuver");

class CaptainsManeuver extends CaptainsManeuverBase {
  constructor (game) {
    super(game, "Captain's Maneuver", "Apocalypse", "APC");
  }
}

module.exports = CaptainsManeuver;
