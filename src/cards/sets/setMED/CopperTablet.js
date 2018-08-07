"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CopperTablet extends UnimplementedCard {
  constructor (game) {
    super(game, "Copper Tablet", "Masters Edition", "MED");
  }
}

module.exports = CopperTablet;
