"use strict";
const Constants = require ("../../../Constants");
const LimDulsVaultBase = require("../setC13/LimDulsVault");

class LimDulsVault extends LimDulsVaultBase {
  constructor (game) {
    super(game, "Lim-Dûl's Vault", "Masters Edition", "MED");
  }
}

module.exports = LimDulsVault;
