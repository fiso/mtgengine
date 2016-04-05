"use strict";
const Constants = require ("../../../Constants");
const HundingGjornersenBase = require("../setLEG/HundingGjornersen");

class HundingGjornersen extends HundingGjornersenBase {
  constructor(game) {
    super(game, "Hunding Gjornersen", "Masters Edition III", "ME3");
  }
}

module.exports = HundingGjornersen;
