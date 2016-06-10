"use strict";
const Constants = require ("../../../Constants");
const PlagueStingerBase = require("../setSOM/PlagueStinger");

class PlagueStinger extends PlagueStingerBase {
  constructor (game) {
    super(game, "Plague Stinger", "WPN and Gateway", "pWPN");
  }
}

module.exports = PlagueStinger;
