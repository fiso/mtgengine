"use strict";
const Constants = require ("../../../Constants");
const SiegeGangCommanderBase = require("../setDD3_EVG/SiegeGangCommander");

class SiegeGangCommander extends SiegeGangCommanderBase {
  constructor(game) {
    super(game, "Siege-Gang Commander", "Tenth Edition", "10E");
  }
}

module.exports = SiegeGangCommander;
