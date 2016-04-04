"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JungleWurmBase = require("../setMIR/JungleWurm.js");

class JungleWurm extends JungleWurmBase {
  constructor(game) {
    super(game, "Jungle Wurm", "Vintage Masters", "VMA");
  }
}

module.exports = JungleWurm;
