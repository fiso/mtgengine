"use strict";
const Constants = require ("../../../Constants");
const EnlistedWurmBase = require("../setPCA/EnlistedWurm");

class EnlistedWurm extends EnlistedWurmBase {
  constructor (game) {
    super(game, "Enlisted Wurm", "Alara Reborn", "ARB");
  }
}

module.exports = EnlistedWurm;
