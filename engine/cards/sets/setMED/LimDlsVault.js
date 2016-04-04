"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LimDlsVaultBase = require("../setALL/LimDlsVault.js");

class LimDlsVault extends LimDlsVaultBase {
  constructor(game) {
    super(game, "Lim-Dûl's Vault", "Masters Edition", "MED");
  }
}

module.exports = LimDlsVault;
