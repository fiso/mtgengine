"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelGargoyle extends UnimplementedCard {
  constructor (game) {
    super(game, "Darksteel Gargoyle", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = DarksteelGargoyle;
