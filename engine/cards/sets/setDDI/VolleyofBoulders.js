"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolleyofBoulders extends Card {
  constructor(game) {
    super(game, "Volley of Boulders", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = VolleyofBoulders;
