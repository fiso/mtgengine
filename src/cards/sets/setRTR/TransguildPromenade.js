"use strict";
const Constants = require ("../../../Constants");
const TransguildPromenadeBase = require("../setCMA/TransguildPromenade");

class TransguildPromenade extends TransguildPromenadeBase {
  constructor (game) {
    super(game, "Transguild Promenade", "Return to Ravnica", "RTR");
  }
}

module.exports = TransguildPromenade;
