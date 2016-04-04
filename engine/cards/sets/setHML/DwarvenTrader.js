"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenTrader extends Card {
  constructor(game) {
    super(game, "Dwarven Trader", "Homelands", "HML");
  }
}

module.exports = DwarvenTrader;
