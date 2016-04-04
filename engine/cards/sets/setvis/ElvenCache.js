"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvenCacheBase = require("../set6ED/ElvenCache.js");

class ElvenCache extends ElvenCacheBase {
  constructor(game) {
    super(game, "Elven Cache", "Visions", "VIS");
  }
}

module.exports = ElvenCache;
