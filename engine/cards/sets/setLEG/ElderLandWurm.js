"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElderLandWurmBase = require("../set4ED/ElderLandWurm.js");

class ElderLandWurm extends ElderLandWurmBase {
  constructor(game) {
    super(game, "Elder Land Wurm", "Legends", "LEG");
  }
}

module.exports = ElderLandWurm;
