"use strict";
const Constants = require ("../../../Constants");
const DreamCacheBase = require("../setC18/DreamCache");

class DreamCache extends DreamCacheBase {
  constructor (game) {
    super(game, "Dream Cache", "Tempest", "TMP");
  }
}

module.exports = DreamCache;
