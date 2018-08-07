"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IlluminatedWings extends UnimplementedCard {
  constructor (game) {
    super(game, "Illuminated Wings", "Urza's Destiny", "UDS");
  }
}

module.exports = IlluminatedWings;
