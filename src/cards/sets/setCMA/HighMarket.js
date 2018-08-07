"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighMarket extends UnimplementedCard {
  constructor (game) {
    super(game, "High Market", "Commander Anthology", "CMA");
  }
}

module.exports = HighMarket;
