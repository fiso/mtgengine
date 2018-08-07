"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightsoftheBlackRose extends UnimplementedCard {
  constructor (game) {
    super(game, "Knights of the Black Rose", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = KnightsoftheBlackRose;
