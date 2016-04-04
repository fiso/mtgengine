"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CompleteDisregard extends UnimplementedCard {
  constructor(game) {
    super(game, "Complete Disregard", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CompleteDisregard;
