"use strict";
const Constants = require ("../../../Constants");
const CityinaBottleBase = require("../setARN/CityinaBottle");

class CityinaBottle extends CityinaBottleBase {
  constructor(game) {
    super(game, "City in a Bottle", "Vintage Masters", "VMA");
  }
}

module.exports = CityinaBottle;
