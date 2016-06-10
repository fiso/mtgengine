"use strict";
const Constants = require ("../../../Constants");
const CityofBrassBase = require("../setARN/CityofBrass");

class CityofBrass extends CityofBrassBase {
  constructor (game) {
    super(game, "City of Brass", "Seventh Edition", "7ED");
  }
}

module.exports = CityofBrass;
