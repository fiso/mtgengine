"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EpicExperimentBase = require("../setC15/EpicExperiment.js");

class EpicExperiment extends EpicExperimentBase {
  constructor(game) {
    super(game, "Epic Experiment", "Return to Ravnica", "RTR");
  }
}

module.exports = EpicExperiment;
