"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpittingSpiderBase = require("../set8ED/SpittingSpider.js");

class SpittingSpider extends SpittingSpiderBase {
  constructor(game) {
    super(game, "Spitting Spider", "Prophecy", "PCY");
  }
}

module.exports = SpittingSpider;
