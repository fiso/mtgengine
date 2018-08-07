"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleshEaterImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Flesh-Eater Imp", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = FleshEaterImp;
