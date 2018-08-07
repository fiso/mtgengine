"use strict";
const Constants = require ("../../../Constants");
const DiabolicEdictBase = require("../setA25/DiabolicEdict");

class DiabolicEdict extends DiabolicEdictBase {
  constructor (game) {
    super(game, "Diabolic Edict", "Magic Online Promos", "PRM");
  }
}

module.exports = DiabolicEdict;
