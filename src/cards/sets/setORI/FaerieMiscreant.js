"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaerieMiscreant extends UnimplementedCard {
  constructor (game) {
    super(game, "Faerie Miscreant", "Magic Origins", "ORI");
  }
}

module.exports = FaerieMiscreant;
