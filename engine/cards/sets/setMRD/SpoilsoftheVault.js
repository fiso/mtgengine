"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpoilsoftheVault extends Card {
  constructor(game) {
    super(game, "Spoils of the Vault", "Mirrodin", "MRD");
  }
}

module.exports = SpoilsoftheVault;
