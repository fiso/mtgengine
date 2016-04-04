"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PenumbraSpiderBase = require("../setCMD/PenumbraSpider.js");

class PenumbraSpider extends PenumbraSpiderBase {
  constructor(game) {
    super(game, "Penumbra Spider", "Modern Masters", "MMA");
  }
}

module.exports = PenumbraSpider;
