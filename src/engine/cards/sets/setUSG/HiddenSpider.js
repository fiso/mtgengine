"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiddenSpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Hidden Spider", "Urza's Saga", "USG");
  }
}

module.exports = HiddenSpider;
