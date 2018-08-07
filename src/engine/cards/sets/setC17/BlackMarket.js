"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlackMarket extends UnimplementedCard {
  constructor (game) {
    super(game, "Black Market", "Commander 2017", "C17");
  }
}

module.exports = BlackMarket;
