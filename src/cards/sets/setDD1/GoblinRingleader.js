"use strict";
const Constants = require ("../../../Constants");
const GoblinRingleaderBase = require("../setDDT/GoblinRingleader");

class GoblinRingleader extends GoblinRingleaderBase {
  constructor (game) {
    super(game, "Goblin Ringleader", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = GoblinRingleader;
