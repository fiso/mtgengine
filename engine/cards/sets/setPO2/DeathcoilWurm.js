"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathcoilWurmBase = require("../setME4/DeathcoilWurm.js");

class DeathcoilWurm extends DeathcoilWurmBase {
  constructor(game) {
    super(game, "Deathcoil Wurm", "Portal Second Age", "PO2");
  }
}

module.exports = DeathcoilWurm;
