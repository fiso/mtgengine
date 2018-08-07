"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Overrule extends UnimplementedCard {
  constructor (game) {
    super(game, "Overrule", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Overrule;
