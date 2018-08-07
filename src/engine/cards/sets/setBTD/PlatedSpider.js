"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlatedSpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Plated Spider", "Beatdown Box Set", "BTD");
  }
}

module.exports = PlatedSpider;
