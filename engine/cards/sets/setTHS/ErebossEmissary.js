"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErebossEmissary extends UnimplementedCard {
  constructor(game) {
    super(game, "Erebos's Emissary", "Theros", "THS");
  }
}

module.exports = ErebossEmissary;
