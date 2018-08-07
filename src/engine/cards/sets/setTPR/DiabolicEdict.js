"use strict";
const Constants = require ("../../../Constants");
const DiabolicEdictBase = require("../setA25/DiabolicEdict");

class DiabolicEdict extends DiabolicEdictBase {
  constructor (game) {
    super(game, "Diabolic Edict", "Tempest Remastered", "TPR");
  }
}

module.exports = DiabolicEdict;
