"use strict";
const Constants = require ("../../../Constants");
const SiegeGangCommanderBase = require("../setDOM/SiegeGangCommander");

class SiegeGangCommander extends SiegeGangCommanderBase {
  constructor (game) {
    super(game, "Siege-Gang Commander", "World Championship Decks 2003", "WC03");
  }
}

module.exports = SiegeGangCommander;
