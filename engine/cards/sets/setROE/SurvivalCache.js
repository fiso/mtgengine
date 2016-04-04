"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SurvivalCacheBase = require("../setC13/SurvivalCache.js");

class SurvivalCache extends SurvivalCacheBase {
  constructor(game) {
    super(game, "Survival Cache", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SurvivalCache;
