"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaptainsManeuver extends UnimplementedCard {
  constructor (game) {
    super(game, "Captain's Maneuver", "Apocalypse", "APC");
  }
}

module.exports = CaptainsManeuver;
