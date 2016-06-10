"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighMarket extends UnimplementedCard {
  constructor (game) {
    super(game, "High Market", "Commander 2015", "C15");
  }
}

module.exports = HighMarket;
