"use strict";
const Constants = require ("../../../Constants");
const PhyrexianVaultBase = require("../setDDE/PhyrexianVault");

class PhyrexianVault extends PhyrexianVaultBase {
  constructor (game) {
    super(game, "Phyrexian Vault", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PhyrexianVault;
