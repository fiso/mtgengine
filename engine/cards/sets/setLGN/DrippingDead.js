"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrippingDead extends UnimplementedCard {
  constructor(game) {
    super(game, "Dripping Dead", "Legions", "LGN");
  }
}

module.exports = DrippingDead;
