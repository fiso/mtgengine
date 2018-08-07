"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalismanofDominance extends UnimplementedCard {
  constructor (game) {
    super(game, "Talisman of Dominance", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = TalismanofDominance;
