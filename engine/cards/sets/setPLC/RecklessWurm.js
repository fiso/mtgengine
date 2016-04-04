"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RecklessWurmBase = require("../setpGTW/RecklessWurm.js");

class RecklessWurm extends RecklessWurmBase {
  constructor(game) {
    super(game, "Reckless Wurm", "Planar Chaos", "PLC");
  }
}

module.exports = RecklessWurm;
