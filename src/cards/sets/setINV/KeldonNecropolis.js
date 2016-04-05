"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonNecropolis extends UnimplementedCard {
  constructor(game) {
    super(game, "Keldon Necropolis", "Invasion", "INV");
  }
}

module.exports = KeldonNecropolis;
