"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LuminousGuardian extends UnimplementedCard {
  constructor(game) {
    super(game, "Luminous Guardian", "Odyssey", "ODY");
  }
}

module.exports = LuminousGuardian;
