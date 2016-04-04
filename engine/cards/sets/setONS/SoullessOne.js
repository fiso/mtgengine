"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoullessOne extends Card {
  constructor(game) {
    super(game, "Soulless One", "Onslaught", "ONS");
  }
}

module.exports = SoullessOne;
