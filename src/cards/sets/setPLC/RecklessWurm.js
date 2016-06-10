"use strict";
const Constants = require ("../../../Constants");
const RecklessWurmBase = require("../setpGTW/RecklessWurm");

class RecklessWurm extends RecklessWurmBase {
  constructor (game) {
    super(game, "Reckless Wurm", "Planar Chaos", "PLC");
  }
}

module.exports = RecklessWurm;
