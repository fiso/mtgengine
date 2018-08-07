"use strict";
const Constants = require ("../../../Constants");
const CityofBrassBase = require("../setMD1/CityofBrass");

class CityofBrass extends CityofBrassBase {
  constructor (game) {
    super(game, "City of Brass", "World Championship Decks 2000", "WC00");
  }
}

module.exports = CityofBrass;
