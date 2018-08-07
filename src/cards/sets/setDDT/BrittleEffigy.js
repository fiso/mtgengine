"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrittleEffigy extends UnimplementedCard {
  constructor (game) {
    super(game, "Brittle Effigy", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = BrittleEffigy;
