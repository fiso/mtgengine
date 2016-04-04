"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FloodPlain extends Card {
  constructor(game) {
    super(game, "Flood Plain", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = FloodPlain;
