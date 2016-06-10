"use strict";
const Constants = require ("../../../Constants");
const BottomlessVaultBase = require("../setFEM/BottomlessVault");

class BottomlessVault extends BottomlessVaultBase {
  constructor (game) {
    super(game, "Bottomless Vault", "Fifth Edition", "5ED");
  }
}

module.exports = BottomlessVault;
