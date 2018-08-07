"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OwlFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Owl Familiar", "Vintage Masters", "VMA");
  }
}

module.exports = OwlFamiliar;
