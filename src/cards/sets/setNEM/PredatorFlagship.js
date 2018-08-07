"use strict";
const Constants = require ("../../../Constants");
const PredatorFlagshipBase = require("../setCMA/PredatorFlagship");

class PredatorFlagship extends PredatorFlagshipBase {
  constructor (game) {
    super(game, "Predator, Flagship", "Nemesis", "NEM");
  }
}

module.exports = PredatorFlagship;
