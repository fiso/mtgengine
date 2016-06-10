"use strict";
const Constants = require ("../../../Constants");
const ScaledWurmBase = require("../setBRB/ScaledWurm");

class ScaledWurm extends ScaledWurmBase {
  constructor (game) {
    super(game, "Scaled Wurm", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = ScaledWurm;
