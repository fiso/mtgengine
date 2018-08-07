"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UltimatePrice extends UnimplementedCard {
  constructor (game) {
    super(game, "Ultimate Price", "Dragons of Tarkir", "DTK");
  }
}

module.exports = UltimatePrice;
