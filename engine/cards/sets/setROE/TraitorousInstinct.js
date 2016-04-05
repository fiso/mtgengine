"use strict";
const Constants = require ("../../../Constants");
const TraitorousInstinctBase = require("../setRTR/TraitorousInstinct");

class TraitorousInstinct extends TraitorousInstinctBase {
  constructor(game) {
    super(game, "Traitorous Instinct", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = TraitorousInstinct;
