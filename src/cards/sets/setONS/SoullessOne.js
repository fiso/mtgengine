"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoullessOne extends UnimplementedCard {
  constructor(game) {
    super(game, "Soulless One", "Onslaught", "ONS");
  }
}

module.exports = SoullessOne;
