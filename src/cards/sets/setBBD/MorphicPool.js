"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MorphicPool extends UnimplementedCard {
  constructor (game) {
    super(game, "Morphic Pool", "Battlebond", "BBD");
  }
}

module.exports = MorphicPool;
