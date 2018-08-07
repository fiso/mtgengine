"use strict";
const Constants = require ("../../../Constants");
const RecklessWurmBase = require("../setPLC/RecklessWurm");

class RecklessWurm extends RecklessWurmBase {
  constructor (game) {
    super(game, "Reckless Wurm", "Magic Online Promos", "PRM");
  }
}

module.exports = RecklessWurm;
