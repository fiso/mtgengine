"use strict";
const Constants = require ("../../../Constants");
const CityofBrassBase = require("../setARN/CityofBrass");

class CityofBrass extends CityofBrassBase {
  constructor (game) {
    super(game, "City of Brass", "Masters Edition IV", "ME4");
  }
}

module.exports = CityofBrass;
