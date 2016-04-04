"use strict";
const Constants = require ("../../../Constants");
const PenumbraSpiderBase = require("../setCMD/PenumbraSpider");

class PenumbraSpider extends PenumbraSpiderBase {
  constructor(game) {
    super(game, "Penumbra Spider", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = PenumbraSpider;
