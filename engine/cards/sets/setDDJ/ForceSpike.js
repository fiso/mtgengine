"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForceSpike extends UnimplementedCard {
  constructor(game) {
    super(game, "Force Spike", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = ForceSpike;
