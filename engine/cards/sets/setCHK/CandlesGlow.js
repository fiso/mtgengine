"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CandlesGlow extends UnimplementedCard {
  constructor(game) {
    super(game, "Candles' Glow", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CandlesGlow;
