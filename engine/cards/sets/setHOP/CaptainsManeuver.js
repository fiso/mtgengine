"use strict";
const Constants = require ("../../../Constants");
const CaptainsManeuverBase = require("../setAPC/CaptainsManeuver");

class CaptainsManeuver extends CaptainsManeuverBase {
  constructor(game) {
    super(game, "Captain's Maneuver", "Planechase", "HOP");
  }
}

module.exports = CaptainsManeuver;
