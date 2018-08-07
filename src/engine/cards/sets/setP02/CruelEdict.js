"use strict";
const Constants = require ("../../../Constants");
const CruelEdictBase = require("../setDVD/CruelEdict");

class CruelEdict extends CruelEdictBase {
  constructor (game) {
    super(game, "Cruel Edict", "Portal Second Age", "P02");
  }
}

module.exports = CruelEdict;
