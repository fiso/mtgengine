"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChargeAcrosstheAraba extends UnimplementedCard {
  constructor(game) {
    super(game, "Charge Across the Araba", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ChargeAcrosstheAraba;
