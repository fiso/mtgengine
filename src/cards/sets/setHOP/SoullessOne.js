"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoullessOne extends UnimplementedCard {
  constructor (game) {
    super(game, "Soulless One", "Planechase", "HOP");
  }
}

module.exports = SoullessOne;
