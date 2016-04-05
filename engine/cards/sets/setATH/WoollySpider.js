"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoollySpider extends UnimplementedCard {
  constructor(game) {
    super(game, "Woolly Spider", "Anthologies", "ATH");
  }
}

module.exports = WoollySpider;
