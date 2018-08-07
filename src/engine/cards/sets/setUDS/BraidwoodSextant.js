"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BraidwoodSextant extends UnimplementedCard {
  constructor (game) {
    super(game, "Braidwood Sextant", "Urza's Destiny", "UDS");
  }
}

module.exports = BraidwoodSextant;
