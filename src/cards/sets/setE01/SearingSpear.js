"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SearingSpear extends UnimplementedCard {
  constructor (game) {
    super(game, "Searing Spear", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = SearingSpear;
