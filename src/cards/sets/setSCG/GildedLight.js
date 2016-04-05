"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GildedLight extends UnimplementedCard {
  constructor(game) {
    super(game, "Gilded Light", "Scourge", "SCG");
  }
}

module.exports = GildedLight;
