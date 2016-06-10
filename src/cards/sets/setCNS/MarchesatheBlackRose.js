"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarchesatheBlackRose extends UnimplementedCard {
  constructor (game) {
    super(game, "Marchesa, the Black Rose", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = MarchesatheBlackRose;
