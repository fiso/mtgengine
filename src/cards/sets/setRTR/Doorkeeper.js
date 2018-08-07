"use strict";
const Constants = require ("../../../Constants");
const DoorkeeperBase = require("../setIMA/Doorkeeper");

class Doorkeeper extends DoorkeeperBase {
  constructor (game) {
    super(game, "Doorkeeper", "Return to Ravnica", "RTR");
  }
}

module.exports = Doorkeeper;
