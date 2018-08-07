"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmptytheWarrens extends UnimplementedCard {
  constructor (game) {
    super(game, "Empty the Warrens", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = EmptytheWarrens;
