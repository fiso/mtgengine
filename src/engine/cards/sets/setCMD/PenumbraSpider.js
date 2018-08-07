"use strict";
const Constants = require ("../../../Constants");
const PenumbraSpiderBase = require("../setMM3/PenumbraSpider");

class PenumbraSpider extends PenumbraSpiderBase {
  constructor (game) {
    super(game, "Penumbra Spider", "Commander 2011", "CMD");
  }
}

module.exports = PenumbraSpider;
