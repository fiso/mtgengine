"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Savannah extends UnimplementedCard {
  constructor (game) {
    super(game, "Savannah", "Vintage Masters", "VMA");
  }
}

module.exports = Savannah;
