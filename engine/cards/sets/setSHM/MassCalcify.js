"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MassCalcifyBase = require("../setM15/MassCalcify.js");

class MassCalcify extends MassCalcifyBase {
  constructor(game) {
    super(game, "Mass Calcify", "Shadowmoor", "SHM");
  }
}

module.exports = MassCalcify;
