"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GargoyleCastleBase = require("../setC14/GargoyleCastle.js");

class GargoyleCastle extends GargoyleCastleBase {
  constructor(game) {
    super(game, "Gargoyle Castle", "Magic 2010", "M10");
  }
}

module.exports = GargoyleCastle;
