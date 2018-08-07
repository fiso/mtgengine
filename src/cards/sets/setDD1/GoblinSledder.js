"use strict";
const Constants = require ("../../../Constants");
const GoblinSledderBase = require("../setEVG/GoblinSledder");

class GoblinSledder extends GoblinSledderBase {
  constructor (game) {
    super(game, "Goblin Sledder", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = GoblinSledder;
