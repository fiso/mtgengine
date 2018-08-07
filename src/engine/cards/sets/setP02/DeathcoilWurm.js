"use strict";
const Constants = require ("../../../Constants");
const DeathcoilWurmBase = require("../setME4/DeathcoilWurm");

class DeathcoilWurm extends DeathcoilWurmBase {
  constructor (game) {
    super(game, "Deathcoil Wurm", "Portal Second Age", "P02");
  }
}

module.exports = DeathcoilWurm;
