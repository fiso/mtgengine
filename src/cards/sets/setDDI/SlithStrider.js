"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlithStrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Slith Strider", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SlithStrider;
