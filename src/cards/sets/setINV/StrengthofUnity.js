"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrengthofUnity extends UnimplementedCard {
  constructor(game) {
    super(game, "Strength of Unity", "Invasion", "INV");
  }
}

module.exports = StrengthofUnity;
