"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavageOffensive extends UnimplementedCard {
  constructor(game) {
    super(game, "Savage Offensive", "Invasion", "INV");
  }
}

module.exports = SavageOffensive;
