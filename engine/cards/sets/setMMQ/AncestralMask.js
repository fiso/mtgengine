"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncestralMask extends UnimplementedCard {
  constructor(game) {
    super(game, "Ancestral Mask", "Mercadian Masques", "MMQ");
  }
}

module.exports = AncestralMask;
