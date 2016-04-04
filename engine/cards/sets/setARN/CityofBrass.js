"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CityofBrass extends Card {
  constructor(game) {
    super(game, "City of Brass", "Arabian Nights", "ARN");
  }
}

module.exports = CityofBrass;
