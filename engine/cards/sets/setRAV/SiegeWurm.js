"use strict";
const Constants = require ("../../../Constants");
const SiegeWurmBase = require("../setM15/SiegeWurm");

class SiegeWurm extends SiegeWurmBase {
  constructor(game) {
    super(game, "Siege Wurm", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SiegeWurm;
