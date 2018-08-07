"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VirtussManeuver extends UnimplementedCard {
  constructor (game) {
    super(game, "Virtus's Maneuver", "Battlebond", "BBD");
  }
}

module.exports = VirtussManeuver;
