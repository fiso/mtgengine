"use strict";
const Constants = require ("../../../Constants");
const LimDulsVaultBase = require("../setC13/LimDulsVault");

class LimDulsVault extends LimDulsVaultBase {
  constructor (game) {
    super(game, "Lim-Dûl's Vault", "Alliances", "ALL");
  }
}

module.exports = LimDulsVault;
