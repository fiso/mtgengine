"use strict";
const Constants = require ("../../../Constants");
const PenumbraSpiderBase = require("../setMM3/PenumbraSpider");

class PenumbraSpider extends PenumbraSpiderBase {
  constructor (game) {
    super(game, "Penumbra Spider", "Time Spiral", "TSP");
  }
}

module.exports = PenumbraSpider;
