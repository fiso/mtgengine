"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CruelEdictBase = require("../setDD3_DVD/CruelEdict.js");

class CruelEdict extends CruelEdictBase {
  constructor(game) {
    super(game, "Cruel Edict", "Magic Player Rewards", "pMPR");
  }
}

module.exports = CruelEdict;
