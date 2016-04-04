"use strict";
const Constants = require ("../../../Constants");
const TrainedOrggBase = require("../set7ED/TrainedOrgg");

class TrainedOrgg extends TrainedOrggBase {
  constructor(game) {
    super(game, "Trained Orgg", "Starter 1999", "S99");
  }
}

module.exports = TrainedOrgg;
