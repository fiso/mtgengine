"use strict";
const Constants = require ("../../../Constants");
const SoltariPriestBase = require("../setpFNM/SoltariPriest");

class SoltariPriest extends SoltariPriestBase {
  constructor(game) {
    super(game, "Soltari Priest", "Tempest Remastered", "TPR");
  }
}

module.exports = SoltariPriest;
