"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RootbreakerWurmBase = require("../set9ED/RootbreakerWurm.js");

class RootbreakerWurm extends RootbreakerWurmBase {
  constructor(game) {
    super(game, "Rootbreaker Wurm", "Tempest", "TMP");
  }
}

module.exports = RootbreakerWurm;
