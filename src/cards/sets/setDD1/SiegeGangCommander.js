"use strict";
const Constants = require ("../../../Constants");
const SiegeGangCommanderBase = require("../setDOM/SiegeGangCommander");

class SiegeGangCommander extends SiegeGangCommanderBase {
  constructor (game) {
    super(game, "Siege-Gang Commander", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = SiegeGangCommander;
