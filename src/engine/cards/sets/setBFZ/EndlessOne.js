"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EndlessOne extends UnimplementedCard {
  constructor (game) {
    super(game, "Endless One", "Battle for Zendikar", "BFZ");
  }
}

module.exports = EndlessOne;
