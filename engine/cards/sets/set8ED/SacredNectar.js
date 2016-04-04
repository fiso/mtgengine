"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredNectar extends UnimplementedCard {
  constructor(game) {
    super(game, "Sacred Nectar", "Eighth Edition", "8ED");
  }
}

module.exports = SacredNectar;
