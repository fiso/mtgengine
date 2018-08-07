"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaptainsManeuver extends UnimplementedCard {
  constructor (game) {
    super(game, "Captain's Maneuver", "Planechase", "HOP");
  }
}

module.exports = CaptainsManeuver;
