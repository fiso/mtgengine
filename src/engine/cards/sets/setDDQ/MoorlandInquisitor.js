"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoorlandInquisitor extends UnimplementedCard {
  constructor (game) {
    super(game, "Moorland Inquisitor", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = MoorlandInquisitor;
