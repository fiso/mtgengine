"use strict";
const Constants = require ("../../../Constants");
const JungleWurmBase = require("../setMIR/JungleWurm");

class JungleWurm extends JungleWurmBase {
  constructor (game) {
    super(game, "Jungle Wurm", "Vintage Masters", "VMA");
  }
}

module.exports = JungleWurm;
