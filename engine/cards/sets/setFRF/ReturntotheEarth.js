"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReturntotheEarth extends UnimplementedCard {
  constructor(game) {
    super(game, "Return to the Earth", "Fate Reforged", "FRF");
  }
}

module.exports = ReturntotheEarth;
