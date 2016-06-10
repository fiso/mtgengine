"use strict";
const Constants = require ("../../../Constants");
const CanopySpiderBase = require("../setATH/CanopySpider");

class CanopySpider extends CanopySpiderBase {
  constructor (game) {
    super(game, "Canopy Spider", "Eighth Edition", "8ED");
  }
}

module.exports = CanopySpider;
