"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tangle extends UnimplementedCard {
  constructor (game) {
    super(game, "Tangle", "Vintage Masters", "VMA");
  }
}

module.exports = Tangle;
