"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheUnspeakable extends UnimplementedCard {
  constructor (game) {
    super(game, "The Unspeakable", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = TheUnspeakable;
