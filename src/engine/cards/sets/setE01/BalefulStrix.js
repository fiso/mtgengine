"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalefulStrix extends UnimplementedCard {
  constructor (game) {
    super(game, "Baleful Strix", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = BalefulStrix;
