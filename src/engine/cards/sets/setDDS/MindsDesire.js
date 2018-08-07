"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindsDesire extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind's Desire", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = MindsDesire;
