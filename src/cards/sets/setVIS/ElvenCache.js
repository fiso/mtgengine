"use strict";
const Constants = require ("../../../Constants");
const ElvenCacheBase = require("../setTD0/ElvenCache");

class ElvenCache extends ElvenCacheBase {
  constructor (game) {
    super(game, "Elven Cache", "Visions", "VIS");
  }
}

module.exports = ElvenCache;
