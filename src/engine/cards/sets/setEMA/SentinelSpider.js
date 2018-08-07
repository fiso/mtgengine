"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SentinelSpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Sentinel Spider", "Eternal Masters", "EMA");
  }
}

module.exports = SentinelSpider;
