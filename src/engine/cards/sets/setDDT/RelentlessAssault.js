"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RelentlessAssault extends UnimplementedCard {
  constructor (game) {
    super(game, "Relentless Assault", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = RelentlessAssault;
