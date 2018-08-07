"use strict";
const Constants = require ("../../../Constants");
const CityofBrassBase = require("../setMD1/CityofBrass");

class CityofBrass extends CityofBrassBase {
  constructor (game) {
    super(game, "City of Brass", "Magic Online Promos", "PRM");
  }
}

module.exports = CityofBrass;
