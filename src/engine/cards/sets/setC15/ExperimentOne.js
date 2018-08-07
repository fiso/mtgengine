"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExperimentOne extends UnimplementedCard {
  constructor (game) {
    super(game, "Experiment One", "Commander 2015", "C15");
  }
}

module.exports = ExperimentOne;
