"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteelyResolve extends UnimplementedCard {
  constructor (game) {
    super(game, "Steely Resolve", "Onslaught", "ONS");
  }
}

module.exports = SteelyResolve;
