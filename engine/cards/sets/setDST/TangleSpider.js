"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TangleSpider extends UnimplementedCard {
  constructor(game) {
    super(game, "Tangle Spider", "Darksteel", "DST");
  }
}

module.exports = TangleSpider;
