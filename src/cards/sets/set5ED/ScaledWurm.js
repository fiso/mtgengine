"use strict";
const Constants = require ("../../../Constants");
const ScaledWurmBase = require("../setBRB/ScaledWurm");

class ScaledWurm extends ScaledWurmBase {
  constructor(game) {
    super(game, "Scaled Wurm", "Fifth Edition", "5ED");
  }
}

module.exports = ScaledWurm;
