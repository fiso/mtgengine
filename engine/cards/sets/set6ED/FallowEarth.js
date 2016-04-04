"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FallowEarth extends UnimplementedCard {
  constructor(game) {
    super(game, "Fallow Earth", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FallowEarth;
