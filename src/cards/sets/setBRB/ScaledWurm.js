"use strict";
const Constants = require ("../../../Constants");
const ScaledWurmBase = require("../setCNS/ScaledWurm");

class ScaledWurm extends ScaledWurmBase {
  constructor (game) {
    super(game, "Scaled Wurm", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ScaledWurm;
