"use strict";
const Constants = require ("../../../Constants");
const HundingGjornersenBase = require("../setME3/HundingGjornersen");

class HundingGjornersen extends HundingGjornersenBase {
  constructor (game) {
    super(game, "Hunding Gjornersen", "Legends", "LEG");
  }
}

module.exports = HundingGjornersen;
