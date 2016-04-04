"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DiabolicEdictBase = require("../setpARL/DiabolicEdict.js");

class DiabolicEdict extends DiabolicEdictBase {
  constructor(game) {
    super(game, "Diabolic Edict", "Tempest Remastered", "TPR");
  }
}

module.exports = DiabolicEdict;
