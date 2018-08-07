"use strict";
const Constants = require ("../../../Constants");
const GargoyleCastleBase = require("../setCMA/GargoyleCastle");

class GargoyleCastle extends GargoyleCastleBase {
  constructor (game) {
    super(game, "Gargoyle Castle", "Magic 2010", "M10");
  }
}

module.exports = GargoyleCastle;
