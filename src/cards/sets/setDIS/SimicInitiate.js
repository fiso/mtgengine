"use strict";
const Constants = require ("../../../Constants");
const SimicInitiateBase = require("../setMM2/SimicInitiate");

class SimicInitiate extends SimicInitiateBase {
  constructor (game) {
    super(game, "Simic Initiate", "Dissension", "DIS");
  }
}

module.exports = SimicInitiate;
