"use strict";
const Constants = require ("../../../Constants");
const ManaVaultBase = require("../setCED/ManaVault");

class ManaVault extends ManaVaultBase {
  constructor (game) {
    super(game, "Mana Vault", "Revised Edition", "3ED");
  }
}

module.exports = ManaVault;
