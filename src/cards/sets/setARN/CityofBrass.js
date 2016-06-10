"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CityofBrass extends UnimplementedCard {
  constructor (game) {
    super(game, "City of Brass", "Arabian Nights", "ARN");
  }
}

module.exports = CityofBrass;
