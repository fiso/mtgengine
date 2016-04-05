"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BasaltMonolith extends UnimplementedCard {
  constructor(game) {
    super(game, "Basalt Monolith", "Collector's Edition", "CED");
  }
}

module.exports = BasaltMonolith;
