"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CacheRaidersBase = require("../setDDI/CacheRaiders.js");

class CacheRaiders extends CacheRaidersBase {
  constructor(game) {
    super(game, "Cache Raiders", "Eventide", "EVE");
  }
}

module.exports = CacheRaiders;
