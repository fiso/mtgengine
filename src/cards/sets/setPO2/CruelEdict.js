"use strict";
const Constants = require ("../../../Constants");
const CruelEdictBase = require("../setDD3_DVD/CruelEdict");

class CruelEdict extends CruelEdictBase {
  constructor(game) {
    super(game, "Cruel Edict", "Portal Second Age", "PO2");
  }
}

module.exports = CruelEdict;
