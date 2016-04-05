"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LlanowarCavalry extends UnimplementedCard {
  constructor(game) {
    super(game, "Llanowar Cavalry", "Invasion", "INV");
  }
}

module.exports = LlanowarCavalry;
