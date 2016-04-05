"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncestralTribute extends UnimplementedCard {
  constructor(game) {
    super(game, "Ancestral Tribute", "Odyssey", "ODY");
  }
}

module.exports = AncestralTribute;
