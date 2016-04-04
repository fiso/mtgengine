"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnakeoftheGoldenGrove extends UnimplementedCard {
  constructor(game) {
    super(game, "Snake of the Golden Grove", "Born of the Gods", "BNG");
  }
}

module.exports = SnakeoftheGoldenGrove;
