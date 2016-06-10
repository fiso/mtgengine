"use strict";
const Constants = require ("../../../Constants");
const GiantSpiderBase = require("../setATH/GiantSpider");

class GiantSpider extends GiantSpiderBase {
  constructor (game) {
    super(game, "Giant Spider", "Seventh Edition", "7ED");
  }
}

module.exports = GiantSpider;
