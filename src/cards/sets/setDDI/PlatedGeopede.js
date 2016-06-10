"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlatedGeopede extends UnimplementedCard {
  constructor (game) {
    super(game, "Plated Geopede", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = PlatedGeopede;
