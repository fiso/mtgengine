"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HonorableScout extends UnimplementedCard {
  constructor(game) {
    super(game, "Honorable Scout", "Planeshift", "PLS");
  }
}

module.exports = HonorableScout;
