"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteelWall extends UnimplementedCard {
  constructor(game) {
    super(game, "Steel Wall", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SteelWall;
