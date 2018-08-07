"use strict";
const Constants = require ("../../../Constants");
const MadcapExperimentBase = require("../setKLD/MadcapExperiment");

class MadcapExperiment extends MadcapExperimentBase {
  constructor (game) {
    super(game, "Madcap Experiment", "Kaladesh Promos", "PKLD");
  }
}

module.exports = MadcapExperiment;
