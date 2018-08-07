"use strict";
const Constants = require ("../../../Constants");
const GoblinRingleaderBase = require("../setDDT/GoblinRingleader");

class GoblinRingleader extends GoblinRingleaderBase {
  constructor (game) {
    super(game, "Goblin Ringleader", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = GoblinRingleader;
