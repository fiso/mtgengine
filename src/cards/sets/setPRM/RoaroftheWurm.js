"use strict";
const Constants = require ("../../../Constants");
const RoaroftheWurmBase = require("../setDDS/RoaroftheWurm");

class RoaroftheWurm extends RoaroftheWurmBase {
  constructor (game) {
    super(game, "Roar of the Wurm", "Magic Online Promos", "PRM");
  }
}

module.exports = RoaroftheWurm;
