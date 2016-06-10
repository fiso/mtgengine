"use strict";
const Constants = require ("../../../Constants");
const GiantSpiderBase = require("../setATH/GiantSpider");

class GiantSpider extends GiantSpiderBase {
  constructor (game) {
    super(game, "Giant Spider", "Portal", "POR");
  }
}

module.exports = GiantSpider;
