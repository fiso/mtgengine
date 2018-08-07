"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Grapeshot extends UnimplementedCard {
  constructor (game) {
    super(game, "Grapeshot", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = Grapeshot;
