"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicShield extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Shield", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = AngelicShield;
