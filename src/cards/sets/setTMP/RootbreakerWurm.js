"use strict";
const Constants = require ("../../../Constants");
const RootbreakerWurmBase = require("../set9ED/RootbreakerWurm");

class RootbreakerWurm extends RootbreakerWurmBase {
  constructor(game) {
    super(game, "Rootbreaker Wurm", "Tempest", "TMP");
  }
}

module.exports = RootbreakerWurm;
