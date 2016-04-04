"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CandlesGlow extends Card {
  constructor(game) {
    super(game, "Candles' Glow", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CandlesGlow;
