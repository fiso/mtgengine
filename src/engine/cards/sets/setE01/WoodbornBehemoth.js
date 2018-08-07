"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodbornBehemoth extends UnimplementedCard {
  constructor (game) {
    super(game, "Woodborn Behemoth", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = WoodbornBehemoth;
