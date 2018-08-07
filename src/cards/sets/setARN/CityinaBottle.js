"use strict";
const Constants = require ("../../../Constants");
const CityinaBottleBase = require("../setVMA/CityinaBottle");

class CityinaBottle extends CityinaBottleBase {
  constructor (game) {
    super(game, "City in a Bottle", "Arabian Nights", "ARN");
  }
}

module.exports = CityinaBottle;
