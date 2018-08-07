"use strict";
const Constants = require ("../../../Constants");
const TetzimocPrimalDeathBase = require("../setPRIX/TetzimocPrimalDeath");

class TetzimocPrimalDeath extends TetzimocPrimalDeathBase {
  constructor (game) {
    super(game, "Tetzimoc, Primal Death", "Rivals of Ixalan", "RIX");
  }
}

module.exports = TetzimocPrimalDeath;
