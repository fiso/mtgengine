"use strict";
const Constants = require ("../../../Constants");
const SoltariPriestBase = require("../setTPR/SoltariPriest");

class SoltariPriest extends SoltariPriestBase {
  constructor (game) {
    super(game, "Soltari Priest", "Friday Night Magic 2002", "F02");
  }
}

module.exports = SoltariPriest;
