"use strict";
const Constants = require ("../../../Constants");
const ManaVaultBase = require("../setCED/ManaVault");

class ManaVault extends ManaVaultBase {
  constructor(game) {
    super(game, "Mana Vault", "Masters Edition IV", "ME4");
  }
}

module.exports = ManaVault;
