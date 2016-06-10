"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshcoatBear extends UnimplementedCard {
  constructor (game) {
    super(game, "Ashcoat Bear", "Time Spiral", "TSP");
  }
}

module.exports = AshcoatBear;
