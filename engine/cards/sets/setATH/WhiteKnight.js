"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhiteKnight extends Card {
  constructor(game) {
    super(game, "White Knight", "Anthologies", "ATH");
  }
}

module.exports = WhiteKnight;
