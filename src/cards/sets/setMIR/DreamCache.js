"use strict";
const Constants = require ("../../../Constants");
const DreamCacheBase = require("../set6ED/DreamCache");

class DreamCache extends DreamCacheBase {
  constructor (game) {
    super(game, "Dream Cache", "Mirage", "MIR");
  }
}

module.exports = DreamCache;
