"use strict";
const Constants = require ("../../../Constants");
const RiddlekeeperBase = require("../setCM2/Riddlekeeper");

class Riddlekeeper extends RiddlekeeperBase {
  constructor (game) {
    super(game, "Riddlekeeper", "Commander 2011", "CMD");
  }
}

module.exports = Riddlekeeper;
