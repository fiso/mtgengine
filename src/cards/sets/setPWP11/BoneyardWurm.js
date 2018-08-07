"use strict";
const Constants = require ("../../../Constants");
const BoneyardWurmBase = require("../setDDJ/BoneyardWurm");

class BoneyardWurm extends BoneyardWurmBase {
  constructor (game) {
    super(game, "Boneyard Wurm", "Wizards Play Network 2011", "PWP11");
  }
}

module.exports = BoneyardWurm;
