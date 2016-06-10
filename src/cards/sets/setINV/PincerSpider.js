"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PincerSpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Pincer Spider", "Invasion", "INV");
  }
}

module.exports = PincerSpider;
