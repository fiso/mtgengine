"use strict";
const Constants = require ("../../../Constants");
const RoaroftheWurmBase = require("../setDDS/RoaroftheWurm");

class RoaroftheWurm extends RoaroftheWurmBase {
  constructor (game) {
    super(game, "Roar of the Wurm", "Friday Night Magic 2007", "F07");
  }
}

module.exports = RoaroftheWurm;
