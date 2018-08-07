"use strict";
const Constants = require ("../../../Constants");
const SoltariPriestBase = require("../setTPR/SoltariPriest");

class SoltariPriest extends SoltariPriestBase {
  constructor (game) {
    super(game, "Soltari Priest", "Junior Series Europe", "PJSE");
  }
}

module.exports = SoltariPriest;
