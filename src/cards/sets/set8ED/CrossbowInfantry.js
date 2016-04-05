"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrossbowInfantry extends UnimplementedCard {
  constructor(game) {
    super(game, "Crossbow Infantry", "Eighth Edition", "8ED");
  }
}

module.exports = CrossbowInfantry;
