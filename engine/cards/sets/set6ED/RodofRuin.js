"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RodofRuin extends UnimplementedCard {
  constructor(game) {
    super(game, "Rod of Ruin", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RodofRuin;
