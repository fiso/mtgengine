"use strict";
const Constants = require ("../../../Constants");
const BlessedOratorBase = require("../set9ED/BlessedOrator");

class BlessedOrator extends BlessedOratorBase {
  constructor(game) {
    super(game, "Blessed Orator", "Odyssey", "ODY");
  }
}

module.exports = BlessedOrator;
