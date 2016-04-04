"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SentinelSpider extends Card {
  constructor(game) {
    super(game, "Sentinel Spider", "Magic 2013", "M13");
  }
}

module.exports = SentinelSpider;
