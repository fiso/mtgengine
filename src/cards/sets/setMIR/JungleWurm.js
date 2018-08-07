"use strict";
const Constants = require ("../../../Constants");
const JungleWurmBase = require("../setVMA/JungleWurm");

class JungleWurm extends JungleWurmBase {
  constructor (game) {
    super(game, "Jungle Wurm", "Mirage", "MIR");
  }
}

module.exports = JungleWurm;
