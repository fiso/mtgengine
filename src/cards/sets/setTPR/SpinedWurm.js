"use strict";
const Constants = require ("../../../Constants");
const SpinedWurmBase = require("../setDPA/SpinedWurm");

class SpinedWurm extends SpinedWurmBase {
  constructor(game) {
    super(game, "Spined Wurm", "Tempest Remastered", "TPR");
  }
}

module.exports = SpinedWurm;
