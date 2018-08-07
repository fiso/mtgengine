"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreaterStoneSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Greater Stone Spirit", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = GreaterStoneSpirit;
