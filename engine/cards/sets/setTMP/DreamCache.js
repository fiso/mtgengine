"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreamCacheBase = require("../set6ED/DreamCache.js");

class DreamCache extends DreamCacheBase {
  constructor(game) {
    super(game, "Dream Cache", "Tempest", "TMP");
  }
}

module.exports = DreamCache;
