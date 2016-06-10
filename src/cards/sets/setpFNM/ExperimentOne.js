"use strict";
const Constants = require ("../../../Constants");
const ExperimentOneBase = require("../setC15/ExperimentOne");

class ExperimentOne extends ExperimentOneBase {
  constructor (game) {
    super(game, "Experiment One", "Friday Night Magic", "pFNM");
  }
}

module.exports = ExperimentOne;
