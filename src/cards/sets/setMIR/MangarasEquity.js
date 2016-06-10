"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MangarasEquity extends UnimplementedCard {
  constructor (game) {
    super(game, "Mangara's Equity", "Mirage", "MIR");
  }
}

module.exports = MangarasEquity;
