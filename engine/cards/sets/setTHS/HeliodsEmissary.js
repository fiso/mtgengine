"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeliodsEmissary extends UnimplementedCard {
  constructor(game) {
    super(game, "Heliod's Emissary", "Theros", "THS");
  }
}

module.exports = HeliodsEmissary;
