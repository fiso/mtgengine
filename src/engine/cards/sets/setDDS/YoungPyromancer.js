"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YoungPyromancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Young Pyromancer", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = YoungPyromancer;
