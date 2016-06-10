"use strict";
const Constants = require ("../../../Constants");
const CacheRaidersBase = require("../setDDI/CacheRaiders");

class CacheRaiders extends CacheRaidersBase {
  constructor (game) {
    super(game, "Cache Raiders", "Eventide", "EVE");
  }
}

module.exports = CacheRaiders;
