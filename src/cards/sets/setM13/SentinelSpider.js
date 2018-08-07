"use strict";
const Constants = require ("../../../Constants");
const SentinelSpiderBase = require("../setEMA/SentinelSpider");

class SentinelSpider extends SentinelSpiderBase {
  constructor (game) {
    super(game, "Sentinel Spider", "Magic 2013", "M13");
  }
}

module.exports = SentinelSpider;
