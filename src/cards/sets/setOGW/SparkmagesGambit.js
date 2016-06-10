"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SparkmagesGambit extends UnimplementedCard {
  constructor (game) {
    super(game, "Sparkmage's Gambit", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SparkmagesGambit;
