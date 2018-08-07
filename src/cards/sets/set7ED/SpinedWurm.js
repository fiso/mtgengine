"use strict";
const Constants = require ("../../../Constants");
const SpinedWurmBase = require("../setTPR/SpinedWurm");

class SpinedWurm extends SpinedWurmBase {
  constructor (game) {
    super(game, "Spined Wurm", "Seventh Edition", "7ED");
  }
}

module.exports = SpinedWurm;
