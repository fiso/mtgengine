"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrainedArmodonBase = require("../set6ED/TrainedArmodon.js");

class TrainedArmodon extends TrainedArmodonBase {
  constructor(game) {
    super(game, "Trained Armodon", "Tempest Remastered", "TPR");
  }
}

module.exports = TrainedArmodon;
