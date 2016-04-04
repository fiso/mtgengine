"use strict";
const Constants = require ("../../../Constants");
const CruelEdictBase = require("../setDD3_DVD/CruelEdict");

class CruelEdict extends CruelEdictBase {
  constructor(game) {
    super(game, "Cruel Edict", "Tenth Edition", "10E");
  }
}

module.exports = CruelEdict;
