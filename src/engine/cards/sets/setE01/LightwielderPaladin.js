"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightwielderPaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightwielder Paladin", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = LightwielderPaladin;
