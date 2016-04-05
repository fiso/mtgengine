"use strict";
const Constants = require ("../../../Constants");
const WhiptailWurmBase = require("../setME4/WhiptailWurm");

class WhiptailWurm extends WhiptailWurmBase {
  constructor(game) {
    super(game, "Whiptail Wurm", "Portal", "POR");
  }
}

module.exports = WhiptailWurm;
