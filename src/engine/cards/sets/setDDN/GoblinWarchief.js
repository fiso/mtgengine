"use strict";
const Constants = require ("../../../Constants");
const GoblinWarchiefBase = require("../setDOM/GoblinWarchief");

class GoblinWarchief extends GoblinWarchiefBase {
  constructor (game) {
    super(game, "Goblin Warchief", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = GoblinWarchief;
