"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EpicExperiment extends UnimplementedCard {
  constructor (game) {
    super(game, "Epic Experiment", "Commander 2015", "C15");
  }
}

module.exports = EpicExperiment;
