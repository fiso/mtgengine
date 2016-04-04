"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CaptainsManeuverBase = require("../setAPC/CaptainsManeuver.js");

class CaptainsManeuver extends CaptainsManeuverBase {
  constructor(game) {
    super(game, "Captain's Maneuver", "Planechase", "HOP");
  }
}

module.exports = CaptainsManeuver;
