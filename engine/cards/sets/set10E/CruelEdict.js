"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CruelEdictBase = require("../setDD3_DVD/CruelEdict.js");

class CruelEdict extends CruelEdictBase {
  constructor(game) {
    super(game, "Cruel Edict", "Tenth Edition", "10E");
  }
}

module.exports = CruelEdict;
