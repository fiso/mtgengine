"use strict";
const Constants = require ("../../../Constants");
const StormtheVaultVaultofCatlacanBase = require("../setPRIX/StormtheVaultVaultofCatlacan");

class StormtheVaultVaultofCatlacan extends StormtheVaultVaultofCatlacanBase {
  constructor (game) {
    super(game, "Storm the Vault // Vault of Catlacan", "Rivals of Ixalan", "RIX");
  }
}

module.exports = StormtheVaultVaultofCatlacan;
