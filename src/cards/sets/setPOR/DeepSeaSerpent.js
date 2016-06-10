"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepSeaSerpent extends UnimplementedCard {
  constructor (game) {
    super(game, "Deep-Sea Serpent", "Portal", "POR");
  }
}

module.exports = DeepSeaSerpent;
