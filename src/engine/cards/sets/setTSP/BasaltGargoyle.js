"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BasaltGargoyle extends UnimplementedCard {
  constructor (game) {
    super(game, "Basalt Gargoyle", "Time Spiral", "TSP");
  }
}

module.exports = BasaltGargoyle;
