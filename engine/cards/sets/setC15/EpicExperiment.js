"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EpicExperiment extends Card {
  constructor(game) {
    super(game, "Epic Experiment", "Commander 2015", "C15");
  }
}

module.exports = EpicExperiment;
