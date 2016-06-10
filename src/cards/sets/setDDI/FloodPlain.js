"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FloodPlain extends UnimplementedCard {
  constructor (game) {
    super(game, "Flood Plain", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = FloodPlain;
