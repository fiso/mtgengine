"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HumanFrailty extends UnimplementedCard {
  constructor (game) {
    super(game, "Human Frailty", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = HumanFrailty;
