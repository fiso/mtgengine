"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FumeSpitter extends UnimplementedCard {
  constructor (game) {
    super(game, "Fume Spitter", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = FumeSpitter;
