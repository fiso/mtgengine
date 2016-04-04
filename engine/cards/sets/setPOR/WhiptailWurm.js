"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhiptailWurmBase = require("../setME4/WhiptailWurm.js");

class WhiptailWurm extends WhiptailWurmBase {
  constructor(game) {
    super(game, "Whiptail Wurm", "Portal", "POR");
  }
}

module.exports = WhiptailWurm;
