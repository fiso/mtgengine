"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PresstheAdvantage extends UnimplementedCard {
  constructor (game) {
    super(game, "Press the Advantage", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = PresstheAdvantage;
