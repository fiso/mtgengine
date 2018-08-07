"use strict";
const Constants = require ("../../../Constants");
const BoneyardWurmBase = require("../setDDJ/BoneyardWurm");

class BoneyardWurm extends BoneyardWurmBase {
  constructor (game) {
    super(game, "Boneyard Wurm", "Magic Online Promos", "PRM");
  }
}

module.exports = BoneyardWurm;
