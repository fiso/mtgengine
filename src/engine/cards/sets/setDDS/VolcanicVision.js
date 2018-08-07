"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicVision extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcanic Vision", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = VolcanicVision;
