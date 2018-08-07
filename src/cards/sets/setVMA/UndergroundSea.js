"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndergroundSea extends UnimplementedCard {
  constructor (game) {
    super(game, "Underground Sea", "Vintage Masters", "VMA");
  }
}

module.exports = UndergroundSea;
