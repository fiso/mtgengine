"use strict";
const Constants = require ("../../../Constants");
const SurvivalCacheBase = require("../setC13/SurvivalCache");

class SurvivalCache extends SurvivalCacheBase {
  constructor(game) {
    super(game, "Survival Cache", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SurvivalCache;
