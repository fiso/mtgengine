"use strict";
const Constants = require ("../../../Constants");
const DiabolicEdictBase = require("../setpARL/DiabolicEdict");

class DiabolicEdict extends DiabolicEdictBase {
  constructor(game) {
    super(game, "Diabolic Edict", "Beatdown Box Set", "BTD");
  }
}

module.exports = DiabolicEdict;
