"use strict";
const Constants = require ("../../../Constants");
const SimicSignetBase = require("../setC13/SimicSignet");

class SimicSignet extends SimicSignetBase {
  constructor(game) {
    super(game, "Simic Signet", "Dissension", "DIS");
  }
}

module.exports = SimicSignet;
