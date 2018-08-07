"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vermiculos extends UnimplementedCard {
  constructor (game) {
    super(game, "Vermiculos", "Mirrodin", "MRD");
  }
}

module.exports = Vermiculos;
