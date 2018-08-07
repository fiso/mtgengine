"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlackVise extends UnimplementedCard {
  constructor (game) {
    super(game, "Black Vise", "Kaladesh Inventions", "MPS");
  }
}

module.exports = BlackVise;
