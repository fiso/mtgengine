"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExperimentOne extends Card {
  constructor(game) {
    super(game, "Experiment One", "Commander 2015", "C15");
  }
}

module.exports = ExperimentOne;
