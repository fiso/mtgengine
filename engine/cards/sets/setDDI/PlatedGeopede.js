"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlatedGeopede extends Card {
  constructor(game) {
    super(game, "Plated Geopede", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = PlatedGeopede;
