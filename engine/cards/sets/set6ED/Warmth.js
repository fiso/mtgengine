"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Warmth extends UnimplementedCard {
  constructor(game) {
    super(game, "Warmth", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Warmth;
