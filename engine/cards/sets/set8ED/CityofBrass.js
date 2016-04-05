"use strict";
const Constants = require ("../../../Constants");
const CityofBrassBase = require("../setARN/CityofBrass");

class CityofBrass extends CityofBrassBase {
  constructor(game) {
    super(game, "City of Brass", "Eighth Edition", "8ED");
  }
}

module.exports = CityofBrass;
