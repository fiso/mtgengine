"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DampingMatrix extends UnimplementedCard {
  constructor(game) {
    super(game, "Damping Matrix", "Mirrodin", "MRD");
  }
}

module.exports = DampingMatrix;
