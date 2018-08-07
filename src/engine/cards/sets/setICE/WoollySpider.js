"use strict";
const Constants = require ("../../../Constants");
const WoollySpiderBase = require("../setME2/WoollySpider");

class WoollySpider extends WoollySpiderBase {
  constructor (game) {
    super(game, "Woolly Spider", "Ice Age", "ICE");
  }
}

module.exports = WoollySpider;
