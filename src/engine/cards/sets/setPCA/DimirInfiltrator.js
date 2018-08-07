"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DimirInfiltrator extends UnimplementedCard {
  constructor (game) {
    super(game, "Dimir Infiltrator", "Planechase Anthology", "PCA");
  }
}

module.exports = DimirInfiltrator;
