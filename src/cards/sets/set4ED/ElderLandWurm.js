"use strict";
const Constants = require ("../../../Constants");
const ElderLandWurmBase = require("../setMED/ElderLandWurm");

class ElderLandWurm extends ElderLandWurmBase {
  constructor (game) {
    super(game, "Elder Land Wurm", "Fourth Edition", "4ED");
  }
}

module.exports = ElderLandWurm;
