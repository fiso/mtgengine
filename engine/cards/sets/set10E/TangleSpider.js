"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TangleSpiderBase = require("../setDST/TangleSpider.js");

class TangleSpider extends TangleSpiderBase {
  constructor(game) {
    super(game, "Tangle Spider", "Tenth Edition", "10E");
  }
}

module.exports = TangleSpider;
