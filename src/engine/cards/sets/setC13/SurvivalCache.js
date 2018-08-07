"use strict";
const Constants = require ("../../../Constants");
const SurvivalCacheBase = require("../setIMA/SurvivalCache");

class SurvivalCache extends SurvivalCacheBase {
  constructor (game) {
    super(game, "Survival Cache", "Commander 2013", "C13");
  }
}

module.exports = SurvivalCache;
