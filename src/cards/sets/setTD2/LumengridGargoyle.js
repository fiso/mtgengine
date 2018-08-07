"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LumengridGargoyle extends UnimplementedCard {
  constructor (game) {
    super(game, "Lumengrid Gargoyle", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = LumengridGargoyle;
