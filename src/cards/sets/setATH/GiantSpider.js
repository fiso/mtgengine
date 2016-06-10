"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantSpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Giant Spider", "Anthologies", "ATH");
  }
}

module.exports = GiantSpider;
