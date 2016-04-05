"use strict";
const Constants = require ("../../../Constants");
const ElderLandWurmBase = require("../set4ED/ElderLandWurm");

class ElderLandWurm extends ElderLandWurmBase {
  constructor(game) {
    super(game, "Elder Land Wurm", "Legends", "LEG");
  }
}

module.exports = ElderLandWurm;
