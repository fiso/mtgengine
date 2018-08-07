"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FiendslayerPaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Fiendslayer Paladin", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = FiendslayerPaladin;
