"use strict";
const Constants = require ("../../../Constants");
const DeputyofAcquittalsBase = require("../setMM3/DeputyofAcquittals");

class DeputyofAcquittals extends DeputyofAcquittalsBase {
  constructor (game) {
    super(game, "Deputy of Acquittals", "Dragon's Maze", "DGM");
  }
}

module.exports = DeputyofAcquittals;
