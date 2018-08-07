"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PitilessPlunderer extends UnimplementedCard {
  constructor (game) {
    super(game, "Pitiless Plunderer", "Rivals of Ixalan", "RIX");
  }
}

module.exports = PitilessPlunderer;
