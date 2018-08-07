"use strict";
const Constants = require ("../../../Constants");
const CityofTraitorsBase = require("../setTPR/CityofTraitors");

class CityofTraitors extends CityofTraitorsBase {
  constructor (game) {
    super(game, "City of Traitors", "Exodus", "EXO");
  }
}

module.exports = CityofTraitors;
