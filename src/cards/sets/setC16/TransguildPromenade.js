"use strict";
const Constants = require ("../../../Constants");
const TransguildPromenadeBase = require("../setCMA/TransguildPromenade");

class TransguildPromenade extends TransguildPromenadeBase {
  constructor (game) {
    super(game, "Transguild Promenade", "Commander 2016", "C16");
  }
}

module.exports = TransguildPromenade;
