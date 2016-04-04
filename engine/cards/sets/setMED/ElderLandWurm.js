"use strict";
const Constants = require ("../../../Constants");
const ElderLandWurmBase = require("../set4ED/ElderLandWurm");

class ElderLandWurm extends ElderLandWurmBase {
  constructor(game) {
    super(game, "Elder Land Wurm", "Masters Edition", "MED");
  }
}

module.exports = ElderLandWurm;
