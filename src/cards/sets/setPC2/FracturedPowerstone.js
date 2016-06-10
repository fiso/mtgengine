"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FracturedPowerstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Fractured Powerstone", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = FracturedPowerstone;
