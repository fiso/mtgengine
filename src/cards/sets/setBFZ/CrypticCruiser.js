"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrypticCruiser extends UnimplementedCard {
  constructor(game) {
    super(game, "Cryptic Cruiser", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CrypticCruiser;
