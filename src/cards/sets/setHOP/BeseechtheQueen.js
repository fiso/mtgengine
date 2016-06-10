"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeseechtheQueen extends UnimplementedCard {
  constructor (game) {
    super(game, "Beseech the Queen", "Planechase", "HOP");
  }
}

module.exports = BeseechtheQueen;
