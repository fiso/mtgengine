"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkywingAven extends UnimplementedCard {
  constructor (game) {
    super(game, "Skywing Aven", "Vintage Masters", "VMA");
  }
}

module.exports = SkywingAven;
