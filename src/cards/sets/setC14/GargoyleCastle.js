"use strict";
const Constants = require ("../../../Constants");
const GargoyleCastleBase = require("../setCMA/GargoyleCastle");

class GargoyleCastle extends GargoyleCastleBase {
  constructor (game) {
    super(game, "Gargoyle Castle", "Commander 2014", "C14");
  }
}

module.exports = GargoyleCastle;
