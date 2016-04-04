"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExperimentKraj extends Card {
  constructor(game) {
    super(game, "Experiment Kraj", "Dissension", "DIS");
  }
}

module.exports = ExperimentKraj;
