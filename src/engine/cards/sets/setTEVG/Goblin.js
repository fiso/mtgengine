"use strict";
const Constants = require ("../../../Constants");
const GoblinBase = require("../setMTGA/Goblin");

class Goblin extends GoblinBase {
  constructor (game) {
    super(game, "Goblin", "Duel Decks Anthology: Elves vs. Goblins Tokens", "TEVG");
  }
}

module.exports = Goblin;
