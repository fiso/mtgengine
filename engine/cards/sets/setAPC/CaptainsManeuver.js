"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaptainsManeuver extends Card {
  constructor(game) {
    super(game, "Captain's Maneuver", "Apocalypse", "APC");
  }
}

module.exports = CaptainsManeuver;
