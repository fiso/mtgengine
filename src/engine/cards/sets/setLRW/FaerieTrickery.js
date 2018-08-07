"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaerieTrickery extends UnimplementedCard {
  constructor (game) {
    super(game, "Faerie Trickery", "Lorwyn", "LRW");
  }
}

module.exports = FaerieTrickery;
