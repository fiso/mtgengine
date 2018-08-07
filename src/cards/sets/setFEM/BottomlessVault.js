"use strict";
const Constants = require ("../../../Constants");
const BottomlessVaultBase = require("../set5ED/BottomlessVault");

class BottomlessVault extends BottomlessVaultBase {
  constructor (game) {
    super(game, "Bottomless Vault", "Fallen Empires", "FEM");
  }
}

module.exports = BottomlessVault;
