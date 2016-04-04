"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CruelEdictBase = require("../setDD3_DVD/CruelEdict.js");

class CruelEdict extends CruelEdictBase {
  constructor(game) {
    super(game, "Cruel Edict", "Ninth Edition", "9ED");
  }
}

module.exports = CruelEdict;
