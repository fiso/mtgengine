"use strict";
const Constants = require ("../../../Constants");
const SimicSignetBase = require("../setCM2/SimicSignet");

class SimicSignet extends SimicSignetBase {
  constructor (game) {
    super(game, "Simic Signet", "Modern Masters 2017", "MM3");
  }
}

module.exports = SimicSignet;
