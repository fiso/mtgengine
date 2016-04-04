"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpinedWurmBase = require("../setDPA/SpinedWurm.js");

class SpinedWurm extends SpinedWurmBase {
  constructor(game) {
    super(game, "Spined Wurm", "Magic 2011", "M11");
  }
}

module.exports = SpinedWurm;
