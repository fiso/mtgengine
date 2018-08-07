"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FarmMarket extends UnimplementedCard {
  constructor (game) {
    super(game, "Farm // Market", "Hour of Devastation", "HOU");
  }
}

module.exports = FarmMarket;
