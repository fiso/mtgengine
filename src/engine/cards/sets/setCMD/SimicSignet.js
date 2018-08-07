"use strict";
const Constants = require ("../../../Constants");
const SimicSignetBase = require("../setCM2/SimicSignet");

class SimicSignet extends SimicSignetBase {
  constructor (game) {
    super(game, "Simic Signet", "Commander 2011", "CMD");
  }
}

module.exports = SimicSignet;
