"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinElectromancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Electromancer", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = GoblinElectromancer;
