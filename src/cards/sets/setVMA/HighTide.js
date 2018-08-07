"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighTide extends UnimplementedCard {
  constructor (game) {
    super(game, "High Tide", "Vintage Masters", "VMA");
  }
}

module.exports = HighTide;
