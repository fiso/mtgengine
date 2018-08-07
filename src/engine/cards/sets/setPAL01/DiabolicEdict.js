"use strict";
const Constants = require ("../../../Constants");
const DiabolicEdictBase = require("../setA25/DiabolicEdict");

class DiabolicEdict extends DiabolicEdictBase {
  constructor (game) {
    super(game, "Diabolic Edict", "Arena League 2001", "PAL01");
  }
}

module.exports = DiabolicEdict;
