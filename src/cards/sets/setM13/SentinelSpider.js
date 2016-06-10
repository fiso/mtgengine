"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SentinelSpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Sentinel Spider", "Magic 2013", "M13");
  }
}

module.exports = SentinelSpider;
