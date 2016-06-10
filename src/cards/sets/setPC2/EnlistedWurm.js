"use strict";
const Constants = require ("../../../Constants");
const EnlistedWurmBase = require("../setARB/EnlistedWurm");

class EnlistedWurm extends EnlistedWurmBase {
  constructor (game) {
    super(game, "Enlisted Wurm", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = EnlistedWurm;
