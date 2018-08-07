"use strict";
const Constants = require ("../../../Constants");
const EnlistedWurmBase = require("../setPCA/EnlistedWurm");

class EnlistedWurm extends EnlistedWurmBase {
  constructor (game) {
    super(game, "Enlisted Wurm", "Planechase 2012", "PC2");
  }
}

module.exports = EnlistedWurm;
