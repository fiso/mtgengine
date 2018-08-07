"use strict";
const Constants = require ("../../../Constants");
const GoblinBase = require("../setMTGA/Goblin");

class Goblin extends GoblinBase {
  constructor (game) {
    super(game, "Goblin", "Duel Decks: Knights vs. Dragons Tokens", "TDDG");
  }
}

module.exports = Goblin;
