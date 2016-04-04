"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CityinaBottle extends Card {
  constructor(game) {
    super(game, "City in a Bottle", "Arabian Nights", "ARN");
  }
}

module.exports = CityinaBottle;
