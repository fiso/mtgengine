"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrainedOrggBase = require("../set7ED/TrainedOrgg.js");

class TrainedOrgg extends TrainedOrggBase {
  constructor(game) {
    super(game, "Trained Orgg", "Starter 1999", "S99");
  }
}

module.exports = TrainedOrgg;
