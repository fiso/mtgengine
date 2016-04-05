"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HissingIguanar extends UnimplementedCard {
  constructor(game) {
    super(game, "Hissing Iguanar", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = HissingIguanar;
