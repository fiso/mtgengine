"use strict";
const Constants = require ("../../../Constants");
const RoaroftheWurmBase = require("../setpFNM/RoaroftheWurm");

class RoaroftheWurm extends RoaroftheWurmBase {
  constructor(game) {
    super(game, "Roar of the Wurm", "Odyssey", "ODY");
  }
}

module.exports = RoaroftheWurm;
