"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianAltar extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Altar", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = PhyrexianAltar;
