"use strict";
const Constants = require ("../../../Constants");
const LimDlsVaultBase = require("../setALL/LimDlsVault");

class LimDlsVault extends LimDlsVaultBase {
  constructor(game) {
    super(game, "Lim-Dûl's Vault", "Masters Edition", "MED");
  }
}

module.exports = LimDlsVault;
