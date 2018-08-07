"use strict";
const Constants = require ("../../../Constants");
const PredatorFlagshipBase = require("../setCMA/PredatorFlagship");

class PredatorFlagship extends PredatorFlagshipBase {
  constructor (game) {
    super(game, "Predator, Flagship", "Commander 2014", "C14");
  }
}

module.exports = PredatorFlagship;
