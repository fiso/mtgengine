"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpittingSpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Spitting Spider", "Eighth Edition", "8ED");
  }
}

module.exports = SpittingSpider;
