"use strict";
const Constants = require ("../../../Constants");
const DreamCacheBase = require("../set6ED/DreamCache");

class DreamCache extends DreamCacheBase {
  constructor (game) {
    super(game, "Dream Cache", "Tempest", "TMP");
  }
}

module.exports = DreamCache;
