"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CityinaBottle extends UnimplementedCard {
  constructor (game) {
    super(game, "City in a Bottle", "Vintage Masters", "VMA");
  }
}

module.exports = CityinaBottle;
