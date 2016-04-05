"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Human extends UnimplementedCard {
  constructor(game) {
    super(game, "Human", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Human;
