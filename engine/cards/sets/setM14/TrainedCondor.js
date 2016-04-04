"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrainedCondor extends Card {
  constructor(game) {
    super(game, "Trained Condor", "Magic 2014 Core Set", "M14");
  }
}

module.exports = TrainedCondor;
