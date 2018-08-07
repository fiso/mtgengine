"use strict";
const Constants = require ("../../../Constants");
const CityofTraitorsBase = require("../setTPR/CityofTraitors");

class CityofTraitors extends CityofTraitorsBase {
  constructor (game) {
    super(game, "City of Traitors", "World Championship Decks 1999", "WC99");
  }
}

module.exports = CityofTraitors;
