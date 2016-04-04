"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JadeMonolith extends UnimplementedCard {
  constructor(game) {
    super(game, "Jade Monolith", "Classic Sixth Edition", "6ED");
  }
}

module.exports = JadeMonolith;
