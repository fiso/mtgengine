"use strict";
const Constants = require ("../../../Constants");
const RoaroftheWurmBase = require("../setpFNM/RoaroftheWurm");

class RoaroftheWurm extends RoaroftheWurmBase {
  constructor(game) {
    super(game, "Roar of the Wurm", "Vintage Masters", "VMA");
  }
}

module.exports = RoaroftheWurm;
