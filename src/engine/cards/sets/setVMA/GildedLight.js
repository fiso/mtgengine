"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GildedLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Gilded Light", "Vintage Masters", "VMA");
  }
}

module.exports = GildedLight;
