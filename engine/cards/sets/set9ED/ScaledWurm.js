"use strict";
const Constants = require ("../../../Constants");
const ScaledWurmBase = require("../setBRB/ScaledWurm");

class ScaledWurm extends ScaledWurmBase {
  constructor(game) {
    super(game, "Scaled Wurm", "Ninth Edition", "9ED");
  }
}

module.exports = ScaledWurm;
