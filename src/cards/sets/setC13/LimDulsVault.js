"use strict";
const Constants = require ("../../../Constants");
const LimDulsVaultBase = require("../setALL/LimDulsVault");

class LimDulsVault extends LimDulsVaultBase {
  constructor (game) {
    super(game, "Lim-Dûl's Vault", "Commander 2013 Edition", "C13");
  }
}

module.exports = LimDulsVault;
