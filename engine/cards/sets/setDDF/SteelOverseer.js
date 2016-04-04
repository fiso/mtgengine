"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SteelOverseer extends Card {
  constructor(game) {
    super(game, "Steel Overseer", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SteelOverseer;
