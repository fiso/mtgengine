"use strict";
const Constants = require ("../../../Constants");
const CruelEdictBase = require("../setDVD/CruelEdict");

class CruelEdict extends CruelEdictBase {
  constructor (game) {
    super(game, "Cruel Edict", "Magic Player Rewards 2007", "P07");
  }
}

module.exports = CruelEdict;
