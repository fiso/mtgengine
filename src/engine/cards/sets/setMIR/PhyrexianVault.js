"use strict";
const Constants = require ("../../../Constants");
const PhyrexianVaultBase = require("../setDDE/PhyrexianVault");

class PhyrexianVault extends PhyrexianVaultBase {
  constructor (game) {
    super(game, "Phyrexian Vault", "Mirage", "MIR");
  }
}

module.exports = PhyrexianVault;
