"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PriceofGlory extends UnimplementedCard {
  constructor(game) {
    super(game, "Price of Glory", "Odyssey", "ODY");
  }
}

module.exports = PriceofGlory;
