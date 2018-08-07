"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Quicken extends UnimplementedCard {
  constructor (game) {
    super(game, "Quicken", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = Quicken;
