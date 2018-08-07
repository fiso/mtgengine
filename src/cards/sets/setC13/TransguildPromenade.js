"use strict";
const Constants = require ("../../../Constants");
const TransguildPromenadeBase = require("../setCMA/TransguildPromenade");

class TransguildPromenade extends TransguildPromenadeBase {
  constructor (game) {
    super(game, "Transguild Promenade", "Commander 2013", "C13");
  }
}

module.exports = TransguildPromenade;
