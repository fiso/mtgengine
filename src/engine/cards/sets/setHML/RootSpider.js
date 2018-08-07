"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RootSpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Root Spider", "Homelands", "HML");
  }
}

module.exports = RootSpider;
