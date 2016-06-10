"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteelOverseer extends UnimplementedCard {
  constructor (game) {
    super(game, "Steel Overseer", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SteelOverseer;
