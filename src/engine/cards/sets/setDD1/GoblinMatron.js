"use strict";
const Constants = require ("../../../Constants");
const GoblinMatronBase = require("../setEVG/GoblinMatron");

class GoblinMatron extends GoblinMatronBase {
  constructor (game) {
    super(game, "Goblin Matron", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = GoblinMatron;
