"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FiremindsForesight extends UnimplementedCard {
  constructor (game) {
    super(game, "Firemind's Foresight", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = FiremindsForesight;
