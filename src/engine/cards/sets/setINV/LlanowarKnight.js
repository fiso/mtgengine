"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LlanowarKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Llanowar Knight", "Invasion", "INV");
  }
}

module.exports = LlanowarKnight;
