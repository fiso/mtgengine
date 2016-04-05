"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarTax extends UnimplementedCard {
  constructor(game) {
    super(game, "War Tax", "Mercadian Masques", "MMQ");
  }
}

module.exports = WarTax;
