"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EndlessOne extends Card {
  constructor(game) {
    super(game, "Endless One", "Battle for Zendikar", "BFZ");
  }
}

module.exports = EndlessOne;
