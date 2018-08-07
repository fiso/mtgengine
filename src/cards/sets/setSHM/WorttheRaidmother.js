"use strict";
const Constants = require ("../../../Constants");
const WorttheRaidmotherBase = require("../setMM3/WorttheRaidmother");

class WorttheRaidmother extends WorttheRaidmotherBase {
  constructor (game) {
    super(game, "Wort, the Raidmother", "Shadowmoor", "SHM");
  }
}

module.exports = WorttheRaidmother;
