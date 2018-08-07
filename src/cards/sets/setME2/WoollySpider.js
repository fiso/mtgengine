"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoollySpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Woolly Spider", "Masters Edition II", "ME2");
  }
}

module.exports = WoollySpider;
