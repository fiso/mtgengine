"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RotWolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Rot Wolf", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = RotWolf;
