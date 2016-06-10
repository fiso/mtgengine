"use strict";
const Constants = require ("../../../Constants");
const SoltariPriestBase = require("../setpFNM/SoltariPriest");

class SoltariPriest extends SoltariPriestBase {
  constructor (game) {
    super(game, "Soltari Priest", "Super Series", "pSUS");
  }
}

module.exports = SoltariPriest;
