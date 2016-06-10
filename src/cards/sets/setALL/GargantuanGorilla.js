"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GargantuanGorilla extends UnimplementedCard {
  constructor (game) {
    super(game, "Gargantuan Gorilla", "Alliances", "ALL");
  }
}

module.exports = GargantuanGorilla;
