"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhiteKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "White Knight", "Anthologies", "ATH");
  }
}

module.exports = WhiteKnight;
