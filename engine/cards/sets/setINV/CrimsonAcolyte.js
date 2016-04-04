"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrimsonAcolyte extends UnimplementedCard {
  constructor(game) {
    super(game, "Crimson Acolyte", "Invasion", "INV");
  }
}

module.exports = CrimsonAcolyte;
