"use strict";
const Constants = require ("../../../Constants");
const WhiptailWurmBase = require("../setME4/WhiptailWurm");

class WhiptailWurm extends WhiptailWurmBase {
  constructor (game) {
    super(game, "Whiptail Wurm", "Starter 1999", "S99");
  }
}

module.exports = WhiptailWurm;
