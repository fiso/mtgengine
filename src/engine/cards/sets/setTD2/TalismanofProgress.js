"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalismanofProgress extends UnimplementedCard {
  constructor (game) {
    super(game, "Talisman of Progress", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = TalismanofProgress;
