"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GargoyleCastle extends UnimplementedCard {
  constructor (game) {
    super(game, "Gargoyle Castle", "Commander 2014", "C14");
  }
}

module.exports = GargoyleCastle;
