"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GargoyleCastle extends UnimplementedCard {
  constructor (game) {
    super(game, "Gargoyle Castle", "Commander Anthology", "CMA");
  }
}

module.exports = GargoyleCastle;
