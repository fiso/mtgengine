"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SteelWall extends Card {
  constructor(game) {
    super(game, "Steel Wall", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SteelWall;
