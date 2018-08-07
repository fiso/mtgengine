"use strict";
const Constants = require ("../../../Constants");
const GoblinBase = require("../setMTGA/Goblin");

class Goblin extends GoblinBase {
  constructor (game) {
    super(game, "Goblin", "Duel Decks: Mind vs. Might Tokens", "TDDS");
  }
}

module.exports = Goblin;
