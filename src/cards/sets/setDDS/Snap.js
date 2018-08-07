"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Snap extends UnimplementedCard {
  constructor (game) {
    super(game, "Snap", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = Snap;
