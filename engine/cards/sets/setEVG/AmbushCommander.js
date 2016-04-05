"use strict";
const Constants = require ("../../../Constants");
const AmbushCommanderBase = require("../setDD3_EVG/AmbushCommander");

class AmbushCommander extends AmbushCommanderBase {
  constructor(game) {
    super(game, "Ambush Commander", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = AmbushCommander;
