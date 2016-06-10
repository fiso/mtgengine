"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellsThunder extends UnimplementedCard {
  constructor (game) {
    super(game, "Hell's Thunder", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = HellsThunder;
