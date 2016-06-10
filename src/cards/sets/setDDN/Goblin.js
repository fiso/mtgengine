"use strict";
const Constants = require ("../../../Constants");
const GoblinBase = require("../setEVG/Goblin");

class Goblin extends GoblinBase {
  constructor (game) {
    super(game, "Goblin", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = Goblin;
