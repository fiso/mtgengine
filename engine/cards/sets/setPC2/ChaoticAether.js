"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaoticAether extends UnimplementedCard {
  constructor(game) {
    super(game, "Chaotic Æther", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ChaoticAether;
