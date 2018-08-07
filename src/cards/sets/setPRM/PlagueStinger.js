"use strict";
const Constants = require ("../../../Constants");
const PlagueStingerBase = require("../setSOM/PlagueStinger");

class PlagueStinger extends PlagueStingerBase {
  constructor (game) {
    super(game, "Plague Stinger", "Magic Online Promos", "PRM");
  }
}

module.exports = PlagueStinger;
