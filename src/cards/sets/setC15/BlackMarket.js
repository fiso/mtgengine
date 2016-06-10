"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlackMarket extends UnimplementedCard {
  constructor (game) {
    super(game, "Black Market", "Commander 2015", "C15");
  }
}

module.exports = BlackMarket;
