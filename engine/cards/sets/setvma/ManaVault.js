"use strict";
const Constants = require ("../../../Constants");
const ManaVaultBase = require("../setCED/ManaVault");

class ManaVault extends ManaVaultBase {
  constructor(game) {
    super(game, "Mana Vault", "Vintage Masters", "VMA");
  }
}

module.exports = ManaVault;
