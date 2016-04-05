"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SecretPlans extends UnimplementedCard {
  constructor(game) {
    super(game, "Secret Plans", "Khans of Tarkir", "KTK");
  }
}

module.exports = SecretPlans;
