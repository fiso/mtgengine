"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FallingTimber extends UnimplementedCard {
  constructor(game) {
    super(game, "Falling Timber", "Planeshift", "PLS");
  }
}

module.exports = FallingTimber;
