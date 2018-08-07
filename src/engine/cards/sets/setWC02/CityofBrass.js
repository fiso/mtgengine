"use strict";
const Constants = require ("../../../Constants");
const CityofBrassBase = require("../setMD1/CityofBrass");

class CityofBrass extends CityofBrassBase {
  constructor (game) {
    super(game, "City of Brass", "World Championship Decks 2002", "WC02");
  }
}

module.exports = CityofBrass;
