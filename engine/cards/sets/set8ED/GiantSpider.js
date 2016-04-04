"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantSpiderBase = require("../setATH/GiantSpider.js");

class GiantSpider extends GiantSpiderBase {
  constructor(game) {
    super(game, "Giant Spider", "Eighth Edition", "8ED");
  }
}

module.exports = GiantSpider;
