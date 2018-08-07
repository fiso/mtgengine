"use strict";
const Constants = require ("../../../Constants");
const SurvivalCacheBase = require("../setIMA/SurvivalCache");

class SurvivalCache extends SurvivalCacheBase {
  constructor (game) {
    super(game, "Survival Cache", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SurvivalCache;
