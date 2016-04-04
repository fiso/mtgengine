"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CityinaBottleBase = require("../setARN/CityinaBottle.js");

class CityinaBottle extends CityinaBottleBase {
  constructor(game) {
    super(game, "City in a Bottle", "Vintage Masters", "VMA");
  }
}

module.exports = CityinaBottle;
