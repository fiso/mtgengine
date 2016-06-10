"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkySpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Sky Spirit", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SkySpirit;
