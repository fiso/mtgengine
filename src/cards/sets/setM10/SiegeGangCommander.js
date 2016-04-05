"use strict";
const Constants = require ("../../../Constants");
const SiegeGangCommanderBase = require("../setDD3_EVG/SiegeGangCommander");

class SiegeGangCommander extends SiegeGangCommanderBase {
  constructor(game) {
    super(game, "Siege-Gang Commander", "Magic 2010", "M10");
  }
}

module.exports = SiegeGangCommander;
