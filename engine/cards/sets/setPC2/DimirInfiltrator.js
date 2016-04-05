"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DimirInfiltrator extends UnimplementedCard {
  constructor(game) {
    super(game, "Dimir Infiltrator", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = DimirInfiltrator;
