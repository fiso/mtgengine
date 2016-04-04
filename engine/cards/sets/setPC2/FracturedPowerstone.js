"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FracturedPowerstone extends Card {
  constructor(game) {
    super(game, "Fractured Powerstone", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = FracturedPowerstone;
