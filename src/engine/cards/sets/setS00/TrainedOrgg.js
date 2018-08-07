"use strict";
const Constants = require ("../../../Constants");
const TrainedOrggBase = require("../set7ED/TrainedOrgg");

class TrainedOrgg extends TrainedOrggBase {
  constructor (game) {
    super(game, "Trained Orgg", "Starter 2000", "S00");
  }
}

module.exports = TrainedOrgg;
