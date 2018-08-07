"use strict";
const Constants = require ("../../../Constants");
const TangleSpiderBase = require("../set10E/TangleSpider");

class TangleSpider extends TangleSpiderBase {
  constructor (game) {
    super(game, "Tangle Spider", "Darksteel", "DST");
  }
}

module.exports = TangleSpider;
