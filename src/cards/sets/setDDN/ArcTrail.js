"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcTrail extends UnimplementedCard {
  constructor (game) {
    super(game, "Arc Trail", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = ArcTrail;
