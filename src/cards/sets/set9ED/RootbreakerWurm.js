"use strict";
const Constants = require ("../../../Constants");
const RootbreakerWurmBase = require("../setTPR/RootbreakerWurm");

class RootbreakerWurm extends RootbreakerWurmBase {
  constructor (game) {
    super(game, "Rootbreaker Wurm", "Ninth Edition", "9ED");
  }
}

module.exports = RootbreakerWurm;
