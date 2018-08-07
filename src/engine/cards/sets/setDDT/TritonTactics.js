"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TritonTactics extends UnimplementedCard {
  constructor (game) {
    super(game, "Triton Tactics", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = TritonTactics;
