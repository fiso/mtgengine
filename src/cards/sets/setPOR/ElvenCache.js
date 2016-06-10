"use strict";
const Constants = require ("../../../Constants");
const ElvenCacheBase = require("../set6ED/ElvenCache");

class ElvenCache extends ElvenCacheBase {
  constructor (game) {
    super(game, "Elven Cache", "Portal", "POR");
  }
}

module.exports = ElvenCache;
