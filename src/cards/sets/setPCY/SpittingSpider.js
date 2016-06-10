"use strict";
const Constants = require ("../../../Constants");
const SpittingSpiderBase = require("../set8ED/SpittingSpider");

class SpittingSpider extends SpittingSpiderBase {
  constructor (game) {
    super(game, "Spitting Spider", "Prophecy", "PCY");
  }
}

module.exports = SpittingSpider;
