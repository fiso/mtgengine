"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpoilsoftheVault extends UnimplementedCard {
  constructor(game) {
    super(game, "Spoils of the Vault", "Mirrodin", "MRD");
  }
}

module.exports = SpoilsoftheVault;
