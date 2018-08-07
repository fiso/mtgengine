"use strict";
const Constants = require ("../../../Constants");
const ExperimentOneBase = require("../setC15/ExperimentOne");

class ExperimentOne extends ExperimentOneBase {
  constructor (game) {
    super(game, "Experiment One", "Friday Night Magic 2013", "F13");
  }
}

module.exports = ExperimentOne;
