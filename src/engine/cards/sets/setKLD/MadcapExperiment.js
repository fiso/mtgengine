"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MadcapExperiment extends UnimplementedCard {
  constructor (game) {
    super(game, "Madcap Experiment", "Kaladesh", "KLD");
  }
}

module.exports = MadcapExperiment;
