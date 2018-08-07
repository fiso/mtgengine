"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeastAttack extends UnimplementedCard {
  constructor (game) {
    super(game, "Beast Attack", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = BeastAttack;
