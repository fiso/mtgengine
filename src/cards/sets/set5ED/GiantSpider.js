"use strict";
const Constants = require ("../../../Constants");
const GiantSpiderBase = require("../setM19/GiantSpider");

class GiantSpider extends GiantSpiderBase {
  constructor (game) {
    super(game, "Giant Spider", "Fifth Edition", "5ED");
  }
}

module.exports = GiantSpider;
