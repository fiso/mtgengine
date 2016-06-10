"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoblePanther extends UnimplementedCard {
  constructor (game) {
    super(game, "Noble Panther", "Invasion", "INV");
  }
}

module.exports = NoblePanther;
