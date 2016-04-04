"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WoollySpiderBase = require("../setATH/WoollySpider.js");

class WoollySpider extends WoollySpiderBase {
  constructor(game) {
    super(game, "Woolly Spider", "Beatdown Box Set", "BTD");
  }
}

module.exports = WoollySpider;
