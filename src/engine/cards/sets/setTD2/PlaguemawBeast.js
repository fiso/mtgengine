"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlaguemawBeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Plaguemaw Beast", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = PlaguemawBeast;
