"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CityinaBottle extends UnimplementedCard {
  constructor(game) {
    super(game, "City in a Bottle", "Arabian Nights", "ARN");
  }
}

module.exports = CityinaBottle;
