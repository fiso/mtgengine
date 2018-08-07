"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClockworkDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Clockwork Dragon", "Mirrodin", "MRD");
  }
}

module.exports = ClockworkDragon;
