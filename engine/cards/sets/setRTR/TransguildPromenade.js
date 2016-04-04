"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TransguildPromenadeBase = require("../setC13/TransguildPromenade.js");

class TransguildPromenade extends TransguildPromenadeBase {
  constructor(game) {
    super(game, "Transguild Promenade", "Return to Ravnica", "RTR");
  }
}

module.exports = TransguildPromenade;
