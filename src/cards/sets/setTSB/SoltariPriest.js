"use strict";
const Constants = require ("../../../Constants");
const SoltariPriestBase = require("../setTPR/SoltariPriest");

class SoltariPriest extends SoltariPriestBase {
  constructor (game) {
    super(game, "Soltari Priest", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = SoltariPriest;
