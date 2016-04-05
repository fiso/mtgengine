"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShieldingPlax extends UnimplementedCard {
  constructor(game) {
    super(game, "Shielding Plax", "Dissension", "DIS");
  }
}

module.exports = ShieldingPlax;
