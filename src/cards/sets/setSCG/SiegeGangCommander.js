"use strict";
const Constants = require ("../../../Constants");
const SiegeGangCommanderBase = require("../setDD3_EVG/SiegeGangCommander");

class SiegeGangCommander extends SiegeGangCommanderBase {
  constructor (game) {
    super(game, "Siege-Gang Commander", "Scourge", "SCG");
  }
}

module.exports = SiegeGangCommander;
