"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantSpiderBase = require("../setATH/GiantSpider.js");

class GiantSpider extends GiantSpiderBase {
  constructor(game) {
    super(game, "Giant Spider", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GiantSpider;
