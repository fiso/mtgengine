"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SiegeGangCommanderBase = require("../setDD3_EVG/SiegeGangCommander.js");

class SiegeGangCommander extends SiegeGangCommanderBase {
  constructor(game) {
    super(game, "Siege-Gang Commander", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = SiegeGangCommander;
