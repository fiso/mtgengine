"use strict";
const Constants = require ("../../../Constants");
const WoollySpiderBase = require("../setME2/WoollySpider");

class WoollySpider extends WoollySpiderBase {
  constructor (game) {
    super(game, "Woolly Spider", "Anthologies", "ATH");
  }
}

module.exports = WoollySpider;
