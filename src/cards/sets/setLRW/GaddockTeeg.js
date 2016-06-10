"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaddockTeeg extends UnimplementedCard {
  constructor (game) {
    super(game, "Gaddock Teeg", "Lorwyn", "LRW");
  }
}

module.exports = GaddockTeeg;
