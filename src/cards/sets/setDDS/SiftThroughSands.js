"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SiftThroughSands extends UnimplementedCard {
  constructor (game) {
    super(game, "Sift Through Sands", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = SiftThroughSands;
