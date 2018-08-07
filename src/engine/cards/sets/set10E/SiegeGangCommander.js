"use strict";
const Constants = require ("../../../Constants");
const SiegeGangCommanderBase = require("../setDOM/SiegeGangCommander");

class SiegeGangCommander extends SiegeGangCommanderBase {
  constructor (game) {
    super(game, "Siege-Gang Commander", "Tenth Edition", "10E");
  }
}

module.exports = SiegeGangCommander;
