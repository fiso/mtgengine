"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CanopySpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Canopy Spider", "Anthologies", "ATH");
  }
}

module.exports = CanopySpider;
