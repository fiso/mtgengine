"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeVault extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Vault", "Vintage Masters", "VMA");
  }
}

module.exports = TimeVault;
