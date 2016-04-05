"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaceofFear extends UnimplementedCard {
  constructor(game) {
    super(game, "Face of Fear", "Odyssey", "ODY");
  }
}

module.exports = FaceofFear;
