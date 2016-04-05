"use strict";
const Constants = require ("../../../Constants");
const CityofBrassBase = require("../setARN/CityofBrass");

class CityofBrass extends CityofBrassBase {
  constructor(game) {
    super(game, "City of Brass", "Modern Masters", "MMA");
  }
}

module.exports = CityofBrass;
