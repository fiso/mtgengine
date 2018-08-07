"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MorbidPlunder extends UnimplementedCard {
  constructor (game) {
    super(game, "Morbid Plunder", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = MorbidPlunder;
