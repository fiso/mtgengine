"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CityofBrass extends UnimplementedCard {
  constructor (game) {
    super(game, "City of Brass", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = CityofBrass;
