"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RampantElephant extends UnimplementedCard {
  constructor(game) {
    super(game, "Rampant Elephant", "Invasion", "INV");
  }
}

module.exports = RampantElephant;
