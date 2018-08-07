"use strict";
const Constants = require ("../../../Constants");
const SimicSignetBase = require("../setCM2/SimicSignet");

class SimicSignet extends SimicSignetBase {
  constructor (game) {
    super(game, "Simic Signet", "Commander 2013", "C13");
  }
}

module.exports = SimicSignet;
