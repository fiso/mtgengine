"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LotusGuardian extends UnimplementedCard {
  constructor(game) {
    super(game, "Lotus Guardian", "Invasion", "INV");
  }
}

module.exports = LotusGuardian;
