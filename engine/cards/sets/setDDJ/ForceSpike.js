"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForceSpike extends Card {
  constructor(game) {
    super(game, "Force Spike", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = ForceSpike;
