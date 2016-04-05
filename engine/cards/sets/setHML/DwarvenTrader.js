"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenTrader extends UnimplementedCard {
  constructor(game) {
    super(game, "Dwarven Trader", "Homelands", "HML");
  }
}

module.exports = DwarvenTrader;
