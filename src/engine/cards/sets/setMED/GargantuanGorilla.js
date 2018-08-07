"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GargantuanGorilla extends UnimplementedCard {
  constructor (game) {
    super(game, "Gargantuan Gorilla", "Masters Edition", "MED");
  }
}

module.exports = GargantuanGorilla;
