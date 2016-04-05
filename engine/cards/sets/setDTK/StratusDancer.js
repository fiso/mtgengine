"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StratusDancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Stratus Dancer", "Dragons of Tarkir", "DTK");
  }
}

module.exports = StratusDancer;
