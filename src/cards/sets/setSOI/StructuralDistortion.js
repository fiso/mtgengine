"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StructuralDistortion extends UnimplementedCard {
  constructor (game) {
    super(game, "Structural Distortion", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StructuralDistortion;
