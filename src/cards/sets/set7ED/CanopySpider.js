"use strict";
const Constants = require ("../../../Constants");
const CanopySpiderBase = require("../setATH/CanopySpider");

class CanopySpider extends CanopySpiderBase {
  constructor (game) {
    super(game, "Canopy Spider", "Seventh Edition", "7ED");
  }
}

module.exports = CanopySpider;
