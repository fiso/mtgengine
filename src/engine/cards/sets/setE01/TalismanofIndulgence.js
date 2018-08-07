"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalismanofIndulgence extends UnimplementedCard {
  constructor (game) {
    super(game, "Talisman of Indulgence", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = TalismanofIndulgence;
