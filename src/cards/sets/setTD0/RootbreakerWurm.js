"use strict";
const Constants = require ("../../../Constants");
const RootbreakerWurmBase = require("../setTPR/RootbreakerWurm");

class RootbreakerWurm extends RootbreakerWurmBase {
  constructor (game) {
    super(game, "Rootbreaker Wurm", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = RootbreakerWurm;
