"use strict";
const Constants = require ("../../../Constants");
const LimDlsVaultBase = require("../setALL/LimDlsVault");

class LimDlsVault extends LimDlsVaultBase {
  constructor(game) {
    super(game, "Lim-Dûl's Vault", "Commander 2013 Edition", "C13");
  }
}

module.exports = LimDlsVault;
