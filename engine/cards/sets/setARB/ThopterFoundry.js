"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThopterFoundry extends UnimplementedCard {
  constructor(game) {
    super(game, "Thopter Foundry", "Alara Reborn", "ARB");
  }
}

module.exports = ThopterFoundry;
